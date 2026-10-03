import Link from "next/link";
import { CONTACT, HOURS, WHATSAPP_URL } from "@/lib/constants";
import { CONCERNS, PHOTOS, PROMISES, STATS, WHY_ITEMS } from "@/lib/site-content";
import { Icon } from "@/components/site/Icon";
import { Photo } from "@/components/site/Photo";
import { TherapyTabs } from "@/components/site/TherapyTabs";
import { HeroLeadForm } from "@/components/site/forms/LeadForms";

const TEL = `tel:${CONTACT.phone.replace(/\s/g, "")}`;

const BENTO = [
  {
    variant: "tile--a",
    photo: PHOTOS.earlyIntervention,
    tone: "t-gold",
    icon: "sprout",
    title: "Early Intervention",
    points: ["Supports early developmental skills", "Focus on communication, play and foundational skills", "Includes parent guidance and involvement"],
    link: { href: "/programs#early-intervention", label: "Explore Early Intervention" },
  },
  {
    variant: "tile--b",
    photo: PHOTOS.oneToOne,
    tone: "t-mint",
    icon: "puzzle",
    title: "Individualised Therapy Programmes",
    points: ["Individualised goals and intervention", "Multidisciplinary approach", "Regular progress review", "Parent involvement throughout the journey"],
    link: { href: "/programs#individualised-programmes", label: "Learn more" },
  },
  {
    variant: "tile--c",
    photo: PHOTOS.schoolReadiness,
    tag: "3 – 6 years",
    tone: "t-coral",
    icon: "pencil",
    title: "School Readiness",
    points: ["Communication and social skills", "Attention and learning readiness", "Independence, confidence and emotional regulation"],
    link: { href: "/programs#school-readiness", label: "Learn more" },
  },
  {
    variant: "tile--d",
    tone: "",
    icon: "users",
    title: "Parent Training & Support",
    note: "Because progress shouldn’t stop when the session ends.",
    points: ["Practical strategies for home", "Individualised home plans", "Regular discussion of progress and challenges"],
    link: { href: "/programs#parent-training", label: "Learn more" },
  },
] as const;

