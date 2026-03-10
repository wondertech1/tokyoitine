"use client";

import { motion } from "framer-motion";
import type { DayDataFull } from "./types";
import TimelineStop from "./TimelineStop";
import TransitChip from "./TransitChip";
import CalloutBox from "./CalloutBox";

interface DayTimelineProps {
  day: DayDataFull;
  onClose: () => void;
}

export default function DayTimeline({ day, onClose }: DayTimelineProps) {
  return (
    <motion.div
      id="day-timeline"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      transition={{ duration: 0.35, ease: "easeOut" }}
      className="bg-white border border-gray-200 mt-6 relative"
    >
      {/* Close button */}
      <button
        onClick={onClose}
        className="absolute top-4 right-4 w-8 h-8 flex items-center justify-center text-gray-300 hover:text-gray-600 transition-colors font-mono text-sm cursor-pointer z-10"
      >
        &#10005;
      </button>

      {/* Day header */}
      <div className="p-5 md:p-8 pb-0">
        <span
          className="font-mono text-[11px] font-bold tracking-[3px]"
          style={{ color: day.color }}
        >
          DAY {day.num}
        </span>
        <h2 className="font-display text-3xl md:text-4xl font-normal italic text-[#1A1A1A] mt-1">
          {day.title}
        </h2>
        <p className="font-mono text-xs text-gray-400 tracking-wide mt-2">
          {day.neighborhoods}
        </p>
      </div>

      {/* Timeline */}
      <div className="px-5 md:px-8 pt-8 pb-6">
        <div className="relative pl-8">
          {/* Vertical timeline line */}
          <div
            className="absolute left-[7px] top-2 bottom-2 w-[2px]"
            style={{
              background: `linear-gradient(to bottom, ${day.color}, #E0E0E0)`,
            }}
          />

          {day.stops.map((stop, index) => (
            <div key={index}>
              {stop.transit && <TransitChip text={stop.transit} />}
              <TimelineStop
                stop={stop}
                color={day.color}
                isLast={index === day.stops.length - 1}
                index={index}
              />
            </div>
          ))}
        </div>
      </div>

      {/* Local tip */}
      <div className="mx-5 md:mx-8 mb-6">
        <CalloutBox type="tip" text={day.localTip} />
      </div>

      {/* Dark footer bar */}
      <div className="bg-[#1A1A1A] px-5 md:px-8 py-4 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
        <span className="font-mono text-xs text-gray-400">
          <span className="text-white font-semibold">{day.stopCount}</span>{" "}
          stops &middot;{" "}
          <span className="text-white font-semibold">{day.foodPicks}</span>{" "}
          food picks &middot;{" "}
          <span className="text-white font-semibold">
            {day.startTime}&ndash;{day.endTime}
          </span>
        </span>
        <button
          onClick={onClose}
          className="font-mono text-[10px] font-bold tracking-[2px] text-gray-400 hover:text-white transition-colors cursor-pointer"
        >
          COLLAPSE &#9650;
        </button>
      </div>
    </motion.div>
  );
}
