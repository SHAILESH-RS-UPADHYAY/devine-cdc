// Building blocks for the inner pages of the approved design (About, Programmes, Therapies, …).
// Pure server components: markup mirrors the approved template so its CSS applies unchanged.

import { Fragment } from "react";
import Link from "next/link";
import { ADDRESS, CONTACT, HOURS, WHATSAPP_URL } from "@/lib/constants";
import type { DetailItem, Photo as PhotoData, QA, Tint } from "@/lib/site-content";
import { Icon, type IconName } from "./Icon";
import { Photo } from "./Photo";

type Kids = { children?: React.ReactNode };

const isExternal = (href: string) => /^(https?:|tel:|mailto:)/.test(href);

function SmartLink({ href, className, children, ...rest }: { href: string; className?: string } & Kids & React.AnchorHTMLAttributes<HTMLAnchorElement>) {
  if (isExternal(href)) {
    const ext = href.startsWith("http") ? { target: "_blank", rel: "noopener noreferrer" } : {};
    return (
      <a href={href} className={className} {...ext} {...rest}>
        {children}
      </a>
    );
  }
  return (
    <Link href={href} className={className} {...rest}>
      {children}
    </Link>
  );
}

// ── Buttons & links ──────────────────────────────────────

type BtnKind = "primary" | "secondary" | "light" | "wa";

export function Btn({ href, kind = "primary", children }: { href: string; kind?: BtnKind } & Kids) {
  const cls = { primary: "btn btn--primary", secondary: "btn btn--ghost", light: "btn btn--paper", wa: "btn btn--wa" }[kind];
  return (
    <SmartLink href={href} className={cls}>
      {kind === "wa" && <Icon name="whatsapp" fill />}
      {children}
      {kind !== "wa" && kind !== "secondary" && <> <Icon name="arrow" /></>}
    </SmartLink>
  );
}

export const WhatsAppBtn = () => <Btn href={WHATSAPP_URL} kind="wa">WhatsApp Us</Btn>;

export function LinkArrow({ href, children }: { href: string } & Kids) {
  return (
    <SmartLink href={href} className="link-arrow">
      {children} <Icon name="arrow" />
    </SmartLink>
  );
}

// ── Typography ───────────────────────────────────────────

export function Eyebrow({ children }: Kids) {
  return <span className="eyebrow reveal">{children}</span>;
}

const Underline = () => (
  <svg viewBox="0 0 300 14" preserveAspectRatio="none" aria-hidden="true">
    <path d="M3 10C60 3 150 1 297 7" stroke="#F4A76C" strokeWidth="5" fill="none" strokeLinecap="round" />
  </svg>
);

export function Title({ as = "h2", before = "", accent, after = "", id }: { as?: "h1" | "h2"; before?: string; accent?: string; after?: string; id?: string }) {
  const Tag = as;
  return (
    <Tag className={`${as === "h1" ? "pg-h1" : "h2 pg-h2"} reveal`} id={id}>
      {before}
      {accent && (
        <em>
          {accent}
          {as === "h1" && <Underline />}
        </em>
      )}
      {after}
    </Tag>
  );
}

export function Quote({ text, cite }: { text: string; cite?: string }) {
  return (
    <blockquote className="pg-quote reveal">
      <p>{text}</p>
      {cite && <cite>{cite}</cite>}
    </blockquote>
  );
}

// ── Layout ───────────────────────────────────────────────

export function Section({ children, className = "", id, label }: Kids & { className?: string; id?: string; label?: string }) {
  return (
    <section className={`section pg-sec ${className}`.trim()} id={id} aria-label={label}>
      <div className="dv-wrap">{children}</div>
    </section>
  );
}

