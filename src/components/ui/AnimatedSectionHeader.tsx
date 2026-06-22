"use client";

import { motion, type Variants } from "framer-motion";

interface AnimatedSectionHeaderProps {
  title: string;
  subtitle?: string;
  description?: string;
  align?: "left" | "center" | "right";
}

export function AnimatedSectionHeader({ 
  title, 
  subtitle, 
  description,
  align = "center" 
}: AnimatedSectionHeaderProps) {
  
  const words = title.split(" ");

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.1,
      },
    },
  };

  const wordVariants: Variants = {
    hidden: { opacity: 0, y: 40, scale: 0.9 },
    visible: { 
      opacity: 1, 
      y: 0, 
      scale: 1,
      transition: { 
        duration: 0.8, 
        type: "spring",
        bounce: 0.4
      } 
    },
  };

  const fadeUpVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" }
    }
  };

  const alignmentClasses = {
    left: "text-left items-start",
    center: "text-center items-center mx-auto",
    right: "text-right items-end ml-auto"
  };

  return (
    <div className={`flex flex-col mb-16 max-w-3xl ${alignmentClasses[align]}`}>
      {subtitle && (
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={fadeUpVariants}
          className="inline-flex items-center gap-3 mb-6"
        >
          <span className="h-px w-8 bg-devine-orange/50 hidden md:block"></span>
          <h3 className="text-xs md:text-sm font-bold tracking-[0.2em] text-devine-orange uppercase bg-devine-orange/5 px-4 py-1.5 rounded-full border border-devine-orange/10">
            {subtitle}
          </h3>
          <span className="h-px w-8 bg-devine-orange/50 hidden md:block"></span>
        </motion.div>
      )}
      
      <motion.h2 
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
        className="text-4xl md:text-5xl lg:text-6xl font-heading font-extrabold text-gray-900 mb-6 flex flex-wrap gap-x-3 gap-y-2 justify-center"
      >
        {words.map((word, index) => (
          <motion.span key={index} variants={wordVariants} className="inline-block">
            {word}
          </motion.span>
        ))}
      </motion.h2>

      {description && (
        <motion.p 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={fadeUpVariants}
          transition={{ delay: 0.4 }}
          className="text-lg md:text-xl text-gray-600 leading-relaxed max-w-2xl"
        >
          {description}
        </motion.p>
      )}
    </div>
  );
}
