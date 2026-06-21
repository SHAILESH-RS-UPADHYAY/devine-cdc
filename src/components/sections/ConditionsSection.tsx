"use client";

import { useRef, useState, useEffect, useCallback } from "react";

const CONDITIONS = [
  {
    id: "autism-spectrum",
    title: "Autism Spectrum Disorder",
    desc1: "Every child experiences the world in their own beautiful way — some need a little extra help navigating social connections and daily routines.",
    desc2: "Through structured, play-based therapy, we help children build communication skills, find comfort in routines, and express themselves with confidence.",
    color: "#00FFC8",
  },
  {
    id: "global-developmental-delay",
    title: "Global Developmental Delay",
    desc1: "When a child reaches milestones at their own gentle pace across multiple areas, they need understanding and patient support.",
    desc2: "Our holistic approach meets each child where they are, nurturing their growth step by step toward their unique potential.",
    color: "#C77DFF",
  },
  {
    id: "speech-language-delay",
    title: "Speech and Language Delay",
    desc1: "Finding words can feel frustrating when the thoughts are there but the voice hasn't caught up yet.",
    desc2: "With warm, engaging speech therapy, we help children unlock their voice and connect with the world around them.",
    color: "#FFD166",
  },
  {
    id: "learning-difficulties",
    title: "Learning Difficulties",
    desc1: "Every child's mind works differently — some need alternative pathways to grasp concepts that others find natural.",
    desc2: "Through personalised strategies and multi-sensory techniques, we help children discover their strengths and build confidence in their ability to learn.",
    color: "#FF6B6B",
  },
  {
    id: "attention-behavioural",
    title: "Attention and Behavioural Concerns",
    desc1: "When a child struggles to focus or manage big feelings, it affects everything — learning, friendships, and family life.",
    desc2: "Our supportive behavioural interventions teach self-regulation skills and create calm, predictable environments where children thrive.",
    color: "#48CAE4",
  },
  {
    id: "sensory-processing",
    title: "Sensory Processing Difficulties",
    desc1: "The world can feel overwhelming when everyday sounds, textures, or movements are experienced too intensely or too faintly.",
    desc2: "Through gentle sensory integration therapy, we help children organise their sensory world and feel safe in their own bodies.",
    color: "#FF85A1",
  },
  {
    id: "cerebral-palsy",
    title: "Cerebral Palsy",
    desc1: "Movement and coordination may come with extra effort, but every child deserves the joy of playing, exploring, and doing things their way.",
    desc2: "Our tailored occupational and physical therapy approaches help build strength, independence, and confidence in every small victory.",
    color: "#95D5B2",
  },
  {
    id: "down-syndrome",
    title: "Down Syndrome",
    desc1: "Children with Down Syndrome bring unique gifts and learn best with patience, repetition, and warm encouragement.",
    desc2: "Our early intervention programs focus on building communication, motor skills, and social confidence at their own pace.",
    color: "#F4A261",
  },
  {
    id: "intellectual-disability",
    title: "Intellectual Disability",
    desc1: "Every child has the right to learn in a way that respects their pace and honours their potential.",
    desc2: "We create supportive, achievable learning pathways that celebrate progress and build daily living skills with dignity and joy.",
    color: "#B8C0FF",
  },
  {
    id: "handwriting-fine-motor",
    title: "Handwriting and Fine Motor Difficulties",
    desc1: "When gripping a pencil or fastening a button feels impossibly hard, frustration can overshadow a child's natural desire to create.",
    desc2: "Our fun, play-based fine motor activities strengthen little hands and unlock the confidence to write, draw, and do things independently.",
    color: "#80FFDB",
  },
  {
    id: "school-readiness",
    title: "School Readiness Concerns",
    desc1: "Starting school is a giant leap — some children need extra time and support to build the social, emotional, and academic foundations for success.",
    desc2: "We help bridge the gap between where a child is and where they need to be, making the transition to school a positive, confident experience.",
    color: "#FF9F1C",
  },
  {
    id: "developmental-coordination",
    title: "Developmental Coordination Difficulties",
    desc1: "When climbing, catching, or even walking feels clumsy and uncertain, children can withdraw from the activities they long to enjoy.",
    desc2: "Our movement-focused therapy builds coordination, body awareness, and the joy of physical play in a safe, encouraging space.",
    color: "#E040FB",
  },
];

function useInView(ref: React.RefObject<HTMLElement | null>) {
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const o = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { setInView(true); o.disconnect(); } },
      { threshold: 0.08 }
    );
    o.observe(el);
    return () => o.disconnect();
  }, [ref]);
  return inView;
}

