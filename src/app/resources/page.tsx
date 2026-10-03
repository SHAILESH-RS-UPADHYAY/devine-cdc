import type { Metadata } from "next";
import Image from "next/image";
import { PHOTOS, WORKSHEETS } from "@/lib/site-content";
import { Icon } from "@/components/site/Icon";
import { WorksheetDownload } from "@/components/site/forms/WorksheetDownload";
import { Btn, CtaPanel, PageHero, Quote, Section, SectionHead, WhatsAppBtn } from "@/components/site/blocks";

export const metadata: Metadata = {
  title: "Resources for Parents",
  description:
    "Free printable worksheets and study material for parents from the Devine Child Development Centre team in Gurugram, starting with a 58-page learning worksheet for ages 4 – 5.",
  alternates: { canonical: "/resources" },
};

// Categories the clinic will publish into (client: worksheets and articles as study material for parents).
const COMING_NEXT = ["Parent guides", "Development & milestones", "Therapy at home", "Behaviour support", "Sensory & regulation", "Communication & speech"];

export default function ResourcesPage() {
  return (
    <>
      <PageHero
        eyebrow="Resources"
        before="Understanding your child "
        accent="starts here."
        lead="Parent-friendly study material, practical activities and supportive tools for your child’s development journey."
        actions={
          <>
            <Btn href="#study-material">Get the Worksheets</Btn>
            <Btn href="/consultation" kind="secondary">
              Book a Consultation
            </Btn>
          </>
        }
        photo={PHOTOS.tracing}
        note={
          <>
            Learn.
            <br />
            Grow.
            <br />
            Thrive.
          </>
        }
      />

      <Section id="study-material">
        <SectionHead
          eyebrow="Study material for parents"
          before="Worksheets for "
          accent="learning at home."
          lead="Free, printable activities prepared by our team. Share your number to download, and we’ll let you know when new material is added."
          mode="split"
        />

        <div className="ws-list">
          {WORKSHEETS.map((w) => (
            <article key={w.id} className="ws-card reveal" id={w.id}>
              <figure className="ws-card__cover">
                <Image src={w.cover} alt={`Cover of the Devine ${w.title} for ages ${w.ageGroup}`} placeholder="blur" sizes="(max-width: 760px) 70vw, 300px" />
                <span className="ws-card__age">Age {w.ageGroup}</span>
              </figure>
              <div className="ws-card__body">
                <span className="pg-meta">Free worksheet</span>
                <h3>
                  {w.title} · {w.ageGroup}
                </h3>
                <p>{w.description}</p>
                <ul className="ws-card__facts">
                  <li>
                    <Icon name="doc" />
                    {w.pages} pages
                  </li>
                  <li>
                    <Icon name="download" />
                    {w.sizeLabel}
                  </li>
                  {w.topics.map((t) => (
                    <li key={t}>
                      <Icon name="check" />
                      {t}
                    </li>
                  ))}
                </ul>
                <WorksheetDownload worksheet={w} />
              </div>
            </article>
          ))}
        </div>

        <div className="ws-next reveal">
          <div>
            <h3>More study material is on its way</h3>
            <p>Our team is adding worksheets and parent articles step by step. Topics coming next:</p>
          </div>
          <ul className="pg-tags">
            {COMING_NEXT.map((t) => (
              <li key={t}>{t}</li>
            ))}
          </ul>
        </div>

        <Quote text="Small steps, supported by the right information, can make a big difference." />
      </Section>

      <Section className="pg-sec--tight">
        <CtaPanel
          title="Need support beyond resources?"
          text="Our team is here to guide you. Book a consultation to discuss your child’s unique needs."
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
    </>
  );
}
