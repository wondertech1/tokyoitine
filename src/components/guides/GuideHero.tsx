"use client";

import { motion } from "framer-motion";
import type { Guide } from "@/data/guides";

interface GuideHeroProps {
  guide: Guide;
}

export default function GuideHero({ guide }: GuideHeroProps) {
  return (
    <section className="max-w-[1200px] mx-auto px-6 pt-8 pb-8">
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="bg-white border border-gray-200 p-8 md:p-12 relative overflow-hidden"
      >
        {/* Ghost icon */}
        <div className="absolute top-[-20px] right-[-10px] text-[200px] opacity-[0.03] pointer-events-none select-none hidden md:block">
          {guide.icon}
        </div>

        <div className="relative z-10">
          <div
            className="w-16 h-[2px] mb-6"
            style={{ backgroundColor: guide.color }}
          />
          <span className="font-mono text-[10px] font-bold tracking-[3px] text-gray-400">
            TOKYO GUIDE
          </span>

          <h1 className="font-display text-[clamp(32px,5vw,56px)] font-normal text-[#1A1A1A] leading-tight mt-4">
            {guide.icon} {guide.title.toUpperCase()}
          </h1>
          <p
            className="font-display text-[clamp(16px,2.5vw,24px)] italic mt-1"
            style={{ color: guide.color }}
          >
            {guide.subtitle}
          </p>

          {/* Stats bar */}
          <div className="flex gap-0 mt-8 border border-gray-200 w-fit">
            {guide.stats.map((s, i) => (
              <div
                key={i}
                className="text-center px-5 py-3"
                style={{
                  borderRight:
                    i < guide.stats.length - 1
                      ? "1px solid #E5E7EB"
                      : "none",
                }}
              >
                <div className="font-display text-xl text-[#1A1A1A]">
                  {s.value}
                </div>
                <div className="font-mono text-[8px] tracking-[2px] text-gray-400 mt-1">
                  {s.label}
                </div>
              </div>
            ))}
          </div>

          {/* Table of contents */}
          <div className="mt-8 pt-6 border-t border-gray-100">
            <span className="font-mono text-[9px] font-bold tracking-[2px] text-gray-300 block mb-3">
              IN THIS GUIDE
            </span>
            <div className="flex flex-wrap gap-2">
              {guide.tableOfContents.map((item, i) => (
                <a
                  key={i}
                  href={`#${item.id}`}
                  className="font-mono text-[11px] tracking-wide text-gray-500 hover:text-[#1A1A1A] transition-colors px-3 py-1.5 border border-gray-200 hover:border-gray-400"
                >
                  {String(i + 1).padStart(2, "0")} {item.label}
                </a>
              ))}
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
