import type { Metadata } from "next";
import { LegalPage } from "@/components/site/LegalPage";

export const metadata: Metadata = {
  title: "Terms of Use",
  description: "Terms for using the Devine Child Development Centre website and booking a consultation.",
  alternates: { canonical: "/terms" },
};

export default function TermsPage() {
  return (
    <LegalPage
      eyebrow="Legal"
      title="Terms of Use"
      updated="3 October 2026"
      intro="By using this website you agree to these terms. Please read them along with our Privacy Policy."
      sections={[
        {
          title: "Information, not a diagnosis",
          body: <p>Content on this website, including articles and worksheets, is general information for parents. It is not a medical diagnosis or a substitute for an assessment by a qualified professional.</p>,
        },
        {
          title: "Consultations and fees",
          body: <p>Submitting a form is a request, not a confirmed booking. Our team will contact you to confirm a time. Fees, including the consultation fee, are confirmed by our team before your visit and may change.</p>,
        },
        {
          title: "Worksheets and content",
          body: <p>Worksheets and other material on this site belong to Devine Child Development Centre. You may download and print them for your own family’s use. Please do not resell them or publish them elsewhere without permission.</p>,
        },
        {
          title: "Using the website",
          body: <p>Please do not misuse the website, submit false information or try to disrupt it. We may update or remove content at any time.</p>,
        },
        {
          title: "Links to other sites",
          body: <p>Links to WhatsApp, Instagram, Google Maps and other services are provided for convenience; those services have their own terms and policies.</p>,
        },
        {
          title: "Liability",
          body: <p>We take care to keep information accurate, but the website is provided as is. To the extent the law allows, we are not responsible for losses arising from relying on general website content instead of professional advice.</p>,
        },
        {
          title: "Governing law",
          body: <p>These terms are governed by the laws of India, and the courts of Gurugram, Haryana have jurisdiction.</p>,
        },
      ]}
    />
  );
}
