"use client";

import { useEffect } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { 
  CheckCircle2, 
  Clock, 
  PhoneCall, 
  MessageCircle, 
  MapPin, 
  Calendar, 
  ShieldCheck, 
  ArrowRight, 
  Home, 
  Sparkles, 
  ExternalLink,
  HeartHandshake
} from "lucide-react";
import { CONTACT, ADDRESS, HOURS, WHATSAPP_URL, THERAPIES } from "@/lib/constants";

declare global {
  interface Window {
    fbq?: (...args: unknown[]) => void;
    dataLayer?: Record<string, unknown>[];
    gtag?: (...args: unknown[]) => void;
  }
}

const NEXT_STEPS = [
  {
    step: "01",
    title: "Clinical Profile Review",
    timeframe: "Within 2–4 Business Hours",
    description: "Our multidisciplinary clinical coordinator carefully assesses your child's age, primary developmental milestones, and initial therapeutic requirements.",
    icon: ShieldCheck,
    color: "bg-emerald-50 text-emerald-600 border-emerald-200",
  },
  {
    step: "02",
    title: "Consultation & Slot Scheduling",
    timeframe: "Phone or WhatsApp Call",
    description: "We will contact you to discuss your specific concerns, answer any questions, and reserve a dedicated 1-on-1 assessment slot with our specialists.",
    icon: Calendar,
    color: "bg-blue-50 text-blue-600 border-blue-200",
  },
  {
    step: "03",
    title: "In-Person Clinic Assessment",
    timeframe: "At Devine CDC Gurgaon",
    description: "Bring your child to our child-proofed, sensory-friendly clinic in Sector 51, Gurgaon for an evidence-based clinical observation and diagnostic roadmap.",
    icon: HeartHandshake,
    color: "bg-orange-50 text-devine-orange border-orange-200",
  },
];

