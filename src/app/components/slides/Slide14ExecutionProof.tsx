"use client";

import { motion } from "framer-motion";
import { Film, Clapperboard, Building2 } from "lucide-react";
import Slide from "../Slide";

const projects = [
  {
    title: "En tu piel",
    company: "La Casita + Kovermann",
  },
  {
    title: "Lo que siento por ti",
    company: "La Casita",
  },
  {
    title: "A veces grito",
    company: "La Casita - César Rodríguez",
  },
  {
    title: "Motel (2021)",
    company: "Alan Nadal Piantini - Producer",
  },
  {
    title: "Marga en el DF",
    company: "La Casita - Sundance 2026",
  },
];

export default function Slide14ExecutionProof() {
  return (
    <Slide id="slide-14">
      <div className="text-center max-w-5xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-semibold mb-4 text-white drop-shadow-lg"
        >
          Tu capacidad de ejecución
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          viewport={{ once: true }}
          className="text-lg md:text-xl text-white/90 drop-shadow mb-12"
        >
          Esto no es teoría. Es infraestructura real con proyectos activos.
        </motion.p>

        {/* La Casita Section */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.4 }}
          viewport={{ once: true }}
          className="bg-amber-900/30 backdrop-blur-sm p-8 rounded-2xl border border-amber-300/30 mb-8"
        >
          <div className="flex justify-center gap-6 mb-6">
            <Film className="w-12 h-12 text-amber-300" />
            <Clapperboard className="w-12 h-12 text-amber-300" />
            <Building2 className="w-12 h-12 text-amber-300" />
          </div>
          <h3 className="text-2xl font-bold text-amber-200 mb-2">La Casita de Producciones</h3>
          <p className="text-white/90 mb-4">Base operativa en Santo Domingo - Validación de 29 proyectos Art. 34</p>
          <a
            href="https://www.instagram.com/lacasitafilms/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-amber-300 hover:text-amber-200 transition-colors underline decoration-dashed"
            data-cursor-hover
          >
            <Film className="w-4 h-4" />
            @lacasitafilms
          </a>
          <div className="grid md:grid-cols-2 gap-3 text-left max-w-2xl mx-auto">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.5 + index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white/10 p-3 rounded-lg"
              >
                <p className="text-white font-semibold text-sm">{project.title}</p>
                <p className="text-white/60 text-xs">{project.company}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Alan Nadal Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 }}
          viewport={{ once: true }}
          className="bg-white/10 backdrop-blur-sm p-6 rounded-2xl border border-white/20 mb-8"
        >
          <h4 className="text-xl font-bold text-white mb-3">Alan Nadal Pianti</h4>
          <p className="text-white/80 mb-2">Producer - IMDb Profile</p>
          <a
            href="https://www.imdb.com/name/nm1705423/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-amber-300 hover:text-amber-200 transition-colors underline decoration-dashed"
            data-cursor-hover
          >
            Ver perfil IMDb
          </a>
          <div className="flex flex-wrap justify-center gap-3 text-sm mt-3">
            <span className="bg-amber-900/50 px-3 py-1 rounded-full text-amber-200">Motel (2021)</span>
            <span className="bg-amber-900/50 px-3 py-1 rounded-full text-amber-200">Una breve historia de amor (2014)</span>
            <span className="bg-amber-900/50 px-3 py-1 rounded-full text-amber-200">Noche de circo (2013)</span>
          </div>
        </motion.div>

        {/* Platforms */}
        <div className="grid md:grid-cols-2 gap-6 max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            viewport={{ once: true }}
            className="bg-white/10 backdrop-blur-sm p-5 rounded-xl border border-white/20"
          >
            <h5 className="text-lg font-bold text-amber-200 mb-1">Vlockster</h5>
            <p className="text-white/80 text-sm mb-2">Streaming de cine independiente</p>
            <a
              href="https://vlockster.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-amber-300 hover:text-amber-200 transition-colors underline decoration-dashed text-sm"
              data-cursor-hover
            >
              vlockster.com ↗
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            viewport={{ once: true }}
            className="bg-white/10 backdrop-blur-sm p-5 rounded-xl border border-white/20"
          >
            <h5 className="text-lg font-bold text-amber-200 mb-1">29 Proyectos Validados</h5>
            <p className="text-white/80 text-sm">Art. 34 Ley de Cine RD</p>
          </motion.div>
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 1 }}
          viewport={{ once: true }}
          className="mt-8 text-2xl font-bold text-amber-200"
        >
          Infraestructura real. Proyectos activos.
        </motion.p>
      </div>
    </Slide>
  );
}
