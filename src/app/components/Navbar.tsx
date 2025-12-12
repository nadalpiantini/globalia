"use client";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const links = [
  { href: "#problema", label: "Problema" },
  { href: "#plataforma", label: "Plataforma" },
  { href: "#contenido", label: "Contenido" },
  { href: "#arquitectura", label: "Arquitectura" },
  { href: "#finanzas", label: "Finanzas" },
  { href: "#cierre", label: "Cierre" },
];

export default function Navbar() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const handleScroll = () => setShow(window.scrollY > 200);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ opacity: 0 }}
      animate={{ opacity: show ? 1 : 0 }}
      transition={{ duration: 0.4 }}
      className="fixed top-4 left-1/2 -translate-x-1/2 z-[999]
                 px-6 py-3 rounded-full backdrop-blur-xl bg-white/60 shadow-sm
                 flex space-x-6 text-sm text-black"
    >
      {links.map((l) => (
        <a
          key={l.href}
          href={l.href}
          className="hover:text-black/60 transition"
        >
          {l.label}
        </a>
      ))}
    </motion.nav>
  );
}
