"use client";

import { motion } from "framer-motion";
import type { TransitInfo } from "@/data/neighborhoods";

interface GettingThereProps {
  transit: TransitInfo;
  color: string;
}

export default function GettingThere({ transit, color }: GettingThereProps) {
  const directions = [
    { from: "Shinjuku", info: transit.fromShinjuku },
    { from: "Tokyo Station", info: transit.fromTokyo },
    { from: "Shibuya", info: transit.fromShibuya },
  ];

  return (
    <section className="px-6 py-10 md:py-14">
      <div className="max-w-[1200px] mx-auto">
        <div className="flex items-center gap-3 mb-8">
          <div className="w-6 h-[2px]" style={{ backgroundColor: color }} />
          <h2 className="font-mono text-xs tracking-[3px] text-gray-400 font-semibold">
            GETTING THERE
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Stations */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.3 }}
            className="bg-[#1A1A1A] p-6 md:p-8"
          >
            <h3 className="font-mono text-[10px] tracking-[2px] text-gray-500 mb-5">
              STATIONS
            </h3>
            <div className="space-y-4">
              {transit.stations.map((station) => (
                <div key={station.name}>
                  <span className="font-display text-base text-white">
                    {station.name}
                  </span>
                  <div className="flex flex-wrap gap-1.5 mt-1.5">
                    {station.lines.map((line) => (
                      <span
                        key={line}
                        className="font-mono text-[10px] tracking-wider px-2 py-1 bg-white/10 text-gray-400"
                      >
                        {line}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Directions + tip */}
          <div className="space-y-4">
            {directions.map((dir, i) => (
              <motion.div
                key={dir.from}
                initial={{ opacity: 0, y: 8 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.25, delay: i * 0.06 }}
                className="bg-white border border-gray-200 p-5"
              >
                <span className="font-mono text-[10px] tracking-wider text-gray-400">
                  FROM {dir.from.toUpperCase()}
                </span>
                <p className="font-mono text-sm text-[#1A1A1A] mt-1.5">
                  {dir.info}
                </p>
              </motion.div>
            ))}

            {/* Walking tip */}
            <motion.div
              initial={{ opacity: 0, y: 8 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.25, delay: 0.2 }}
              className="bg-[#E8F5E9] border border-[#C8E6C9] p-5"
            >
              <span className="font-mono text-[10px] tracking-wider text-[#2E7D32] font-semibold">
                WALKING TIP
              </span>
              <p className="text-sm text-[#1A1A1A] mt-1.5 leading-relaxed">
                {transit.walkingTip}
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
