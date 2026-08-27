import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Wellness Wednesday",
  description:
    "Free Wellness Wednesday sessions at Devine Child Development Centre, Gurgaon - group classes and activities supporting your child's development.",
};

export default function WellnessWednesdayLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
