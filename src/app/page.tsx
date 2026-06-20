import dynamic from "next/dynamic";
import { OfferBanner } from "@/components/sections/OfferBanner";
import { HeroSection } from "@/components/sections/HeroSection";

const TrustBanner = dynamic(() => import("@/components/sections/TrustBanner").then(mod => mod.TrustBanner));
const AnimatedLogoSection = dynamic(() => import("@/components/sections/AnimatedLogoSection").then(mod => mod.AnimatedLogoSection));
const ServicesPreview = dynamic(() => import("@/components/sections/ServicesPreview").then(mod => mod.ServicesPreview));
const ConditionsSection = dynamic(() => import("@/components/sections/ConditionsSection").then(mod => mod.ConditionsSection));
const GroupClassesSection = dynamic(() => import("@/components/sections/GroupClassesSection").then(mod => mod.GroupClassesSection));
const FounderSection = dynamic(() => import("@/components/sections/FounderSection").then(mod => mod.FounderSection));
const BookingFormSection = dynamic(() => import("@/components/sections/BookingFormSection").then(mod => mod.BookingFormSection));
const ScrollReveal = dynamic(() => import("@/components/ui/ScrollReveal").then(mod => mod.ScrollReveal));


export default function Home() {
  return (
    <>
      <OfferBanner />
      
      <AnimatedLogoSection />

      <HeroSection />

      <ScrollReveal>
        <TrustBanner />
      </ScrollReveal>

      <ScrollReveal delay={0.1}>
        <ServicesPreview />
      </ScrollReveal>
      
      <ScrollReveal delay={0.1}>
        <ConditionsSection />
      </ScrollReveal>
      
      <ScrollReveal delay={0.1}>
        <GroupClassesSection />
      </ScrollReveal>

      <ScrollReveal delay={0.1}>
        <FounderSection />
      </ScrollReveal>

      <BookingFormSection />
    </>
  );
}
