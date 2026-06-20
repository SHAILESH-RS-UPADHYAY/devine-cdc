import { notFound } from "next/navigation";
import { PROGRAM_CONTENT } from "@/lib/program-content";
import { GROUP_CLASSES } from "@/lib/constants";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowLeft, CheckCircle2, Phone, Calendar, Heart } from "lucide-react";
import * as LucideIcons from "lucide-react";
import { Metadata } from "next";

export async function generateStaticParams() {
  return GROUP_CLASSES.map((cls) => ({
    programId: cls.id,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ programId: string }>;
}): Promise<Metadata> {
  const resolvedParams = await params;
  const programData = PROGRAM_CONTENT[resolvedParams.programId];
  if (!programData) return { title: "Program Not Found" };

  return {
    title: `${programData.title} | Devine CDC`,
    description: programData.tagline,
    openGraph: {
      title: `${programData.title} | Devine CDC`,
      description: programData.tagline,
      type: "article",
    },
  };
}

export default async function ProgramPage({
  params,
}: {
  params: Promise<{ programId: string }>;
}) {
  const resolvedParams = await params;
  const programData = PROGRAM_CONTENT[resolvedParams.programId];

  if (!programData) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-gray-50 pb-20">
      {/* Hero Section */}
      <section 
        className="pt-32 pb-20 px-4 md:px-6 relative overflow-hidden"
        style={{ backgroundColor: `${programData.hexColor}10` }}
      >
        <div className="container mx-auto max-w-6xl relative z-10">
          <Link 
            href="/programs" 
            className="inline-flex items-center text-sm font-semibold hover:opacity-80 transition-opacity mb-8"
            style={{ color: programData.hexColor }}
          >
            <ArrowLeft size={16} className="mr-2" />
            Back to All Programs
          </Link>
          
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-6xl font-heading font-extrabold text-gray-900 mb-6">
              {programData.title}
            </h1>
            <p className="text-xl md:text-2xl text-gray-700 font-medium">
              {programData.tagline}
            </p>
          </div>
        </div>
      </section>

      {/* Main Content Layout */}
      <div className="container mx-auto px-4 md:px-6 max-w-6xl -mt-8 relative z-20">
        <div className="flex flex-col lg:flex-row gap-12">
          
          {/* Left Column - Content */}
          <div className="lg:w-2/3 space-y-16 bg-white p-8 md:p-12 rounded-[2rem] shadow-sm border border-gray-100">
            
            {/* Overview */}
            <section>
              <h2 className="text-3xl font-heading font-bold text-gray-900 mb-6">
                {programData.overview.heading}
              </h2>
              <div className="space-y-4 text-lg text-gray-600 leading-relaxed">
                {programData.overview.paragraphs.map((p: string, idx: number) => (
                  <p key={idx}>{p}</p>
                ))}
              </div>
            </section>

            {/* Benefits */}
            <section>
              <h2 className="text-3xl font-heading font-bold text-gray-900 mb-8">
                Key Benefits
              </h2>
              <div className="grid sm:grid-cols-2 gap-6">
                {programData.benefits.map((benefit: any, idx: number) => {
                  const Icon = (LucideIcons as any)[benefit.icon] || LucideIcons.CheckCircle2;
                  return (
                    <div key={idx} className="bg-gray-50 p-6 rounded-2xl border border-gray-100">
                      <div 
                        className="w-12 h-12 rounded-xl flex items-center justify-center mb-4"
                        style={{ backgroundColor: `${programData.hexColor}15`, color: programData.hexColor }}
                      >
                        <Icon size={24} />
                      </div>
                      <h3 className="text-xl font-bold text-gray-900 mb-2">{benefit.title}</h3>
                      <p className="text-gray-600">{benefit.description}</p>
                    </div>
                  );
                })}
              </div>
            </section>

            {/* FAQs */}
            <section>
              <h2 className="text-3xl font-heading font-bold text-gray-900 mb-8">
                Frequently Asked Questions
              </h2>
              <div className="space-y-6">
                {programData.faqs.map((faq: any, idx: number) => (
                  <div key={idx} className="bg-gray-50 rounded-2xl p-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-3 flex items-start gap-3">
                      <span style={{ color: programData.hexColor }}>Q.</span>
                      {faq.question}
                    </h3>
                    <p className="text-gray-600 pl-7">{faq.answer}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* Parent Note */}
            <section className="bg-gradient-to-br from-devine-orange/5 to-devine-peach/5 rounded-3xl p-8 border border-devine-orange/10">
              <h2 className="text-2xl font-bold text-devine-orange mb-4 flex items-center gap-2">
                <Heart size={24} className="text-devine-peach" />
                {programData.parentNote.title}
              </h2>
              <p className="text-lg text-gray-700 italic">
                "{programData.parentNote.content}"
              </p>
            </section>

          </div>

          {/* Right Column - Sticky Sidebar CTA */}
          <div className="lg:w-1/3">
            <div className="sticky top-32 space-y-6">
              <div className="bg-white p-8 rounded-[2rem] shadow-lg border border-gray-100 text-center">
                <div 
                  className="w-16 h-16 rounded-full mx-auto flex items-center justify-center mb-6"
                  style={{ backgroundColor: `${programData.hexColor}15`, color: programData.hexColor }}
                >
                  <Calendar size={32} />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Enroll Your Child</h3>
                <p className="text-gray-600 mb-8">
                  Spaces in our {programData.shortTitle} are limited. Book a consultation today to reserve a spot.
                </p>
                <div className="space-y-4">
                  <Button asChild className="w-full rounded-full h-14 text-lg font-bold" style={{ backgroundColor: programData.hexColor }}>
                    <Link href="/#book-appointment" className="w-full flex items-center justify-center">
                      Book Assessment
                    </Link>
                  </Button>
                  <Button variant="outline" className="w-full rounded-full h-14 text-lg font-bold" asChild>
                    <a href="tel:+918744097777" className="flex items-center justify-center gap-2">
                      <Phone size={20} />
                      Call Us Now
                    </a>
                  </Button>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </main>
  );
}
