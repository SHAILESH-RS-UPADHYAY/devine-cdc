"use client";

import { useState, useMemo, useEffect } from "react";
import { createPortal } from "react-dom";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { Maximize2, X, ChevronRight, ShieldCheck, HeartHandshake, Building2, MapPin, Phone, MessageCircle } from "lucide-react";

interface ClinicPhoto {
  id: string;
  categoryKey: "all" | "motor-sensory" | "speech-cognition" | "team";
  categoryName: string;
  title: string;
  subtitle: string;
  description: string;
  src: string;
  alt: string;
  tags: string[];
}

const CLINIC_PHOTOS: ClinicPhoto[] = [
  {
    id: "team-celebration",
    categoryKey: "team",
    categoryName: "Clinical Team",
    title: "Our Multidisciplinary Care Team",
    subtitle: "RCI-Certified Therapists & Specialists",
    description: "Our dedicated team of clinical psychologists, speech-language pathologists, and occupational therapists collaborating to provide integrated, holistic developmental care.",
    src: "/images/clinic/clinic_team_celebration.webp",
    alt: "Devine CDC multidisciplinary therapy team celebrating at the clinic",
    tags: ["RCI Certified", "Multidisciplinary", "Gurgaon Centre"]
  },
  {
    id: "occupational-therapy",
    categoryKey: "motor-sensory",
    categoryName: "Occupational Therapy",
    title: "1-on-1 Fine Motor Mastery",
    subtitle: "Precision, Dexterity & Independence",
    description: "Personalized fine-motor and bilateral coordination sessions tailored to strengthen finger dexterity, pencil grip, hand-eye coordination, and daily self-care skills.",
    src: "/images/clinic/clinic_occupational_therapy.webp",
    alt: "Therapist conducting individualized 1-on-1 fine-motor therapy session",
    tags: ["Fine Motor", "Bilateral Control", "1-on-1 Session"]
  },
  {
    id: "sensory-rangoli",
    categoryKey: "motor-sensory",
    categoryName: "Sensory Integration",
    title: "Tactile Sensory Integration",
    subtitle: "Texture Exploration & Regulation",
    description: "Structured sensory play using varied textures and collaborative floral arrangements to help children modulate sensory input, develop calming strategies, and improve joint attention.",
    src: "/images/clinic/clinic_sensory_rangoli.webp",
    alt: "Sensory play and group occupational therapy activity with floral patterns",
    tags: ["Sensory Processing", "Tactile Integration", "Joint Attention"]
  },
  {
    id: "aba-intervention",
    categoryKey: "motor-sensory",
    categoryName: "Early Intervention",
    title: "Structured Early Childhood Support",
    subtitle: "Developmental Milestones & School Readiness",
    description: "Gentle, evidence-based developmental intervention that reinforces foundational learning habits, cognitive processing, visual-spatial problem solving, and confidence.",
    src: "/images/clinic/clinic_aba_early_intervention.webp",
    alt: "Therapists providing structured early intervention and fine-motor guidance",
    tags: ["Early Intervention", "Cognitive Foundation", "Milestone Tracking"]
  },
  {
    id: "speech-expression",
    categoryKey: "speech-cognition",
    categoryName: "Speech Therapy",
    title: "Expressive Language & Articulation",
    subtitle: "Vocal Confidence & Communication",
    description: "Interactive, cheerful speech activities designed to help children expand vocabulary, master phonological articulation, and express their feelings with natural ease.",
    src: "/images/clinic/clinic_speech_expression.webp",
    alt: "Children engaged in creative speech and expressive activities at Devine CDC",
    tags: ["Speech Articulation", "Expressive Language", "Social Interaction"]
  },
  {
    id: "behavioral-learning",
    categoryKey: "speech-cognition",
    categoryName: "Behavioral Therapy",
    title: "Cognitive Focus & Collaborative Learning",
    subtitle: "Attention Span & Social Routines",
    description: "Targeted cognitive and behavioral exercises that enhance impulse regulation, task persistence, turn-taking routines, and cheerful peer collaboration.",
    src: "/images/clinic/clinic_behavioral_learning.webp",
    alt: "Interactive cognitive and behavioral learning therapy session with children",
    tags: ["Attention Span", "Behavioral Regulation", "Peer Learning"]
  },
  {
    id: "happy-children",
    categoryKey: "team",
    categoryName: "Social Milestones",
    title: "Joyful Milestones & Social Confidence",
    subtitle: "Safe, Encouraging Community",
    description: "Every developmental step achieved is a celebrated milestone. We foster an inclusive, uplifting clinic atmosphere where children feel safe, proud, and motivated to learn.",
    src: "/images/clinic/clinic_happy_children.webp",
    alt: "Happy children enjoying social activities and celebrating at Devine CDC",
    tags: ["Social Inclusion", "Confidence", "Milestone Celebration"]
  }
];

