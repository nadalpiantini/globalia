"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Building2,
  FileCheck,
  Receipt,
  Rocket,
  CheckCircle2,
  Circle,
  Clock,
  ChevronDown,
  ChevronUp,
  Sparkles,
  AlertCircle,
} from "lucide-react";

type DecisionStatus = "pending" | "reviewing" | "approved";

interface Decision {
  id: string;
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  description: string;
  details: string[];
  timeframe: string;
  priority: "high" | "medium" | "low";
  status: DecisionStatus;
}

const decisions: Decision[] = [
  {
    id: "hub-madrid",
    icon: Building2,
    title: "Autorizar Hub Madrid",
    description:
      "Liderado por Alan Nadal Piantini para atracción, empaquetado y estructuración de proyectos España↔Caribe.",
    details: [
      "Mandato de atracción de proyectos europeos",
      "Estructuración de coproducciones España-RD",
      "Garantías de ejecución en República Dominicana",
      "Pipeline constante de proyectos calificados",
    ],
    timeframe: "Decisión inmediata",
    priority: "high",
    status: "pending",
  },
  {
    id: "art34-policy",
    icon: FileCheck,
    title: "Definir política Ruta A (Art.34)",
    description:
      "Establecer techo anual, tipos de proyectos, governance, compliance y reporting.",
    details: [
      "Techo anual: hasta 25% del ISR de RD",
      "Tipos de proyectos dominicanos elegibles",
      "Estructura de governance y oversight",
      "Reporting trimestral y anual",
    ],
    timeframe: "30 días",
    priority: "high",
    status: "pending",
  },
  {
    id: "art39-policy",
    icon: Receipt,
    title: "Definir política Ruta B (Art.39)",
    description:
      "Determinar proyectos para gasto local, estrategia de certificación y colocación del crédito.",
    details: [
      "Proyectos que ejecutan gasto local en RD",
      "Proceso de certificación con DGCINE",
      "Estrategia de colocación en mercado local",
      "Red de compradores pre-establecida",
    ],
    timeframe: "30 días",
    priority: "medium",
    status: "pending",
  },
  {
    id: "pilot",
    icon: Rocket,
    title: "Aprobar piloto (90 días)",
    description:
      "1 proyecto dominicano (Art.34) + 1 producción con gasto local (Art.39) como pruebas independientes.",
    details: [
      "Proyecto piloto Art.34: inversión ISR local",
      "Proyecto piloto Art.39: gasto local certificado",
      "Medición de KPIs y ROI",
      "Validación del modelo operativo",
    ],
    timeframe: "90 días",
    priority: "high",
    status: "pending",
  },
];

const statusConfig: Record<
  DecisionStatus,
  { color: string; bgColor: string; label: string; icon: React.ComponentType<{ className?: string }> }
> = {
  pending: {
    color: "#6b7280",
    bgColor: "rgba(107, 114, 128, 0.2)",
    label: "Pendiente",
    icon: Circle,
  },
  reviewing: {
    color: "#eab308",
    bgColor: "rgba(234, 179, 8, 0.2)",
    label: "En revisión",
    icon: Clock,
  },
  approved: {
    color: "#22c55e",
    bgColor: "rgba(34, 197, 94, 0.2)",
    label: "Aprobado",
    icon: CheckCircle2,
  },
};

const priorityConfig: Record<string, { color: string; label: string }> = {
  high: { color: "#ef4444", label: "Alta" },
  medium: { color: "#f59e0b", label: "Media" },
  low: { color: "#22c55e", label: "Baja" },
};

