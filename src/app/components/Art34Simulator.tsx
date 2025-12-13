"use client";

import { useEffect, useRef, useState } from "react";
import { create } from "zustand";
import { motion, animate } from "framer-motion";
import {
  Landmark,
  TrendingUp,
  Film,
  Calculator,
  ArrowRight,
  Percent,
  Sparkles,
  Coins,
  Factory,
} from "lucide-react";

type Art34State = {
  isr: number;
  pct: number;
  setIsr: (v: number) => void;
  setPct: (v: number) => void;
};

const useArt34Store = create<Art34State>((set) => ({
  isr: 10000000,
  pct: 25,
  setIsr: (v) => set({ isr: v }),
  setPct: (v) => set({ pct: v }),
}));

const fmt = (n: number) =>
  new Intl.NumberFormat("es-DO").format(Math.round(n));

// Animated counter component
function AnimatedCounter({ value, prefix = "" }: { value: number; prefix?: string }) {
  const [displayValue, setDisplayValue] = useState(value);
  const prevValue = useRef(value);

  useEffect(() => {
    const controls = animate(prevValue.current, value, {
      duration: 0.8,
      ease: "easeOut",
      onUpdate: (v) => setDisplayValue(Math.round(v)),
    });
    prevValue.current = value;
    return () => controls.stop();
  }, [value]);

  return (
    <span>
      {prefix}{fmt(displayValue)}
    </span>
  );
}

// Color based on percentage utilization
function getUtilizationColor(pct: number): string {
  if (pct <= 10) return "#22c55e"; // Green - low usage
  if (pct <= 20) return "#eab308"; // Yellow - moderate
  return "#ef4444"; // Red - near max
}

