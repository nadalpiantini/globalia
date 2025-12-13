"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

interface ChapterProps {
  id: string;
  kicker: string;
  title: string;
  children: React.ReactNode;
  /** Enable scroll-pinning for immersive sections */
  pinned?: boolean;
  /** Scroll distance when pinned (default: 1800) */
  scrollDistance?: number;
  /** Show film grain overlay */
  filmGrain?: boolean;
}

export default function Chapter({
  id,
  kicker,
  title,
  children,
  pinned = false,
  scrollDistance = 1800,
  filmGrain = false,
}: ChapterProps) {
  const sectionRef = useRef<HTMLElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    const content = contentRef.current;
    if (!section || !content) return;

    const ctx = gsap.context(() => {
      if (pinned) {
        // Immersive pinned animation with multiple phases
        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: section,
            start: "top top",
            end: `+=${scrollDistance}`,
            scrub: 0.8,
            pin: true,
            anticipatePin: 1,
          },
        });

        // Phase 1: Content enters with scale and opacity
        tl.fromTo(
          content,
          {
            y: 100,
            opacity: 0,
            scale: 0.9,
          },
          {
            y: 0,
            opacity: 1,
            scale: 1,
            duration: 1,
            ease: "power3.out",
          }
        );

        // Animate kicker and title with stagger
        const kicker = content.querySelector(".stamp");
        const titleEl = content.querySelector("h2");
        const contentBody = content.querySelector(".chapter-body");

        if (kicker && titleEl) {
          tl.fromTo(
            kicker,
            { x: -30, opacity: 0 },
            { x: 0, opacity: 1, duration: 0.5, ease: "power2.out" },
            "-=0.6"
          ).fromTo(
            titleEl,
            { y: 20, opacity: 0 },
            { y: 0, opacity: 1, duration: 0.6, ease: "power2.out" },
            "-=0.3"
          );
        }

        if (contentBody) {
          tl.fromTo(
            contentBody,
            { y: 30, opacity: 0 },
            { y: 0, opacity: 1, duration: 0.8, ease: "power2.out" },
            "-=0.2"
          );
        }

        // Phase 2: Hold for reading
        tl.to({}, { duration: 0.5 });

        // Phase 3: Content prepares for exit (subtle)
        tl.to(content, {
          scale: 0.98,
          opacity: 0.9,
          duration: 0.3,
          ease: "power2.in",
        });
      } else {
        // Standard fade-in animation (non-pinned)
        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: section,
            start: "top 80%",
            end: "top 20%",
            scrub: 0.5,
          },
        });

        tl.fromTo(
          content,
          {
            y: 60,
            opacity: 0,
            scale: 0.95,
          },
          {
            y: 0,
            opacity: 1,
            scale: 1,
            duration: 1,
            ease: "power2.out",
          }
        );

        // Parallax effect on the stamp
        const stamp = content.querySelector(".stamp");
        if (stamp) {
          gsap.to(stamp, {
            scrollTrigger: {
              trigger: section,
              start: "top bottom",
              end: "bottom top",
              scrub: 1,
            },
            y: -20,
            rotation: 2,
          });
        }
      }
    }, section);

    return () => ctx.revert();
  }, [pinned, scrollDistance]);

  return (
    <section
      ref={sectionRef}
      id={id}
      className="relative min-h-screen flex items-center justify-center px-6 py-28"
      style={{ willChange: pinned ? "transform" : "auto" }}
    >
      {/* Film grain overlay (optional) */}
      {filmGrain && (
        <div
          className="absolute inset-0 opacity-[0.03] pointer-events-none z-50"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
          }}
        />
      )}

      <div ref={contentRef} className="relative z-10 w-full max-w-6xl">
        <div className="collage-paper p-8 md:p-12 hover:shadow-2xl transition-shadow duration-500">
          <div className="flex items-center gap-3">
            <span className="stamp jitter">{kicker}</span>
            <div className="hrline flex-1" />
          </div>
          <h2 className="mt-6 text-3xl md:text-5xl font-semibold tracking-tight leading-tight">
            {title}
          </h2>
          <div className="chapter-body mt-8 text-white/85 text-base md:text-lg leading-relaxed">
            {children}
          </div>
        </div>
      </div>
    </section>
  );
}