export default function DecisionChecklist() {
  const [expandedId, setExpandedId] = useState<string | null>(null);
  const [statuses, setStatuses] = useState<Record<string, DecisionStatus>>(
    Object.fromEntries(decisions.map((d) => [d.id, d.status]))
  );

  const toggleExpand = (id: string) => {
    setExpandedId(expandedId === id ? null : id);
  };

  const cycleStatus = (id: string, e: React.MouseEvent) => {
    e.stopPropagation();
    const currentStatus = statuses[id];
    const nextStatus: DecisionStatus =
      currentStatus === "pending"
        ? "reviewing"
        : currentStatus === "reviewing"
        ? "approved"
        : "pending";
    setStatuses({ ...statuses, [id]: nextStatus });
  };

  const approvedCount = Object.values(statuses).filter(
    (s) => s === "approved"
  ).length;
  const progress = (approvedCount / decisions.length) * 100;

  return (
    <div className="space-y-6">
      {/* Progress Header */}
      <div className="collage-paper p-6">
        <div className="flex items-center justify-between mb-4">
          <div className="stamp flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4" />
            Decisiones requeridas
          </div>
          <div className="flex items-center gap-2 text-sm">
            <span className="text-white/50">Progreso:</span>
            <span className="font-semibold text-emerald-400">
              {approvedCount}/{decisions.length}
            </span>
          </div>
        </div>

        {/* Progress bar */}
        <div className="h-2 bg-white/10 rounded-full overflow-hidden">
          <motion.div
            className="h-full bg-gradient-to-r from-emerald-500 to-emerald-400 rounded-full"
            initial={{ width: 0 }}
            animate={{ width: `${progress}%` }}
            transition={{ duration: 0.5, ease: "easeOut" }}
          />
        </div>

        {progress === 100 && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="mt-4 p-3 bg-emerald-500/10 border border-emerald-500/20 rounded-lg flex items-center gap-3"
          >
            <Sparkles className="w-5 h-5 text-emerald-400" />
            <span className="text-emerald-400 text-sm">
              ¡Todas las decisiones aprobadas! Listo para ejecutar.
            </span>
          </motion.div>
        )}
      </div>

      {/* Decision Cards */}
      <div className="space-y-4">
        {decisions.map((decision, index) => {
          const Icon = decision.icon;
          const status = statusConfig[statuses[decision.id]];
          const StatusIcon = status.icon;
          const priority = priorityConfig[decision.priority];
          const isExpanded = expandedId === decision.id;

          return (
            <motion.div
              key={decision.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className={`collage-paper overflow-hidden transition-all ${
                statuses[decision.id] === "approved"
                  ? "border-emerald-500/30"
                  : ""
              }`}
            >
              {/* Main content - clickable */}
              <div
                onClick={() => toggleExpand(decision.id)}
                className="p-5 cursor-pointer hover:bg-white/[0.02] transition-colors"
              >
                <div className="flex items-start gap-4">
                  {/* Icon */}
                  <div
                    className={`p-3 rounded-xl flex-shrink-0 transition-colors ${
                      statuses[decision.id] === "approved"
                        ? "bg-emerald-500/20"
                        : "bg-white/5"
                    }`}
                  >
                    <Icon
                      className={`w-6 h-6 ${
                        statuses[decision.id] === "approved"
                          ? "text-emerald-500"
                          : "text-white/70"
                      }`}
                    />
                  </div>

                  {/* Content */}
                  <div className="flex-1 min-w-0">
                    <div className="flex items-start justify-between gap-3">
                      <div className="flex-1">
                        <h3
                          className={`text-lg font-semibold transition-colors ${
                            statuses[decision.id] === "approved"
                              ? "text-emerald-400"
                              : ""
                          }`}
                        >
                          {decision.title}
                        </h3>
                        <p className="mt-1 text-white/70 text-sm">
                          {decision.description}
                        </p>
                      </div>

                      {/* Expand indicator */}
                      <div className="flex-shrink-0">
                        {isExpanded ? (
                          <ChevronUp className="w-5 h-5 text-white/40" />
                        ) : (
                          <ChevronDown className="w-5 h-5 text-white/40" />
                        )}
                      </div>
                    </div>

                    {/* Meta info */}
                    <div className="mt-3 flex flex-wrap items-center gap-3">
                      {/* Status button */}
                      <button
                        onClick={(e) => cycleStatus(decision.id, e)}
                        className="flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs transition-all hover:scale-105"
                        style={{
                          backgroundColor: status.bgColor,
                          color: status.color,
                        }}
                      >
                        <StatusIcon className="w-3.5 h-3.5" />
                        {status.label}
                      </button>

                      {/* Priority */}
                      <span
                        className="flex items-center gap-1.5 text-xs"
                        style={{ color: priority.color }}
                      >
                        <AlertCircle className="w-3.5 h-3.5" />
                        Prioridad {priority.label}
                      </span>

                      {/* Timeframe */}
                      <span className="flex items-center gap-1.5 text-xs text-white/50">
                        <Clock className="w-3.5 h-3.5" />
                        {decision.timeframe}
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Expanded details */}
              <AnimatePresence>
                {isExpanded && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    className="overflow-hidden"
                  >
                    <div className="px-5 pb-5 pt-2 border-t border-white/10">
                      <div className="text-sm text-white/60 mb-3">
                        Componentes de la decisión:
                      </div>
                      <ul className="space-y-2">
                        {decision.details.map((detail, i) => (
                          <motion.li
                            key={i}
                            initial={{ opacity: 0, x: -10 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: i * 0.1 }}
                            className="flex items-start gap-2 text-sm"
                          >
                            <CheckCircle2 className="w-4 h-4 text-emerald-500/60 mt-0.5 flex-shrink-0" />
                            <span className="text-white/80">{detail}</span>
                          </motion.li>
                        ))}
                      </ul>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          );
        })}
      </div>

      {/* Footer note */}
      <div className="text-center text-xs text-white/40 pt-2">
        Haz clic en el status para simular el flujo de aprobación
      </div>
    </div>
  );
}
