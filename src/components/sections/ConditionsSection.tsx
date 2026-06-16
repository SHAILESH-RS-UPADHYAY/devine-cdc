"use client";

import { motion } from "framer-motion";
import { CONDITIONS } from "@/lib/constants";
import { ArrowRight, Puzzle, Zap, MessageSquare } from "lucide-react";
import Link from "next/link";

const iconMap: Record<string, React.ReactNode> = {
  Puzzle: <Puzzle size={24} />,
  Zap: <Zap size={24} />,
  MessageSquare: <MessageSquare size={24} />,
};

const cardColors = [
  { gradient: "from-devine-purple/5 to-devine-pink/5", glow: "rgba(155, 89, 182, 0.15)", border: "#9B59B640" },
  { gradient: "from-devine-blue/5 to-devine-purple/5", glow: "rgba(91, 140, 197, 0.15)", border: "#5B8CC540" },
  { gradient: "from-devine-pink/5 to-devine-coral/5", glow: "rgba(212, 160, 212, 0.15)", border: "#D4A0D440" },
];

export function ConditionsSection() {
  return (
    <section className="py-24 bg-gray-50 relative overflow-hidden" id="conditions">
      {/* Floating decorative elements */}
      <motion.div
        animate={{ y: [0, -20, 0], rotate: [0, 5, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-20 right-10 w-32 h-32 rounded-full bg-devine-purple/5 blur-xl pointer-events-none"
      />
      <motion.div
        animate={{ y: [0, 15, 0], rotate: [0, -3, 0] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        className="absolute bottom-20 left-10 w-24 h-24 rounded-full bg-devine-pink/5 blur-xl pointer-events-none"
      />

      <div className="container mx-auto px-4 md:px-6">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-devine-purple/5 rounded-full text-devine-purple font-semibold text-sm mb-6">
            <span className="w-2 h-2 rounded-full bg-devine-pink"></span>
            Conditions We Treat
          </div>
          <h2 className="text-4xl md:text-5xl font-heading font-extrabold text-gray-900 mb-6">
            Support for Every Step of the Journey
          </h2>
          <p className="text-lg text-gray-600">
            We provide evidence-based therapies tailored to your child&apos;s unique needs and developmental profile.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {CONDITIONS.map((condition, index) => (
            <motion.div
              key={condition.id}
              initial={{ opacity: 0, y: 40, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: index * 0.15, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              whileHover={{ y: -10, transition: { duration: 0.3 } }}
              className={`bg-white rounded-3xl p-8 shadow-sm hover:shadow-2xl transition-all duration-500 border border-gray-100 group relative overflow-hidden flex flex-col`}
            >
              {/* Gradient background on hover */}
              <div 
                className={`absolute inset-0 bg-gradient-to-br ${cardColors[index].gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl`} 
              />

              {/* Glowing border on hover */}
              <div 
                className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                style={{ 
                  boxShadow: `inset 0 0 0 2px ${cardColors[index].border}, 0 0 40px ${cardColors[index].glow}` 
                }}
              />

              <div className="relative z-10">
                <div className="w-14 h-14 rounded-2xl bg-devine-purple/5 flex items-center justify-center text-devine-purple mb-6 group-hover:scale-110 group-hover:bg-devine-purple/10 transition-all duration-300">
                  {iconMap[condition.icon]}
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{condition.title}</h3>
                <p className="text-gray-600 mb-8 flex-grow leading-relaxed">
                  {condition.description}
                </p>
                <Link href={condition.href} className="inline-flex items-center font-bold text-devine-purple group-hover:text-devine-pink transition-colors">
                  Learn more <ArrowRight size={18} className="ml-2 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
