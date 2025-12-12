"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const actos = [
  { id: 1, label: "Manifiesto" },
  { id: 2, label: "El Problema" },
  { id: 3, label: "El Sistema" },
  { id: 4, label: "Portafolio" },
  { id: 5, label: "Cierre" },
];

export default function ProgressNav() {
  const [activeActo, setActiveActo] = useState(1);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrollPercent = (scrollTop / docHeight) * 100;

      setProgress(scrollPercent);

      // Determinar acto activo basado en scroll
      // Cada acto tiene aproximadamente 20% del scroll total
      const actoIndex = Math.min(Math.floor(scrollPercent / 20) + 1, 5);
      setActiveActo(actoIndex);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToActo = (actoNum: number) => {
    const docHeight = document.documentElement.scrollHeight - window.innerHeight;
    const targetScroll = ((actoNum - 1) / 5) * docHeight;
    window.scrollTo({ top: targetScroll, behavior: "smooth" });
  };

  return (
    <nav className="fixed right-6 md:right-10 top-1/2 -translate-y-1/2 z-50 flex flex-col items-end gap-4">
      {actos.map((acto) => (
        <button
          key={acto.id}
          onClick={() => scrollToActo(acto.id)}
          className="group flex items-center gap-3"
        >
          {/* Label - aparece en hover */}
          <motion.span
            initial={{ opacity: 0, x: 10 }}
            whileHover={{ opacity: 1, x: 0 }}
            className="text-xs font-medium text-white/50 group-hover:text-white/80 transition-colors hidden md:block"
          >
            {acto.label}
          </motion.span>

          {/* Dot */}
          <div className="relative flex items-center justify-center">
            {/* Glow activo */}
            {activeActo === acto.id && (
              <motion.div
                layoutId="activeGlow"
                className="absolute w-6 h-6 bg-white/20 rounded-full blur-md"
                transition={{ type: "spring", stiffness: 300, damping: 30 }}
              />
            )}

            {/* Dot principal */}
            <motion.div
              className={`relative w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                activeActo === acto.id
                  ? "bg-white scale-100"
                  : activeActo > acto.id
                  ? "bg-white/40 scale-75"
                  : "bg-white/20 scale-75"
              }`}
              whileHover={{ scale: 1.2 }}
            />
          </div>
        </button>
      ))}

      {/* Progress line */}
      <div className="absolute right-[4px] top-0 w-px h-full bg-white/10 -z-10">
        <motion.div
          className="w-full bg-white/30 origin-top"
          style={{ height: `${progress}%` }}
        />
      </div>
    </nav>
  );
}
