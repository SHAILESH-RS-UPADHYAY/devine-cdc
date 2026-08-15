"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { CalendarDays, Users, Ticket, ArrowRight } from "lucide-react";

const HIGHLIGHTS = [
  { icon: CalendarDays, label: "15th August 2026", sub: "Saturday" },
  { icon: Users, label: "Only 10 slots", sub: "per age group" },
  { icon: Ticket, label: "₹149/-", sub: "per child" },
];

const AGE_GROUPS = ["2–3 Yrs", "3–5 Yrs", "5–7 Yrs", "7–10 Yrs", "10+ Yrs", "Special Needs"];

const TIRANGA = ["#FF9933", "#FFFFFF", "#138808"] as const;

// Deterministic (no Math.random — would mismatch on hydration).
const ROCKETS = [8, 26, 47, 68, 88].map((left, i) => ({
  left,
  rise: 58 + ((i * 7) % 22), // % of section height
  delay: i * 0.34,
  color: TIRANGA[i % 3],
}));

const SPARK_COUNT = 12;

// Blinking "pathaka" sparks running along all four edges.
const EDGE_SPARKS = Array.from({ length: 40 }, (_, i) => {
  const side = i % 4;
  const t = ((Math.floor(i / 4) * 11) % 10) * 10 + 5; // 5..95 %
  const pos =
    side === 0
      ? { top: "2%", left: `${t}%` }
      : side === 1
        ? { bottom: "2%", left: `${t}%` }
        : side === 2
          ? { left: "1.5%", top: `${t}%` }
          : { right: "1.5%", top: `${t}%` };
  return { id: i, pos, color: TIRANGA[i % 3], delay: (i % 9) * 0.28 };
});

