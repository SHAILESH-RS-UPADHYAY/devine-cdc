"use client";

import { motion } from "framer-motion";
import { THERAPIES } from "@/lib/constants";
import Link from "next/link";
import { ArrowRight, Brain, Hand, MessageCircle, BookOpen, HeartHandshake } from "lucide-react";
import { Button } from "@/components/ui/button";
import { AnimatedSectionHeader } from "@/components/ui/AnimatedSectionHeader";

const iconMap: Record<string, React.ElementType> = {
  Brain: Brain,
  Hand: Hand,
  MessageCircle: MessageCircle,
  BookOpen: BookOpen,
  HeartHandshake: HeartHandshake,
};

export function ServicesPreview() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants: import("framer-motion").Variants = {
    hidden: { opacity: 0, y: 40, scale: 0.95 },
    visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } },
  };

  return (
    <section className="py-24 bg-transparent relative overflow-hidden">
      {/* Subtle Background Pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px] opacity-30 pointer-events-none" />
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <AnimatedSectionHeader 
          title="Therapies We Provide"
          subtitle="Personalized care for your child's unique journey."
          description="We offer comprehensive, evidence-based therapies designed to unlock every child's potential in a safe, nurturing environment."
          align="center"
        />

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          {THERAPIES.map((therapy, index) => {
            const isLastOdd = index === THERAPIES.length - 1 && THERAPIES.length % 2 !== 0;
            const Icon = iconMap[therapy.icon];
            return (
              <motion.div
                key={therapy.id}
                variants={itemVariants}
                whileHover={{ y: -8, transition: { duration: 0.3 } }}
                whileTap={{ scale: 0.98 }}
                className={`group relative bg-white/90 rounded-3xl p-8 transition-all duration-500 overflow-hidden ${
                  isLastOdd ? "md:col-span-2 md:w-1/2 md:justify-self-center md:mx-auto" : ""
                }`}
                style={{
                  boxShadow: `0 10px 40px -10px ${therapy.color}50, inset 0 0 0 1px ${therapy.color}40, inset 0 0 20px ${therapy.color}15`,
                  borderBottom: `4px solid ${therapy.color}`
                }}
              >
                {/* Animated gradient border glow on hover */}
                <div 
                  className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                  style={{ 
                    background: `linear-gradient(135deg, ${therapy.color}20, transparent 50%, ${therapy.color}30)`,
                    boxShadow: `inset 0 0 0 2px ${therapy.color}50, 0 0 30px ${therapy.color}20, 0 20px 60px ${therapy.color}15`
                  }}
                />

                {/* Decorative blob always visible but enhances on hover */}
                <div 
                  className="absolute -right-20 -top-20 w-48 h-48 rounded-full opacity-10 group-hover:opacity-20 transition-opacity duration-500 blur-2xl"
                  style={{ backgroundColor: therapy.color }}
                />

                <div className="relative z-10">
                  <div 
                    className="inline-flex items-center justify-center rounded-2xl mb-6 transition-all duration-300 group-hover:scale-110 group-hover:shadow-lg w-14 h-14"
                    style={{ backgroundColor: `${therapy.color}15`, color: therapy.color, boxShadow: `0 4px 20px ${therapy.color}30` }}
                    aria-hidden="true"
                  >
                    {Icon && <Icon className="w-7 h-7" />}
                  </div>

                  <h4 className="font-heading font-bold text-gray-900 mb-3 text-2xl">
                    {therapy.title}
                  </h4>
                  
                  <p className="text-gray-600 mb-8 leading-relaxed text-lg">
                    {therapy.shortDescription}
                  </p>

                  <div className="mt-auto pt-2">
                    <Link href={therapy.href} className="inline-flex items-center text-base font-bold group/link" aria-label={`Learn more about ${therapy.title}`}>
                      <span style={{ color: therapy.color }}>Learn more</span>
                      <ArrowRight 
                        size={18} 
                        className="ml-2 transition-transform duration-300 group-hover/link:translate-x-2" 
                        style={{ color: therapy.color }}
                        aria-hidden="true"
                      />
                    </Link>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="mt-16 text-center"
        >
          <Link href="/programs" target="_blank">
            <Button variant="outline" size="lg" className="rounded-full px-8 py-6 text-lg border-gray-200 hover:border-devine-orange hover:text-devine-orange hover:bg-devine-orange/5 transition-colors">
              View All Programs
            </Button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
