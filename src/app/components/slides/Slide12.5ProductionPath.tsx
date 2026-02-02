"use client";

import { motion } from "framer-motion";
import Slide from "../Slide";
import ProductionPath from "../ProductionPath";

export default function Slide12Dot5ProductionPath() {
  const stages = [
    { num: 1, text: "Guion/Proyecto" },
    { num: 2, text: "✈️ Madrid" },
    { num: 3, text: "SDQ" },
    { num: 4, text: "🏨 Hotel Globalia" },
    { num: 5, text: "🎬 Estudio La Casita" },
    { num: 6, text: "🏢 Kovermann Pictures" },
    { num: 7, text: "🎥 Filmación" },
  ];

  return (
    <Slide id="slide-12-5" pinned scrollDistance={1500}>
      <div>
        <motion.h2
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-semibold mb-4 text-center text-white drop-shadow-lg"
        >
          El camino de producción
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          viewport={{ once: true }}
          className="text-lg md:text-xl text-center mb-8 text-white/90 drop-shadow max-w-4xl mx-auto"
        >
          Un proyecto sigue este camino desde Europa hasta su ejecución completa en República Dominicana.
          Globalia activa cada etapa de la cadena.
        </motion.p>

        {/* Production Path SVG */}
        <ProductionPath />

        {/* Stage descriptions */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-4 max-w-7xl mx-auto mt-8"
        >
          {stages.map((stage, index) => (
            <motion.div
              key={stage.num}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.6 + index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white/10 backdrop-blur-sm p-4 rounded-xl border border-white/20 text-center"
            >
              <div className="bg-amber-400 text-black font-bold w-8 h-8 rounded-full flex items-center justify-center mx-auto mb-2">
                {stage.num}
              </div>
              <p className="text-white text-sm font-semibold">{stage.text}</p>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          viewport={{ once: true }}
          className="mt-12 text-center"
        >
          <p className="text-amber-200 font-semibold text-lg">
            Cada etapa genera valor para Globalia
          </p>
        </motion.div>
      </div>
    </Slide>
  );
}
