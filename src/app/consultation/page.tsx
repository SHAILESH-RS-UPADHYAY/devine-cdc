import type { Metadata } from "next";
import { CONTACT, HOURS, WHATSAPP_URL } from "@/lib/constants";
import { CONSULT_QA, PHOTOS } from "@/lib/site-content";
import { Icon } from "@/components/site/Icon";
import { ConsultationForm } from "@/components/site/forms/LeadForms";
import { Banner, Btn, CtaPanel, FaqList, MapBlock, PageHero, Quote, Section, SectionHead, Steps, TEL, Ways, WhatsAppBtn } from "@/components/site/blocks";

export const metadata: Metadata = {
  title: "Book a Consultation",
  description:
    "Request a consultation at Devine Child Development Centre, Gurugram. 30 – 40 minutes including time observing your child, ₹1,000, in person or online. No diagnosis needed.",
  alternates: { canonical: "/consultation" },
};

export default function ConsultationPage() {
  return (
    <>
      <PageHero
        eyebrow="Book a consultation"
        before="A conversation that starts with "
        accent="understanding."
        lead="Tell us about your child, your concerns and what you’ve been noticing."
        extra={
          <ul className="pg-ticks reveal" data-d="2">
            <li>
              <Icon name="clock" />
              30 – 40 minute consultation, including time observing your child
            </li>
            <li>
              <Icon name="check" />
              No diagnosis needed to book
            </li>
            <li>
              <Icon name="users" />
              Both parents welcome, in person or online
            </li>
          </ul>
        }
        actions={
          <Btn href={TEL} kind="secondary">
            Call {CONTACT.phoneDisplay}
          </Btn>
        }
        side={
          <div className="pg-formcard reveal" id="request">
            <div>
              <p className="pg-formcard__kicker">Book a consultation</p>
              <h2 className="pg-formcard__title">Request a consultation</h2>
              <p className="pg-formcard__sub">Tell us a little about your child. We’ll call you within 1 – 2 working days.</p>
              <ConsultationForm />
            </div>
          </div>
        }
      />

      <Banner lines={["You don’t have to figure this out alone.", "We’re here for you."]} photo={PHOTOS.activityBoard} />

      <Section>
        <SectionHead eyebrow="What happens next" before="What happens " accent="next?" lead="Simple, unhurried, and always with you in the loop." mode="center" />
        <Steps
          items={[
            { title: "We’ll get in touch", text: "Within 1 – 2 working days, at a time that suits your family.", icon: "phone", tint: 1 },
            { title: "We’ll understand your child", text: "Their developmental needs, strengths and your concerns.", icon: "message", tint: 2 },
            { title: "We’ll create a way forward", text: "A personalised plan based on your child’s needs.", icon: "users", tint: 3 },
          ]}
        />
      </Section>

      <Section className="pg-alt">
        <SectionHead eyebrow="Prefer to talk directly?" before="We’re happy to " accent="speak with you." lead="Call or WhatsApp us and we’ll answer your questions." mode="center" />
        <Ways
          items={[
            { icon: "phone", tint: 1, title: "Call Us", value: CONTACT.phoneDisplay, small: HOURS.short, href: TEL },
            { icon: "whatsapp", tint: 3, title: "WhatsApp Us", value: CONTACT.phoneDisplay, small: HOURS.short, href: WHATSAPP_URL },
          ]}
        />
        <Quote text="Sometimes, the first step is simply being heard." />
      </Section>

      <Section className="pg-narrow">
        <SectionHead eyebrow="Common questions" before="Before your " accent="first visit." mode="center" />
        <FaqList items={CONSULT_QA} openFirst />
      </Section>

      <Section className="pg-alt">
        <SectionHead eyebrow="Visit our centre" before="We’d love to " accent="welcome you." mode="center" />
        <MapBlock />
      </Section>

      <Section className="pg-sec--tight">
        <CtaPanel
          title="Ready to take the next step?"
          text="You don’t have to figure it all out alone."
          actions={
            <>
              <Btn href="#request" kind="light">
                Book a Consultation
              </Btn>
              <WhatsAppBtn />
            </>
          }
        />
      </Section>
    </>
  );
}
