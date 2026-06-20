import type { Metadata } from "next";
import { Nunito, DM_Sans } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { FloatingContactButtons } from "@/components/ui/FloatingContactButtons";
import { FloatingBookButton } from "@/components/ui/FloatingBookButton";
import { GlobalBackground } from "@/components/ui/GlobalBackground";
import { CONTACT } from "@/lib/constants";

const nunito = Nunito({
  variable: "--font-heading",
  subsets: ["latin"],
  weight: ["400", "600", "700", "800"],
  display: "swap",
});

const dmSans = DM_Sans({
  variable: "--font-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Devine Child Development Centre | Speech, OT & ABA Therapy in Gurgaon",
    template: "%s | Devine CDC",
  },
  description:
    "Devine Child Development Centre offers expert Speech & Language Therapy, Occupational Therapy, ABA Therapy & Special Education for children with Autism, ADHD, and Speech Delay in Gurgaon. RCI licensed professionals. Book your free assessment today.",
  keywords: [
    "child development centre gurgaon",
    "speech therapy gurgaon",
    "occupational therapy gurgaon",
    "ABA therapy gurgaon",
    "autism assessment gurgaon",
    "ADHD therapy gurgaon",
    "speech delay treatment",
    "child psychologist gurgaon",
    "pediatric therapy gurgaon",
    "Devine CDC",
  ],
  authors: [{ name: "Devine Child Development Centre" }],
  creator: "Devine CDC",
  publisher: "Devine Child Development Centre",
  metadataBase: new URL("https://devinecdc.com"),
  openGraph: {
    type: "website",
    locale: "en_IN",
    siteName: "Devine Child Development Centre",
    title: "Devine Child Development Centre | Speech, OT & ABA Therapy in Gurgaon",
    description:
      "Expert developmental therapy for children — Speech, OT, ABA & Special Education. RCI licensed. Gurgaon's trusted child development centre.",
    images: [
      {
        url: "/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Devine Child Development Centre - Your Safe Space",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Devine Child Development Centre | Gurgaon",
    description: "Expert Speech, OT & ABA Therapy for children. Book your free assessment today.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    // google: "your-google-verification-code",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${nunito.variable} ${dmSans.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        {/* ── Structured Data: MedicalOrganization + LocalBusiness ── */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": ["MedicalOrganization", "MedicalClinic", "LocalBusiness"],
              name: "Devine Child Development Centre",
              alternateName: "Devine CDC",
              description:
                "Expert child development centre offering Speech & Language Therapy, Occupational Therapy, ABA Therapy & Special Education for children with Autism, ADHD, and developmental delays.",
              url: "https://devinecdc.com",
              logo: "https://devinecdc.com/images/logo.png",
              image: "https://devinecdc.com/images/og-image.jpg",
              telephone: CONTACT.phoneDisplay,
              email: CONTACT.email,
              address: {
                "@type": "PostalAddress",
                streetAddress: "N-17, Mayfield Garden, Sector 51, Opp. Zudio M2K Corporate Park",
                addressLocality: "Gurugram",
                addressRegion: "Haryana",
                postalCode: "122018",
                addressCountry: "IN",
              },
              geo: {
                "@type": "GeoCoordinates",
                latitude: "28.4089",
                longitude: "77.0432",
              },
              openingHoursSpecification: {
                "@type": "OpeningHoursSpecification",
                dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
                opens: "09:00",
                closes: "18:00",
              },
              priceRange: "₹₹",
              medicalSpecialty: [
                "Speech & Language Therapy",
                "Occupational Therapy",
                "ABA Therapy",
                "Special Education",
                "Psychological & Behavioral Intervention",
                "Child Psychology",
              ],
              sameAs: [
                "https://www.instagram.com/devinecdc",
              ],
              founder: [
                {
                  "@type": "Person",
                  name: "Komal Pahuja",
                  jobTitle: "Clinical Psychologist & Founder",
                  description:
                    "B.Sc. Clinical Psychology, M.A. Clinical Psychology, M.Phil Clinical Psychology. RCI Licensed.",
                },
              ],
            }),
          }}
        />
        {/* Skip Navigation (Accessibility) */}
        <a href="#main-content" className="skip-nav">
          Skip to main content
        </a>
        <GlobalBackground />
        <Navbar />
        <main id="main-content" className="flex-grow relative z-0">
          {children}
        </main>
        <Footer />
        <FloatingContactButtons />
        <FloatingBookButton />
      </body>
    </html>
  );
}
