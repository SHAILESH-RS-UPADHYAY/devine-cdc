"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { WELLNESS_WEDNESDAY_CLASSES } from "@/lib/constants";
import { ArrowLeft, Calendar, ChevronRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";

export default function WellnessWednesdayPage() {
  const [selectedId, setSelectedId] = useState<string | null>(null);

  const selectedClass = WELLNESS_WEDNESDAY_CLASSES.find(c => c.id === selectedId);

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Navbar />
      
      <main className="flex-1 pt-24 pb-20">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-12"
          >
            <Link 
              href="/"
              className="inline-flex items-center text-sm font-semibold text-gray-600 hover:text-devine-purple transition-colors mb-6 bg-white px-4 py-2 rounded-full border border-gray-200 shadow-sm"
            >
              <ArrowLeft size={16} className="mr-2" /> Back to Home
            </Link>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-devine-purple to-devine-peach mb-6 pb-2">
              Wellness Wednesday Activities
            </h1>
            <p className="text-lg text-gray-600 max-w-3xl">
              Specialized therapeutic activities every Wednesday designed to build social skills, creativity, and confidence in a fun, engaging environment. Browse our complete schedule of 12 amazing activities.
            </p>
          </motion.div>

          <div className="min-h-[500px]">
            <AnimatePresence mode="wait">
              {!selectedId ? (
                <motion.div
                  key="grid"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.3 }}
                  className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
                >
                  {WELLNESS_WEDNESDAY_CLASSES.map((cls, index) => (
                    <motion.button
                      key={cls.id}
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: index * 0.05 }}
                      onClick={() => setSelectedId(cls.id)}
                      className="flex flex-col bg-white rounded-3xl border border-gray-100 hover:border-gray-200 hover:shadow-xl transition-all text-left overflow-hidden group"
                    >
                      <div className="relative w-full h-48 bg-gray-100 overflow-hidden">
                        <Image
                          src={cls.image}
                          alt={cls.title}
                          fill
                          className="object-cover transition-transform duration-500 group-hover:scale-110"
                        />
                        <div className="absolute top-4 right-4 px-3 py-1 bg-white/90 backdrop-blur-sm rounded-full text-xs font-bold shadow-sm" style={{ color: cls.color }}>
                          {cls.date}
                        </div>
                      </div>
                      <div className="p-6 relative flex-1 flex flex-col">
                        <div 
                          className="absolute left-0 top-0 w-full h-1 transition-all duration-300 group-hover:h-1.5"
                          style={{ backgroundColor: cls.color }}
                        />
                        <h3 className="text-xl font-bold text-gray-900 mb-2">{cls.title}</h3>
                        <p className="text-sm text-gray-500 line-clamp-3 mb-6 flex-1">
                          {cls.description}
                        </p>
                        <div className="flex items-center text-sm font-semibold transition-colors mt-auto" style={{ color: cls.color }}>
                          View Details <ChevronRight size={16} className="ml-1 group-hover:translate-x-1 transition-transform" />
                        </div>
                      </div>
                    </motion.button>
                  ))}
                </motion.div>
              ) : selectedClass ? (
                <motion.div
                  key="detail"
                  initial={{ opacity: 0, scale: 0.98 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.98 }}
                  transition={{ duration: 0.3 }}
                  className="bg-white rounded-[2rem] border border-gray-100 shadow-xl overflow-hidden flex flex-col max-w-5xl mx-auto"
                >
                  <div className="p-4 sm:p-6 border-b border-gray-100 flex flex-col sm:flex-row items-start sm:items-center justify-between bg-gray-50/50 gap-4">
                    <button 
                      onClick={() => setSelectedId(null)}
                      className="flex items-center text-sm font-semibold text-gray-600 hover:text-gray-900 transition-colors bg-white hover:bg-gray-50 px-4 py-2 rounded-full border border-gray-200 shadow-sm"
                    >
                      <ArrowLeft size={16} className="mr-2" /> Back to All Activities
                    </button>
                    <div className="px-4 py-1.5 rounded-full text-sm font-bold text-white shadow-sm flex items-center self-start sm:self-auto" style={{ backgroundColor: selectedClass.color }}>
                      <Calendar size={16} className="mr-2" />
                      {selectedClass.date}
                    </div>
                  </div>
                  
                  <div className="flex flex-col md:flex-row">
                    <div className="md:w-1/2 relative min-h-[300px] md:min-h-[500px] bg-gray-100">
                      <Image
                        src={selectedClass.image}
                        alt={selectedClass.title}
                        fill
                        className="object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent md:hidden" />
                      <h2 className="absolute bottom-6 left-6 right-6 text-3xl font-bold text-white md:hidden drop-shadow-md">
                        {selectedClass.title}
                      </h2>
                    </div>
                    
                    <div className="md:w-1/2 p-6 sm:p-8 md:p-12 flex flex-col justify-center bg-white relative">
                      <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-gray-50 to-transparent rounded-bl-full opacity-50" />
                      <h2 className="text-3xl lg:text-4xl xl:text-5xl font-bold text-gray-900 mb-6 hidden md:block">
                        {selectedClass.title}
                      </h2>
                      <div className="prose prose-gray prose-lg max-w-none">
                        <p className="text-gray-600 leading-relaxed whitespace-pre-wrap text-lg">
                          {selectedClass.description}
                        </p>
                      </div>
                      
                      <div className="mt-12">
                        <button className="px-8 py-4 text-white font-bold rounded-full hover:shadow-lg transition-all hover:opacity-90 active:scale-95" style={{ backgroundColor: selectedClass.color }}>
                          Express Interest
                        </button>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ) : null}
            </AnimatePresence>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
}
