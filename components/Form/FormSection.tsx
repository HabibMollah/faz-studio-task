"use client";

import { Variants, motion } from "framer-motion";

const cardVariants: Variants = {
  offscreen: {
    x: 1900,
  },
  onscreen: {
    x: 0,
    transition: {
      type: "spring",
      bounce: 0.2,
      duration: 1.5,
    },
  },
};

export default function Card({ children }: { children: React.ReactNode }) {
  return (
    <motion.div
      className="card-container"
      initial="offscreen"
      whileInView="onscreen"
      viewport={{ once: true, amount: 0.6 }}
    >
      <motion.div className="card" variants={cardVariants}>
        {children}
      </motion.div>
    </motion.div>
  );
}
