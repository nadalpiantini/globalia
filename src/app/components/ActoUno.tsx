"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Particles from "./Particles";

gsap.registerPlugin(ScrollTrigger);

export default function ActoUno() {
  const container = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: container.current,
          start: "top top",
          end: "+=2800",
          scrub: 0.8,
          pin: true,
          anticipatePin: 1,
        },
      });

      tl.fromTo(".word-cine",
        { opacity: 0, y: 80, scale: 0.9 },
        { opacity: 1, y: 0, scale: 1, duration: 1, ease: "power2.out" }
      )
        .fromTo(".word-turismo",
          { opacity: 0, y: 80, scale: 0.9 },
          { opacity: 1, y: 0, scale: 1, duration: 1, ease: "power2.out" }
        )
        .fromTo(".word-marca",
          { opacity: 0, y: 80, scale: 0.9 },
          { opacity: 1, y: 0, scale: 1, duration: 1, ease: "power2.out" }
        )
        .to(".manifesto", { opacity: 0, scale: 0.95, duration: 0.8, ease: "power2.in" })
        .fromTo(".infra",
          { opacity: 0, y: 30 },
          { opacity: 1, y: 0, duration: 1, ease: "power3.out" }
        );
    }, container);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={container} className="relative h-screen w-full overflow-hidden bg-black will-change-transform">
      {/* PARTÍCULAS FLOTANTES */}
      <Particles count={40} />

      {/* FONDO CINEMATOGRÁFICO */}
      <div className="absolute inset-0">
        {/* Gradiente base */}
        <div className="absolute inset-0 bg-gradient-to-b from-slate-950 via-blue-950/80 to-black" />

        {/* Overlay de grano sutil */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
          }}
        />

        {/* Vignette */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_0%,rgba(0,0,0,0.4)_100%)]" />
      </div>

      {/* VIDEO - descomentar cuando tengas el archivo */}
      {/*
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover opacity-50"
        src="/video-mar.mp4"
      />
      */}

      {/* TEXTO */}
      <div className="relative z-10 h-screen flex items-center justify-center">
        <div className="text-center manifesto">
          <div className="space-y-6 md:space-y-8">
            <div className="word-cine text-[18vw] sm:text-[15vw] md:text-[12vw] font-black tracking-tighter leading-none opacity-0">
              CINE
            </div>
            <div className="word-turismo text-[18vw] sm:text-[15vw] md:text-[12vw] font-black tracking-tighter leading-none opacity-0">
              TURISMO
            </div>
            <div className="word-marca text-[18vw] sm:text-[15vw] md:text-[12vw] font-black tracking-tighter leading-none opacity-0">
              MARCA
            </div>
          </div>
        </div>

        <div className="absolute text-center infra opacity-0 px-4 sm:px-6">
          <p className="text-2xl sm:text-3xl md:text-5xl font-light tracking-wide text-white/90">
            No como contenido.
          </p>
          <p className="mt-3 sm:mt-4 md:mt-6 text-2xl sm:text-3xl md:text-5xl font-semibold tracking-wide">
            Como infraestructura.
          </p>
        </div>
      </div>
    </section>
  );
}
