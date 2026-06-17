"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Phone } from "lucide-react";
import Image from "next/image";
import { CONTACT, NAV_LINKS } from "@/lib/constants";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

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
          "sticky top-0 left-0 right-0 z-50 transition-all duration-500",
          isScrolled 
            ? "py-3 bg-white/95 backdrop-blur-2xl shadow-[0_10px_40px_rgba(0,0,0,0.08)] border-b border-slate-200/50" 
            : "py-5 bg-transparent"
        )}
      >
        <div className="container mx-auto px-4 md:px-6 relative flex items-center justify-between">
          {/* Left: Logo and Brand Name */}
          <div className="flex-1 flex justify-start">
            <Link 
              href="/" 
              className="relative z-50 flex items-center gap-3 sm:gap-4 group"
              onClick={(e) => {
                if (window.location.pathname === "/") {
                  e.preventDefault();
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }
              }}
            >
              <div className="relative flex items-center">
                <div className="absolute inset-0 bg-devine-pink/20 blur-xl rounded-full scale-150 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <motion.div 
                  animate={{ y: [-4, 4, -4] }}
                  transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                  className="w-12 h-12 sm:w-14 sm:h-14 flex items-center justify-center relative"
                >
                  <Image 
                    src="/images/logo-textless-transparent.png" 
                    alt="Devine CDC Logo" 
                    width={56} 
                    height={56} 
                    className="w-full h-full object-contain drop-shadow-[0_0_15px_rgba(168,85,247,0.8)] transition-all duration-500 group-hover:scale-110 group-hover:drop-shadow-[0_0_25px_rgba(168,85,247,1)]"
                    priority
                  />
                </motion.div>
              </div>
              
              <div className="flex flex-col justify-center">
                <span className="text-[11px] sm:text-[13px] md:text-[15px] lg:text-[17px] font-heading font-black text-slate-900 uppercase tracking-tight leading-none whitespace-nowrap">
                  Devine Child <span className="text-devine-purple">Development Centre</span>
                </span>
                <span className="text-[8px] sm:text-[9px] md:text-[10px] font-medium text-slate-500 uppercase tracking-[0.25em] leading-none mt-1 sm:mt-1.5 ml-0.5">
                  your safe space
                </span>
              </div>
            </Link>
          </div>

          {/* Center: Desktop Navigation */}
          <div className="hidden xl:flex flex-none justify-center absolute left-1/2 -translate-x-1/2">
            <nav aria-label="Main Navigation" className="flex items-center gap-1 bg-white/50 backdrop-blur-md px-2 py-1.5 rounded-full border border-slate-200/50 shadow-[0_4px_20px_rgba(0,0,0,0.03)]">
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
                  className="px-5 py-2 rounded-full text-[13px] font-bold text-slate-600 hover:text-devine-purple hover:bg-white/80 transition-all"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Right: Desktop CTA */}
          <div className="flex-1 hidden xl:flex justify-end items-center gap-4">
            <Button className="rounded-full bg-slate-900 text-white hover:bg-devine-purple font-bold shadow-lg hover:shadow-xl hover:-translate-y-0.5 transition-all duration-300 px-7 h-11" asChild>
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

          {/* Mobile Menu Toggle (Shows below xl to make room for wide title) */}
          <div className="flex-1 flex justify-end xl:hidden">
            <button
              className="relative z-50 w-11 h-11 flex items-center justify-center rounded-full bg-white shadow-[0_2px_10px_rgba(0,0,0,0.05)] border border-slate-100 text-slate-800"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-expanded={isMobileMenuOpen}
              aria-label="Toggle Mobile Menu"
              aria-controls="mobile-menu"
            >
              {isMobileMenuOpen ? <X size={20} aria-hidden="true" /> : <Menu size={20} aria-hidden="true" />}
            </button>
          </div>
        </div>
      </motion.header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="fixed inset-0 z-40 bg-white/95 backdrop-blur-xl pt-28 px-6 pb-6 flex flex-col xl:hidden"
          >
            <nav className="flex flex-col gap-6 text-center mt-10">
              {NAV_LINKS.map((link, i) => (
                <motion.div
                  key={link.label}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.05 }}
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
                    className="text-3xl font-heading font-black text-slate-800 hover:text-devine-purple transition-colors"
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}
            </nav>
            <div className="mt-auto flex flex-col gap-4">
              <Button size="lg" className="w-full text-lg bg-devine-purple text-white hover:bg-devine-purple-dark font-bold h-14 rounded-2xl" asChild>
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
                  aria-label="Visit our Instagram page"
                  className="w-14 h-14 flex items-center justify-center rounded-2xl bg-slate-50 text-slate-600 hover:bg-devine-pink hover:text-white transition-all border border-slate-100 shadow-sm"
                >
                  <InstagramIcon size={24} />
                </a>
                <a 
                  href={`https://wa.me/${CONTACT.whatsapp}`} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  aria-label="Contact us on WhatsApp"
                  className="w-14 h-14 flex items-center justify-center rounded-2xl bg-slate-50 text-slate-600 hover:bg-green-500 hover:text-white transition-all border border-slate-100 shadow-sm"
                >
                  <Phone size={24} aria-hidden="true" />
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
