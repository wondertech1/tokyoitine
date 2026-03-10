"use client";

import { motion } from "framer-motion";

export default function GettingAround() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.5, delay: 0 }}
    >
      <h3 className="font-display text-2xl font-normal italic mb-4">
        Getting Around
      </h3>
      <div className="space-y-3 text-sm leading-relaxed text-white/60">
        <p>
          Get a <strong className="text-white">digital Suica</strong> on your
          phone (iPhone: Wallet app; Android: Google Pay). Covers all trains,
          subways, buses, and most konbini purchases. Load
          {" \u00a5"}3,000{"\u2013"}5,000 to start.
        </p>
        <p>
          <strong className="text-white">JR Pass:</strong> Only worth it if
          you{"\u2019"}re doing Kamakura + Nikko + other JR trips. For
          Tokyo-only, Suica is better and simpler. A 7-day JR Pass is
          {" \u00a5"}50,000 {"\u2014"} do the math for your specific trips.
        </p>
        <p>
          <strong className="text-white">Airport:</strong> Narita {"\u2192"}{" "}
          N{"\u2019"}EX to Shinjuku/Shibuya (~60 min, {"\u00a5"}3,250). Haneda{" "}
          {"\u2192"} Keikyu Line (~30 min, {"\u00a5"}500{"\u2013"}700). Both
          accept Suica.
        </p>
      </div>
    </motion.div>
  );
}
