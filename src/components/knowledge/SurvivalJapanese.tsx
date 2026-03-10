"use client";

import { motion } from "framer-motion";

const phrases = [
  { jp: "Sumimasen", en: "Excuse me / Sorry (your #1 word)" },
  { jp: "Arigatou gozaimasu", en: "Thank you (formal)" },
  { jp: "Kore kudasai", en: "This one please (+ point)" },
  { jp: "Ikura desu ka?", en: "How much?" },
  { jp: "Eigo menu arimasu ka?", en: "English menu?" },
  { jp: "Oishii!", en: "Delicious! (chefs love it)" },
];

export default function SurvivalJapanese() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.5, delay: 0.2 }}
    >
      <h3 className="font-display text-2xl font-normal italic mb-4">
        Survival Japanese
      </h3>
      <div>
        {phrases.map((p, i) => (
          <div
            key={p.jp}
            className={`flex items-baseline justify-between py-2.5 ${
              i < phrases.length - 1 ? "border-b border-white/[0.06]" : ""
            }`}
          >
            <span className="font-mono text-sm font-semibold text-[#FFD600]">
              {p.jp}
            </span>
            <span className="text-[12px] text-white/40 text-right ml-4">
              {p.en}
            </span>
          </div>
        ))}
      </div>
    </motion.div>
  );
}