export function SectionHead({
  eyebrow,
  before,
  accent,
  after,
  lead,
  mode,
  id,
}: { eyebrow: string; before: string; accent?: string; after?: string; lead?: string; mode?: "split" | "center"; id?: string }) {
  const title = <Title before={before} accent={accent} after={after} id={id} />;
  const leadEl = lead && (
    <p className="lead reveal">
      {lead}
    </p>
  );
  if (mode === "split")
    return (
      <div className="pg-head pg-head--split">
        <div>
          <Eyebrow>{eyebrow}</Eyebrow>
          {title}
        </div>
        {leadEl}
      </div>
    );
  return (
    <div className={`pg-head${mode ? ` pg-head--${mode}` : ""}`}>
      <Eyebrow>{eyebrow}</Eyebrow>
      {title}
      {leadEl}
    </div>
  );
}

// ── Page hero ────────────────────────────────────────────

export function PageHero({
  eyebrow,
  before,
  accent,
  after,
  lead,
  actions,
  photo,
  note,
  chip,
  extra,
  side,
}: {
  eyebrow: string;
  before?: string;
  accent: string;
  after?: string;
  lead: string;
  actions: React.ReactNode;
  photo?: PhotoData;
  note?: React.ReactNode;
  chip?: { icon: IconName; title: string; text: string };
  extra?: React.ReactNode;
  side?: React.ReactNode;
}) {
  return (
    <section className="pg-hero">
      <div className={`dv-wrap pg-hero__grid${side || photo ? "" : " pg-hero__grid--solo"}`}>
        <div className="pg-hero__copy">
          <Eyebrow>{eyebrow}</Eyebrow>
          <Title as="h1" before={before} accent={accent} after={after} />
          <p className="pg-hero__lead reveal">
            {lead}
          </p>
          {extra}
          <div className="pg-actions reveal">
            {actions}
          </div>
        </div>
        {side ??
          (photo && (
            <figure className="pg-hero__media reveal">
              <div className="pg-hero__frame">
                <Photo photo={photo} className="pg-hero__img" sizes="(max-width: 960px) 90vw, 520px" eager />
              </div>
              {note && (
                <p className="pg-note pg-hero__note" aria-hidden="true">
                  {note}
                </p>
              )}
              {chip && (
                <div className="pg-hero__chip">
                  <span className="pg-ic pg-t3">
                    <Icon name={chip.icon} />
                  </span>
                  <span>
                    <strong>{chip.title}</strong>
                    <span>{chip.text}</span>
                  </span>
                </div>
              )}
            </figure>
          ))}
      </div>
    </section>
  );
}

// ── Cards ────────────────────────────────────────────────

export type CardItem = { icon: IconName; tint: Tint; title: string; text?: string };

export function Pillars({ items }: { items: CardItem[] }) {
  return (
    <div className="pg-pillars">
      {items.map((p) => (
        <div key={p.title} className={`pg-pillar pg-t${p.tint} reveal`}>
          <span className="pg-ic">
            <Icon name={p.icon} />
          </span>
          <h3>{p.title}</h3>
          {p.text && <p>{p.text}</p>}
        </div>
      ))}
    </div>
  );
}

export function Duo({ items }: { items: CardItem[] }) {
  return (
    <div className="pg-duo">
      {items.map((p) => (
        <article key={p.title} className={`pg-card pg-t${p.tint} reveal`}>
          <span className="pg-ic">
            <Icon name={p.icon} />
          </span>
          <h3>{p.title}</h3>
          <p>{p.text}</p>
        </article>
      ))}
    </div>
  );
}

