import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Disable React strict mode to prevent double-renders that conflict
  // with GSAP ScrollTrigger DOM manipulation
  reactStrictMode: false,
};

export default nextConfig;