export default function Home() {
  return (
    <>
      {/* ═══ HERO + LEAD FORM ═══ */}
      <section className="hero" id="top">
        <div className="dv-wrap">
          <div>
            <span className="eyebrow reveal">Your safe space</span>
            <h1 className="reveal">
              Every Child Has a
              <br />
              <em>
                Brighter
                <svg viewBox="0 0 300 14" preserveAspectRatio="none" aria-hidden="true">
                  <path d="M3 10C60 3 150 1 297 7" stroke="#F4A76C" strokeWidth="5" fill="none" strokeLinecap="round" />
                </svg>
              </em>{" "}
              Tomorrow
            </h1>
            <p className="hero__lead reveal">
              Compassionate, evidence-informed support for your child’s unique journey.
            </p>
            <div className="hero__actions reveal">
              <a href="#lead" className="btn btn--primary hero__book">
                Book a Consultation <Icon name="arrow" />
              </a>
              <a href="#programmes" className="btn btn--ghost">
                Learn More
              </a>
            </div>
            <p className="hero__trust reveal">
              <Icon name="shield" />
              RCI licensed team · 250+ children supported · Sector 51, Gurugram
            </p>
          </div>
          <div className="hero__side reveal">
            <Photo photo={PHOTOS.sandTray} className="hero__badge" sizes="108px" eager />
            <div className="lead-card" id="lead">
              <p className="lead-card__kicker">Book a consultation</p>
              <h2 className="lead-card__title">Let’s talk about your child</h2>
              <p className="lead-card__sub">Share a few details and our team will call you back within 1 – 2 working days.</p>
              <HeroLeadForm />
            </div>
          </div>
        </div>
        <svg className="wave" viewBox="0 0 1440 120" preserveAspectRatio="none" aria-hidden="true">
          <path d="M0 70c160-40 320-50 480-20s320 60 480 30 320-70 480-40v80H0z" fill="#FFE0C4" opacity=".55" />
          <path d="M0 90c200-30 400-30 600 0s440 40 840-10v40H0z" fill="#FFFAF5" />
        </svg>
      </section>

      {/* ═══ PROMISE STRIP ═══ */}
      <section className="promise" aria-label="What makes Devine different">
        <div className="dv-wrap">
          <div className="promise__card reveal">
            {PROMISES.map((p) => (
              <div className="promise__item" key={p.title}>
                <span className={`bubble ${p.tone}`}>
                  <Icon name={p.icon} />
                </span>
                <div>
                  <h3>{p.title}</h3>
                  <p>{p.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ PROGRAMMES ═══ */}
      <section className="section programmes" id="programmes" aria-labelledby="prog-h">
        <div className="dv-wrap">
          <div className="programmes__head">
            <div>
              <h2 className="h2 reveal" id="prog-h">
                Our Programmes
              </h2>
              <p className="lead reveal">
                Structured support for every stage of your child’s journey. Each programme is designed around your child’s individual needs, strengths and sensory
                profile, with personalised goals, multidisciplinary support and active parent involvement.
              </p>
            </div>
            <p className="hand reveal" aria-hidden="true">
              The right support,
              <br />
              at the right time.
            </p>
          </div>

          <div className="bento">
            {BENTO.map((t) => (
              <article key={t.title} className={`tile ${t.variant} reveal`}>
                {"photo" in t && (
                  <div className="tile__img">
                    <Photo photo={t.photo} sizes="(max-width: 640px) 92vw, (max-width: 1100px) 46vw, 420px" />
                    {"tag" in t && <span className="tile__tag">{t.tag}</span>}
                  </div>
                )}
                <div className="tile__body">
                  <div className="tile__kicker">
                    <span className={`bubble ${t.tone}`.trim()}>
                      <Icon name={t.icon} />
                    </span>
                    <h3>{t.title}</h3>
                  </div>
                  {"note" in t && <p className="hand">{t.note}</p>}
                  <ul>
                    {t.points.map((p) => (
                      <li key={p}>
                        <Icon name="check" />
                        {p}
                      </li>
                    ))}
                  </ul>
                  <Link href={t.link.href} className="link-arrow">
                    {t.link.label} <Icon name="arrow" />
                  </Link>
                </div>
              </article>
            ))}
          </div>

          <div className="start start--team reveal">
            <figure className="start__photo">
              <Photo photo={PHOTOS.team} sizes="(max-width: 760px) 92vw, 480px" />
            </figure>
            <div className="start__main">
              <div className="start__copy">
                <span className="bubble t-peach">
                  <Icon name="compass" />
                </span>
                <div>
                  <h3>Where to start?</h3>
                  <p>Let’s understand your child’s needs together and find the right support.</p>
                </div>
              </div>
              <a href="#lead" className="btn btn--primary">
                Talk to Our Team <Icon name="arrow" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ YOU'RE NOT ALONE ═══ */}
      <section className="section section--flush support-wrap" aria-labelledby="alone-h">
        <div className="dv-wrap">
          <div className="support reveal">
            <div className="support__copy">
              <h2 className="h2" id="alone-h">
                You’re not alone.
                <br />
                <span>We’re here to help.</span>
              </h2>
              <p>
                Raising a child with developmental differences can be challenging. At Devine CDC, we walk this journey with you, so you understand your child,
                feel supported and know how to continue that support at home.
              </p>
              <div className="support__actions">
                <a href="#lead" className="btn btn--paper">
                  Talk to Our Team <Icon name="arrow" />
                </a>
                <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="btn btn--wa">
                  <Icon name="whatsapp" fill />
                  WhatsApp Us
                </a>
              </div>
            </div>
            <div className="support__img">
              <Photo photo={PHOTOS.teamWithFamilies} sizes="(max-width: 960px) 92vw, 540px" />
            </div>
          </div>
        </div>
      </section>

      {/* ═══ COMMON CONCERNS ═══ */}
      <section className="section" id="concerns" aria-labelledby="concerns-h">
        <div className="dv-wrap">
          <div className="cg-head">
            <span className="eyebrow reveal">Common concerns</span>
            <h2 className="h2 reveal" id="concerns-h">
              Support for a wide range of developmental needs
            </h2>
            <p className="lead reveal">
              Whatever you have been noticing, you don’t have to figure it out alone. A diagnosis is not needed to talk to us.
            </p>
          </div>
          <div className="cg">
            {CONCERNS.map((c) => (
              <div key={c.title} className="cg__item reveal" style={{ "--bg": c.bg, "--fg": c.fg } as React.CSSProperties}>
                <span className="cg__ic">
                  <Icon name={c.icon} />
                </span>
                <h3>{c.title}</h3>
                <p>{c.text}</p>
              </div>
            ))}
            <div className="cg__item cg__quote reveal">
              <blockquote>“Every child is capable of amazing things with the right support.”</blockquote>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ THERAPIES ═══ */}
      <section className="section therapies" id="therapies" aria-labelledby="tx-h">
        <div className="dv-wrap">
          <div className="therapies__head">
            <h2 className="h2 reveal" id="tx-h">
              Our Therapies
            </h2>
            <p className="lead reveal">
              Evidence-informed, compassionate and personalised. Our multidisciplinary team plans together, so your child gets joined-up support instead of
              separate sessions.
            </p>
          </div>
          <TherapyTabs />
          <div className="tx__more reveal">
            <div className="tx__more-copy">
              <h3>Not sure which therapy is right?</h3>
              <div className="tags">
                <span className="tag">Assessment</span>
                <span className="tag">Counselling</span>
                <span className="tag">Parent Training</span>
              </div>
            </div>
            <a href="#lead" className="btn btn--paper btn--sm">
              Talk to Our Team <Icon name="arrow" />
            </a>
          </div>
        </div>
      </section>

      {/* ═══ WHY FAMILIES CHOOSE DEVINE ═══ */}
      <section className="section why" aria-labelledby="why-h">
        <div className="dv-wrap">
          <div>
            <h2 className="h2 reveal" id="why-h">
              Why Families Choose Devine
            </h2>
            <p className="lead reveal">
              We want every child to walk through our doors with a smile. When a child feels safe, understood and cared for, progress becomes a natural part of
              their journey.
            </p>
            <div className="stats reveal">
              {STATS.map((s) => (
                <div className="stat" key={s.label}>
                  <b>{s.value}</b>
                  <span>{s.label}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="why-grid">
            {WHY_ITEMS.map((w) => (
              <div key={w.title} className="why-item reveal">
                <span className={`bubble ${w.tone}`}>
                  <Icon name={w.icon} />
                </span>
                <h3>{w.title}</h3>
                <p>{w.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Parent stories are switched off until the clinic shares real reviews (with consent). */}

      {/* ═══ CTA ═══ */}
      <section className="section section--flush" id="contact" aria-labelledby="cta-h">
        <div className="dv-wrap">
          <div className="cta reveal">
            <div className="cta__circle" aria-hidden="true" />
            <div className="cta__copy">
              <h2 className="h2" id="cta-h">
                Ready to take the next step?
              </h2>
              <p>Let’s discuss how we can support your child’s unique journey. You don’t have to figure it all out alone.</p>
              <div className="cta__actions">
                <a href="#lead" className="btn btn--paper">
                  Book a Consultation <Icon name="arrow" />
                </a>
                <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="btn btn--wa">
                  <Icon name="whatsapp" fill />
                  WhatsApp Us
                </a>
              </div>
              <div className="cta__contact">
                <a href={TEL}>
                  <Icon name="phone" />
                  {CONTACT.phoneDisplay}
                </a>
                <span>
                  <Icon name="clock" />
                  {HOURS.short}
                </span>
              </div>
            </div>
            <div className="cta__visual">
              <Photo photo={PHOTOS.ballPit} sizes="(max-width: 960px) 80vw, 420px" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
