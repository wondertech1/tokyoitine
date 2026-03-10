"use client";

import { useEffect } from "react";
import { AnimatePresence } from "framer-motion";
import { DAYS } from "@/components/hero/types";
import { DAYS_FULL } from "./types";
import DayCard from "./DayCard";
import DayTimeline from "./DayTimeline";

interface DayCardsGridProps {
  selectedDays: number;
  expandedDay: string | null;
  onExpandDay: (dayNum: string | null) => void;
  onSelectDays: (days: number) => void;
}

export default function DayCardsGrid({
  selectedDays,
  expandedDay,
  onExpandDay,
  onSelectDays,
}: DayCardsGridProps) {
  useEffect(() => {
    if (expandedDay) {
      setTimeout(() => {
        document
          .getElementById("day-timeline")
          ?.scrollIntoView({ behavior: "smooth", block: "start" });
      }, 100);
    }
  }, [expandedDay]);

  const expandedDayFull = expandedDay
    ? DAYS_FULL.find((d) => d.num === expandedDay)
    : null;

  return (
    <section id="day-cards" className="max-w-[1200px] mx-auto px-6 py-12">
      {/* Section header */}
      <div className="flex items-center gap-4 mb-8">
        <span className="font-mono text-[10px] font-bold tracking-[3px] text-gray-400">
          YOUR {selectedDays}-DAY ITINERARY
        </span>
        <div className="flex-1 h-px bg-gray-200" />
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {DAYS.map((day) => (
          <DayCard
            key={day.num}
            day={day}
            isActive={parseInt(day.num) <= selectedDays}
            isExpanded={expandedDay === day.num}
            onToggleExpand={() =>
              onExpandDay(expandedDay === day.num ? null : day.num)
            }
            selectedDays={selectedDays}
            onSelectDays={onSelectDays}
          />
        ))}
      </div>

      {/* Expanded timeline — renders below the grid */}
      <AnimatePresence mode="wait">
        {expandedDayFull && (
          <DayTimeline
            key={expandedDayFull.num}
            day={expandedDayFull}
            onClose={() => onExpandDay(null)}
          />
        )}
      </AnimatePresence>
    </section>
  );
}
