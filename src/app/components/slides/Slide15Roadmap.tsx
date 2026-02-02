"use client";

import { motion } from "framer-motion";
import { Target } from "lucide-react";
import React from "react";
import Slide from "../Slide";

export default function Slide15Roadmap() {
  const steps = [
    { num: 1, text: "Oficina Madrid" },
    { num: 2, text: "Estrategia Art. 34" },
    { num: 3, text: "Estrategia Art. 39" },
    { num: 4, text: "Pilotos hoteleros" },
    { num: 5, text: "Pipeline anual" },
  ];

  return (
    <Slide id="slide-15">
      <div className="text-center max-w-4xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-semibold mb-12 text-white drop-shadow-lg"
        >
          Propuesta concreta
        </motion.h2>

        <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-8">
          {steps.map((step, index) => (
            <React.Fragment key={step.num}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.15 }}
                viewport={{ once: true }}
                className="bg-white/10 backdrop-blur-sm p-6 rounded-2xl border border-white/20 flex-shrink-0"
              >
                <div className="bg-amber-400 text-black font-bold text-2xl w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3">
                  {step.num}
                </div>
                <p className="text-white font-semibold">{step.text}</p>
              </motion.div>

              {index < steps.length - 1 && (
                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: 0.8 + index * 0.1 }}
                  viewport={{ once: true }}
                  className="text-amber-300 text-3xl hidden md:block"
                >
                  →
                </motion.div>
              )}
            </React.Fragment>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 1 }}
          viewport={{ once: true }}
          className="mt-12 bg-amber-900/30 backdrop-blur-sm p-6 rounded-xl border border-amber-300/30 inline-block"
        >
          <Target className="w-8 h-8 mx-auto mb-2 text-amber-300" />
          <p className="text-white font-semibold">Roadmap activable</p>
        </motion.div>
      </div>
    </Slide>
  );
}
