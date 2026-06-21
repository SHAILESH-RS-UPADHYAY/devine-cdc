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

function scrollToConditions() {
  const el = document.getElementById("conditions-we-support");
  if (el) {
    const y = el.getBoundingClientRect().top + window.scrollY - 72;
    window.scrollTo({ top: y, behavior: "smooth" });
  }
}

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
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
            ? "bg-white/95 backdrop-blur-2xl shadow-[0_10px_40px_rgba(0,0,0,0.08)] border-b border-slate-200/50" 
            : "bg-transparent"
        )}
        style={{ height: "clamp(64px, 8vw, 72px)" }}
      >
        <div
          className="container mx-auto px-4 md:px-6 flex items-center justify-between"
          style={{ height: "100%" }}
        >
          {/* Left: Logo + Brand */}
          <Link 
            href="/" 
            className="relative z-50 flex items-center gap-2 sm:gap-3 group"
            style={{ paddingLeft: "clamp(16px, 2.5vw, 32px)" }}
            onClick={(e) => {
              if (window.location.pathname === "/") {
                e.preventDefault();
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }
            }}
          >
            <div className="relative flex items-center shrink-0" style={{ width: 40, height: 40 }}>
              <Image 
                src="/images/logo-textless-transparent.webp" 
                alt="Devine CDC Logo" 
                width={40} 
                height={40} 
                quality={75}
                className="w-full h-full object-contain"
                priority
              />
            </div>
            <div className="flex flex-col justify-center">
              <span className="text-[12px] sm:text-[14px] md:text-[15px] font-heading font-black text-slate-900 uppercase tracking-tight leading-none whitespace-nowrap">
                Devine Child <span className="text-devine-orange">Development Centre</span>
              </span>
              <span className="text-[8px] sm:text-[9px] font-medium text-slate-500 uppercase tracking-[0.25em] leading-none mt-0.5">
                your safe space
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden xl:flex items-center justify-center">
            <nav
              aria-label="Main Navigation"
              className="flex items-center gap-1"
            >
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  onClick={(e) => {
                    if (link.label === "Home" && window.location.pathname === "/") {
                      e.preventDefault();
                      window.scrollTo({ top: 0, behavior: 'smooth' });
                    }
                    if (link.label === "Conditions" && window.location.pathname === "/") {
                      e.preventDefault();
                      scrollToConditions();
                    }
                  }}
                  className="px-4 py-2 rounded-full text-[15px] font-medium text-slate-600 hover:text-devine-orange hover:bg-white/80 transition-all"
                  style={{ fontSize: "15px", fontWeight: 500, lineHeight: 1.4 }}
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Desktop CTA */}
          <div className="hidden xl:flex items-center gap-4" style={{ paddingRight: "clamp(16px, 2.5vw, 32px)" }}>
            <Button className="rounded-full bg-slate-900 text-white hover:bg-devine-orange font-bold shadow-lg hover:shadow-xl hover:-translate-y-0.5 transition-all duration-300 px-6 h-10 text-sm" asChild>
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
          <div className="flex items-center xl:hidden" style={{ paddingRight: "clamp(16px, 2.5vw, 20px)" }}>
            <button
              className="relative z-50 flex items-center justify-center rounded-full bg-white shadow-[0_2px_10px_rgba(0,0,0,0.05)] border border-slate-100 text-slate-800"
              style={{ width: 44, height: 44 }}
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

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            id="mobile-menu"
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
            className="fixed inset-0 z-40 bg-white/95 backdrop-blur-xl pt-24 px-6 pb-6 flex flex-col xl:hidden"
            style={{ top: "clamp(64px, 8vw, 72px)" }}
          >
            <nav className="flex flex-col text-center mt-6">
              {NAV_LINKS.map((link, i) => (
                <motion.div
                  key={link.label}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.04 }}
                >
                  <Link
                    href={link.href}
                    onClick={(e) => {
                      if (link.label === "Home" && window.location.pathname === "/") {
                        e.preventDefault();
                        window.scrollTo({ top: 0, behavior: 'smooth' });
                      }
                      if (link.label === "Conditions" && window.location.pathname === "/") {
                        e.preventDefault();
                        scrollToConditions();
                      }
                      setIsMobileMenuOpen(false);
                    }}
                    className="text-2xl font-heading font-bold text-slate-800 hover:text-devine-orange transition-colors flex items-center justify-center"
                    style={{ minHeight: 48, WebkitTapHighlightColor: "transparent" }}
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}
            </nav>
            <div className="mt-auto flex flex-col gap-4">
              <Button size="lg" className="w-full text-lg bg-devine-orange text-white hover:bg-devine-orange-dark font-bold h-14 rounded-2xl" asChild>
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
                  className="w-14 h-14 flex items-center justify-center rounded-2xl bg-slate-50 text-slate-600 hover:bg-devine-peach hover:text-white transition-all border border-slate-100 shadow-sm"
                  style={{ WebkitTapHighlightColor: "transparent" }}
                >
                  <InstagramIcon size={24} />
                </a>
                <a 
                  href={`https://wa.me/${CONTACT.whatsapp}`} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  aria-label="Contact us on WhatsApp"
                  className="w-14 h-14 flex items-center justify-center rounded-2xl bg-slate-50 text-slate-600 hover:bg-green-500 hover:text-white transition-all border border-slate-100 shadow-sm"
                  style={{ WebkitTapHighlightColor: "transparent" }}
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
