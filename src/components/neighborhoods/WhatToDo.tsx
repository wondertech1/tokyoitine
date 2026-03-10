"use client";

import { motion } from "framer-motion";
import type { Activity, Neighborhood } from "@/data/neighborhoods";

interface WhatToDoProps {
  activities: Activity[];
  color: string;
}

function ActivityCard({
  activity,
  color,
  index,
}: {
  activity: Activity;
  color: string;
  index: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.3, delay: index * 0.06 }}
      className="bg-white border border-gray-200 p-6"
    >
      {/* Rank badge */}
      <div className="flex items-start justify-between mb-3">
        <span
          className="font-mono text-[10px] font-bold tracking-[2px] px-2 py-1 text-white"
          style={{ backgroundColor: color }}
        >
          #{activity.rank}
        </span>
        <span className="font-mono text-[10px] text-gray-400">
          {activity.time}
        </span>
      </div>

      {/* Name + desc */}
      <h3 className="font-display text-lg text-[#1A1A1A] mb-2">
        {activity.name}
      </h3>
      <p className="text-sm text-gray-500 leading-relaxed">{activity.desc}</p>

      {/* Bottom strip */}
      <div className="flex items-center justify-between mt-4 pt-3 border-t border-gray-100">
        <span className="font-mono text-[10px] text-gray-400">
          {activity.cost}
        </span>
        {activity.tip && (
          <span className="font-mono text-[10px] text-[#4CAF50] font-medium">
            TIP: {activity.tip}
          </span>
        )}
      </div>
    </motion.div>
  );
}

export default function WhatToDo({ activities, color }: WhatToDoProps) {
  return (
    <section className="px-6 py-10 md:py-14">
      <div className="max-w-[1200px] mx-auto">
        <div className="flex items-center gap-3 mb-8">
          <div className="w-6 h-[2px]" style={{ backgroundColor: color }} />
          <h2 className="font-mono text-xs tracking-[3px] text-gray-400 font-semibold">
            WHAT TO DO
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {activities.map((activity, i) => (
            <ActivityCard
              key={activity.name}
              activity={activity}
              color={color}
              index={i}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
