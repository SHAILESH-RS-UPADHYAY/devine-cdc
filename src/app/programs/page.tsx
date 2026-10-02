import type { Metadata } from "next";
import { PHOTOS, PROGRAMMES } from "@/lib/site-content";
import { Banner, Btn, CtaPanel, DetailRows, PageHero, Pillars, Section, SectionHead, WhatsAppBtn } from "@/components/site/blocks";

export const metadata: Metadata = {
  title: "Our Programmes",
  description:
    "Early Intervention, School Readiness (3 – 6 years), Individualised Therapy Programmes and Parent Training & Support at Devine Child Development Centre, Gurugram.",
  alternates: { canonical: "/programs" },
};

export default function ProgrammesPage() {
  return (
    <>
      <PageHero
        eyebrow="Our programmes"
        before="The right support, at the "
        accent="right time."
        lead="Structured, individualised programmes designed to support your child’s unique journey."
        actions={
          <>
            <Btn href="/consultation">Book a Consultation</Btn>
            <Btn href="#start" kind="secondary">
              Where to start?
            </Btn>
          </>
        }
        photo={PHOTOS.sensoryRoom}
        note={
          <>
            Every step
            <br />
            counts
          </>
        }
        chip={{ icon: "users", title: "Parent-involved", text: "At every stage" }}
      />

      <Section>
        <SectionHead
          eyebrow="How our programmes work"
          before="Built around "
          accent="your child."
          lead="Every child develops differently. Our programmes are designed around each child’s individual needs, strengths and sensory profile, bringing together personalised goals, multidisciplinary support and active parent involvement."
          mode="split"
        />
        <Pillars
          items={[
            { icon: "shield", tint: 1, title: "Evidence-Informed", text: "Grounded in proven practice." },
            { icon: "user-check", tint: 2, title: "Individualised", text: "Shaped by strengths and sensory profile." },
            { icon: "target", tint: 3, title: "Goal-Oriented", text: "Clear goals, reviewed regularly." },
            { icon: "home", tint: 4, title: "Family-Centred", text: "Parents involved at every step." },
          ]}
        />
      </Section>

      <Banner lines={["Every child’s journey is unique.", "We’re here for every step."]} />

      <Section>
        <DetailRows items={PROGRAMMES.slice(0, 2)} />
      </Section>

      <Section className="pg-sec--tight" id="start">
        <CtaPanel
          title="Where to start?"
          text="Let’s understand your child’s needs together and find the right support."
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

      <Section>
        <DetailRows items={PROGRAMMES.slice(2)} />
      </Section>

      <Banner
        lines={["Different journeys.", "Meaningful progress.", "Together."]}
        photo={PHOTOS.groupSession}
        action={
          <Btn href="/consultation" kind="light">
            Book a Consultation
          </Btn>
        }
      />
    </>
  );
}
