"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useHydrated } from "../hooks/useHydrated";

gsap.registerPlugin(ScrollTrigger);

const nodes = [
  { id: "madrid", label: "Madrid", color: "#3b82f6", x: 50, y: 20 },
  { id: "rd", label: "RD", color: "#22c55e", x: 80, y: 50 },
  { id: "contenido", label: "Contenido", color: "#f59e0b", x: 50, y: 80 },
  { id: "turismo", label: "Turismo", color: "#ec4899", x: 20, y: 50 },
  { id: "marca", label: "Marca", color: "#8b5cf6", x: 50, y: 50 },
];

const connections = [
  { from: "madrid", to: "marca" },
  { from: "rd", to: "marca" },
  { from: "contenido", to: "marca" },
  { from: "turismo", to: "marca" },
  { from: "madrid", to: "rd" },
  { from: "rd", to: "contenido" },
  { from: "contenido", to: "turismo" },
  { from: "turismo", to: "madrid" },
];

export default function ActoSistema() {
  const containerRef = useRef<HTMLElement>(null);
  const svgRef = useRef<SVGSVGElement>(null);
  const titleRef = useRef<HTMLDivElement>(null);
  const conclusionRef = useRef<HTMLDivElement>(null);
  const hydrated = useHydrated();

  useEffect(() => {
    // Wait for hydration before initializing GSAP to avoid DOM conflicts
    if (!hydrated) return;

    const container = containerRef.current;
    const svg = svgRef.current;
    const title = titleRef.current;
    const conclusion = conclusionRef.current;

    if (!container || !svg || !title || !conclusion) return;

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: container,
          start: "top top",
          end: "+=2800",
          scrub: 0.8,
          pin: true,
          pinType: "transform", // Use CSS transforms instead of DOM manipulation
          anticipatePin: 1,
        },
      });

      // Phase 1: Title appears
      tl.fromTo(
        title,
        { y: 50, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8, ease: "power2.out" }
      );

      // Phase 2: Center node (Marca) appears first with pulse
      const centerNode = svg.querySelector("#node-marca");
      if (centerNode) {
        tl.fromTo(
          centerNode,
          { scale: 0, opacity: 0 },
          {
            scale: 1,
            opacity: 1,
            duration: 0.8,
            ease: "back.out(1.7)",
          }
        );
      }

      // Phase 3: Outer nodes appear with stagger
      const outerNodes = ["madrid", "rd", "contenido", "turismo"].map(
        (id) => svg.querySelector(`#node-${id}`)
      );
      tl.fromTo(
        outerNodes,
        { scale: 0, opacity: 0 },
        {
          scale: 1,
          opacity: 1,
          duration: 0.6,
          ease: "back.out(1.4)",
          stagger: 0.15,
        },
        "-=0.3"
      );

      // Phase 4: Connections draw in with stroke-dash animation
      const lines = svg.querySelectorAll(".connection-line");
      lines.forEach((line) => {
        const length = (line as SVGPathElement).getTotalLength?.() || 200;
        gsap.set(line, {
          strokeDasharray: length,
          strokeDashoffset: length,
        });
      });

      tl.to(
        lines,
        {
          strokeDashoffset: 0,
          duration: 1.5,
          ease: "power2.inOut",
          stagger: 0.1,
        },
        "-=0.2"
      );

      // Phase 5: Pulse animation on center node
      tl.to(
        centerNode,
        {
          scale: 1.1,
          duration: 0.3,
          ease: "power2.out",
          yoyo: true,
          repeat: 1,
        }
      );

      // Phase 6: Conclusion text appears
      tl.fromTo(
        conclusion,
        { y: 30, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8, ease: "power2.out" }
      );

      // Hold for reading
      tl.to({}, { duration: 0.6 });

      // Phase 7: Prepare for exit
      tl.to([svg, title, conclusion], {
        opacity: 0.9,
        scale: 0.98,
        duration: 0.4,
        ease: "power2.in",
      });
    }, container);

    return () => ctx.revert();
  }, [hydrated]);

  // Helper to get node position
  const getNodePos = (id: string) => {
    const node = nodes.find((n) => n.id === id);
    return node ? { x: node.x, y: node.y } : { x: 50, y: 50 };
  };

  return (
    <section
      ref={containerRef}
      id="sistema"
      className="relative h-screen w-full flex items-center justify-center overflow-hidden"
      style={{ willChange: "transform" }}
    >
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-slate-900/50 to-black" />

      {/* Grid pattern */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `
            linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)
          `,
          backgroundSize: "50px 50px",
        }}
      />

      {/* Film grain */}
      <div
        className="absolute inset-0 opacity-[0.02] pointer-events-none z-50"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
        }}
      />

      {/* Content */}
      <div className="relative z-10 w-full max-w-4xl px-6">
        {/* Title */}
        <div ref={titleRef} className="text-center mb-12 opacity-0">
          <span className="text-sm uppercase tracking-widest text-white/50">
            Sistema Completo
          </span>
          <h2 className="mt-4 text-3xl md:text-5xl font-bold text-white">
            Madrid atrae · RD ejecuta · Globalia capitaliza
          </h2>
        </div>

        {/* SVG Diagram */}
        <svg
          ref={svgRef}
          viewBox="0 0 100 100"
          className="w-full max-w-2xl mx-auto aspect-square"
        >
          {/* Connections */}
          {connections.map((conn, i) => {
            const from = getNodePos(conn.from);
            const to = getNodePos(conn.to);
            return (
              <line
                key={i}
                className="connection-line"
                x1={from.x}
                y1={from.y}
                x2={to.x}
                y2={to.y}
                stroke="rgba(255,255,255,0.2)"
                strokeWidth="0.3"
              />
            );
          })}

          {/* Nodes */}
          {nodes.map((node) => {
            return (
              <g
                key={node.id}
                id={`node-${node.id}`}
                style={{ transformOrigin: `${node.x}px ${node.y}px` }}
              >
                {/* Glow effect for center */}
                {node.id === "marca" && (
                  <circle
                    cx={node.x}
                    cy={node.y}
                    r="10"
                    fill={node.color}
                    opacity="0.2"
                    className="animate-pulse"
                  />
                )}

                {/* Node circle */}
                <circle
                  cx={node.x}
                  cy={node.y}
                  r={node.id === "marca" ? "7" : "5"}
                  fill="rgba(0,0,0,0.8)"
                  stroke={node.color}
                  strokeWidth="0.5"
                />

                {/* Icon placeholder (using text since foreignObject is tricky) */}
                <text
                  x={node.x}
                  y={node.y + 0.5}
                  textAnchor="middle"
                  dominantBaseline="middle"
                  fill={node.color}
                  fontSize={node.id === "marca" ? "4" : "3"}
                  fontWeight="bold"
                >
                  {node.label.charAt(0)}
                </text>

                {/* Label */}
                <text
                  x={node.x}
                  y={node.y + (node.id === "marca" ? 12 : 10)}
                  textAnchor="middle"
                  fill="white"
                  fontSize="3"
                  opacity="0.8"
                >
                  {node.label}
                </text>
              </g>
            );
          })}
        </svg>

        {/* Conclusion */}
        <div ref={conclusionRef} className="text-center mt-12 opacity-0">
          <p className="text-xl md:text-3xl font-light text-white/80">
            No es una productora.{" "}
            <span className="font-semibold text-white">
              Es un sistema operativo.
            </span>
          </p>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/40">
        <span className="text-xs uppercase tracking-widest">Sistema</span>
        <div className="w-px h-8 bg-gradient-to-b from-white/40 to-transparent animate-pulse" />
      </div>
    </section>
  );
}
