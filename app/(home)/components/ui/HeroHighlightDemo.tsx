"use client";
import { HeroHighlight, Highlight } from "@/app/(home)/components/ui/hero-highlight";
import { motion } from "framer-motion";

export function HeroHighlightDemo() {
  return (
    <HeroHighlight>
      <motion.h1
        initial={{
          opacity: 0,
          y: 20,
        }}
        animate={{
          opacity: 1,
          y: [20, -5, 0],
        }}
        transition={{
          duration: 0.5,
          ease: [0.4, 0.0, 0.2, 1],
        }}
        className="text-xl px-4 md:text-3xl lg:text-4xl font-bold text-neutral-700 dark:text-white max-w-4xl leading-relaxed lg:leading-snug text-center mx-auto "
      >
        <p>Wanna talk or connect with me?</p> 
        <p>u can contact me via{" "}</p>
        <Highlight className="text-black dark:text-white">
          <a href="instagram.com/briskaanandaa">Instagram</a>
          <a href="instagram.com/briskaanandaa">, Linkedin or </a>
          <a href="instagram.com/briskaanandaa">github</a>
        </Highlight> 
      </motion.h1>
    </HeroHighlight>
  );
}
