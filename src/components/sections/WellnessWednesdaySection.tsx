"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { 
  Scissors, 
  Music, 
  Palette, 
  Sprout, 
  Shapes, 
  Leaf, 
  Layers, 
  ChefHat, 
  Activity, 
  Cloud, 
  ArrowLeft 
} from "lucide-react";

const WELLNESS_ACTIVITIES = [
  {
    id: "week-1",
    day: "24th June'26",
    title: "CUT & PASTE ACTIVITY",
    description: "Let the creativity flow as the children cut out shapes, patterns, and pictures, then paste them to create their unique artwork.",
    image: "/images/wellness/cut_and_paste_activity.webp",
    color: "#00FFC8",
    glowR: 0, glowG: 255, glowB: 200,
    icon: Scissors,
  },
  {
    id: "week-2",
    day: "1st July'26",
    title: "DANCE THERAPY",
    description: "A fun and active session combining movement and music to help children express themselves, improve coordination, and build confidence.",
    image: "/images/wellness/dance_therapy.webp",
    color: "#FF6B6B",
    glowR: 255, glowG: 107, glowB: 107,
    icon: Music,
  },
  {
    id: "week-3",
    day: "8th July'26",
    title: "FINGER PAINTING",
    description: "A sensory-rich experience where children can dive into colors and create masterpieces using only their hands and imagination.",
    image: "/images/wellness/finger_painting.webp",
    color: "#C77DFF",
    glowR: 199, glowG: 125, glowB: 255,
    icon: Palette,
  },
  {
    id: "week-4",
    day: "15th July'26",
    title: "GARDENING CLASS",
    description: "A hands-on outdoor activity where children learn to plant, water, and care for seedlings, fostering a connection with nature.",
    image: "/images/wellness/gardening.webp",
    color: "#FFD166",
    glowR: 255, glowG: 209, glowB: 102,
    icon: Sprout,
  },
  {
    id: "week-5",
    day: "22nd July'26",
    title: "CLAY & CREATE DAY",
    description: "Children will mold, squish, and shape clay into fun figures, enhancing fine motor skills and tactile learning.",
    image: "/images/wellness/clay_and_create_day.webp",
    color: "#FF85A1",
    glowR: 255, glowG: 133, glowB: 161,
    icon: Shapes,
  },
  {
    id: "week-6",
    day: "29th July'26",
    title: "VEGGIE ART DAY",
    description: "An innovative session using vegetables as stamps and painting tools, turning everyday veggies into colorful art.",
    image: "/images/wellness/veggie_art_day.webp",
    color: "#48CAE4",
    glowR: 72, glowG: 202, glowB: 228,
    icon: Leaf,
  },
  {
    id: "week-7",
    day: "5th August'26",
    title: "ORIGAMI WORKSHOP",
    description: "A step-by-step paper-folding class where kids learn to create simple and beautiful origami figures, improving focus and patience.",
    image: "/images/wellness/origami_workshop.webp",
    color: "#95D5B2",
    glowR: 149, glowG: 213, glowB: 178,
    icon: Layers,
  },
  {
    id: "week-8",
    day: "12th August'26",
    title: "FAMILY CHEF DAY",
    description: "A delightful culinary session for children and parents to team up, follow easy recipes, and prepare healthy, tasty treats together.",
    image: "/images/wellness/family_chef_day.webp",
    color: "#F4A261",
    glowR: 244, glowG: 162, glowB: 97,
    icon: ChefHat,
  },
  {
    id: "week-9",
    day: "19th August'26",
    title: "YOGA FOR KIDS",
    description: "A calming and engaging yoga class designed specifically for children, focusing on simple poses, breathing, and relaxation.",
    image: "/images/wellness/yoga_for_kids.webp",
    color: "#FF99C8",
    glowR: 255, glowG: 153, glowB: 200,
    icon: Activity,
  },
  {
    id: "week-10",
    day: "26th August'26",
    title: "COTTON ART CREATION",
    description: "A soft and fluffy craft session where children use cotton balls and pads to build textured 2D and 3D artwork.",
    image: "/images/wellness/cotton_art_creation.webp",
    color: "#B8C0FF",
    glowR: 184, glowG: 192, glowB: 255,
    icon: Cloud,
  },
];

