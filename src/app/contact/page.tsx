import type { Metadata } from "next";
import { ADDRESS, CONTACT, HOURS, WHATSAPP_URL } from "@/lib/constants";
import { CONTACT_QA, PHOTOS } from "@/lib/site-content";
import { ContactForm } from "@/components/site/forms/LeadForms";
import { Banner, Btn, CtaPanel, FaqList, MapBlock, PageHero, Section, SectionHead, TEL, Ways, WhatsAppBtn } from "@/components/site/blocks";

export const metadata: Metadata = {
  title: "Contact Us",
  description: `Call, WhatsApp, email or visit Devine Child Development Centre at ${ADDRESS.short}. Open ${HOURS.short}.`,
  alternates: { canonical: "/contact" },
};

export default function ContactPage() {
  const [user, domain] = CONTACT.email.split("@");
  return (
    <>
      <PageHero
        eyebrow="Get in touch"
        before="We’re here for your "
        accent="child’s journey."
        lead="Have a question? Want to learn more? We’d love to hear from you."
        actions={
          <>
            <Btn href="#send-message">Send a Message</Btn>
            <WhatsAppBtn />
          </>
        }
        photo={PHOTOS.fineMotor}
        note={
          <>
            Different journeys.
            <br />
            Meaningful progress.
          </>
        }
        chip={{ icon: "clock", title: "Mon – Sat", text: HOURS.display }}
      />

      <Section>
        <SectionHead eyebrow="Reach out to us" before="Choose the way that " accent="works for you." mode="center" />
        <Ways
          items={[
            { icon: "phone", tint: 1, title: "Call Us", value: CONTACT.phoneDisplay, small: HOURS.short, href: TEL },
            { icon: "whatsapp", tint: 3, title: "WhatsApp Us", value: CONTACT.phoneDisplay, small: "Quick replies during working hours", href: WHATSAPP_URL },
            {
              icon: "mail",
              tint: 2,
              title: "Email Us",
              value: (
                <>
                  {user}@<wbr />
                  {domain}
                </>
              ),
              small: "We’ll get back to you within 1 – 2 working days",
              href: `mailto:${CONTACT.email}`,
            },
            { icon: "pin", tint: 4, title: "Visit Our Centre", value: ADDRESS.street, small: `${ADDRESS.landmark}, ${ADDRESS.city}`, href: ADDRESS.googleMapsUrl },
          ]}
        />
      </Section>

      <Banner lines={["Small conversations", "can lead to big steps."]} />

      <Section className="pg-alt">
        <div className="pg-contact-grid">
          <div className="pg-formcard reveal" id="send-message">
            <div>
              <p className="pg-formcard__kicker">Send us a message</p>
              <h2 className="pg-formcard__title">Send us a message</h2>
              <p className="pg-formcard__sub">Fill in the form below and our team will get back to you soon.</p>
              <ContactForm />
            </div>
          </div>
          <div className="pg-contact-side">
            <SectionHead
              eyebrow="Find us here"
              before="Visit our "
              accent="centre."
              lead="Come and meet our team and see the space your child will spend time in."
            />
            <MapBlock />
          </div>
        </div>
      </Section>

      <Section className="pg-narrow">
        <SectionHead eyebrow="Quick answers" before="Common " accent="questions." lead="Still need help? Reach out to us." mode="center" />
        <FaqList items={CONTACT_QA} openFirst />
      </Section>

      <Section className="pg-sec--tight">
        <CtaPanel
          title="Still have questions?"
          text="Our team is happy to help with any queries about our programmes, therapies or the next steps."
          actions={
            <>
              <Btn href={TEL} kind="light">
                Talk to Our Team
              </Btn>
              <WhatsAppBtn />
            </>
          }
        />
      </Section>

      <Banner lines={["Brighter futures are", "built together."]} photo={PHOTOS.teamWithFamilies} />
    </>
  );
}
