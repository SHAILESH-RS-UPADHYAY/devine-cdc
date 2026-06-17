"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Phone } from "lucide-react";
import Image from "next/image";
import { SITE_CONFIG, CONTACT, NAV_LINKS } from "@/lib/constants";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { DropLetterTagline } from "@/components/ui/DropLetterTagline";

const InstagramIcon = ({ size = 24 }: { size?: number }) => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    width={size} 
    height={size} 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2" 
    strokeLinecap="round" 
    strokeLinejoin="round"
  >
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
  </svg>
);

// Local NAV_LINKS removed, using global NAV_LINKS from constants

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ type: "spring", stiffness: 100, damping: 20 }}
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
          isScrolled 
            ? "py-2 bg-gradient-to-r from-devine-purple/35 via-devine-purple-dark/40 to-devine-purple/35 backdrop-blur-xl shadow-[0_8px_32px_rgba(0,0,0,0.15)] border-b border-white/10" 
            : "py-3 bg-gradient-to-r from-devine-purple/20 via-devine-purple-dark/25 to-devine-purple/20 backdrop-blur-lg border-b border-white/5"
        )}
      >
        <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
          {/* Logo */}
          <Link 
            href="/" 
            className="relative z-50 flex items-center gap-2 sm:gap-3"
            onClick={(e) => {
              if (window.location.pathname === "/") {
                e.preventDefault();
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }
            }}
          >
            <motion.div
              animate={{ 
                y: [0, -6, 0]
              }}
              transition={{ 
                repeat: Infinity, 
                duration: 3,
                ease: "easeInOut"
              }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="relative group"
            >
              <div className="w-10 h-10 sm:w-14 sm:h-14 flex items-center justify-center relative">
                <Image 
                  src="/images/logo-textless-transparent.png" 
                  alt="Devine CDC Logo" 
                  width={56} 
                  height={56} 
                  className="w-full h-full object-contain drop-shadow-[0_0px_10px_rgba(255,105,180,0.4)]"
                  priority
                />
              </div>
            </motion.div>
            {/* Brand tagline beside logo — always visible and responsive */}
            <div className="flex items-center justify-center px-2 py-1 sm:px-4 sm:py-1.5 rounded-full bg-gradient-to-r from-white/15 to-white/5 border border-white/10 backdrop-blur-md shadow-[0_4px_12px_rgba(255,255,255,0.03)]">
              <DropLetterTagline variant="navbar" startDelay={0.3} />
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-7 bg-white/10 backdrop-blur-md px-7 py-2.5 rounded-full border border-white/15 shadow-[0_4px_20px_rgba(0,0,0,0.1)]">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                onClick={(e) => {
                  if (link.label === "Home" && window.location.pathname === "/") {
                    e.preventDefault();
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }
                }}
                className="text-sm font-bold text-white hover:text-white/80 transition-colors relative group"
              >
                {link.label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-devine-pink-light transition-all group-hover:w-full rounded-full"></span>
              </Link>
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center gap-4">
            <Button className="rounded-full bg-white text-devine-purple hover:bg-white/90 font-bold shadow-lg hover:shadow-xl hover:-translate-y-0.5 transition-all duration-300 px-6" asChild>
              <Link href="/#book-appointment" onClick={(e) => {
                if (window.location.pathname === "/") {
                  e.preventDefault();
                  const element = document.getElementById("book-appointment");
                  if (element) {
                    const y = element.getBoundingClientRect().top + window.scrollY - 100;
                    window.scrollTo({ top: y, behavior: 'smooth' });
                    window.history.pushState(null, '', '/#book-appointment');
                  }
                }
              }}>Book Assessment</Link>
            </Button>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden relative z-50 w-10 h-10 flex items-center justify-center rounded-full bg-white/20 backdrop-blur-sm shadow-sm border border-white/30 text-white"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </motion.header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-40 bg-gradient-to-b from-devine-purple/90 via-devine-purple-dark/85 to-devine-purple/90 backdrop-blur-2xl pt-24 px-6 pb-6 flex flex-col md:hidden"
          >
            <nav className="flex flex-col gap-6 text-center mt-10">
              {NAV_LINKS.map((link, i) => (
                <motion.div
                  key={link.label}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                >
                  <Link
                    href={link.href}
                    onClick={(e) => {
                      if (link.label === "Home" && window.location.pathname === "/") {
                        e.preventDefault();
                        window.scrollTo({ top: 0, behavior: 'smooth' });
                      }
                      setIsMobileMenuOpen(false);
                    }}
                    className="text-2xl font-heading font-bold text-white/90 hover:text-white"
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}
            </nav>
            <div className="mt-auto flex flex-col gap-4">
              <Button size="lg" className="w-full text-lg bg-white text-devine-purple hover:bg-white/90 font-bold" asChild>
                <Link href="/#book-appointment" onClick={(e) => {
                  if (window.location.pathname === "/") {
                    e.preventDefault();
                    const element = document.getElementById("book-appointment");
                    if (element) {
                      const y = element.getBoundingClientRect().top + window.scrollY - 100;
                      window.scrollTo({ top: y, behavior: 'smooth' });
                      window.history.pushState(null, '', '/#book-appointment');
                    }
                  }
                  setIsMobileMenuOpen(false);
                }}>Book Assessment</Link>
              </Button>
              <div className="flex justify-center gap-4 mt-4">
                <a 
                  href={CONTACT.instagram} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-12 h-12 flex items-center justify-center rounded-full bg-white/15 text-devine-pink-light hover:bg-devine-pink hover:text-white transition-colors border border-white/20 shadow-sm"
                >
                  <InstagramIcon size={20} />
                </a>
                <a 
                  href={`https://wa.me/${CONTACT.whatsapp}`} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-12 h-12 flex items-center justify-center rounded-full bg-white/15 text-green-300 hover:bg-green-500 hover:text-white transition-colors border border-white/20 shadow-sm"
                >
                  <Phone size={20} />
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
