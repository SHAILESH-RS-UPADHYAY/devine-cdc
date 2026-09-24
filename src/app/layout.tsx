import type { Metadata } from "next";
import Script from "next/script";
import { Nunito, DM_Sans } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { FloatingContactButtons } from "@/components/ui/FloatingContactButtons";
import { FloatingBookButton } from "@/components/ui/FloatingBookButton";
import { GlobalBackground } from "@/components/ui/GlobalBackground";
import { CONTACT, SITE_CONFIG, ANALYTICS_CONFIG } from "@/lib/constants";
import { SEO_KEYWORDS } from "@/lib/seo-keywords";

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
    ...SEO_KEYWORDS,
  ],
  authors: [{ name: "Devine Child Development Centre" }],
  creator: "Devine CDC",
  publisher: "Devine Child Development Centre",
  metadataBase: new URL(SITE_CONFIG.url),
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
      <head>
        {/* Google Tag Manager */}
        <Script
          id="google-tag-manager"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','${ANALYTICS_CONFIG.gtmId}');`,
          }}
        />

        {/* Google Tag (gtag.js) */}
        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=${ANALYTICS_CONFIG.googleAdsId}`}
          strategy="afterInteractive"
        />
        <Script
          id="google-ads-gtag"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', '${ANALYTICS_CONFIG.googleAdsId}');
            `,
          }}
        />

        {/* Meta Pixel Code */}
        <Script
          id="meta-pixel"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              !function(f,b,e,v,n,t,s)
              {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
              n.callMethod.apply(n,arguments):n.queue.push(arguments)};
              if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
              n.queue=[];t=b.createElement(e);t.async=!0;
              t.src=v;s=b.getElementsByTagName(e)[0];
              s.parentNode.insertBefore(t,s)}(window, document,'script',
              'https://connect.facebook.net/en_US/fbevents.js');
              fbq('init', '${ANALYTICS_CONFIG.metaPixelId}');
              fbq('track', 'PageView');
            `,
          }}
        />
      </head>
      <body className="min-h-full flex flex-col">
        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe
            src={`https://www.googletagmanager.com/ns.html?id=${ANALYTICS_CONFIG.gtmId}`}
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          />
        </noscript>

        {/* Meta Pixel (noscript) */}
        <noscript>
          {/* eslint-disable-next-line @next/next/no-img-element -- tracking pixel, next/image cannot render inside noscript */}
          <img
            height="1"
            width="1"
            style={{ display: "none" }}
            src={`https://www.facebook.com/tr?id=${ANALYTICS_CONFIG.metaPixelId}&ev=PageView&noscript=1`}
            alt=""
          />
        </noscript>

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
              url: SITE_CONFIG.url,
              logo: `${SITE_CONFIG.url}/images/logo.webp`,
              image: `${SITE_CONFIG.url}/images/og-image.jpg`,
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
