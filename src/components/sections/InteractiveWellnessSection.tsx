"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { ArrowRight, Calendar, Heart, Palette, Music, Puzzle, Smile, Users, BookOpen, Sun, Star } from "lucide-react";
import { cn } from "@/lib/utils";

// Example placeholder data for Wellness Wednesday Activities
// You can replace these with the exact details from the PDF.
const WELLNESS_ACTIVITIES = [
  {
    id: "week-1",
    day: "Week 1",
    title: "Sensory Play & Art",
    description: "Children explore different textures and materials, helping them process sensory information in a fun, safe environment. Includes finger painting, kinetic sand, and water play.",
    image: "/images/children_sensory_play.webp",
    color: "#E87461",
    icon: Palette,
  },
  {
    id: "week-2",
    day: "Week 2",
    title: "Music & Rhythm",
    description: "A joyful session filled with singing, drumming, and moving to the beat. Helps improve coordination, auditory processing, and expressive communication.",
    image: "/images/children_therapy_laughing.webp",
    color: "#E8B832",
    icon: Music,
  },
  {
    id: "week-3",
    day: "Week 3",
    title: "Mindful Yoga",
    description: "Gentle stretches and deep breathing exercises tailored for kids. Promotes body awareness, emotional regulation, and relaxation.",
    image: "/images/child_learning_happily.webp",
    color: "#7BC8A4",
    icon: Heart,
  },
  {
    id: "week-4",
    day: "Week 4",
    title: "Clay & Pottery",
    description: "Hands-on clay modeling workshop that strengthens fine motor skills, hand-eye coordination, and creative expression.",
    image: "/images/child_laughing_therapy.webp",
    color: "#5B8CC5",
    icon: Puzzle,
  },
  {
    id: "week-5",
    day: "Week 5",
    title: "Social Stories",
    description: "Interactive storytelling sessions where children learn to navigate social situations, read emotions, and build empathy together.",
    image: "/images/therapy_session_joyful.webp",
    color: "#9B59B6",
    icon: BookOpen,
  },
  {
    id: "week-6",
    day: "Week 6",
    title: "Dance & Movement",
    description: "High-energy dance sessions that encourage physical fitness, spatial awareness, and non-verbal expression.",
    image: "/images/therapy_session.webp",
    color: "#14B8A6",
    icon: Smile,
  },
  {
    id: "week-7",
    day: "Week 7",
    title: "Nature Walk & Exploration",
    description: "Guided outdoor exploration focusing on noticing the small details in nature, enhancing observation skills and calming the mind.",
    image: "/images/autism_real.webp",
    color: "#E87461",
    icon: Sun,
  },
  {
    id: "week-8",
    day: "Week 8",
    title: "Team Building Games",
    description: "Structured group games that focus on taking turns, sharing, following rules, and celebrating each other's successes.",
    image: "/images/adhd_real.webp",
    color: "#E8B832",
    icon: Users,
  },
  {
    id: "week-9",
    day: "Week 9",
    title: "Expressive Drama",
    description: "Role-playing activities that let children act out different scenarios, boosting confidence and verbal communication skills.",
    image: "/images/doctor_playing.webp",
    color: "#7BC8A4",
    icon: Star,
  },
  {
    id: "week-10",
    day: "Week 10",
    title: "Calm Down Crafts",
    description: "Creating 'calm down jars' and other soothing crafts that children can use at home as emotional regulation tools.",
    image: "/images/doctor_helping_child.webp",
    color: "#5B8CC5",
    icon: Heart,
  },
];

