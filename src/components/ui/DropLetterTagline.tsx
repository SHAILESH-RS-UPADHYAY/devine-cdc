"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface DropLetterTaglineProps {
  text?: string;
  className?: string;
  letterClassName?: string;
  /** Variant controls the visual style */
  variant?: "hero" | "navbar" | "divider" | "footer";
  /** Delay before the animation starts (seconds) */
  startDelay?: number;
}

const variantStyles: Record<string, { wrapper: string; letter: string }> = {
  hero: {
    wrapper: "text-4xl md:text-6xl lg:text-7xl font-heading font-extrabold tracking-[0.25em]",
    letter: "text-transparent bg-clip-text bg-gradient-to-b from-devine-purple to-devine-pink",
  },
  navbar: {
    wrapper: "text-[14px] md:text-[16px] font-black tracking-[0.2em] uppercase",
    letter: "text-transparent bg-clip-text bg-gradient-to-r from-purple-600 via-pink-500 to-orange-400 drop-shadow-[0_2px_4px_rgba(255,105,180,0.4)]",
  },
  divider: {
    wrapper: "text-5xl md:text-7xl lg:text-8xl font-heading font-black tracking-[0.15em]",
    letter: "text-transparent bg-clip-text bg-gradient-to-br from-devine-purple/15 via-devine-pink/20 to-devine-blue/15",
  },
  footer: {
    wrapper: "text-3xl md:text-4xl font-heading font-extrabold tracking-[0.2em]",
    letter: "text-transparent bg-clip-text bg-gradient-to-r from-devine-purple-light/60 to-devine-pink/40",
  },
};

export function DropLetterTagline({
  text = "YOUR SAFE SPACE",
  className,
  letterClassName,
  variant = "hero",
  startDelay = 0,
}: DropLetterTaglineProps) {
  const style = variantStyles[variant] || variantStyles.hero;
  const letters = text.split("");

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false, amount: 0.3 }}
      className={cn(
        "flex items-center justify-center gap-[1px] select-none overflow-hidden",
        style.wrapper,
        className
      )}
      aria-label={text}
    >
      {letters.map((letter, i) => (
        <motion.span
          key={`${letter}-${i}`}
          variants={{
            hidden: {
              y: -150,
              opacity: 0,
              scale: 0.5,
              rotateZ: -10,
            },
            visible: {
              y: 0,
              opacity: 1,
              scale: 1,
              rotateZ: 0,
              transition: {
                type: "spring",
                stiffness: 200,
                damping: 10,
                mass: 0.8,
                delay: startDelay + i * 0.08,
              },
            },
          }}
          className={cn(
            "inline-block",
            letter === " " ? "w-[0.3em]" : "",
            style.letter,
            letterClassName
          )}
          style={{ perspective: "600px" }}
        >
          {letter === " " ? "\u00A0" : letter}
        </motion.span>
      ))}
    </motion.div>
  );
}
