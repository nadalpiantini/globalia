"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Newspaper,
  Clapperboard,
  Video,
  FileText,
  FolderOpen,
  Filter,
  X,
  ExternalLink,
  Award,
  Image as ImageIcon,
} from "lucide-react";

// Asset categories with colors
const categories = [
  { id: "all", label: "Todos", icon: FolderOpen, color: "#ffffff" },
  { id: "press", label: "Prensa", icon: Newspaper, color: "#3b82f6" },
  { id: "bts", label: "BTS", icon: Clapperboard, color: "#22c55e" },
  { id: "trailers", label: "Trailers", icon: Video, color: "#f59e0b" },
  { id: "docs", label: "Documentos", icon: FileText, color: "#8b5cf6" },
  { id: "awards", label: "Premios", icon: Award, color: "#ec4899" },
];

// Sample assets (placeholder structure for future content)
const assets = [
  {
    id: 1,
    category: "press",
    title: "Variety - Dominican Cinema Boom",
    subtitle: "Cobertura internacional",
    type: "article",
    year: "2024",
  },
  {
    id: 2,
    category: "press",
    title: "Screen Daily - Tax Incentives",
    subtitle: "Análisis del Art.39",
    type: "article",
    year: "2024",
  },
  {
    id: 3,
    category: "bts",
    title: "Producción Casa de Campo",
    subtitle: "Set design y crew",
    type: "gallery",
    year: "2023",
  },
  {
    id: 4,
    category: "bts",
    title: "Locaciones Santo Domingo",
    subtitle: "Scouting urbano",
    type: "gallery",
    year: "2024",
  },
  {
    id: 5,
    category: "trailers",
    title: "Proyecto Piloto #1",
    subtitle: "Teaser 90 segundos",
    type: "video",
    year: "2024",
  },
  {
    id: 6,
    category: "trailers",
    title: "Sizzle Reel Globalia",
    subtitle: "Compilado de producción",
    type: "video",
    year: "2024",
  },
  {
    id: 7,
    category: "docs",
    title: "Certificado DGCINE",
    subtitle: "Proyecto aprobado Art.34",
    type: "document",
    year: "2024",
  },
  {
    id: 8,
    category: "docs",
    title: "Crédito Fiscal Emitido",
    subtitle: "RD$15M - Art.39",
    type: "document",
    year: "2023",
  },
  {
    id: 9,
    category: "awards",
    title: "Festival de Cine RD",
    subtitle: "Mejor Producción",
    type: "award",
    year: "2023",
  },
  {
    id: 10,
    category: "awards",
    title: "Latin Entertainment Awards",
    subtitle: "Nominación Coproducción",
    type: "award",
    year: "2024",
  },
  {
    id: 11,
    category: "press",
    title: "El País - Inversión Audiovisual",
    subtitle: "España-RD partnership",
    type: "article",
    year: "2024",
  },
  {
    id: 12,
    category: "bts",
    title: "Playas del Norte",
    subtitle: "Locaciones premium",
    type: "gallery",
    year: "2024",
  },
];

// Type colors
const typeColors: Record<string, string> = {
  article: "#3b82f6",
  gallery: "#22c55e",
  video: "#f59e0b",
  document: "#8b5cf6",
  award: "#ec4899",
};

