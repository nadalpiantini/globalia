"use client";

import { motion } from "framer-motion";
import { MapPin, Users, Hotel, Palmtree, Clapperboard } from "lucide-react";
import Slide from "../Slide";

export default function Slide10RDExecution() {
  const features = [
    { icon: MapPin, text: "Producción" },
    { icon: Users, text: "Crew y talento" },
    { icon: Hotel, text: "Hoteles" },
    { icon: Palmtree, text: "Locaciones" },
    { icon: Clapperboard, text: "Estudios" },
  ];

  return (
    <Slide id="slide-10">
      <div className="text-center max-w-4xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-4xl md:text-6xl font-bold mb-6 text-white drop-shadow-lg"
        >
          República Dominicana
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          viewport={{ once: true }}
          className="text-2xl text-amber-200 font-semibold mb-12"
        >
          Donde ocurre todo lo operativo
        </motion.p>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.5 }}
          viewport={{ once: true }}
          className="bg-white/10 backdrop-blur-sm p-8 md:p-12 rounded-2xl border border-white/20"
        >
          <p className="text-lg text-white/90 mb-8">RD es donde ocurre:</p>
          <div className="grid md:grid-cols-2 gap-4">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.6 + index * 0.1 }}
                viewport={{ once: true }}
                className="flex items-center gap-3 text-left p-3"
              >
                <feature.icon className="w-6 h-6 text-amber-300 flex-shrink-0" />
                <span className="text-white font-semibold">{feature.text}</span>
              </motion.div>
            ))}
          </div>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 1.2 }}
            viewport={{ once: true }}
            className="mt-8 text-xl font-bold text-amber-200"
          >
            Sin RD, no hay crédito ni deducción.
          </motion.p>
        </motion.div>
      </div>
    </Slide>
  );
}
