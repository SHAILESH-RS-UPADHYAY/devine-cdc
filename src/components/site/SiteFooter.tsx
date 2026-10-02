import Link from "next/link";
import { ADDRESS, CONTACT, FOOTER_LINKS, HOURS } from "@/lib/constants";
import { Brand } from "./Brand";
import { Icon } from "./Icon";

const THERAPY_LINKS = [
  { label: "Speech & Language Therapy", href: "/therapies#speech-language-therapy" },
  { label: "Occupational Therapy", href: "/therapies#occupational-therapy" },
  { label: "ABA Therapy", href: "/therapies#aba-therapy" },
  { label: "Special Education", href: "/therapies#special-education" },
  { label: "Psychological Support", href: "/therapies#psychological-intervention" },
  { label: "Assessment", href: "/faq#assessments" },
  { label: "Parent Training", href: "/programs#parent-training" },
  { label: "Counselling", href: "/therapies#psychological-intervention" },
];

export function SiteFooter() {
  const [emailUser, emailDomain] = CONTACT.email.split("@");
  return (
    <footer className="footer">
      <div className="dv-wrap">
        <div className="footer__grid">
          <div>
            <Brand />
            <p className="footer__tag">Your safe space</p>
            <p className="footer__about">
              Speech and Language, Occupational, ABA, Special Education and Psychological Support for children, under one roof in Gurugram.
            </p>
            <div className="socials">
              <a href={CONTACT.instagram} target="_blank" rel="noopener noreferrer" aria-label="Devine on Instagram">
                <Icon name="instagram" />
              </a>
            </div>
          </div>
          <nav aria-label="Quick links">
            <h4>Quick Links</h4>
            <ul className="footer__links">
              {FOOTER_LINKS.map((l) => (
                <li key={l.href}>
                  <Link href={l.href}>{l.label}</Link>
                </li>
              ))}
            </ul>
          </nav>
          <nav aria-label="Our therapies">
            <h4>Our Therapies</h4>
            <ul className="footer__links">
              {THERAPY_LINKS.map((l) => (
                <li key={l.label}>
                  <Link href={l.href}>{l.label}</Link>
                </li>
              ))}
            </ul>
          </nav>
          <div>
            <h4>Visit Us</h4>
            <ul className="footer__contact">
              <li>
                <Icon name="pin" />
                <span>{ADDRESS.full.replace(" — ", " ")}</span>
              </li>
              <li>
                <Icon name="phone" />
                <a href={`tel:${CONTACT.phone.replace(/\s/g, "")}`}>{CONTACT.phoneDisplay}</a>
              </li>
              <li>
                <Icon name="mail" />
                <a href={`mailto:${CONTACT.email}`} style={{ fontSize: 14 }}>
                  {emailUser}@<wbr />
                  {emailDomain}
                </a>
              </li>
              <li>
                <Icon name="clock" />
                <span>
                  Mon – Sat: {HOURS.display}
                  <br />
                  Sunday: Closed
                </span>
              </li>
            </ul>
          </div>
        </div>
        <div className="footer__bottom">
          <p>© {new Date().getFullYear()} Devine Child Development Centre. All rights reserved.</p>
          <p className="made">
            Designed for brighter tomorrows <Icon name="heart" fill />
          </p>
        </div>
      </div>
    </footer>
  );
}
