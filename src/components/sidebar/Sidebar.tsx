"use client";

import { motion } from "framer-motion";
import LiveLogistics from "./LiveLogistics";
import MustBring from "./MustBring";
import BookAhead from "./BookAhead";

const cards = [LiveLogistics, MustBring, BookAhead];

export default function Sidebar() {
  return (
    <div
      className="flex gap-3 overflow-x-auto pb-2 snap-x snap-mandatory
        -mx-6 px-6 lg:mx-0 lg:px-0 lg:overflow-visible
        lg:flex-col lg:gap-4"
    >
      {cards.map((Card, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, x: 16 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.4, delay: 0.1 * (i + 1) }}
        >
          <Card />
        </motion.div>
      ))}
    </div>
  );
}
