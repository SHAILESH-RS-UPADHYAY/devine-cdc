import type { Metadata } from "next";
import { CONTACT } from "@/lib/constants";
import { PHOTOS } from "@/lib/site-content";
import { Banner, Btn, CtaPanel, Duo, PageHero, Pillars, Quote, Section, SectionHead } from "@/components/site/blocks";

export const metadata: Metadata = {
  title: "Our Team",
  description:
    "Meet the multidisciplinary team at Devine Child Development Centre, Gurugram, led by Clinical Psychologist Mrs. Komal Pahuja: compassionate, RCI-licensed and child-focused.",
  alternates: { canonical: "/team" },
};

export default function TeamPage() {
  return (
    <>
      <PageHero
        eyebrow="Behind every brighter tomorrow"
        before="A team that "
        accent="cares."
        lead="Meet the professionals who walk this journey with you."
        actions={
          <>
            <Btn href="/consultation">Book a Consultation</Btn>
            <Btn href="#approach" kind="secondary">
              Our Approach
            </Btn>
          </>
        }
        photo={PHOTOS.team}
        note={
          <>
            Real people.
            <br />
            Real impact.
          </>
        }
      />

      <Section>
        <SectionHead
          eyebrow="Our people. Our purpose."
          before="Different expertise. "
          accent="A shared belief."
          lead="Our multidisciplinary team brings together professionals from different areas of child development, working collaboratively to understand each child’s needs and create personalised support plans."
          mode="split"
        />
        <Pillars
          items={[
            { icon: "heart", tint: 5, title: "Compassion in Action" },
            { icon: "users", tint: 2, title: "Multidisciplinary Collaboration" },
            { icon: "star", tint: 4, title: "Continuous Learning" },
            { icon: "home", tint: 3, title: "Child & Family Centred" },
          ]}
        />
        <Quote text="Different expertise. A shared belief: every child can thrive." />
      </Section>

      <Section id="approach">
        <SectionHead eyebrow="Our approach" before="What makes our team " accent="different?" mode="center" />
        <Duo
          items={[
            { icon: "users", tint: 2, title: "Collaborative Care", text: "We work together across disciplines for the best outcomes." },
            { icon: "heart", tint: 5, title: "Empathy-Led Practice", text: "Every interaction is guided by respect, kindness and understanding." },
            { icon: "shield", tint: 3, title: "Evidence-Informed Methods", text: "Strategies grounded in research and tailored to each child." },
            { icon: "sprout", tint: 4, title: "Ongoing Development", text: "Our team keeps learning to bring you the best care." },
          ]}
        />
      </Section>

      <Banner lines={["A brighter tomorrow", "is a team effort."]} photo={PHOTOS.teamWithFamilies} />

      <Section className="pg-sec--tight">
        <CtaPanel
          title="Join our team"
          text="Passionate about making a difference? We’d love to hear from you."
          actions={
            <Btn href={`mailto:${CONTACT.email}?subject=Career%20enquiry`} kind="light">
              Share Your CV
            </Btn>
          }
        />
        <Quote text="It takes a team of caring people to help a child shine." cite="— The Devine team" />
      </Section>
    </>
  );
}
