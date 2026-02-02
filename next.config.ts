import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Disable React strict mode to prevent double-renders that conflict
  // with GSAP ScrollTrigger DOM manipulation
  reactStrictMode: false,

  // Explicitly set Turbopack root to avoid lockfile confusion
  // (we use pnpm, not npm)
  turbopack: {
    root: __dirname,
  },
};

export default nextConfig;