export function DetailRows({ items }: { items: DetailItem[] }) {
  return (
    <div className="pg-details">
      {items.map((d) => (
        <article key={d.id} className="pg-detail reveal" id={d.id}>
          <figure className="pg-detail__img">
            <Photo photo={d.photo} sizes="(max-width: 960px) 80vw, 440px" />
            <span className={`pg-detail__badge pg-t${d.tint}`}>
              <Icon name={d.icon} />
            </span>
          </figure>
          <div className="pg-detail__body">
            {d.meta && <span className="pg-meta">{d.meta}</span>}
            <h3>{d.href ? <SmartLink href={d.href}>{d.title}</SmartLink> : d.title}</h3>
            {d.note && <p className="pg-note pg-detail__note">{d.note}</p>}
            <ul className="pg-checks">
              {d.points.map((p) => (
                <li key={p}>
                  <Icon name="check" />
                  <span>{p}</span>
                </li>
              ))}
            </ul>
            <div className="pg-detail__more">
              <SmartLink href="/consultation" className="btn btn--primary btn--sm">
                Book a Consultation <Icon name="arrow" />
              </SmartLink>
              {d.href && (
                <SmartLink href={d.href} className="link-arrow">
                  Explore therapy details <Icon name="arrow" />
                </SmartLink>
              )}
            </div>
          </div>
        </article>
      ))}
    </div>
  );
}

// ── Call-to-action panel & banners ───────────────────────

export function CtaPanel({ title, text, actions, note }: { title: string; text: string; actions: React.ReactNode; note?: string }) {
  return (
    <div className="pg-cta reveal">
      <div className="pg-cta__copy">
        <h2 className="pg-cta__title">{title}</h2>
        <p>{text}</p>
      </div>
      <div className="pg-actions">{actions}</div>
      {note && (
        <p className="pg-note pg-cta__note" aria-hidden="true">
          {note}
        </p>
      )}
    </div>
  );
}

const Rainbow = () => (
  <svg className="pg-rainbow" viewBox="0 0 220 120" aria-hidden="true">
    <g fill="none" strokeLinecap="round">
      <path d="M20 116a90 90 0 0 1 180 0" stroke="#F8B998" strokeWidth="18" />
      <path d="M44 116a66 66 0 0 1 132 0" stroke="#9CC9E8" strokeWidth="18" />
      <path d="M68 116a42 42 0 0 1 84 0" stroke="#F6D57A" strokeWidth="18" />
    </g>
  </svg>
);

const Sun = () => (
  <svg className="pg-sun" viewBox="0 0 80 80" aria-hidden="true">
    <circle cx="40" cy="40" r="14" fill="currentColor" />
    <g stroke="currentColor" strokeWidth="4" strokeLinecap="round">
      <path d="M40 7v9M40 64v9M7 40h9M64 40h9M17 17l6 6M57 57l6 6M17 63l6-6M57 23l6-6" />
    </g>
  </svg>
);

const Leaves = () => (
  <svg className="pg-leaves" viewBox="0 0 120 120" aria-hidden="true">
    <g fill="currentColor">
      <path d="M58 118C40 96 34 70 46 40c14 22 20 48 12 78z" opacity=".9" />
      <path d="M62 118c4-30 20-52 46-62-2 28-18 50-46 62z" opacity=".7" />
      <path d="M56 118c-8-24-26-38-50-40 8 22 26 36 50 40z" opacity=".55" />
    </g>
  </svg>
);

