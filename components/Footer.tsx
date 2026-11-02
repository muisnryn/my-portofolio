"use cache";

import Reveal from "@/components/Reveal";

export default async function Footer() {
  return (
    <footer className="border-t border-white/[0.06] py-7">
      <Reveal>
        <div className="mx-auto flex max-w-6xl flex-col gap-2 px-6 text-center text-xs text-neutral-400 sm:flex-row sm:items-center sm:justify-between sm:text-left">
          <span>© {new Date().getFullYear()} Muis Nuryana</span>
          <span>Dibuat dengan perhatian pada setiap detail.</span>
        </div>
      </Reveal>
    </footer>
  );
}