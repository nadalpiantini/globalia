"use client";

import { motion } from "framer-motion";
import { Receipt } from "lucide-react";
import Slide from "../Slide";

export default function Slide08Art39() {
  return (
    <Slide id="slide-8" pinned scrollDistance={1000}>
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="flex items-center gap-3 mb-4">
            <Receipt className="w-10 h-10 text-amber-300" />
            <h2 className="text-4xl md:text-5xl font-semibold text-white drop-shadow-lg">
              Artículo 39
            </h2>
          </div>
          <p className="text-lg md:text-xl text-white/90 mb-4 drop-shadow">
            El Artículo 39 aplica a producciones que gastan dinero real en RD.
            Ese gasto genera un crédito fiscal del 25%.
          </p>
          <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl border border-white/20">
            <p className="text-amber-200 font-semibold mb-2">El crédito puede:</p>
            <ul className="text-white/90 space-y-2">
              <li>• Usarse para compensar ISR</li>
              <li>• Venderse en el mercado local</li>
            </ul>
          </div>
          <p className="mt-4 text-lg font-semibold text-amber-200 drop-shadow">
            Aquí no se usa ISR. Aquí se monetiza la producción.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="bg-white/10 backdrop-blur-sm p-8 md:p-12 rounded-2xl text-center border border-white/20"
        >
          <p className="text-sm text-white/70 mb-6 uppercase tracking-wider">Producción en RD</p>
          <div className="text-4xl mb-6">$ $ $ $ $ $</div>
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.5 }}
            viewport={{ once: true }}
            className="text-amber-200 text-2xl font-bold mb-4"
          >
            ↓ 25%
          </motion.div>
          <p className="text-white font-semibold text-lg">Crédito fiscal transferible</p>
        </motion.div>
      </div>
    </Slide>
  );
}
