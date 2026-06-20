"use client";

import { motion } from "framer-motion";

export function GlobalBackground() {
  return (
    <div className="fixed inset-0 z-[-50] overflow-hidden bg-[#FFFAF5]">
      {/* Dynamic Animated Orbs */}
      <motion.div
        animate={{
          x: ["0%", "20%", "-10%", "0%"],
          y: ["0%", "15%", "-20%", "0%"],
          scale: [1, 1.2, 0.9, 1],
        }}
        transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-[-10%] left-[-10%] w-[50vw] h-[50vw] rounded-full bg-devine-orange/20 blur-[120px] mix-blend-multiply"
      />
      
      <motion.div
        animate={{
          x: ["0%", "-20%", "15%", "0%"],
          y: ["0%", "-10%", "25%", "0%"],
          scale: [1, 1.1, 0.8, 1],
        }}
        transition={{ duration: 18, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        className="absolute bottom-[-10%] right-[-10%] w-[60vw] h-[60vw] rounded-full bg-devine-peach/30 blur-[150px] mix-blend-multiply"
      />

      <motion.div
        animate={{
          x: ["0%", "10%", "-15%", "0%"],
          y: ["0%", "20%", "-10%", "0%"],
          scale: [1, 1.3, 0.9, 1],
        }}
        transition={{ duration: 20, repeat: Infinity, ease: "easeInOut", delay: 5 }}
        className="absolute top-[20%] right-[10%] w-[40vw] h-[40vw] rounded-full bg-devine-blue/15 blur-[120px] mix-blend-multiply"
      />

      <motion.div
        animate={{
          x: ["0%", "-15%", "10%", "0%"],
          y: ["0%", "-20%", "15%", "0%"],
          scale: [1, 0.9, 1.2, 1],
        }}
        transition={{ duration: 17, repeat: Infinity, ease: "easeInOut", delay: 3 }}
        className="absolute bottom-[20%] left-[10%] w-[45vw] h-[45vw] rounded-full bg-devine-yellow/15 blur-[130px] mix-blend-multiply"
      />

      {/* Glassy Frosted Overlay */}
      <div className="absolute inset-0 bg-white/40 backdrop-blur-[64px]" />

      {/* Fine Noise Texture for Premium Feel */}
      <div 
        className="absolute inset-0 opacity-[0.03] mix-blend-overlay"
        style={{ backgroundImage: "url('/images/noise.webp')" }}
      />
    </div>
  );
}
