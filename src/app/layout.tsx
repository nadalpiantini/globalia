import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Globalia — Plataforma Audiovisual (RD + Madrid)",
  description:
    "Presentación-app explicativa: Art.34 y Art.39 separados. Hub Madrid + Ejecución RD.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className={`${inter.variable} antialiased relative`}>
        {children}
      </body>
    </html>
  );
}