const FILTER_TABS = [
  { key: "all", label: "All Therapy Spaces" },
  { key: "motor-sensory", label: "Motor & Sensory" },
  { key: "speech-cognition", label: "Speech & Cognition" },
  { key: "team", label: "Team & Community" }
] as const;

export function ClinicGallerySection() {
  const [activeTab, setActiveTab] = useState<"all" | "motor-sensory" | "speech-cognition" | "team">("all");
  const [selectedPhoto, setSelectedPhoto] = useState<ClinicPhoto | null>(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Lock background scroll when modal is open
  useEffect(() => {
    if (selectedPhoto) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [selectedPhoto]);

  // Handle ESC key to close modal
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setSelectedPhoto(null);
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  const filteredPhotos = useMemo(() => {
    if (activeTab === "all") return CLINIC_PHOTOS;
    return CLINIC_PHOTOS.filter((photo) => photo.categoryKey === activeTab);
  }, [activeTab]);

  return (
    <section id="clinic-gallery" className="py-20 md:py-28 bg-slate-50/60 relative overflow-hidden border-t border-slate-100">
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-devine-orange/10 border border-devine-orange/20 text-devine-orange font-bold text-xs uppercase tracking-wider mb-4">
            <span className="w-2 h-2 rounded-full bg-devine-orange animate-pulse" />
            Clinical Facility & Therapy Spaces
          </div>
          <h2 className="font-heading font-black text-3xl sm:text-4xl md:text-5xl text-slate-900 tracking-tight mb-4">
            Inside <span className="text-devine-orange">Devine CDC</span> — Real Care in Action
          </h2>
          <p className="text-base sm:text-lg text-slate-600 font-medium leading-relaxed">
            Step inside our purpose-built child development centre in Gurgaon. Every therapy room is meticulously designed to offer sensory comfort, physical safety, and engaging clinical progress.
          </p>
        </div>

        {/* Category Navigation Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-12">
          {FILTER_TABS.map((tab) => {
            const isActive = activeTab === tab.key;
            return (
              <button
                key={tab.key}
                onClick={() => setActiveTab(tab.key)}
                className={`px-5 py-2.5 rounded-full text-xs sm:text-sm font-semibold transition-all duration-200 ${
                  isActive
                    ? "bg-slate-900 text-white shadow-md shadow-slate-900/10 scale-105"
                    : "bg-white text-slate-600 border border-slate-200/80 hover:border-devine-orange hover:text-devine-orange"
                }`}
              >
                {tab.label}
              </button>
            );
          })}
        </div>

        {/* Structured Clinic Cards Grid */}
        <motion.div 
          layout 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8"
        >
          <AnimatePresence>
            {filteredPhotos.map((photo, index) => {
              // When there is 1 leftover card on the last row (e.g. 7th card in 3-column grid), center it in the middle
              const isCenteredLast = index === filteredPhotos.length - 1 && filteredPhotos.length % 3 === 1;

              return (
                <motion.div
                  key={photo.id}
                  layout
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.35, delay: index * 0.05 }}
                  onClick={() => setSelectedPhoto(photo)}
                  className={`group bg-white rounded-2xl border border-slate-200/90 shadow-sm hover:shadow-xl hover:border-devine-orange/50 transition-all duration-300 overflow-hidden flex flex-col h-full cursor-pointer ${
                    isCenteredLast
                      ? "lg:col-start-2 md:col-span-2 md:max-w-md md:mx-auto w-full lg:col-span-1 lg:max-w-none"
                      : ""
                  }`}
                >
                  {/* Photo Container - Exact 4:3 Aspect Ratio across all cards */}
                  <div className="relative w-full aspect-[4/3] overflow-hidden bg-slate-100">
                    <Image
                      src={photo.src}
                      alt={photo.alt}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      className="object-cover object-center group-hover:scale-105 transition-transform duration-500 ease-out"
                      quality={92}
                    />

                    {/* Soft subtle top vignette for pill readability */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-black/30 pointer-events-none" />

                    {/* Clinical Category Badge */}
                    <div className="absolute top-3.5 left-3.5 z-10">
                      <span className="inline-flex items-center px-3 py-1 rounded-full text-[11px] font-bold bg-white/95 text-slate-800 shadow-sm backdrop-blur-sm border border-white/40">
                        {photo.categoryName}
                      </span>
                    </div>

                    {/* Zoom Indicator */}
                    <div className="absolute top-3.5 right-3.5 z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                      <span className="w-8 h-8 rounded-full bg-white/95 text-slate-800 flex items-center justify-center shadow-md backdrop-blur-sm">
                        <Maximize2 size={13} />
                      </span>
                    </div>
                  </div>

                  {/* Card Body with Clinical Insights */}
                  <div className="p-5 sm:p-6 flex flex-col flex-1 bg-white justify-between">
                    <div>
                      <p className="text-[11px] font-bold uppercase tracking-wider text-devine-orange mb-1">
                        {photo.subtitle}
                      </p>
                      <h3 className="font-heading font-bold text-lg text-slate-900 group-hover:text-devine-orange transition-colors duration-200 mb-2 leading-snug">
                        {photo.title}
                      </h3>
                      <p className="text-slate-600 text-xs sm:text-sm leading-relaxed mb-4 line-clamp-3">
                        {photo.description}
                      </p>
                    </div>

                    {/* Card Footer */}
                    <div className="pt-3 border-t border-slate-100 flex items-center justify-between">
                      <div className="flex flex-wrap gap-1.5">
                        {photo.tags.slice(0, 2).map((tag, idx) => (
                          <span key={idx} className="text-[10px] font-medium text-slate-500 bg-slate-50 border border-slate-100 px-2 py-0.5 rounded-md">
                            #{tag}
                          </span>
                        ))}
                      </div>
                      <span className="inline-flex items-center gap-1 text-xs font-semibold text-devine-orange group-hover:translate-x-0.5 transition-transform">
                        View Space <ChevronRight size={13} />
                      </span>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </motion.div>

        {/* Clinical Facility Standards Strip */}
        <div className="mt-14 pt-12 border-t border-slate-200/80">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-2xl border border-slate-200/80 shadow-sm flex items-start gap-4">
              <div className="w-10 h-10 rounded-xl bg-orange-50 border border-orange-100 text-devine-orange flex items-center justify-center shrink-0">
                <ShieldCheck size={20} />
              </div>
              <div>
                <h4 className="font-heading font-bold text-slate-900 text-sm sm:text-base mb-1">
                  Child-Proofed & Sensory-Safe
                </h4>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Every room features cushioned surfaces, non-toxic sensory apparatus, and modulated lighting to reduce sensory overload.
                </p>
              </div>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-slate-200/80 shadow-sm flex items-start gap-4">
              <div className="w-10 h-10 rounded-xl bg-emerald-50 border border-emerald-100 text-emerald-600 flex items-center justify-center shrink-0">
                <HeartHandshake size={20} />
              </div>
              <div>
                <h4 className="font-heading font-bold text-slate-900 text-sm sm:text-base mb-1">
                  RCI-Licensed Supervision
                </h4>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Therapy protocols are conducted directly by registered rehabilitation professionals following evidence-based clinical guidelines.
                </p>
              </div>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-slate-200/80 shadow-sm flex items-start gap-4">
              <div className="w-10 h-10 rounded-xl bg-blue-50 border border-blue-100 text-blue-600 flex items-center justify-center shrink-0">
                <Building2 size={20} />
              </div>
              <div>
                <h4 className="font-heading font-bold text-slate-900 text-sm sm:text-base mb-1">
                  Schedule an In-Person Centre Tour
                </h4>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Walk through our Gurgaon clinic, meet our clinical specialists, and discuss your child's tailored evaluation.
                </p>
              </div>
            </div>
          </div>

          <div className="mt-8 text-center">
            <a
              href="https://wa.me/918744097777?text=Hi%2C%20I%20would%20like%20to%20schedule%20a%20visit%20to%20Devine%20CDC%20centre%20in%20Gurgaon"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-full bg-slate-900 hover:bg-devine-orange text-white font-bold text-sm transition-all duration-300 shadow-sm hover:shadow-md"
            >
              <MapPin size={16} />
              Schedule a Centre Visit in Gurgaon
            </a>
          </div>
        </div>

      </div>

      {/* High-Resolution Lightbox Modal Portaled to Body (z-[99999] so it never collides with header or buttons) */}
      {mounted && typeof document !== "undefined" && createPortal(
        <AnimatePresence>
          {selectedPhoto && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedPhoto(null)}
              className="fixed inset-0 z-[99999] bg-slate-950/90 backdrop-blur-md flex items-center justify-center p-3 sm:p-6 lg:p-8 overflow-y-auto"
            >
              <motion.div
                initial={{ scale: 0.95, opacity: 0, y: 15 }}
                animate={{ scale: 1, opacity: 1, y: 0 }}
                exit={{ scale: 0.95, opacity: 0, y: 15 }}
                transition={{ type: "spring", damping: 25, stiffness: 300 }}
                onClick={(e) => e.stopPropagation()}
                className="relative max-w-5xl w-full bg-white rounded-2xl sm:rounded-3xl shadow-2xl overflow-hidden flex flex-col md:flex-row border border-slate-200/60 max-h-[92vh]"
              >
                {/* Close Button */}
                <button
                  onClick={() => setSelectedPhoto(null)}
                  aria-label="Close photo preview"
                  className="absolute top-3.5 right-3.5 z-30 w-10 h-10 rounded-full bg-slate-900/80 hover:bg-devine-orange text-white flex items-center justify-center transition-colors shadow-lg cursor-pointer backdrop-blur-sm"
                >
                  <X size={20} />
                </button>

                {/* Left Side: Photo Viewport - Flexible, fits landscape and portrait without collisions */}
                <div className="relative md:w-3/5 lg:w-2/3 bg-slate-950 flex items-center justify-center p-4 sm:p-6 min-h-[280px] sm:min-h-[400px] md:min-h-[550px] overflow-hidden shrink-0">
                  <div className="relative w-full h-full min-h-[280px] sm:min-h-[380px] md:min-h-[500px] flex items-center justify-center">
                    <Image
                      src={selectedPhoto.src}
                      alt={selectedPhoto.alt}
                      fill
                      priority
                      className="object-contain"
                      quality={95}
                      sizes="(max-width: 768px) 100vw, 65vw"
                    />
                  </div>
                </div>

                {/* Right Side: Clinical Context & Direct Action Panel */}
                <div className="md:w-2/5 lg:w-1/3 p-6 sm:p-8 bg-white flex flex-col justify-between overflow-y-auto max-h-[50vh] md:max-h-[92vh]">
                  <div>
                    <div className="flex flex-wrap items-center gap-2 mb-3">
                      <span className="px-3 py-1 rounded-full text-xs font-bold text-devine-orange bg-devine-orange/10 border border-devine-orange/20">
                        {selectedPhoto.categoryName}
                      </span>
                    </div>

                    <p className="text-[11px] font-bold uppercase tracking-wider text-slate-400 mb-1">
                      {selectedPhoto.subtitle}
                    </p>

                    <h3 className="font-heading font-bold text-xl sm:text-2xl text-slate-900 mb-3 leading-snug">
                      {selectedPhoto.title}
                    </h3>

                    <p className="text-slate-600 text-sm sm:text-base leading-relaxed mb-6">
                      {selectedPhoto.description}
                    </p>

                    <div className="mb-6">
                      <p className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">
                        Clinical Focus Areas
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {selectedPhoto.tags.map((tag, idx) => (
                          <span key={idx} className="text-xs font-semibold text-slate-600 bg-slate-100 border border-slate-200/60 px-3 py-1 rounded-lg">
                            #{tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Consultation / Visit Actions */}
                  <div className="pt-5 border-t border-slate-100 space-y-3 shrink-0">
                    <a
                      href={`https://wa.me/918744097777?text=Hi%2C%20I%20saw%20the%20${encodeURIComponent(selectedPhoto.title)}%20space%20at%20Devine%20CDC%20and%20would%20like%20to%20consult%20your%20specialists.`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-devine-orange hover:bg-devine-orange/90 text-white font-bold text-sm transition-all shadow-md hover:shadow-lg shadow-devine-orange/20"
                    >
                      <MessageCircle size={16} />
                      Consult Our Specialists
                    </a>

                    <a
                      href="tel:+918744097777"
                      className="w-full inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-800 font-semibold text-xs transition-colors"
                    >
                      <Phone size={14} />
                      Call Clinic: +91 87440 97777
                    </a>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>,
        document.body
      )}
    </section>
  );
}

