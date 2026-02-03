"use client";

import { motion } from "framer-motion";
import { Building2, Plane, MapPin, Hotel, Clapperboard, Film, Tv, Globe } from "lucide-react";

type WaypointType = "madrid" | "airline" | "airport" | "hotel" | "studio" | "production" | "streaming" | "global";

interface LogoPlaceholderProps {
  type: WaypointType;
  label: string;
  size?: number;
  isActive?: boolean;
}

const icons: Record<WaypointType, React.ComponentType<{ className?: string }>> = {
  madrid: Building2,
  airline: Plane,
  airport: MapPin,
  hotel: Hotel,
  studio: Clapperboard,
  production: Film,
  streaming: Tv,
  global: Globe,
};

export default function LogoPlaceholder({
  type,
  label,
  size = 120,
  isActive = false,
}: LogoPlaceholderProps) {
  const Icon = icons[type];

  return (
    <motion.div
      whileHover={{ scale: 1.1 }}
      className="relative flex flex-col items-center gap-3"
    >
      {/* Glow effect when active */}
      {isActive && (
        <motion.div
          layoutId="activeGlow"
          className="absolute inset-0 bg-amber-400/30 rounded-full blur-xl"
          transition={{ type: "spring", stiffness: 300, damping: 30 }}
        />
      )}

      {/* Main circle */}
      <motion.div
        initial={{ opacity: 0, scale: 0 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ type: "spring", stiffness: 200, damping: 20 }}
        className="relative"
        style={{ width: size, height: size }}
      >
        <div
          className={`w-full h-full rounded-full flex items-center justify-center ${
            isActive
              ? "bg-gradient-to-br from-amber-300 to-amber-500"
              : "bg-gradient-to-br from-amber-200 to-amber-400"
          } shadow-lg`}
        >
          <Icon className="w-1/2 h-1/2 text-white drop-shadow-md" />
        </div>

        {/* Pulse ring */}
        {isActive && (
          <motion.div
            className="absolute inset-0 rounded-full border-2 border-amber-400"
            animate={{ scale: [1, 1.2, 1], opacity: [1, 0.5, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
        )}
      </motion.div>

      {/* Label */}
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.3 }}
        className={`text-sm font-semibold text-center max-w-[120px] ${
          isActive ? "text-white" : "text-white/80"
        } drop-shadow`}
      >
        {label}
      </motion.p>
    </motion.div>
  );
}
