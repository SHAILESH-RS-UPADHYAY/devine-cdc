"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { CONTACT, SITE_CONFIG, ADDRESS } from "@/lib/constants";
import { MapPin, Phone, Mail } from "lucide-react";

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
import { Button } from "@/components/ui/button";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#0b1121] border-t border-slate-800 text-slate-400 pt-12 pb-24 md:py-12 mt-auto">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8 mb-12">
          
          {/* Column 1: Logo & Brand */}
          <div className="flex flex-col items-start gap-6">
            <div className="flex items-center gap-4">
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
                  className="w-20 h-20 flex items-center justify-center relative group"
                >
                  <Image 
                    src="/images/logo-textless-transparent.webp" 
                    alt="" 
                    width={80} 
                    height={80} 
                    quality={100}
                    className="absolute inset-0 w-full h-full object-contain blur-[8px] opacity-80 group-hover:opacity-100 group-hover:blur-[12px] group-hover:scale-110 transition-all duration-500 saturate-150 brightness-110"
                  />
                  <Image 
                    src="/images/logo-textless-transparent.webp" 
                    alt="Devine CDC Logo" 
                    width={80} 
                    height={80} 
                    quality={100}
                    className="relative z-10 w-full h-full object-contain transition-all duration-500 group-hover:scale-110"
                  />
                </motion.div>
              </Link>
              <div className="flex flex-col">
                <span className="text-white font-heading font-extrabold text-lg leading-tight">DEVINE CDC</span>
                <span className="text-devine-peach font-heading font-bold text-xs tracking-widest mt-1 uppercase">YOUR SAFE SPACE</span>
              </div>
            </div>
            <p className="text-sm text-slate-400 leading-relaxed max-w-xs">
              Expert child development centre offering Speech & Language Therapy, Occupational Therapy, ABA Therapy & Special Education in Gurgaon.
            </p>
            <div className="flex gap-4">
              <a href={CONTACT.instagram} target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-devine-orange hover:text-white transition-colors">
                <InstagramIcon size={18} />
              </a>
              <a href={`https://wa.me/${CONTACT.whatsapp}`} target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-green-500 hover:text-white transition-colors">
                <svg viewBox="0 0 24 24" width="18" height="18" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path></svg>
              </a>
            </div>
            <div>
              <p className="text-sm font-bold text-white mb-1">Follow us on Insta</p>
              <p className="text-sm text-devine-peach-light">@{CONTACT.instagramHandle}</p>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h3 className="text-white font-bold text-lg mb-6">Quick Links</h3>
            <ul className="space-y-4 text-sm font-medium">
              <li><Link href="/" className="hover:text-devine-peach transition-colors">Home</Link></li>
              <li><Link href="/therapies" className="hover:text-devine-peach transition-colors">Therapies</Link></li>
              <li><Link href="/conditions" className="hover:text-devine-peach transition-colors">Conditions</Link></li>
              <li><Link href="/programs" className="hover:text-devine-peach transition-colors">Programs</Link></li>
              <li><Link href="/contact" className="hover:text-devine-peach transition-colors">Contact</Link></li>
              <li><Link href="/about" className="hover:text-devine-peach transition-colors">About</Link></li>
            </ul>
          </div>

          {/* Column 3: Therapies */}
          <div>
            <h3 className="text-white font-bold text-lg mb-6">Therapies</h3>
            <ul className="space-y-4 text-sm font-medium">
              <li><Link href="/therapies/aba-therapy" className="hover:text-devine-peach transition-colors">ABA Therapy</Link></li>
              <li><Link href="/therapies/occupational-therapy" className="hover:text-devine-peach transition-colors">Occupational Therapy</Link></li>
              <li><Link href="/therapies/speech-therapy" className="hover:text-devine-peach transition-colors">Speech & Language Therapy</Link></li>
              <li><Link href="/therapies/special-education" className="hover:text-devine-peach transition-colors">Special Education</Link></li>
              <li><Link href="/therapies/psychological-behavioral-intervention" className="hover:text-devine-peach transition-colors">Psychological & Behavioral Intervention</Link></li>
            </ul>
          </div>

          {/* Column 4: Contact Us */}
          <div className="flex flex-col gap-6">
            <h3 className="text-white font-bold text-lg mb-2">Contact Us</h3>
            <a href={ADDRESS.googleMapsUrl} target="_blank" rel="noopener noreferrer" className="flex gap-4 text-sm hover:text-white transition-colors group">
              <MapPin className="shrink-0 text-slate-500 group-hover:text-devine-orange transition-colors" size={20} />
              <p>{ADDRESS.full}</p>
            </a>
            <div className="flex gap-4 text-sm">
              <Phone className="shrink-0 text-slate-500" size={20} />
              <p>{CONTACT.phone}</p>
            </div>
            <div className="flex gap-4 text-sm">
              <Mail className="shrink-0 text-slate-500" size={20} />
              <p>{CONTACT.email}</p>
            </div>
            
            <Button asChild className="w-full bg-[#E8773A] hover:bg-[#C45E1A] text-white rounded-full mt-4 font-bold shadow-md shadow-[#E8773A]/20">
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
              }}>Book an Assessment</Link>
            </Button>
          </div>

        </div>
        
        {/* Copyright */}
        <div className="pt-8 border-t border-slate-800 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-slate-500">
          <p>© {currentYear} {SITE_CONFIG.name}. All rights reserved.</p>
          <div className="flex gap-6">
            <Link href="/privacy-policy" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link href="/terms-of-service" className="hover:text-white transition-colors">Terms &amp; Conditions</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
