"use client";

import { motion } from "framer-motion";
import { DropLetterTagline } from "@/components/ui/DropLetterTagline";
import { Heart } from "lucide-react";

export function SafeSpaceDivider() {
  return (
    <section className="relative py-20 md:py-28 overflow-hidden">
      {/* Subtle Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-white via-devine-lavender-bg to-white" />
      
      {/* Floating decorative elements */}
      <motion.div
        animate={{ y: [0, -15, 0], rotate: [0, 5, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-10 left-[10%] w-16 h-16 rounded-full bg-devine-pink/10 blur-sm"
      />
      <motion.div
        animate={{ y: [0, 10, 0], rotate: [0, -3, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        className="absolute bottom-10 right-[15%] w-20 h-20 rounded-full bg-devine-purple/8 blur-sm"
      />
      <motion.div
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        className="absolute top-1/2 right-[8%] w-10 h-10 rounded-full bg-devine-blue/10 blur-sm"
      />

      <div className="relative z-10 flex flex-col items-center gap-6">
        {/* Heart icon */}
        <motion.div
          initial={{ scale: 0, rotate: -180 }}
          whileInView={{ scale: 1, rotate: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ type: "spring", stiffness: 200, damping: 15, delay: 0.2 }}
          className="w-14 h-14 rounded-full bg-gradient-to-br from-devine-pink/20 to-devine-purple/20 flex items-center justify-center"
        >
          <Heart className="w-7 h-7 text-devine-pink" fill="currentColor" />
        </motion.div>

        {/* Main Drop Letter Tagline — large watermark style */}
        <DropLetterTagline 
          variant="divider" 
          startDelay={0.4}
        />
        
        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.5 }}
          transition={{ delay: 1.5, duration: 0.6 }}
          className="text-devine-muted text-base md:text-lg font-medium tracking-wide max-w-md text-center"
        >
          Where every child is celebrated, supported, and empowered to grow.
        </motion.p>

        {/* Decorative line */}
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: false, amount: 0.5 }}
          transition={{ delay: 1.8, duration: 0.8, ease: "easeOut" }}
          className="w-24 h-1 rounded-full bg-gradient-to-r from-devine-purple/30 via-devine-pink/40 to-devine-blue/30"
        />
      </div>
    </section>
  );
}