const staggerItem = {
  hidden: { opacity: 0, scale: 0.92 },
  show: { opacity: 1, scale: 1 },
};

export function WellnessWednesdaySection() {
  const [activeId, setActiveId] = useState<string | null>(null);
  const activeActivity = activeId ? WELLNESS_ACTIVITIES.find(a => a.id === activeId) : null;

  return (
    <section
      className="relative overflow-hidden py-10 md:py-24 flex flex-col justify-center min-h-[100dvh] md:min-h-[800px]"
      style={{
        background: "radial-gradient(ellipse at top, #0a0a12, #06060e 50%, #000000)",
        WebkitFontSmoothing: "antialiased",
        textRendering: "optimizeLegibility",
      }}
    >
      <style>{`
        @keyframes edgeGlow {
          0% { opacity: 0.4; }
          100% { opacity: 0.9; }
        }
        .ww-card-glow::before {
          content: '';
          position: absolute;
          inset: -1px;
          border-radius: 14px;
          pointer-events: none;
          animation: edgeGlow 2.8s infinite alternate ease-in-out;
        }
        @keyframes typewriterReveal {
          0% { clip-path: inset(0 100% 0 0); }
          100% { clip-path: inset(0 0% 0 0); }
        }
        @keyframes fadeUp {
          0% { opacity: 0; transform: translateY(8px); }
          100% { opacity: 1; transform: translateY(0); }
        }
        .ww-text {
          -webkit-font-smoothing: antialiased;
          -moz-osx-font-smoothing: grayscale;
          text-rendering: optimizeLegibility;
        }
      `}</style>

      {/* Ambient glow — matches Conditions Section's side-glow style */}
      <motion.div
        animate={{
          opacity: [0.6, 1, 0.6],
        }}
        transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-[-8%] left-[-8%] w-[500px] h-[500px] rounded-full pointer-events-none z-0"
        style={{ background: "radial-gradient(circle, rgba(232,119,58,0.3) 0%, transparent 70%)" }}
      />
      <motion.div
        animate={{
          opacity: [0.5, 0.9, 0.5],
        }}
        transition={{ duration: 18, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        className="absolute bottom-[-15%] right-[-8%] w-[600px] h-[600px] rounded-full pointer-events-none z-0"
        style={{ background: "radial-gradient(circle, rgba(244,167,108,0.25) 0%, transparent 70%)" }}
      />
      <motion.div
        animate={{
          opacity: [0.4, 0.8, 0.4],
        }}
        transition={{ duration: 16, repeat: Infinity, ease: "easeInOut", delay: 5 }}
        className="absolute top-[30%] right-[5%] w-[400px] h-[400px] rounded-full pointer-events-none z-0"
        style={{ background: "radial-gradient(circle, rgba(255,203,164,0.2) 0%, transparent 70%)" }}
      />

      <div className="container mx-auto px-4 relative z-10 w-full max-w-5xl flex-1 flex flex-col justify-center">
        <AnimatePresence mode="wait">
          {!activeId ? (
            <motion.div
              key="grid-view"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="flex flex-col h-full justify-center"
            >
              <div className="text-center mb-6 md:mb-10">
                <motion.div
                  initial={{ y: -20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold mb-3 md:mb-4 ww-text"
                  style={{
                    background: "rgba(255,255,255,0.06)",
                    color: "rgba(255,255,255,0.6)",
                    border: "1px solid rgba(255,255,255,0.08)",
                  }}
                >
                  <span className="w-1.5 h-1.5 rounded-full animate-pulse" style={{ backgroundColor: "#00FFC8" }}></span>
                  Extra Group Classes
                </motion.div>
                <motion.h2
                  initial={{ y: -20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.05 }}
                  className="font-heading font-black leading-tight mb-1 ww-text"
                  style={{
                    fontSize: "clamp(2rem, 6vw, 3.5rem)",
                    color: "#FFFFFF",
                    textShadow: "0 2px 16px rgba(0,0,0,0.5)",
                    letterSpacing: "-0.02em",
                  }}
                >
                  Wellness Wednesday
                </motion.h2>

                <motion.p
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.15 }}
                  className="mx-auto mt-2 md:mt-3 ww-text"
                  style={{
                    fontSize: "14px",
                    lineHeight: 1.7,
                    color: "rgba(255,255,255,0.55)",
                    maxWidth: "36rem",
                  }}
                >
                  Engaging, fun, and therapeutic group activities designed to build social skills, creativity, and confidence.
                </motion.p>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-5 gap-2.5 md:gap-3">
                {WELLNESS_ACTIVITIES.map((activity, index) => {
                  const Icon = activity.icon;
                  const pulseDelay = index * 280;
                  return (
                    <motion.button
                      layoutId={`card-${activity.id}`}
                      key={activity.id}
                      initial={{ opacity: 0, y: 16 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, scale: 0.85 }}
                      transition={{
                        opacity: { duration: 0.35, delay: index * 0.04 },
                        y: { duration: 0.35, delay: index * 0.04 },
                      }}
                      onClick={() => setActiveId(activity.id)}
                      className="active:scale-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/30 ww-text"
                      style={{
                        background: "rgba(10, 10, 18, 0.88)",
                        border: "1px solid rgba(255,255,255,0.06)",
                        borderRadius: "14px",
                        padding: "12px 10px",
                        minHeight: "82px",
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        justifyContent: "center",
                        textAlign: "center",
                        overflow: "hidden",
                        position: "relative",
                        cursor: "pointer",
                        boxShadow: `0 0 12px 2px rgba(${activity.glowR}, ${activity.glowG}, ${activity.glowB}, 0.4), 0 0 0 1px rgba(${activity.glowR}, ${activity.glowG}, ${activity.glowB}, 0.6)`,
                      }}
                    >
                      <Icon size={16} className="mb-1 relative z-10" style={{ color: activity.color, opacity: 0.9 }} />
                      <div className="relative z-10 flex flex-col items-center justify-center w-full px-0.5">
                        <span
                          className="text-[10px] font-semibold uppercase tracking-wider mb-0.5"
                          style={{ color: "rgba(255,255,255,0.45)" }}
                        >
                          {activity.day}
                        </span>
                        <h3
                          className="text-[12px] leading-tight w-full"
                          style={{ color: "#FFFFFF", fontWeight: 600, lineHeight: 1.2 }}
                        >
                          {activity.title}
                        </h3>
                      </div>
                    </motion.button>
                  );
                })}
              </div>
            </motion.div>
          ) : activeActivity ? (
            <motion.div
              key="detail-overlay"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="fixed inset-0 z-50 flex items-center justify-center p-4"
              style={{
                background: "rgba(0,0,0,0.8)",
              }}
            >
              <motion.div
                layoutId={`card-${activeActivity.id}`}
                className="relative flex flex-col overflow-hidden ww-text"
                style={{
                  width: "min(90vw, 480px)",
                  maxWidth: "min(90vw, 480px)",
                  maxHeight: "75vh",
                  borderRadius: "20px",
                  background: "rgba(16, 16, 24, 0.96)",
                  border: "1px solid rgba(255,255,255,0.08)",
                  boxShadow: `0 24px 64px -12px rgba(0,0,0,0.6), 0 0 24px -4px rgba(${activeActivity.glowR}, ${activeActivity.glowG}, ${activeActivity.glowB}, 0.2)`,
                  overflowY: "auto",
                }}
              >
                {/* Mosaic background layer */}
                <div className="absolute inset-0 pointer-events-none" style={{ zIndex: 0, overflow: "hidden" }}>
                  <motion.div
                    initial="hidden"
                    animate="show"
                    variants={{ hidden: {}, show: { transition: { staggerChildren: 0.06, delayChildren: 0.05 } } }}
                    className="flex flex-wrap content-start justify-center"
                    style={{
                      width: "150%",
                      height: "150%",
                      position: "absolute",
                      top: "-25%",
                      left: "-25%",
                    }}
                  >
                    {Array.from({ length: 25 }).map((_, i) => {
                      const act = WELLNESS_ACTIVITIES[i % WELLNESS_ACTIVITIES.length];
                      const size = 65 + (i % 5) * 12;
                      const rot = ((i * 37) % 14) - 7;
                      return (
                        <motion.div
                          key={i}
                          variants={staggerItem}
                          className="shrink-0 rounded-md overflow-hidden"
                          style={{
                            width: size,
                            height: size,
                            margin: 3,
                            transform: `rotate(${rot}deg)`,
                            opacity: 0.15,
                          }}
                        >
                          <Image src={act.image} alt="" fill sizes="80px" className="object-cover" />
                        </motion.div>
                      );
                    })}
                  </motion.div>
                  <div
                    className="absolute inset-0"
                    style={{ background: "linear-gradient(180deg, rgba(16,16,24,0.2) 0%, rgba(16,16,24,0.8) 100%)" }}
                  />
                </div>

                <div className="relative z-10 flex flex-col items-center p-5 pt-8">
                  <button
                    onClick={() => setActiveId(null)}
                    className="absolute top-3 left-3 z-20 flex items-center justify-center hover:bg-white/10 transition-colors"
                    style={{
                      width: 34,
                      height: 34,
                      borderRadius: "50%",
                      background: "rgba(0,0,0,0.5)",
                      border: "1px solid rgba(255,255,255,0.1)",
                      color: "rgba(255,255,255,0.8)",
                    }}
                    aria-label="Go back"
                  >
                    <ArrowLeft size={15} />
                  </button>

                  {/* Featured image with typewriter reveal */}
                  <motion.div
                    initial={{ clipPath: "inset(0 100% 0 0)" }}
                    animate={{ clipPath: "inset(0 0% 0 0)" }}
                    transition={{ duration: 0.5, delay: 0.35, ease: "easeInOut" }}
                    className="relative overflow-hidden rounded-xl mb-3 shrink-0"
                    style={{
                      maxWidth: "260px",
                      width: "100%",
                      aspectRatio: "4/3",
                      boxShadow: `0 8px 24px -8px rgba(0,0,0,0.5), 0 0 0 1px rgba(255,255,255,0.06)`,
                    }}
                  >
                    <Image
                      src={activeActivity.image}
                      alt={activeActivity.title}
                      fill
                      sizes="260px"
                      className="object-cover"
                      priority
                    />
                  </motion.div>

                  {/* Text content */}
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.3, delay: 0.5 }}
                    className="w-full text-center px-1"
                  >
                    <span
                      className="inline-block text-[10px] font-bold tracking-widest uppercase mb-2 px-3 py-1 rounded-full"
                      style={{
                        background: `${activeActivity.color}18`,
                        border: `1px solid ${activeActivity.color}40`,
                        color: activeActivity.color,
                      }}
                    >
                      {activeActivity.day}
                    </span>

                    <h3
                      className="font-bold mb-1.5"
                      style={{ fontSize: "15px", color: "#FFFFFF", lineHeight: 1.3 }}
                    >
                      {activeActivity.title}
                    </h3>

                    <p
                      className="ww-text"
                      style={{
                        fontSize: "13px",
                        lineHeight: 1.7,
                        color: "#F0F0F0",
                        letterSpacing: "0.01em",
                      }}
                    >
                      {activeActivity.description}
                    </p>
                  </motion.div>
                </div>
              </motion.div>
            </motion.div>
          ) : null}
        </AnimatePresence>
      </div>
    </section>
  );
}
