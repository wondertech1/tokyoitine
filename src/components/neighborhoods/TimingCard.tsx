"use client";

import { motion } from "framer-motion";
import type { TimingInfo } from "@/data/neighborhoods";

interface TimingCardProps {
  timing: TimingInfo;
  color: string;
}

export default function TimingCard({ timing, color }: TimingCardProps) {
  const rows = [
    { label: "BEST TIME", value: timing.bestTimeOfDay },
    { label: "BEST SEASON", value: timing.bestSeason },
    { label: "AVOID", value: timing.avoidWhen },
    { label: "HOW LONG", value: `${timing.howLong} — ${timing.howLongDetail}` },
  ];

  return (
    <section className="px-6 py-10 md:py-14 bg-[#F5F5F0]">
      <div className="max-w-[1200px] mx-auto">
        <div className="flex items-center gap-3 mb-8">
          <div className="w-6 h-[2px]" style={{ backgroundColor: color }} />
          <h2 className="font-mono text-xs tracking-[3px] text-gray-400 font-semibold">
            TIMING & PLANNING
          </h2>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.3 }}
          className="bg-white border border-gray-200"
        >
          {rows.map((row, i) => (
            <div
              key={row.label}
              className={`flex flex-col md:flex-row md:items-start gap-1 md:gap-8 px-6 md:px-8 py-5 ${
                i < rows.length - 1 ? "border-b border-gray-100" : ""
              }`}
            >
              <span className="font-mono text-[10px] tracking-[2px] text-gray-400 md:w-[120px] flex-shrink-0">
                {row.label}
              </span>
              <p className="text-sm text-[#1A1A1A] leading-relaxed">
                {row.value}
              </p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
