"use client";

import { motion } from "framer-motion";
import Slide from "../Slide";

export default function Slide01Intro() {
  return (
    <Slide id="slide-1">
      <div className="text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h1 className="text-5xl md:text-7xl font-bold mb-6 text-white drop-shadow-lg">
            Propuesta Estratégica Audiovisual para Globalia
          </h1>
          <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-4xl mx-auto drop-shadow">
            Una estrategia para activar hoteles, rutas aéreas y alianzas usando la
            Ley de Cine de República Dominicana.
          </p>
          <div className="flex justify-center gap-8 md:gap-12 text-5xl md:text-6xl">
            <motion.span
              initial={{ opacity: 0, scale: 0 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2, type: "spring" }}
              viewport={{ once: true }}
            >
              🏨
            </motion.span>
            <motion.span
              initial={{ opacity: 0, scale: 0 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.4, type: "spring" }}
              viewport={{ once: true }}
            >
              ✈️
            </motion.span>
            <motion.span
              initial={{ opacity: 0, scale: 0 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.6, type: "spring" }}
              viewport={{ once: true }}
            >
              🎬
            </motion.span>
          </div>
        </motion.div>
      </div>
    </Slide>
  );
}
