"use client";

import { motion } from "framer-motion";
import { Scale } from "lucide-react";
import Slide from "../Slide";

export default function Slide04LawContext() {
  return (
    <Slide id="slide-4">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="text-center max-w-4xl mx-auto"
      >
        <div className="bg-white/10 backdrop-blur-sm p-12 rounded-2xl border border-white/20">
          <Scale className="w-16 h-16 mx-auto mb-6 text-amber-300" />
          <h2 className="text-4xl md:text-6xl font-bold mb-6 text-white drop-shadow-lg">
            Ley de Cine RD
          </h2>
          <p className="text-2xl md:text-3xl text-amber-200 font-semibold mb-4">
            108-10
          </p>
          <p className="text-lg md:text-xl text-white/90 drop-shadow">
            República Dominicana cuenta con incentivos económicos reales para
            atraer producción audiovisual. Esta ley no es cultural únicamente,
            es una ley de atracción industrial.
          </p>
        </div>
      </motion.div>
    </Slide>
  );
}
