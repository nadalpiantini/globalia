"use client";

import { motion } from "framer-motion";
import { Plane } from "lucide-react";
import Slide from "../Slide";

export default function Slide12MadridToRD() {
  return (
    <Slide id="slide-12">
      <div className="text-center max-w-4xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-semibold mb-6 text-white drop-shadow-lg"
        >
          Madrid → RD
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          viewport={{ once: true }}
          className="text-lg md:text-xl mb-12 text-white/90 drop-shadow"
        >
          Globalia conecta: productores, rutas aéreas, hoteles e incentivos.
          <br />
          <span className="text-amber-200 font-semibold">Air Europa es el conector natural.</span>
        </motion.p>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.5 }}
          viewport={{ once: true }}
          className="flex items-center justify-center gap-8 md:gap-16 text-6xl md:text-8xl"
        >
          <motion.div
            whileHover={{ scale: 1.1 }}
            className="bg-white/10 backdrop-blur-sm p-8 rounded-2xl border border-white/20"
          >
            🇪🇸
          </motion.div>

          <motion.div
            animate={{ x: [0, 20, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="bg-amber-400/20 backdrop-blur-sm p-6 rounded-full"
          >
            <Plane className="w-12 h-12 md:w-16 md:h-16 text-amber-300" />
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.1 }}
            className="bg-white/10 backdrop-blur-sm p-8 rounded-2xl border border-white/20"
          >
            🇩🇴
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          viewport={{ once: true }}
          className="mt-12 bg-white/10 backdrop-blur-sm p-6 rounded-xl border border-white/20"
        >
          <p className="text-xl text-white font-semibold">
            Proyectos → Producción
          </p>
        </motion.div>
      </div>
    </Slide>
  );
}
