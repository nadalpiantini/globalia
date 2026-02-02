"use client";

import { useRef, useEffect } from "react";
import { useHydrated } from "../hooks/useHydrated";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

interface SlideProps {
  children: React.ReactNode;
  id: string;
  className?: string;
  pinned?: boolean;
  scrollDistance?: number;
}

export default function Slide({
  children,
  id,
  className = "",
  pinned = false,
  scrollDistance = 2000,
}: SlideProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const mounted = useHydrated();

  useEffect(() => {
    if (!mounted || !pinned) return;

    const container = containerRef.current;
    if (!container) return;

    // Create pinned timeline for slide
    const ctx = gsap.context(() => {
      gsap.timeline({
        scrollTrigger: {
          trigger: container,
          start: "top top",
          end: `+=${scrollDistance}`,
          scrub: 0.8,
          pin: true,
          anticipatePin: 1,
        },
      });
    }, container);

    return () => ctx.revert();
  }, [mounted, pinned, scrollDistance]);

  return (
    <section
      id={id}
      ref={containerRef}
      className={`relative min-h-screen w-full flex items-center justify-center px-6 md:px-10 py-20 ${className}`}
    >
      <div className="max-w-6xl w-full relative z-10">{children}</div>
    </section>
  );
}
