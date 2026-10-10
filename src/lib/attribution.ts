// Where a visitor came from (UTM tags, ad click IDs, referrer), remembered on their device so it
// can travel with any lead they send later, even pages and days after the ad click.

const KEY = "devine-visit-source";
const PARAMS = ["utm_source", "utm_medium", "utm_campaign", "utm_term", "utm_content", "gclid", "fbclid"] as const;

export type VisitSource = Partial<Record<(typeof PARAMS)[number] | "landing_page" | "referrer" | "first_seen", string>>;

/** Run once per page load. A visit with campaign tags replaces the stored source (last paid touch wins);
 *  an untagged visit only fills in a source when none is stored yet. */
export function rememberVisitSource() {
  try {
    const url = new URL(window.location.href);
    const tagged: VisitSource = {};
    for (const p of PARAMS) {
      const v = url.searchParams.get(p);
      if (v) tagged[p] = v.slice(0, 200);
    }
    const hasTags = Object.keys(tagged).length > 0;
    if (!hasTags && localStorage.getItem(KEY)) return;

    const externalReferrer = document.referrer && !document.referrer.startsWith(url.origin) ? document.referrer : "";
    const source: VisitSource = {
      ...tagged,
      landing_page: url.pathname,
      referrer: externalReferrer.slice(0, 300),
      first_seen: new Date().toISOString(),
    };
    localStorage.setItem(KEY, JSON.stringify(source));
  } catch {
    // Storage blocked (private mode): leads simply arrive without a source.
  }
}

export function readVisitSource(): VisitSource {
  try {
    return JSON.parse(localStorage.getItem(KEY) || "{}") as VisitSource;
  } catch {
    return {};
  }
}

/** Plain-language channel for the sheet, so the clinic can filter without reading raw tags. */
export function channelOf(s: VisitSource) {
  if (s.gclid || /google/i.test(s.utm_source ?? "")) return "Google Ads";
  if (s.fbclid || /facebook|instagram|fb|ig|meta/i.test(s.utm_source ?? "")) return "Meta (Facebook / Instagram)";
  if (s.utm_source) return s.utm_source;
  if (/google\./.test(s.referrer ?? "")) return "Google search";
  if (/facebook|instagram/.test(s.referrer ?? "")) return "Facebook / Instagram (organic)";
  if (s.referrer) return "Other website";
  return "Direct";
}
