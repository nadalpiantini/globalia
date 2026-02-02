"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const sections = [
  { id: "slide-1", num: 0, label: "Intro" },
  { id: "slide-2", num: 1, label: "ISR" },
  { id: "slide-3", num: 2, label: "Audiovisual" },
  { id: "slide-4", num: 3, label: "Ley 108-10" },
  { id: "slide-5", num: 4, label: "2 Caminos" },
  { id: "slide-6", num: 5, label: "Art. 34" },
  { id: "slide-7", num: 6, label: "Uso Art. 34" },
  { id: "slide-8", num: 7, label: "Art. 39" },
  { id: "slide-9", num: 8, label: "Hoteles" },
  { id: "slide-10", num: 9, label: "RD" },
  { id: "slide-11", num: 10, label: "Madrid" },
  { id: "slide-12", num: 11, label: "Conexión" },
  { id: "slide-12-5", num: 12, label: "Camino" },
  { id: "slide-13", num: 13, label: "Beneficios" },
  { id: "slide-14", num: 14, label: "Ejecución" },
  { id: "slide-14-5", num: 15, label: "Caso Real" },
  { id: "slide-15", num: 16, label: "Roadmap" },
  { id: "slide-16", num: 17, label: "Cerrar" },
  { id: "slide-16", num: 16, label: "Cerrar" },
];

export default function ProgressNav() {
  const [activeSection, setActiveSection] = useState(0);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrollPercent = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;

      setProgress(scrollPercent);

      // Determine active section based on scroll position
      const sectionIndex = Math.min(
        Math.floor(scrollPercent / (100 / sections.length)),
        sections.length - 1
      );
      setActiveSection(sectionIndex);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll(); // Initial call
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav className="fixed right-4 md:right-8 top-1/2 -translate-y-1/2 z-50 flex flex-col items-end gap-3">
      {sections.map((section, index) => (
        <button
          key={section.id}
          onClick={() => scrollToSection(section.id)}
          className="group flex items-center gap-3"
          aria-label={`Ir a ${section.label}`}
        >
          {/* Label - appears on hover */}
          <motion.span
            initial={{ opacity: 0, x: 10 }}
            whileHover={{ opacity: 1, x: 0 }}
            className="text-[10px] font-medium text-white/40 group-hover:text-white/80 transition-colors hidden md:block uppercase tracking-wider"
          >
            {section.label}
          </motion.span>

          {/* Dot */}
          <div className="relative flex items-center justify-center">
            {/* Active glow */}
            {activeSection === index && (
              <motion.div
                layoutId="activeGlow"
                className="absolute w-5 h-5 bg-white/20 rounded-full blur-md"
                transition={{ type: "spring", stiffness: 300, damping: 30 }}
              />
            )}

            {/* Main dot */}
            <motion.div
              className={`relative w-2 h-2 rounded-full transition-all duration-300 ${
                activeSection === index
                  ? "bg-white scale-110"
                  : activeSection > index
                  ? "bg-white/40 scale-75"
                  : "bg-white/20 scale-75"
              }`}
              whileHover={{ scale: 1.3 }}
            />
          </div>
        </button>
      ))}

      {/* Progress line */}
      <div className="absolute right-[3px] top-0 w-px h-full bg-white/10 -z-10">
        <motion.div
          className="w-full bg-white/30 origin-top"
          style={{ height: `${progress}%` }}
        />
      </div>
    </nav>
  );
}
