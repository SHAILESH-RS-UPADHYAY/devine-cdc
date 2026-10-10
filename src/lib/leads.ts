// Lead capture shared by every form on the site.
// Delivery: Formspree (NEXT_PUBLIC_FORMSPREE_ID). Tracking mirrors the original booking form:
// consultation/contact leads fire Meta `Lead` + GTM `lead_submit` and then land on /thank-you,
// where the Google Ads conversion fires. Worksheet downloads use their own GTM event so they
// never count as a consultation conversion.

import * as z from "zod";
import { channelOf, readVisitSource } from "./attribution";

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

  // Where this visitor came from (UTM / ad click), so the clinic can see which ads bring enquiries.
  const visit = readVisitSource();
  Object.assign(body, { channel: channelOf(visit) }, visit);
  sendToSheet(body);

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

/** Key the thank-you page checks so ad conversions count real submissions only, exactly once. */
export const LEAD_FLAG = "devine-lead-submitted";

export function trackConsultationLead(source: LeadSource, concern?: string) {
  // Meta "Lead" and the Google Ads conversion fire on /thank-you (once, guarded by this flag),
  // so a single enquiry is never counted twice and refreshes or direct visits never count.
  sessionStorage.setItem(LEAD_FLAG, String(Date.now()));
  (window.dataLayer ||= []).push({ event: "lead_submit", form_name: source, service: concern || "not specified" });
}

export function trackWorksheetDownload(worksheetId: string) {
  (window.dataLayer ||= []).push({ event: "worksheet_download", worksheet: worksheetId });
}

/** Copies every lead into the clinic's Google Sheet (NEXT_PUBLIC_LEADS_SHEET_URL, a Google Apps
 *  Script web app; see docs/leads-google-sheet.md). Fire-and-forget: the email via Formspree stays
 *  the main delivery, so a sheet problem never blocks or loses an enquiry. */
function sendToSheet(body: Record<string, string>) {
  const url = process.env.NEXT_PUBLIC_LEADS_SHEET_URL?.trim();
  if (!url) return;
  const { _subject, ...lead } = body; // eslint-disable-line @typescript-eslint/no-unused-vars -- email-only field
  const row = { submitted_at: new Date().toLocaleString("en-IN", { timeZone: "Asia/Kolkata" }), ...lead };
  fetch(url, { method: "POST", mode: "no-cors", body: new URLSearchParams(row), keepalive: true }).catch(() => {});
}
