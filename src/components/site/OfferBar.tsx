"use client";

import { useSyncExternalStore } from "react";
import Link from "next/link";
import { OFFER } from "@/lib/site-content";
import { Icon } from "./Icon";

// Today's date in India, so the strip switches on and off at Indian midnight whatever the visitor's clock zone.
const todayInIndia = () => new Date().toLocaleDateString("en-CA", { timeZone: "Asia/Kolkata" });
const noop = () => () => {};

/** Thin "offer alert" strip above the header while OFFER is running; renders nothing outside its dates. */
export function OfferBar() {
  // Checked on the visitor's device (pages are pre-built), so the strip appears and disappears on time.
  const today = useSyncExternalStore(noop, todayInIndia, () => null);
  if (!today || today < OFFER.from || today > OFFER.until) return null;

  return (
    <aside className="offer-bar" aria-label="Current offer">
      <div className="dv-wrap">
        <span className="offer-bar__tag">{OFFER.label}</span>
        <ul className="offer-bar__perks">
          {OFFER.perks.map((perk) => (
            <li key={perk}>{perk}</li>
          ))}
        </ul>
        <Link href={OFFER.href}>
          {OFFER.cta} <Icon name="arrow" />
        </Link>
        {/* Native popover: opens on tap, closes on outside tap or Esc, no extra script. */}
        <button type="button" className="offer-bar__terms" popoverTarget="offer-terms">
          *T&amp;C apply
        </button>
        <div id="offer-terms" popover="auto" className="offer-terms" aria-label="Offer terms and conditions">
          <strong>{OFFER.label}: terms &amp; conditions</strong>
          <ol>
            {OFFER.terms.map((t) => (
              <li key={t}>{t}</li>
            ))}
          </ol>
          <button type="button" popoverTarget="offer-terms" popoverTargetAction="hide" className="btn btn--primary">
            Got it
          </button>
        </div>
      </div>
    </aside>
  );
}
