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
  type: "madrid" | "airline" | "airport" | "hotel" | "studio" | "production" | "filming";
  label: string;
  position: { x: number; y: number };
}

const waypoints: Waypoint[] = [
  { id: "1", type: "madrid", label: "Oficina Madrid", position: { x: 100, y: 300 } },
  { id: "2", type: "airline", label: "Air Europa", position: { x: 250, y: 200 } },
  { id: "3", type: "airport", label: "SDQ", position: { x: 400, y: 300 } },
  { id: "4", type: "hotel", label: "Hotel Globalia", position: { x: 550, y: 200 } },
  { id: "5", type: "studio", label: "La Casita", position: { x: 700, y: 300 } },
  { id: "6", type: "production", label: "Kovermann", position: { x: 850, y: 200 } },
  { id: "7", type: "filming", label: "Filmación", position: { x: 1000, y: 300 } },
];

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
    <div className="relative w-full h-[400px] my-12">
      <svg
        ref={svgRef}
        viewBox="0 0 1100 400"
        className="w-full h-full"
        style={{ overflow: "visible" }}
      >
        {/* Background grid */}
        <defs>
          <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
            <path d="M 40 0 L 0 0 0 40" fill="none" stroke="rgba(255,255,255,0.1)" strokeWidth="1" />
          </pattern>
        </defs>
        <rect width="1100" height="400" fill="url(#grid)" />

        {/* Connection path - bezier curve through all waypoints */}
        <path
          ref={pathRef}
          d="M 100 300
             C 150 300, 200 200, 250 200
             C 300 200, 350 300, 400 300
             C 450 300, 500 200, 550 200
             C 600 200, 650 300, 700 300
             C 750 300, 800 200, 850 200
             C 900 200, 950 300, 1000 300"
          fill="none"
          stroke="url(#gradient)"
          strokeWidth="4"
          strokeLinecap="round"
          className="drop-shadow-lg"
        />

        {/* Gradient for path */}
        <defs>
          <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#f59e0b" stopOpacity="0.5" />
            <stop offset="50%" stopColor="#fbbf24" stopOpacity="1" />
            <stop offset="100%" stopColor="#f59e0b" stopOpacity="0.5" />
          </linearGradient>
        </defs>

        {/* Animated plane following path */}
        <motion.circle
          r="8"
          fill="#fbbf24"
          initial={{ pathOffset: 0 }}
          style={{
            offsetPath: 'path("M 100 300 C 150 300, 200 200, 250 200 C 300 200, 350 300, 400 300 C 450 300, 500 200, 550 200 C 600 200, 650 300, 700 300 C 750 300, 800 200, 850 200 C 900 200, 950 300, 1000 300")',
          }}
          animate={{
            offsetDistance: ["0%", "100%"],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "linear",
          }}
        />
      </svg>

      {/* Waypoints overlay */}
      <div className="absolute inset-0 pointer-events-none">
        {waypoints.map((point) => (
          <div
            key={point.id}
            className="absolute pointer-events-auto"
            style={{
              left: `${(point.position.x / 1100) * 100}%`,
              top: `${(point.position.y / 400) * 100}%`,
              transform: "translate(-50%, -50%)",
            }}
          >
            <LogoPlaceholder type={point.type} label={point.label} size={80} />
          </div>
        ))}
      </div>
    </div>
  );
}
