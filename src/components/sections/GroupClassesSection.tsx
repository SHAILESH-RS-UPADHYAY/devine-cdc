"use client";

import { motion } from "framer-motion";
import { GROUP_CLASSES } from "@/lib/constants";
import { ArrowRight, Music, Palette, Heart } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

const iconMap: Record<string, React.ReactNode> = {
  Music: <Music size={24} />,
  Palette: <Palette size={24} />,
  Heart: <Heart size={24} />,
};

export function GroupClassesSection() {
  return (
    <section className="py-24 bg-white relative overflow-hidden" id="group-classes">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6 }}
          className="flex flex-col lg:flex-row items-end justify-between mb-16 gap-6"
        >
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-devine-peach/10 rounded-full text-devine-peach font-semibold text-sm mb-6">
              <span className="w-2 h-2 rounded-full bg-devine-orange"></span>
              Holistic Development
            </div>
            <h2 className="text-4xl md:text-5xl font-heading font-extrabold text-gray-900 mb-4">
              Extra Group Classes
            </h2>
            <p className="text-lg text-gray-600">
              Engaging, fun, and therapeutic group activities designed to build social skills, creativity, and confidence.
            </p>
          </div>
          <Button asChild variant="outline" className="rounded-full border-gray-200 hover:bg-gray-50 text-gray-700">
            <Link href="/programs" target="_blank">
              View All Programs <ArrowRight size={18} className="ml-2" />
            </Link>
          </Button>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {GROUP_CLASSES.map((cls, index) => (
            <motion.div
              key={cls.id}
              initial={{ opacity: 0, y: 30, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: index * 0.15, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              className="bg-gray-50 rounded-[2rem] p-8 hover:bg-white hover:shadow-2xl transition-all duration-500 group border border-gray-100 relative overflow-hidden flex flex-col"
            >
              {/* Bottom Edge Glow */}
              <motion.div 
                className="absolute bottom-0 left-0 right-0 h-[8px] z-10"
                style={{ backgroundColor: cls.color }}
                animate={{
                  boxShadow: [
                    `0px 0px 15px 2px ${cls.color}80`,
                    `0px -6px 30px 8px ${cls.color}`,
                    `0px 0px 15px 2px ${cls.color}80`,
                  ],
                }}
                transition={{
                  duration: 2.5,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: index * 0.3
                }}
              />

              <div 
                className="w-16 h-16 rounded-2xl flex items-center justify-center mb-6 text-white shadow-lg transform group-hover:-translate-y-2 transition-transform duration-300 relative z-20"
                style={{ backgroundColor: cls.color }}
              >
                {iconMap[cls.icon]}
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4 relative z-20">{cls.title}</h3>
              <p className="text-gray-600 leading-relaxed mb-6 relative z-20">
                {cls.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