export function ThankYouContent() {
  // Fire conversion tracking signals on page mount
  useEffect(() => {
    // 1. Google Analytics / GTM custom event
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({
      event: "thank_you_view",
      event_category: "lead",
      event_label: "assessment_booking_confirmed",
    });

    // 2. GTM Google Ads conversion trigger compatibility
    window.dataLayer.push({
      event: "google_ads_form_submit",
      page: "/thank-you",
    });

    // 3. Direct Google Ads gtag conversion trigger
    if (typeof window.gtag === "function") {
      window.gtag("event", "conversion", {
        send_to: "AW-18374173106/mCqACOCZpukcELLDvrlE",
        value: 1.0,
        currency: "INR",
      });
    }

    // 4. Meta Pixel Lead event
    if (typeof window.fbq === "function") {
      window.fbq("track", "Lead");
    }
  }, []);

  return (
    <main className="min-h-screen bg-slate-50/60 pt-28 pb-20 md:pt-36 md:pb-28 relative overflow-hidden">
      {/* Decorative ambient background accents */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-96 bg-gradient-to-b from-orange-100/40 via-amber-50/20 to-transparent blur-3xl pointer-events-none -z-10" />
      <div className="absolute top-40 right-10 w-72 h-72 rounded-full bg-emerald-100/30 blur-3xl pointer-events-none -z-10" />
      <div className="absolute top-96 left-10 w-80 h-80 rounded-full bg-blue-100/30 blur-3xl pointer-events-none -z-10" />

      <div className="container mx-auto px-4 md:px-6 max-w-5xl">
        
        {/* ── Top Confirmation Hero ── */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="text-center max-w-3xl mx-auto mb-12"
        >
          {/* Status Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-50 border border-emerald-200/80 text-emerald-800 text-xs sm:text-sm font-bold tracking-wide shadow-sm mb-6">
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500" />
            </span>
            Assessment Request Confirmed
          </div>

          {/* Animated Success Icon */}
          <motion.div 
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ type: "spring", stiffness: 300, damping: 20, delay: 0.1 }}
            className="w-20 h-20 sm:w-24 sm:h-24 mx-auto rounded-3xl bg-gradient-to-br from-emerald-500 to-teal-600 text-white flex items-center justify-center shadow-xl shadow-emerald-500/20 mb-6"
          >
            <CheckCircle2 className="w-10 h-10 sm:w-12 sm:h-12" strokeWidth={2.2} />
          </motion.div>

          <h1 className="font-heading font-black text-3xl sm:text-4xl md:text-5xl text-slate-900 tracking-tight mb-4">
            Thank You for Trusting <span className="text-devine-orange">Devine CDC</span>
          </h1>

          <p className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-2xl mx-auto">
            Your inquiry has reached our clinical coordination team. We understand that taking the first step for your child requires care and trust, and we are committed to being by your side.
          </p>
        </motion.div>

        {/* ── Direct Instant Action Cards (WhatsApp & Call) ── */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 mb-12"
        >
          {/* WhatsApp Direct Connect */}
          <div className="bg-white rounded-2xl p-6 sm:p-7 border border-slate-200/80 shadow-md hover:shadow-lg transition-all flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center mb-4">
                <MessageCircle className="w-6 h-6" />
              </div>
              <h2 className="font-heading font-bold text-lg text-slate-900 mb-1">
                Prefer Direct WhatsApp Chat?
              </h2>
              <p className="text-sm text-slate-600 leading-relaxed mb-6">
                Connect instantly with our clinic support desk to ask questions or share existing reports right away.
              </p>
            </div>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 w-full py-3 px-5 rounded-xl bg-[#25D366] hover:bg-[#20ba5a] text-white font-bold text-sm shadow-md shadow-[#25D366]/20 transition-all active:scale-[0.98] cursor-pointer"
            >
              <MessageCircle className="w-4 h-4" />
              Chat on WhatsApp
            </a>
          </div>

          {/* Immediate Phone Call */}
          <div className="bg-white rounded-2xl p-6 sm:p-7 border border-slate-200/80 shadow-md hover:shadow-lg transition-all flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-xl bg-orange-50 text-devine-orange flex items-center justify-center mb-4">
                <PhoneCall className="w-6 h-6" />
              </div>
              <h2 className="font-heading font-bold text-lg text-slate-900 mb-1">
                Speak with Us Directly
              </h2>
              <p className="text-sm text-slate-600 leading-relaxed mb-6">
                Available {HOURS.days} from {HOURS.display} for appointments and inquiries.
              </p>
            </div>
            <a
              href={`tel:${CONTACT.phone.replace(/\s+/g, '')}`}
              className="inline-flex items-center justify-center gap-2 w-full py-3 px-5 rounded-xl bg-slate-900 hover:bg-devine-orange text-white font-bold text-sm shadow-md transition-all active:scale-[0.98] cursor-pointer"
            >
              <PhoneCall className="w-4 h-4" />
              Call {CONTACT.phoneDisplay}
            </a>
          </div>
        </motion.div>

        {/* ── What Happens Next Section ── */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="bg-white rounded-3xl p-6 sm:p-10 border border-slate-200/80 shadow-xl mb-12"
        >
          <div className="text-center max-w-xl mx-auto mb-10">
            <span className="text-xs font-bold uppercase tracking-wider text-devine-orange bg-devine-orange/10 px-3 py-1 rounded-full">
              Transparent Care Pathway
            </span>
            <h2 className="font-heading font-bold text-2xl sm:text-3xl text-slate-900 mt-2">
              What Happens Next?
            </h2>
            <p className="text-sm text-slate-500 mt-1">
              Here is what you can expect from our team over the next 24 hours.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 relative">
            {NEXT_STEPS.map((item, index) => {
              const IconComponent = item.icon;
              return (
                <div 
                  key={index}
                  className="bg-slate-50/70 rounded-2xl p-6 border border-slate-100 relative flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-xs font-black tracking-widest text-slate-400">
                        STEP {item.step}
                      </span>
                      <div className={`w-10 h-10 rounded-xl border flex items-center justify-center ${item.color}`}>
                        <IconComponent className="w-5 h-5" />
                      </div>
                    </div>
                    <h3 className="font-heading font-bold text-lg text-slate-900 mb-1">
                      {item.title}
                    </h3>
                    <div className="inline-flex items-center gap-1.5 text-[11px] font-bold text-slate-500 uppercase tracking-wider mb-3">
                      <Clock className="w-3.5 h-3.5 text-devine-orange" />
                      {item.timeframe}
                    </div>
                    <p className="text-sm text-slate-600 leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </motion.div>

        {/* ── Clinic Location & Visit Preparation ── */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="bg-gradient-to-r from-slate-900 to-slate-800 rounded-3xl p-6 sm:p-10 text-white shadow-xl mb-12 relative overflow-hidden"
        >
          <div className="relative z-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <div className="max-w-2xl">
              <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-devine-peach mb-2">
                <MapPin className="w-4 h-4" />
                Physical Centre Address
              </div>
              <h3 className="font-heading font-bold text-xl sm:text-2xl text-white mb-2">
                Devine Child Development Centre
              </h3>
              <p className="text-slate-300 text-sm sm:text-base leading-relaxed mb-4">
                {ADDRESS.full}
              </p>
              <div className="inline-flex items-center gap-2 text-xs text-slate-400 bg-white/5 px-3 py-1.5 rounded-lg border border-white/10">
                <Clock className="w-3.5 h-3.5 text-devine-peach" />
                Working Hours: {HOURS.days} ({HOURS.display})
              </div>
            </div>

            <div className="shrink-0 w-full md:w-auto">
              <a
                href={ADDRESS.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full md:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-devine-orange hover:bg-devine-orange/90 text-white font-bold text-sm shadow-lg transition-all active:scale-[0.98] cursor-pointer"
              >
                <MapPin className="w-4 h-4" />
                Open in Google Maps
                <ExternalLink className="w-3.5 h-3.5 opacity-80" />
              </a>
            </div>
          </div>
        </motion.div>

        {/* ── Explore Therapies / Return Home ── */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="text-center"
        >
          <h3 className="font-heading font-bold text-xl text-slate-900 mb-6">
            Explore Evidence-Based Therapy Programs
          </h3>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 mb-8">
            {THERAPIES.slice(0, 4).map((therapy) => (
              <Link
                key={therapy.id}
                href={therapy.href}
                className="p-4 rounded-2xl bg-white border border-slate-200/80 hover:border-devine-orange/50 hover:shadow-md transition-all text-left group"
              >
                <div className="w-8 h-8 rounded-lg bg-orange-50 text-devine-orange flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
                  <Sparkles className="w-4 h-4" />
                </div>
                <h4 className="font-bold text-sm text-slate-900 group-hover:text-devine-orange transition-colors">
                  {therapy.title}
                </h4>
                <p className="text-[11px] text-slate-500 mt-1 line-clamp-2">
                  {therapy.shortDescription}
                </p>
              </Link>
            ))}
          </div>

          <Link
            href="/"
            className="inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-full bg-white hover:bg-slate-100 text-slate-700 font-bold text-sm border border-slate-300 shadow-sm transition-all active:scale-[0.98]"
          >
            <Home className="w-4 h-4" />
            Return to Homepage
          </Link>
        </motion.div>

      </div>
    </main>
  );
}
