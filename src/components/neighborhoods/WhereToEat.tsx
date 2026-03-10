"use client";

import { motion } from "framer-motion";
import type { Restaurant } from "@/data/neighborhoods";

interface WhereToEatProps {
  restaurants: Restaurant[];
  color: string;
}

function RestaurantRow({
  restaurant,
  index,
}: {
  restaurant: Restaurant;
  index: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 8 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.25, delay: index * 0.06 }}
      className="border-b border-gray-100 last:border-0 py-5 first:pt-0"
    >
      <div className="flex flex-col md:flex-row md:items-start gap-2 md:gap-6">
        {/* Name + cuisine */}
        <div className="md:w-[240px] flex-shrink-0">
          <h3 className="font-display text-base text-[#1A1A1A]">
            {restaurant.name}
          </h3>
          <span className="font-mono text-[10px] tracking-wider text-gray-400">
            {restaurant.cuisine}
          </span>
        </div>

        {/* Must order */}
        <div className="flex-1">
          <p className="text-sm text-gray-500">{restaurant.mustOrder}</p>
        </div>

        {/* Price + station */}
        <div className="md:w-[160px] flex-shrink-0 md:text-right">
          <span className="font-mono text-xs font-semibold text-[#1A1A1A]">
            {restaurant.priceRange}
          </span>
          <p className="font-mono text-[10px] text-gray-400 mt-0.5">
            {restaurant.priceDetail}
          </p>
        </div>
      </div>

      {/* Warning */}
      {restaurant.warning && (
        <div className="mt-2 flex items-start gap-2">
          <span className="font-mono text-[10px] font-bold text-[#FFB300] flex-shrink-0">
            !!
          </span>
          <span className="font-mono text-[10px] text-[#FFB300]">
            {restaurant.warning}
          </span>
        </div>
      )}
    </motion.div>
  );
}

export default function WhereToEat({ restaurants, color }: WhereToEatProps) {
  return (
    <section className="px-6 py-10 md:py-14 bg-[#F5F5F0]">
      <div className="max-w-[1200px] mx-auto">
        <div className="flex items-center gap-3 mb-8">
          <div className="w-6 h-[2px]" style={{ backgroundColor: color }} />
          <h2 className="font-mono text-xs tracking-[3px] text-gray-400 font-semibold">
            WHERE TO EAT
          </h2>
        </div>

        <div className="bg-white border border-gray-200 p-6 md:p-8">
          {restaurants.map((restaurant, i) => (
            <RestaurantRow
              key={restaurant.name}
              restaurant={restaurant}
              index={i}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
