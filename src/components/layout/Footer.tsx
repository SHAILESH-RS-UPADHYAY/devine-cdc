"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { CONTACT, SITE_CONFIG } from "@/lib/constants";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-900 border-t border-slate-800 text-slate-400 py-10 mt-auto">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 md:gap-6">
          
          {/* Logo & Brand */}
          <div className="flex flex-col md:flex-row items-center md:items-start gap-4 text-center md:text-left">
            <Link 
              href="/" 
              className="inline-block"
              onClick={(e) => {
                if (window.location.pathname === "/") {
                  e.preventDefault();
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }
              }}
            >
              <motion.div
                animate={{ y: [0, -15, 0], rotate: [-2, 2, -2] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="w-24 h-24 rounded-full overflow-hidden flex items-center justify-center bg-white shadow-[0_10px_30px_rgba(255,105,180,0.5)] border-4 border-devine-pink p-1.5 mx-auto md:mx-0 relative group"
              >
                <div className="absolute inset-0 bg-gradient-to-tr from-devine-pink to-devine-yellow opacity-0 group-hover:opacity-20 transition-opacity rounded-full"></div>
                <div className="w-full h-full rounded-full overflow-hidden bg-white flex items-center justify-center">
                  <Image 
                    src="/images/logo-textless.png" 
                    alt="Devine CDC Logo" 
                    width={80} 
                    height={80} 
                    className="w-full h-full object-contain drop-shadow-md"
                  />
                </div>
              </motion.div>
            </Link>
            <div className="mt-2 md:mt-0">
              <h3 className="text-white font-heading font-bold text-xl">{SITE_CONFIG.name}</h3>
              <p className="text-sm text-slate-400 max-w-xs mx-auto md:mx-0">{SITE_CONFIG.description}</p>
            </div>
          </div>

          {/* Links */}
          <div className="flex flex-wrap items-center justify-center md:justify-end gap-x-8 gap-y-4 text-sm font-medium">
            <Link 
              href="/" 
              className="hover:text-white transition-colors"
              onClick={(e) => {
                if (window.location.pathname === "/") {
                  e.preventDefault();
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }
              }}
            >
              Home
            </Link>
            <Link href="/privacy-policy" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link href="/terms-of-service" className="hover:text-white transition-colors">Terms of Service</Link>
            
            <Link 
              href={CONTACT.instagram} 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-devine-pink hover:text-white transition-colors"
            >
              <svg viewBox="0 0 24 24" width="18" height="18" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
              <span>{CONTACT.instagramHandle}</span>
            </Link>
          </div>
        </div>
        
        {/* Copyright */}
        <div className="mt-8 pt-8 border-t border-slate-800/50 text-center text-sm text-slate-500">
          <p>© {currentYear} {SITE_CONFIG.name}. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
