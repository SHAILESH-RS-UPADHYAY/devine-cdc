"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { FOUNDERS } from "@/lib/constants";

export function FounderSection() {
  const founder = FOUNDERS[0];

  const FounderHeader = (
    <>
      {/* Badge */}
      <div className="inline-flex items-center gap-2 px-3 py-1.5 md:px-5 md:py-2 bg-white/10 lg:bg-white/10 backdrop-blur-md rounded-full border border-white/20 lg:border-white/15 text-white font-semibold md:text-sm text-[11px] tracking-wide w-fit shadow-sm">
        <span className="w-1.5 h-1.5 md:w-2 md:h-2 rounded-full bg-brand-peach shadow-[0_0_6px_rgba(255,203,164,0.6)]" />
        Meet Our Psychologist
      </div>

      {/* Name */}
      <h2 className="text-white font-heading font-black leading-tight drop-shadow-lg"
        style={{ fontSize: "clamp(1.8rem, 5vw, 3.5rem)" }}
      >
        Mrs. {founder.name}
      </h2>

      {/* Role + RCI badge */}
      <div className="flex flex-wrap items-center gap-2 md:gap-3">
        <span className="text-brand-peach font-bold md:text-xl text-sm drop-shadow-md">
          {founder.role}
        </span>
        <span className="inline-flex items-center gap-1 px-2 py-0.5 md:px-3 md:py-1 bg-amber-400/20 lg:bg-amber-400/15 border border-amber-400/30 lg:border-amber-400/25 rounded-md text-amber-300 font-bold md:text-xs text-[10px] leading-none backdrop-blur-sm">
          RCI Licensed
        </span>
      </div>
    </>
  );

  return (
    <section className="md:pt-16 md:pb-12 pt-14 pb-6 bg-transparent relative overflow-hidden" id="founder">
      {/* Decorative background elements */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-bl from-brand-peach/20 to-transparent rounded-bl-full pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-1/4 h-1/2 bg-gradient-to-tr from-brand-blue/20 to-transparent rounded-tr-full pointer-events-none" />

      <div className="container mx-auto px-4 md:px-6 relative z-10 md:py-8 py-3">
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 60 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          viewport={{ once: false, amount: 0.15 }}
          transition={{
            type: "spring",
            stiffness: 70,
            damping: 14,
            mass: 0.8,
            opacity: { duration: 0.5 },
          }}
          className="relative overflow-hidden md:rounded-[3rem] rounded-2xl shadow-[0_0_80px_rgba(167,139,250,0.3)] border border-white/10 group"
        >
          {/* Split layout: stacked on mobile/tablet, side-by-side on desktop */}
          <div className="flex flex-col lg:flex-row lg:min-h-[70vh] bg-[#0a0a12] relative">
            
            {/* Image Block — Mobile/Tablet: Takes full card height, Desktop: Right */}
            <div className="relative w-full lg:w-[45%] xl:w-1/2 aspect-[4/5] sm:aspect-[4/5] md:aspect-square lg:aspect-auto lg:min-h-full overflow-hidden lg:order-2 flex flex-col justify-end">
              <Image
                src={founder.image}
                alt={`Mrs. ${founder.name}`}
                fill
                className="object-cover object-top lg:object-contain lg:object-center transition-transform duration-[8000ms] ease-out group-hover:scale-105"
                priority
                quality={100}
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              {/* Desktop smooth fade into the background */}
              <div className="absolute inset-0 bg-gradient-to-r from-[#0a0a12] via-[#0a0a12]/20 to-transparent hidden lg:block pointer-events-none" />
              {/* Subtle top-left vignette for depth */}
              <div className="absolute inset-0 bg-gradient-to-r from-black/20 to-transparent pointer-events-none" />
              
              {/* Mobile dark gradient overlay so text is readable */}
              <div className="absolute inset-x-0 bottom-0 h-[65%] bg-gradient-to-t from-[#0a0a12] via-[#0a0a12]/80 to-transparent lg:hidden pointer-events-none" />

              {/* Subtle hover glow overlay */}
              <div className="absolute inset-0 bg-gradient-to-tr from-violet-500/10 via-fuchsia-400/10 to-sky-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-1000 pointer-events-none" />

              {/* Mobile Overlay Text (Hidden on Desktop) */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false }}
                transition={{ delay: 0.1, duration: 0.5 }}
                className="relative z-10 p-5 sm:p-10 md:p-14 lg:hidden flex flex-col space-y-3 pointer-events-auto"
              >
                {FounderHeader}
              </motion.div>
            </div>

            {/* Content Block — Mobile/Tablet: Below Image, Desktop: Left */}
            <div className="relative lg:flex lg:flex-col lg:justify-center lg:w-[55%] xl:w-1/2 px-5 py-6 sm:px-10 sm:py-8 md:px-14 md:py-10 lg:p-20 xl:px-24 xl:py-20 z-10 lg:order-1 pointer-events-none lg:pointer-events-auto bg-[#0a0a12] lg:bg-transparent">
              {/* Side-glow background behind text on desktop */}
              <div className="absolute inset-0 bg-gradient-to-tr from-violet-500/5 via-fuchsia-400/5 to-sky-500/5 pointer-events-none hidden lg:block" />

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false }}
                transition={{ delay: 0.15, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                className="relative z-10 space-y-3 lg:space-y-5 max-w-2xl pointer-events-auto"
              >
                {/* Desktop Text Block (Hidden on mobile) */}
                <div className="hidden lg:block space-y-5">
                  {FounderHeader}

                  {/* Decorative rule */}
                  <div className="w-12 md:w-16 h-0.5 md:h-1 bg-gradient-to-r from-brand-peach to-amber-400/60 rounded-full" />

                  {/* Bio */}
                  <p className="text-gray-300 md:text-lg text-[13px] leading-[1.6] md:leading-relaxed max-w-xl drop-shadow-md">
                    MPhil. Msc. Clinical Psychologist, 5+ yrs experience. Founder of Devine CDC — nurturing young minds in a safe, supportive space.
                  </p>
                </div>

                {/* Credential chips (Visible on both) */}
                <div className="flex flex-wrap gap-1.5 md:gap-2 pt-1 lg:pt-3">
                  {founder.credentials.map((cred, idx) => (
                    <span
                      key={idx}
                      className="px-2.5 py-1.5 md:px-3.5 md:py-2 bg-white/5 backdrop-blur-md border border-white/10 rounded-lg md:text-sm text-[11px] font-semibold text-gray-100 leading-tight shadow-sm"
                    >
                      {cred}
                    </span>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

