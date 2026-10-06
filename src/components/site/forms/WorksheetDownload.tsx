"use client";

import { useState, useSyncExternalStore } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { nameField, phoneField, sendLead, trackWorksheetDownload } from "@/lib/leads";
import type { Worksheet } from "@/lib/site-content";
import { Icon } from "../Icon";
import { TextField } from "./fields";

// Client request: parents share their number before downloading a worksheet, so the team knows who
// downloaded. Every other resource on the site downloads freely.
const schema = z.object({ parentName: nameField(), phone: phoneField });
type Parent = z.infer<typeof schema>;

// Remembered on this device so a parent fills the form once, not once per worksheet.
// Each download still sends its own lead.
const PARENT_KEY = "devine-worksheet-parent";
const listeners = new Set<() => void>();
function readParent(): string | null {
  try {
    return localStorage.getItem(PARENT_KEY);
  } catch {
    return null;
  }
}
function saveParent(parent: Parent) {
  try {
    localStorage.setItem(PARENT_KEY, JSON.stringify(parent));
  } catch {
    // Storage blocked (private mode): the form simply shows again next time.
  }
  listeners.forEach((l) => l());
}
function subscribe(listener: () => void) {
  listeners.add(listener);
  return () => listeners.delete(listener);
}
function parseParent(raw: string | null): Parent | null {
  if (!raw) return null;
  try {
    const parsed = schema.safeParse(JSON.parse(raw));
    return parsed.success ? parsed.data : null;
  } catch {
    return null;
  }
}

function startDownload(file: string) {
  const a = document.createElement("a");
  a.href = file;
  a.download = "";
  document.body.appendChild(a);
  a.click();
  a.remove();
}

export function WorksheetDownload({ worksheet }: { worksheet: Worksheet }) {
  const [done, setDone] = useState(false);
  const [editing, setEditing] = useState(false);
  const saved = parseParent(useSyncExternalStore(subscribe, readParent, () => null));
  const { register, handleSubmit, formState } = useForm<Parent>({ resolver: zodResolver(schema), mode: "onTouched" });
  const e = formState.errors;
  const ids = { name: `${worksheet.id}-name`, phone: `${worksheet.id}-phone` };

  // The parent gets the file the moment the form is valid; the lead goes to the clinic in
  // parallel (retried once) instead of making the download wait on Formspree.
  const download = (parent: Parent) => {
    startDownload(worksheet.file);
    trackWorksheetDownload(worksheet.id);
    saveParent(parent);
    setDone(true);
    const lead = { ...parent, worksheet: `${worksheet.title} (${worksheet.ageGroup})` };
    sendLead("Worksheet download", lead)
      .catch(() => sendLead("Worksheet download", lead))
      .catch((err) => console.error("Worksheet lead failed:", err));
  };

  if (done) {
    return (
      <div className="ws-done" role="status">
        <span className="pg-success__ic">
          <Icon name="check" />
        </span>
        <div>
          <strong>Your download has started.</strong>
          <p>
            If it didn’t, <a href={worksheet.file} download>download the worksheet here</a>.
          </p>
        </div>
      </div>
    );
  }

  if (saved && !editing) {
    return (
      <div className="ws-quick">
        <button className="btn btn--primary pg-submit" type="button" onClick={() => download(saved)}>
          Download free worksheet <Icon name="download" />
        </button>
        <p className="pg-form__note">
          Downloading as {saved.parentName}.{" "}
          <button type="button" className="ws-quick__change" onClick={() => setEditing(true)}>
            Not you?
          </button>
        </p>
      </div>
    );
  }

  return (
    <form className="pg-form ws-form" noValidate onSubmit={handleSubmit(download)}>
      <TextField variant="page" id={ids.name} label="Parent name" placeholder="Your name" autoComplete="name" registration={register("parentName")} error={e.parentName} />
      <TextField variant="page" id={ids.phone} label="Phone" type="tel" inputMode="numeric" autoComplete="tel" placeholder="10-digit mobile" registration={register("phone")} error={e.phone} />
      <button className="btn btn--primary pg-submit" type="submit">
        Download free worksheet <Icon name="download" />
      </button>
      <p className="pg-form__note">
        <Icon name="lock" /> We only use your number to share helpful resources and answer your questions.
      </p>
    </form>
  );
}
