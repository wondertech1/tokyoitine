"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import type { GuideRestaurant } from "@/data/guides";

interface GuideRestaurantListProps {
  restaurants: GuideRestaurant[];
  groupBy: "neighborhood" | "cuisine";
}

export default function GuideRestaurantList({
  restaurants,
  groupBy,
}: GuideRestaurantListProps) {
  const grouped = restaurants.reduce<Record<string, GuideRestaurant[]>>(
    (acc, r) => {
      const key = groupBy === "neighborhood" ? r.neighborhood : r.cuisine;
      if (!acc[key]) acc[key] = [];
      acc[key].push(r);
      return acc;
    },
    {}
  );

  return (
    <div className="space-y-8">
      {Object.entries(grouped).map(([group, items]) => (
        <div key={group}>
          <h3 className="font-mono text-[10px] font-bold tracking-[3px] text-gray-400 mb-4">
            {group.toUpperCase()}
          </h3>
          <div className="space-y-0 border border-gray-200">
            {items.map((r, i) => (
              <motion.div
                key={r.name}
                initial={{ opacity: 0, y: 6 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-20px" }}
                transition={{ duration: 0.2, delay: i * 0.03 }}
                className={`p-4 md:p-5 ${
                  i < items.length - 1 ? "border-b border-gray-100" : ""
                } ${i % 2 === 0 ? "bg-white" : "bg-[#FAFAF8]"}`}
              >
                <div className="flex flex-col md:flex-row md:items-start gap-2 md:gap-6">
                  {/* Name + cuisine */}
                  <div className="md:w-[220px] flex-shrink-0">
                    <span className="font-display text-sm text-[#1A1A1A]">
                      {r.name}
                    </span>
                    <div className="flex items-center gap-2 mt-0.5">
                      <span className="font-mono text-[10px] tracking-wider text-gray-400">
                        {r.cuisine}
                      </span>
                      <span className="font-mono text-[10px] font-semibold text-[#1A1A1A]">
                        {r.priceRange}
                      </span>
                    </div>
                  </div>

                  {/* Must order */}
                  <div className="flex-1">
                    <p className="text-[13px] text-gray-500 leading-relaxed">
                      {r.mustOrder}
                    </p>
                  </div>

                  {/* Price + day */}
                  <div className="md:w-[130px] flex-shrink-0 md:text-right">
                    <span className="font-mono text-[10px] text-gray-400">
                      {r.priceDetail}
                    </span>
                    <Link
                      href={`/${r.itineraryDay.toLowerCase().replace("day ", "").trim()}-day-tokyo-itinerary`}
                      className="font-mono text-[10px] text-gray-400 hover:text-[#1A1A1A] transition-colors block mt-0.5"
                    >
                      {r.itineraryDay} &rarr;
                    </Link>
                  </div>
                </div>

                {r.warning && (
                  <div className="mt-2 flex items-start gap-2">
                    <span className="font-mono text-[10px] font-bold text-[#FFB300] flex-shrink-0">
                      !!
                    </span>
                    <span className="font-mono text-[10px] text-[#FFB300]">
                      {r.warning}
                    </span>
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
