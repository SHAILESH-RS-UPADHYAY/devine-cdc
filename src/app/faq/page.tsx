import type { Metadata } from "next";
import { CONTACT } from "@/lib/constants";
import { FAQ_GROUPS, PHOTOS } from "@/lib/site-content";
import { Icon } from "@/components/site/Icon";
import { Banner, Btn, CtaPanel, FaqList, PageHero, Section, SectionHead, TEL, Topics, WhatsAppBtn } from "@/components/site/blocks";

export const metadata: Metadata = {
  title: "Frequently Asked Questions",
  description:
    "Answers about consultations, fees, age group (2.5 – 14 years), programmes, therapies and assessments at Devine Child Development Centre, Gurugram.",
  alternates: { canonical: "/faq" },
};

// FAQPage structured data from the same answers shown on the page.
const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: FAQ_GROUPS.flatMap((g) => g.items).map((x) => ({
    "@type": "Question",
    name: x.q,
    acceptedAnswer: { "@type": "Answer", text: x.a },
  })),
};

function Group({ group }: { group: (typeof FAQ_GROUPS)[number] }) {
  return (
    <section className="pg-faqgroup" id={group.id} aria-labelledby={`${group.id}-h`}>
      <header className="pg-faqgroup__head reveal">
        <span className={`pg-ic pg-t${group.tint}`}>
          <Icon name={group.icon} />
        </span>
        <div>
          <h2 id={`${group.id}-h`}>{group.title}</h2>
          <p>{group.sub}</p>
        </div>
      </header>
      <FaqList items={group.items} />
    </section>
  );
}

export default function FaqPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd).replace(/</g, "\\u003c") }} />
      <PageHero
        eyebrow="FAQ"
        before="Questions? "
        accent="We’re here to help."
        lead="Find answers to common questions about our programmes, therapies, assessments and more."
        actions={
          <>
            <Btn href="#browse">Browse Topics</Btn>
            <Btn href="/consultation" kind="secondary">
              Book a Consultation
            </Btn>
          </>
        }
        photo={PHOTOS.celebration}
        note={
          <>
            Curious minds.
            <br />
            Brighter futures.
          </>
        }
      />

      <Section id="browse">
        <SectionHead eyebrow="Browse by topic" before="Jump to what’s " accent="relevant to you." mode="split" />
        <Topics
          items={[
            { icon: "message", tint: 1, title: "About Devine", text: "Who we are", href: "#about-devine" },
            { icon: "users", tint: 2, title: "Programmes", text: "Age groups and approach", href: "#programmes" },
            { icon: "puzzle", tint: 3, title: "Therapies", text: "What we offer", href: "#therapies" },
            { icon: "doc", tint: 4, title: "Assessments", text: "Process and reports", href: "#assessments" },
            { icon: "calendar", tint: 5, title: "Consultation", text: "Bookings and sessions", href: "#consultation" },
            { icon: "shield", tint: 1, title: "Fees", text: "Payments and support", href: "#fees" },
          ]}
        />
      </Section>

      <Banner lines={["Every question brings you closer", "to a brighter tomorrow."]} />

      <Section className="pg-narrow">
        {FAQ_GROUPS.slice(0, 2).map((g) => (
          <Group key={g.id} group={g} />
        ))}
      </Section>

      <Section className="pg-sec--tight">
        <CtaPanel
          title="Still have questions?"
          text="Talk to our team and let us help you understand the next step for your child."
          actions={
            <>
              <Btn href="/consultation" kind="light">
                Book a Consultation
              </Btn>
              <WhatsAppBtn />
            </>
          }
        />
      </Section>

      <Section className="pg-narrow">
        {FAQ_GROUPS.slice(2).map((g) => (
          <Group key={g.id} group={g} />
        ))}
      </Section>

      <Section className="pg-sec--tight">
        <CtaPanel
          title="Can’t find what you’re looking for?"
          text="Our team is happy to answer your questions and guide you further."
          note="We’re just a message away!"
          actions={
            <>
              <Btn href="/contact" kind="light">
                Get in Touch
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
