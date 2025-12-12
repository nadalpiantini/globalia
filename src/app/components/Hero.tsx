"use client";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative h-screen w-full overflow-hidden flex items-center justify-center"
    >
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
        src="https://stream.mux.com/M5sABWXUPYIEZ2o9j6Kf25bzmhp7z00UxF6qonvJ9kHo.m3u8"
      />

      <div className="absolute inset-0 bg-white/20 backdrop-blur-sm"></div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2 }}
        className="relative z-10 text-center max-w-3xl px-6"
      >
        <h1 className="text-5xl md:text-6xl font-semibold leading-tight">
          CINE, TURISMO Y MARCA:
        </h1>
        <p className="mt-4 text-xl md:text-2xl text-black/70 leading-relaxed">
          La Plataforma Estrategica que Globalia Puede Construir
        </p>
      </motion.div>
    </section>
  );
}
