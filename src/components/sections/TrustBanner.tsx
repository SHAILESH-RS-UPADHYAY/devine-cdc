"use client";

import { motion } from "framer-motion";
import { ShieldCheck, Stethoscope, Users, Award, HeartHandshake, Star } from "lucide-react";

const TRUST_ITEMS = [
  { label: "RCI Certified Professionals", icon: ShieldCheck },
  { label: "Evidence-Based Therapy", icon: Stethoscope },
  { label: "5+ Years Experience", icon: Award },
  { label: "Trusted by 500+ Parents", icon: Users },
  { label: "Compassionate Care", icon: HeartHandshake },
  { label: "Top Rated in Gurgaon", icon: Star },
];

export function TrustBanner() {
  return (
    <div className="w-full bg-devine-purple text-white py-4 overflow-hidden border-y border-devine-purple/20">
      <div className="relative flex w-full flex-col items-center justify-center overflow-hidden">
        <div className="flex w-full overflow-hidden">
          <motion.div
            className="flex whitespace-nowrap min-w-max"
            animate={{
              x: ["0%", "-50%"],
            }}
            transition={{
              duration: 30,
              ease: "linear",
              repeat: Infinity,
            }}
          >
            {/* Double the array to create a seamless loop */}
            {[...TRUST_ITEMS, ...TRUST_ITEMS, ...TRUST_ITEMS].map((item, index) => {
              const Icon = item.icon;
              return (
                <div 
                  key={index} 
                  className="flex items-center gap-3 px-8 sm:px-12 opacity-90 hover:opacity-100 transition-opacity"
                >
                  <Icon className="w-5 h-5 sm:w-6 sm:h-6 text-devine-pink" />
                  <span className="font-heading font-semibold text-sm sm:text-base tracking-wide uppercase">
                    {item.label}
                  </span>
                  {/* Decorative dot separator */}
                  <div className="w-1.5 h-1.5 rounded-full bg-white/30 ml-8 sm:ml-12" />
                </div>
              );
            })}
          </motion.div>
        </div>
      </div>
    </div>
  );
}
