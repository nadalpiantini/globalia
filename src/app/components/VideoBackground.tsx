"use client";

import { useRef, useEffect, useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

interface VideoBackgroundProps {
  src: string;
  poster?: string;
  overlay?: "none" | "light" | "dark" | "gradient";
  className?: string;
  priority?: boolean;
}

export default function VideoBackground({
  src,
  poster,
  overlay = "dark",
  className = "",
  priority = false,
}: VideoBackgroundProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(priority);
  const [isLoaded, setIsLoaded] = useState(false);
  const [hasError, setHasError] = useState(false);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  // Check for reduced motion preference
  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    setPrefersReducedMotion(mediaQuery.matches);

    const handler = (e: MediaQueryListEvent) => {
      setPrefersReducedMotion(e.matches);
    };

    mediaQuery.addEventListener("change", handler);
    return () => mediaQuery.removeEventListener("change", handler);
  }, []);

  // Intersection Observer for lazy loading
  useEffect(() => {
    if (priority || prefersReducedMotion) return;

    const container = containerRef.current;
    if (!container) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            observer.disconnect();
          }
        });
      },
      {
        rootMargin: "200px", // Start loading before visible
        threshold: 0,
      }
    );

    observer.observe(container);
    return () => observer.disconnect();
  }, [priority, prefersReducedMotion]);

  // Handle video playback
  useEffect(() => {
    if (!isVisible || prefersReducedMotion || !videoRef.current) return;

    const video = videoRef.current;

    const handleCanPlay = () => {
      setIsLoaded(true);
      video.play().catch(() => {
        // Autoplay blocked - fallback to poster
        setHasError(true);
      });
    };

    const handleError = () => {
      setHasError(true);
    };

    video.addEventListener("canplay", handleCanPlay);
    video.addEventListener("error", handleError);

    return () => {
      video.removeEventListener("canplay", handleCanPlay);
      video.removeEventListener("error", handleError);
    };
  }, [isVisible, prefersReducedMotion]);

  // Overlay styles
  const overlayStyles = {
    none: "",
    light: "bg-white/20",
    dark: "bg-black/40",
    gradient:
      "bg-gradient-to-b from-black/60 via-transparent to-black/60",
  };

  // Show only poster if reduced motion or on mobile
  const showPosterOnly = prefersReducedMotion || hasError;

  return (
    <div
      ref={containerRef}
      className={`absolute inset-0 overflow-hidden ${className}`}
    >
      {/* Poster Image (fallback or reduced motion) */}
      {poster && (showPosterOnly || !isLoaded) && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="absolute inset-0"
        >
          <Image
            src={poster}
            alt=""
            fill
            className="object-cover"
            priority={priority}
            sizes="100vw"
          />
        </motion.div>
      )}

      {/* Video Element */}
      {isVisible && !showPosterOnly && (
        <motion.video
          ref={videoRef}
          initial={{ opacity: 0 }}
          animate={{ opacity: isLoaded ? 1 : 0 }}
          transition={{ duration: 1 }}
          className="absolute inset-0 w-full h-full object-cover"
          muted
          loop
          playsInline
          preload={priority ? "auto" : "metadata"}
          poster={poster}
        >
          <source src={src} type="video/mp4" />
        </motion.video>
      )}

      {/* Overlay */}
      {overlay !== "none" && (
        <div
          className={`absolute inset-0 ${overlayStyles[overlay]} pointer-events-none`}
        />
      )}

      {/* Film grain effect matching global styles */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.03] mix-blend-overlay"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
        }}
      />
    </div>
  );
}
