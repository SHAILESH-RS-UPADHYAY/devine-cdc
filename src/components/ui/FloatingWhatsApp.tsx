"use client";

import { WHATSAPP_URL } from "@/lib/constants";
import { motion } from "framer-motion";
import Link from "next/link";
import { MessageCircle } from "lucide-react";

export function FloatingWhatsApp() {
  return (
    <div className="fixed bottom-6 right-6 z-50">
      <Link href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
        <motion.div
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="relative flex h-14 w-14 sm:h-16 sm:w-16 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg hover:shadow-xl transition-shadow"
        >
          {/* Pulsing rings */}
          <div className="absolute inset-0 rounded-full border-2 border-[#25D366] animate-ping opacity-75" style={{ animationDuration: '3s' }} />
          <div className="absolute inset-[-4px] rounded-full border border-[#25D366] animate-ping opacity-50" style={{ animationDuration: '3s', animationDelay: '0.5s' }} />
          
          {/* Custom WhatsApp Icon using SVG to be precise, or just use Lucide MessageCircle */}
          <svg
            viewBox="0 0 24 24"
            width="32"
            height="32"
            stroke="currentColor"
            strokeWidth="2"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="w-7 h-7 sm:w-8 sm:h-8 fill-current"
          >
            <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path>
          </svg>
        </motion.div>
      </Link>
    </div>
  );
}
