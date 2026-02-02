"use client";

import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { PieChart, Pie, Cell, ResponsiveContainer } from "recharts";
import { Calculator, ChevronDown, ChevronUp, DollarSign } from "lucide-react";

const COLORS = ["#f59e0b", "#fbbf24", "#fcd34d", "#fde68a"];

interface BudgetItem {
  label: string;
  value: number;
}

const DEFAULT_BUDGET: BudgetItem[] = [
  { label: "Hoteles", value: 400000 },
  { label: "Crew", value: 300000 },
  { label: "Servicios", value: 200000 },
  { label: "Transporte", value: 100000 },
];

export default function SimulatorArt39() {
  const [isExpanded, setIsExpanded] = useState(true);
  const [budget, setBudget] = useState<BudgetItem[]>(DEFAULT_BUDGET);
  const [showMarket, setShowMarket] = useState(false);
  const [marketDiscount, setMarketDiscount] = useState(15); // 15% descuento típico

  const calculations = useMemo(() => {
    const totalLocal = budget.reduce((sum, item) => sum + item.value, 0);
    const creditGenerated = totalLocal * 0.25; // 25% crédito

    // Valor en mercado (con descuento)
    const marketValue = creditGenerated * (1 - marketDiscount / 100);

    return { totalLocal, creditGenerated, marketValue };
  }, [budget, marketDiscount]);

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat("es-DO", {
      style: "currency",
      currency: "DOP",
      maximumFractionDigits: 0,
    }).format(amount);
  };

  const updateBudgetItem = (index: number, value: number) => {
    const newBudget = [...budget];
    newBudget[index].value = value;
    setBudget(newBudget);
  };

  const pieData = budget.map((item) => ({
    name: item.label,
    value: item.value,
  }));

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
              Calculadora Art. 39
            </h3>

            <div className="space-y-4">
              <p className="text-sm text-white/70 mb-2">
                Presupuesto de producción en RD (desglose):
              </p>

              {budget.map((item, index) => (
                <div key={item.label} className="space-y-1">
                  <div className="flex justify-between text-sm">
                    <label className="text-white/80">{item.label}</label>
                    <span className="text-amber-300">
                      {formatCurrency(item.value)}
                    </span>
                  </div>
                  <input
                    type="range"
                    min="0"
                    max="1000000"
                    step="50000"
                    value={item.value}
                    onChange={(e) => updateBudgetItem(index, Number(e.target.value))}
                    className="w-full accent-amber-400"
                  />
                </div>
              ))}

              <button
                onClick={() => setShowMarket(!showMarket)}
                className="flex items-center gap-2 text-amber-300 hover:text-amber-200 transition-colors text-sm"
              >
                <DollarSign className="w-4 h-4" />
                {showMarket ? "Ocultar" : "Ver"} venta de crédito
                {showMarket ? (
                  <ChevronUp className="w-4 h-4" />
                ) : (
                  <ChevronDown className="w-4 h-4" />
                )}
              </button>
            </div>
          </div>

          {/* Results section */}
          <div>
            {/* Pie chart */}
            <div className="h-48 mb-4">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={pieData}
                    cx="50%"
                    cy="50%"
                    outerRadius={80}
                    dataKey="value"
                    label={({ name, percent }) =>
                      `${name} ${((percent || 0) * 100).toFixed(0)}%`
                    }
                    labelLine={false}
                  >
                    {pieData.map((entry, index) => (
                      <Cell
                        key={`cell-${index}`}
                        fill={COLORS[index % COLORS.length]}
                      />
                    ))}
                  </Pie>
                </PieChart>
              </ResponsiveContainer>
            </div>

            {/* Results */}
            <div className="bg-gradient-to-br from-amber-900/30 to-amber-800/30 rounded-xl p-6 border border-amber-300/30">
              <h4 className="text-lg font-bold text-white mb-4">Resultados</h4>

              <div className="space-y-4">
                <div>
                  <p className="text-sm text-white/70">Gasto certificado (local)</p>
                  <p className="text-2xl font-bold text-amber-300">
                    {formatCurrency(calculations.totalLocal)}
                  </p>
                </div>

                <div className="border-t border-white/10 pt-4">
                  <p className="text-sm text-white/70">Crédito generado (25%)</p>
                  <p className="text-2xl font-bold text-green-400">
                    {formatCurrency(calculations.creditGenerated)}
                  </p>
                </div>

                <AnimatePresence>
                  {showMarket && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      className="border-t border-white/10 pt-4"
                    >
                      <p className="text-sm text-white/70 mb-2">
                        Valor en mercado ({marketDiscount}% descuento)
                      </p>
                      <div className="flex items-center gap-2">
                        <input
                          type="range"
                          min="0"
                          max="30"
                          value={marketDiscount}
                          onChange={(e) =>
                            setMarketDiscount(Number(e.target.value))
                          }
                          className="flex-1 accent-amber-400"
                        />
                        <span className="text-white text-sm w-12 text-right">
                          {marketDiscount}%
                        </span>
                      </div>
                      <p className="text-2xl font-bold text-amber-200 mt-2">
                        {formatCurrency(calculations.marketValue)}
                      </p>
                      <p className="text-xs text-white/60 mt-1">
                        💰 Precio estimado de venta
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
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
