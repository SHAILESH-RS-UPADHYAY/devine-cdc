"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { nameField, phoneField, sendLead, trackWorksheetDownload } from "@/lib/leads";
import type { Worksheet } from "@/lib/site-content";
import { Icon } from "../Icon";
import { FormError, SUBMIT_ERROR, TextField } from "./fields";

// Client request: parents share their number before downloading, so the team knows who downloaded.
const schema = z.object({ parentName: nameField(), phone: phoneField });

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
  const [failed, setFailed] = useState(false);
  const { register, handleSubmit, formState } = useForm<z.infer<typeof schema>>({ resolver: zodResolver(schema), mode: "onTouched" });
  const e = formState.errors;
  const ids = { name: `${worksheet.id}-name`, phone: `${worksheet.id}-phone` };

  const onSubmit = async (data: z.infer<typeof schema>) => {
    setFailed(false);
    try {
      await sendLead("Worksheet download", { ...data, worksheet: `${worksheet.title} (${worksheet.ageGroup})` });
      trackWorksheetDownload(worksheet.id);
      startDownload(worksheet.file);
      setDone(true);
    } catch (err) {
      console.error("Worksheet lead failed:", err);
      setFailed(true);
    }
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

  return (
    <form className="pg-form ws-form" noValidate onSubmit={handleSubmit(onSubmit)}>
      <TextField variant="page" id={ids.name} label="Parent name" placeholder="Your name" autoComplete="name" registration={register("parentName")} error={e.parentName} />
      <TextField variant="page" id={ids.phone} label="Phone" type="tel" inputMode="numeric" autoComplete="tel" placeholder="10-digit mobile" registration={register("phone")} error={e.phone} />
      <FormError message={failed ? SUBMIT_ERROR : null} />
      <button className="btn btn--primary pg-submit" type="submit" disabled={formState.isSubmitting}>
        {formState.isSubmitting ? "Preparing…" : "Download free worksheet"} <Icon name="download" />
      </button>
      <p className="pg-form__note">
        <Icon name="lock" /> We only use your number to share helpful resources and answer your questions.
      </p>
    </form>
  );
}
