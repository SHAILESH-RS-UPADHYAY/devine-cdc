import type { Metadata } from "next";
import Image from "next/image";
import { FEATURED_READS, LIBRARY, PHOTOS, WORKSHEETS, type LibraryItem } from "@/lib/site-content";
import { Photo } from "@/components/site/Photo";
import { Icon } from "@/components/site/Icon";
import { WorksheetDownload } from "@/components/site/forms/WorksheetDownload";
import { Btn, CtaPanel, PageHero, Quote, Section, SectionHead, WhatsAppBtn } from "@/components/site/blocks";

export const metadata: Metadata = {
  title: "Resources for Parents",
  description:
    "Free printable worksheets for ages 2 – 10, activity books, daily routine and visual schedule printables, and research reads for parents from Devine Child Development Centre, Gurugram.",
  alternates: { canonical: "/resources" },
};

/** One free resource: opens or downloads straight away (no form, unlike worksheets). */
function LibraryLink({ item }: { item: LibraryItem }) {
  const paper = item.kind === "Research paper";
  return (
    <a className="lib-item" href={item.file} {...(paper ? { target: "_blank", rel: "noopener" } : { download: "" })}>
      <span className="lib-item__kind">{item.kind}</span>
      <strong>{item.title}</strong>
      <span className="lib-item__text">{item.summary}</span>
      {item.source && <span className="lib-item__source">{item.source}</span>}
      <span className="lib-item__go">
        {paper ? "Read paper" : "Download PDF"} · {item.pages} {item.pages === 1 ? "page" : "pages"}, {item.sizeLabel} <Icon name={paper ? "arrow" : "download"} />
      </span>
    </a>
  );
}

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
          lead="Free, printable activities prepared by our team for ages 2 to 10. Share your number once to download, and we’ll let you know when new material is added."
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

        <Quote text="Small steps, supported by the right information, can make a big difference." />
      </Section>

      <Section id="library" className="pg-alt">
        <SectionHead eyebrow="Guides and research" before="Handpicked to support " accent="your journey." lead="Reading our team recommends to parents. Free to open, no sign-up needed." mode="split" />
        <div className="lib-featured">
          {FEATURED_READS.map((f) => (
            <a key={f.title} className="lib-feature reveal" href={f.item.file} target="_blank" rel="noopener">
              <figure>
                <Photo photo={f.photo} sizes="(max-width: 760px) 90vw, 380px" />
                <span className="lib-feature__tag">{f.tag}</span>
              </figure>
              <div>
                <h3>{f.title}</h3>
                <p>{f.text}</p>
                <span className="link-arrow">
                  Read guide <Icon name="arrow" />
                </span>
              </div>
            </a>
          ))}
        </div>

        <div className="lib-topics">
          {LIBRARY.map((t) => (
            <section key={t.id} id={t.id} className={`lib-topic pg-t${t.tint} reveal`} aria-labelledby={`${t.id}-h`}>
              <header>
                <span className="pg-ic">
                  <Icon name={t.icon} />
                </span>
                <h3 id={`${t.id}-h`}>{t.title}</h3>
                <p>{t.text}</p>
              </header>
              {t.items.length ? (
                <div className="lib-topic__items">
                  {t.items.map((item) => (
                    <LibraryLink key={item.file} item={item} />
                  ))}
                </div>
              ) : (
                <p className="lib-topic__soon">Coming soon. Our team is preparing material for this topic.</p>
              )}
            </section>
          ))}
        </div>
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
