"use client";

import { create } from "zustand";

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
        <div className="stamp">Ruta A · Artículo 34</div>
        <p className="mt-4 text-white/80">
          Esta ruta usa <b>ISR local de RD</b> para invertir en{" "}
          <b>proyectos dominicanos aprobados</b>. No se mezcla con Art.39.
        </p>

        <div className="mt-6 space-y-5">
          <div>
            <label className="text-sm text-white/70">
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
            <label className="text-sm text-white/70">
              % a utilizar (máx 25%)
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
        <div className="stamp">Resultado operativo</div>

        <div className="mt-5">
          <div className="text-sm text-white/70">
            Capacidad anual de inversión (Art.34)
          </div>
          <div className="text-4xl md:text-5xl font-semibold mt-2">
            RD$ {fmt(maxInvestment)}
          </div>
          <div className="text-white/70 mt-3">
            Ese monto se estructura como inversión en producción dominicana
            aprobada por DGCINE, y se deduce según el régimen aplicable de
            Art.34.
          </div>
        </div>

        <div className="mt-8 space-y-3 text-white/75">
          <div className="flex justify-between">
            <span>ISR total (RD)</span>
            <span>RD$ {fmt(isr)}</span>
          </div>
          <div className="flex justify-between">
            <span>Techo Art.34</span>
            <span>{pctSafe}%</span>
          </div>
          <div className="hrline my-2" />
          <div className="flex justify-between font-semibold">
            <span>Inversión anual estimada</span>
            <span>RD$ {fmt(maxInvestment)}</span>
          </div>
        </div>

        <div className="mt-6 text-xs text-white/60">
          Nota: Ajusta números finales con fiscal/finanzas y parámetros vigentes
          del programa (DGCINE/DGII).
        </div>
      </div>
    </div>
  );
}
