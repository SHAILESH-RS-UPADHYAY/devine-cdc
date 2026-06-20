"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { CalendarCheck } from "lucide-react";

export function FloatingBookButton() {
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (window.location.pathname === '/') {
      e.preventDefault();
      const element = document.getElementById('book-appointment');
      if (element) {
        const y = element.getBoundingClientRect().top + window.scrollY - 100;
        window.scrollTo({ top: y, behavior: 'smooth' });
        window.history.pushState(null, '', '/#book-appointment');
      }
    }
  };

  return (
    <div className="fixed bottom-4 left-4 md:bottom-6 md:left-6 z-50 flex items-center">
      <Link href="/#book-appointment" onClick={handleClick}>
        <motion.div
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="relative flex items-center gap-2 px-4 py-3 md:px-6 md:py-4 rounded-full bg-gradient-to-r from-devine-orange to-devine-peach text-white font-bold shadow-[0_8px_30px_rgba(232,119,58,0.4)] hover:shadow-[0_12px_40px_rgba(232,119,58,0.6)] border border-white/20 group"
        >
          {/* Pulsing rings for Book Assessment */}
          <div className="absolute inset-0 rounded-full border-2 border-devine-orange animate-ping opacity-75" style={{ animationDuration: '3s' }} />
          <div className="absolute inset-[-4px] rounded-full border border-devine-orange animate-ping opacity-50" style={{ animationDuration: '3s', animationDelay: '0.5s' }} />
          
          <CalendarCheck size={20} className="relative z-10 group-hover:animate-bounce" />
          <span className="relative z-10 hidden sm:inline text-sm md:text-base">Book Assessment</span>
        </motion.div>
      </Link>
    </div>
  );
}
