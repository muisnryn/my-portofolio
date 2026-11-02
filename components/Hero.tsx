"use client";

import { motion } from "motion/react";

const intro = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.12, delayChildren: 0.08 },
  },
};

const introItem = {
  hidden: { opacity: 0, y: 18 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] as const },
  },
};

export default function Hero() {
  return (
    <section
      id="top"
      className="relative mx-auto grid min-h-[calc(100svh-73px)] max-w-6xl items-center gap-14 overflow-hidden px-6 py-20 lg:grid-cols-[1.15fr_0.85fr] lg:gap-20"
    >
      <motion.div
        className="relative z-10"
        variants={intro}
        initial="hidden"
        animate="visible"
      >
        <motion.p
          variants={introItem}
          className="mb-6 inline-flex items-center gap-2 rounded-full border border-emerald-300/15 bg-emerald-300/[0.06] px-3 py-1.5 text-xs font-medium tracking-wide text-emerald-200"
        >
          <span aria-hidden="true" className="size-1.5 rounded-full bg-emerald-300" />
          PORTOFOLIO · FULL STACK DEVELOPER
        </motion.p>
        <motion.h1
          variants={introItem}
          className="max-w-3xl text-5xl font-semibold leading-[1.06] tracking-[-0.055em] text-white sm:text-6xl lg:text-7xl"
        >
          Halo, saya{" "}
          <span className="text-emerald-300">Muis Nuryana.</span>
        </motion.h1>
        <motion.p
          variants={introItem}
          className="mt-6 max-w-xl text-lg leading-8 text-neutral-400 sm:text-xl"
        >
          Saya membangun aplikasi web yang fungsional, mudah digunakan, dan
          dirancang dengan perhatian pada detail.
        </motion.p>
        <motion.div
          variants={introItem}
          className="mt-9 flex flex-wrap items-center gap-3"
        >
          <motion.a
            href="#projects"
            whileHover={{ y: -3, scale: 1.02 }}
            whileTap={{ scale: 0.97 }}
            className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-emerald-300 px-6 text-sm font-semibold text-neutral-950 transition hover:bg-emerald-200 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-emerald-300"
          >
            Lihat proyek <span aria-hidden="true">↘</span>
          </motion.a>
          <motion.a
            href="#about"
            whileHover={{ y: -3 }}
            whileTap={{ scale: 0.97 }}
            className="inline-flex min-h-12 items-center justify-center rounded-full border border-white/10 px-6 text-sm font-medium text-neutral-200 transition hover:border-white/25 hover:bg-white/[0.04] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-emerald-300"
          >
            Tentang saya
          </motion.a>
        </motion.div>
        <motion.div
          variants={introItem}
          className="mt-12 flex flex-wrap items-center gap-x-6 gap-y-3 text-sm text-neutral-500"
        >
          <span className="text-neutral-400">Teknologi yang saya gunakan</span>
          <span>Laravel</span>
          <span>React</span>
          <span>Next.js</span>
          <span>MySQL</span>
        </motion.div>
      </motion.div>

      <motion.div
        aria-hidden="true"
        className="relative mx-auto flex aspect-square w-full max-w-[390px] items-center justify-center"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, delay: 0.35 }}
      >
        <motion.div
          className="absolute inset-5 rounded-full border border-emerald-200/[0.08]"
          animate={{ rotate: 360 }}
          transition={{ duration: 70, repeat: Infinity, ease: "linear" }}
        />
        <motion.div
          className="absolute inset-12 rounded-full border border-emerald-200/[0.1]"
          animate={{ rotate: -360 }}
          transition={{ duration: 95, repeat: Infinity, ease: "linear" }}
        />
        <div className="absolute inset-[4.5rem] rounded-full bg-emerald-300/[0.07] blur-3xl" />
        <motion.div
          className="relative flex size-52 items-center justify-center rounded-full border border-emerald-200/20 bg-[radial-gradient(circle_at_35%_30%,rgba(110,231,183,0.19),rgba(15,23,20,0.82)_68%)] shadow-[0_0_100px_rgba(52,211,153,0.12)] sm:size-60"
          animate={{ y: [0, -9, 0] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        >
          <span className="text-7xl font-semibold tracking-[-0.08em] text-emerald-100 sm:text-8xl">
            MN
          </span>
          <motion.span
            animate={{ y: [0, -4, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -right-5 top-8 rounded-full border border-white/10 bg-neutral-900 px-4 py-2 text-xs text-neutral-300 shadow-xl"
          >
            Pengembang web
          </motion.span>
          <motion.span
            animate={{ y: [0, 4, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -bottom-3 left-0 rounded-full border border-white/10 bg-neutral-900 px-4 py-2 text-xs text-neutral-300 shadow-xl"
          >
            Teliti dalam detail
          </motion.span>
        </motion.div>
        <motion.span
          animate={{ scale: [1, 1.3, 1], opacity: [0.65, 1, 0.65] }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
          className="absolute right-8 top-12 size-2 rounded-full bg-emerald-200 shadow-[0_0_18px_rgba(167,243,208,0.9)]"
        />
        <span className="absolute bottom-16 left-7 size-1.5 rounded-full bg-emerald-300/70" />
      </motion.div>
    </section>
  );
}
