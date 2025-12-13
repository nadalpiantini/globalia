"use client";

import { motion } from "framer-motion";
import {
  TrendingUp,
  DollarSign,
  Hotel,
  Film,
  Shield,
  AlertTriangle,
  CheckCircle2,
  Clock,
  Target,
  Users,
  Plane,
  Building2,
  ArrowRight,
  Landmark,
  Receipt,
} from "lucide-react";

// KPI Data
const kpis = [
  {
    id: "roi",
    label: "ROI Proyectado",
    value: "3.2x",
    subtext: "en 24 meses",
    trend: "+15%",
    icon: TrendingUp,
    color: "#22c55e",
  },
  {
    id: "pr-value",
    label: "PR Value Potencial",
    value: "€2.5M",
    subtext: "exposición mediática",
    trend: "+40%",
    icon: Film,
    color: "#3b82f6",
  },
  {
    id: "ocupacion",
    label: "Ocupación Incremental",
    value: "+12%",
    subtext: "en temporada baja",
    trend: "estable",
    icon: Hotel,
    color: "#f59e0b",
  },
  {
    id: "credito",
    label: "Crédito Fiscal Anual",
    value: "RD$75M",
    subtext: "Art.39 estimado",
    trend: "+25%",
    icon: DollarSign,
    color: "#8b5cf6",
  },
];

// Risk Matrix
const risks = [
  {
    id: "regulatory",
    risk: "Cambio regulatorio en Ley 108-10",
    probability: "Baja",
    impact: "Alto",
    mitigation: "Monitoreo DGCINE + diversificación de rutas",
    status: "mitigated",
  },
  {
    id: "market",
    risk: "Liquidez del mercado de créditos",
    probability: "Media",
    impact: "Medio",
    mitigation: "Red de compradores pre-establecida + descuentos escalonados",
    status: "monitoring",
  },
  {
    id: "execution",
    risk: "Calidad de producción inconsistente",
    probability: "Baja",
    impact: "Medio",
    mitigation: "Standards + auditoría de Kovermann Pictures",
    status: "mitigated",
  },
  {
    id: "pipeline",
    risk: "Pipeline de proyectos insuficiente",
    probability: "Media",
    impact: "Alto",
    mitigation: "Hub Madrid + red de productoras europeas",
    status: "monitoring",
  },
];

// Route Comparison
const routeComparison = [
  {
    feature: "Base legal",
    art34: "Inversión en proyectos aprobados",
    art39: "Gasto local certificado",
  },
  {
    feature: "Origen de fondos",
    art34: "ISR local de RD",
    art39: "Cualquier gasto en RD",
  },
  {
    feature: "Beneficio",
    art34: "Hasta 25% del ISR",
    art39: "25% del gasto como crédito",
  },
  {
    feature: "Liquidez",
    art34: "Activo (producción)",
    art39: "Efectivo (mercado)",
  },
  {
    feature: "Complejidad",
    art34: "Alta (aprobación DGCINE)",
    art39: "Media (certificación)",
  },
];

// Timeline
const timeline = [
  { phase: "Q1", label: "Setup Hub Madrid", status: "pending" },
  { phase: "Q2", label: "Primer proyecto piloto", status: "pending" },
  { phase: "Q3", label: "Escala operaciones", status: "pending" },
  { phase: "Q4", label: "ROI positivo", status: "pending" },
];

const getStatusColor = (status: string) => {
  switch (status) {
    case "mitigated":
      return "#22c55e";
    case "monitoring":
      return "#eab308";
    case "critical":
      return "#ef4444";
    default:
      return "#6b7280";
  }
};

const getStatusIcon = (status: string) => {
  switch (status) {
    case "mitigated":
      return CheckCircle2;
    case "monitoring":
      return Clock;
    case "critical":
      return AlertTriangle;
    default:
      return Shield;
  }
};

