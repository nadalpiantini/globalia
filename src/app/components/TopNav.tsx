"use client";

import { NAV } from "./data";
import { Plane, ChevronDown } from "lucide-react";

export default function TopNav() {
  return (
    <div className="fixed top-4 left-1/2 -translate-x-1/2 z-[50]">
      <div className="collage-paper px-5 py-3 flex items-center gap-4">
        <div className="stamp flex items-center gap-2">
          <Plane className="w-4 h-4" />
          Globalia · RD ↔ Madrid
        </div>
        <div className="hidden lg:flex gap-3 text-sm text-white/80">
          {NAV.map((n) => (
            <a
              key={n.id}
              href={`#${n.id}`}
              className="hover:text-white transition"
            >
              {n.label}
            </a>
          ))}
        </div>
        <div className="ml-auto hidden md:flex items-center gap-1 kbd">
          <ChevronDown className="w-3 h-3" />
          scroll
        </div>
      </div>
    </div>
  );
}
