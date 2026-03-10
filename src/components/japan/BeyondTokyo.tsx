"use client";

import Link from "next/link";
import { motion } from "framer-motion";

const BEYOND_PAGES = [
  {
    slug: "2-week-japan-itinerary",
    icon: "🇯🇵",
    title: "2 Weeks in Japan",
    subtitle: "Tokyo · Kyoto · Osaka — 14-day plan",
  },
  {
    slug: "golden-route",
    icon: "🏯",
    title: "Japan Golden Route",
    subtitle: "The classic first-timer itinerary",
  },
  {
    slug: "tokyo-vs-kyoto",
    icon: "⚖️",
    title: "Tokyo vs Kyoto",
    subtitle: "Which to visit — or both",
  },
];

export default function BeyondTokyo() {
  return (
    <section className="max-w-[1200px] mx-auto px-6 py-12">
      <div className="flex items-center gap-4 mb-8">
        <span className="font-mono text-[10px] font-bold tracking-[3px] text-gray-400">
          BEYOND TOKYO
        </span>
        <div className="flex-1 h-px bg-gray-200" />
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
        {BEYOND_PAGES.map((page, i) => (
          <motion.div
            key={page.slug}
            initial={{ opacity: 0, y: 8 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.25, delay: i * 0.04 }}
          >
            <Link
              href={`/japan/${page.slug}`}
              className="block border border-gray-200 bg-white p-4 md:p-5 hover:border-gray-400 hover:bg-[#F7F7F5] transition-all duration-200 group h-full"
            >
              <span className="text-2xl">{page.icon}</span>
              <h3 className="font-display text-sm text-[#1A1A1A] mt-2 group-hover:underline leading-tight">
                {page.title}
              </h3>
              <p className="font-mono text-[10px] text-gray-400 mt-1.5 leading-relaxed">
                {page.subtitle}
              </p>
            </Link>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
