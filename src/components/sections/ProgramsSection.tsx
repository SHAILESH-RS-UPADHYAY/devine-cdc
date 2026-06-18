"use client";

import { motion } from "framer-motion";
import { CONDITIONS, GROUP_CLASSES } from "@/lib/constants";
import { Puzzle, Zap, MessageSquare, Music, Palette, Heart } from "lucide-react";

const iconMap: Record<string, React.ElementType> = {
  Puzzle,
  Zap,
  MessageSquare,
  Music,
  Palette,
  Heart,
};

export function ProgramsSection() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <section id="programs" className="py-24 bg-transparent relative overflow-hidden">
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        
        {/* Conditions We Treat Section */}
        <div className="mb-20">
          <div className="max-w-3xl mb-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-sm font-bold tracking-widest text-devine-orange uppercase mb-3">Conditions We Treat</h2>
              <h3 className="font-heading text-4xl md:text-5xl font-extrabold text-gray-900 mb-6">
                Specialized support for every need.
              </h3>
            </motion.div>
          </div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="grid grid-cols-1 md:grid-cols-3 gap-6"
          >
            {CONDITIONS.map((condition) => {
              const Icon = iconMap[condition.icon];
              return (
                <motion.div
                  key={condition.id}
                  variants={itemVariants}
                  className="bg-gray-50 rounded-3xl p-8 border border-gray-100 hover:border-devine-orange/30 hover:shadow-lg transition-all duration-300"
                >
                  <div className="w-12 h-12 rounded-xl bg-devine-orange/10 text-devine-orange flex items-center justify-center mb-6">
                    {Icon && <Icon className="w-6 h-6" />}
                  </div>
                  <h4 className="font-heading font-bold text-2xl text-gray-900 mb-3">
                    {condition.title}
                  </h4>
                  <p className="text-gray-600 leading-relaxed">
                    {condition.description}
                  </p>
                </motion.div>
              );
            })}
          </motion.div>
        </div>

        {/* Group Classes Section */}
        <div>
          <div className="max-w-3xl mb-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-sm font-bold tracking-widest text-devine-peach uppercase mb-3">Holistic Development</h2>
              <h3 className="font-heading text-4xl md:text-5xl font-extrabold text-gray-900 mb-6">
                Enriching group classes.
              </h3>
            </motion.div>
          </div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="grid grid-cols-1 md:grid-cols-3 gap-6"
          >
            {GROUP_CLASSES.map((cls) => {
              const Icon = iconMap[cls.icon];
              return (
                <motion.div
                  key={cls.id}
                  variants={itemVariants}
                  className="bg-white rounded-3xl p-8 shadow-[0_4px_20px_rgba(0,0,0,0.05)] border border-gray-50 hover:-translate-y-1 transition-all duration-300"
                  style={{ borderBottom: `4px solid ${cls.color}` }}
                >
                  <div 
                    className="w-12 h-12 rounded-full flex items-center justify-center mb-6"
                    style={{ backgroundColor: `${cls.color}15`, color: cls.color }}
                  >
                    {Icon && <Icon className="w-6 h-6" />}
                  </div>
                  <h4 className="font-heading font-bold text-xl text-gray-900 mb-3">
                    {cls.title}
                  </h4>
                  <p className="text-gray-600 leading-relaxed">
                    {cls.description}
                  </p>
                </motion.div>
              );
            })}
          </motion.div>
        </div>

      </div>
    </section>
  );
}
