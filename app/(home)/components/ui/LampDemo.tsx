"use client";
import { motion } from "framer-motion";
import { InfiniteMovingCardsDemo } from "./InfiniteMovingCardsDemo";
import { LampContainer } from "./lamp";

export function LampDemo() {
  return (
    <LampContainer>
      <motion.h1
        initial={{ opacity: 0.5, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.3,
          duration: 0.8,
          ease: "easeInOut",
        }}
        className="mt-[18%] bg-gradient-to-br from-slate-300 to-slate-500 py-1 bg-clip-text text-center text-4xl font-medium tracking-tight text-transparent md:text-7xl"
      >
        My Work <br/> Experiences
      </motion.h1>
      
      <InfiniteMovingCardsDemo />
      
    </LampContainer>
  );
}
