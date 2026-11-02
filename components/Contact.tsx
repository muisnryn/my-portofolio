"use client";

import { motion } from "motion/react";
import Reveal from "@/components/Reveal";

export default function Contact() {
  return (
    <section id="contact" className="scroll-mt-24 mx-auto max-w-6xl px-6 pb-24 pt-8">
      <Reveal>
      <div className="relative overflow-hidden rounded-3xl border border-emerald-200/15 bg-[linear-gradient(120deg,rgba(16,54,40,0.62),rgba(15,20,18,0.96)_68%)] px-7 py-12 sm:px-12 sm:py-16">
        <div
          aria-hidden="true"
          className="absolute -right-20 -top-32 size-80 rounded-full border border-emerald-100/[0.08] shadow-[0_0_100px_rgba(52,211,153,0.08)]"
        />
        <div className="relative max-w-2xl">
          <p className="mb-4 text-xs font-semibold tracking-[0.2em] text-emerald-300">
            03 / KONTAK
          </p>
          <h2 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl">
            Punya ide untuk diwujudkan?
          </h2>
          <p className="mt-4 max-w-xl leading-7 text-neutral-400">
            Saya terbuka untuk berbagi cerita tentang pengembangan web dan
            proyek-proyek yang saya kerjakan. Temukan saya di GitHub.
          </p>
          <motion.a
            href="https://github.com/muisnryn"
            target="_blank"
            rel="noreferrer"
            whileHover={{ y: -3, scale: 1.02 }}
            whileTap={{ scale: 0.97 }}
            className="mt-8 inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-emerald-300 px-6 text-sm font-semibold text-neutral-950 transition hover:bg-emerald-200 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-emerald-300"
          >
            Kunjungi GitHub <span aria-hidden="true">↗</span>
          </motion.a>
        </div>
      </div>
      </Reveal>
    </section>
  );
}