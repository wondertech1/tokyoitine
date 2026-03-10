"use client";

import { Fragment } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { DAYS, DURATIONS } from "./types";

interface TripSelectorProps {
  selectedDays: number;
  onSelect: (days: number) => void;
}

export default function TripSelector({
  selectedDays,
  onSelect,
}: TripSelectorProps) {
  const duration = DURATIONS[selectedDays - 1];
  const activeDays = DAYS.slice(0, selectedDays);

  return (
    <div>
      {/* Duration Buttons */}
      <div className="flex items-center gap-2 pb-6 border-b border-gray-100 overflow-x-auto -mx-1 px-1">
        <span className="font-mono text-[10px] text-gray-400 tracking-wider shrink-0 hidden md:block">
          DAYS:
        </span>
        <div className="flex gap-0">
          {DURATIONS.map((d) => {
            const isSelected = d.days === selectedDays;
            const dayColor = DAYS[d.days - 1].color;

            return (
              <motion.button
                key={d.days}
                onClick={() => onSelect(d.days)}
                animate={{ scale: isSelected ? 1.02 : 1 }}
                transition={{ type: "spring", stiffness: 400, damping: 25 }}
                className={`
                  relative font-mono text-xs tracking-widest py-3 px-4 min-w-[48px]
                  transition-all duration-200 whitespace-nowrap cursor-pointer shrink-0
                  ${
                    isSelected
                      ? "bg-[#1A1A1A] text-white border border-transparent"
                      : "bg-transparent border border-gray-300 text-gray-500 hover:bg-gray-100 hover:text-gray-800"
                  }
                `}
              >
                {isSelected && (
                  <span
                    className="absolute top-1.5 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full"
                    style={{ backgroundColor: dayColor }}
                  />
                )}
                {d.days}
              </motion.button>
            );
          })}
        </div>
      </div>

      {/* Codename Label */}
      <p className="font-mono text-xs tracking-widest text-gray-400 mt-4">
        {selectedDays}-DAY PLAN &middot;{" "}
        <span className="text-[#1A1A1A] font-semibold">
          &ldquo;{duration.codename}&rdquo;
        </span>{" "}
        &middot; {duration.tagline}
      </p>

      {/* Preview Panel */}
      <div className="bg-[#F5F5F0] border border-gray-200 p-6 md:p-8 mt-6">
        <AnimatePresence mode="wait">
          <motion.div
            key={selectedDays}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.3 }}
          >
            {/* Day List */}
            <div className="space-y-4 pt-2">
              {activeDays.map((day) => (
                <div
                  key={day.num}
                  className="flex flex-col md:flex-row md:items-center gap-1 md:gap-4"
                >
                  <span className="font-mono text-xs text-gray-400 w-10 flex-shrink-0">
                    Day {parseInt(day.num)}
                  </span>
                  <span
                    className="w-1.5 h-1.5 rounded-full flex-shrink-0 hidden md:block"
                    style={{ backgroundColor: day.color }}
                  />
                  <span className="font-display italic text-base text-[#1A1A1A] flex items-center gap-2">
                    <span
                      className="w-1.5 h-1.5 rounded-full flex-shrink-0 md:hidden"
                      style={{ backgroundColor: day.color }}
                    />
                    {day.title}
                  </span>
                  <span className="font-mono text-xs text-gray-400 md:ml-auto pl-4 md:pl-0">
                    {day.neighborhoods}
                  </span>
                </div>
              ))}
            </div>

            {/* Stats + CTA bar */}
            <div className="bg-[#1A1A1A] -mx-6 md:-mx-8 -mb-6 md:-mb-8 px-6 md:px-8 py-5 mt-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <div className="flex items-center gap-3 flex-wrap">
                {[
                  { value: duration.totalStops, label: "stops" },
                  { value: duration.totalFoodPicks, label: "food picks" },
                  { value: duration.totalWarnings, label: "warnings" },
                ].map((stat, i) => (
                  <Fragment key={stat.label}>
                    {i > 0 && <span className="text-gray-600">&middot;</span>}
                    <span className="font-mono text-xs text-gray-400">
                      <span className="text-white font-semibold">
                        {stat.value}
                      </span>{" "}
                      {stat.label}
                    </span>
                  </Fragment>
                ))}
              </div>
              <button
                onClick={() => {
                  console.log(`View full ${selectedDays}-day plan`);
                  document
                    .getElementById("day-cards")
                    ?.scrollIntoView({ behavior: "smooth" });
                }}
                className="bg-white text-[#1A1A1A] font-mono text-xs tracking-widest font-semibold py-3 px-6 hover:bg-gray-100 transition-colors duration-200 whitespace-nowrap cursor-pointer w-full sm:w-auto text-center sm:text-left"
              >
                VIEW FULL {selectedDays}-DAY PLAN &rarr;
              </button>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}
