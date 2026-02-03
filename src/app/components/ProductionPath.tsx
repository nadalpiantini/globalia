"use client";

import { useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { useHydrated } from "../hooks/useHydrated";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import LogoPlaceholder from "./LogoPlaceholder";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

interface Waypoint {
  id: string;
  type: "madrid" | "airline" | "airport" | "hotel" | "studio" | "production" | "streaming" | "global";
  label: string;
  position: { x: number; y: number };
}

const waypoints: Waypoint[] = [
  { id: "1", type: "madrid", label: "Oficina Madrid", position: { x: 80, y: 300 } },
  { id: "2", type: "airline", label: "Air Europa", position: { x: 210, y: 180 } },
  { id: "3", type: "airport", label: "SDQ", position: { x: 340, y: 300 } },
  { id: "4", type: "hotel", label: "Santo Domingo Bay", position: { x: 470, y: 180 } },
  { id: "5", type: "studio", label: "La Casita Studio", position: { x: 600, y: 300 } },
  { id: "6", type: "production", label: "Producción", position: { x: 730, y: 180 } },
  { id: "7", type: "streaming", label: "Streaming Propio", position: { x: 860, y: 300 } },
  { id: "8", type: "global", label: "Distribución Global", position: { x: 990, y: 180 } },
];

// Generate smooth bezier path through all waypoints
const pathD = `M 80 300
   C 120 300, 170 180, 210 180
   C 250 180, 300 300, 340 300
   C 380 300, 430 180, 470 180
   C 510 180, 560 300, 600 300
   C 640 300, 690 180, 730 180
   C 770 180, 820 300, 860 300
   C 900 300, 950 180, 990 180`;

export default function ProductionPath() {
  const svgRef = useRef<SVGSVGElement>(null);
  const pathRef = useRef<SVGPathElement>(null);
  const mounted = useHydrated();

  useEffect(() => {
    if (!mounted || !svgRef.current || !pathRef.current) return;

    // Animate path drawing on scroll
    const pathLength = pathRef.current.getTotalLength();

    // Set initial state
    gsap.set(pathRef.current, {
      strokeDasharray: pathLength,
      strokeDashoffset: pathLength,
    });

    // Create scroll-triggered animation
    const ctx = gsap.context(() => {
      gsap.to(pathRef.current, {
        strokeDashoffset: 0,
        scrollTrigger: {
          trigger: svgRef.current,
          start: "top center",
          end: "bottom center",
          scrub: 1,
        },
      });
    }, svgRef.current);

    return () => ctx.revert();
  }, [mounted]);

  return (
    <div className="relative w-full h-[450px] my-12">
      <svg
        ref={svgRef}
        viewBox="0 0 1100 400"
        className="w-full h-full"
        style={{ overflow: "visible" }}
      >
        {/* Background grid */}
        <defs>
          <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
            <path d="M 40 0 L 0 0 0 40" fill="none" stroke="rgba(255,255,255,0.05)" strokeWidth="1" />
          </pattern>

          {/* Gradient for path */}
          <linearGradient id="pathGradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#f59e0b" stopOpacity="0.5" />
            <stop offset="50%" stopColor="#fbbf24" stopOpacity="1" />
            <stop offset="100%" stopColor="#10b981" stopOpacity="0.8" />
          </linearGradient>

          {/* Glow filter */}
          <filter id="glow" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
            <feMerge>
              <feMergeNode in="coloredBlur"/>
              <feMergeNode in="SourceGraphic"/>
            </feMerge>
          </filter>
        </defs>

        <rect width="1100" height="400" fill="url(#grid)" />

        {/* Connection path - bezier curve through all waypoints */}
        <path
          ref={pathRef}
          d={pathD}
          fill="none"
          stroke="url(#pathGradient)"
          strokeWidth="4"
          strokeLinecap="round"
          filter="url(#glow)"
        />

        {/* Animated plane following path */}
        <motion.g
          style={{
            offsetPath: `path("${pathD}")`,
          }}
          animate={{
            offsetDistance: ["0%", "100%"],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "linear",
          }}
        >
          {/* Plane icon */}
          <g transform="rotate(0) translate(-12, -12)">
            <circle r="10" fill="#fbbf24" cx="12" cy="12" />
            <path
              d="M12 4L8 12h8L12 4zM12 12v8"
              stroke="white"
              strokeWidth="2"
              fill="none"
              strokeLinecap="round"
            />
          </g>
        </motion.g>
      </svg>

      {/* Waypoints overlay */}
      <div className="absolute inset-0 pointer-events-none">
        {waypoints.map((point, index) => (
          <motion.div
            key={point.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className="absolute pointer-events-auto"
            style={{
              left: `${(point.position.x / 1100) * 100}%`,
              top: `${(point.position.y / 400) * 100}%`,
              transform: "translate(-50%, -50%)",
            }}
          >
            <LogoPlaceholder type={point.type} label={point.label} size={70} />
          </motion.div>
        ))}
      </div>

      {/* Connection labels */}
      <div className="absolute bottom-0 left-0 right-0 flex justify-center gap-4 text-xs text-white/40">
        <span>España</span>
        <span>→</span>
        <span>República Dominicana</span>
        <span>→</span>
        <span>Distribución</span>
      </div>
    </div>
  );
}
