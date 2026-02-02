"use client";

import { motion } from "framer-motion";
import { Film, Clapperboard, Building2 } from "lucide-react";
import Slide from "../Slide";

export default function Slide14ExecutionProof() {

  return (
    <Slide id="slide-14">
      <div className="text-center max-w-4xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-semibold mb-6 text-white drop-shadow-lg"
        >
          Tu capacidad de ejecución
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          viewport={{ once: true }}
          className="text-lg md:text-xl mb-12 text-white/90 drop-shadow"
        >
          Esto se puede ejecutar porque ya existe.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.5 }}
          viewport={{ once: true }}
          className="bg-white/10 backdrop-blur-sm p-8 md:p-12 rounded-2xl border border-white/20 mb-8"
        >
          <div className="flex justify-center gap-8 mb-8">
            <Film className="w-12 h-12 text-amber-300" />
            <Clapperboard className="w-12 h-12 text-amber-300" />
            <Building2 className="w-12 h-12 text-amber-300" />
          </div>
          <p className="text-xl text-amber-200 font-semibold">
            Infraestructura existente
          </p>
          <p className="text-white/80 mt-2">Producción · Distribución · Estudios</p>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.7 }}
          viewport={{ once: true }}
          className="text-2xl font-bold text-amber-200"
        >
          No es teoría.
        </motion.p>
      </div>
    </Slide>
  );
}
