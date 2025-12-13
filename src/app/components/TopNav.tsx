"use client";

import { NAV } from "./data";
import { Plane, ChevronDown } from "lucide-react";
import ModeToggle from "./ModeToggle";

export default function TopNav() {
  return (
    <div className="fixed top-4 left-1/2 -translate-x-1/2 z-[50] w-[95%] max-w-5xl">
      <div className="collage-paper px-4 md:px-6 py-3 flex items-center justify-between gap-4">
        {/* Left: Brand */}
        <a href="#hero" className="stamp flex items-center gap-2 hover:opacity-80 transition">
          <Plane className="w-4 h-4" />
          <span className="hidden sm:inline">Globalia · RD ↔ Madrid</span>
          <span className="sm:hidden">Globalia</span>
        </a>

        {/* Center: Navigation links (desktop only) */}
        <div className="hidden xl:flex gap-3 text-xs text-white/60">
          {NAV.slice(0, 5).map((n) => (
            <a
              key={n.id}
              href={`#${n.id}`}
              className="hover:text-white transition"
            >
              {n.label}
            </a>
          ))}
        </div>

        {/* Right: Mode toggle + scroll hint */}
        <div className="flex items-center gap-3">
          <ModeToggle />
          <div className="hidden md:flex items-center gap-1 kbd">
            <ChevronDown className="w-3 h-3" />
            scroll
          </div>
        </div>
      </div>
    </div>
  );
}