export function InteractiveWellnessSection() {
  const [activeId, setActiveId] = useState(WELLNESS_ACTIVITIES[0].id);
  const activeActivity = WELLNESS_ACTIVITIES.find((a) => a.id === activeId) || WELLNESS_ACTIVITIES[0];

  return (
    <section className="py-24 bg-white relative overflow-hidden">
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-4xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-devine-peach/10 rounded-full text-devine-peach font-semibold text-sm mb-6 uppercase tracking-wider">
              <span className="w-2 h-2 rounded-full bg-devine-peach animate-pulse"></span>
              Extra Group Classes
            </div>
            
            <h2 className="font-heading text-5xl md:text-7xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-devine-orange via-devine-peach to-devine-orange pb-4">
              Wellness Wednesday
            </h2>
            <p className="text-xl text-gray-600 mt-4 leading-relaxed">
              Every Wednesday brings a new exciting activity! Explore our diverse range of group sessions designed to foster creativity, social skills, and holistic development.
            </p>
          </motion.div>
        </div>

        {/* Interactive Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          
          {/* Left Column: List of Cards */}
          <div className="lg:col-span-5 flex flex-col gap-4 max-h-[700px] overflow-y-auto pr-2 pb-8 custom-scrollbar">
            {WELLNESS_ACTIVITIES.map((activity) => {
              const isActive = activeId === activity.id;
              const Icon = activity.icon;
              
              return (
                <motion.button
                  key={activity.id}
                  onClick={() => setActiveId(activity.id)}
                  className={cn(
                    "text-left w-full p-5 rounded-2xl transition-all duration-300 border-2 relative overflow-hidden group",
                    isActive 
                      ? "bg-white shadow-xl scale-[1.02]" 
                      : "bg-gray-50 border-transparent hover:bg-gray-100 hover:border-gray-200"
                  )}
                  style={{ 
                    borderColor: isActive ? activity.color : undefined,
                  }}
                  whileHover={{ scale: isActive ? 1.02 : 1.01 }}
                  whileTap={{ scale: 0.98 }}
                >
                  {/* Background highlight for active state */}
                  {isActive && (
                    <motion.div 
                      layoutId="activeBackground"
                      className="absolute inset-0 opacity-5"
                      style={{ backgroundColor: activity.color }}
                      initial={false}
                      transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                    />
                  )}
                  
                  <div className="flex items-center gap-4 relative z-10">
                    <div 
                      className={cn(
                        "w-12 h-12 rounded-xl flex items-center justify-center transition-colors duration-300",
                        isActive ? "text-white" : "text-gray-500 bg-gray-200 group-hover:bg-gray-300"
                      )}
                      style={{ backgroundColor: isActive ? activity.color : undefined }}
                    >
                      <Icon size={24} />
                    </div>
                    <div className="flex-1">
                      <div className="text-sm font-semibold text-gray-500 mb-1 flex items-center gap-1">
                        <Calendar size={14} />
                        {activity.day}
                      </div>
                      <h3 className={cn(
                        "font-bold text-lg transition-colors duration-300",
                        isActive ? "text-gray-900" : "text-gray-700"
                      )}>
                        {activity.title}
                      </h3>
                    </div>
                    <div className={cn(
                      "transition-transform duration-300",
                      isActive ? "translate-x-0 opacity-100" : "-translate-x-4 opacity-0 group-hover:opacity-50"
                    )}>
                      <ArrowRight size={20} style={{ color: isActive ? activity.color : undefined }} />
                    </div>
                  </div>
                </motion.button>
              );
            })}
          </div>

          {/* Right Column: Detailed View */}
          <div className="lg:col-span-7 sticky top-32">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeActivity.id}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.4 }}
                className="bg-white rounded-[2.5rem] shadow-2xl overflow-hidden border border-gray-100"
              >
                <div className="relative h-64 sm:h-80 w-full">
                  <Image
                    src={activeActivity.image}
                    alt={activeActivity.title}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  
                  <div className="absolute bottom-6 left-6 right-6 text-white">
                    <div 
                      className="inline-flex items-center gap-2 px-4 py-2 rounded-full font-bold text-sm mb-4"
                      style={{ backgroundColor: activeActivity.color }}
                    >
                      <Calendar size={16} />
                      {activeActivity.day}
                    </div>
                    <h3 className="font-heading text-3xl sm:text-4xl font-bold leading-tight">
                      {activeActivity.title}
                    </h3>
                  </div>
                </div>
                
                <div className="p-8 sm:p-12">
                  <h4 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-3">
                    <span 
                      className="w-8 h-8 rounded-full flex items-center justify-center text-white"
                      style={{ backgroundColor: activeActivity.color }}
                    >
                      <activeActivity.icon size={16} />
                    </span>
                    About this Activity
                  </h4>
                  <p className="text-gray-600 text-lg leading-relaxed mb-8">
                    {activeActivity.description}
                  </p>
                  
                  <div className="pt-8 border-t border-gray-100">
                    <p className="text-sm text-gray-500 italic">
                      * Please note that specific activities may vary based on children's needs and group dynamics. Contact us to learn more about our upcoming Wednesday sessions!
                    </p>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
          
        </div>
      </div>
      
      {/* Global style for custom scrollbar within this component */}
      <style dangerouslySetInnerHTML={{__html: `
        .custom-scrollbar::-webkit-scrollbar {
          width: 6px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: #f1f1f1; 
          border-radius: 10px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: #d1d5db; 
          border-radius: 10px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: #9ca3af; 
        }
      `}} />
    </section>
  );
}
