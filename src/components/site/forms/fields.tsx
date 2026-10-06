"use client";

import type { FieldError, UseFormRegisterReturn } from "react-hook-form";

// Two visual variants from the approved design: the compact hero card (`field`)
// and the inner-page form cards (`pg-field`). The error line is always reserved
// so showing/clearing a message never shifts the submit button mid-click.
type Variant = "hero" | "page";

const CLS = {
  hero: { field: "field", err: "err" },
  page: { field: "pg-field", err: "pg-err" },
} as const;

type Common = {
  id: string;
  label: string;
  variant: Variant;
  error?: FieldError;
  optional?: boolean;
  full?: boolean;
  registration: UseFormRegisterReturn;
};

function Shell({ id, label, variant, error, optional, full, children }: Omit<Common, "registration"> & { children: React.ReactNode }) {
  const c = CLS[variant];
  const cls = [c.field, variant === "page" && full && "pg-field--full", error && "invalid"].filter(Boolean).join(" ");
  return (
    <div className={cls} style={variant === "hero" && full ? { gridColumn: "1 / -1" } : undefined}>
      <label htmlFor={id}>
        {label} {optional ? variant === "page" && <em>(optional)</em> : <span>*</span>}
      </label>
      {children}
      <span className={c.err} id={`${id}-e`} role={error ? "alert" : undefined}>
        {error?.message}
      </span>
    </div>
  );
}

export function TextField({
  type = "text",
  placeholder,
  autoComplete,
  inputMode,
  ...props
}: Common & { type?: string; placeholder?: string; autoComplete?: string; inputMode?: "numeric" | "email" | "text" }) {
  return (
    <Shell {...props}>
      <input
        id={props.id}
        type={type}
        placeholder={placeholder}
        autoComplete={autoComplete}
        inputMode={inputMode}
        aria-invalid={props.error ? true : undefined}
        aria-describedby={`${props.id}-e`}
        {...props.registration}
      />
    </Shell>
  );
}

export function TextArea({ placeholder, ...props }: Common & { placeholder?: string }) {
  return (
    <Shell {...props}>
      <textarea
        id={props.id}
        placeholder={placeholder}
        aria-invalid={props.error ? true : undefined}
        aria-describedby={`${props.id}-e`}
        {...props.registration}
      />
    </Shell>
  );
}

export function SelectField({
  options,
  placeholder = "Choose an option",
  ...props
}: Common & { options: readonly string[]; placeholder?: string }) {
  return (
    <Shell {...props}>
      <select id={props.id} aria-describedby={`${props.id}-e`} defaultValue="" {...props.registration}>
        <option value="">{placeholder}</option>
        {options.map((o) => (
          <option key={o}>{o}</option>
        ))}
      </select>
    </Shell>
  );
}

export function FormError({ message }: { message: string | null }) {
  if (!message) return null;
  return (
    <p className="form-alert" role="alert">
      {message}
    </p>
  );
}

export const SUBMIT_ERROR = "Sorry, we couldn’t send that just now. Please try again, or call us on +91 87440 97777.";
