import { Metadata } from "next";
import { ThankYouContent } from "./ThankYouContent";

export const metadata: Metadata = {
  title: "Thank You | Devine Child Development Centre",
  description:
    "Thank you for reaching out to Devine Child Development Centre. Our clinical team will contact you shortly to schedule your child's comprehensive assessment.",
  robots: {
    index: false,
    follow: false,
  },
};

export default function ThankYouPage() {
  return <ThankYouContent />;
}
