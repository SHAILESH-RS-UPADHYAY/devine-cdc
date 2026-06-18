"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Phone, CalendarCheck, ShieldCheck, HeartPulse, Star } from "lucide-react";
import { CONTACT, WHATSAPP_URL } from "@/lib/constants";
import Link from "next/link";
import Image from "next/image";

export function HeroSection() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants: import("framer-motion").Variants = {
    hidden: { opacity: 0, y: 25 },
    visible: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 40, damping: 15 } },
  };

  return (
    <section className="relative min-h-[95vh] flex items-center pt-28 pb-16 overflow-hidden bg-transparent">
      {/* Premium Aurora Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[50vw] h-[50vw] rounded-full bg-devine-orange/10 blur-[120px] mix-blend-multiply opacity-70 animate-pulse-slow"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-[60vw] h-[60vw] rounded-full bg-devine-peach/10 blur-[150px] mix-blend-multiply opacity-60"></div>
        <div className="absolute top-[20%] right-[10%] w-[30vw] h-[30vw] rounded-full bg-devine-blue/10 blur-[100px] mix-blend-multiply opacity-50"></div>
        
        {/* Subtle grid texture overlay for depth */}
        <div className="absolute inset-0 bg-[url('/images/noise.png')] opacity-[0.015] mix-blend-overlay"></div>
        <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'linear-gradient(rgba(0,0,0,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(0,0,0,0.1) 1px, transparent 1px)', backgroundSize: '40px 40px' }}></div>
      </div>

      <div className="container mx-auto px-4 md:px-6 z-10 relative">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          
          {/* Text Content */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="flex flex-col items-start text-left max-w-2xl relative z-20"
          >
            {/* Status Badge */}
            <motion.div variants={itemVariants} className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-white shadow-[0_4px_15px_rgba(0,0,0,0.04)] border border-slate-100 mb-8 hover:shadow-[0_4px_20px_rgba(0,0,0,0.08)] transition-shadow cursor-default">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-green-500"></span>
              </span>
              <span className="text-[11px] sm:text-xs font-bold tracking-wider text-slate-600 uppercase">Accepting New Enrollments</span>
            </motion.div>

            {/* Headline */}
            <motion.h1 variants={itemVariants} className="font-heading font-black text-4xl sm:text-5xl md:text-6xl lg:text-[4.5rem] xl:text-[5.5rem] leading-[1.05] sm:leading-[1.1] text-slate-900 mb-6 tracking-[-0.03em]">
              Unlock Your Child&apos;s <br />
              <span className="relative inline-block mt-2">
                <span className="absolute -inset-1 bg-gradient-to-r from-devine-orange/20 to-devine-peach/20 blur-xl rounded-lg"></span>
                <span className="relative text-transparent bg-clip-text bg-gradient-to-r from-devine-orange via-devine-orange-dark to-devine-peach">Infinite Potential</span>
              </span>
            </motion.h1>

            {/* Subheadline */}
            <motion.p variants={itemVariants} className="text-lg sm:text-xl text-slate-600 mb-10 leading-relaxed max-w-xl font-medium">
              Expert Pediatric Therapy in Gurgaon. We provide compassionate, evidence-based care in <span className="text-slate-800 font-semibold">Speech Therapy</span>, <span className="text-slate-800 font-semibold">Occupational Therapy</span>, and <span className="text-slate-800 font-semibold">Special Education</span>.
            </motion.p>

            {/* CTA Group */}
            <motion.div variants={itemVariants} className="flex flex-col sm:flex-row flex-wrap gap-4 w-full sm:w-auto">
              <Button size="lg" className="text-base sm:text-lg px-8 py-7 h-auto gap-3 group w-full sm:w-auto bg-slate-900 text-white hover:bg-devine-orange rounded-2xl shadow-[0_8px_30px_rgba(0,0,0,0.12)] hover:shadow-[0_12px_40px_rgba(232,119,58,0.3)] transition-all duration-300" asChild>
                <Link href="/#book-appointment" onClick={(e) => {
                  if (window.location.pathname === "/") {
                    e.preventDefault();
                    const element = document.getElementById("book-appointment");
                    if (element) {
                      const y = element.getBoundingClientRect().top + window.scrollY - 100;
                      window.scrollTo({ top: y, behavior: 'smooth' });
                      window.history.pushState(null, '', '/#book-appointment');
                    }
                  }
                }}>
                  <CalendarCheck className="w-5 h-5 group-hover:scale-110 transition-transform" aria-hidden="true" />
                  Book Assessment
                </Link>
              </Button>
              <Link href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto" aria-label="Book a free consultation via WhatsApp">
                <Button variant="outline" size="lg" className="text-base sm:text-lg px-8 py-7 h-auto gap-3 w-full sm:w-auto rounded-2xl bg-white/70 backdrop-blur-md border-slate-200 text-slate-700 hover:text-slate-900 hover:bg-white shadow-[0_4px_15px_rgba(0,0,0,0.02)] hover:shadow-[0_8px_25px_rgba(0,0,0,0.06)] transition-all duration-300 group">
                  <Phone className="w-5 h-5 text-devine-orange group-hover:rotate-12 transition-transform" aria-hidden="true" />
                  Free Consultation
                </Button>
              </Link>
            </motion.div>

            {/* Social Proof Mini */}
            <motion.div variants={itemVariants} whileTap={{ scale: 0.97 }} className="mt-12 flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-6 cursor-pointer">
              <div className="flex -space-x-3">
                {[1, 2, 3, 4].map((i) => (
                  <div key={i} className="w-11 h-11 rounded-full border-[3px] border-[#FAFAFC] shadow-sm overflow-hidden relative z-10">
                    <Image src={`https://i.pravatar.cc/150?img=${i + 10}`} alt={`Parent review ${i}`} width={44} height={44} className="w-full h-full object-cover" />
                  </div>
                ))}
                <div className="w-11 h-11 rounded-full border-[3px] border-[#FAFAFC] shadow-sm bg-slate-100 flex items-center justify-center relative z-0">
                  <span className="text-xs font-bold text-slate-600">+</span>
                </div>
              </div>
              <div className="flex flex-col">
                <div className="flex items-center gap-1 text-[#F59E0B] mb-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} fill="currentColor" size={16} />
                  ))}
                </div>
                <span className="text-sm font-semibold text-slate-600">Trusted by 100+ Families</span>
              </div>
            </motion.div>
          </motion.div>

          {/* Visual/Image Side */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.4, type: "spring", stiffness: 30 }}
            className="relative lg:h-[650px] w-full flex items-center justify-center lg:justify-end"
          >
            {/* Main Image Container */}
            <div className="relative w-full max-w-[500px] lg:max-w-none lg:w-[110%] aspect-square lg:aspect-[4/5] rounded-[2.5rem] overflow-hidden shadow-[0_20px_60px_rgba(0,0,0,0.1)] border border-white/60 bg-white/40 backdrop-blur-3xl group">
              <div className="absolute inset-2 rounded-[2rem] overflow-hidden bg-slate-100">
                <Image 
                  src="/images/children_sensory_play.png" 
                  alt="Happy child engaging in sensory play during therapy"
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  priority
                  quality={90}
                />
                {/* Elegant overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 via-transparent to-transparent opacity-80" />
              </div>
            </div>

            {/* Floating Trust Badge 1 */}
            <motion.div 
              animate={{ y: [0, -12, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -left-4 sm:-left-10 top-[15%] bg-white/95 backdrop-blur-xl p-4 sm:p-5 rounded-2xl shadow-[0_15px_40px_rgba(0,0,0,0.08)] border border-slate-100 flex items-center gap-4 z-30"
              aria-hidden="true"
            >
              <div className="w-12 h-12 rounded-full bg-devine-peach/10 flex items-center justify-center text-devine-peach shadow-inner">
                <HeartPulse size={24} aria-hidden="true" />
              </div>
              <div>
                <p className="font-heading font-black text-2xl text-slate-900">5+</p>
                <p className="text-[10px] font-bold text-slate-500 uppercase tracking-widest mt-0.5">Years Experience</p>
              </div>
            </motion.div>

            {/* Floating Trust Badge 2 */}
            <motion.div 
              animate={{ y: [0, 15, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 1.5 }}
              className="absolute -right-2 sm:-right-8 bottom-[10%] bg-white/95 backdrop-blur-xl p-4 sm:p-5 rounded-2xl shadow-[0_15px_40px_rgba(0,0,0,0.08)] border border-slate-100 flex items-center gap-4 z-30"
              aria-hidden="true"
            >
              <div className="w-12 h-12 rounded-full bg-devine-blue/10 flex items-center justify-center text-devine-blue shadow-inner">
                <ShieldCheck size={24} aria-hidden="true" />
              </div>
              <div>
                <p className="font-heading font-black text-xl text-slate-900">Certified</p>
                <p className="text-[10px] font-bold text-slate-500 uppercase tracking-widest mt-0.5">RCI Therapists</p>
              </div>
            </motion.div>

            {/* Decorative Element */}
            <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-[url('/images/dots-pattern.svg')] bg-repeat opacity-20 -z-10"></div>
          </motion.div>
          
        </div>
      </div>
    </section>
  );
}
