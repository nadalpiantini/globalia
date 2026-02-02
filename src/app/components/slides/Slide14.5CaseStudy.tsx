"use client";

import { motion } from "framer-motion";
import { Building2, TrendingUp, Award, Film } from "lucide-react";
import Slide from "../Slide";

export default function Slide14Dot5CaseStudy() {
  return (
    <Slide id="slide-14-5">
      <div className="text-center max-w-4xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-semibold mb-4 text-white drop-shadow-lg"
        >
          Caso Real: Grupo Piñero
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          viewport={{ once: true }}
          className="text-lg text-white/90 mb-8 drop-shadow"
        >
          Un ejemplo de cómo la industria hotelera ya utiliza el cine como estrategia
        </motion.p>

        {/* Case Study Card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.4 }}
          viewport={{ once: true }}
          className="bg-white/10 backdrop-blur-sm p-8 md:p-10 rounded-2xl border border-amber-300/30 text-left"
        >
          {/* Header */}
          <div className="flex items-center gap-3 mb-6 pb-6 border-b border-white/20">
            <Building2 className="w-10 h-10 text-amber-300" />
            <div>
              <h3 className="text-2xl font-bold text-white">Grupo Piñero</h3>
              <p className="text-amber-200 text-sm">Inversión en industria cinematográfica</p>
            </div>
          </div>

          {/* Key Stats */}
          <div className="grid md:grid-cols-2 gap-4 mb-6">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.5 }}
              viewport={{ once: true }}
              className="bg-amber-900/30 p-4 rounded-lg"
            >
              <TrendingUp className="w-6 h-6 text-amber-300 mb-2" />
              <p className="text-amber-200 text-sm font-semibold">Inversión</p>
              <p className="text-2xl font-bold text-white">25 años</p>
              <p className="text-white/70 text-xs">en cine</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.5 }}
              viewport={{ once: true }}
              className="bg-amber-900/30 p-4 rounded-lg"
            >
              <Award className="w-6 h-6 text-amber-300 mb-2" />
              <p className="text-amber-200 text-sm font-semibold">Inversión en RD</p>
              <p className="text-2xl font-bold text-white">US$1B+</p>
              <p className="text-white/70 text-xs">total</p>
            </motion.div>
          </div>

          {/* Project: Amanece en Samaná */}
          <div className="bg-white/5 p-5 rounded-lg mb-6">
            <div className="flex items-start gap-3 mb-3">
              <Film className="w-6 h-6 text-amber-300 flex-shrink-0 mt-1" />
              <div>
                <h4 className="text-lg font-bold text-white mb-1">&quot;Amanece en Samaná&quot;</h4>
                <p className="text-white/80 text-sm">Pre-estreno en Cayo Levantado Resort</p>
              </div>
            </div>
            <p className="text-white/90 text-sm">
              Película filmada en República Dominicana como parte de su estrategia
              de promoción cultural y sostenibilidad de destinos turísticos.
            </p>
          </div>

          {/* 2024 Results */}
          <div className="bg-gradient-to-r from-amber-900/40 to-amber-800/40 p-4 rounded-lg">
            <p className="text-sm text-amber-200 mb-1">Resultados 2024</p>
            <p className="text-3xl font-bold text-white">€987M</p>
            <p className="text-white/80 text-sm">6% crecimiento vs año anterior</p>
          </div>

          {/* Source */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.7 }}
            viewport={{ once: true }}
            className="mt-4 text-xs text-white/60"
          >
            Fuente:{" "}
            <a
              href="https://www.arecoa.com/sabor-latino/2024/11/11/grupo-pinero-invierte-en-la-industria-cinematografica-estrena-pelicula-amanece-en-samana/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-amber-300 hover:text-amber-200 underline decoration-dashed"
              data-cursor-hover
            >
              Arecoa.com - Noviembre 2024 ↗
            </a>
          </motion.div>
        </motion.div>

        {/* Key Insight */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          viewport={{ once: true }}
          className="mt-8 bg-amber-900/20 p-6 rounded-xl border border-amber-400/20"
        >
          <p className="text-white font-semibold text-lg">
            Grupo Piñero: &quot;Cine como vehículo de promoción de destinos&quot;
          </p>
          <p className="text-white/80 text-sm mt-2">
            Invierten en cine hace 25 años. Validación de que la estrategia funciona.
          </p>
        </motion.div>
      </div>
    </Slide>
  );
}
