/**
 * Devine website → Google Sheet (lead log with UTM source).
 * Paste into Extensions → Apps Script of the leads sheet, then Deploy → New deployment → Web app.
 * Every website enquiry and worksheet download becomes one row. Columns are created automatically
 * from the first lead and grow if the website ever sends a new field.
 */
const SHEET_NAME = "Leads";
const ORDER = [
  "submitted_at", "form", "parentName", "childName", "phone", "email", "childAge", "concern", "message", "worksheet",
  "channel", "utm_source", "utm_medium", "utm_campaign", "utm_term", "utm_content", "gclid", "fbclid", "landing_page", "referrer", "first_seen",
];

function doPost(e) {
  const lock = LockService.getScriptLock();
  lock.waitLock(10000);
  try {
    const data = e.parameter || {};
    const ss = SpreadsheetApp.getActiveSpreadsheet();
    const sheet = ss.getSheetByName(SHEET_NAME) || ss.insertSheet(SHEET_NAME);

    let headers = sheet.getLastColumn() ? sheet.getRange(1, 1, 1, sheet.getLastColumn()).getValues()[0] : [];
    if (!headers.length) {
      headers = ORDER.slice();
      sheet.getRange(1, 1, 1, headers.length).setValues([headers]).setFontWeight("bold");
      sheet.setFrozenRows(1);
    }
    const extra = Object.keys(data).filter((k) => headers.indexOf(k) === -1);
    if (extra.length) {
      sheet.getRange(1, headers.length + 1, 1, extra.length).setValues([extra]).setFontWeight("bold");
      headers = headers.concat(extra);
    }

    // Phone numbers as text so Sheets keeps them exactly as typed.
    sheet.appendRow(headers.map((h) => (h === "phone" && data[h] ? "'" + data[h] : data[h] || "")));
    return ContentService.createTextOutput("ok");
  } finally {
    lock.releaseLock();
  }
}
