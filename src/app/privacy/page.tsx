import type { Metadata } from "next";
import { LegalPage } from "@/components/site/LegalPage";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "How Devine Child Development Centre collects, uses and protects the information you share on this website.",
  alternates: { canonical: "/privacy" },
};

export default function PrivacyPage() {
  return (
    <LegalPage
      eyebrow="Legal"
      title="Privacy Policy"
      updated="3 October 2026"
      intro="Devine Child Development Centre (“Devine”, “we”) respects your family’s privacy. This policy explains what information this website collects, why, and the choices you have."
      sections={[
        {
          title: "Information you give us",
          body: (
            <>
              <p>When you book a consultation, send a message or download a worksheet, we collect what you type into the form: your name, your child’s name and age, phone number, email (where asked), and anything you choose to tell us about your concerns.</p>
              <p>Please share only what is needed to arrange support. Detailed medical history is discussed in person, not through the website.</p>
            </>
          ),
        },
        {
          title: "How we use it",
          body: (
            <ul>
              <li>To contact you about your enquiry and arrange a consultation.</li>
              <li>To share resources you asked for, such as worksheets, and let you know when new material is added.</li>
              <li>To understand how visitors find us and improve our website and advertising.</li>
            </ul>
          ),
        },
        {
          title: "Who processes it",
          body: (
            <>
              <p>Form submissions are delivered to our team through Formspree. We use Google Analytics, Google Ads and the Meta Pixel to measure visits and the results of our advertising; these services may set cookies and receive information such as pages viewed and the fact that a form was submitted. They do not receive what you type into our forms.</p>
              <p>We never sell your information or share it with anyone else for their own marketing.</p>
            </>
          ),
        },
        {
          title: "Cookies",
          body: <p>Analytics and advertising cookies help us measure our website. You can block or delete cookies in your browser settings; the site will still work. When you download a worksheet, your name and number are also remembered in your own browser, so you don’t have to type them again; clearing your browser data removes them.</p>,
        },
        {
          title: "How long we keep it",
          body: <p>We keep enquiry details only as long as needed to respond and to provide any services you take up, and then delete them, unless the law requires us to keep them longer.</p>,
        },
        {
          title: "Your choices",
          body: <p>You can ask us to see, correct or delete the information you have shared, or to stop contacting you, at any time using the details below.</p>,
        },
        {
          title: "Children’s information",
          body: <p>Our forms are meant to be filled in by parents or guardians. We use a child’s details only to arrange support for that child.</p>,
        },
        {
          title: "Changes",
          body: <p>If we update this policy, the new version will appear on this page with a new date.</p>,
        },
      ]}
    />
  );
}
