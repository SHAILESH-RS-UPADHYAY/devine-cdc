"use client";

import { WHATSAPP_URL, CONTACT } from "@/lib/constants";
import { motion } from "framer-motion";

import { Phone } from "lucide-react";

export function FloatingContactButtons() {
  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-center gap-4">
      {/* WhatsApp Button */}
      <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" aria-label="Chat on WhatsApp">
        <motion.div
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="relative flex h-12 w-12 md:h-14 md:w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg shadow-[#25D366]/30 hover:shadow-xl transition-all"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="w-6 h-6 md:w-7 md:h-7"
          >
            <path d="M12.031 0C5.385 0 0 5.385 0 12.031c0 2.115.549 4.185 1.593 6L.045 24l6.113-1.603c1.764.981 3.738 1.498 5.873 1.498 6.646 0 12.031-5.385 12.031-12.031S18.677 0 12.031 0zm0 21.916c-1.849 0-3.664-.497-5.25-1.439l-.377-.223-3.905 1.024 1.042-3.807-.245-.39A9.97 9.97 0 0 1 2.015 12.03C2.015 6.505 6.505 2.015 12.03 2.015c5.525 0 10.016 4.49 10.016 10.016 0 5.526-4.491 10.016-10.016 10.016zm5.496-7.518c-.301-.151-1.782-.88-2.059-.981-.277-.1-.478-.151-.679.151-.201.302-.779.981-.954 1.182-.176.201-.352.226-.653.075-.302-.151-1.272-.469-2.423-1.498-.895-.801-1.499-1.791-1.675-2.093-.176-.302-.019-.465.132-.616.136-.136.302-.352.453-.528.151-.176.201-.302.302-.503.101-.201.05-.377-.025-.528-.075-.151-.679-1.635-.93-2.239-.245-.591-.494-.51-.679-.52-.176-.01-.377-.01-.578-.01-.201 0-.528.075-.804.377-.276.302-1.055 1.031-1.055 2.515 0 1.484 1.081 2.918 1.232 3.119.151.201 2.126 3.245 5.148 4.55.719.311 1.28.497 1.718.636.721.229 1.378.197 1.894.119.576-.087 1.782-.729 2.033-1.434.251-.705.251-1.309.176-1.434-.075-.126-.276-.201-.577-.352z"/>
          </svg>
        </motion.div>
      </a>

      {/* Call Button */}
      <a href={`tel:${CONTACT.phone.replace(/\s+/g, '')}`} aria-label="Call Us">
        <motion.div
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="relative flex h-12 w-12 md:h-14 md:w-14 items-center justify-center rounded-full bg-[#1e40af] text-white shadow-lg shadow-[#1e40af]/30 hover:shadow-xl transition-all"
        >
          <Phone className="w-5 h-5 md:w-6 md:h-6" />
        </motion.div>
      </a>
    </div>
  );
}
