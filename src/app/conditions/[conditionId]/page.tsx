import { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { CONDITIONS, SITE_CONFIG, WHATSAPP_URL, CONTACT } from "@/lib/constants";
import { CONDITION_CONTENT } from "@/lib/condition-content";
import {
  ArrowLeft,
  Puzzle,
  Zap,
  MessageSquare,
  CheckCircle2,
  ChevronRight,
  Phone,
  AlertTriangle,
  HelpCircle,
  Heart,
  ArrowRight,
  ShieldAlert,
  Stethoscope,
  Lightbulb,
} from "lucide-react";
import { Button } from "@/components/ui/button";

const iconMap: Record<string, React.ElementType> = {
  Puzzle,
  Zap,
  MessageSquare,
};

interface PageProps {
  params: Promise<{ conditionId: string }>;
}

export async function generateStaticParams() {
  return CONDITIONS.map((condition) => ({
    conditionId: condition.id,
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const resolvedParams = await params;
  const condition = CONDITIONS.find((c) => c.id === resolvedParams.conditionId);
  if (!condition) {
    return { title: "Condition Not Found" };
  }
  const content = CONDITION_CONTENT[condition.id];
  return {
    title: `${condition.title} Support & Therapy | ${SITE_CONFIG.shortName} Gurgaon`,
    description: content?.overview?.slice(0, 155) || condition.description,
    openGraph: {
      title: `${condition.title} | ${SITE_CONFIG.name}`,
      description: condition.description,
      type: "article",
    },
  };
}

export default async function ConditionDetailPage({ params }: PageProps) {
  const resolvedParams = await params;
  const condition = CONDITIONS.find((c) => c.id === resolvedParams.conditionId);

  if (!condition) {
    notFound();
  }

  const Icon = iconMap[condition.icon] || Puzzle;
  const content = CONDITION_CONTENT[condition.id];
  const otherConditions = CONDITIONS.filter((c) => c.id !== condition.id);

  return (
    <main className="pt-28 pb-20 min-h-screen bg-white">
      {/* ═══ Hero Section ═══ */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-devine-lavender-bg via-white to-devine-pink/5" />
        <div className="container mx-auto px-4 md:px-6 relative z-10 py-12 md:py-20">
          <div className="mb-6">
            <Link
              href="/conditions"
              className="inline-flex items-center text-devine-muted hover:text-devine-purple transition-colors font-medium text-sm"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              All Conditions
            </Link>
          </div>

          <div className="max-w-4xl">
            <div className="w-20 h-20 rounded-2xl bg-devine-purple/10 text-devine-purple flex items-center justify-center mb-8 shadow-sm">
              <Icon className="w-10 h-10" />
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-extrabold text-gray-900 mb-6 tracking-tight">
              {condition.title}
            </h1>

            {content && (
              <p className="text-xl md:text-2xl text-devine-purple font-heading font-semibold italic">
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
            {/* Overview */}
            {content && (
              <section>
                <h2 className="text-2xl md:text-3xl font-heading font-bold text-gray-900 mb-6">
                  Understanding {condition.shortTitle}
                </h2>
                <p className="text-lg text-gray-600 leading-relaxed">
                  {content.overview}
                </p>
                <p className="text-lg text-gray-600 leading-relaxed mt-4">
                  {content.understanding}
                </p>
              </section>
            )}

            {/* Signs to Watch — grouped by category */}
            {content && (
              <section>
                <div className="flex items-center gap-3 mb-8">
                  <AlertTriangle className="w-6 h-6 text-amber-600" />
                  <h2 className="text-2xl md:text-3xl font-heading font-bold text-gray-900">
                    Signs to Watch For
                  </h2>
                </div>
                <div className="space-y-6">
                  {content.signs.map((group, i) => (
                    <div
                      key={i}
                      className="bg-gradient-to-br from-amber-50/70 to-orange-50/30 rounded-2xl p-6 md:p-8 border border-amber-100"
                    >
                      <h3 className="font-bold text-gray-900 text-lg mb-4">
                        {group.category}
                      </h3>
                      <ul className="grid sm:grid-cols-2 gap-2">
                        {group.items.map((item, j) => (
                          <li key={j} className="flex items-start gap-3">
                            <ChevronRight className="w-4 h-4 text-amber-600 mt-1 flex-shrink-0" />
                            <span className="text-gray-700 text-sm">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </section>
            )}

            {/* How We Help */}
            {content && (
              <section>
                <div className="flex items-center gap-3 mb-8">
                  <Stethoscope className="w-6 h-6 text-devine-purple" />
                  <h2 className="text-2xl md:text-3xl font-heading font-bold text-gray-900">
                    How We Help at Devine CDC
                  </h2>
                </div>
                <div className="grid sm:grid-cols-2 gap-6">
                  {content.howWeHelp.map((item, i) => (
                    <div
                      key={i}
                      className="bg-gradient-to-br from-gray-50 to-white p-6 rounded-2xl border border-gray-100 hover:border-devine-purple/20 hover:shadow-md transition-all duration-300"
                    >
                      <div className="flex items-start gap-3">
                        <CheckCircle2 className="w-6 h-6 flex-shrink-0 mt-0.5 text-devine-purple" />
                        <div>
                          <h3 className="font-bold text-gray-900 mb-2">
                            {item.title}
                          </h3>
                          <p className="text-sm text-gray-600 leading-relaxed">
                            {item.description}
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </section>
            )}

            {/* Therapies Used */}
            {content && (
              <section>
                <div className="flex items-center gap-3 mb-8">
                  <Lightbulb className="w-6 h-6 text-devine-purple" />
                  <h2 className="text-2xl md:text-3xl font-heading font-bold text-gray-900">
                    Therapies We Use for {condition.shortTitle}
                  </h2>
                </div>
                <div className="space-y-4">
                  {content.therapiesUsed.map((t, i) => (
                    <div
                      key={i}
                      className="flex gap-5 p-5 bg-devine-purple/5 rounded-2xl border border-devine-purple/10"
                    >
                      <div className="flex-shrink-0">
                        <div className="w-10 h-10 rounded-full bg-devine-purple text-white flex items-center justify-center font-bold text-sm">
                          {i + 1}
                        </div>
                      </div>
                      <div>
                        <h3 className="font-bold text-gray-900 text-lg">
                          {t.therapy}
                        </h3>
                        <p className="text-gray-600 mt-1">{t.role}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </section>
            )}

            {/* Myths vs Facts */}
            {content && (
              <section>
                <div className="flex items-center gap-3 mb-8">
                  <ShieldAlert className="w-6 h-6 text-red-500" />
                  <h2 className="text-2xl md:text-3xl font-heading font-bold text-gray-900">
                    Myths vs. Facts
                  </h2>
                </div>
                <div className="space-y-5">
                  {content.myths.map((item, i) => (
                    <div
                      key={i}
                      className="bg-white rounded-2xl border border-gray-100 overflow-hidden shadow-sm"
                    >
                      <div className="bg-red-50 px-6 py-4 border-b border-red-100">
                        <p className="text-sm font-bold text-red-700 uppercase tracking-wide mb-1">
                          ✕ Myth
                        </p>
                        <p className="text-gray-800 font-medium">{item.myth}</p>
                      </div>
                      <div className="bg-emerald-50 px-6 py-4">
                        <p className="text-sm font-bold text-emerald-700 uppercase tracking-wide mb-1">
                          ✓ Fact
                        </p>
                        <p className="text-gray-700">{item.fact}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </section>
            )}

            {/* FAQs */}
            {content && (
              <section>
                <div className="flex items-center gap-3 mb-8">
                  <HelpCircle className="w-6 h-6 text-devine-purple" />
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

            {/* Parent Message */}
            {content && (
              <section className="bg-gradient-to-br from-devine-purple/5 to-devine-pink/5 rounded-3xl p-8 md:p-10 border border-devine-purple/10">
                <div className="flex items-center gap-3 mb-4">
                  <Heart
                    className="w-6 h-6 text-devine-pink"
                    fill="currentColor"
                  />
                  <h3 className="text-xl font-heading font-bold text-gray-900">
                    A Message for Parents
                  </h3>
                </div>
                <p className="text-gray-700 leading-relaxed text-lg italic">
                  &ldquo;{content.parentMessage}&rdquo;
                </p>
                <p className="text-sm text-devine-muted mt-4 font-medium">
                  — The Devine CDC Team
                </p>
              </section>
            )}
          </div>

          {/* ═══ Sidebar ═══ */}
          <div className="lg:col-span-1 space-y-8">
            <div className="sticky top-28 space-y-8">
              {/* CTA Card */}
              <div className="bg-gradient-to-br from-devine-purple to-devine-purple-dark rounded-3xl p-8 shadow-xl text-white">
                <h3 className="text-2xl font-heading font-bold mb-4">
                  We&apos;re here to help
                </h3>
                <p className="text-white/85 mb-6 leading-relaxed">
                  If you have concerns about your child or they have been
                  diagnosed with {condition.shortTitle}, getting support early
                  can make a significant difference.
                </p>
                <div className="space-y-3">
                  <Button
                    asChild
                    size="lg"
                    className="w-full bg-white text-devine-purple hover:bg-white/90 font-bold h-14 rounded-xl"
                  >
                    <Link href={WHATSAPP_URL} target="_blank">
                      Book a Consultation
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
                      Call Us Now
                    </Link>
                  </Button>
                </div>
              </div>

              {/* Other Conditions */}
              <div className="bg-gray-50 rounded-3xl p-6 border border-gray-100">
                <h4 className="font-heading font-bold text-gray-900 mb-4">
                  Other Conditions We Support
                </h4>
                <div className="space-y-3">
                  {otherConditions.map((c) => {
                    const OtherIcon = iconMap[c.icon] || Puzzle;
                    return (
                      <Link
                        key={c.id}
                        href={c.href}
                        className="flex items-center gap-3 p-3 rounded-xl hover:bg-white hover:shadow-sm transition-all group"
                      >
                        <div className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0 bg-devine-purple/10 text-devine-purple">
                          <OtherIcon className="w-5 h-5" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <p className="font-semibold text-gray-900 text-sm">
                            {c.shortTitle}
                          </p>
                        </div>
                        <ArrowRight className="w-4 h-4 text-gray-400 group-hover:text-devine-purple group-hover:translate-x-1 transition-all" />
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
