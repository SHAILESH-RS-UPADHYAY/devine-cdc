"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { DropLetterTagline } from "@/components/ui/DropLetterTagline";
import { Heart, Sparkles, ShieldCheck } from "lucide-react";
import { useRef } from "react";

export function SafeSpaceDivider() {
  const containerRef = useRef<HTMLDivElement>(null);
  
  // Create a subtle parallax effect for the background shapes
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });
  
  const yPos1 = useTransform(scrollYProgress, [0, 1], [100, -100]);
  const yPos2 = useTransform(scrollYProgress, [0, 1], [-150, 150]);

  return (
    <section ref={containerRef} className="relative py-24 w-full overflow-hidden group">
      
      {/* Real Image Background with Overlays */}
      <div className="absolute inset-0 overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-transform duration-1000 group-hover:scale-105"
          style={{ backgroundImage: "url('/images/children_therapy_laughing.png')" }}
        />
        {/* Adjusted dark overlay for readability without making text background blurry */}
        <div className="absolute inset-0 bg-slate-900/70" />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900/90 via-slate-900/60 to-slate-900/80" />
        
        {/* Subtle animated geometric rings for the "same animation" feel */}
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 80, repeat: Infinity, ease: "linear" }}
          className="absolute top-[-50%] right-[-20%] w-[120%] max-w-[1000px] aspect-square rounded-full border border-white/10 pointer-events-none"
        />
        <motion.div
          animate={{ rotate: -360 }}
          transition={{ duration: 120, repeat: Infinity, ease: "linear" }}
          className="absolute bottom-[-50%] left-[-20%] w-[100%] max-w-[800px] aspect-square rounded-full border border-white/10 pointer-events-none"
        />
        
        {/* Soft highlight */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/40 pointer-events-none" />
      </div>

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-20">
          
          {/* Left Text Side - Left Aligned */}
          <div className="flex-1 flex flex-col items-start text-left w-full">
            <motion.div
              initial={{ scale: 0, opacity: 0, rotate: -45 }}
              whileInView={{ scale: 1, opacity: 1, rotate: 0 }}
              viewport={{ once: false, amount: 0.3 }}
              transition={{ type: "spring", stiffness: 200, damping: 15 }}
              className="inline-flex items-center justify-center p-3 sm:p-4 rounded-2xl bg-white/20 backdrop-blur-md border border-white/30 shadow-[0_8px_30px_rgba(0,0,0,0.05)] mb-8"
            >
              <Heart className="w-6 h-6 sm:w-8 sm:h-8 text-white" fill="currentColor" />
            </motion.div>

            <div className="w-full sm:w-auto -ml-1 sm:ml-0 overflow-visible">
              <DropLetterTagline 
                variant="divider" 
                startDelay={0.2}
                className="mb-6 justify-start w-full"
              />
            </div>
            
            <motion.p
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: false, amount: 0.5 }}
              transition={{ delay: 0.8, duration: 0.6 }}
              className="text-white/95 text-lg sm:text-xl md:text-2xl font-medium tracking-wide max-w-xl leading-relaxed drop-shadow-sm"
            >
              Where every child is celebrated, supported, and empowered to grow in a sensory-friendly, welcoming environment.
            </motion.p>
            
            <motion.div
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: false, amount: 0.5 }}
              transition={{ delay: 1.2, duration: 0.8, ease: "easeOut" }}
              className="w-24 h-1.5 mt-10 rounded-full bg-white/40 shadow-sm origin-left"
            />
          </div>

          {/* Right Visual / Feature Side */}
          <div className="flex flex-col gap-5 w-full lg:max-w-md">
            
            {/* Feature 1 */}
            <motion.div
              initial={{ opacity: 0, y: 30, x: 20 }}
              whileInView={{ opacity: 1, y: 0, x: 0 }}
              viewport={{ once: false, amount: 0.5 }}
              whileHover={{ scale: 1.02, x: -5 }}
              transition={{ delay: 1, duration: 0.6, type: "spring", stiffness: 100 }}
              className="bg-white/10 backdrop-blur-md border border-white/20 p-5 sm:p-6 rounded-[2rem] shadow-[0_8px_30px_rgba(0,0,0,0.08)] flex items-start gap-4 transition-all hover:bg-white/15"
            >
              <div className="p-3 bg-white/20 rounded-xl shadow-inner shrink-0">
                <Sparkles className="w-6 h-6 text-white" />
              </div>
              <div>
                <h4 className="text-white font-bold text-xl mb-1.5">Sensory-Friendly</h4>
                <p className="text-white/80 text-sm leading-relaxed">Calming aesthetics, noise-reduction features, and safe materials everywhere.</p>
              </div>
            </motion.div>

            {/* Feature 2 */}
            <motion.div
              initial={{ opacity: 0, y: 30, x: 20 }}
              whileInView={{ opacity: 1, y: 0, x: 0 }}
              viewport={{ once: false, amount: 0.5 }}
              whileHover={{ scale: 1.02, x: -5 }}
              transition={{ delay: 1.2, duration: 0.6, type: "spring", stiffness: 100 }}
              className="bg-white/10 backdrop-blur-md border border-white/20 p-5 sm:p-6 rounded-[2rem] shadow-[0_8px_30px_rgba(0,0,0,0.08)] flex items-start gap-4 lg:ml-6 transition-all hover:bg-white/15"
            >
              <div className="p-3 bg-white/20 rounded-xl shadow-inner shrink-0">
                <ShieldCheck className="w-6 h-6 text-white" />
              </div>
              <div>
                <h4 className="text-white font-bold text-xl mb-1.5">Child-Safe Design</h4>
                <p className="text-white/80 text-sm leading-relaxed">Rounded edges and securely supervised environments for absolute peace of mind.</p>
              </div>
            </motion.div>

          </div>

        </div>
      </div>
    </section>
  );
}
