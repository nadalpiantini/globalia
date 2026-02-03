"use client";

import { motion } from "framer-motion";
import { CheckCircle } from "lucide-react";
import Slide from "../Slide";
import VideoBackground from "../VideoBackground";

// Media config - add your video/poster paths here
const MEDIA = {
  video: "/videos/close-cinematic.mp4", // Add your emotional closing video
  poster: "/videos/close-cinematic-poster.jpg", // Fallback poster image
  hasVideo: false, // Set to true when you add the video
};

export default function Slide16Close() {
  const keyPoints = [
    "No es cine",
    "Estrategia de ocupación",
    "Alianzas y activos",
    "Basada en ley existente",
    "Infraestructura real",
  ];

  return (
    <Slide id="slide-16" className="overflow-hidden">
      {/* Video Background - activates when hasVideo is true */}
      {MEDIA.hasVideo && (
        <VideoBackground
          src={MEDIA.video}
          poster={MEDIA.poster}
          overlay="dark"
        />
      )}

      <div className="text-center max-w-4xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <CheckCircle className="w-20 h-20 mx-auto mb-6 text-amber-300" />
          <h2 className="text-4xl md:text-6xl font-bold text-white drop-shadow-lg mb-4">
            Estrategia activable hoy
          </h2>
          <p className="text-xl md:text-2xl text-amber-200 font-semibold">
            Decisión estratégica
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          viewport={{ once: true }}
          className="bg-white/10 backdrop-blur-sm p-8 md:p-12 rounded-2xl border border-white/20"
        >
          <p className="text-lg text-white/90 mb-8">
            Esto no es cine. Es una estrategia de ocupación, alianzas y activos,
            basada en una ley existente y en infraestructura real.
          </p>

          <div className="flex flex-wrap justify-center gap-4">
            {keyPoints.map((point, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.5 + index * 0.1 }}
                viewport={{ once: true }}
                className="bg-amber-900/50 px-6 py-3 rounded-full"
              >
                <span className="text-white font-semibold">{point}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 1 }}
          viewport={{ once: true }}
          className="mt-12"
        >
          <a
            href="mailto:alan@sujeto10.com"
            className="inline-flex items-center justify-center gap-3 px-10 py-5 rounded-full bg-white text-black font-bold text-lg hover:bg-white/90 hover:scale-105 transition-all duration-300 shadow-xl"
            data-cursor-hover
          >
            Hablemos (reunión de 30 min)
          </a>
        </motion.div>
      </div>
    </Slide>
  );
}
