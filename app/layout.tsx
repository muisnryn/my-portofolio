import type { Metadata } from "next";
import MotionProvider from "@/components/MotionProvider";
import "./globals.css";

export const metadata: Metadata = {
  title: "Muis Nuryana | Full Stack Developer",
  description: "Portofolio Muis Nuryana, Full Stack Developer dengan React dan Next.js.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="id" className="scroll-smooth">
      <body className="min-h-screen bg-neutral-950 text-neutral-200 antialiased">
        <MotionProvider>{children}</MotionProvider>
      </body>
    </html>
  );
}