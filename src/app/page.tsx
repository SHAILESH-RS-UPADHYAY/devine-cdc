import { OfferBanner } from "@/components/sections/OfferBanner";
import { HeroSection } from "@/components/sections/HeroSection";
import { TrustBanner } from "@/components/sections/TrustBanner";
import { ServicesPreview } from "@/components/sections/ServicesPreview";
import { ConditionsSection } from "@/components/sections/ConditionsSection";
import { GroupClassesSection } from "@/components/sections/GroupClassesSection";
import { FounderSection } from "@/components/sections/FounderSection";
import { BookingFormSection } from "@/components/sections/BookingFormSection";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { SafeSpaceDivider } from "@/components/sections/SafeSpaceDivider";

export default function Home() {
  return (
    <>
      <OfferBanner />
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
