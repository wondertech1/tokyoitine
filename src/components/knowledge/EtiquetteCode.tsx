"use client";

import { motion } from "framer-motion";

const rules = [
  { rule: "Shoes off", detail: "Temples, homes, some restaurants. Shoes lined up = follow suit." },
  { rule: "No walking food", detail: "Find a bench or stand by the stall. Walking and eating is rude." },
  { rule: "Silent trains", detail: "No phone calls. Keep conversation low. Taken very seriously." },
  { rule: "Zero tipping", detail: "Don\u2019t tip anywhere. It causes confusion or offense." },
  { rule: "Carry your trash", detail: "Public bins are rare. Carry a small bag. Bins at konbini and stations." },
  { rule: "Queue everything", detail: "Never cut, even if the line looks chaotic." },
  { rule: "Cash ready", detail: "Many small restaurants, shrines, and stalls are cash-only. Carry \u00a510,000\u201315,000." },
];

export default function EtiquetteCode() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.5, delay: 0.1 }}
    >
      <h3 className="font-display text-2xl font-normal italic mb-4">
        Etiquette Code
      </h3>
      <div className="space-y-2.5">
        {rules.map((r) => (
          <div key={r.rule} className="flex gap-3 text-[13px] leading-relaxed">
            <span className="font-mono text-[11px] font-bold text-[#4DD0E1] min-w-[110px] shrink-0 pt-0.5">
              {r.rule}
            </span>
            <span className="text-white/50">{r.detail}</span>
          </div>
        ))}
      </div>
    </motion.div>
  );
}
