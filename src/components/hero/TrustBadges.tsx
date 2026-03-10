"use client";

import { motion } from "framer-motion";

const badges = [
  { label: "LOCALLY AUDITED", bg: "bg-green-50", text: "text-green-800" },
  { label: "FIELD-TESTED 2026", bg: "bg-blue-50", text: "text-blue-800" },
  { label: "EVERY TRAIN TIMED", bg: "bg-orange-50", text: "text-orange-800" },
];

export default function TrustBadges() {
  return (
    <div className="mb-4">
      <div className="w-16 h-[2px] bg-[#E53935] mb-6" />
      <div className="flex flex-wrap gap-2">
      {badges.map((badge, i) => (
        <motion.span
          key={badge.label}
          initial={{ opacity: 0, y: 6 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: i * 0.1, duration: 0.4 }}
          className={`${badge.bg} ${badge.text} font-mono text-[10px] font-semibold tracking-widest uppercase px-3 py-1.5 inline-flex items-center gap-1.5`}
        >
          <span>&#10003;</span>
          {badge.label}
        </motion.span>
      ))}
      </div>
    </div>
  );
}
