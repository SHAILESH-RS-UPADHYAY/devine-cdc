"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { NAV_LINKS, NAV_SECTION } from "@/lib/constants";
import { Brand } from "./Brand";
import { Icon } from "./Icon";

export function SiteHeader() {
  const pathname = usePathname();
  // The menu is "open on this page": navigating anywhere closes it without an effect.
  const [openOn, setOpenOn] = useState<string | null>(null);
  const open = openOn === pathname;
  const setOpen = (value: boolean | ((v: boolean) => boolean)) =>
    setOpenOn((typeof value === "function" ? value(open) : value) ? pathname : null);
  const [scrolled, setScrolled] = useState(false);
  const [hidden, setHidden] = useState(false);
  const lastY = useRef(0);

  // On the homepage the CTA jumps to the hero form; everywhere else it opens the consultation page.
  const ctaHref = pathname === "/" ? "#lead" : "/consultation";
  const section = NAV_SECTION[pathname] ?? pathname;
  const isCurrent = (href: string) => (href === "/" ? pathname === "/" : section === href || section.startsWith(`${href}/`));

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpenOn(null);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  // Shadow once scrolled; step aside while scrolling down so the bar never covers section headings.
  useEffect(() => {
    let ticking = false;
    const onScroll = () => {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(() => {
        const y = window.scrollY;
        setScrolled(y > 8);
        setHidden(y > 300 && y > lastY.current);
        lastY.current = y;
        ticking = false;
      });
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const headerClass = ["header", scrolled && "is-scrolled", open && "is-open", hidden && !open && "is-hidden"].filter(Boolean).join(" ");

  return (
    <header className={headerClass} id="header">
      <div className="dv-wrap">
        <Brand eager onNavigate={() => setOpen(false)} />
        <nav className="nav" id="site-nav" aria-label="Primary">
          {NAV_LINKS.map((link) => (
            <Link key={link.href} href={link.href} aria-current={isCurrent(link.href) ? "page" : undefined} onClick={() => setOpen(false)}>
              {link.label}
            </Link>
          ))}
          <Link href={ctaHref} className="btn btn--primary btn--sm" hidden={!open} onClick={() => setOpen(false)}>
            Book a Consultation
          </Link>
        </nav>
        <div className="header__cta">
          <Link href={ctaHref} className="btn btn--primary btn--sm">
            Book a Consultation <Icon name="arrow" />
          </Link>
          <button
            className="menu-btn"
            type="button"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            aria-controls="site-nav"
            onClick={() => setOpen((v) => !v)}
          >
            <Icon name={open ? "close" : "menu"} />
          </button>
        </div>
      </div>
    </header>
  );
}
