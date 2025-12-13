"use client";

import { useEffect, useRef, useState } from "react";
import { create } from "zustand";
import { motion, animate } from "framer-motion";
import {
  Receipt,
  Banknote,
  ArrowRight,
  TrendingDown,
  BadgeDollarSign,
  Store,
  Users,
  Building,
  Factory,
  Sparkles,
} from "lucide-react";

type Art39State = {
  localSpend: number;
  resalePct: number;
  setLocalSpend: (v: number) => void;
  setResalePct: (v: number) => void;
};

const useArt39Store = create<Art39State>((set) => ({
  localSpend: 30000000,
  resalePct: 10,
  setLocalSpend: (v) => set({ localSpend: v }),
  setResalePct: (v) => set({ resalePct: v }),
}));

const fmt = (n: number) =>
  new Intl.NumberFormat("es-DO").format(Math.round(n));

// Animated counter component
function AnimatedCounter({ value }: { value: number }) {
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

  return <span>{fmt(displayValue)}</span>;
}

// Buyer personas for the marketplace
const buyerPersonas = [
  {
    id: "corporate",
    name: "Corporativo",
    icon: Building,
    color: "#3b82f6",
    discountRange: "5-10%",
    demand: "Alta",
  },
  {
    id: "industrial",
    name: "Industrial",
    icon: Factory,
    color: "#22c55e",
    discountRange: "10-15%",
    demand: "Media",
  },
  {
    id: "pyme",
    name: "PYME",
    icon: Users,
    color: "#f59e0b",
    discountRange: "15-25%",
    demand: "Alta",
  },
];

// Get liquidity level based on discount
function getLiquidityLevel(pct: number): { level: string; color: string; width: number } {
  if (pct <= 8) return { level: "Baja", color: "#ef4444", width: 25 };
  if (pct <= 15) return { level: "Media", color: "#eab308", width: 60 };
  return { level: "Alta", color: "#22c55e", width: 95 };
}