export function FestiveBannerSection() {
  const [inView, setInView] = useState(false);
  const [burst, setBurst] = useState(0);

  // While the section is visible, re-fire the crackers periodically.
  // (Each scroll-in fires one immediately via onViewportEnter.)
  useEffect(() => {
    if (!inView) return;
    const id = setInterval(() => setBurst((b) => b + 1), 7000);
    return () => clearInterval(id);
  }, [inView]);

  const scrollToBooking = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (window.location.pathname !== "/") return;
    const element = document.getElementById("book-appointment");
    if (!element) return;
    e.preventDefault();
    const y = element.getBoundingClientRect().top + window.scrollY - 100;
    window.scrollTo({ top: y, behavior: "smooth" });
    window.history.pushState(null, "", "/#book-appointment");
  };

  return (
    <motion.section
      aria-labelledby="festive-banner-heading"
      viewport={{ amount: 0.25 }}
      onViewportEnter={() => {
        setInView(true);
        setBurst((b) => b + 1);
      }}
      onViewportLeave={() => setInView(false)}
      className="fb-section relative overflow-hidden bg-gradient-to-br from-[#FFF6E9] via-white to-[#EDF7EF] py-8 md:py-12"
    >
      <style>{`
        @keyframes fb-edge-sweep {
          0%   { background-position: 0% 50%; }
          100% { background-position: 200% 50%; }
        }
        @keyframes fb-edge-breathe {
          0%, 100% { opacity: 0.35; }
          50%      { opacity: 1; }
        }
        @keyframes fb-rocket {
          0%   { transform: translateY(0) scaleY(1); opacity: 0; }
          10%  { opacity: 1; }
          85%  { opacity: 1; }
          100% { transform: translateY(calc(-1 * var(--fb-rise))) scaleY(1.6); opacity: 0; }
        }
        @keyframes fb-spark {
          0%   { transform: translate(0, 0) scale(1); opacity: 0; }
          12%  { opacity: 1; }
          100% { transform: translate(var(--fb-tx), var(--fb-ty)) scale(0.25); opacity: 0; }
        }
        @keyframes fb-crackle {
          0%, 100% { opacity: 0; transform: scale(0.4); }
          50%      { opacity: 1; transform: scale(1.4); }
        }
        .fb-glow-frame {
          background: linear-gradient(90deg, #FF9933, #FFFFFF, #138808, #FF9933, #FFFFFF, #138808);
          background-size: 200% 100%;
          animation: fb-edge-sweep 6s linear infinite;
        }
        .fb-halo { animation: fb-edge-breathe 3.2s ease-in-out infinite; }
        .fb-rocket { animation: fb-rocket 0.75s cubic-bezier(0.22, 0.9, 0.4, 1) forwards; }
        .fb-spark  { animation: fb-spark 1.15s ease-out forwards; }
        .fb-crackle { animation: fb-crackle 1.9s ease-in-out infinite; }
        @media (prefers-reduced-motion: reduce) {
          .fb-glow-frame, .fb-halo, .fb-rocket, .fb-spark, .fb-crackle { animation: none !important; }
          .fb-rocket, .fb-spark { opacity: 0 !important; }
        }
      `}</style>

      {/* Animated tiranga edges on all four sides */}
      <div className="fb-glow-frame pointer-events-none absolute inset-x-0 top-0 z-20 h-1" aria-hidden />
      <div className="fb-glow-frame pointer-events-none absolute inset-x-0 bottom-0 z-20 h-1" aria-hidden />
      <div className="fb-glow-frame pointer-events-none absolute inset-y-0 left-0 z-20 w-1" aria-hidden />
      <div className="fb-glow-frame pointer-events-none absolute inset-y-0 right-0 z-20 w-1" aria-hidden />

      {/* Breathing tricolour halo hugging the inner edge */}
      <div
        className="fb-halo pointer-events-none absolute inset-0 z-10"
        aria-hidden
        style={{
          boxShadow:
            "inset 0 0 40px -10px rgba(255,153,51,0.55), inset 0 0 40px -10px rgba(19,136,8,0.45), inset 0 0 90px -30px rgba(232,119,58,0.6)",
        }}
      />

      {/* Crackers: rockets that climb and burst, replayed on scroll-in and every 7s */}
      <div className="pointer-events-none absolute inset-0 z-10 overflow-hidden" aria-hidden>
        {inView &&
          ROCKETS.map((r, ri) => (
            <div key={`${burst}-${ri}`} className="absolute bottom-0" style={{ left: `${r.left}%` }}>
              <span
                className="fb-rocket absolute bottom-0 block h-3 w-[3px] rounded-full"
                style={
                  {
                    "--fb-rise": `${r.rise}vh`,
                    background: r.color,
                    boxShadow: `0 0 8px 2px ${r.color}`,
                    animationDelay: `${r.delay}s`,
                  } as React.CSSProperties
                }
              />
              <div className="absolute" style={{ bottom: `${r.rise}vh` }}>
                {Array.from({ length: SPARK_COUNT }, (_, si) => {
                  const angle = (si / SPARK_COUNT) * 2 * Math.PI;
                  const dist = 46 + (si % 4) * 14;
                  const color = TIRANGA[(ri + si) % 3];
                  return (
                    <span
                      key={si}
                      className="fb-spark absolute block h-[5px] w-[5px] rounded-full"
                      style={
                        {
                          "--fb-tx": `${Math.round(Math.cos(angle) * dist)}px`,
                          "--fb-ty": `${Math.round(Math.sin(angle) * dist)}px`,
                          background: color,
                          boxShadow: `0 0 10px 3px ${color}`,
                          animationDelay: `${r.delay + 0.7}s`,
                        } as React.CSSProperties
                      }
                    />
                  );
                })}
              </div>
            </div>
          ))}

        {/* Constant crackling along every edge */}
        {EDGE_SPARKS.map((s) => (
          <span
            key={s.id}
            className="fb-crackle absolute block h-1.5 w-1.5 rounded-full"
            style={{
              ...s.pos,
              background: s.color,
              boxShadow: `0 0 8px 2px ${s.color}`,
              animationDelay: `${s.delay}s`,
            }}
          />
        ))}
      </div>

      <div className="relative z-30 container mx-auto grid max-w-5xl items-center gap-6 px-4 md:grid-cols-[minmax(0,260px)_1fr] md:gap-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="mx-auto w-full max-w-[220px] md:max-w-none"
        >
          <Link href="/#book-appointment" onClick={scrollToBooking} className="block">
            <Image
              src="/images/independence-day-teej-2026.jpg"
              alt="Devine CDC Independence Day & Teej Celebration on 15th August 2026 — age-wise special batches, ₹149 per child"
              width={854}
              height={1280}
              priority
              sizes="(max-width: 768px) 220px, 260px"
              className="h-auto w-full rounded-2xl border border-white shadow-[0_12px_40px_-12px_rgba(232,119,58,0.45)] transition-transform hover:scale-[1.02]"
            />
          </Link>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-center md:text-left"
        >
          <span className="inline-flex items-center gap-2 rounded-full bg-devine-orange/10 px-3 py-1 text-xs font-semibold tracking-wider uppercase text-devine-orange">
            <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-devine-orange" />
            Limited slots · Registration mandatory
          </span>

          <h2
            id="festive-banner-heading"
            className="font-heading mt-3 text-3xl leading-tight font-black text-devine-text md:text-4xl"
          >
            Independence Day{" "}
            <span className="bg-gradient-to-r from-devine-orange to-[#8B5CF6] bg-clip-text text-transparent">
              &amp; Teej Celebration
            </span>
          </h2>

          <p className="mt-2 text-sm leading-relaxed text-devine-muted md:text-base">
            Fun-filled, age-appropriate activities celebrating the spirit of Independence Day &amp; Teej — with
            age-wise special batches, including a dedicated batch for children with special needs.
          </p>

          <ul className="mt-4 flex flex-wrap justify-center gap-2 md:justify-start">
            {AGE_GROUPS.map((group) => (
              <li
                key={group}
                className="rounded-full border border-devine-peach bg-white px-3 py-1 text-xs font-semibold text-devine-text"
              >
                {group}
              </li>
            ))}
          </ul>

          <dl className="mt-5 grid grid-cols-1 gap-3 sm:grid-cols-3">
            {HIGHLIGHTS.map(({ icon: Icon, label, sub }) => (
              <div
                key={label}
                className="flex items-center justify-center gap-2 rounded-xl border border-devine-peach/60 bg-white/80 px-3 py-2 md:justify-start"
              >
                <Icon size={18} className="shrink-0 text-devine-orange" aria-hidden />
                <div className="text-left">
                  <dt className="text-sm leading-tight font-bold text-devine-text">{label}</dt>
                  <dd className="text-[11px] leading-tight text-devine-muted">{sub}</dd>
                </div>
              </div>
            ))}
          </dl>

          <Link
            href="/#book-appointment"
            onClick={scrollToBooking}
            className="mt-6 inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-devine-orange to-devine-peach px-6 py-3 font-bold text-white shadow-[0_8px_30px_rgba(232,119,58,0.4)] transition-transform hover:scale-105 focus-visible:ring-2 focus-visible:ring-devine-orange focus-visible:ring-offset-2 focus-visible:outline-none"
          >
            Book Your Slot
            <ArrowRight size={18} aria-hidden />
          </Link>
        </motion.div>
      </div>
    </motion.section>
  );
}
