"use client";

import { motion } from "framer-motion";
import { CONDITIONS } from "@/lib/constants";
import { ArrowRight, Puzzle, Zap, MessageSquare } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { AnimatedSectionHeader } from "@/components/ui/AnimatedSectionHeader";

const iconMap: Record<string, React.ReactNode> = {
  Puzzle: <Puzzle size={24} />,
  Zap: <Zap size={24} />,
  MessageSquare: <MessageSquare size={24} />,
};

const cardTheme = [
  { 
    border: "rgba(139, 92, 246, 0.6)", // violet
    glow: "rgba(139, 92, 246, 0.35)", 
    gradient: "from-violet-500/10 to-fuchsia-500/10",
    iconBg: "bg-violet-100",
    iconColor: "text-violet-600",
    linkColor: "text-violet-600",
    linkHover: "group-hover:text-violet-700"
  },
  { 
    border: "rgba(16, 185, 129, 0.6)", // emerald
    glow: "rgba(16, 185, 129, 0.35)", 
    gradient: "from-emerald-500/10 to-teal-500/10",
    iconBg: "bg-emerald-100",
    iconColor: "text-emerald-600",
    linkColor: "text-emerald-600",
    linkHover: "group-hover:text-emerald-700"
  },
  { 
    border: "rgba(244, 63, 94, 0.6)", // rose
    glow: "rgba(244, 63, 94, 0.35)", 
    gradient: "from-rose-500/10 to-pink-500/10",
    iconBg: "bg-rose-100",
    iconColor: "text-rose-600",
    linkColor: "text-rose-600",
    linkHover: "group-hover:text-rose-700"
  },
];

export function ConditionsSection() {
  return (
    <section className="py-24 relative overflow-hidden bg-slate-50/30" id="conditions">
      {/* Ambient Glassy Background Elements */}
      <div className="absolute inset-0 bg-white/40 backdrop-blur-3xl pointer-events-none z-0" />
      
      <motion.div
        animate={{ 
          scale: [1, 1.2, 1],
          x: [0, 100, 0],
          y: [0, -50, 0],
        }}
        transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] rounded-full bg-violet-400/30 blur-[120px] pointer-events-none z-0"
      />
      
      <motion.div
        animate={{ 
          scale: [1, 1.5, 1],
          x: [0, -100, 0],
          y: [0, 100, 0],
        }}
        transition={{ duration: 20, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        className="absolute bottom-[-20%] right-[-10%] w-[600px] h-[600px] rounded-full bg-emerald-400/20 blur-[150px] pointer-events-none z-0"
      />

      <motion.div
        animate={{ 
          scale: [1, 1.3, 1],
          opacity: [0.5, 0.8, 0.5],
        }}
        transition={{ duration: 18, repeat: Infinity, ease: "easeInOut", delay: 5 }}
        className="absolute top-[20%] left-[40%] w-[400px] h-[400px] rounded-full bg-rose-400/20 blur-[100px] pointer-events-none z-0"
      />

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <AnimatedSectionHeader 
          title="Conditions We Treat"
          subtitle="Support for Every Step of the Journey"
          description="We provide evidence-based therapies tailored to your child's unique needs and developmental profile."
          align="center"
        />

        <div className="grid md:grid-cols-3 gap-8">
          {CONDITIONS.map((condition, index) => (
            <motion.div
              key={condition.id}
              initial={{ opacity: 0, y: 40, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: index * 0.15, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              whileHover={{ y: -10, transition: { duration: 0.3 } }}
              className="relative group h-full"
            >
              <motion.div
                animate={{ 
                  boxShadow: [
                    `0 0 15px 2px ${cardTheme[index].glow}, inset 0 0 10px 2px ${cardTheme[index].glow}`,
                    `0 0 40px 12px ${cardTheme[index].glow}, inset 0 0 20px 5px ${cardTheme[index].glow}`,
                    `0 0 15px 2px ${cardTheme[index].glow}, inset 0 0 10px 2px ${cardTheme[index].glow}`
                  ]
                }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: index * 0.3 }}
                className="bg-white/70 backdrop-blur-xl rounded-3xl p-8 flex flex-col h-full relative overflow-hidden"
                style={{ border: `1px solid ${cardTheme[index].border}` }}
              >
                {/* Gradient background on hover */}
                <div 
                  className={`absolute inset-0 bg-gradient-to-br ${cardTheme[index].gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl pointer-events-none`} 
                />

                <div className="relative z-10 flex flex-col h-full">
                  <div className={`w-14 h-14 rounded-2xl ${cardTheme[index].iconBg} flex items-center justify-center ${cardTheme[index].iconColor} mb-6 group-hover:scale-110 transition-transform duration-300 shadow-sm`}>
                    {iconMap[condition.icon]}
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">{condition.title}</h3>
                  
                  <div className="relative w-full h-48 mb-6 rounded-2xl overflow-hidden shadow-sm group-hover:shadow-md transition-shadow duration-300">
                    <Image 
                      src={condition.image} 
                      alt={condition.title} 
                      fill 
                      className="object-cover transition-transform duration-700 group-hover:scale-105" 
                      sizes="(max-width: 768px) 100vw, 33vw"
                    />
                  </div>

                  <p className="text-gray-600 mb-8 flex-grow leading-relaxed">
                    {condition.description}
                  </p>
                  <Link href={condition.href} className={`inline-flex items-center font-bold ${cardTheme[index].linkColor} ${cardTheme[index].linkHover} transition-colors mt-auto`}>
                    Learn more <ArrowRight size={18} className="ml-2 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