export function ConditionsSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const stripRefs = useRef<(HTMLDivElement | null)[]>([]);
  const inView = useInView(sectionRef);
  const [openId, setOpenId] = useState<string | null>(null);

  const toggle = useCallback((id: string) => {
    setOpenId((prev) => (prev === id ? null : id));
  }, []);

  return (
    <section
      id="conditions-we-support"
      ref={sectionRef}
      className="relative overflow-hidden"
      style={{
        background: "#FAFAF8",
        WebkitFontSmoothing: "antialiased",
        textRendering: "optimizeLegibility",
        paddingTop: "clamp(48px, 6vw, 72px)",
        paddingBottom: "clamp(48px, 6vw, 72px)",
      }}
    >
      <style>{`
        .cs-text {
          -webkit-font-smoothing: antialiased;
          -moz-osx-font-smoothing: grayscale;
          text-rendering: optimizeLegibility;
        }
        @keyframes accentDraw {
          from { height: 0%; }
          to { height: 100%; }
        }
        @keyframes stripSlide {
          from { opacity: 0; transform: translateX(-100%); }
          to { opacity: 1; transform: translateX(0); }
        }
        @media (prefers-reduced-motion: reduce) {
          .cs-anim { animation: none !important; opacity: 1 !important; transform: translateX(0) !important; }
          .cs-accent { animation: none !important; height: 100% !important; }
        }
      `}</style>

      <div className="relative z-10 w-full max-w-4xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-10 md:mb-14">
          <h2
            className="font-heading font-black leading-tight mb-3 cs-text"
            style={{
              fontSize: "clamp(1.8rem, 5vw, 2.8rem)",
              color: "#1A1A1A",
              letterSpacing: "-0.02em",
            }}
          >
            Conditions We Support
          </h2>

          {/* Decorative rule with diamond */}
          <div className="flex items-center justify-center gap-3 mb-4" style={{ opacity: 0.5 }}>
            <span style={{ width: "clamp(40px, 8vw, 64px)", height: "1px", background: "#CCC", display: "inline-block" }} />
            <span style={{ width: 6, height: 6, background: "#E8773A", display: "inline-block", transform: "rotate(45deg)", borderRadius: 1 }} />
            <span style={{ width: "clamp(40px, 8vw, 64px)", height: "1px", background: "#CCC", display: "inline-block" }} />
          </div>

          <p
            className="mx-auto cs-text"
            style={{
              fontSize: "14px",
              lineHeight: 1.6,
              color: "#777",
              maxWidth: "36rem",
            }}
          >
            Support is provided based on each child's individual developmental needs, assessment findings, and goals.
          </p>
        </div>

        {/* Accordion strips */}
        <div
          className="mx-auto"
          style={{ maxWidth: "860px" }}
        >
          {CONDITIONS.map((condition, index) => {
            const isOpen = openId === condition.id;
            const num = String(index + 1).padStart(2, "0");

            return (
              <div
                key={condition.id}
                ref={(el) => { stripRefs.current[index] = el; }}
                className="cs-anim"
                style={{
                  opacity: inView ? 1 : 0,
                  transform: inView ? "translateX(0)" : "translateX(-100%)",
                  animation: inView
                    ? `stripSlide 0.4s ${index * 0.05}s cubic-bezier(0.2, 0, 0.0, 1) forwards`
                    : "none",
                  borderBottom: "0.5px solid rgba(0,0,0,0.08)",
                  position: "relative",
                  overflow: "hidden",
                  transition: "background 0.2s ease",
                }}
                onMouseEnter={(e) => {
                  if (window.innerWidth >= 1280) {
                    (e.currentTarget as HTMLElement).style.background = "rgba(0,0,0,0.02)";
                  }
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLElement).style.background = "transparent";
                }}
              >
                {/* Colored left accent bar */}
                <div
                  className="cs-accent"
                  style={{
                    position: "absolute",
                    left: 0,
                    top: 0,
                    width: 4,
                    height: inView ? "100%" : "0%",
                    background: condition.color,
                    borderRadius: "0 2px 2px 0",
                    animation: inView
                      ? `accentDraw 0.2s ${index * 0.05}s cubic-bezier(0.2, 0, 0.0, 1) forwards`
                      : "none",
                    transition: isOpen ? "none" : "opacity 0.3s ease",
                    opacity: isOpen ? 1 : 0.5,
                  }}
                />

                {/* Clickable strip header */}
                <button
                  onClick={() => toggle(condition.id)}
                  className="flex items-center w-full text-left cs-text"
                  style={{
                    minHeight: 56,
                    padding: "12px 16px 12px 20px",
                    cursor: "pointer",
                    WebkitTapHighlightColor: "transparent",
                    border: "none",
                    background: "transparent",
                    gap: 12,
                  }}
                  aria-expanded={isOpen}
                  aria-label={`${condition.title} — click to ${isOpen ? "collapse" : "expand"}`}
                >
                  {/* Number */}
                  <span
                    className="hidden sm:inline font-mono"
                    style={{
                      fontSize: "11px",
                      color: "#B0B0B0",
                      fontWeight: 500,
                      minWidth: 24,
                      letterSpacing: "0.05em",
                    }}
                  >
                    {num}
                  </span>

                  {/* Title */}
                  <span
                    className="flex-1 font-bold"
                    style={{
                      fontSize: "clamp(15px, 4vw, 18px)",
                      color: "#2D2B3A",
                      fontWeight: 700,
                      lineHeight: 1.3,
                    }}
                  >
                    {condition.title}
                  </span>

                  {/* Expand/collapse icon */}
                  <span
                    style={{
                      width: 22,
                      height: 22,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontSize: "18px",
                      fontWeight: 300,
                      color: "#AAA",
                      transition: "transform 0.25s cubic-bezier(0.4,0,0.2,1)",
                      transform: isOpen ? "rotate(45deg)" : "rotate(0deg)",
                      lineHeight: 1,
                    }}
                  >
                    +
                  </span>
                </button>

                {/* Expandable content */}
                <div
                  style={{
                    maxHeight: isOpen ? "180px" : "0px",
                    overflow: "hidden",
                    transition: "max-height 0.35s cubic-bezier(0.4,0,0.2,1), opacity 0.25s ease",
                    opacity: isOpen ? 1 : 0,
                  }}
                >
                  <div
                    style={{
                      padding: "0 20px 16px 20px",
                      paddingLeft: "clamp(20px, 4vw, 24px)",
                    }}
                  >
                    <p
                      className="cs-text"
                      style={{
                        fontSize: "14px",
                        lineHeight: 1.75,
                        color: "#555",
                        marginBottom: 6,
                      }}
                    >
                      {condition.desc1}
                    </p>
                    <p
                      className="cs-text"
                      style={{
                        fontSize: "14px",
                        lineHeight: 1.75,
                        color: "#555",
                      }}
                    >
                      {condition.desc2}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
