"use client";

import { motion } from "framer-motion";
import { CalendarDays, Clock, ArrowRight, Sparkles, Tag } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { WHATSAPP_URL } from "@/lib/constants";

export function OfferBanner() {
  return (
    <section className="pt-10 pb-10 mt-[88px] md:mt-[100px] mx-4 md:mx-8 mb-8 rounded-[2.5rem] relative overflow-hidden bg-slate-900 shadow-2xl">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-devine-purple via-devine-purple-dark to-devine-pink/80">
        <div className="absolute inset-0 opacity-15" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '32px 32px' }}></div>
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="bg-white/95 backdrop-blur-xl border border-white/30 rounded-[2rem] p-8 md:p-12 shadow-[0_20px_50px_rgba(0,0,0,0.3)] flex flex-col md:flex-row items-center justify-between gap-8">
          
          <div className="text-slate-900 space-y-5 max-w-2xl">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 px-4 py-1.5 bg-devine-purple/10 text-devine-purple rounded-full text-sm font-bold tracking-wide border border-devine-purple/20"
            >
              <span className="w-2 h-2 rounded-full bg-devine-pink animate-pulse"></span>
              Special Event
            </motion.div>
            
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-3xl md:text-5xl font-heading font-extrabold leading-tight tracking-tight text-slate-900"
            >
              Special Discounts on Packages
            </motion.h2>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-slate-600 text-lg md:text-xl font-medium"
            >
              Discover the right path for your child&apos;s development with our expert team of therapists.
            </motion.p>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="flex flex-col sm:flex-row gap-4 pt-2"
            >
              <div className="flex items-center gap-3 bg-devine-purple/5 border border-devine-purple/10 px-5 py-3 rounded-2xl">
                <CalendarDays className="w-6 h-6 text-devine-purple" />
                <span className="font-bold text-slate-800">22nd June 2026</span>
              </div>
              <div className="flex items-center gap-3 bg-devine-purple/5 border border-devine-purple/10 px-5 py-3 rounded-2xl">
                <Clock className="w-6 h-6 text-devine-purple" />
                <span className="font-bold text-slate-800">9:00 AM - 6:00 PM</span>
              </div>
            </motion.div>
          </div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="w-full md:w-auto flex flex-col items-center gap-5"
          >
            {/* Limited Slots Badge */}
            <div className="flex items-center gap-2 px-5 py-2.5 bg-devine-pink/10 border border-devine-pink/20 rounded-full">
              <Sparkles className="w-4 h-4 text-devine-pink animate-pulse" />
              <span className="text-sm font-bold text-devine-purple">Limited Slots Available</span>
            </div>

            {/* CTA Button */}
            <Button size="lg" className="w-full bg-devine-purple hover:bg-devine-purple-dark text-white text-lg font-bold h-16 px-12 rounded-full shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group" asChild>
              <Link href={WHATSAPP_URL} target="_blank">
                Book Your Slot 
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>

            {/* Discounts Tag */}
            <div className="flex items-center gap-2 text-sm font-semibold text-devine-purple">
              <Tag className="w-4 h-4" />
              <span>Special discounts on packages</span>
            </div>
          </motion.div>
          
        </div>
      </div>
    </section>
  );
}
