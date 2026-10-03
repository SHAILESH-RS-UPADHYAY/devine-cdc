// ══════════════════════════════════════════════════════════
// Devine CDC — Site-wide Constants
// Single source of truth for all contact info, services, etc.
// ══════════════════════════════════════════════════════════

export const SITE_CONFIG = {
  name: "Devine Child Development Centre",
  shortName: "Devine CDC",
  tagline: "YOUR SAFE SPACE",
  description:
    "Expert child development centre offering Speech & Language Therapy, Occupational Therapy, ABA Therapy & Special Education in Gurgaon.",
  // The live host: Vercel redirects the bare domain here, so canonicals and the sitemap point at it directly.
  url: "https://www.devinecdc.in",
  ogImage: "/images/og-image.jpg",
} as const;

export const CONTACT = {
  phone: "+91 87440 97777", 
  phoneDisplay: "+91 87440 97777",
  whatsapp: "918744097777", 
  whatsappMessage:
    "Hey! I would like to book an appointment. Here are my details:\n\nChild's Name:\nPreferred Date:\nPreferred Time:",
  email: "Devinechilddevelopmentcentre@gmail.com",
  instagram: "https://www.instagram.com/devinecdc",
  instagramHandle: "devinecdc",
} as const;

export const ADDRESS = {
  full: "N-17, Mayfield Garden, Sector 51, Opp. Zudio M2K Corporate Park, Gurugram, Haryana — 122018",
  short: "N-17, Mayfield Garden, Sec 51, Gurugram",
  street: "N-17, Mayfield Garden, Sector 51",
  landmark: "Opp. Zudio M2K Corporate Park",
  city: "Gurugram",
  state: "Haryana",
  pincode: "122018",
  googleMapsUrl: "https://www.google.com/maps/place/28%C2%B025'34.6%22N+77%C2%B003'32.8%22E/@28.4262829,77.0565453,17z/data=!3m1!4b1!4m4!3m3!8m2!3d28.4262829!4d77.0591202?hl=en&entry=ttu&g_ep=EgoyMDI2MDYxNi4wIKXMDSoASAFQAw%3D%3D",
  googleMapsEmbed: "https://maps.google.com/maps?q=28.4262829,77.0591202&t=&z=17&ie=UTF8&iwloc=&output=embed",
} as const;

export const HOURS = {
  display: "10:00 AM – 6:00 PM",
  short: "Mon – Sat, 10:00 AM – 6:00 PM",
  days: "Monday – Saturday",
  opens: "10:00",
  closes: "18:00",
} as const;

export const THERAPIES = [
  {
    id: "aba-therapy",
    title: "ABA Therapy",
    fullTitle: "Applied Behaviour Analysis",
    shortDescription:
      "A proven, evidence-based approach that helps children build important skills and develop positive behaviours through structured, personalised sessions.",
    icon: "Brain",
    href: "/therapies/aba-therapy",
    color: "#9B59B6",
  },
  {
    id: "occupational-therapy",
    title: "Occupational Therapy",
    fullTitle: "Occupational Therapy (OT)",
    shortDescription:
      "Helps children develop fine motor skills, sensory processing, and daily living skills through engaging, play-based activities.",
    icon: "Hand",
    href: "/therapies/occupational-therapy",
    color: "#5B8CC5",
  },
  {
    id: "speech-therapy",
    title: "Speech & Language Therapy",
    fullTitle: "Speech & Language Therapy",
    shortDescription:
      "Enhances communication skills with tailored sessions, helping every child find their voice and express themselves confidently.",
    icon: "MessageCircle",
    href: "/therapies/speech-therapy",
    color: "#D4A0D4",
  },
  {
    id: "special-education",
    title: "Special Education",
    fullTitle: "Special Education",
    shortDescription:
      "Personalised learning support that adapts to each child's unique needs, building academic skills and confidence at their own pace.",
    icon: "BookOpen",
    href: "/therapies/special-education",
    color: "#E87461",
  },
  {
    id: "psychological-behavioral-intervention",
    title: "Psychological & Behavioral Intervention",
    fullTitle: "Psychological & Behavioral Intervention",
    shortDescription:
      "We support children’s emotional, behavioral, and social development through evidence-based approaches including ABA therapy, behavioral therapy, play therapy, psychological support, and parent guidance.",
    icon: "HeartHandshake",
    href: "/therapies/psychological-behavioral-intervention",
    color: "#14B8A6",
  },
] as const;

export const WHATSAPP_URL = `https://wa.me/${CONTACT.whatsapp}?text=${encodeURIComponent(CONTACT.whatsappMessage)}`;

export const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Programmes", href: "/programs" },
  { label: "Therapies", href: "/therapies" },
  { label: "Resources", href: "/resources" },
  { label: "Contact", href: "/contact" },
] as const;

/** Header/footer "current page" grouping: sub-pages light up their parent nav item. */
export const NAV_SECTION: Record<string, string> = {
  "/team": "/about",
  "/faq": "/resources",
};

export const FOOTER_LINKS = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Our Team", href: "/team" },
  { label: "Programmes", href: "/programs" },
  { label: "Therapies", href: "/therapies" },
  { label: "Resources", href: "/resources" },
  { label: "FAQ", href: "/faq" },
  { label: "Contact", href: "/contact" },
] as const;

export const ANALYTICS_CONFIG = {
  metaPixelId: "27613243531693205",
  googleAdsId: "AW-18374173106",
  gtmId: "GTM-MRZ8HL2F",
} as const;

