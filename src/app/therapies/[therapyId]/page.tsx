import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { CONTACT, SITE_CONFIG, THERAPIES } from "@/lib/constants";
import { THERAPY_CONTENT } from "@/lib/therapy-content";
import { THERAPY_DETAILS, type Photo as PhotoData } from "@/lib/site-content";
import type { IconName } from "@/components/site/Icon";
import { Icon } from "@/components/site/Icon";
import { Banner, Btn, CtaPanel, FaqList, PageHero, Pillars, Quote, Section, SectionHead, Steps, TEL, WhatsAppBtn } from "@/components/site/blocks";
import abaImg from "@/assets/clinic/clinic_aba_early_intervention.webp";
import otImg from "@/assets/clinic/clinic_occupational_therapy.webp";
import speechImg from "@/assets/clinic/clinic_speech_expression.webp";
import specialEdImg from "@/assets/clinic/clinic_sensory_rangoli.webp";
import psychImg from "@/assets/clinic/clinic_behavioral_learning.webp";

type Params = { params: Promise<{ therapyId: string }> };

// Route id → its card on /therapies (hero photo, icon, colour) and a second clinic photo for the banner.
const LOOK: Record<string, { detail: string; clinic: PhotoData }> = {
  "aba-therapy": { detail: "aba-therapy", clinic: { src: abaImg, alt: "Devine therapists guiding a child during a structured ABA session" } },
  "occupational-therapy": { detail: "occupational-therapy", clinic: { src: otImg, alt: "A one-to-one occupational therapy fine motor session at Devine" } },
  "speech-therapy": { detail: "speech-language-therapy", clinic: { src: speechImg, alt: "Children building confident communication at Devine" } },
  "special-education": { detail: "special-education", clinic: { src: specialEdImg, alt: "A hands-on special education activity at Devine" } },
  "psychological-behavioral-intervention": { detail: "psychological-intervention", clinic: { src: psychImg, alt: "A psychologist in an interactive session with a child at Devine" } },
};

const BENEFIT_ICONS: IconName[] = ["message", "users", "heart", "target", "star", "sprout"];
const STEP_ICONS: IconName[] = ["clipboard", "compass", "activity", "users", "check"];

function load(id: string) {
  const therapy = THERAPIES.find((t) => t.id === id);
  const content = THERAPY_CONTENT[id];
  const look = LOOK[id];
  const detail = THERAPY_DETAILS.find((d) => d.id === look?.detail);
  return therapy && content && look && detail ? { therapy, content, look, detail } : null;
}

export function generateStaticParams() {
  return THERAPIES.map((t) => ({ therapyId: t.id }));
}

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const data = load((await params).therapyId);
  if (!data) return { title: "Therapy Not Found" };
  const { therapy, content } = data;
  return {
    title: `${therapy.fullTitle} for Children in Gurgaon`,
    description: content.whatIs.slice(0, 155),
    alternates: { canonical: therapy.href },
    // A page-level openGraph replaces the layout's, so the share image is restated here.
    openGraph: {
      title: `${therapy.fullTitle} | ${SITE_CONFIG.name}`,
      description: therapy.shortDescription,
      type: "article",
      url: therapy.href,
      images: [{ url: SITE_CONFIG.ogImage, width: 1200, height: 630, alt: SITE_CONFIG.name }],
    },
  };
}

export default async function TherapyDetailPage({ params }: Params) {
  const data = load((await params).therapyId);
  if (!data) notFound();
  const { therapy, content, look, detail } = data;

  return (
    <>
      <PageHero
        eyebrow={therapy.title}
        before={`${therapy.fullTitle}: `}
        accent={content.heroTagline}
        lead={therapy.shortDescription}
        actions={
          <>
            <Btn href="/consultation">Book a Consultation</Btn>
            <WhatsAppBtn />
          </>
        }
        photo={detail.photo}
        chip={{ icon: detail.icon, title: "RCI licensed team", text: "Sector 51, Gurugram" }}
      />

      <Section className="pg-narrow">
        <SectionHead eyebrow="Understanding the therapy" before={`What is ${therapy.title}?`} />
        <div className="pg-prose reveal">
          <p>{content.whatIs}</p>
          <p>{content.whyItMatters}</p>
        </div>
      </Section>

      <Section className="pg-alt">
        <SectionHead eyebrow="How it helps" before="Benefits for " accent="your child." mode="center" />
        <Pillars items={content.benefits.map((b, i) => ({ icon: BENEFIT_ICONS[i % BENEFIT_ICONS.length], tint: ((i % 5) + 1) as 1, title: b.title, text: b.description }))} />
      </Section>

      <Banner lines={["Every child learns differently.", "We plan around yours."]} photo={look.clinic} />

      <Section>
        <SectionHead eyebrow="Our approach" before="How we " accent="work together." mode="center" />
        <Steps items={content.approach.map((a, i) => ({ title: a.step, text: a.detail, icon: STEP_ICONS[i % STEP_ICONS.length], tint: ((i % 5) + 1) as 1 }))} />
      </Section>

      <Section className="pg-alt">
        <SectionHead eyebrow="When to reach out" before="Signs you might " accent="notice." lead="No diagnosis is needed to talk to us. If any of these sound familiar, a consultation can help." mode="split" />
        <ul className="pg-signs reveal">
          {content.signsToWatch.map((s) => (
            <li key={s}>
              <Icon name="check" />
              {s}
            </li>
          ))}
        </ul>
        <Quote text={content.parentNote} />
      </Section>

      <Section className="pg-narrow">
        <SectionHead eyebrow="Questions parents ask" before="Common " accent="questions." mode="center" />
        <FaqList items={content.faqs.map((f) => ({ q: f.question, a: f.answer }))} openFirst />
      </Section>

      <Section className="pg-sec--tight">
        <CtaPanel
          title={`Is ${therapy.title} right for your child?`}
          text="Book a consultation and our team will help you understand the next step."
          actions={
            <>
              <Btn href="/consultation" kind="light">
                Book a Consultation
              </Btn>
              <Btn href={TEL} kind="secondary">
                Call {CONTACT.phoneDisplay}
              </Btn>
            </>
          }
        />
      </Section>
    </>
  );
}
