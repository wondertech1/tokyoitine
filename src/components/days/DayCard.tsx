"use client";

import { motion } from "framer-motion";
import type { DayData } from "@/components/hero/types";

interface DayCardProps {
  day: DayData;
  isActive: boolean;
  isExpanded: boolean;
  onToggleExpand: () => void;
  selectedDays: number;
  onSelectDays: (days: number) => void;
}

function getUpsellCopy(day: DayData, selectedDays: number): string {
  const extraDays = parseInt(day.num) - selectedDays;
  const dayWord = extraDays === 1 ? "day" : "days";

  const upsells: Record<string, string> = {
    "02": `Add 1 day for digital art at teamLab + Tsukiji market food crawl \u2192`,
    "03": `Add ${extraDays} ${dayWord} to explore anime paradise in Akihabara + old Tokyo in Yanaka \u2192`,
    "04": `Add ${extraDays} ${dayWord} for Edo Castle gardens + the city\u2019s best free sunset \u2192`,
    "05": `Add ${extraDays} ${dayWord} for a coastal day trip to Kamakura\u2019s Great Buddha \u2192`,
    "06": `Add ${extraDays} ${dayWord} for UNESCO golden shrines in Nikko\u2019s mountain forests \u2192`,
    "07": `Add ${extraDays} ${dayWord} to discover the vintage neighborhoods tourists never find \u2192`,
  };

  return (
    upsells[day.num] ||
    `Add ${extraDays} more ${dayWord} to unlock this day \u2192`
  );
}

export default function DayCard({
  day,
  isActive,
  isExpanded,
  onToggleExpand,
  selectedDays,
  onSelectDays,
}: DayCardProps) {
  return (
    <motion.div
      animate={{
        opacity: isActive ? 1 : 0.6,
        filter: isActive ? "grayscale(0%)" : "grayscale(30%)",
      }}
      transition={{ duration: 0.4, ease: "easeOut" }}
      whileHover={isActive ? { y: -2 } : undefined}
      onClick={() => {
        if (isActive) {
          onToggleExpand();
        } else {
          onSelectDays(parseInt(day.num));
        }
      }}
      className={`
        bg-white border border-gray-200 cursor-pointer
        transition-shadow duration-200
        ${isActive ? "hover:shadow-[0_8px_24px_rgba(0,0,0,0.06)]" : ""}
        ${isExpanded && isActive ? "border-l-[3px]" : ""}
      `}
      style={
        isExpanded && isActive
          ? { borderLeftColor: day.color }
          : undefined
      }
    >
      {/* Accent bar */}
      <div
        className="h-1"
        style={{ backgroundColor: isActive ? day.color : "#E0E0E0" }}
      />

      {/* Card body */}
      <div className="p-4 md:p-5 lg:p-6">
        {/* Header row */}
        <div className="flex items-start justify-between mb-2">
          <div className="min-w-0">
            <div className="flex items-center gap-3">
              <span
                className="font-mono text-[11px] font-semibold text-white px-2.5 py-1 flex-shrink-0"
                style={{
                  backgroundColor: isActive ? day.color : "#BDBDBD",
                }}
              >
                {day.num}
              </span>
              <h3 className="font-display text-xl font-normal italic text-[#1A1A1A] leading-tight truncate">
                {day.title}
              </h3>
            </div>
            <p className="font-mono text-[11px] text-gray-400 tracking-wide mt-1.5 ml-[42px]">
              {day.neighborhoods}
            </p>
          </div>
          <span className="font-mono text-[10px] text-gray-300 tracking-wider whitespace-nowrap pt-1 hidden md:block">
            {day.startTime}&ndash;{day.endTime}
          </span>
        </div>

        {/* Mobile time range */}
        <span className="font-mono text-[10px] text-gray-300 tracking-wider md:hidden block ml-[42px] -mt-0.5 mb-2">
          {day.startTime}&ndash;{day.endTime}
        </span>

        {isActive ? (
          <>
            {/* Tagline */}
            <p className="text-[13px] leading-relaxed text-gray-500 mt-3">
              {day.tagline}
            </p>

            {/* Metadata strip */}
            <div className="bg-[#F7F7F5] p-3 mt-4">
              <div className="flex items-center gap-4 text-[11px] flex-wrap">
                <span className="text-gray-600">
                  <span className="text-[#1A1A1A] font-medium">&#9733;</span>{" "}
                  {day.highlight}
                </span>
                <span className="text-gray-300">|</span>
                <span className="text-gray-600">
                  <span className="text-[#1A1A1A] font-medium">&#127836;</span>{" "}
                  {day.topFood}
                </span>
              </div>
              <p className="font-mono text-[10px] text-gray-400 mt-2">
                {day.stopCount} stops &middot; {day.foodPicks} food picks
              </p>
            </div>

            {/* Expand trigger */}
            <div className="font-mono text-[10px] font-bold tracking-[2px] text-gray-300 mt-4">
              {isExpanded ? "\u25B2 COLLAPSE" : "\u25BC EXPAND FULL DAY"}
            </div>

          </>
        ) : (
          /* Upsell for dimmed cards */
          <div className="mt-3 pt-3 border-t border-gray-100">
            <p className="text-[13px] text-gray-400 italic">
              {getUpsellCopy(day, selectedDays)}
            </p>
          </div>
        )}
      </div>
    </motion.div>
  );
}
