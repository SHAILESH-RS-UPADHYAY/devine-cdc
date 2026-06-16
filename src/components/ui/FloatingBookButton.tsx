"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { CalendarCheck } from "lucide-react";

export function FloatingBookButton() {
  return (
    <div className="fixed bottom-6 left-6 z-50">
      <Link href="/#book-appointment">
        <motion.div
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="flex items-center gap-2 px-5 py-3 md:px-6 md:py-4 rounded-full bg-gradient-to-r from-devine-purple to-devine-pink text-white font-bold shadow-[0_8px_30px_rgba(155,89,182,0.4)] hover:shadow-[0_12px_40px_rgba(155,89,182,0.6)] border border-white/20 group"
        >
          <CalendarCheck size={20} className="group-hover:animate-bounce" />
          <span className="text-sm md:text-base">Book Assessment</span>
        </motion.div>
      </Link>
    </div>
  );
}
