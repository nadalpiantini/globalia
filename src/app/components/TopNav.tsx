"use client";

import { NAV } from "./data";

export default function TopNav() {
  return (
    <div className="fixed top-4 left-1/2 -translate-x-1/2 z-[50]">
      <div className="collage-paper px-5 py-3 flex items-center gap-4">
        <div className="stamp">Globalia · RD ↔ Madrid</div>
        <div className="hidden md:flex gap-3 text-sm text-white/80">
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
        <div className="ml-auto hidden md:block kbd">scroll</div>
      </div>
    </div>
  );
}
