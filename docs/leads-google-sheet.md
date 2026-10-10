# Website leads → Google Sheet (with UTM source)

Every form on the site (homepage, consultation, contact, worksheet downloads) still emails the
clinic through Formspree. In addition, each lead is copied as one row into a Google Sheet, with
where the visitor came from.

## One-time setup (about 5 minutes)

1. Sign in to the clinic's Google account and create a new Google Sheet, e.g. **Devine Website Leads**.
2. In the sheet: **Extensions → Apps Script**. Delete the sample code, paste everything from
   `docs/leads-google-sheet.gs`, and press **Save**.
3. **Deploy → New deployment** → gear icon → **Web app**.
   - Description: `Website leads`
   - Execute as: **Me**
   - Who has access: **Anyone**
   - Press **Deploy**, then **Authorize access** and allow it (choose the account → Advanced → Go to project → Allow).
4. Copy the **Web app URL** (ends in `/exec`).
5. In Vercel → Project → Settings → **Environment Variables** add
   `NEXT_PUBLIC_LEADS_SHEET_URL` = that URL (Production, Preview and Development), then **Redeploy**.
6. Test: submit any form on the website. Within a few seconds a **Leads** tab appears with the row.

If the script is ever edited, use **Deploy → Manage deployments → Edit → New version** so the URL stays the same.

## Columns

| Column | Meaning |
| --- | --- |
| submitted_at | Date and time (India) |
| form | Homepage consultation / Consultation request / Contact message / Worksheet download |
| parentName … worksheet | What the parent filled in |
| channel | Plain summary: Google Ads, Meta (Facebook / Instagram), Google search, Direct, … |
| utm_source, utm_medium, utm_campaign, utm_term, utm_content | Tags from the ad link |
| gclid / fbclid | Google / Meta ad click IDs (present when someone came from an ad) |
| landing_page | First page they opened |
| referrer | Website they came from, if any |
| first_seen | When that visit started |

## Tagging ad links

Google Ads adds `gclid` automatically (keep auto-tagging on). For Meta and any other link, add tags, e.g.

```
https://www.devinecdc.in/?utm_source=facebook&utm_medium=paid&utm_campaign=navratri_offer
```

The site remembers the latest tagged visit on that phone, so a parent who clicks an ad today and
enquires tomorrow is still credited to the ad.
