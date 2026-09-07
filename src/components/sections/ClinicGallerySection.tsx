"use client";

import { useState, useEffect, useCallback } from "react";
import { createPortal } from "react-dom";
import { motion, AnimatePresence, type Variants } from "framer-motion";
import Image from "next/image";
import { ChevronRight, ChevronLeft, Maximize2, X, ShieldCheck, HeartHandshake, Building2, MapPin } from "lucide-react";

const CLINIC_PHOTOS = [
  {
    id: "team-celebration",
    src: "/images/clinic/clinic_team_celebration.webp",
    alt: "Devine CDC multidisciplinary therapy team celebrating at the clinic",
  },
  {
    id: "occupational-therapy",
    src: "/images/clinic/clinic_occupational_therapy.webp",
    alt: "Therapist conducting individualized 1-on-1 fine-motor therapy session",
  },
  {
    id: "sensory-rangoli",
    src: "/images/clinic/clinic_sensory_rangoli.webp",
    alt: "Sensory play and group occupational therapy activity with floral patterns",
  },
  {
    id: "aba-intervention",
    src: "/images/clinic/clinic_aba_early_intervention.webp",
    alt: "Therapists providing structured early intervention and fine-motor guidance",
  },
  {
    id: "speech-expression",
    src: "/images/clinic/clinic_speech_expression.webp",
    alt: "Children engaged in creative speech and expressive activities at Devine CDC",
  },
  {
    id: "behavioral-learning",
    src: "/images/clinic/clinic_behavioral_learning.webp",
    alt: "Interactive cognitive and behavioral learning therapy session with children",
  },
  {
    id: "happy-children",
    src: "/images/clinic/clinic_happy_children.webp",
    alt: "Happy children enjoying social activities and celebrating at Devine CDC",
  },
];

const slideVariants: Variants = {
  enter: (direction: number) => ({
    x: direction > 0 ? 300 : -300,
    opacity: 0,
    scale: 0.94,
  }),
  center: {
    zIndex: 1,
    x: 0,
    opacity: 1,
    scale: 1,
    transition: {
      x: { type: "spring" as const, stiffness: 350, damping: 32 },
      opacity: { duration: 0.25 },
      scale: { duration: 0.25 },
    },
  },
  exit: (direction: number) => ({
    zIndex: 0,
    x: direction < 0 ? 300 : -300,
    opacity: 0,
    scale: 0.94,
    transition: {
      x: { type: "spring" as const, stiffness: 350, damping: 32 },
      opacity: { duration: 0.25 },
      scale: { duration: 0.25 },
    },
  }),
};

