"use client";

import { useState, useEffect } from "react";

/**
 * Hook to detect when React hydration is complete.
 * GSAP ScrollTrigger and other DOM-manipulating libraries should wait
 * for this before initializing to avoid hydration mismatch errors.
 */
export function useHydrated(): boolean {
  const [hydrated, setHydrated] = useState(false);

  useEffect(() => {
    // This effect only runs on client after hydration
    setHydrated(true);
  }, []);

  return hydrated;
}
