"use client";

import { motion } from "framer-motion";
import { Scale } from "lucide-react";
import Slide from "../Slide";

export default function Slide06Art34() {
  return (
    <Slide id="slide-6">
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="flex items-center gap-3 mb-4">
            <Scale className="w-10 h-10 text-amber-300" />
            <h2 className="text-4xl md:text-5xl font-semibold text-white drop-shadow-lg">
              Artículo 34
            </h2>
          </div>
          <p className="text-lg md:text-xl text-white/90 mb-4 drop-shadow">
            Las empresas que pagan ISR en República Dominicana pueden invertir
            hasta el 25% de ese impuesto en largometrajes dominicanos aprobados
            por DGCINE.
          </p>
          <p className="text-lg md:text-xl font-semibold text-amber-200 drop-shadow">
            El 100% de esa inversión se deduce del ISR del período.
          </p>
          <p className="mt-4 text-white/80 drop-shadow">
            No es un crédito ni es transferible. Es inversión fiscalmente deducible.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="bg-white/10 backdrop-blur-sm p-8 md:p-12 rounded-2xl text-center border border-white/20"
        >
          <p className="text-sm text-white/70 mb-4 uppercase tracking-wider">ISR total</p>
          <div className="h-8 bg-white/30 rounded-lg mb-6 relative overflow-hidden">
            <motion.div
              initial={{ width: "0%" }}
              whileInView={{ width: "25%" }}
              transition={{ duration: 1.5, delay: 0.5 }}
              viewport={{ once: true }}
              className="h-full bg-amber-400 rounded-lg"
            />
          </div>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 2 }}
            viewport={{ once: true }}
            className="text-left"
          >
            <p className="text-amber-200 font-semibold text-lg">↑ hasta 25%</p>
            <p className="text-white/90">→ Producción dominicana</p>
          </motion.div>
        </motion.div>
      </div>
    </Slide>
  );
}
