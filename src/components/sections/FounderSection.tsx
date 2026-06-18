"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { FOUNDERS } from "@/lib/constants";

export function FounderSection() {
  const founder = FOUNDERS[0]; // Komal Pahuja

  return (
    <section className="pt-16 pb-12 bg-transparent relative overflow-hidden" id="founder">
      {/* Decorative background elements */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-bl from-brand-pink/20 to-transparent rounded-bl-full pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-1/4 h-1/2 bg-gradient-to-tr from-brand-blue/20 to-transparent rounded-tr-full pointer-events-none"></div>
      
      <div className="container mx-auto px-4 md:px-6 relative z-10 py-8">
          <motion.div 
          initial={{ opacity: 0, scale: 0.9, y: 80 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          viewport={{ once: false, amount: 0.15 }}
          transition={{ 
            type: "spring",
            stiffness: 80,
            damping: 12,
            mass: 0.9,
            opacity: { duration: 0.5 }
          }}
          className="flex flex-col lg:flex-row items-center gap-8 lg:gap-16 p-8 md:p-12 lg:p-16 rounded-[3rem] bg-white/40 backdrop-blur-3xl border border-violet-100 shadow-[0_0_60px_rgba(167,139,250,0.25)] w-full max-w-7xl mx-auto glass-card relative group"
        >
          {/* Subtle colorful glow that follows the box */}
          <div className="absolute inset-0 bg-gradient-to-tr from-violet-200/30 via-fuchsia-100/20 to-blue-200/30 opacity-0 group-hover:opacity-100 transition-opacity duration-1000 rounded-[3rem] -z-10 blur-xl"></div>
          
          {/* Founder Image */}
          <div className="w-full lg:w-1/2 flex justify-center lg:justify-end">
            <div className="relative w-full max-w-[380px] lg:max-w-[450px] mx-auto lg:mx-0">
              {/* Decorative Frame */}
              <motion.div 
                animate={{ scale: [1.02, 1.05, 1.02], rotate: [2, 4, 2] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                className="absolute inset-0 bg-gradient-to-tr from-violet-300 via-fuchsia-200 to-sky-300 rounded-[2.5rem] opacity-60 blur-2xl"
              />
              <motion.div 
                animate={{ scale: [1.02, 1.05, 1.02], rotate: [-2, -4, -2] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                className="absolute inset-0 bg-gradient-to-bl from-blue-300 via-violet-200 to-purple-300 rounded-[2.5rem] opacity-60 blur-xl"
              />
              
              <div className="relative bg-white p-3 rounded-[2.5rem] shadow-[0_20px_50px_rgba(0,0,0,0.1)] overflow-hidden group">
                <div className="relative w-full aspect-[1045/1505] rounded-[2rem] overflow-hidden">
                  <Image 
                    src={founder.image} 
                    alt={`Mrs. ${founder.name}`} 
                    fill 
                    className="object-cover object-top transition-transform duration-700 group-hover:scale-105 filter contrast-102 saturate-105"
                    sizes="(max-width: 768px) 400px, 600px"
                    priority
                    quality={90}
                  />
                  {/* Subtle overlay for better contrast */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-40"></div>
                </div>
              </div>

              {/* Experience Badge */}
              <motion.div 
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: false }}
                transition={{ delay: 0.3, type: "spring", bounce: 0.5 }}
                className="absolute -bottom-6 -left-6 bg-white rounded-2xl p-4 shadow-xl border border-gray-100 flex items-center gap-3 z-10"
              >
                <div className="w-12 h-12 bg-brand-yellow/20 rounded-full flex items-center justify-center">
                  <span className="text-brand-purple font-bold text-xl">RCI</span>
                </div>
                <div>
                  <p className="text-xs text-gray-500 font-medium uppercase tracking-wider">Licensed</p>
                  <p className="text-sm font-bold text-gray-900">Professional</p>
                </div>
              </motion.div>
            </div>
          </div>

          {/* Founder Content */}
          <div className="w-full lg:w-1/2 space-y-5 lg:pl-6">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-brand-purple/5 rounded-full text-brand-purple font-semibold text-sm">
              <span className="w-2 h-2 rounded-full bg-brand-pink"></span>
              Meet Our Psychologist
            </div>
            
            <h2 className="text-3xl md:text-5xl font-heading font-extrabold text-gray-900 leading-tight">
              Mrs. {founder.name}
            </h2>
            <p className="text-xl text-brand-purple font-bold">
              {founder.role}
            </p>
            
            <div className="w-16 h-1.5 bg-gradient-to-r from-brand-pink to-brand-yellow rounded-full"></div>
            
            <p className="text-lg text-gray-600 leading-relaxed pt-2">
              {founder.bio}
            </p>

            <div className="flex flex-wrap gap-3 pt-4">
              {founder.credentials.map((cred, idx) => (
                <div 
                  key={idx}
                  className="px-4 py-2 bg-white/90 backdrop-blur-md border border-brand-purple/10 rounded-lg text-sm font-bold text-gray-800 shadow-sm"
                >
                  {cred}
                </div>
              ))}
            </div>
          </div>

        </motion.div>
      </div>
    </section>
  );
}
