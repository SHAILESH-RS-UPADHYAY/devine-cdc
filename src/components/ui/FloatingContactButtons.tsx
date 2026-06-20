"use client";

import { WHATSAPP_URL, CONTACT } from "@/lib/constants";
import { motion } from "framer-motion";
import Link from "next/link";
import { Phone } from "lucide-react";

export function FloatingContactButtons() {
  return (
    <div className="fixed bottom-4 right-4 md:bottom-6 md:right-6 z-50 flex flex-col items-center gap-3">
      {/* WhatsApp Button */}
      <Link href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
        <motion.div
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="relative flex h-12 w-12 sm:h-14 sm:w-14 md:h-16 md:w-16 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg hover:shadow-xl transition-shadow"
        >
          {/* Pulsing rings */}
          <div className="absolute inset-0 rounded-full border-2 border-[#25D366] animate-ping opacity-75" style={{ animationDuration: '3s' }} />
          <div className="absolute inset-[-4px] rounded-full border border-[#25D366] animate-ping opacity-50" style={{ animationDuration: '3s', animationDelay: '0.5s' }} />
          
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            width="32"
            height="32"
            fill="currentColor"
            className="w-7 h-7 sm:w-8 sm:h-8 relative z-10"
          >
            <path d="M12.031 0C5.385 0 0 5.385 0 12.031c0 2.115.549 4.185 1.593 6L.045 24l6.113-1.603c1.764.981 3.738 1.498 5.873 1.498 6.646 0 12.031-5.385 12.031-12.031S18.677 0 12.031 0zm0 21.916c-1.849 0-3.664-.497-5.25-1.439l-.377-.223-3.905 1.024 1.042-3.807-.245-.39A9.97 9.97 0 0 1 2.015 12.03C2.015 6.505 6.505 2.015 12.03 2.015c5.525 0 10.016 4.49 10.016 10.016 0 5.526-4.491 10.016-10.016 10.016zm5.496-7.518c-.301-.151-1.782-.88-2.059-.981-.277-.1-.478-.151-.679.151-.201.302-.779.981-.954 1.182-.176.201-.352.226-.653.075-.302-.151-1.272-.469-2.423-1.498-.895-.801-1.499-1.791-1.675-2.093-.176-.302-.019-.465.132-.616.136-.136.302-.352.453-.528.151-.176.201-.302.302-.503.101-.201.05-.377-.025-.528-.075-.151-.679-1.635-.93-2.239-.245-.591-.494-.51-.679-.52-.176-.01-.377-.01-.578-.01-.201 0-.528.075-.804.377-.276.302-1.055 1.031-1.055 2.515 0 1.484 1.081 2.918 1.232 3.119.151.201 2.126 3.245 5.148 4.55.719.311 1.28.497 1.718.636.721.229 1.378.197 1.894.119.576-.087 1.782-.729 2.033-1.434.251-.705.251-1.309.176-1.434-.075-.126-.276-.201-.577-.352z"/>
          </svg>
        </motion.div>
      </Link>

      {/* Call Button */}
      <a href={`tel:${CONTACT.phone.replace(/\s+/g, '')}`} aria-label="Call Us">
        <motion.div
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="relative flex h-12 w-12 sm:h-14 sm:w-14 md:h-16 md:w-16 items-center justify-center rounded-full bg-blue-600 text-white shadow-lg hover:shadow-xl transition-shadow"
        >
          {/* Pulsing rings */}
          <div className="absolute inset-0 rounded-full border-2 border-blue-600 animate-ping opacity-75" style={{ animationDuration: '3s' }} />
          <div className="absolute inset-[-4px] rounded-full border border-blue-600 animate-ping opacity-50" style={{ animationDuration: '3s', animationDelay: '0.5s' }} />
          
          <Phone className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 relative z-10" />
        </motion.div>
      </a>
    </div>
  );
}
