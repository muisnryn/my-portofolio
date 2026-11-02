import Reveal from "@/components/Reveal";

const skills = [
  "Laravel",
  "PHP",
  "MySQL",
  "JavaScript",
  "React",
  "Next.js",
  "Tailwind CSS",
  "Filament",
];

export default function About() {
  return (
    <section id="about" className="scroll-mt-24 border-y border-white/[0.06] bg-white/[0.015]">
      <div className="mx-auto grid max-w-6xl gap-12 px-6 py-24 lg:grid-cols-[0.8fr_1.2fr] lg:gap-24">
        <Reveal>
          <p className="mb-4 text-xs font-semibold tracking-[0.2em] text-emerald-300">
            01 / TENTANG
          </p>
          <h2 className="max-w-sm text-3xl font-semibold leading-tight tracking-tight text-white sm:text-4xl">
            Dari ide menjadi pengalaman web yang bermanfaat.
          </h2>
        </Reveal>
        <Reveal delay={0.12} className="pt-1">
          <p className="max-w-2xl text-base leading-8 text-neutral-400">
            Saya tertarik pada pengembangan aplikasi web dari sisi antarmuka
            hingga pengelolaan data. Melalui berbagai proyek, saya mengeksplorasi
            teknologi seperti Laravel, MySQL, React, dan Next.js untuk
            menghadirkan solusi yang jelas dan mudah digunakan.
          </p>
          <h3 className="mt-9 text-sm font-medium text-neutral-200">
            Teknologi yang digunakan
          </h3>
          <ul className="mt-4 flex flex-wrap gap-2">
            {skills.map((skill) => (
              <li
                key={skill}
                className="rounded-full border border-white/[0.08] bg-white/[0.025] px-3.5 py-2 text-sm text-neutral-300 transition hover:border-emerald-200/30 hover:text-emerald-100"
              >
                {skill}
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}