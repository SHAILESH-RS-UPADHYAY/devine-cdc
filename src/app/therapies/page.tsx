import { Metadata } from "next";
import { ServicesPreview } from "@/components/sections/ServicesPreview";

export const metadata: Metadata = {
  title: "Therapies | Devine Child Development Centre",
  description: "Explore our comprehensive, evidence-based therapies including ABA, Occupational Therapy, Speech & Language Therapy, and Special Education.",
};

export default function TherapiesPage() {
  return (
    <main className="pt-32 pb-16 min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 md:px-6 mb-4 text-center">
        <h1 className="text-4xl md:text-5xl font-heading font-extrabold text-devine-purple mb-4">
          Our Therapies
        </h1>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Evidence-based approaches tailored to unlock your child's full potential.
        </p>
      </div>
      <ServicesPreview />
    </main>
  );
}
