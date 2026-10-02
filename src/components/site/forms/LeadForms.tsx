"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { nameField, phoneField, sendLead, trackConsultationLead, type LeadSource } from "@/lib/leads";
import { CONCERN_OPTIONS } from "@/lib/site-content";
import { Icon } from "../Icon";
import { FormError, SelectField, SUBMIT_ERROR, TextArea, TextField } from "./fields";

/** Shared submit: Formspree → conversion signals → /thank-you (where the Ads conversion fires). */
function useLeadSubmit(source: LeadSource) {
  const router = useRouter();
  const [failed, setFailed] = useState(false);
  const submit = async (fields: Record<string, string | undefined>) => {
    setFailed(false);
    try {
      await sendLead(source, fields);
      trackConsultationLead(source, fields.concern);
      router.push("/thank-you");
    } catch (err) {
      console.error("Lead submission failed:", err);
      setFailed(true);
    }
  };
  return { submit, error: failed ? SUBMIT_ERROR : null };
}

const ageField = z.string().trim().min(1, "Please add your child’s age.");

// ── Homepage hero card ───────────────────────────────────

const heroSchema = z.object({
  parentName: nameField(),
  childName: nameField("Please add your child’s name."),
  phone: phoneField,
  childAge: ageField,
  concern: z.string().optional(),
});

export function HeroLeadForm() {
  const { submit, error } = useLeadSubmit("Homepage consultation");
  const { register, handleSubmit, formState } = useForm<z.infer<typeof heroSchema>>({ resolver: zodResolver(heroSchema), mode: "onTouched" });
  const e = formState.errors;

  return (
    <form className="form" noValidate onSubmit={handleSubmit(submit)}>
      <TextField variant="hero" id="lead-parent" label="Parent name" autoComplete="name" registration={register("parentName")} error={e.parentName} />
      <TextField variant="hero" id="lead-child" label="Child’s name" registration={register("childName")} error={e.childName} />
      <TextField variant="hero" id="lead-phone" label="Phone" type="tel" inputMode="numeric" autoComplete="tel" placeholder="10-digit mobile" registration={register("phone")} error={e.phone} />
      <TextField variant="hero" id="lead-age" label="Child’s age" placeholder="e.g. 3 years" registration={register("childAge")} error={e.childAge} />
      <SelectField variant="hero" id="lead-concern" label="What are you noticing?" optional full options={CONCERN_OPTIONS} registration={register("concern")} />
      <FormError message={error} />
      <button className="btn btn--primary" type="submit" disabled={formState.isSubmitting}>
        {formState.isSubmitting ? "Sending…" : "Book a Consultation"} <Icon name="arrow" />
      </button>
      <p className="form__note">Consultation fee ₹1,000 · In person or online</p>
    </form>
  );
}

// ── Consultation page ────────────────────────────────────

const consultSchema = z.object({
  parentName: nameField(),
  childName: nameField("Please add your child’s name."),
  phone: phoneField,
  email: z.union([z.literal(""), z.email("Enter a valid email.")]).optional(),
  childAge: ageField,
  concern: z.string().optional(),
  message: z.string().trim().min(1, "Please tell us a little about your child."),
});

export function ConsultationForm() {
  const { submit, error } = useLeadSubmit("Consultation request");
  const { register, handleSubmit, formState } = useForm<z.infer<typeof consultSchema>>({ resolver: zodResolver(consultSchema), mode: "onTouched" });
  const e = formState.errors;

  return (
    <form className="pg-form" noValidate onSubmit={handleSubmit(submit)}>
      <TextField variant="page" id="cq-parent" label="Parent name" placeholder="Your name" autoComplete="name" registration={register("parentName")} error={e.parentName} />
      <TextField variant="page" id="cq-child" label="Child’s name" placeholder="Your child’s name" registration={register("childName")} error={e.childName} />
      <TextField variant="page" id="cq-phone" label="Phone" type="tel" inputMode="numeric" autoComplete="tel" placeholder="10-digit mobile" registration={register("phone")} error={e.phone} />
      <TextField variant="page" id="cq-email" label="Email" type="email" autoComplete="email" placeholder="you@example.com" optional registration={register("email")} error={e.email} />
      <TextField variant="page" id="cq-age" label="Child’s age" placeholder="e.g. 3 years" registration={register("childAge")} error={e.childAge} />
      <SelectField variant="page" id="cq-concern" label="What are you noticing?" optional options={CONCERN_OPTIONS} registration={register("concern")} />
      <TextArea variant="page" id="cq-message" label="How can we help?" full placeholder="Tell us about your child, your concerns and what you’ve been noticing" registration={register("message")} error={e.message} />
      <FormError message={error} />
      <button className="btn btn--primary pg-submit" type="submit" disabled={formState.isSubmitting}>
        {formState.isSubmitting ? "Sending…" : "Request a Consultation"} <Icon name="arrow" />
      </button>
      <p className="pg-form__note">Consultation fee ₹1,000 · In person or online</p>
    </form>
  );
}

// ── Contact page ─────────────────────────────────────────

const contactSchema = z.object({
  parentName: nameField(),
  phone: phoneField,
  email: z.email("Enter a valid email."),
  childAge: z.string().optional(),
  message: z.string().trim().min(1, "Please tell us how we can help."),
});

export function ContactForm() {
  const { submit, error } = useLeadSubmit("Contact message");
  const { register, handleSubmit, formState } = useForm<z.infer<typeof contactSchema>>({ resolver: zodResolver(contactSchema), mode: "onTouched" });
  const e = formState.errors;

  return (
    <form className="pg-form" noValidate onSubmit={handleSubmit(submit)}>
      <TextField variant="page" id="ct-name" label="Parent / guardian name" placeholder="Your name" autoComplete="name" registration={register("parentName")} error={e.parentName} />
      <TextField variant="page" id="ct-phone" label="Phone" type="tel" inputMode="numeric" autoComplete="tel" placeholder="10-digit mobile" registration={register("phone")} error={e.phone} />
      <TextField variant="page" id="ct-email" label="Email" type="email" autoComplete="email" placeholder="you@example.com" registration={register("email")} error={e.email} />
      <TextField variant="page" id="ct-age" label="Child’s age" placeholder="e.g. 3 years" optional registration={register("childAge")} error={e.childAge} />
      <TextArea variant="page" id="ct-message" label="How can we help?" full placeholder="Tell us a little about your query or your child’s needs" registration={register("message")} error={e.message} />
      <FormError message={error} />
      <button className="btn btn--primary pg-submit" type="submit" disabled={formState.isSubmitting}>
        {formState.isSubmitting ? "Sending…" : "Send Message"} <Icon name="arrow" />
      </button>
      <p className="pg-form__note">We usually reply within 1 – 2 working days.</p>
    </form>
  );
}
