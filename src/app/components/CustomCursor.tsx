"use client";

import { useEffect, useState, useSyncExternalStore } from "react";
import { motion } from "framer-motion";

// Custom hook to check if mobile
function useIsMobile() {
  const subscribe = (callback: () => void) => {
    window.addEventListener("resize", callback);
    return () => window.removeEventListener("resize", callback);
  };
  const getSnapshot = () => window.innerWidth < 768;
  const getServerSnapshot = () => true; // Default to mobile on server

  return useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);
}

export default function CustomCursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const isMobile = useIsMobile();

  useEffect(() => {

    const handleMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
      if (!isVisible) setIsVisible(true);
    };

    const handleMouseEnter = () => setIsVisible(true);
    const handleMouseLeave = () => setIsVisible(false);

    // Detect hover on interactive elements
    const setupHoverListeners = () => {
      const interactiveElements = document.querySelectorAll("a, button, [data-cursor-hover]");
      interactiveElements.forEach((el) => {
        el.addEventListener("mouseenter", () => setIsHovering(true));
        el.addEventListener("mouseleave", () => setIsHovering(false));
      });
    };

    window.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseenter", handleMouseEnter);
    document.addEventListener("mouseleave", handleMouseLeave);

    // Timeout to ensure DOM is ready
    const timeout = setTimeout(setupHoverListeners, 500);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseenter", handleMouseEnter);
      document.removeEventListener("mouseleave", handleMouseLeave);
      clearTimeout(timeout);
    };
  }, [isVisible]);

  if (isMobile) return null;

  return (
    <>
      {/* Main cursor - dot */}
      <motion.div
        className="fixed top-0 left-0 w-2 h-2 bg-white rounded-full pointer-events-none z-[9999] mix-blend-difference"
        animate={{
          x: position.x - 4,
          y: position.y - 4,
          scale: isHovering ? 0 : 1,
        }}
        transition={{ type: "spring", stiffness: 500, damping: 28 }}
        style={{ opacity: isVisible ? 1 : 0 }}
      />

      {/* Secondary cursor - ring */}
      <motion.div
        className="fixed top-0 left-0 w-10 h-10 border border-white/30 rounded-full pointer-events-none z-[9998]"
        animate={{
          x: position.x - 20,
          y: position.y - 20,
          scale: isHovering ? 1.5 : 1,
          borderColor: isHovering ? "rgba(255,255,255,0.6)" : "rgba(255,255,255,0.3)",
        }}
        transition={{ type: "spring", stiffness: 150, damping: 15 }}
        style={{ opacity: isVisible ? 1 : 0 }}
      />

      {/* Ambient glow */}
      <motion.div
        className="fixed top-0 left-0 w-64 h-64 rounded-full pointer-events-none z-[9997]"
        animate={{
          x: position.x - 128,
          y: position.y - 128,
        }}
        transition={{ type: "spring", stiffness: 50, damping: 20 }}
        style={{
          background: "radial-gradient(circle, rgba(255,255,255,0.03) 0%, transparent 70%)",
          opacity: isVisible ? 1 : 0,
        }}
      />
    </>
  );
}
