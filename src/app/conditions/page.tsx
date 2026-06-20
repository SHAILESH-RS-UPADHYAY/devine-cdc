import { Metadata } from "next";
import Link from "next/link";
import { CONDITIONS, SITE_CONFIG } from "@/lib/constants";
import { Puzzle, Zap, MessageSquare, ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Conditions We Treat | " + SITE_CONFIG.shortName,
  description: "Specialized support for Autism, ADHD, Speech Delay, and other developmental conditions in children.",
};

const iconMap: Record<string, React.ElementType> = {
  Puzzle,
  Zap,
  MessageSquare,
};

export default function ConditionsPage() {
  return (
    <main className="pt-32 pb-24 min-h-screen bg-white relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-0 inset-x-0 h-96 bg-gradient-to-b from-gray-50 to-white" />
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="max-w-3xl mb-16 text-center mx-auto">
          <h1 className="text-4xl md:text-5xl font-heading font-extrabold text-devine-orange mb-6">
            Conditions We Treat
          </h1>
          <p className="text-lg text-gray-600">
            Every child is unique, and so are the challenges they may face. We provide specialized, empathetic support for a wide range of developmental conditions.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {CONDITIONS.map((condition) => {
            const Icon = iconMap[condition.icon] || Puzzle;
            return (
              <div 
                key={condition.id}
                className="group flex flex-col bg-white rounded-3xl p-8 border border-gray-100 shadow-[0_4px_20px_rgba(0,0,0,0.03)] hover:shadow-[0_8px_30px_rgba(0,0,0,0.08)] hover:border-devine-orange/20 transition-all duration-300"
              >
                <div className="w-14 h-14 rounded-2xl bg-devine-orange/10 text-devine-orange flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-devine-orange group-hover:text-white transition-all duration-300">
                  <Icon className="w-7 h-7" />
                </div>
                
                <h2 className="font-heading font-bold text-2xl text-gray-900 mb-4">
                  {condition.title}
                </h2>
                
                <p className="text-gray-600 leading-relaxed mb-8 flex-grow">
                  {condition.description}
                </p>

                <div className="mt-auto pt-4 border-t border-gray-50">
                  <Link 
                    href={condition.href}
                    className="inline-flex items-center font-bold text-devine-orange group/btn"
                  >
                    Learn about our approach
                    <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover/btn:translate-x-1" />
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </main>
  );
}
