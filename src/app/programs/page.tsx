import { THERAPIES, GROUP_CLASSES } from "@/lib/constants";
import Link from "next/link";
import { ArrowRight, Brain, Hand, MessageCircle, BookOpen, Music, Palette, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";

const iconMap: Record<string, React.ElementType> = {
  Brain,
  Hand,
  MessageCircle,
  BookOpen,
  Music,
  Palette,
  Heart,
};

export const metadata = {
  title: "All Programs & Therapies",
  description: "Explore all our specialized therapies and group classes designed for holistic child development.",
};

export default function ProgramsPage() {
  return (
    <div className="pt-32 pb-24 bg-gray-50 min-h-screen">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-devine-orange/10 rounded-full text-devine-orange font-semibold text-sm mb-6">
            <span className="w-2 h-2 rounded-full bg-devine-peach"></span>
            Comprehensive Care
          </div>
          <h1 className="text-4xl md:text-6xl font-heading font-extrabold text-gray-900 mb-6">
            Our Programs & Therapies
          </h1>
          <p className="text-lg md:text-xl text-gray-600">
            Discover our full range of evidence-based therapies and holistic group classes designed to support every aspect of your child's development.
          </p>
        </div>

        {/* Therapies Section */}
        <div className="mb-20">
          <h2 className="text-3xl font-heading font-bold text-gray-900 mb-8 border-b pb-4">
            Specialized Therapies
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {THERAPIES.map((therapy) => {
              const Icon = iconMap[therapy.icon];
              return (
                <div
                  key={therapy.id}
                  className="bg-white rounded-[2rem] p-6 sm:p-8 shadow-sm border border-gray-100 hover:shadow-xl transition-all duration-300 group flex flex-col h-full"
                >
                  <div 
                    className="w-16 h-16 rounded-2xl flex items-center justify-center mb-6 transition-transform duration-300 group-hover:scale-110"
                    style={{ backgroundColor: `${therapy.color}15`, color: therapy.color }}
                  >
                    {Icon && <Icon className="w-8 h-8" />}
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">{therapy.fullTitle}</h3>
                  <p className="text-gray-600 leading-relaxed mb-8">
                    {therapy.shortDescription}
                  </p>
                  <div className="mt-auto pt-4">
                    <Button asChild variant="outline" className="rounded-full hover:bg-gray-50 text-gray-700 w-full h-auto py-3 px-6 whitespace-normal text-left inline-flex items-center justify-between">
                      <Link href={therapy.href}>
                        <span className="flex-1">Learn more about {therapy.title}</span> <ArrowRight size={18} className="ml-2 shrink-0" />
                      </Link>
                    </Button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Group Classes Section */}
        <div>
          <h2 className="text-3xl font-heading font-bold text-gray-900 mb-8 border-b pb-4">
            Holistic Group Classes
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {GROUP_CLASSES.map((cls) => {
              const Icon = iconMap[cls.icon];
              return (
                <div
                  key={cls.id}
                  className="bg-white rounded-[2rem] p-6 sm:p-8 shadow-sm border border-gray-100 hover:shadow-xl transition-all duration-300 group flex flex-col h-full"
                >
                  <div 
                    className="w-16 h-16 rounded-2xl flex items-center justify-center mb-6 text-white shadow-md transform group-hover:-translate-y-2 transition-transform duration-300"
                    style={{ backgroundColor: cls.color }}
                  >
                    {Icon && <Icon className="w-8 h-8" />}
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">{cls.title}</h3>
                  <p className="text-gray-600 leading-relaxed mb-8">
                    {cls.description}
                  </p>
                  <div className="mt-auto pt-4">
                    <Button asChild variant="ghost" className="rounded-full text-devine-orange hover:bg-devine-orange/10 sm:-ml-4 group/btn w-full sm:w-auto h-auto py-3 whitespace-normal text-left inline-flex items-center justify-between sm:justify-start">
                      <Link href={cls.href}>
                        <span className="flex-1">Explore Details</span> <ArrowRight size={18} className="ml-2 shrink-0 transition-transform duration-300 group-hover/btn:translate-x-1" />
                      </Link>
                    </Button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        
      </div>
    </div>
  );
}
