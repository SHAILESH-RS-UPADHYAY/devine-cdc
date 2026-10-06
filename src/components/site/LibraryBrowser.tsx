"use client";

import { useState } from "react";
import Image from "next/image";
import type { LibraryTopic } from "@/lib/site-content";
import { Icon } from "./Icon";

/** Free parent material: filter by topic, one even grid of cards, direct download (no form). */
export function LibraryBrowser({ topics }: { topics: LibraryTopic[] }) {
  const [active, setActive] = useState("all");
  const items = topics.flatMap((t) => t.items.map((item) => ({ ...item, topic: t })));
  const shown = active === "all" ? items : items.filter((i) => i.topic.id === active);
  const soon = topics.find((t) => t.id === active && !t.items.length);

  return (
    <div className="lib">
      <div className="lib-chips" role="group" aria-label="Filter by topic">
        <button type="button" aria-pressed={active === "all"} onClick={() => setActive("all")}>
          All <span>{items.length}</span>
        </button>
        {topics.map((t) => (
          <button key={t.id} type="button" className={`pg-t${t.tint}`} aria-pressed={active === t.id} onClick={() => setActive(t.id)}>
            <Icon name={t.icon} /> {t.title} <span>{t.items.length || "Soon"}</span>
          </button>
        ))}
      </div>

      {soon ? (
        <p className="lib-soon">
          <Icon name={soon.icon} /> {soon.title}: our team is preparing material for this topic. Check back soon.
        </p>
      ) : (
        <div className="lib-grid">
          {shown.map((item) => {
            const paper = item.kind === "Research paper";
            return (
              <a
                key={item.topic.id + item.file}
                className={`lib-card pg-t${item.topic.tint}`}
                href={item.file}
                {...(paper ? { target: "_blank", rel: "noopener" } : { download: "" })}
              >
                <span className="lib-card__art">
                  {item.cover ? (
                    <Image src={item.cover} alt="" placeholder="blur" sizes="(max-width: 760px) 30vw, 120px" />
                  ) : (
                    <span className="lib-card__icon">
                      <Icon name="doc" />
                    </span>
                  )}
                </span>
                <span className="lib-card__body">
                  <span className="lib-card__kind">{item.kind}</span>
                  <strong>{item.title}</strong>
                  <span className="lib-card__text">{item.summary}</span>
                  {item.source && <span className="lib-card__source">{item.source}</span>}
                  <span className="lib-card__foot">
                    <span>
                      {item.pages} pages · {item.sizeLabel}
                    </span>
                    <span className="lib-card__cta">
                      {paper ? "Read" : "Download"} <Icon name={paper ? "arrow" : "download"} />
                    </span>
                  </span>
                </span>
              </a>
            );
          })}
        </div>
      )}
    </div>
  );
}