export default function BoardroomDashboard() {
  return (
    <div className="py-16 space-y-12">
      {/* Header */}
      <div className="text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 mb-4"
        >
          <Building2 className="w-4 h-4 text-blue-400" />
          <span className="text-sm text-white/70">Vista Ejecutiva</span>
        </motion.div>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-3xl md:text-4xl font-bold"
        >
          Dashboard Estratégico
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="mt-2 text-white/60"
        >
          Métricas clave, riesgos y comparativa de rutas fiscales
        </motion.p>
      </div>

      {/* KPI Cards */}
      <section>
        <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
          <Target className="w-5 h-5 text-emerald-400" />
          Indicadores Clave
        </h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {kpis.map((kpi, index) => {
            const Icon = kpi.icon;
            return (
              <motion.div
                key={kpi.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * index }}
                className="p-4 rounded-xl bg-white/5 border border-white/10 hover:bg-white/[0.07] transition-colors"
              >
                <div className="flex items-center justify-between mb-3">
                  <div
                    className="w-10 h-10 rounded-lg flex items-center justify-center"
                    style={{ backgroundColor: `${kpi.color}20` }}
                  >
                    <Icon className="w-5 h-5" style={{ color: kpi.color }} />
                  </div>
                  <span className="text-xs px-2 py-1 rounded-full bg-emerald-500/20 text-emerald-400">
                    {kpi.trend}
                  </span>
                </div>
                <div className="text-2xl md:text-3xl font-bold" style={{ color: kpi.color }}>
                  {kpi.value}
                </div>
                <div className="text-sm text-white/70 mt-1">{kpi.label}</div>
                <div className="text-xs text-white/50">{kpi.subtext}</div>
              </motion.div>
            );
          })}
        </div>
      </section>

      {/* Route Comparison */}
      <section>
        <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
          <ArrowRight className="w-5 h-5 text-blue-400" />
          Comparativa de Rutas Fiscales
        </h3>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-white/10">
                <th className="text-left py-3 px-4 text-white/50 font-medium">
                  Característica
                </th>
                <th className="text-left py-3 px-4">
                  <div className="flex items-center gap-2">
                    <Landmark className="w-4 h-4 text-red-400" />
                    <span className="text-red-400">Art. 34</span>
                  </div>
                </th>
                <th className="text-left py-3 px-4">
                  <div className="flex items-center gap-2">
                    <Receipt className="w-4 h-4 text-amber-400" />
                    <span className="text-amber-400">Art. 39</span>
                  </div>
                </th>
              </tr>
            </thead>
            <tbody>
              {routeComparison.map((row, index) => (
                <motion.tr
                  key={row.feature}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.05 * index }}
                  className="border-b border-white/5 hover:bg-white/[0.02]"
                >
                  <td className="py-3 px-4 text-white/70">{row.feature}</td>
                  <td className="py-3 px-4 text-white/90">{row.art34}</td>
                  <td className="py-3 px-4 text-white/90">{row.art39}</td>
                </motion.tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* Risk Matrix */}
      <section>
        <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
          <Shield className="w-5 h-5 text-amber-400" />
          Matriz de Riesgos
        </h3>
        <div className="space-y-3">
          {risks.map((risk, index) => {
            const StatusIcon = getStatusIcon(risk.status);
            const statusColor = getStatusColor(risk.status);
            return (
              <motion.div
                key={risk.id}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * index }}
                className="p-4 rounded-xl bg-white/5 border border-white/10"
              >
                <div className="flex items-start justify-between gap-4">
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2">
                      <StatusIcon
                        className="w-4 h-4"
                        style={{ color: statusColor }}
                      />
                      <span className="font-medium">{risk.risk}</span>
                    </div>
                    <div className="flex gap-4 text-xs text-white/50 mb-2">
                      <span>
                        Probabilidad:{" "}
                        <span className="text-white/70">{risk.probability}</span>
                      </span>
                      <span>
                        Impacto:{" "}
                        <span className="text-white/70">{risk.impact}</span>
                      </span>
                    </div>
                    <div className="text-sm text-white/60">
                      <span className="text-white/40">Mitigación:</span>{" "}
                      {risk.mitigation}
                    </div>
                  </div>
                  <span
                    className="text-xs px-2 py-1 rounded-full capitalize"
                    style={{
                      backgroundColor: `${statusColor}20`,
                      color: statusColor,
                    }}
                  >
                    {risk.status === "mitigated" ? "Mitigado" : "Monitoreo"}
                  </span>
                </div>
              </motion.div>
            );
          })}
        </div>
      </section>

      {/* Timeline */}
      <section>
        <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
          <Clock className="w-5 h-5 text-purple-400" />
          Timeline de Implementación
        </h3>
        <div className="flex items-center justify-between gap-2 overflow-x-auto pb-4">
          {timeline.map((item, index) => (
            <motion.div
              key={item.phase}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.1 * index }}
              className="flex-1 min-w-[140px]"
            >
              <div className="relative">
                {/* Connector line */}
                {index < timeline.length - 1 && (
                  <div className="absolute top-4 left-1/2 w-full h-0.5 bg-white/10" />
                )}
                {/* Phase dot */}
                <div className="relative z-10 flex flex-col items-center">
                  <div className="w-8 h-8 rounded-full bg-purple-500/20 border border-purple-500/40 flex items-center justify-center mb-2">
                    <span className="text-xs font-bold text-purple-400">
                      {item.phase}
                    </span>
                  </div>
                  <span className="text-sm text-center text-white/80">
                    {item.label}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* System Overview */}
      <section className="p-6 rounded-xl bg-gradient-to-br from-white/5 to-white/[0.02] border border-white/10">
        <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
          <Users className="w-5 h-5 text-blue-400" />
          Sistema Operativo
        </h3>
        <div className="grid md:grid-cols-3 gap-6">
          <div className="text-center">
            <div className="w-12 h-12 mx-auto rounded-full bg-blue-500/20 border border-blue-500/40 flex items-center justify-center mb-3">
              <Plane className="w-6 h-6 text-blue-400" />
            </div>
            <div className="font-semibold">Madrid</div>
            <div className="text-sm text-white/60">
              Hub de atracción y empaquetado de proyectos
            </div>
          </div>
          <div className="text-center">
            <div className="w-12 h-12 mx-auto rounded-full bg-emerald-500/20 border border-emerald-500/40 flex items-center justify-center mb-3">
              <Film className="w-6 h-6 text-emerald-400" />
            </div>
            <div className="font-semibold">RD</div>
            <div className="text-sm text-white/60">
              Ejecución, producción y cumplimiento fiscal
            </div>
          </div>
          <div className="text-center">
            <div className="w-12 h-12 mx-auto rounded-full bg-amber-500/20 border border-amber-500/40 flex items-center justify-center mb-3">
              <Hotel className="w-6 h-6 text-amber-400" />
            </div>
            <div className="font-semibold">Globalia</div>
            <div className="text-sm text-white/60">
              Ocupación hotelera + movilidad aérea + marca
            </div>
          </div>
        </div>
      </section>

      {/* Quick Stats Footer */}
      <section className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-6 border-t border-white/10">
        <div className="text-center">
          <div className="text-2xl font-bold text-white">9</div>
          <div className="text-xs text-white/50">Capítulos del pitch</div>
        </div>
        <div className="text-center">
          <div className="text-2xl font-bold text-emerald-400">2</div>
          <div className="text-xs text-white/50">Rutas fiscales</div>
        </div>
        <div className="text-center">
          <div className="text-2xl font-bold text-blue-400">3</div>
          <div className="text-xs text-white/50">Geografías clave</div>
        </div>
        <div className="text-center">
          <div className="text-2xl font-bold text-amber-400">4</div>
          <div className="text-xs text-white/50">Riesgos monitoreados</div>
        </div>
      </section>
    </div>
  );
}
