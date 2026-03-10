"use client";

import { motion } from "framer-motion";
import type { Neighborhood } from "@/data/neighborhoods";

interface NeighborhoodHeroProps {
  neighborhood: Neighborhood;
}

export default function NeighborhoodHero({
  neighborhood,
}: NeighborhoodHeroProps) {
  return (
    <section className="relative pt-12 md:pt-20 pb-10 md:pb-14 px-6">
      <div className="max-w-[1200px] mx-auto">
        {/* Ghost kanji */}
        <div className="hidden md:block absolute top-[-20px] right-0 text-[280px] font-display font-normal text-black/[0.02] leading-none pointer-events-none select-none">
          東京
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="relative z-10"
        >
          {/* Parent day badge */}
          <div className="flex items-center gap-3 mb-6">
            <span
              className="font-mono text-[10px] font-bold tracking-[2px] px-3 py-1.5 text-white"
              style={{ backgroundColor: neighborhood.color }}
            >
              DAY {parseInt(neighborhood.parentDay.num)}
            </span>
            <span className="font-mono text-[10px] tracking-wider text-gray-400">
              {neighborhood.parentDay.title}
            </span>
          </div>

          {/* Title */}
          <h1 className="font-display font-normal text-[clamp(48px,7vw,80px)] leading-none text-[#1A1A1A]">
            {neighborhood.name}
          </h1>
          <p className="font-display italic text-[clamp(20px,3vw,32px)] leading-tight text-gray-400 mt-2">
            {neighborhood.subtitle}
          </p>

          {/* Tagline */}
          <p className="font-mono text-sm md:text-base text-gray-500 mt-6 max-w-[640px] leading-relaxed">
            {neighborhood.tagline}
          </p>

          {/* Quick facts strip */}
          <div className="flex flex-wrap items-center gap-x-6 gap-y-2 mt-8 pt-6 border-t border-gray-200">
            {[
              { label: "BEST FOR", value: neighborhood.quickFacts.bestFor },
              {
                label: "TIME NEEDED",
                value: neighborhood.quickFacts.timeNeeded,
              },
              {
                label: "NEAREST STATION",
                value: neighborhood.quickFacts.nearestStation,
              },
              { label: "VIBE", value: neighborhood.quickFacts.vibe },
            ].map((fact) => (
              <div key={fact.label} className="flex items-baseline gap-2">
                <span className="font-mono text-[10px] tracking-wider text-gray-400">
                  {fact.label}
                </span>
                <span className="font-mono text-xs font-semibold text-[#1A1A1A]">
                  {fact.value}
                </span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
