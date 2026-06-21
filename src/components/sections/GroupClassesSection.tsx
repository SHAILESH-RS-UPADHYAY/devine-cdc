"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { WELLNESS_WEDNESDAY_CLASSES, TOP_WELLNESS_CLASSES } from "@/lib/constants";
import { ArrowLeft, Calendar, ChevronRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export function GroupClassesSection() {
  const [selectedId, setSelectedId] = useState<string | null>(null);

  const selectedClass = WELLNESS_WEDNESDAY_CLASSES.find(c => c.id === selectedId);
  const displayedClasses = WELLNESS_WEDNESDAY_CLASSES.filter(c => TOP_WELLNESS_CLASSES.includes(c.id));

  return (
    <section className="py-24 bg-gradient-to-b from-white to-gray-50 relative overflow-hidden" id="wellness-wednesday">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <div className="inline-flex items-center justify-center gap-2 px-4 py-2 bg-devine-peach/10 rounded-full text-devine-peach font-semibold text-sm mb-6">
            <span className="w-2 h-2 rounded-full bg-devine-orange"></span>
            Extra Group Classes
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-heading font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-devine-purple to-devine-peach mb-6 pb-2">
            Wellness Wednesday
          </h2>
          <p className="text-lg text-gray-600">
            Specialized therapeutic activities every Wednesday designed to build social skills, creativity, and confidence in a fun environment.
          </p>
        </motion.div>

        <div className="max-w-5xl mx-auto min-h-[400px]">
          <AnimatePresence mode="wait">
            {!selectedId ? (
              <motion.div
                key="list"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
                className="flex flex-col items-center"
              >
                <div className="grid sm:grid-cols-2 lg:grid-cols-2 gap-4 w-full">
                  {displayedClasses.map((cls, index) => (
                    <motion.button
                      key={cls.id}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.05 }}
                      onClick={() => setSelectedId(cls.id)}
                      className="flex items-center p-4 bg-white rounded-2xl border border-gray-100 hover:border-gray-200 hover:shadow-lg transition-all text-left group overflow-hidden relative"
                    >
                      <div 
                        className="absolute left-0 top-0 bottom-0 w-1.5 transition-all duration-300 group-hover:w-2"
                        style={{ backgroundColor: cls.color }}
                      />
                      <div className="w-12 h-12 rounded-full flex items-center justify-center mr-4 shrink-0 transition-transform group-hover:scale-110 ml-2" style={{ backgroundColor: `${cls.color}15`, color: cls.color }}>
                        <Calendar size={20} />
                      </div>
                      <div className="flex-1 min-w-0 pr-4">
                        <p className="text-xs font-semibold uppercase tracking-wider mb-1" style={{ color: cls.color }}>{cls.date}</p>
                        <h3 className="text-lg font-bold text-gray-900 truncate">{cls.title}</h3>
                      </div>
                      <div className="w-8 h-8 rounded-full flex items-center justify-center bg-gray-50 text-gray-400 group-hover:bg-gray-100 group-hover:text-gray-900 transition-colors shrink-0">
                        <ChevronRight size={18} />
                      </div>
                    </motion.button>
                  ))}
                </div>
                
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                  className="mt-12"
                >
                  <Link href="/wellness-wednesday" className="inline-flex items-center justify-center px-8 py-4 text-lg font-bold text-white bg-gradient-to-r from-devine-purple to-devine-peach rounded-full hover:shadow-xl hover:scale-105 transition-all duration-300">
                    View All Activities
                    <ChevronRight className="ml-2" size={20} />
                  </Link>
                </motion.div>
              </motion.div>
            ) : selectedClass ? (
              <motion.div
                key="detail"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 20 }}
                transition={{ duration: 0.3 }}
                className="bg-white rounded-[2rem] border border-gray-100 shadow-xl overflow-hidden flex flex-col"
              >
                <div className="p-4 sm:p-6 border-b border-gray-100 flex flex-col sm:flex-row items-start sm:items-center justify-between bg-gray-50/50 gap-4">
                  <button 
                    onClick={() => setSelectedId(null)}
                    className="flex items-center text-sm font-semibold text-gray-600 hover:text-gray-900 transition-colors bg-white hover:bg-gray-50 px-4 py-2 rounded-full border border-gray-200 shadow-sm"
                  >
                    <ArrowLeft size={16} className="mr-2" /> Back to Schedule
                  </button>
                  <div className="px-4 py-1.5 rounded-full text-sm font-bold text-white shadow-sm self-start sm:self-auto" style={{ backgroundColor: selectedClass.color }}>
                    {selectedClass.date}
                  </div>
                </div>
                
                <div className="flex flex-col md:flex-row flex-1">
                  <div className="md:w-1/2 relative min-h-[250px] md:min-h-[400px] bg-gray-100">
                    <Image
                      src={selectedClass.image}
                      alt={selectedClass.title}
                      fill
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent md:hidden" />
                    <h3 className="absolute bottom-6 left-6 right-6 text-2xl font-bold text-white md:hidden drop-shadow-md">
                      {selectedClass.title}
                    </h3>
                  </div>
                  
                  <div className="md:w-1/2 p-6 sm:p-8 md:p-10 flex flex-col justify-center bg-white relative">
                    <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-gray-50 to-transparent rounded-bl-full opacity-50" />
                    <h3 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6 hidden md:block">
                      {selectedClass.title}
                    </h3>
                    <div className="prose prose-gray prose-lg max-w-none">
                      <p className="text-gray-600 leading-relaxed whitespace-pre-wrap">
                        {selectedClass.description}
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ) : null}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
