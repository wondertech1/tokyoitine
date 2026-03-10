"use client";

import { motion } from "framer-motion";

interface GuideTipGridProps {
  items: { title: string; desc: string }[];
}

export default function GuideTipGrid({ items }: GuideTipGridProps) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
      {items.map((item, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.25, delay: i * 0.04 }}
          className="bg-white border border-gray-200 p-5"
        >
          <h3 className="font-display text-sm text-[#1A1A1A] mb-2">
            {item.title}
          </h3>
          <p className="text-[13px] text-gray-500 leading-relaxed">
            {item.desc}
          </p>
        </motion.div>
      ))}
    </div>
  );
}
