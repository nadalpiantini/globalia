"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Loader({ onComplete }: { onComplete: () => void }) {
  const [phase, setPhase] = useState<"logo" | "tagline" | "exit">("logo");

  useEffect(() => {
    const timer1 = setTimeout(() => setPhase("tagline"), 1500);
    const timer2 = setTimeout(() => setPhase("exit"), 3000);
    const timer3 = setTimeout(() => onComplete(), 3800);

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
      clearTimeout(timer3);
    };
  }, [onComplete]);

  return (
    <AnimatePresence>
      {phase !== "exit" ? (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
          className="fixed inset-0 z-[100] bg-black flex flex-col items-center justify-center"
        >
          {/* Grano */}
          <div
            className="absolute inset-0 opacity-[0.03] pointer-events-none"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
            }}
          />

          {/* Logo GLOBALIA */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="relative"
          >
            {/* Glow behind logo */}
            <div className="absolute -inset-10 bg-white/5 blur-3xl rounded-full" />
            <motion.h1
              className="text-5xl md:text-7xl font-black tracking-[0.3em] text-white"
              animate={{
                letterSpacing: phase === "tagline" ? "0.5em" : "0.3em",
              }}
              transition={{ duration: 0.8, ease: "easeInOut" }}
            >
              GLOBALIA
            </motion.h1>

            {/* Línea decorativa */}
            <motion.div
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 0.8, delay: 0.5, ease: "easeOut" }}
              className="h-px bg-white/30 mt-6 origin-center"
            />
          </motion.div>

          {/* Tagline */}
          <AnimatePresence>
            {phase === "tagline" && (
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="mt-8 text-lg md:text-xl text-white/50 font-light tracking-widest uppercase"
              >
                Cine · Turismo · Marca
              </motion.p>
            )}
          </AnimatePresence>

          {/* Progress bar */}
          <motion.div
            className="absolute bottom-20 w-48 h-px bg-white/10 overflow-hidden"
          >
            <motion.div
              initial={{ x: "-100%" }}
              animate={{ x: "100%" }}
              transition={{
                duration: 2.5,
                ease: "easeInOut",
                repeat: 0
              }}
              className="absolute inset-0 bg-gradient-to-r from-transparent via-white/60 to-transparent"
            />
          </motion.div>

          {/* Año */}
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.3 }}
            transition={{ duration: 0.5, delay: 1 }}
            className="absolute bottom-10 text-sm font-mono tracking-widest text-white/30"
          >
            2025
          </motion.span>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}
