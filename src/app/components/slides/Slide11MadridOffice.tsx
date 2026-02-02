"use client";

import { motion } from "framer-motion";
import { Building2, ArrowRight } from "lucide-react";
import Slide from "../Slide";

export default function Slide11MadridOffice() {
  const functions = [
    "Atrae proyectos europeos",
    "Estructura coproducciones",
    "Canaliza hacia RD",
  ];

  return (
    <Slide id="slide-11">
      <div className="text-center max-w-4xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-4xl md:text-6xl font-bold mb-6 text-white drop-shadow-lg"
        >
          Por qué Madrid
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3 }}
          viewport={{ once: true }}
          className="bg-white/10 backdrop-blur-sm p-8 md:p-12 rounded-2xl border border-white/20 mb-8"
        >
          <Building2 className="w-16 h-16 mx-auto mb-6 text-amber-300" />
          <p className="text-lg text-white/90 mb-4">
            Madrid no es para producir.
          </p>
          <p className="text-2xl font-bold text-amber-200">
            Es para atraer, estructurar y reducir fricción.
          </p>
        </motion.div>

        <div className="space-y-4">
          {functions.map((func, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.5 + index * 0.15 }}
              viewport={{ once: true }}
              className="flex items-center gap-4 text-lg"
            >
              <div className="bg-amber-900/50 p-3 rounded-full">
                <ArrowRight className="w-5 h-5 text-amber-300" />
              </div>
              <span className="text-white font-semibold">{func}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </Slide>
  );
}
