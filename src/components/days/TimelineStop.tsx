"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import type { Stop } from "./types";
import CalloutBox from "./CalloutBox";

interface TimelineStopProps {
  stop: Stop;
  color: string;
  isLast: boolean;
  index: number;
}

export default function TimelineStop({
  stop,
  color,
  index,
}: TimelineStopProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3, delay: index * 0.08 }}
      className="relative mb-8 last:mb-0"
    >
      {/* Dot */}
      <div
        className="absolute -left-8 top-[6px] w-3 h-3 rounded-full border-[3px] border-white"
        style={{
          backgroundColor: color,
          boxShadow: `0 0 0 2px ${color}`,
        }}
      />

      {/* Time + Place */}
      <div className="flex items-baseline gap-3 flex-wrap">
        <span
          className="font-mono text-sm font-bold min-w-[48px]"
          style={{ color }}
        >
          {stop.time}
        </span>
        <h3 className="font-display text-lg md:text-xl font-normal text-[#1A1A1A]">
          {stop.place}
        </h3>
        {stop.neighborhoodSlug && (
          <Link
            href={`/neighborhoods/${stop.neighborhoodSlug}`}
            className="font-mono text-[10px] tracking-wider px-2 py-1 border border-gray-200 text-gray-400 hover:border-gray-400 hover:text-[#1A1A1A] transition-colors duration-200"
          >
            {stop.neighborhoodName} GUIDE &rarr;
          </Link>
        )}
      </div>

      {/* Description */}
      <p className="text-sm leading-relaxed text-gray-500 mt-2">
        {stop.desc}
      </p>

      {/* Warning callout */}
      {stop.warning && <CalloutBox type="warning" text={stop.warning} />}

      {/* Food callout */}
      {stop.eat && <CalloutBox type="food" text={stop.eat} />}
    </motion.div>
  );
}