export default function AssetWall() {
  const [activeCategory, setActiveCategory] = useState("all");
  const [selectedAsset, setSelectedAsset] = useState<number | null>(null);

  const filteredAssets =
    activeCategory === "all"
      ? assets
      : assets.filter((a) => a.category === activeCategory);

  const selectedAssetData = assets.find((a) => a.id === selectedAsset);

  return (
    <div className="space-y-8">
      {/* Header with filter */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div className="collage-paper p-4 inline-flex items-center gap-3">
          <FolderOpen className="w-5 h-5 text-white/60" />
          <div>
            <div className="text-sm font-medium">Folder de Evidencia</div>
            <div className="text-xs text-white/50">
              {filteredAssets.length} assets disponibles
            </div>
          </div>
        </div>

        {/* Category filters */}
        <div className="flex flex-wrap gap-2">
          {categories.map((cat) => {
            const Icon = cat.icon;
            const isActive = activeCategory === cat.id;
            return (
              <motion.button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-3 py-1.5 rounded-full text-sm flex items-center gap-2 transition-all ${
                  isActive
                    ? "bg-white/10 border border-white/20"
                    : "bg-white/5 border border-transparent hover:bg-white/[0.07]"
                }`}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <Icon
                  className="w-4 h-4"
                  style={{ color: isActive ? cat.color : "rgba(255,255,255,0.5)" }}
                />
                <span
                  style={{ color: isActive ? cat.color : "rgba(255,255,255,0.7)" }}
                >
                  {cat.label}
                </span>
              </motion.button>
            );
          })}
        </div>
      </div>

      {/* Asset Grid */}
      <motion.div layout className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        <AnimatePresence mode="popLayout">
          {filteredAssets.map((asset, index) => {
            const typeColor = typeColors[asset.type] || "#ffffff";
            return (
              <motion.div
                key={asset.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ delay: index * 0.05 }}
                onClick={() => setSelectedAsset(asset.id)}
                className="group relative aspect-[4/3] rounded-xl overflow-hidden cursor-pointer bg-white/5 border border-white/10 hover:border-white/20 transition-all"
              >
                {/* Placeholder image area */}
                <div className="absolute inset-0 bg-gradient-to-br from-white/[0.03] to-transparent">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <ImageIcon className="w-8 h-8 text-white/10" />
                  </div>
                </div>

                {/* Hover overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-60 group-hover:opacity-100 transition-opacity" />

                {/* Content */}
                <div className="absolute inset-0 p-4 flex flex-col justify-end">
                  <div
                    className="text-xs px-2 py-0.5 rounded-full w-fit mb-2 opacity-0 group-hover:opacity-100 transition-opacity"
                    style={{ backgroundColor: `${typeColor}30`, color: typeColor }}
                  >
                    {asset.type}
                  </div>
                  <div className="font-medium text-sm line-clamp-2 group-hover:text-white transition-colors">
                    {asset.title}
                  </div>
                  <div className="text-xs text-white/50 mt-1 opacity-0 group-hover:opacity-100 transition-opacity">
                    {asset.subtitle}
                  </div>
                </div>

                {/* Year badge */}
                <div className="absolute top-3 right-3 text-xs text-white/40 bg-black/30 px-2 py-0.5 rounded">
                  {asset.year}
                </div>

                {/* Hover expand indicator */}
                <motion.div
                  className="absolute top-3 left-3 opacity-0 group-hover:opacity-100 transition-opacity"
                  whileHover={{ scale: 1.1 }}
                >
                  <ExternalLink className="w-4 h-4 text-white/60" />
                </motion.div>
              </motion.div>
            );
          })}
        </AnimatePresence>
      </motion.div>

      {/* Empty state */}
      {filteredAssets.length === 0 && (
        <div className="text-center py-12 text-white/50">
          <Filter className="w-8 h-8 mx-auto mb-3 opacity-50" />
          <p>No hay assets en esta categoría</p>
        </div>
      )}

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedAsset && selectedAssetData && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-6 bg-black/90 backdrop-blur-sm"
            onClick={() => setSelectedAsset(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="relative max-w-2xl w-full bg-white/5 border border-white/10 rounded-2xl overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Modal header */}
              <div className="flex items-center justify-between p-4 border-b border-white/10">
                <div className="flex items-center gap-3">
                  <div
                    className="px-2 py-1 rounded text-xs"
                    style={{
                      backgroundColor: `${typeColors[selectedAssetData.type]}30`,
                      color: typeColors[selectedAssetData.type],
                    }}
                  >
                    {selectedAssetData.type}
                  </div>
                  <span className="text-sm text-white/50">
                    {selectedAssetData.year}
                  </span>
                </div>
                <button
                  onClick={() => setSelectedAsset(null)}
                  className="p-2 rounded-full hover:bg-white/10 transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Modal content */}
              <div className="aspect-video bg-white/[0.02] flex items-center justify-center">
                <div className="text-center">
                  <ImageIcon className="w-12 h-12 mx-auto mb-4 text-white/20" />
                  <p className="text-white/40 text-sm">
                    Vista previa del asset
                  </p>
                </div>
              </div>

              {/* Modal footer */}
              <div className="p-6">
                <h3 className="text-xl font-semibold">{selectedAssetData.title}</h3>
                <p className="text-white/60 mt-2">{selectedAssetData.subtitle}</p>
                <div className="mt-4 flex gap-3">
                  <button className="px-4 py-2 bg-white/10 hover:bg-white/20 rounded-lg text-sm transition-colors">
                    Ver original
                  </button>
                  <button className="px-4 py-2 bg-white/5 hover:bg-white/10 rounded-lg text-sm text-white/60 transition-colors">
                    Compartir
                  </button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Footer note */}
      <div className="text-center text-xs text-white/40 pt-4">
        Tip: Arrastra tus archivos al folder correspondiente para agregar
        evidencia.
      </div>
    </div>
  );
}
