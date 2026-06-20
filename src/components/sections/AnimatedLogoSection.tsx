"use client";

import React from "react";
import Image from "next/image";
import { motion, type Variants } from "framer-motion";

export const AnimatedLogoSection = () => {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const textVariants: Variants = {
    hidden: { opacity: 0, y: -20 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 0.8, type: "spring", bounce: 0.4 } 
    },
  };

  const pathVariants: Variants = {
    hidden: { pathLength: 0, opacity: 0 },
    visible: {
      pathLength: 1,
      opacity: 1,
      transition: { duration: 1.5, ease: "easeInOut" },
    },
  };

  return (
    <section className="relative w-full overflow-hidden bg-white py-12 lg:py-20">
      <div className="container mx-auto px-4 flex justify-center">
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="relative w-full max-w-3xl mx-auto flex items-center justify-center min-h-[400px] md:min-h-[500px]"
        >
          {/* Centered Logo Image - Placed outside SVG for better alignment and mobile performance */}
          <div className="absolute z-30 w-[180px] h-[180px] md:w-[240px] md:h-[240px]">
            <motion.div
              className="w-full h-full relative flex items-center justify-center"
              variants={{
                hidden: { opacity: 0, scale: 0.8 },
                visible: {
                  opacity: 1,
                  scale: 1,
                  transition: { duration: 1.2, ease: "easeOut" }
                }
              }}
            >
              {/* Lightweight CSS Glow - no heavy filters */}
              <div className="absolute inset-0 bg-blue-500/10 rounded-full blur-2xl" />
              <Image 
                src="/images/logo-textless-transparent.webp" 
                alt="Devine CDC Logo" 
                fill
                sizes="(max-width: 768px) 180px, 240px"
                quality={75}
                priority
                className="object-contain relative z-10 drop-shadow-xl"
              />
            </motion.div>
          </div>

          {/* SVG Canvas for paths and text */}
          <svg 
            className="absolute inset-0 w-full h-full z-20 pointer-events-none" 
            viewBox="0 0 800 500" 
            preserveAspectRatio="xMidYMid meet"
          >
            {/* Top Left Path: Power of Togetherness */}
            <motion.path 
              d="M 330 200 C 270 190, 220 140, 200 120" 
              fill="transparent" 
              stroke="#ef4444" 
              strokeWidth="3" 
              strokeLinecap="round"
              className="drop-shadow-sm"
              variants={pathVariants}
            />

            {/* Top Right Path: Child */}
            <motion.path 
              d="M 470 200 C 530 190, 580 140, 600 120" 
              fill="transparent" 
              stroke="#f59e0b" 
              strokeWidth="3" 
              strokeLinecap="round"
              className="drop-shadow-sm"
              variants={pathVariants}
            />

            {/* Bottom Left Path: Heart Shaped Loop */}
            <motion.path 
              d="M 330 300 C 270 310, 220 360, 200 380" 
              fill="transparent" 
              stroke="#3b82f6" 
              strokeWidth="3" 
              strokeLinecap="round"
              className="drop-shadow-sm"
              variants={pathVariants}
            />

            {/* Bottom Right Path: Holding Hands */}
            <motion.path 
              d="M 470 300 C 530 310, 580 360, 600 380" 
              fill="transparent" 
              stroke="#a855f7" 
              strokeWidth="3" 
              strokeLinecap="round"
              className="drop-shadow-sm"
              variants={pathVariants}
            />

            {/* Top Left Text */}
            <motion.text
              variants={textVariants}
              x="200"
              y="70"
              textAnchor="middle"
              fill="#ef4444"
              className="font-bold uppercase tracking-widest drop-shadow-sm"
              style={{ fontSize: "16px" }}
            >
              <tspan x="200" dy="0">POWER OF</tspan>
              <tspan x="200" dy="22">TOGETHERNESS</tspan>
            </motion.text>

            {/* Top Right Text */}
            <motion.text
              variants={textVariants}
              x="600"
              y="85"
              textAnchor="middle"
              fill="#f59e0b"
              className="font-bold uppercase tracking-widest drop-shadow-sm"
              style={{ fontSize: "16px" }}
            >
              <tspan x="600" dy="0">CHILD</tspan>
            </motion.text>

            {/* Bottom Left Text */}
            <motion.text
              variants={textVariants}
              x="200"
              y="420"
              textAnchor="middle"
              fill="#3b82f6"
              className="font-bold uppercase tracking-widest drop-shadow-sm"
              style={{ fontSize: "16px" }}
            >
              <tspan x="200" dy="0">HEART SHAPED</tspan>
              <tspan x="200" dy="22">LOOP</tspan>
            </motion.text>

            {/* Bottom Right Text */}
            <motion.text
              variants={textVariants}
              x="600"
              y="420"
              textAnchor="middle"
              fill="#a855f7"
              className="font-bold uppercase tracking-widest drop-shadow-sm"
              style={{ fontSize: "16px" }}
            >
              <tspan x="600" dy="0">HOLDING</tspan>
              <tspan x="600" dy="22">HANDS</tspan>
            </motion.text>
          </svg>
        </motion.div>
      </div>
    </section>
  );
};
