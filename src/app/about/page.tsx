import { Metadata } from "next";
import Image from "next/image";
import { FOUNDERS, SITE_CONFIG, TRUST_STATS } from "@/lib/constants";
import { Card, CardContent } from "@/components/ui/card";
import { ShieldCheck, Stethoscope, Users, Award } from "lucide-react";

export const metadata: Metadata = {
  title: "About Us | " + SITE_CONFIG.shortName,
  description: "Learn more about our mission, our founders, and our commitment to providing the best pediatric therapy in Gurgaon.",
};

const iconMap = {
  ShieldCheck,
  Stethoscope,
  Users,
  Award,
};

export default function AboutPage() {
  return (
    <main className="pt-32 pb-16 min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="container mx-auto px-4 md:px-6 mb-16 text-center">
        <h1 className="text-4xl md:text-5xl font-heading font-extrabold text-devine-orange mb-4">
          About {SITE_CONFIG.shortName}
        </h1>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          We are dedicated to nurturing young minds and creating a safe, supportive environment where every child can thrive.
        </p>
      </section>

      {/* Mission & Vision */}
      <section className="container mx-auto px-4 md:px-6 mb-20">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="relative h-[500px] rounded-[2.5rem] group">
            {/* Glowing Edge Effect */}
            <div className="absolute -inset-3 bg-gradient-to-r from-devine-peach via-devine-orange to-blue-400 rounded-[3rem] blur-2xl opacity-60 group-hover:opacity-100 transition-opacity duration-700"></div>
            
            <div className="relative h-full w-full rounded-[2.5rem] overflow-hidden border-4 border-white/60 shadow-2xl">
              <Image
                src="/images/about-therapy.webp"
                alt="Therapist helping a child in a bright clinic"
                fill
                className="object-cover transition-transform duration-1000 group-hover:scale-110"
                sizes="(max-width: 768px) 100vw, 50vw"
                quality={60}
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-devine-orange/20 to-transparent mix-blend-overlay"></div>
            </div>
          </div>
          <div>
            <h2 className="text-3xl font-heading font-bold text-devine-orange mb-6">Our Mission</h2>
            <p className="text-gray-700 text-lg leading-relaxed mb-6">
              At {SITE_CONFIG.name}, our mission is to provide evidence-based, compassionate, and highly individualized therapy for children facing developmental challenges. We believe in empowering not just the child, but the entire family through collaborative care.
            </p>
            <h2 className="text-3xl font-heading font-bold text-devine-orange mb-6">Our Vision</h2>
            <p className="text-gray-700 text-lg leading-relaxed">
              To be the leading child development centre in Gurgaon, recognized for our holistic approach, clinical excellence, and deep commitment to unlocking the full potential of every child.
            </p>
          </div>
        </div>
      </section>

      {/* Trust Stats */}
      <section className="bg-devine-orange text-white py-16 mb-20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {TRUST_STATS.map((stat, i) => {
              const Icon = iconMap[stat.icon as keyof typeof iconMap] || ShieldCheck;
              return (
                <div key={i} className="flex flex-col items-center">
                  <div className="bg-white/10 p-4 rounded-full mb-4">
                    <Icon className="w-8 h-8 text-devine-peach" />
                  </div>
                  <h3 className="text-4xl font-bold font-heading mb-2">
                    {stat.value}
                    {stat.suffix}
                  </h3>
                  <p className="text-sm uppercase tracking-wider text-white/80">{stat.label}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Founders Section */}
      <section className="container mx-auto px-4 md:px-6">
        <h2 className="text-3xl md:text-5xl font-heading font-extrabold text-center text-devine-orange mb-16">
          Meet Our Psychologist
        </h2>
        <div className="flex flex-col gap-12 max-w-7xl mx-auto">
          {FOUNDERS.map((founder, i) => (
            <div key={i} className="relative group">
              {/* Colorful Glow Background */}
              <div className="absolute inset-0 bg-gradient-to-r from-devine-peach via-devine-orange to-devine-blue rounded-[3rem] blur-xl opacity-30 group-hover:opacity-60 transition-opacity duration-500"></div>
              
              <Card className="relative flex flex-col md:flex-row overflow-hidden border-2 border-white/50 shadow-[0_20px_50px_rgba(0,0,0,0.1)] hover:shadow-[0_20px_50px_rgba(93,63,211,0.2)] transition-all duration-500 rounded-[3rem] bg-white/80 backdrop-blur-xl">
                <div className="relative h-[400px] md:h-[500px] md:w-1/3 shrink-0 overflow-hidden">
                  <Image
                    src={founder.image}
                    alt={founder.name}
                    fill
                    className="object-cover object-top transition-transform duration-700 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, 33vw"
                    quality={60}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent"></div>
                </div>
                <CardContent className="p-8 md:p-12 md:w-2/3 flex flex-col justify-center relative">
                  <h3 className="text-3xl md:text-4xl font-bold font-heading text-slate-900 mb-2">{founder.name}</h3>
                  <p className="text-xl text-devine-orange font-bold mb-6">{founder.role}</p>
                  
                  <div className="w-16 h-1.5 bg-gradient-to-r from-devine-peach to-devine-yellow rounded-full mb-6"></div>
                  
                  <p className="text-gray-700 mb-8 text-lg leading-relaxed">{founder.bio}</p>
                  
                  {founder.credentials.length > 0 && (
                    <div className="grid sm:grid-cols-2 gap-4">
                      {founder.credentials.map((cred, idx) => (
                        <div key={idx} className="flex items-center text-sm font-semibold text-slate-800 bg-devine-orange/5 p-3 rounded-xl border border-devine-orange/10">
                          <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center mr-3 shadow-sm shrink-0">
                            <ShieldCheck className="w-4 h-4 text-devine-peach" />
                          </div>
                          <span>{cred}</span>
                        </div>
                      ))}
                    </div>
                  )}
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