export default function Art39Marketplace() {
  const { localSpend, resalePct, setLocalSpend, setResalePct } =
    useArt39Store();
  const credit = localSpend * 0.25;
  const resale = credit * (1 - resalePct / 100);
  const liquidity = getLiquidityLevel(resalePct);

  return (
    <div className="space-y-8">
      {/* Flow Diagram */}
      <div className="collage-paper p-6">
        <div className="stamp flex items-center gap-2 mb-6">
          <Sparkles className="w-4 h-4" />
          Flujo Art. 39
        </div>

        <div className="flex flex-col md:flex-row items-center justify-between gap-4 md:gap-2">
          {/* Step 1: Gasto Local */}
          <motion.div
            className="flex flex-col items-center text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
          >
            <div className="w-16 h-16 rounded-full bg-blue-500/20 border border-blue-500/40 flex items-center justify-center">
              <Banknote className="w-8 h-8 text-blue-400" />
            </div>
            <div className="mt-2 text-sm font-medium">Gasto Local</div>
            <div className="text-xs text-white/50">en RD</div>
          </motion.div>

          <ArrowRight className="w-6 h-6 text-white/30 hidden md:block" />
          <div className="w-px h-6 bg-white/30 md:hidden" />

          {/* Step 2: Crédito */}
          <motion.div
            className="flex flex-col items-center text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            <div className="w-16 h-16 rounded-full bg-amber-500/20 border border-amber-500/40 flex items-center justify-center">
              <BadgeDollarSign className="w-8 h-8 text-amber-400" />
            </div>
            <div className="mt-2 text-sm font-medium">Crédito 25%</div>
            <div className="text-xs text-white/50">transferible</div>
          </motion.div>

          <ArrowRight className="w-6 h-6 text-white/30 hidden md:block" />
          <div className="w-px h-6 bg-white/30 md:hidden" />

          {/* Step 3: Marketplace */}
          <motion.div
            className="flex flex-col items-center text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            <div className="w-16 h-16 rounded-full bg-emerald-500/20 border border-emerald-500/40 flex items-center justify-center">
              <Store className="w-8 h-8 text-emerald-400" />
            </div>
            <div className="mt-2 text-sm font-medium">Marketplace</div>
            <div className="text-xs text-white/50">venta local</div>
          </motion.div>

          <ArrowRight className="w-6 h-6 text-white/30 hidden md:block" />
          <div className="w-px h-6 bg-white/30 md:hidden" />

          {/* Step 4: Cash */}
          <motion.div
            className="flex flex-col items-center text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            <div className="w-16 h-16 rounded-full bg-purple-500/20 border border-purple-500/40 flex items-center justify-center">
              <Receipt className="w-8 h-8 text-purple-400" />
            </div>
            <div className="mt-2 text-sm font-medium">Efectivo</div>
            <div className="text-xs text-white/50">recuperado</div>
          </motion.div>
        </div>
      </div>

      {/* Main Controls */}
      <div className="grid md:grid-cols-2 gap-6">
        <div className="collage-paper p-6">
          <div className="stamp flex items-center gap-2">
            <Receipt className="w-4 h-4" />
            Ruta B · Artículo 39
          </div>

          <div className="mt-4 flex items-start gap-3 text-white/80">
            <Banknote className="w-5 h-5 mt-1 opacity-60 flex-shrink-0" />
            <p>
              Esta ruta genera un <b>crédito fiscal transferible</b> basado en{" "}
              <b>gasto local ejecutado en RD</b>.
            </p>
          </div>

          <div className="mt-6 space-y-5">
            <div>
              <label className="text-sm text-white/70 flex items-center gap-2">
                <Banknote className="w-4 h-4" />
                Gasto local ejecutado en RD
              </label>
              <input
                type="range"
                min={2000000}
                max={400000000}
                step={500000}
                value={localSpend}
                onChange={(e) => setLocalSpend(Number(e.target.value))}
                className="w-full mt-2 accent-blue-500"
              />
              <div className="mt-2 text-2xl font-semibold">
                RD$ <AnimatedCounter value={localSpend} />
              </div>
            </div>

            <div>
              <label className="text-sm text-white/70 flex items-center gap-2">
                <TrendingDown className="w-4 h-4" />
                Descuento de reventa (mercado)
              </label>
              <input
                type="range"
                min={0}
                max={30}
                step={1}
                value={resalePct}
                onChange={(e) => setResalePct(Number(e.target.value))}
                className="w-full mt-2 accent-amber-500"
              />
              <div className="flex items-center gap-3 mt-2">
                <span className="text-2xl font-semibold">{resalePct}%</span>
                <span className="text-sm text-white/50">
                  (más descuento = más liquidez)
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Results */}
        <div className="collage-paper p-6">
          <div className="stamp flex items-center gap-2">
            <Store className="w-4 h-4" />
            Crédito y salida
          </div>

          <div className="mt-5">
            <div className="text-sm text-white/70">
              Crédito fiscal (25% del gasto local)
            </div>
            <div className="text-4xl md:text-5xl font-semibold mt-2 text-amber-400">
              RD$ <AnimatedCounter value={credit} />
            </div>
          </div>

          {/* Liquidity Meter */}
          <div className="mt-6">
            <div className="flex justify-between text-sm mb-2">
              <span className="text-white/70">Liquidez del mercado</span>
              <span style={{ color: liquidity.color }}>{liquidity.level}</span>
            </div>
            <div className="h-3 bg-white/10 rounded-full overflow-hidden">
              <motion.div
                className="h-full rounded-full"
                style={{ backgroundColor: liquidity.color }}
                initial={{ width: 0 }}
                animate={{ width: `${liquidity.width}%` }}
                transition={{ duration: 0.5, ease: "easeOut" }}
              />
            </div>
          </div>

          {/* Final Value */}
          <motion.div
            className="mt-6 p-4 rounded-lg bg-emerald-500/10 border border-emerald-500/20"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            <div className="text-sm text-white/70">
              Efectivo recuperado (después de {resalePct}% descuento)
            </div>
            <div className="text-3xl font-bold text-emerald-400 mt-1">
              RD$ <AnimatedCounter value={resale} />
            </div>
          </motion.div>
        </div>
      </div>

      {/* Buyer Personas */}
      <div className="collage-paper p-6">
        <div className="stamp flex items-center gap-2 mb-6">
          <Users className="w-4 h-4" />
          Compradores en el Marketplace
        </div>

        <div className="grid md:grid-cols-3 gap-4">
          {buyerPersonas.map((persona, index) => {
            const Icon = persona.icon;
            const isActive =
              (persona.id === "corporate" && resalePct <= 10) ||
              (persona.id === "industrial" && resalePct > 10 && resalePct <= 15) ||
              (persona.id === "pyme" && resalePct > 15);

            return (
              <motion.div
                key={persona.id}
                className={`p-4 rounded-lg border transition-all duration-300 ${
                  isActive
                    ? "bg-white/5 border-white/20"
                    : "bg-white/[0.02] border-white/10 opacity-50"
                }`}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: isActive ? 1 : 0.5, y: 0 }}
                transition={{ delay: 0.1 * index }}
              >
                <div className="flex items-center gap-3">
                  <div
                    className="w-10 h-10 rounded-full flex items-center justify-center"
                    style={{ backgroundColor: `${persona.color}20` }}
                  >
                    <Icon className="w-5 h-5" style={{ color: persona.color }} />
                  </div>
                  <div>
                    <div className="font-medium">{persona.name}</div>
                    <div className="text-xs text-white/50">
                      Descuento: {persona.discountRange}
                    </div>
                  </div>
                </div>
                <div className="mt-3 flex justify-between text-sm">
                  <span className="text-white/50">Demanda</span>
                  <span style={{ color: persona.color }}>{persona.demand}</span>
                </div>
                {isActive && (
                  <motion.div
                    className="mt-2 text-xs text-emerald-400"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                  >
                    ✓ Probable comprador
                  </motion.div>
                )}
              </motion.div>
            );
          })}
        </div>

        <div className="mt-4 text-sm text-white/50 text-center">
          A mayor descuento, más compradores interesados en el crédito fiscal.
        </div>
      </div>

      {/* Comparison Summary */}
      <div className="collage-paper p-6">
        <div className="stamp flex items-center gap-2 mb-4">
          <BadgeDollarSign className="w-4 h-4" />
          Resumen de la Operación
        </div>

        <div className="space-y-3 text-white/80">
          <div className="flex justify-between items-center">
            <span className="flex items-center gap-2">
              <Banknote className="w-4 h-4 text-blue-400" />
              Gasto local ejecutado
            </span>
            <span className="font-medium">RD$ {fmt(localSpend)}</span>
          </div>
          <div className="flex justify-between items-center">
            <span className="flex items-center gap-2">
              <BadgeDollarSign className="w-4 h-4 text-amber-400" />
              Crédito generado (25%)
            </span>
            <span className="font-medium text-amber-400">RD$ {fmt(credit)}</span>
          </div>
          <div className="flex justify-between items-center">
            <span className="flex items-center gap-2">
              <TrendingDown className="w-4 h-4 text-red-400" />
              Descuento mercado ({resalePct}%)
            </span>
            <span className="font-medium text-red-400">
              -RD$ {fmt(credit - resale)}
            </span>
          </div>
          <div className="hrline my-3" />
          <div className="flex justify-between items-center text-lg">
            <span className="flex items-center gap-2 font-semibold">
              <Receipt className="w-5 h-5 text-emerald-400" />
              Efectivo neto
            </span>
            <span className="font-bold text-emerald-400">
              RD$ {fmt(resale)}
            </span>
          </div>
        </div>

        <div className="mt-4 text-xs text-white/50">
          Nota: Precio real depende de demanda, plazos y compliance certificado.
        </div>
      </div>
    </div>
  );
}
