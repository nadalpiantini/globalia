"use client";

import { motion } from "framer-motion";
import { TrendingUp, Plane, Handshake } from "lucide-react";
import Slide from "../Slide";
import { useEffect, useRef, useState } from "react";

function Counter({ end, duration = 2 }: { end: number; duration?: number }) {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.5 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isVisible) return;

    let startTime: number | null = null;
    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime;
      const progress = Math.min((currentTime - startTime) / (duration * 1000), 1);

      setCount(Math.floor(progress * end));

      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };

    requestAnimationFrame(animate);
  }, [isVisible, end, duration]);

  return (
    <span ref={ref} className="text-4xl font-bold text-amber-300">
      {count}%
    </span>
  );
}

export default function Slide13GlobaliaBenefits() {
  return (
    <Slide id="slide-13">
      <div className="text-center max-w-4xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-semibold mb-6 text-white drop-shadow-lg"
        >
          Beneficio directo para Globalia
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          viewport={{ once: true }}
          className="text-lg md:text-xl mb-12 text-white/90 drop-shadow"
        >
          Esto genera ocupación predecible, ventas a corto plazo, alianzas repetibles
          y diferenciación competitiva.
        </motion.p>

        <div className="grid md:grid-cols-3 gap-6 mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            viewport={{ once: true }}
            className="bg-white/10 backdrop-blur-sm p-6 rounded-2xl border border-white/20"
          >
            <TrendingUp className="w-12 h-12 mx-auto mb-4 text-amber-300" />
            <p className="text-white font-semibold text-lg mb-2">Ocupación</p>
            <Counter end={100} duration={2.5} />
            <p className="text-sm text-white/70 mt-2">Predecible</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            viewport={{ once: true }}
            className="bg-white/10 backdrop-blur-sm p-6 rounded-2xl border border-white/20"
          >
            <Plane className="w-12 h-12 mx-auto mb-4 text-amber-300" />
            <p className="text-white font-semibold text-lg mb-2">Ventas</p>
            <Counter end={100} duration={2.5} />
            <p className="text-sm text-white/70 mt-2">Corto plazo</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            viewport={{ once: true }}
            className="bg-white/10 backdrop-blur-sm p-6 rounded-2xl border border-white/20"
          >
            <Handshake className="w-12 h-12 mx-auto mb-4 text-amber-300" />
            <p className="text-white font-semibold text-lg mb-2">Alianzas</p>
            <Counter end={100} duration={2.5} />
            <p className="text-sm text-white/70 mt-2">Repetibles</p>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.7 }}
          viewport={{ once: true }}
          className="bg-amber-900/30 backdrop-blur-sm p-8 rounded-2xl border border-amber-300/30"
        >
          <p className="text-white/90 mb-2">No depende del éxito de una película.</p>
          <p className="text-2xl font-bold text-amber-200">
            Depende del volumen de producción.
          </p>
        </motion.div>
      </div>
    </Slide>
  );
}
