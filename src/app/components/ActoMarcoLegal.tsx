"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function ActoMarcoLegal() {
  const containerRef = useRef<HTMLElement>(null);
  const isrRef = useRef<HTMLDivElement>(null);
  const disappearsRef = useRef<HTMLDivElement>(null);
  const art34Ref = useRef<HTMLDivElement>(null);
  const conclusionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    const isr = isrRef.current;
    const disappears = disappearsRef.current;
    const art34 = art34Ref.current;
    const conclusion = conclusionRef.current;

    if (!container || !isr || !disappears || !art34 || !conclusion) return;

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: container,
          start: "top top",
          end: "+=2600",
          scrub: 0.8,
          pin: true,
          anticipatePin: 1,
        },
      });

      // Phase 1: ISR enters dramatically (scale from large to normal)
      tl.fromTo(
        isr,
        {
          scale: 2.5,
          opacity: 0,
        },
        {
          scale: 1,
          opacity: 1,
          duration: 1.2,
          ease: "power2.out",
        }
      );

      // Hold ISR for a moment
      tl.to({}, { duration: 0.5 });

      // Phase 2: ISR blurs and fades out (evaporation effect)
      tl.to(isr, {
        filter: "blur(30px)",
        opacity: 0,
        scale: 0.8,
        duration: 1.5,
        ease: "power2.in",
      });

      // "Desaparece" text rises and fades
      tl.fromTo(
        disappears,
        {
          y: 20,
          opacity: 0,
        },
        {
          y: -30,
          opacity: 1,
          duration: 0.8,
          ease: "power2.out",
        },
        "-=0.8"
      ).to(
        disappears,
        {
          y: -60,
          opacity: 0,
          duration: 0.6,
          ease: "power2.in",
        },
        "+=0.3"
      );

      // Phase 3: Art.34 bounces in with dramatic effect
      tl.fromTo(
        art34,
        {
          scale: 0,
          opacity: 0,
          y: 100,
        },
        {
          scale: 1,
          opacity: 1,
          y: 0,
          duration: 1.2,
          ease: "back.out(1.7)",
        }
      );

      // Phase 4: Conclusion text fades in
      tl.fromTo(
        conclusion,
        {
          y: 40,
          opacity: 0,
        },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          ease: "power2.out",
        },
        "-=0.4"
      );

      // Hold for reading
      tl.to({}, { duration: 0.8 });

      // Phase 5: Everything prepares to exit
      tl.to([art34, conclusion], {
        opacity: 0.8,
        scale: 0.98,
        duration: 0.5,
        ease: "power2.in",
      });
    }, container);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={containerRef}
      id="marco-legal"
      className="relative h-screen w-full flex items-center justify-center overflow-hidden"
      style={{ willChange: "transform" }}
    >
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-red-950/20 to-black" />

      {/* Vignette */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_0%,rgba(0,0,0,0.6)_100%)] pointer-events-none" />

      {/* Film grain */}
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none z-50"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
        }}
      />

      {/* Content */}
      <div className="relative z-10 text-center px-6">
        {/* ISR - The Tax */}
        <div
          ref={isrRef}
          className="text-7xl md:text-[12rem] lg:text-[16rem] font-black tracking-tighter text-red-500/90"
          style={{ filter: "blur(0px)" }}
        >
          ISR
        </div>

        {/* "Desaparece" floating text */}
        <div
          ref={disappearsRef}
          className="absolute inset-0 flex items-center justify-center opacity-0"
        >
          <span className="text-2xl md:text-4xl font-light text-white/60 italic">
            ...desaparece
          </span>
        </div>

        {/* Art. 34 - The Solution */}
        <div
          ref={art34Ref}
          className="absolute inset-0 flex items-center justify-center opacity-0"
        >
          <div className="text-center">
            <div className="text-6xl md:text-[10rem] lg:text-[14rem] font-black tracking-tighter text-emerald-400">
              ART. 34
            </div>
            <div className="mt-4 text-xl md:text-2xl text-emerald-300/80 font-medium">
              Ley 108-10
            </div>
          </div>
        </div>

        {/* Conclusion */}
        <div
          ref={conclusionRef}
          className="absolute inset-x-0 bottom-[15%] flex items-center justify-center opacity-0 px-6"
        >
          <p className="text-lg md:text-2xl lg:text-3xl font-light text-white/80 max-w-3xl leading-relaxed">
            Un impuesto puede{" "}
            <span className="text-red-400 line-through opacity-60">
              evaporarse
            </span>
            . O puede{" "}
            <span className="text-emerald-400 font-semibold">quedarse</span>.
          </p>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/40">
        <span className="text-xs uppercase tracking-widest">Marco Legal</span>
        <div className="w-px h-8 bg-gradient-to-b from-white/40 to-transparent animate-pulse" />
      </div>
    </section>
  );
}
