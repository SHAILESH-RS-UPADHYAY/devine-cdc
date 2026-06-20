import { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { THERAPIES, SITE_CONFIG, WHATSAPP_URL, CONTACT } from "@/lib/constants";
import { THERAPY_CONTENT } from "@/lib/therapy-content";
import {
  ArrowLeft,
  Brain,
  Hand,
  MessageCircle,
  BookOpen,
  CheckCircle2,
  ChevronRight,
  Phone,
  AlertTriangle,
  HelpCircle,
  Heart,
  ArrowRight,
  HeartHandshake,
} from "lucide-react";
import { Button } from "@/components/ui/button";

const iconMap: Record<string, React.ElementType> = {
  Brain,
  Hand,
  MessageCircle,
  BookOpen,
  HeartHandshake,
};

interface PageProps {
  params: Promise<{ therapyId: string }>;
}

export async function generateStaticParams() {
  return THERAPIES.map((therapy) => ({
    therapyId: therapy.id,
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const resolvedParams = await params;
  const therapy = THERAPIES.find((t) => t.id === resolvedParams.therapyId);
  if (!therapy) {
    return { title: "Therapy Not Found" };
  }
  const content = THERAPY_CONTENT[therapy.id];
  return {
    title: `${therapy.fullTitle} for Children | ${SITE_CONFIG.shortName} Gurgaon`,
    description: content?.whatIs?.slice(0, 155) || therapy.shortDescription,
    openGraph: {
      title: `${therapy.fullTitle} | ${SITE_CONFIG.name}`,
      description: therapy.shortDescription,
      type: "article",
    },
  };
}

export default async function TherapyDetailPage({ params }: PageProps) {
  const resolvedParams = await params;
  const therapy = THERAPIES.find((t) => t.id === resolvedParams.therapyId);

  if (!therapy) {
    notFound();
  }

  const Icon = iconMap[therapy.icon] || Brain;
  const content = THERAPY_CONTENT[therapy.id];
  const otherTherapies = THERAPIES.filter((t) => t.id !== therapy.id);

  return (
    <main className="pt-24 min-h-screen bg-white">
      {/* ═══ Hero Section ═══ */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-devine-cream-bg via-white to-devine-peach/5" />
        <div className="container mx-auto px-4 md:px-6 relative z-10 pt-4 pb-12 md:pt-8 md:pb-20">
          <div className="mb-6">
            <Link
              href="/therapies"
              className="inline-flex items-center text-devine-muted hover:text-devine-orange transition-colors font-medium text-sm"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              All Therapies
            </Link>
          </div>

          <div className="max-w-4xl">
            <div
              className="w-20 h-20 rounded-2xl flex items-center justify-center mb-8 shadow-xl transition-all duration-500 hover:scale-105"
              style={{
                backgroundColor: `${therapy.color}15`,
                color: therapy.color,
                boxShadow: `0 0 30px ${therapy.color}40`,
              }}
            >
              <Icon className="w-10 h-10" />
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-extrabold text-gray-900 mb-6 tracking-tight">
              {therapy.fullTitle}
            </h1>

            {content && (
              <p className="text-xl md:text-2xl text-devine-orange font-heading font-semibold italic">
                &ldquo;{content.heroTagline}&rdquo;
              </p>
            )}
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 md:px-6">
        <div className="grid lg:grid-cols-3 gap-12 lg:gap-16">
          {/* ═══ Main Content ═══ */}
          <div className="lg:col-span-2 space-y-16">
            {/* Image (if available) */}
            {content?.imageUrl && (
              <section 
                className="rounded-3xl overflow-hidden border border-gray-100 transition-all duration-700 hover:scale-[1.02]"
                style={{
                  boxShadow: `0 20px 50px -10px ${therapy.color}50`,
                }}
              >
                <div className="relative w-full aspect-video">
                  <Image
                    src={content.imageUrl}
                    alt={`${therapy.title} at ${SITE_CONFIG.shortName}`}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 66vw, 50vw"
                    quality={60}
                    priority
                  />
                </div>
              </section>
            )}

            {/* What Is Section */}
            {content && (
              <section>
                <h2 className="text-2xl md:text-3xl font-heading font-bold text-gray-900 mb-6">
                  What is {therapy.title}?
                </h2>
                <p className="text-lg text-gray-600 leading-relaxed">
                  {content.whatIs}
                </p>
                <p className="text-lg text-gray-600 leading-relaxed mt-4">
                  {content.whyItMatters}
                </p>
              </section>
            )}

            {/* Benefits Grid */}
            {content && (
              <section>
                <h2 className="text-2xl md:text-3xl font-heading font-bold text-gray-900 mb-8">
                  How {therapy.title} Benefits Your Child
                </h2>
                <div className="grid sm:grid-cols-2 gap-6">
                  {content.benefits.map((benefit, i) => (
                    <div
                      key={i}
                      className="bg-gradient-to-br from-gray-50 to-white p-6 rounded-2xl border border-gray-100 hover:border-devine-orange/20 hover:shadow-md transition-all duration-300"
                    >
                      <div className="flex items-start gap-3">
                        <CheckCircle2
                          className="w-6 h-6 flex-shrink-0 mt-0.5"
                          style={{ color: therapy.color }}
                        />
                        <div>
                          <h3 className="font-bold text-gray-900 mb-2">
                            {benefit.title}
                          </h3>
                          <p className="text-sm text-gray-600 leading-relaxed">
                            {benefit.description}
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </section>
            )}

            {/* Our Approach */}
            {content && (
              <section>
                <h2 className="text-2xl md:text-3xl font-heading font-bold text-gray-900 mb-8">
                  Our Approach to {therapy.title}
                </h2>
                <div className="space-y-6">
                  {content.approach.map((step, i) => (
                    <div key={i} className="flex gap-5">
                      <div className="flex-shrink-0">
                        <div
                          className="w-10 h-10 rounded-full flex items-center justify-center text-white font-bold text-sm"
                          style={{ backgroundColor: therapy.color }}
                        >
                          {i + 1}
                        </div>
                      </div>
                      <div className="pt-1">
                        <h3 className="font-bold text-gray-900 text-lg mb-2">
                          {step.step}
                        </h3>
                        <p className="text-gray-600 leading-relaxed">
                          {step.detail}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </section>
            )}

            {/* Signs to Watch */}
            {content && (
              <section className="bg-gradient-to-br from-amber-50/70 to-orange-50/50 rounded-3xl p-8 md:p-10 border border-amber-100">
                <div className="flex items-center gap-3 mb-6">
                  <AlertTriangle className="w-6 h-6 text-amber-600" />
                  <h2 className="text-2xl font-heading font-bold text-gray-900">
                    Signs to Watch For
                  </h2>
                </div>
                <p className="text-gray-600 mb-6">
                  If your child shows any of these signs, consider scheduling an
                  assessment. Early identification leads to early support.
                </p>
                <ul className="grid sm:grid-cols-2 gap-3">
                  {content.signsToWatch.map((sign, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <ChevronRight className="w-4 h-4 text-amber-600 mt-1 flex-shrink-0" />
                      <span className="text-gray-700 text-sm">{sign}</span>
                    </li>
                  ))}
                </ul>
              </section>
            )}

            {/* FAQs */}
            {content && (
              <section>
                <div className="flex items-center gap-3 mb-8">
                  <HelpCircle className="w-6 h-6 text-devine-orange" />
                  <h2 className="text-2xl md:text-3xl font-heading font-bold text-gray-900">
                    Frequently Asked Questions
                  </h2>
                </div>
                <div className="space-y-6">
                  {content.faqs.map((faq, i) => (
                    <div
                      key={i}
                      className="bg-gray-50 rounded-2xl p-6 border border-gray-100"
                    >
                      <h3 className="font-bold text-gray-900 mb-3 text-lg">
                        {faq.question}
                      </h3>
                      <p className="text-gray-600 leading-relaxed">
                        {faq.answer}
                      </p>
                    </div>
                  ))}
                </div>
              </section>
            )}

            {/* Parent Note */}
            {content && (
              <section className="bg-gradient-to-br from-devine-orange/5 to-devine-peach/5 rounded-3xl p-8 md:p-10 border border-devine-orange/10">
                <div className="flex items-center gap-3 mb-4">
                  <Heart
                    className="w-6 h-6 text-devine-peach"
                    fill="currentColor"
                  />
                  <h3 className="text-xl font-heading font-bold text-gray-900">
                    A Note for Parents
                  </h3>
                </div>
                <p className="text-gray-700 leading-relaxed text-lg italic">
                  &ldquo;{content.parentNote}&rdquo;
                </p>
                <p className="text-sm text-devine-muted mt-4 font-medium">
                  — The Devine CDC Team
                </p>
              </section>
            )}
          </div>

          {/* ═══ Sidebar ═══ */}
          <div className="lg:col-span-1 space-y-8">
            {/* CTA Card */}
            <div className="sticky top-28 space-y-8">
              <div className="bg-gradient-to-br from-devine-orange to-devine-orange-dark rounded-3xl p-8 shadow-xl text-white">
                <h3 className="text-2xl font-heading font-bold mb-4">
                  Ready to start?
                </h3>
                <p className="text-white/85 mb-6 leading-relaxed">
                  Early intervention is key. Schedule an assessment with our
                  expert clinicians to discover how {therapy.title} can support
                  your child&apos;s growth.
                </p>
                <div className="space-y-3">
                  <Button
                    asChild
                    size="lg"
                    className="w-full bg-white text-devine-orange hover:bg-white/90 font-bold h-14 rounded-xl"
                  >
                    <Link href={WHATSAPP_URL} target="_blank">
                      Book an Assessment
                    </Link>
                  </Button>
                  <Button
                    asChild
                    variant="outline"
                    size="lg"
                    className="w-full h-14 rounded-xl border-white/30 text-white hover:bg-white/10"
                  >
                    <Link href={`tel:${CONTACT.phone.replace(/\s/g, "")}`}>
                      <Phone className="w-4 h-4 mr-2" />
                      Call Us
                    </Link>
                  </Button>
                </div>
              </div>

              {/* Other Therapies */}
              <div className="bg-gray-50 rounded-3xl p-6 border border-gray-100">
                <h4 className="font-heading font-bold text-gray-900 mb-4">
                  Explore Other Therapies
                </h4>
                <div className="space-y-3">
                  {otherTherapies.map((t) => {
                    const OtherIcon = iconMap[t.icon] || Brain;
                    return (
                      <Link
                        key={t.id}
                        href={t.href}
                        className="flex items-center gap-3 p-3 rounded-xl hover:bg-white hover:shadow-sm transition-all group"
                      >
                        <div
                          className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0"
                          style={{
                            backgroundColor: `${t.color}15`,
                            color: t.color,
                          }}
                        >
                          <OtherIcon className="w-5 h-5" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <p className="font-semibold text-gray-900 text-sm">
                            {t.title}
                          </p>
                        </div>
                        <ArrowRight className="w-4 h-4 text-gray-400 group-hover:text-devine-orange group-hover:translate-x-1 transition-all" />
                      </Link>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
