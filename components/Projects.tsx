"use client";

import { motion } from "motion/react";
import { projects } from "@/data/Projects";

export default function Projects() {
  return (
    <section id="projects" className="scroll-mt-24 mx-auto max-w-6xl px-6 py-24">
      <div className="flex flex-col justify-between gap-5 sm:flex-row sm:items-end">
        <motion.div
          initial={{ opacity: 0, x: -18 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6 }}
        >
          <p className="mb-4 text-xs font-semibold tracking-[0.2em] text-emerald-300">
            02 / KARYA PILIHAN
          </p>
          <h2 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl">
            Proyek yang pernah saya kerjakan.
          </h2>
        </motion.div>
        <motion.p
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="max-w-sm text-sm leading-6 text-neutral-500"
        >
          Beberapa aplikasi web yang dibangun untuk mengelola informasi dan
          membantu proses pengambilan keputusan.
        </motion.p>
      </div>
      <div className="mt-10 grid gap-4 md:grid-cols-2">
        {projects.map((project, index) => (
          <motion.article
            key={project.title}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            whileHover={{ y: -5 }}
            whileTap={{ scale: 0.995 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{
              duration: 0.55,
              delay: index * 0.1,
              y: { type: "spring", stiffness: 280, damping: 22 },
            }}
            className="group flex min-h-full flex-col rounded-2xl border border-white/[0.08] bg-[linear-gradient(145deg,rgba(255,255,255,0.045),rgba(255,255,255,0.012)_55%)] p-6 transition-colors duration-300 hover:border-emerald-200/25 sm:p-8"
          >
            <div className="mb-8 flex items-center justify-between">
              <span className="text-xs font-medium tracking-[0.16em] text-neutral-400">
                PROJECT / {String(index + 1).padStart(2, "0")}
              </span>
              <span
                aria-hidden="true"
                className="flex size-10 items-center justify-center rounded-full border border-white/[0.08] text-lg text-emerald-200 transition group-hover:border-emerald-200/30 group-hover:bg-emerald-200/[0.06]"
              >
                ↗
              </span>
            </div>
            <h3 className="text-xl font-semibold leading-snug tracking-tight text-white sm:text-2xl">
              {project.title}
            </h3>
            <p className="mt-4 flex-1 text-sm leading-7 text-neutral-400">
              {project.description}
            </p>
            <ul aria-label="Teknologi proyek" className="mt-6 flex flex-wrap gap-2">
              {project.tags.map((tag) => (
                <li
                  key={tag}
                  className="rounded-full border border-white/[0.08] px-3 py-1.5 text-xs text-neutral-400"
                >
                  {tag}
                </li>
              ))}
            </ul>
            <div className="mt-8 flex flex-wrap gap-3">
              {project.link && project.link !== "-" && (
                <a
                  href={project.link}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex min-h-11 w-fit items-center gap-2 rounded-full border border-emerald-200/20 px-4 text-sm font-medium text-emerald-200 transition hover:border-emerald-200/40 hover:bg-emerald-200/[0.06] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-emerald-300"
                >
                  Lihat demo <span aria-hidden="true">↗</span>
                </a>
              )}
              {project.repo && (
                <a
                  href={project.repo}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex min-h-11 w-fit items-center gap-2 rounded-full border border-emerald-200/20 px-4 text-sm font-medium text-emerald-200 transition hover:border-emerald-200/40 hover:bg-emerald-200/[0.06] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-emerald-300"
                >
                  Lihat repositori <span aria-hidden="true">↗</span>
                </a>
              )}
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
}