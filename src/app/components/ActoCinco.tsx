"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function ActoCinco() {
  const container = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: container.current,
          start: "top top",
          end: "+=2200",
          scrub: 0.8,
          pin: true,
          anticipatePin: 1,
        },
      });

      tl.from(".linea-1", { opacity: 0, y: 50, duration: 1, ease: "power3.out" })
        .to(".linea-1", { opacity: 0.25, y: -10, duration: 0.8, ease: "power2.in" })

        .from(".linea-2", { opacity: 0, y: 50, duration: 1, ease: "power3.out" })
        .to(".linea-2", { opacity: 0.25, y: -10, duration: 0.8, ease: "power2.in" })

        .from(".linea-3", { opacity: 0, y: 50, scale: 0.95, duration: 1.2, ease: "power3.out" })
        .to(".linea-3", { scale: 1.02, duration: 0.5 })
        .to(".linea-3", { scale: 1, duration: 0.3 })

        .from(".cta-final", {
          opacity: 0,
          y: 30,
          scale: 0.9,
          duration: 1,
          ease: "back.out(1.5)"
        });
    }, container);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={container}
      className="relative h-screen bg-black overflow-hidden will-change-transform"
    >
      {/* Grano */}
      <div
        className="absolute inset-0 opacity-[0.02] pointer-events-none z-50"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
        }}
      />

      {/* Vignette */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_0%,rgba(0,0,0,0.5)_100%)]" />

      <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-6">
        <div className="space-y-8 sm:space-y-12 md:space-y-16">
          <p className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-semibold text-white linea-1 opacity-0 tracking-tight">
            No es cine.
          </p>

          <p className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-semibold text-white linea-2 opacity-0 tracking-tight">
            Es una línea de negocio.
          </p>

          <p className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-bold text-white linea-3 opacity-0 tracking-tight">
            Y yo sé cómo ejecutarla.
          </p>
        </div>

        <a
          href="mailto:alan@sujeto10.com"
          className="cta-final opacity-0 mt-12 sm:mt-16 md:mt-24 group relative"
          data-cursor-hover
        >
          {/* Outer glow */}
          <div className="absolute -inset-4 bg-white/10 rounded-full blur-2xl group-hover:bg-white/20 transition-all duration-500" />
          {/* Inner glow */}
          <div className="absolute -inset-1 bg-white/30 rounded-full blur-md group-hover:bg-white/40 transition-all duration-300" />
          <span className="relative block text-base sm:text-lg md:text-xl px-8 sm:px-10 md:px-14 py-3 sm:py-4 md:py-5 bg-white text-black rounded-full font-semibold tracking-wide group-hover:bg-neutral-100 transition-colors duration-300">
            Hablemos
          </span>
        </a>

        {/* Footer sutil */}
        <div className="absolute bottom-8 text-white/20 text-sm font-light tracking-widest">
          GLOBALIA — 2025
        </div>
      </div>
    </section>
  );
}
