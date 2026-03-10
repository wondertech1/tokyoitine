"use client";

import { motion } from "framer-motion";

export default function HeroHeadline() {
  return (
    <div className="relative mb-10 md:mb-12">
      {/* Ghost kanji */}
      <div className="hidden md:block absolute top-[-50px] right-[-60px] md:right-[-40px] text-[320px] md:text-[360px] font-display font-normal text-black/[0.025] leading-none pointer-events-none select-none">
        東京
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="relative z-10"
      >
        <h1 className="font-display font-normal text-[clamp(56px,8vw,96px)] leading-none text-[#1A1A1A]">
          TOKYO
        </h1>
        <h2 className="font-display italic font-normal text-[clamp(40px,5.5vw,72px)] leading-none text-[#E53935]">
          YOUR PERFECT ITINERARY
        </h2>
        <p className="font-mono text-sm md:text-base tracking-wide text-[#1A1A1A] font-medium mt-8 md:mt-10">
          How many days do you have?
        </p>
      </motion.div>
    </div>
  );
}
