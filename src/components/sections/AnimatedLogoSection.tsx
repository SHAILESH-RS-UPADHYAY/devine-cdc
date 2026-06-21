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
        staggerChildren: 0.3,
      },
    },
  };

  const textVariants: Variants = {
    hidden: { opacity: 0, y: -40 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 1.0, type: "spring", bounce: 0.5, delay: 0.5 } 
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
    <section className="relative w-full overflow-hidden bg-white py-4 lg:py-8">
      <div className="container mx-auto px-4 flex justify-center">
        
        {/* Animation Canvas */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="relative w-full max-w-4xl mx-auto scale-125 sm:scale-110 md:scale-100 mt-8 mb-8"
        >
          {/* Combined SVG for perfect alignment */}
          <svg 
            className="relative z-20 w-full h-auto drop-shadow-sm overflow-visible" 
            viewBox="50 30 700 500" 
            preserveAspectRatio="xMidYMid meet"
          >
            <defs>
              <filter id="glow" x="-20%" y="-20%" width="140%" height="140%">
                <feGaussianBlur stdDeviation="4" result="blur" />
                <feMerge>
                  <feMergeNode in="blur" />
                  <feMergeNode in="SourceGraphic" />
                </feMerge>
              </filter>
            </defs>

            {/* HD Logo using foreignObject for Next.js Image optimization */}
            <foreignObject x="280" y="150" width="240" height="240">
              <motion.div
                className="w-full h-full relative"
                variants={{
                  hidden: { opacity: 0, clipPath: "circle(0% at 50% 50%)" },
                  visible: {
                    opacity: 1,
                    clipPath: "circle(100% at 50% 50%)",
                    transition: { duration: 2.5, ease: "easeInOut" }
                  }
                }}
              >
                <Image 
                  src="/images/logo-textless-transparent.webp" 
                  alt="Devine CDC Logo" 
                  fill
                  sizes="(max-width: 768px) 100vw, 240px"
                  quality={100}
                  priority
                  className="object-contain relative z-10"
                />
              </motion.div>
            </foreignObject>

            {/* --- CURLY PATHS --- */}
            
            {/* Top Left Path: Power of Togetherness */}
            <motion.path 
              d="M 315 185 C 275 185, 230 115, 200 115" 
              fill="transparent" 
              stroke="#ef4444" 
              strokeWidth="2.5" 
              strokeLinecap="round"
              filter="url(#glow)"
              variants={pathVariants}
            />

            {/* Top Right Path: Child */}
            <motion.path 
              d="M 485 185 C 525 185, 570 115, 600 115" 
              fill="transparent" 
              stroke="#f59e0b" 
              strokeWidth="2.5" 
              strokeLinecap="round"
              filter="url(#glow)"
              variants={pathVariants}
            />

            {/* Bottom Left Path: Heart Shaped Loop */}
            <motion.path 
              d="M 315 355 C 275 355, 230 425, 200 425" 
              fill="transparent" 
              stroke="#3b82f6" 
              strokeWidth="2.5" 
              strokeLinecap="round"
              filter="url(#glow)"
              variants={pathVariants}
            />

            {/* Bottom Right Path: Holding Hands */}
            <motion.path 
              d="M 485 355 C 525 355, 570 425, 600 425" 
              fill="transparent" 
              stroke="#a855f7" 
              strokeWidth="2.5" 
              strokeLinecap="round"
              filter="url(#glow)"
              variants={pathVariants}
            />

            {/* --- TEXTS --- */}

            {/* Top Left Text */}
            <motion.text
              variants={textVariants}
              x="200"
              y="65"
              textAnchor="middle"
              fill="#ef4444"
              className="font-bold uppercase tracking-widest drop-shadow-md"
              style={{ fontSize: "18px" }}
            >
              <tspan x="200" dy="0">POWER OF</tspan>
              <tspan x="200" dy="24">TOGETHERNESS</tspan>
            </motion.text>

            {/* Top Right Text */}
            <motion.text
              variants={textVariants}
              x="600"
              y="80"
              textAnchor="middle"
              fill="#f59e0b"
              className="font-bold uppercase tracking-widest drop-shadow-md"
              style={{ fontSize: "18px" }}
            >
              <tspan x="600" dy="0">CHILD</tspan>
            </motion.text>

            {/* Bottom Left Text */}
            <motion.text
              variants={textVariants}
              x="200"
              y="460"
              textAnchor="middle"
              fill="#3b82f6"
              className="font-bold uppercase tracking-widest drop-shadow-md"
              style={{ fontSize: "18px" }}
            >
              <tspan x="200" dy="0">HEART SHAPED</tspan>
              <tspan x="200" dy="24">LOOP</tspan>
            </motion.text>

            {/* Bottom Right Text */}
            <motion.text
              variants={textVariants}
              x="600"
              y="460"
              textAnchor="middle"
              fill="#a855f7"
              className="font-bold uppercase tracking-widest drop-shadow-md"
              style={{ fontSize: "18px" }}
            >
              <tspan x="600" dy="0">HOLDING</tspan>
              <tspan x="600" dy="24">HANDS</tspan>
            </motion.text>

          </svg>
        </motion.div>
      </div>
    </section>
  );
};
