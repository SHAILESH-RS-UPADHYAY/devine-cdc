import { z } from "zod";

// ══════════════════════════════════════════════════════════
// Booking / Lead Capture Form Schema
// Fields: Child's Name, Age, Parent Name, Phone, Query
// ══════════════════════════════════════════════════════════

export const bookingFormSchema = z.object({
  childName: z
    .string()
    .min(2, "Child's name must be at least 2 characters")
    .max(50, "Child's name is too long"),
  childAge: z
    .string()
    .min(1, "Please enter the child's age"),
  parentName: z
    .string()
    .min(2, "Your name must be at least 2 characters")
    .max(50, "Name is too long"),
  phone: z
    .string()
    .regex(/^[6-9]\d{9}$/, "Please enter a valid 10-digit Indian phone number"),
  query: z
    .string()
    .max(500, "Message is too long")
    .optional(),
});

export type BookingFormData = z.infer<typeof bookingFormSchema>;

// ══════════════════════════════════════════════════════════
// Contact Form Schema
// ══════════════════════════════════════════════════════════

export const contactFormSchema = z.object({
  name: z
    .string()
    .min(2, "Name must be at least 2 characters")
    .max(50, "Name is too long"),
  phone: z
    .string()
    .regex(/^[6-9]\d{9}$/, "Please enter a valid 10-digit Indian phone number"),
  email: z
    .string()
    .email("Please enter a valid email address")
    .optional()
    .or(z.literal("")),
  service: z
    .string()
    .optional(),
  message: z
    .string()
    .min(10, "Please provide more details")
    .max(1000, "Message is too long"),
});

export type ContactFormData = z.infer<typeof contactFormSchema>;
