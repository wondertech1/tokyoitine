"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import type { Neighborhood } from "@/data/neighborhoods";

interface ItineraryLinkProps {
  neighborhood: Neighborhood;
}

export default function ItineraryLink({ neighborhood }: ItineraryLinkProps) {
  const day = neighborhood.parentDay;

  return (
    <section className="px-6 py-10 md:py-14">
      <div className="max-w-[1200px] mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.3 }}
          className="bg-[#1A1A1A] p-6 md:p-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4"
        >
          <div>
            <span className="font-mono text-[10px] tracking-[2px] text-gray-500">
              SEE THE FULL DAY {parseInt(day.num)} PLAN
            </span>
            <p className="font-display text-lg text-white mt-1">
              {day.title}{" "}
              <span className="text-gray-500">&mdash; includes {neighborhood.name}</span>
            </p>
          </div>
          <Link
            href={`/${day.slug}`}
            className="bg-white text-[#1A1A1A] font-mono text-xs tracking-widest font-semibold py-3 px-6 hover:bg-gray-100 transition-colors duration-200 whitespace-nowrap"
          >
            VIEW DAY {parseInt(day.num)} &rarr;
          </Link>
        </motion.div>

        {/* Adjacent neighborhoods */}
        {neighborhood.adjacent.length > 0 && (
          <div className="mt-6">
            <span className="font-mono text-[10px] tracking-[2px] text-gray-400 block mb-3">
              NEARBY NEIGHBORHOODS
            </span>
            <div className="flex flex-wrap gap-3">
              {neighborhood.adjacent.map((adj) => (
                <Link
                  key={adj.slug}
                  href={`/neighborhoods/${adj.slug}`}
                  className="border border-gray-200 bg-white px-4 py-3 hover:border-gray-400 transition-colors duration-200 group"
                >
                  <span className="font-display text-sm text-[#1A1A1A] group-hover:underline">
                    {adj.name}
                  </span>
                  <span className="font-mono text-[10px] text-gray-400 block mt-0.5">
                    {adj.direction} &middot; {adj.transitTime}
                  </span>
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
