"use client";

import { useState, useEffect, ReactNode } from "react";

interface ClientOnlyProps {
  children: ReactNode;
  fallback?: ReactNode;
}

/**
 * Wrapper component that only renders children on the client after hydration.
 * This prevents hydration mismatch errors for components that use:
 * - Browser APIs (window, document)
 * - Zustand stores
 * - Framer Motion animations with dynamic values
 * - GSAP ScrollTrigger
 */
export default function ClientOnly({ children, fallback = null }: ClientOnlyProps) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Return fallback on server and initial client render
  // This ensures server HTML === initial client HTML
  if (!mounted) {
    return fallback;
  }

  return <>{children}</>;
}