export function ClinicGallerySection() {
  const [[page, direction], setPage] = useState([0, 0]);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const [isPaused, setIsPaused] = useState(false);

  const totalPhotos = CLINIC_PHOTOS.length;
  const imageIndex = ((page % totalPhotos) + totalPhotos) % totalPhotos;
  const currentPhoto = CLINIC_PHOTOS[imageIndex];

  const prevIndex = (imageIndex - 1 + totalPhotos) % totalPhotos;
  const nextIndex = (imageIndex + 1) % totalPhotos;

  useEffect(() => {
    setMounted(true);
  }, []);

  const paginate = useCallback((newDirection: number) => {
    setPage(([prevPage]) => [prevPage + newDirection, newDirection]);
  }, []);

  // Lock background scroll when lightbox is open
  useEffect(() => {
    if (lightboxOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [lightboxOpen]);

  // Handle ESC key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setLightboxOpen(false);
      if (e.key === "ArrowRight") paginate(1);
      if (e.key === "ArrowLeft") paginate(-1);
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [paginate]);

  // Subtle auto-advance every 5 seconds (pauses on hover or when lightbox is active)
  useEffect(() => {
    if (isPaused || lightboxOpen) return;
    const timer = setInterval(() => {
      paginate(1);
    }, 5000);
    return () => clearInterval(timer);
  }, [paginate, isPaused, lightboxOpen]);

  return (
    <section id="clinic-gallery" className="py-14 md:py-20 bg-slate-50/70 relative overflow-hidden border-t border-slate-100 scroll-mt-20 md:scroll-mt-24">
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-8 md:mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-devine-orange/10 border border-devine-orange/20 text-devine-orange font-bold text-xs uppercase tracking-wider mb-3">
            <span className="w-2 h-2 rounded-full bg-devine-orange animate-pulse" />
            Clinical Facility & Therapy Spaces
          </div>
          <h2 className="font-heading font-black text-3xl sm:text-4xl md:text-5xl text-slate-900 tracking-tight mb-2">
            Inside <span className="text-devine-orange">Devine CDC</span>
          </h2>
          <p className="text-sm sm:text-base text-slate-600 font-medium leading-relaxed">
            A visual glimpse into our child-friendly spaces, specialized therapy rooms, and certified clinical care.
          </p>
        </div>

        {/* Clean Pure Image Cards Showcase */}
        <div 
          className="relative max-w-5xl mx-auto flex items-center justify-center gap-4 sm:gap-6"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          onTouchStart={() => setIsPaused(true)}
          onTouchEnd={() => setIsPaused(false)}
        >
          {/* Left Peeking Card (Desktop) */}
          <div 
            onClick={() => paginate(-1)}
            aria-label="Previous clinic photo"
            className="hidden md:block w-36 lg:w-48 aspect-[4/3] rounded-3xl overflow-hidden opacity-40 hover:opacity-75 scale-90 hover:scale-95 transition-all cursor-pointer shadow-md shrink-0 relative bg-slate-200"
          >
            <Image
              src={CLINIC_PHOTOS[prevIndex].src}
              alt={CLINIC_PHOTOS[prevIndex].alt}
              fill
              className="object-cover object-center"
              sizes="200px"
              quality={80}
            />
          </div>

          {/* Main Active Card in Front */}
          <div className="relative w-full max-w-xl sm:max-w-2xl lg:max-w-3xl aspect-[4/3] sm:aspect-[16/10] rounded-3xl sm:rounded-[2rem] overflow-hidden shadow-2xl border-4 border-white bg-slate-900 shrink-0">
            <AnimatePresence initial={false} custom={direction} mode="popLayout">
              <motion.div
                key={page}
                custom={direction}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                drag="x"
                dragConstraints={{ left: 0, right: 0 }}
                dragElastic={0.8}
                onDragEnd={(_, { offset }) => {
                  if (offset.x < -60) {
                    paginate(1);
                  } else if (offset.x > 60) {
                    paginate(-1);
                  }
                }}
                onClick={() => setLightboxOpen(true)}
                className="absolute inset-0 w-full h-full cursor-grab active:cursor-grabbing overflow-hidden"
              >
                <Image
                  src={currentPhoto.src}
                  alt={currentPhoto.alt}
                  fill
                  priority
                  className="object-cover object-center pointer-events-none select-none"
                  sizes="(max-width: 768px) 100vw, 768px"
                  quality={95}
                />

                {/* Subtle Expand Button on hover/tap */}
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    setLightboxOpen(true);
                  }}
                  aria-label="View fullscreen photo"
                  className="absolute top-4 right-4 z-20 w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-slate-900/60 hover:bg-devine-orange text-white flex items-center justify-center transition-all shadow-md backdrop-blur-sm cursor-pointer"
                >
                  <Maximize2 size={16} />
                </button>
              </motion.div>
            </AnimatePresence>

            {/* Left Chevron Button */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                paginate(-1);
              }}
              aria-label="Previous clinic photo"
              className="absolute left-3 sm:left-4 top-1/2 -translate-y-1/2 z-20 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white/90 text-slate-800 shadow-xl border border-slate-200/80 hover:bg-devine-orange hover:text-white hover:border-devine-orange hover:scale-110 active:scale-95 transition-all flex items-center justify-center cursor-pointer backdrop-blur-md"
            >
              <ChevronLeft size={22} />
            </button>

            {/* Right Chevron Button */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                paginate(1);
              }}
              aria-label="Next clinic photo"
              className="absolute right-3 sm:right-4 top-1/2 -translate-y-1/2 z-20 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white/90 text-slate-800 shadow-xl border border-slate-200/80 hover:bg-devine-orange hover:text-white hover:border-devine-orange hover:scale-110 active:scale-95 transition-all flex items-center justify-center cursor-pointer backdrop-blur-md"
            >
              <ChevronRight size={22} />
            </button>
          </div>

          {/* Right Peeking Card (Desktop) */}
          <div 
            onClick={() => paginate(1)}
            aria-label="Next clinic photo"
            className="hidden md:block w-36 lg:w-48 aspect-[4/3] rounded-3xl overflow-hidden opacity-40 hover:opacity-75 scale-90 hover:scale-95 transition-all cursor-pointer shadow-md shrink-0 relative bg-slate-200"
          >
            <Image
              src={CLINIC_PHOTOS[nextIndex].src}
              alt={CLINIC_PHOTOS[nextIndex].alt}
              fill
              className="object-cover object-center"
              sizes="200px"
              quality={80}
            />
          </div>
        </div>

        {/* Clean Indicator Dots (Exactly like Client's Video) */}
        <div className="mt-6 sm:mt-8 flex items-center justify-center gap-2">
          {CLINIC_PHOTOS.map((_, i) => {
            const isActive = i === imageIndex;
            return (
              <button
                key={i}
                onClick={() => setPage([i, i > imageIndex ? 1 : -1])}
                aria-label={`Go to slide ${i + 1}`}
                className={`h-2.5 rounded-full transition-all duration-300 cursor-pointer ${
                  isActive
                    ? "w-8 bg-devine-orange shadow-sm shadow-devine-orange/30"
                    : "w-2.5 bg-slate-300 hover:bg-slate-400"
                }`}
              />
            );
          })}
        </div>

        {/* Compact Clinical Facility Standards Strip */}
        <div className="mt-12 pt-8 border-t border-slate-200/80 max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-5">
            <div className="bg-white p-4 sm:p-5 rounded-2xl border border-slate-200/80 shadow-sm flex items-start gap-3.5">
              <div className="w-10 h-10 rounded-xl bg-orange-50 border border-orange-100 text-devine-orange flex items-center justify-center shrink-0">
                <ShieldCheck size={20} />
              </div>
              <div>
                <h4 className="font-heading font-bold text-slate-900 text-sm mb-0.5">
                  Child-Proofed & Sensory-Safe
                </h4>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Cushioned surfaces, non-toxic sensory apparatus, and soft lighting.
                </p>
              </div>
            </div>

            <div className="bg-white p-4 sm:p-5 rounded-2xl border border-slate-200/80 shadow-sm flex items-start gap-3.5">
              <div className="w-10 h-10 rounded-xl bg-emerald-50 border border-emerald-100 text-emerald-600 flex items-center justify-center shrink-0">
                <HeartHandshake size={20} />
              </div>
              <div>
                <h4 className="font-heading font-bold text-slate-900 text-sm mb-0.5">
                  RCI-Licensed Supervision
                </h4>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Sessions led directly by registered clinical professionals.
                </p>
              </div>
            </div>

            <div className="bg-white p-4 sm:p-5 rounded-2xl border border-slate-200/80 shadow-sm flex items-start gap-3.5">
              <div className="w-10 h-10 rounded-xl bg-blue-50 border border-blue-100 text-blue-600 flex items-center justify-center shrink-0">
                <Building2 size={20} />
              </div>
              <div>
                <h4 className="font-heading font-bold text-slate-900 text-sm mb-0.5">
                  In-Person Centre Visits
                </h4>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Walk through our Gurgaon clinic and meet our specialists.
                </p>
              </div>
            </div>
          </div>

          <div className="mt-8 text-center">
            <a
              href="https://wa.me/918744097777?text=Hi%2C%20I%20would%20like%20to%20schedule%20a%20visit%20to%20Devine%20CDC%20centre%20in%20Gurgaon"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-full bg-slate-900 hover:bg-devine-orange text-white font-bold text-sm transition-all duration-300 shadow-sm hover:shadow-md cursor-pointer"
            >
              <MapPin size={16} />
              Schedule a Centre Visit in Gurgaon
            </a>
          </div>
        </div>

      </div>

      {/* Fullscreen Lightbox Modal Portaled to Body (z-[99999]) */}
      {mounted && typeof document !== "undefined" && createPortal(
        <AnimatePresence>
          {lightboxOpen && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setLightboxOpen(false)}
              className="fixed inset-0 z-[99999] bg-slate-950/95 backdrop-blur-md flex items-center justify-center p-4 sm:p-6"
            >
              <motion.div
                initial={{ scale: 0.94, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.94, opacity: 0 }}
                transition={{ type: "spring", damping: 25, stiffness: 300 }}
                onClick={(e) => e.stopPropagation()}
                className="relative max-w-5xl w-full aspect-[4/3] sm:aspect-[16/10] max-h-[88vh] rounded-3xl overflow-hidden shadow-2xl flex items-center justify-center bg-black"
              >
                {/* Close Button */}
                <button
                  onClick={() => setLightboxOpen(false)}
                  aria-label="Close fullscreen view"
                  className="absolute top-4 right-4 z-30 w-10 h-10 rounded-full bg-slate-900/80 hover:bg-devine-orange text-white flex items-center justify-center transition-colors shadow-lg cursor-pointer backdrop-blur-sm"
                >
                  <X size={20} />
                </button>

                {/* Lightbox Image */}
                <Image
                  src={currentPhoto.src}
                  alt={currentPhoto.alt}
                  fill
                  priority
                  className="object-contain"
                  quality={98}
                  sizes="100vw"
                />

                {/* Lightbox Prev / Next */}
                <button
                  onClick={() => paginate(-1)}
                  aria-label="Previous photo"
                  className="absolute left-4 top-1/2 -translate-y-1/2 z-30 w-11 h-11 rounded-full bg-white/90 text-slate-800 flex items-center justify-center shadow-lg hover:bg-devine-orange hover:text-white transition-all cursor-pointer"
                >
                  <ChevronLeft size={22} />
                </button>

                <button
                  onClick={() => paginate(1)}
                  aria-label="Next photo"
                  className="absolute right-4 top-1/2 -translate-y-1/2 z-30 w-11 h-11 rounded-full bg-white/90 text-slate-800 flex items-center justify-center shadow-lg hover:bg-devine-orange hover:text-white transition-all cursor-pointer"
                >
                  <ChevronRight size={22} />
                </button>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>,
        document.body
      )}
    </section>
  );
}



