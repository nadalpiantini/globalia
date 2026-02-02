"use client";

import { motion } from "framer-motion";
import { Hotel, Calendar, RefreshCw } from "lucide-react";
import Slide from "../Slide";

export default function Slide09Art39Hotels() {
  const stats = [
    { icon: Hotel, text: "40–80 habitaciones", label: "Ocupación" },
    { icon: Calendar, text: "8–12 semanas", label: "Duración" },
    { icon: RefreshCw, text: "Repetición anual", label: "Recurrente" },
  ];

  return (
    <Slide id="slide-9">
      <div>
        <motion.h2
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-semibold mb-6 text-center text-white drop-shadow-lg"
        >
          Artículo 39 y ocupación hotelera
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          viewport={{ once: true }}
          className="text-lg md:text-xl text-center mb-12 text-white/90 max-w-4xl mx-auto drop-shadow"
        >
          Para generar el crédito fiscal, las producciones deben ejecutar gasto
          real en RD: hoteles, transporte, servicios y personal.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          viewport={{ once: true }}
          className="bg-amber-900/30 backdrop-blur-sm p-8 rounded-2xl text-center border border-amber-300/30 max-w-3xl mx-auto mb-12"
        >
          <p className="text-xl md:text-2xl text-white font-semibold">
            Cada rodaje se convierte en ingreso directo para hoteles como Santo Domingo Bay
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 + index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white/10 backdrop-blur-sm p-6 rounded-2xl text-center border border-white/20"
            >
              <stat.icon className="w-10 h-10 mx-auto mb-3 text-amber-300" />
              <p className="text-2xl font-bold text-white mb-1">{stat.text}</p>
              <p className="text-sm text-white/70">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </Slide>
  );
}