export function Banner({ lines, photo, action }: { lines: string[]; photo?: PhotoData; action?: React.ReactNode }) {
  return (
    <section className="pg-banner-sec">
      <div className="dv-wrap">
        <div className={`pg-banner reveal${photo ? " pg-banner--photo" : ""}`}>
          <Sun />
          <Leaves />
          <div className="pg-banner__copy">
            <p className="pg-banner__line">
              {lines.map((l, i) => (
                <span key={l}>
                  {i > 0 && <br />}
                  {l}
                </span>
              ))}
            </p>
            {action && <div className="pg-actions">{action}</div>}
          </div>
          {photo ? (
            <figure className="pg-banner__media">
              <Photo photo={photo} sizes="(max-width: 960px) 92vw, 520px" />
            </figure>
          ) : (
            <div className="pg-banner__art">
              <Rainbow />
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

// ── Process, contact & place ─────────────────────────────

export function Steps({ items }: { items: { title: string; text: string; icon: IconName; tint: Tint }[] }) {
  return (
    <ol className="pg-steps">
      {items.map((s, i) => (
        <li key={s.title} className="pg-step reveal">
          <span className="pg-step__n">{i + 1}</span>
          <div>
            <h3>{s.title}</h3>
            <p>{s.text}</p>
          </div>
          <span className={`pg-ic pg-t${s.tint}`}>
            <Icon name={s.icon} />
          </span>
        </li>
      ))}
    </ol>
  );
}

export type Way = { icon: IconName; tint: Tint; title: string; value: React.ReactNode; small: string; href: string };

export function Ways({ items }: { items: Way[] }) {
  return (
    <div className="pg-ways">
      {items.map((w) => (
        <SmartLink key={w.title} href={w.href} className={`pg-way pg-t${w.tint} reveal`}>
          <span className="pg-ic">
            <Icon name={w.icon} fill={w.icon === "whatsapp"} />
          </span>
          <span>
            <strong>{w.title}</strong>
            <span className="pg-way__val">{w.value}</span>
            <small>{w.small}</small>
          </span>
        </SmartLink>
      ))}
    </div>
  );
}

export const TEL = `tel:${CONTACT.phone.replace(/\s/g, "")}`;

/** The clinic email with line-break opportunities between its words, so narrow screens wrap it
 *  as "Devinechilddevelopment / centre@gmail.com" instead of splitting a word. */
export function EmailText() {
  return CONTACT.email.split(/(?=development|centre)|(?<=@)/i).map((part, i) => (
    <Fragment key={i}>
      {i > 0 && <wbr />}
      {part}
    </Fragment>
  ));
}


export function MapBlock() {
  return (
    <div className="pg-mapwrap reveal">
      <div className="pg-map">
        <a className="pg-map__fallback" href={ADDRESS.googleMapsUrl} target="_blank" rel="noopener noreferrer">
          <Icon name="pin" />
          <span>Open in Google Maps</span>
        </a>
        <iframe
          title="Map showing Devine Child Development Centre, Sector 51, Gurugram"
          src={ADDRESS.googleMapsEmbed}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </div>
      <div className="pg-place">
        <span className="pg-ic pg-t1">
          <Icon name="pin" />
        </span>
        <h3>Devine Child Development Centre</h3>
        <p>{ADDRESS.full.replace(" — ", " ")}</p>
        <ul className="pg-place__list">
          <li>
            <Icon name="phone" />
            <a href={TEL}>{CONTACT.phoneDisplay}</a>
          </li>
          <li>
            <Icon name="clock" />
            <span>
              {HOURS.short}
              <br />
              Sunday closed
            </span>
          </li>
        </ul>
        <Btn href={ADDRESS.googleMapsUrl} kind="secondary">
          Get Directions
        </Btn>
      </div>
    </div>
  );
}

// ── Questions ────────────────────────────────────────────

export function FaqList({ items, openFirst = false }: { items: QA[]; openFirst?: boolean }) {
  return (
    <div className="pg-faq">
      {items.map((x, i) => (
        <details key={x.q} className="pg-q reveal" open={openFirst && i === 0}>
          <summary>
            {x.q}
            <span className="pg-pm" aria-hidden="true" />
          </summary>
          <div className="pg-a">
            <p>{x.a}</p>
          </div>
        </details>
      ))}
    </div>
  );
}

// ── Topic tiles ──────────────────────────────────────────

export function Topics({ items }: { items: { icon: IconName; tint: Tint; title: string; text: string; href: string }[] }) {
  return (
    <div className="pg-topics">
      {items.map((t) => (
        <SmartLink key={t.title} href={t.href} className={`pg-topic pg-t${t.tint} reveal`}>
          <span className="pg-ic">
            <Icon name={t.icon} />
          </span>
          <strong>{t.title}</strong>
          <span>{t.text}</span>
          <Icon name="arrow" className="pg-topic__go" />
        </SmartLink>
      ))}
    </div>
  );
}
