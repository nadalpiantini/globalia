"use client";
import { motion } from "framer-motion";
import { useState } from "react";

const sections = [
  { id: "hero", label: "Inicio" },
  { id: "problema", label: "Problema" },
  { id: "plataforma", label: "Plataforma" },
  { id: "contenido", label: "Contenido" },
  { id: "arquitectura", label: "Arquitectura" },
  { id: "finanzas", label: "Finanzas" },
  { id: "cierre", label: "Cierre" },
];

export default function DotNav() {
  const [hovered, setHovered] = useState<string | null>(null);

  return (
    <div className="fixed right-6 top-1/2 -translate-y-1/2 z-[998] space-y-4">
      {sections.map((s) => (
        <div
          key={s.id}
          onMouseEnter={() => setHovered(s.id)}
          onMouseLeave={() => setHovered(null)}
          className="relative flex items-center justify-end"
        >
          {hovered === s.id && (
            <motion.div
              initial={{ opacity: 0, x: 10 }}
              animate={{ opacity: 1, x: 0 }}
              className="mr-3 px-3 py-1 bg-black text-white text-xs rounded-full shadow"
            >
              {s.label}
            </motion.div>
          )}

          <a href={`#${s.id}`}>
            <motion.div
              whileHover={{ scale: 1.4 }}
              className="w-3 h-3 bg-black/50 rounded-full hover:bg-black transition"
            />
          </a>
        </div>
      ))}
    </div>
  );
}
