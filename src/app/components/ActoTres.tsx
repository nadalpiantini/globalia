"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const nodes = [
  { id: "espana", label: "España", x: -180, y: -120 },
  { id: "rd", label: "Rep. Dominicana", x: 180, y: 120 },
  { id: "contenido", label: "Contenido", x: 0, y: -160 },
  { id: "turismo", label: "Turismo", x: -160, y: 140 },
  { id: "marca", label: "Marca", x: 160, y: -140 },
];

export default function ActoTres() {
  const container = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: container.current,
          start: "top top",
          end: "+=3200",
          scrub: 0.8,
          pin: true,
          anticipatePin: 1,
        },
      });

      // Aparecen los nodos
      tl.from(".node", {
        opacity: 0,
        scale: 0,
        stagger: 0.15,
        duration: 0.8,
        ease: "back.out(1.5)",
      })
      // Se mueven a sus posiciones
      .to(".node-espana", { x: -180, y: -120, ease: "power2.inOut" }, "move")
      .to(".node-rd", { x: 180, y: 120, ease: "power2.inOut" }, "move")
      .to(".node-contenido", { y: -160, ease: "power2.inOut" }, "move")
      .to(".node-turismo", { x: -160, y: 140, ease: "power2.inOut" }, "move")
      .to(".node-marca", { x: 160, y: -140, ease: "power2.inOut" }, "move")
      // Aparecen las conexiones
      .to(".connection-line", {
        strokeDashoffset: 0,
        opacity: 0.4,
        duration: 1,
        stagger: 0.1,
        ease: "power2.inOut"
      })
      // Pulso en el centro
      .to(".center-pulse", { opacity: 0.6, scale: 1.2, duration: 0.5 })
      .to(".center-pulse", { opacity: 0.3, scale: 1, duration: 0.5 })
      // Texto final
      .from(".system-text", { opacity: 0, y: 30, duration: 1, ease: "power3.out" });
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

      <div className="relative w-full h-full flex items-center justify-center">
        {/* SVG CONEXIONES */}
        <svg
          className="absolute w-[600px] h-[600px] md:w-[800px] md:h-[800px]"
          viewBox="-400 -400 800 800"
        >
          {/* Líneas de conexión */}
          {nodes.map((node) => (
            <line
              key={`line-${node.id}`}
              className="connection-line"
              x1="0"
              y1="0"
              x2={node.x}
              y2={node.y}
              stroke="white"
              strokeWidth="1"
              opacity="0"
              strokeDasharray="300"
              strokeDashoffset="300"
            />
          ))}

          {/* Centro con pulso */}
          <circle
            className="center-pulse"
            cx="0"
            cy="0"
            r="8"
            fill="white"
            opacity="0.3"
          />
        </svg>

        {/* NODOS */}
        <div className="absolute flex flex-col items-center gap-4">
          {nodes.map((node) => (
            <div
              key={node.id}
              className={`node node-${node.id} absolute flex items-center justify-center`}
            >
              <div className="relative">
                <div className="absolute -inset-3 bg-white/10 rounded-full blur-md" />
                <span className={`relative text-lg md:text-xl font-medium text-white/90 whitespace-nowrap px-4 py-2 ${
                  node.id === 'contenido' ? 'text-2xl md:text-3xl font-bold text-white' : ''
                }`}>
                  {node.label}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* TEXTO FINAL */}
        <div className="absolute bottom-16 md:bottom-24 text-center system-text opacity-0 px-6">
          <p className="text-3xl md:text-4xl font-semibold text-white">
            No es una productora.
          </p>
          <p className="mt-3 text-2xl md:text-3xl text-white/60 font-light">
            Es un sistema operativo.
          </p>
        </div>
      </div>
    </section>
  );
}
