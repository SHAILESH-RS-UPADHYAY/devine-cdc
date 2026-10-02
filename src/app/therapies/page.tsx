import type { Metadata } from "next";
import { PHOTOS, THERAPY_DETAILS } from "@/lib/site-content";
import { Banner, Btn, CtaPanel, DetailRows, PageHero, Pillars, Section, SectionHead, WhatsAppBtn } from "@/components/site/blocks";

export const metadata: Metadata = {
  title: "Our Therapies",
  description:
    "Speech & Language Therapy, Occupational Therapy, ABA Therapy, Special Education and Psychological & Behavioural Intervention for children at Devine CDC, Gurugram.",
  alternates: { canonical: "/therapies" },
};

export default function TherapiesPage() {
  return (
    <>
      <PageHero
        eyebrow="Our therapies"
        accent="Personalised"
        after=" therapies"
        lead="Our multidisciplinary team provides a range of therapies tailored to your child’s unique needs."
        actions={
          <>
            <Btn href="/consultation">Book a Consultation</Btn>
            <Btn href="#not-sure" kind="secondary">
              Not sure which one?
            </Btn>
          </>
        }
        photo={PHOTOS.ballPit}
        note={
          <>
            Small steps
            <br />
            today
          </>
        }
        chip={{ icon: "shield", title: "Evidence-informed", text: "Compassionate, personalised" }}
      />

      <Section>
        <SectionHead
          eyebrow="Our approach"
          before="One child. "
          accent="One joined-up plan."
          lead="We combine evidence-informed practice with a compassionate, child-centred approach to help every child reach their full potential."
          mode="split"
        />
        <Pillars
          items={[
            { icon: "clipboard", tint: 1, title: "Individualised Plans", text: "Built around your child’s needs." },
            { icon: "shield", tint: 2, title: "Evidence-Informed Practice", text: "Approaches with a proven basis." },
            { icon: "sprout", tint: 3, title: "Holistic Development", text: "Communication, body, learning and feelings." },
            { icon: "users", tint: 4, title: "Parent Involvement", text: "Strategies you can continue at home." },
          ]}
        />
      </Section>

      <Banner lines={["Small steps today.", "Brighter tomorrows."]} />

      <Section>
        <DetailRows items={THERAPY_DETAILS} />
      </Section>

      <Section className="pg-sec--tight" id="not-sure">
        <CtaPanel
          title="Not sure which therapy is right?"
          text="Let’s discuss your child’s needs and create a personalised plan together."
          actions={
            <>
              <Btn href="/consultation" kind="light">
                Talk to Our Team
              </Btn>
              <WhatsAppBtn />
            </>
          }
        />
      </Section>
    </>
  );
}
