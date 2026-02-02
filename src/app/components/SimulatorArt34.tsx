"use client";

import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Calculator, ChevronDown, ChevronUp, Info } from "lucide-react";

const DGCINE_PROJECTS = [
  { id: 1, title: "La Serenísima", genre: "Drama", year: 2024 },
  { id: 2, title: "El Parque", genre: "Documental", year: 2023 },
  { id: 3, title: "Cristo Obrero", genre: "Drama", year: 2024 },
  { id: 4, title: "El Proceso", genre: "Thriller", year: 2025 },
];

export default function SimulatorArt34() {
  const [isExpanded, setIsExpanded] = useState(true);
  const [isrAmount, setIsrAmount] = useState(1000000);
  const [showProjects, setShowProjects] = useState(false);

  const calculations = useMemo(() => {
    const maxInvestment = isrAmount * 0.25; // 25% máximo
    const deduction = maxInvestment; // 100% deducible
    const netCost = 0; // Inversión deducible = costo neto 0

    return { maxInvestment, deduction, netCost };
  }, [isrAmount]);

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat("es-DO", {
      style: "currency",
      currency: "DOP",
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(amount);
  };

  return (
    <motion.div
      initial={{ opacity: 0, height: 0 }}
      animate={{
        opacity: isExpanded ? 1 : 0,
        height: isExpanded ? "auto" : 0,
      }}
      transition={{ duration: 0.3 }}
      className="overflow-hidden"
    >
      <div className="bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 p-6 md:p-8">
        <div className="grid md:grid-cols-2 gap-8">
          {/* Input section */}
          <div>
            <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
              <Calculator className="w-5 h-5 text-amber-300" />
              Calculadora Art. 34
            </h3>

            <div className="space-y-4">
              <div>
                <label className="text-sm text-white/70 mb-2 block">
                  Monto de ISR anual (RD$)
                </label>
                <input
                  type="range"
                  min="100000"
                  max="10000000"
                  step="100000"
                  value={isrAmount}
                  onChange={(e) => setIsrAmount(Number(e.target.value))}
                  className="w-full accent-amber-400"
                />
                <div className="text-right mt-2">
                  <input
                    type="number"
                    value={isrAmount}
                    onChange={(e) => setIsrAmount(Number(e.target.value))}
                    className="bg-white/10 border border-white/20 rounded-lg px-4 py-2 text-white w-32 text-right"
                  />
                </div>
              </div>

              <div>
                <label className="text-sm text-white/70 mb-2 block">
                  Proyecto dominicano
                </label>
                <select className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-2 text-white">
                  <option value="" className="bg-gray-800">
                    Selecciona un proyecto
                  </option>
                  {DGCINE_PROJECTS.map((project) => (
                    <option key={project.id} value={project.id} className="bg-gray-800">
                      {project.title} ({project.genre}, {project.year})
                    </option>
                  ))}
                </select>
              </div>

              <button
                onClick={() => setShowProjects(!showProjects)}
                className="flex items-center gap-2 text-amber-300 hover:text-amber-200 transition-colors text-sm"
              >
                <Info className="w-4 h-4" />
                Ver proyectos disponibles
                {showProjects ? (
                  <ChevronUp className="w-4 h-4" />
                ) : (
                  <ChevronDown className="w-4 h-4" />
                )}
              </button>

              <AnimatePresence>
                {showProjects && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    className="space-y-2"
                  >
                    {DGCINE_PROJECTS.map((project) => (
                      <div
                        key={project.id}
                        className="bg-white/5 p-3 rounded-lg text-sm"
                      >
                        <p className="text-white font-semibold">{project.title}</p>
                        <p className="text-white/60">
                          {project.genre} · {project.year}
                        </p>
                      </div>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>

          {/* Results section */}
          <div className="bg-gradient-to-br from-amber-900/30 to-amber-800/30 rounded-xl p-6 border border-amber-300/30">
            <h4 className="text-lg font-bold text-white mb-4">Resultados</h4>

            <div className="space-y-4">
              <div>
                <p className="text-sm text-white/70">Inversión máxima (25%)</p>
                <p className="text-2xl font-bold text-amber-300">
                  {formatCurrency(calculations.maxInvestment)}
                </p>
              </div>

              <div className="border-t border-white/10 pt-4">
                <p className="text-sm text-white/70">Deducción ISR</p>
                <p className="text-2xl font-bold text-green-400">
                  {formatCurrency(calculations.deduction)}
                </p>
              </div>

              <div className="border-t border-white/10 pt-4">
                <p className="text-sm text-white/70">Costo neto</p>
                <p className="text-2xl font-bold text-white">
                  {formatCurrency(calculations.netCost)}
                </p>
                <p className="text-xs text-green-400 mt-1">
                  ✓ Inversión 100% deducible
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-4 text-center">
          <button
            onClick={() => setIsExpanded(false)}
            className="text-sm text-white/60 hover:text-white transition-colors"
          >
            Ocultar calculadora
          </button>
        </div>
      </div>
    </motion.div>
  );
}
