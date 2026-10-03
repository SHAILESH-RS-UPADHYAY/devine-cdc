import { CONTACT, ADDRESS } from "@/lib/constants";
import { EmailText, Eyebrow, Section } from "./blocks";

export type LegalSection = { title: string; body: React.ReactNode };

/** Shared layout for the privacy policy and terms: readable prose, one column, last-updated date. */
export function LegalPage({ eyebrow, title, updated, intro, sections }: { eyebrow: string; title: string; updated: string; intro: string; sections: LegalSection[] }) {
  return (
    <Section className="pg-narrow">
      <Eyebrow>{eyebrow}</Eyebrow>
      <h1 className="pg-h1">{title}</h1>
      <p className="pg-legal__meta">Last updated: {updated}</p>
      <div className="pg-legal">
        <p>{intro}</p>
        {sections.map((s) => (
          <section key={s.title}>
            <h2>{s.title}</h2>
            {s.body}
          </section>
        ))}
        <section>
          <h2>Contact us</h2>
          <p>
            Devine Child Development Centre, {ADDRESS.full.replace(" — ", " ")}
            <br />
            Phone: <a href={`tel:${CONTACT.phone.replace(/\s/g, "")}`}>{CONTACT.phoneDisplay}</a> · Email: <a href={`mailto:${CONTACT.email}`}><EmailText /></a>
          </p>
        </section>
      </div>
    </Section>
  );
}
