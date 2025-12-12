"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const panels = [
  {
    num: "01",
    title: "PELÍCULAS",
    subtitle: "Historias que viven en destinos reales",
    gradient: "from-amber-950/20 via-black to-black"
  },
  {
    num: "02",
    title: "DOCUMENTALES",
    subtitle: "Narrativas reales con alcance global",
    gradient: "from-black via-emerald-950/20 to-black"
  },
  {
    num: "03",
    title: "SERIES",
    subtitle: "Lifestyle turístico como relato continuo",
    gradient: "from-black via-blue-950/20 to-black"
  },
  {
    num: "04",
    title: "REALITY",
    subtitle: "Competencia, experiencia, entretenimiento",
    gradient: "from-rose-950/20 via-black to-black"
  },
  {
    num: "05",
    title: "BRANDED",
    subtitle: "Marca contada como cine",
    gradient: "from-black via-violet-950/20 to-black"
  },
];

export default function ActoCuatro() {
  const container = useRef<HTMLDivElement>(null);
  const track = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const panelElements = gsap.utils.toArray<HTMLElement>(".panel");
      const totalWidth = panelElements.length * window.innerWidth;

      gsap.to(track.current, {
        x: () => -(totalWidth - window.innerWidth),
        ease: "none",
        scrollTrigger: {
          trigger: container.current,
          start: "top top",
          end: () => `+=${totalWidth * 0.85}`,
          scrub: 1.2,
          pin: true,
          anticipatePin: 1,
        },
      });

      // Animación de entrada para cada panel
      panelElements.forEach((panel) => {
        gsap.from(panel.querySelector(".panel-content"), {
          opacity: 0,
          y: 50,
          scrollTrigger: {
            trigger: panel,
            containerAnimation: gsap.to(track.current, {
              x: () => -(totalWidth - window.innerWidth),
            }),
            start: "left center",
            end: "center center",
            scrub: true,
          },
        });
      });
    }, container);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={container}
      className="relative h-screen w-full overflow-hidden bg-black will-change-transform"
    >
      {/* Grano */}
      <div
        className="absolute inset-0 opacity-[0.02] pointer-events-none z-50"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
        }}
      />

      <div
        ref={track}
        className="flex h-full will-change-transform"
        style={{ width: `${panels.length * 100}vw` }}
      >
        {panels.map((panel, index) => (
          <div
            key={panel.num}
            className={`panel relative w-screen h-full flex-shrink-0 flex items-center justify-center bg-gradient-to-br ${panel.gradient}`}
          >
            {/* Línea divisoria */}
            {index > 0 && (
              <div className="absolute left-0 top-1/2 -translate-y-1/2 w-px h-1/2 bg-gradient-to-b from-transparent via-white/20 to-transparent" />
            )}

            <div className="panel-content text-center px-10 relative">
              {/* Número */}
              <span className="absolute -top-20 left-1/2 -translate-x-1/2 text-[20vw] md:text-[15vw] font-black text-white/[0.03] tracking-tighter pointer-events-none">
                {panel.num}
              </span>

              {/* Número pequeño */}
              <span className="text-sm md:text-base font-mono text-white/40 tracking-widest mb-4 block">
                {panel.num}
              </span>

              {/* Título */}
              <h2 className="text-[12vw] md:text-[8vw] font-black tracking-tighter text-white leading-none">
                {panel.title}
              </h2>

              {/* Subtítulo */}
              <p className="mt-6 md:mt-8 text-xl md:text-2xl text-white/50 max-w-md mx-auto font-light">
                {panel.subtitle}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Indicador de scroll */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex items-center gap-2 text-white/30 text-sm">
        <span>Scroll</span>
        <svg className="w-4 h-4 animate-pulse" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
        </svg>
      </div>
    </section>
  );
}
