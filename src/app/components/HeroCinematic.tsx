"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Particles from "./Particles";
import { useHydrated } from "../hooks/useHydrated";

gsap.registerPlugin(ScrollTrigger);

export default function HeroCinematic() {
  const containerRef = useRef<HTMLElement>(null);
  const wordsRef = useRef<HTMLDivElement>(null);
  const manifestoRef = useRef<HTMLDivElement>(null);
  const infraRef = useRef<HTMLDivElement>(null);
  const hydrated = useHydrated();

  useEffect(() => {
    // Wait for hydration before initializing GSAP to avoid DOM conflicts
    if (!hydrated) return;

    const container = containerRef.current;
    const words = wordsRef.current;
    const manifesto = manifestoRef.current;
    const infra = infraRef.current;
    if (!container || !words || !manifesto || !infra) return;

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: container,
          start: "top top",
          end: "+=2400",
          scrub: 0.8,
          pin: true,
          pinType: "transform", // Use CSS transforms instead of DOM manipulation
          anticipatePin: 1,
        },
      });

      // Phase 1: Words cascade in
      tl.fromTo(
        ".word-cine",
        { opacity: 0, y: 80, scale: 0.9 },
        { opacity: 1, y: 0, scale: 1, duration: 1, ease: "power2.out" }
      )
        .fromTo(
          ".word-turismo",
          { opacity: 0, y: 80, scale: 0.9 },
          { opacity: 1, y: 0, scale: 1, duration: 1, ease: "power2.out" }
        )
        .fromTo(
          ".word-marca",
          { opacity: 0, y: 80, scale: 0.9 },
          { opacity: 1, y: 0, scale: 1, duration: 1, ease: "power2.out" }
        );

      // Phase 2: Words fade to ghost, manifesto appears
      tl.to(words, {
        opacity: 0.15,
        scale: 0.95,
        duration: 0.8,
        ease: "power2.in",
      }).fromTo(
        manifesto,
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 1, ease: "power3.out" },
        "-=0.4"
      );

      // Phase 3: Manifesto fades, infrastructure text appears
      tl.to(manifesto, {
        opacity: 0,
        y: -20,
        duration: 0.6,
        ease: "power2.in",
      }).fromTo(
        infra,
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 1, ease: "power3.out" },
        "-=0.3"
      );

      // Phase 4: Everything fades out for transition
      tl.to([words, infra], {
        opacity: 0,
        scale: 0.9,
        duration: 0.8,
        ease: "power2.in",
      });
    }, container);

    return () => ctx.revert();
  }, [hydrated]);

  return (
    <section
      ref={containerRef}
      id="hero"
      className="relative h-screen w-full flex items-center justify-center overflow-hidden"
      style={{ willChange: "transform" }}
    >
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-slate-950 via-blue-950/80 to-black" />

      {/* Particles */}
      <Particles count={50} />

      {/* Vignette */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_0%,rgba(0,0,0,0.4)_100%)] pointer-events-none" />

      {/* Film grain */}
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none z-50"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
        }}
      />

      {/* Content */}
      <div className="relative z-10 text-center px-6">
        {/* Word cascade */}
        <div ref={wordsRef} className="space-y-2 md:space-y-4">
          <div className="word-cine text-5xl md:text-8xl lg:text-9xl font-bold tracking-tighter text-white">
            CINE
          </div>
          <div className="word-turismo text-5xl md:text-8xl lg:text-9xl font-bold tracking-tighter text-white/90">
            TURISMO
          </div>
          <div className="word-marca text-5xl md:text-8xl lg:text-9xl font-bold tracking-tighter text-white/80">
            MARCA
          </div>
        </div>

        {/* Manifesto text */}
        <div
          ref={manifestoRef}
          className="absolute inset-0 flex items-center justify-center opacity-0"
        >
          <p className="text-xl md:text-3xl lg:text-4xl font-light text-white/90 max-w-3xl leading-relaxed">
            Tres industrias que convergen en{" "}
            <span className="font-semibold text-white">un sistema único</span>
          </p>
        </div>

        {/* Infrastructure text */}
        <div
          ref={infraRef}
          className="absolute inset-0 flex items-center justify-center opacity-0"
        >
          <div className="text-center">
            <p className="text-lg md:text-2xl text-white/60 mb-4">
              No como contenido.
            </p>
            <p className="text-3xl md:text-5xl lg:text-6xl font-bold text-white">
              Como infraestructura.
            </p>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/40">
        <span className="text-xs uppercase tracking-widest">Scroll</span>
        <div className="w-px h-8 bg-gradient-to-b from-white/40 to-transparent animate-pulse" />
      </div>
    </section>
  );
}
