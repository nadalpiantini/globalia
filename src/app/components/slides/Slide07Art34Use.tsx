"use client";

import { motion } from "framer-motion";
import { Clapperboard, Newspaper, Trophy } from "lucide-react";
import Slide from "../Slide";

export default function Slide07Art34Use() {
  const benefits = [
    { icon: Clapperboard, title: "Cine dominicano", desc: "Proyectos culturales" },
    { icon: Newspaper, title: "Prensa", desc: "Posicionamiento" },
    { icon: Trophy, title: "Reputación", desc: "Activos reutilizables" },
  ];

  return (
    <Slide id="slide-7">
      <div>
        <motion.h2
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-semibold mb-6 text-center text-white drop-shadow-lg"
        >
          Para qué le sirve el Art. 34 a Globalia
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          viewport={{ once: true }}
          className="text-lg md:text-xl text-center mb-12 text-white/90 max-w-4xl mx-auto drop-shadow"
        >
          Este mecanismo permite canalizar ISR hacia proyectos culturales,
          crear contenido propio o asociado, y posicionar a Globalia institucionalmente.
        </motion.p>

        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              viewport={{ once: true }}
              className="bg-white/10 backdrop-blur-sm p-6 rounded-2xl text-center border border-white/20"
            >
              <benefit.icon className="w-12 h-12 mx-auto mb-4 text-amber-300" />
              <h3 className="text-xl font-bold text-white mb-2">{benefit.title}</h3>
              <p className="text-white/80 text-sm">{benefit.desc}</p>
            </motion.div>
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          viewport={{ once: true }}
          className="mt-10 text-center text-amber-200 font-semibold text-lg"
        >
          Es estratégico, no masivo.
        </motion.p>
      </div>
    </Slide>
  );
}
