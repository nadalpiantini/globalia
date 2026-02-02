"use client";

import { motion } from "framer-motion";
import Slide from "../Slide";

export default function Slide03WhyAV() {
  const benefits = [
    { icon: "👥", text: "Crew + Talento" },
    { icon: "🛏", text: "Estancias largas" },
    { icon: "📆", text: "6–12 semanas" },
  ];

  return (
    <Slide id="slide-3">
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-semibold mb-6 text-white drop-shadow-lg">
            Por qué audiovisual
          </h2>
          <p className="text-lg md:text-xl text-white/90 mb-6 drop-shadow">
            La industria audiovisual compra estancias largas, viaja en grupos grandes,
            repite destinos y necesita hoteles urbanos y logísticos.
          </p>
          <p className="text-lg md:text-xl font-semibold text-amber-200 drop-shadow">
            Para un operador hotelero, una producción no es marketing,
            es un cliente corporativo de larga duración.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="bg-white/10 backdrop-blur-sm p-8 md:p-12 rounded-2xl border border-white/20"
        >
          <h3 className="text-2xl font-bold mb-8 text-white text-center">
            Producción audiovisual
          </h3>
          <div className="space-y-6">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.2 }}
                viewport={{ once: true }}
                className="flex items-center gap-4 text-xl"
              >
                <span className="text-3xl">{benefit.icon}</span>
                <span className="text-white/90">{benefit.text}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </Slide>
  );
}
