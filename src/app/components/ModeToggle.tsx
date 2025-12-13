"use client";

import { motion } from "framer-motion";
import { useModeStore } from "../store/modeStore";
import { Sparkles, BarChart3 } from "lucide-react";

export default function ModeToggle() {
  const { mode, toggleMode } = useModeStore();

  return (
    <button
      onClick={toggleMode}
      className="relative flex items-center gap-2 px-4 py-2 rounded-full border border-white/20 bg-white/5 backdrop-blur-sm hover:bg-white/10 transition-all duration-300"
      data-cursor-hover
    >
      {/* Background slider */}
      <motion.div
        className="absolute inset-y-1 rounded-full bg-white/20"
        initial={false}
        animate={{
          left: mode === "experience" ? "4px" : "50%",
          width: mode === "experience" ? "calc(50% - 4px)" : "calc(50% - 4px)",
        }}
        transition={{ type: "spring", stiffness: 300, damping: 30 }}
      />

      {/* Experience button */}
      <div
        className={`relative z-10 flex items-center gap-1.5 px-3 py-1 text-xs font-medium transition-colors duration-300 ${
          mode === "experience" ? "text-white" : "text-white/50"
        }`}
      >
        <Sparkles className="w-3.5 h-3.5" />
        <span className="hidden sm:inline">Experience</span>
      </div>

      {/* Boardroom button */}
      <div
        className={`relative z-10 flex items-center gap-1.5 px-3 py-1 text-xs font-medium transition-colors duration-300 ${
          mode === "boardroom" ? "text-white" : "text-white/50"
        }`}
      >
        <BarChart3 className="w-3.5 h-3.5" />
        <span className="hidden sm:inline">Boardroom</span>
      </div>
    </button>
  );
}
