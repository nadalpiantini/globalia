"use client";

import { motion } from "framer-motion";
import Slide from "../Slide";

export default function Slide02ProblemISR() {
  return (
    <Slide id="slide-2">
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-semibold mb-6 text-white drop-shadow-lg">
            El punto de partida
          </h2>
          <p className="text-lg md:text-xl text-white/90 mb-4 drop-shadow">
            Globalia paga Impuesto Sobre la Renta en República Dominicana como
            parte normal de su operación. Una vez pagado, ese impuesto no genera
            activos, ingresos futuros ni ventajas estratégicas.
          </p>
          <p className="text-lg md:text-xl font-semibold text-white drop-shadow">
            El problema no es pagar impuestos, sino no convertirlos en una
            ventaja competitiva.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="bg-white/10 backdrop-blur-sm p-8 md:p-12 rounded-2xl text-center border border-white/20"
        >
          <p className="text-sm text-white/70 mb-4 uppercase tracking-wider">ISR anual</p>
          <div className="h-8 bg-white/30 rounded-lg mb-6 overflow-hidden">
            <motion.div
              initial={{ width: "100%" }}
              whileInView={{ width: "0%" }}
              transition={{ duration: 2, delay: 0.5 }}
              viewport={{ once: true }}
              className="h-full bg-gray-500 rounded-lg"
            />
          </div>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 2.5 }}
            viewport={{ once: true }}
            className="text-white/80 font-semibold"
          >
            Pago al Estado (sin retorno)
          </motion.p>
        </motion.div>
      </div>
    </Slide>
  );
}