export default function Art34Simulator() {
  const { isr, pct, setIsr, setPct } = useArt34Store();
  const pctSafe = Math.min(25, Math.max(0, pct));
  const maxInvestment = (isr * pctSafe) / 100;

  const utilizationColor = getUtilizationColor(pctSafe);
  const utilizationPct = (pctSafe / 25) * 100;

  return (
    <div className="space-y-8">
      {/* Flow Diagram */}
      <div className="collage-paper p-6">
        <div className="stamp flex items-center gap-2 mb-6">
          <Sparkles className="w-4 h-4" />
          Flujo Art. 34
        </div>

        <div className="flex flex-col md:flex-row items-center justify-between gap-4 md:gap-2">
          {/* Step 1: ISR */}
          <motion.div
            className="flex flex-col items-center text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
          >
            <div className="w-16 h-16 rounded-full bg-red-500/20 border border-red-500/40 flex items-center justify-center">
              <Landmark className="w-8 h-8 text-red-400" />
            </div>
            <div className="mt-2 text-sm font-medium">ISR</div>
            <div className="text-xs text-white/50">Impuesto</div>
          </motion.div>

          <ArrowRight className="w-6 h-6 text-white/30 hidden md:block" />
          <div className="w-px h-6 bg-white/30 md:hidden" />

          {/* Step 2: Inversión */}
          <motion.div
            className="flex flex-col items-center text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            <div className="w-16 h-16 rounded-full bg-amber-500/20 border border-amber-500/40 flex items-center justify-center">
              <Coins className="w-8 h-8 text-amber-400" />
            </div>
            <div className="mt-2 text-sm font-medium">Inversión</div>
            <div className="text-xs text-white/50">hasta 25%</div>
          </motion.div>

          <ArrowRight className="w-6 h-6 text-white/30 hidden md:block" />
          <div className="w-px h-6 bg-white/30 md:hidden" />

          {/* Step 3: Producción */}
          <motion.div
            className="flex flex-col items-center text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            <div className="w-16 h-16 rounded-full bg-blue-500/20 border border-blue-500/40 flex items-center justify-center">
              <Factory className="w-8 h-8 text-blue-400" />
            </div>
            <div className="mt-2 text-sm font-medium">Producción</div>
            <div className="text-xs text-white/50">en RD</div>
          </motion.div>

          <ArrowRight className="w-6 h-6 text-white/30 hidden md:block" />
          <div className="w-px h-6 bg-white/30 md:hidden" />

          {/* Step 4: Activo */}
          <motion.div
            className="flex flex-col items-center text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            <div className="w-16 h-16 rounded-full bg-emerald-500/20 border border-emerald-500/40 flex items-center justify-center">
              <Film className="w-8 h-8 text-emerald-400" />
            </div>
            <div className="mt-2 text-sm font-medium">Activo</div>
            <div className="text-xs text-white/50">contenido</div>
          </motion.div>
        </div>
      </div>

      {/* Main Simulator */}
      <div className="grid md:grid-cols-2 gap-6">
        {/* Controls */}
        <div className="collage-paper p-6">
          <div className="flex items-center gap-3">
            <div className="stamp flex items-center gap-2">
              <Landmark className="w-4 h-4" />
              Ruta A · Artículo 34
            </div>
          </div>

          <div className="mt-4 flex items-start gap-3 text-white/80">
            <TrendingUp className="w-5 h-5 mt-1 opacity-60 flex-shrink-0" />
            <p>
              Esta ruta usa <b>ISR local de RD</b> para invertir en{" "}
              <b>proyectos dominicanos aprobados</b>. No se mezcla con Art.39.
            </p>
          </div>

          <div className="mt-6 space-y-5">
            <div>
              <label className="text-sm text-white/70 flex items-center gap-2">
                <Calculator className="w-4 h-4" />
                ISR a pagar (RD) — estimado anual
              </label>
              <input
                type="range"
                min={1000000}
                max={200000000}
                step={500000}
                value={isr}
                onChange={(e) => setIsr(Number(e.target.value))}
                className="w-full mt-2 accent-red-500"
              />
              <div className="mt-2 text-2xl font-semibold">
                RD$ <AnimatedCounter value={isr} />
              </div>
            </div>

            <div>
              <label className="text-sm text-white/70 flex items-center gap-2">
                <Percent className="w-4 h-4" />% a utilizar (máx 25%)
              </label>
              <input
                type="range"
                min={0}
                max={25}
                step={1}
                value={pctSafe}
                onChange={(e) => setPct(Number(e.target.value))}
                className="w-full mt-2"
                style={{ accentColor: utilizationColor }}
              />
              <div className="flex items-center gap-3 mt-2">
                <span
                  className="text-2xl font-semibold"
                  style={{ color: utilizationColor }}
                >
                  {pctSafe}%
                </span>
                {/* Utilization bar */}
                <div className="flex-1 h-2 bg-white/10 rounded-full overflow-hidden">
                  <motion.div
                    className="h-full rounded-full"
                    style={{ backgroundColor: utilizationColor }}
                    initial={{ width: 0 }}
                    animate={{ width: `${utilizationPct}%` }}
                    transition={{ duration: 0.5, ease: "easeOut" }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Results */}
        <div className="collage-paper p-6">
          <div className="stamp flex items-center gap-2">
            <Film className="w-4 h-4" />
            Resultado operativo
          </div>

          <div className="mt-5">
            <div className="text-sm text-white/70">
              Capacidad anual de inversión (Art.34)
            </div>
            <div className="text-4xl md:text-5xl font-semibold mt-2 text-emerald-400">
              RD$ <AnimatedCounter value={maxInvestment} />
            </div>
          </div>

          {/* Comparison: Evaporado vs Invertido */}
          <div className="mt-6 space-y-3">
            <div className="text-sm text-white/70 mb-2">
              Comparación: ISR sin Art.34 vs con Art.34
            </div>

            {/* Evaporated bar */}
            <div>
              <div className="flex justify-between text-xs mb-1">
                <span className="text-red-400">💨 Sin Art.34 (evaporado)</span>
                <span className="text-white/60">RD$ {fmt(isr)}</span>
              </div>
              <div className="h-4 bg-red-500/20 rounded-full overflow-hidden">
                <motion.div
                  className="h-full bg-gradient-to-r from-red-500 to-red-600 rounded-full"
                  initial={{ width: 0 }}
                  animate={{ width: "100%" }}
                  transition={{ duration: 0.8, ease: "easeOut" }}
                />
              </div>
            </div>

            {/* Invested bar */}
            <div>
              <div className="flex justify-between text-xs mb-1">
                <span className="text-emerald-400">✨ Con Art.34 (invertido)</span>
                <span className="text-white/60">RD$ {fmt(maxInvestment)}</span>
              </div>
              <div className="h-4 bg-emerald-500/20 rounded-full overflow-hidden">
                <motion.div
                  className="h-full bg-gradient-to-r from-emerald-500 to-emerald-600 rounded-full"
                  initial={{ width: 0 }}
                  animate={{ width: `${pctSafe * 4}%` }}
                  transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
                />
              </div>
            </div>

            {/* Savings indicator */}
            <motion.div
              className="mt-4 p-3 rounded-lg bg-emerald-500/10 border border-emerald-500/20"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
            >
              <div className="flex items-center justify-between">
                <span className="text-sm text-emerald-400">
                  💰 Recuperas como activo
                </span>
                <span className="text-lg font-bold text-emerald-400">
                  RD$ <AnimatedCounter value={maxInvestment} />
                </span>
              </div>
            </motion.div>
          </div>

          <div className="mt-4 text-xs text-white/50">
            El {pctSafe}% de tu ISR se convierte en producción y contenido,
            no desaparece.
          </div>
        </div>
      </div>

      {/* Annual Capacity Sparkline */}
      <div className="collage-paper p-6">
        <div className="stamp flex items-center gap-2 mb-4">
          <TrendingUp className="w-4 h-4" />
          Capacidad Anual (proyección 5 años)
        </div>

        <div className="flex items-end justify-between gap-2 h-24">
          {[1, 2, 3, 4, 5].map((year) => {
            // Simulate slight growth each year
            const yearInvestment = maxInvestment * (1 + (year - 1) * 0.05);
            const heightPct = (yearInvestment / (maxInvestment * 1.2)) * 100;
            return (
              <motion.div
                key={year}
                className="flex-1 flex flex-col items-center gap-1"
                initial={{ opacity: 0, scaleY: 0 }}
                animate={{ opacity: 1, scaleY: 1 }}
                transition={{ delay: 0.1 * year, duration: 0.5 }}
              >
                <div
                  className="w-full bg-gradient-to-t from-emerald-600 to-emerald-400 rounded-t-sm"
                  style={{
                    height: `${heightPct}%`,
                    minHeight: "8px",
                    transformOrigin: "bottom",
                  }}
                />
                <span className="text-xs text-white/50">Año {year}</span>
              </motion.div>
            );
          })}
        </div>

        <div className="mt-4 text-sm text-white/60 flex items-center gap-2">
          <ArrowRight className="w-4 h-4" />
          Proyección asumiendo ISR constante. Ajustar con crecimiento real.
        </div>
      </div>

      <div className="text-xs text-white/50 text-center">
        Nota: Ajusta números finales con fiscal/finanzas y parámetros vigentes
        (DGCINE/DGII).
      </div>
    </div>
  );
}
