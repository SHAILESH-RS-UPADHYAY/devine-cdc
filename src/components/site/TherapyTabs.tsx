"use client";

import { useRef, useState } from "react";
import Link from "next/link";
import { THERAPY_DETAILS } from "@/lib/site-content";
import { Icon } from "./Icon";
import { Photo } from "./Photo";

const TONE = ["t-coral", "t-blue", "t-mint", "t-gold", "t-peach"] as const;

/**
 * Desktop: tab list + one panel (WAI-ARIA tabs, arrow-key navigation).
 * Phones/tablets: the tab list is hidden by CSS and every therapy is shown as its own card,
 * so parents see all five without discovering a sideways scroll.
 */
export function TherapyTabs() {
  const [active, setActive] = useState(0);
  const tabs = useRef<(HTMLButtonElement | null)[]>([]);

  const onKey = (e: React.KeyboardEvent, i: number) => {
    const n = THERAPY_DETAILS.length;
    const target = { ArrowDown: i + 1, ArrowRight: i + 1, ArrowUp: i - 1 + n, ArrowLeft: i - 1 + n, Home: 0, End: n - 1 }[e.key];
    if (target === undefined) return;
    e.preventDefault();
    const next = target % n;
    setActive(next);
    tabs.current[next]?.focus();
  };

  return (
    <div className="tx reveal">
      <div className="tx__list" role="tablist" aria-label="Therapies" aria-orientation="vertical">
        {THERAPY_DETAILS.map((t, i) => (
          <button
            key={t.id}
            ref={(el) => {
              tabs.current[i] = el;
            }}
            className="tx__tab"
            type="button"
            role="tab"
            id={`tx-tab-${t.id}`}
            aria-controls={`tx-panel-${t.id}`}
            aria-selected={i === active}
            tabIndex={i === active ? 0 : -1}
            onClick={() => setActive(i)}
            onKeyDown={(e) => onKey(e, i)}
          >
            <span className={`bubble ${TONE[i]}`}>
              <Icon name={t.icon} />
            </span>
            <strong>{t.short}</strong>
            <Icon name="arrow" className="tx__arrow" />
          </button>
        ))}
      </div>

      <div className="tx__panels">
        {THERAPY_DETAILS.map((t, i) => (
          <div
            key={t.id}
            className="tx__panel"
            role="tabpanel"
            id={`tx-panel-${t.id}`}
            aria-labelledby={`tx-tab-${t.id}`}
            data-active={i === active ? "" : undefined}
            tabIndex={0}
          >
            <Photo photo={t.photo} sizes="(max-width: 960px) 92vw, 640px" />
            <div className="tx__body">
              <h3>{t.short}</h3>
              <ul>
                {t.homePoints.map((p) => (
                  <li key={p}>
                    <Icon name="check" />
                    {p}
                  </li>
                ))}
              </ul>
              <Link href={`/therapies#${t.id}`} className="link-arrow">
                Learn more <Icon name="arrow" />
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
