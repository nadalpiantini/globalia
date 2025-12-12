"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function MapFlight() {
  const wrap = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: wrap.current,
          start: "top top",
          end: "+=2200",
          scrub: true,
          pin: true,
        },
      });

      // Animate city labels appearing
      tl.fromTo(
        ".city-label",
        { opacity: 0, y: 8 },
        { opacity: 1, y: 0, stagger: 0.2 }
      )
        // Animate route line drawing
        .fromTo(
          ".route",
          { strokeDashoffset: 900 },
          { strokeDashoffset: 0, duration: 2 },
          "<"
        )
        // Simple plane animation along x-axis (simplified, no MotionPath)
        .fromTo(
          ".plane",
          { x: 0, y: 0 },
          { x: 690, y: 250, duration: 3, ease: "power1.inOut" },
          "<0.5"
        )
        // Fade in explanation
        .fromTo(".explain", { opacity: 0 }, { opacity: 1, duration: 1 }, "-=1");
    }, wrap);

    return () => ctx.revert();
  }, []);

  return (
    <div
      id="cap-5"
      ref={wrap}
      className="relative min-h-screen flex items-center justify-center px-6 py-28"
    >
      <div className="collage-paper w-full max-w-6xl p-6 md:p-10 overflow-hidden">
        <div className="flex items-center gap-3">
          <span className="stamp jitter">Mapa operativo · Madrid ↔ RD</span>
          <div className="hrline" />
        </div>

        <div className="mt-6 grid md:grid-cols-2 gap-6">
          <div className="text-white/85 leading-relaxed">
            <p className="text-lg">
              <b>Madrid</b> = atracción y estructuración de proyectos
              (coproducciones, empaquetado, garantías).
              <br />
              <b>RD</b> = ejecución: producción, crew, infraestructura, hoteles
              y cumplimiento.
            </p>
            <p className="mt-4 text-white/70">
              El vuelo representa cómo un proyecto entra por Europa, se
              estructura en Madrid y aterriza en RD para ejecutarse usando
              infraestructura + incentivos.
            </p>
            <div className="mt-5 text-xs text-white/60">
              (Avión estilizado Air Europa - asset personalizable)
            </div>
          </div>

          <div className="relative">
            <svg viewBox="0 0 1000 520" className="w-full h-auto">
              {/* Abstract map background */}
              <rect
                x="0"
                y="0"
                width="1000"
                height="520"
                fill="rgba(255,255,255,.03)"
                rx="28"
              />
              <path
                d="M70 360 C 220 260, 290 250, 420 240 C 560 230, 620 180, 740 160 C 860 140, 910 120, 940 90"
                stroke="rgba(255,255,255,.10)"
                strokeWidth="18"
                fill="none"
                strokeLinecap="round"
              />
              <path
                d="M120 420 C 260 360, 360 320, 480 300 C 620 270, 720 240, 860 180"
                stroke="rgba(255,255,255,.08)"
                strokeWidth="12"
                fill="none"
                strokeLinecap="round"
              />

              {/* Main route path */}
              <path
                className="routePath"
                d="M170 130 C 330 70, 450 90, 560 170 C 700 270, 760 330, 860 380"
                fill="none"
              />
              <path
                className="route"
                d="M170 130 C 330 70, 450 90, 560 170 C 700 270, 760 330, 860 380"
                stroke="rgba(255,255,255,.55)"
                strokeWidth="4"
                fill="none"
                strokeLinecap="round"
                strokeDasharray="900"
                strokeDashoffset="900"
              />

              {/* City markers */}
              <circle cx="170" cy="130" r="10" fill="white" opacity="0.9" />
              <text
                x="190"
                y="136"
                className="city-label"
                fill="white"
                opacity="0"
                fontSize="18"
              >
                Madrid (Hub)
              </text>

              <circle cx="860" cy="380" r="10" fill="white" opacity="0.9" />
              <text
                x="620"
                y="418"
                className="city-label"
                fill="white"
                opacity="0"
                fontSize="18"
              >
                Rep. Dominicana (Ejecución)
              </text>

              {/* Plane (simple triangle placeholder) */}
              <g className="plane" transform="translate(170 130)">
                <path
                  d="M0 0 L22 7 L0 14 L5 7 Z"
                  fill="white"
                  opacity="0.95"
                />
              </g>
            </svg>

            <div className="explain opacity-0 mt-4 text-sm text-white/70">
              En el capítulo final, este vuelo se conecta a: hoteles
              (ocupación), aerolínea (movilidad) y contenido (marca).
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
