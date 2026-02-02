"use client";

import { motion } from "framer-motion";
import { Scale, Receipt } from "lucide-react";
import Slide from "../Slide";

export default function Slide05TwoPaths() {
  return (
    <Slide id="slide-5">
      <div>
        <motion.h2
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-semibold mb-6 text-center text-white drop-shadow-lg"
        >
          Dos mecanismos legales independientes
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          viewport={{ once: true }}
          className="text-lg md:text-xl text-center mb-12 text-white/90 max-w-4xl mx-auto drop-shadow"
        >
          La Ley de Cine crea dos incentivos distintos. No se combinan entre sí y
          cumplen funciones diferentes dentro de la estrategia.
        </motion.p>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-white/10 backdrop-blur-sm p-8 rounded-2xl border border-white/20 hover:border-amber-300/50 transition-colors"
          >
            <div className="flex items-center gap-3 mb-4">
              <Scale className="w-8 h-8 text-amber-300" />
              <h3 className="text-2xl font-bold text-white">Artículo 34</h3>
            </div>
            <p className="text-white/90">
              Permite invertir hasta el 25% del ISR local en largometrajes
              dominicanos aprobados, deduciendo el 100% de esa inversión del
              impuesto.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-white/10 backdrop-blur-sm p-8 rounded-2xl border border-white/20 hover:border-amber-300/50 transition-colors"
          >
            <div className="flex items-center gap-3 mb-4">
              <Receipt className="w-8 h-8 text-amber-300" />
              <h3 className="text-2xl font-bold text-white">Artículo 39</h3>
            </div>
            <p className="text-white/90">
              Genera un crédito fiscal transferible equivalente al 25% del gasto
              local ejecutado por una producción audiovisual en RD.
            </p>
          </motion.div>
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          viewport={{ once: true }}
          className="mt-8 text-center text-amber-200 font-semibold"
        >
          👉 No se usan juntos · Se planifican como estrategias separadas
        </motion.p>
      </div>
    </Slide>
  );
}
