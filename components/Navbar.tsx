"use client";

import { motion } from "motion/react";

const links = [
  { href: "#projects", label: "Proyek" },
  { href: "#about", label: "Tentang" },
  { href: "#contact", label: "Kontak" },
];

export default function Navbar() {
  return (
    <motion.header
      initial={{ opacity: 0, y: -12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.55 }}
      className="sticky top-0 z-50 border-b border-white/[0.06] bg-neutral-950/85 backdrop-blur-xl"
    >
      <nav
        aria-label="Navigasi utama"
        className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-6 py-4"
      >
        <motion.a
          href="#top"
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.97 }}
          className="flex shrink-0 items-center gap-3 rounded-sm text-sm font-semibold tracking-tight text-white focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-emerald-300"
        >
          <span className="flex size-8 items-center justify-center rounded-full border border-emerald-200/20 bg-emerald-300/10 text-xs text-emerald-200">
            MN
          </span>
          <span className="hidden sm:inline">Muis Nuryana</span>
        </motion.a>
        <ul className="flex items-center gap-4 text-xs text-neutral-400 sm:gap-7 sm:text-sm">
          {links.map((l) => (
            <li key={l.href}>
              <motion.a
                href={l.href}
                whileHover={{ y: -2, color: "#a7f3d0" }}
                whileTap={{ scale: 0.96 }}
                className="rounded-sm py-2 transition hover:text-emerald-200 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-emerald-300"
              >
                {l.label}
              </motion.a>
            </li>
          ))}
        </ul>
      </nav>
    </motion.header>
  );
}