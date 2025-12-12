"use client";

import { create } from "zustand";
import {
  Landmark,
  TrendingUp,
  Film,
  Calculator,
  ArrowRight,
  Percent,
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

export default function Art34Simulator() {
  const { isr, pct, setIsr, setPct } = useArt34Store();
  const pctSafe = Math.min(25, Math.max(0, pct));
  const maxInvestment = (isr * pctSafe) / 100;

  return (
    <div className="grid md:grid-cols-2 gap-6">
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
              className="w-full mt-2"
            />
            <div className="mt-2 text-2xl font-semibold">RD$ {fmt(isr)}</div>
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
            />
            <div className="mt-2 text-2xl font-semibold">{pctSafe}%</div>
          </div>
        </div>
      </div>

      <div className="collage-paper p-6">
        <div className="stamp flex items-center gap-2">
          <Film className="w-4 h-4" />
          Resultado operativo
        </div>

        <div className="mt-5">
          <div className="text-sm text-white/70">
            Capacidad anual de inversión (Art.34)
          </div>
          <div className="text-4xl md:text-5xl font-semibold mt-2 flex items-center gap-3">
            RD$ {fmt(maxInvestment)}
          </div>
          <div className="text-white/70 mt-3 flex items-start gap-2">
            <ArrowRight className="w-4 h-4 mt-1 flex-shrink-0" />
            <span>
              Ese monto se estructura como inversión en producción dominicana
              aprobada por DGCINE.
            </span>
          </div>
        </div>

        <div className="mt-8 space-y-3 text-white/75">
          <div className="flex justify-between">
            <span className="flex items-center gap-2">
              <Landmark className="w-4 h-4 opacity-50" />
              ISR total (RD)
            </span>
            <span>RD$ {fmt(isr)}</span>
          </div>
          <div className="flex justify-between">
            <span className="flex items-center gap-2">
              <Percent className="w-4 h-4 opacity-50" />
              Techo Art.34
            </span>
            <span>{pctSafe}%</span>
          </div>
          <div className="hrline my-2" />
          <div className="flex justify-between font-semibold">
            <span className="flex items-center gap-2">
              <Film className="w-4 h-4 opacity-50" />
              Inversión anual
            </span>
            <span>RD$ {fmt(maxInvestment)}</span>
          </div>
        </div>

        <div className="mt-6 text-xs text-white/60">
          Nota: Ajusta números finales con fiscal/finanzas y parámetros vigentes
          (DGCINE/DGII).
        </div>
      </div>
    </div>
  );
}
