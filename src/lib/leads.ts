// Lead capture shared by every form on the site.
// Delivery: Formspree (NEXT_PUBLIC_FORMSPREE_ID). Tracking mirrors the original booking form:
// consultation/contact leads fire Meta `Lead` + GTM `lead_submit` and then land on /thank-you,
// where the Google Ads conversion fires. Worksheet downloads use their own GTM event so they
// never count as a consultation conversion.

import * as z from "zod";

declare global {
  interface Window {
    fbq?: (...args: unknown[]) => void;
    dataLayer?: Record<string, unknown>[];
    gtag?: (...args: unknown[]) => void;
  }
}

export type LeadSource = "Homepage consultation" | "Consultation request" | "Contact message" | "Worksheet download";

/** Indian mobile: optional +91/91/0 prefix, then 10 digits starting 6–9. */
export function normalisePhone(value: string) {
  return value.replace(/\D/g, "").replace(/^(?:91|0)(?=\d{10}$)/, "");
}

export const phoneField = z
  .string()
  .trim()
  .refine((v) => /^[6-9]\d{9}$/.test(normalisePhone(v)), "Enter a 10-digit mobile.");

export const nameField = (message = "Please add your name.") => z.string().trim().min(2, message);

export async function sendLead(source: LeadSource, fields: Record<string, string | undefined>) {
  // Worksheet downloads go to their own Formspree form so they never use up the consultation
  // form's monthly quota; until that form is configured they fall back to the main one.
  const worksheetId = source === "Worksheet download" ? process.env.NEXT_PUBLIC_FORMSPREE_WORKSHEET_ID?.trim() : undefined;
  const id = worksheetId || process.env.NEXT_PUBLIC_FORMSPREE_ID?.trim();
  if (!id) throw new Error("NEXT_PUBLIC_FORMSPREE_ID is not set, so the enquiry would be lost");
  const endpoint = id.startsWith("http") ? id : `https://formspree.io/f/${id}`;

  const body: Record<string, string> = { form: source, _subject: `Devine website: ${source}` };
  for (const [key, value] of Object.entries(fields)) if (value?.trim()) body[key] = value.trim();
  if (body.phone) body.phone = normalisePhone(body.phone);

  // A form-encoded body keeps this a CORS "simple request": one round trip, no preflight.
  // keepalive lets the request finish even if the visitor leaves the page straight away.
  const res = await fetch(endpoint, {
    method: "POST",
    headers: { Accept: "application/json" },
    body: new URLSearchParams(body),
    keepalive: true,
  });
  if (!res.ok) throw new Error(`Formspree responded ${res.status}`);
}

export function trackConsultationLead(source: LeadSource, concern?: string) {
  window.fbq?.("track", "Lead");
  (window.dataLayer ||= []).push({ event: "lead_submit", form_name: source, service: concern || "not specified" });
}

export function trackWorksheetDownload(worksheetId: string) {
  (window.dataLayer ||= []).push({ event: "worksheet_download", worksheet: worksheetId });
}
