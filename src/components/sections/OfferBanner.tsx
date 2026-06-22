"use client";

import { motion } from "framer-motion";
import { Calendar, Clock, Sparkles, ArrowRight, Tag } from "lucide-react";
import Link from "next/link";
import { useEffect, useState, useMemo } from "react";
import { WHATSAPP_URL, CONTACT } from "@/lib/constants";

export const OfferBanner = () => {
  const [now, setNow] = useState<number>(0);

  useEffect(() => {
    const tick = () => setNow(Date.now());
    tick();
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, []);

  const { phase, target, label } = useMemo(() => {
    const fmt = new Intl.DateTimeFormat("en-CA", {
      timeZone: "Asia/Kolkata",
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
    });
    const p = fmt.formatToParts(new Date());
    const today = `${p.find((x) => x.type === "year")!.value}-${p.find((x) => x.type === "month")!.value}-${p.find((x) => x.type === "day")!.value}`;
    const open = new Date(`${today}T09:00:00+05:30`).getTime();
    const close = new Date(`${today}T18:00:00+05:30`).getTime();
    if (now < open) return { phase: "before" as const, target: open, label: "Offer Starts In" };
    if (now < close) return { phase: "active" as const, target: close, label: "Offer Ends In" };
    return { phase: "ended" as const, target: 0, label: "" };
  }, [now]);

  const diff = Math.max(0, target - now);

  const formatTime = (ms: number) => {
    const d = Math.floor(ms / 86400000);
    const h = Math.floor((ms % 86400000) / 3600000);
    const m = Math.floor((ms % 3600000) / 60000);
    const s = Math.floor((ms % 60000) / 1000);
    return {
      d: d.toString().padStart(2, "0"),
      h: h.toString().padStart(2, "0"),
      m: m.toString().padStart(2, "0"),
      s: s.toString().padStart(2, "0"),
    };
  };

  const time = formatTime(diff);
  if (now === 0) return null;
  if (phase === "ended") return null;

  // Animation variants for the "rain drop" staggering effect
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.1,
      }
    }
  };

  const dropVariants = {
    hidden: { opacity: 0, y: -40, scale: 0.95 },
    visible: { 
      opacity: 1, 
      y: 0,
      scale: 1,
      transition: {
        type: "spring" as const,
        stiffness: 250,
        damping: 15,
        mass: 0.8
      }
    }
  };

  const floatVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        type: "spring" as const,
        stiffness: 100,
        damping: 10,
        delay: 0.5
      }
    }
  };

  return (
    <div className="relative w-full overflow-hidden bg-gradient-to-r from-[#090514] via-[#13082E] to-[#090514] py-10 md:py-12 border-b border-indigo-500/20 shadow-[0_10px_40px_-15px_rgba(0,0,0,0.5)] z-20">
      {/* Premium Background Effects - Optimized for all devices */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden bg-[radial-gradient(ellipse_at_top_left,_rgba(59,130,246,0.15)_0%,_transparent_50%),radial-gradient(ellipse_at_bottom_right,_rgba(168,85,247,0.15)_0%,_transparent_50%)]">
        {/* Subtle grid overlay for texture */}
        <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-[0.05]" />
      </div>

      <div className="container relative z-10 mx-auto px-4 sm:px-6">
        <div className="flex flex-col xl:flex-row items-center justify-between gap-10 xl:gap-12">
          
          {/* Left Content with Staggered Rain Drop Animation */}
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="flex-1 text-center xl:text-left space-y-6 max-w-3xl"
          >
            <motion.div variants={dropVariants} className="inline-block">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gradient-to-r from-[#1e3a8a] to-[#4c1d95] border border-blue-400/30 text-blue-100 text-sm font-semibold shadow-[0_0_20px_rgba(59,130,246,0.2)]">
                <Sparkles className="w-4 h-4 text-blue-300" />
                <span>Special Event</span>
              </div>
            </motion.div>
            
            <motion.h2 variants={dropVariants} className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-tight drop-shadow-md">
              Special Discounts on Packages
            </motion.h2>
            
            <motion.p variants={dropVariants} className="text-blue-100/90 text-lg md:text-xl font-medium max-w-2xl mx-auto xl:mx-0 drop-shadow-sm">
              Discover the right path for your child's development with our expert team of therapists.
            </motion.p>

            <motion.div variants={dropVariants} className="flex flex-wrap items-center justify-center xl:justify-start gap-3 pt-2">
              <div className="flex items-center gap-2 text-sm font-semibold text-white bg-[#1a103c] hover:bg-[#231551] transition-colors px-4 py-2 rounded-xl border border-white/10 shadow-lg">
                <Calendar className="w-4 h-4 text-blue-300" />
                <span>22nd June 2026</span>
              </div>
              <div className="flex items-center gap-2 text-sm font-semibold text-white bg-[#1a103c] hover:bg-[#231551] transition-colors px-4 py-2 rounded-xl border border-white/10 shadow-lg">
                <Clock className="w-4 h-4 text-blue-300" />
                <span>9:00 AM - 6:00 PM</span>
              </div>
              <div className="flex items-center gap-2 text-sm font-bold text-amber-200 bg-gradient-to-r from-[#78350f] to-[#7c2d12] px-4 py-2 rounded-xl border border-amber-400/30 shadow-[0_0_15px_rgba(245,158,11,0.2)]">
                <Tag className="w-4 h-4 text-amber-300" />
                <span>Limited Slots Available</span>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Content / Countdown & CTA */}
          <motion.div 
            variants={floatVariants}
            initial="hidden"
            animate="visible"
            className="flex flex-col items-center xl:items-end gap-6 shrink-0 w-full xl:w-auto mt-6 xl:mt-0"
          >
            {/* Premium Countdown */}
            <div className="flex flex-col items-center xl:items-end gap-3 w-full">
              <span className="text-sm text-blue-200 font-bold uppercase tracking-[0.2em] drop-shadow-sm">
                {label}
              </span>
              <div className="flex items-center justify-center gap-2 md:gap-3">
                <TimeUnit value={time.d} label="Days" />
                <span className="text-3xl font-light text-blue-300/50 mb-6 animate-pulse">:</span>
                <TimeUnit value={time.h} label="Hours" />
                <span className="text-3xl font-light text-blue-300/50 mb-6 animate-pulse">:</span>
                <TimeUnit value={time.m} label="Mins" />
                <span className="text-3xl font-light text-blue-300/50 mb-6 animate-pulse">:</span>
                <TimeUnit value={time.s} label="Secs" />
              </div>
            </div>

            {/* CTA Button */}
            <Link href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto">
              <div className="group relative w-full sm:w-auto flex items-center justify-center gap-3 px-10 py-4 md:py-5 bg-white text-indigo-950 font-extrabold text-lg rounded-2xl overflow-hidden transition-all duration-300 hover:scale-[1.03] hover:shadow-[0_0_30px_rgba(255,255,255,0.4)] cursor-pointer">
                <div className="absolute inset-0 bg-gradient-to-r from-slate-100 to-slate-200 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <span className="relative flex items-center gap-2 drop-shadow-sm">
                  Book Your Slot
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1.5 transition-transform duration-300" />
                </span>
              </div>
            </Link>
          </motion.div>

        </div>
      </div>
    </div>
  );
};

const TimeUnit = ({ value, label }: { value: string; label: string }) => (
  <div className="flex flex-col items-center gap-2">
    <div className="flex items-center justify-center w-16 h-16 sm:w-20 sm:h-20 bg-[#160d33] border border-white/10 rounded-2xl shadow-[0_8px_32px_rgba(0,0,0,0.3)] inset-shadow-sm transition-transform hover:scale-105 duration-300">
      <span className="text-3xl md:text-5xl font-extrabold text-white font-mono tracking-tighter drop-shadow-md">{value}</span>
    </div>
    <span className="text-[10px] md:text-xs text-blue-200 font-bold uppercase tracking-widest drop-shadow-sm">{label}</span>
  </div>
);
