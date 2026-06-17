"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Phone, CalendarCheck, ShieldCheck, HeartPulse, Star } from "lucide-react";
import { CONTACT } from "@/lib/constants";
import Link from "next/link";

export function HeroSection() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants: import("framer-motion").Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 50 } },
  };

  return (
    <section className="relative min-h-[90vh] flex items-center pt-24 overflow-hidden bg-gradient-to-b from-devine-purple/5 via-white to-devine-blue/5">
      {/* Animated Background Blobs */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10 pointer-events-none">
        <motion.div
          animate={{
            x: [0, 50, 0],
            y: [0, 30, 0],
          }}
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-[-10%] right-[-5%] w-[50vw] h-[50vw] rounded-full bg-devine-pink/10 blur-[80px]"
        />
        <motion.div
          animate={{
            x: [0, -40, 0],
            y: [0, 50, 0],
          }}
          transition={{ duration: 18, repeat: Infinity, ease: "easeInOut", delay: 2 }}
          className="absolute bottom-[-10%] left-[-10%] w-[40vw] h-[40vw] rounded-full bg-devine-purple/10 blur-[100px]"
        />
        <div className="absolute top-[30%] left-[20%] w-[30vw] h-[30vw] rounded-full bg-devine-blue/10 blur-[90px] mix-blend-multiply" />
      </div>

      <div className="container mx-auto px-4 md:px-6 z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          {/* Text Content */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="flex flex-col items-start text-left max-w-2xl"
          >
            <motion.div variants={itemVariants} className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/60 backdrop-blur-md border border-devine-purple/20 shadow-sm mb-6">
              <span className="flex h-2 w-2 rounded-full bg-green-500 animate-pulse"></span>
              <span className="text-sm font-bold tracking-wide text-devine-purple uppercase">Accepting New Enrollments</span>
            </motion.div>

            <motion.h1 variants={itemVariants} className="font-heading font-extrabold text-5xl md:text-6xl lg:text-7xl leading-[1.1] text-gray-900 mb-6 tracking-tight">
              Unlock Your Child&apos;s <span className="text-transparent bg-clip-text bg-gradient-to-r from-devine-purple to-devine-pink">Infinite Potential</span>
            </motion.h1>

            <motion.p variants={itemVariants} className="text-lg md:text-xl text-gray-600 mb-8 leading-relaxed max-w-xl">
              Expert Pediatric Therapy in Gurgaon. We provide compassionate, evidence-based care in Speech Therapy, Occupational Therapy, and Special Education.
            </motion.p>

            <motion.div variants={itemVariants} className="flex flex-col sm:flex-row flex-wrap gap-4 w-full">
              <Button size="lg" className="text-lg px-8 py-7 h-auto gap-2 group w-full sm:w-auto" asChild>
                <Link href="/#book-appointment">
                  <CalendarCheck className="group-hover:scale-110 transition-transform" />
                  Book Your Appointment
                </Link>
              </Button>
              <Link href={`tel:${CONTACT.phone.replace(/\s/g, '')}`} className="w-full sm:w-auto">
                <Button variant="outline" size="lg" className="text-lg px-8 py-7 h-auto gap-2 bg-white/50 backdrop-blur-md w-full">
                  <Phone className="text-devine-blue" />
                  Free Consultation
                </Button>
              </Link>
            </motion.div>

            {/* Social Proof Mini */}
            <motion.div variants={itemVariants} className="mt-10 flex items-center gap-6 text-sm font-semibold text-gray-600">
              <div className="flex -space-x-3">
                {[1, 2, 3, 4].map((i) => (
                  <div key={i} className="w-10 h-10 rounded-full border-2 border-white bg-gray-200 shadow-sm flex items-center justify-center overflow-hidden">
                    <img src={`https://i.pravatar.cc/100?img=${i + 10}`} alt="Parent" className="w-full h-full object-cover" />
                  </div>
                ))}
              </div>
              <div className="flex flex-col">
                <div className="flex items-center text-yellow-500">
                  <Star fill="currentColor" size={16} />
                  <Star fill="currentColor" size={16} />
                  <Star fill="currentColor" size={16} />
                  <Star fill="currentColor" size={16} />
                  <Star fill="currentColor" size={16} />
                </div>
                <span>Trusted by 500+ Parents</span>
              </div>
            </motion.div>
          </motion.div>

          {/* Visual/Image Side */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative lg:h-[600px] w-full flex items-center justify-center"
          >
            <div className="relative w-full max-w-[500px] aspect-square rounded-[3rem] overflow-hidden shadow-2xl border-[8px] border-white/50 backdrop-blur-sm">
              <img 
                src="/images/children_sensory_play.png" 
                alt="Happy child in therapy"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-devine-purple/40 to-transparent" />
            </div>

            {/* Floating Trust Badge 1 */}
            <motion.div 
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -left-6 top-20 bg-white/90 backdrop-blur-md p-4 rounded-2xl shadow-xl border border-white/50 flex items-center gap-4"
            >
              <div className="w-12 h-12 rounded-full bg-devine-pink/10 flex items-center justify-center text-devine-pink">
                <HeartPulse size={24} />
              </div>
              <div>
                <p className="font-heading font-extrabold text-2xl text-gray-900">5+</p>
                <p className="text-xs font-bold text-gray-500 uppercase tracking-wider">Years Experience</p>
              </div>
            </motion.div>

            {/* Floating Trust Badge 2 */}
            <motion.div 
              animate={{ y: [0, 15, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              className="absolute -right-6 bottom-32 bg-white/90 backdrop-blur-md p-4 rounded-2xl shadow-xl border border-white/50 flex items-center gap-4"
            >
              <div className="w-12 h-12 rounded-full bg-devine-blue/10 flex items-center justify-center text-devine-blue">
                <ShieldCheck size={24} />
              </div>
              <div>
                <p className="font-heading font-extrabold text-xl text-gray-900">Certified</p>
                <p className="text-xs font-bold text-gray-500 uppercase tracking-wider">RCI Therapists</p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
