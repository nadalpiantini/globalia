"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function ActoDos() {
  const container = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: container.current,
          start: "top top",
          end: "+=2600",
          scrub: 0.8,
          pin: true,
          anticipatePin: 1,
        },
      });

      tl.from(".isr", { scale: 2.5, opacity: 0, duration: 1.5, ease: "power2.out" })
        .to(".isr", {
          opacity: 0,
          filter: "blur(30px)",
          scale: 1.1,
          duration: 1.5,
          ease: "power2.in"
        })
        .from(".desaparece", { opacity: 0, y: 20, duration: 0.8, ease: "power2.out" })
        .to(".desaparece", { opacity: 0, y: -20, duration: 0.6, ease: "power2.in" })
        .from(".art34", {
          scale: 0.3,
          opacity: 0,
          duration: 1.2,
          ease: "back.out(1.2)"
        })
        .to(".art34", { scale: 1, opacity: 1 })
        .from(".final-text", { opacity: 0, y: 30, duration: 1, ease: "power3.out" });
    }, container);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={container} className="relative h-screen bg-black overflow-hidden will-change-transform">
      {/* Grano sutil */}
      <div
        className="absolute inset-0 opacity-[0.02] pointer-events-none z-50"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
        }}
      />

      <div className="relative w-full h-full flex items-center justify-center">
        {/* ISR */}
        <div className="absolute text-[20vw] md:text-[18vw] font-black isr text-white tracking-tighter">
          ISR
        </div>

        {/* Desaparece */}
        <div className="absolute text-3xl md:text-4xl desaparece opacity-0 text-white/60 font-light tracking-widest uppercase">
          Desaparece.
        </div>

        {/* ART. 34 */}
        <div className="absolute text-[16vw] md:text-[14vw] font-black art34 opacity-0 text-white tracking-tighter">
          ART. 34
        </div>

        {/* Texto final */}
        <div className="absolute bottom-20 md:bottom-32 text-2xl md:text-3xl final-text opacity-0 text-center px-6">
          <p className="text-white/70 font-light">
            Un impuesto puede evaporarse.
          </p>
          <p className="mt-3 text-white font-semibold">
            O puede quedarse.
          </p>
        </div>
      </div>
    </section>
  );
}
