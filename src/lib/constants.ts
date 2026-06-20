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
  url: "https://devinecdc.com",
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
  googleMapsUrl: "https://maps.app.goo.gl/DynQCWGtbGhzEiWN9?g_st=ic",
  googleMapsEmbed: "https://maps.google.com/maps?q=N-17,+Mayfield+Garden,+Sector+51,+Gurugram&t=&z=15&ie=UTF8&iwloc=&output=embed",
} as const;

export const HOURS = {
  display: "9:00 AM – 6:00 PM",
  days: "Monday – Saturday",
  opens: "09:00",
  closes: "18:00",
} as const;

export const FOUNDERS = [
  {
    name: "Komal Pahuja",
    role: "Clinical Psychologist",
    credentials: [
      "M.Sc. Clinical Psychology",
      "M.Phil. Clinical Psychology",
      "5+ Years Experience",
      "250+ Children Supported",
      "Specialized in Autism & ADHD",
      "Evidence-based Therapies",
    ],
    instagram: "https://www.instagram.com/komalpahuja___",
    image: "/images/profile.webp",
    bio: "MPhil. Msc. Clinical Psychologist with 5+ years of experience. With a passion for nurturing young minds, Komal Pahuja founded Devine CDC to create a safe, supportive environment where every child can thrive.",
  },
] as const;

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

export const GROUP_CLASSES = [
  {
    id: "dance",
    title: "Dance",
    description: "Expressive movement therapy that builds coordination, rhythm, and social skills through fun, energising dance sessions.",
    icon: "Music",
    color: "#E87461",
    href: "/programs/dance",
  },
  {
    id: "clay-workshop",
    title: "Clay Workshop",
    description: "Hands-on creative sessions that strengthen fine motor skills, sensory awareness, and artistic expression through clay moulding.",
    icon: "Palette",
    color: "#E8B832",
    href: "/programs/clay-workshop",
  },
  {
    id: "yoga-for-kids",
    title: "Yoga for Kids",
    description: "Gentle yoga sessions designed for children to improve focus, body awareness, flexibility, and emotional regulation.",
    icon: "Heart",
    color: "#7BC8A4",
    href: "/programs/yoga-for-kids",
  },
] as const;

export const CONDITIONS = [
  {
    id: "autism",
    title: "Autism Spectrum Disorder",
    shortTitle: "Autism",
    description:
      "Autism Spectrum Disorder (ASD) affects how a child communicates, behaves, and interacts with others. Our expert team provides personalised assessment and therapy plans to help children with ASD build essential life skills.",
    href: "/conditions/autism",
    icon: "Puzzle",
    image: "/images/condition-autism.webp",
  },
  {
    id: "adhd",
    title: "ADHD",
    shortTitle: "ADHD",
    description:
      "Attention Deficit Hyperactivity Disorder (ADHD) affects a child's ability to focus, sit still, and control impulses. We offer structured interventions that help children manage their behaviour and succeed in daily life.",
    href: "/conditions/adhd",
    icon: "Zap",
    image: "/images/condition-adhd.webp",
  },
  {
    id: "speech-delay",
    title: "Speech Delay",
    shortTitle: "Speech Delay",
    description:
      "Speech delay means a child takes longer to develop language skills than expected. With early, targeted speech therapy and a supportive environment, children can make remarkable progress at their own pace.",
    href: "/conditions/speech-delay",
    icon: "MessageSquare",
    image: "/images/condition-speech-delay.webp",
  },
] as const;

export const TRUST_STATS = [
  { label: "RCI Licensed", value: "RCI", icon: "ShieldCheck", suffix: "" },
  { label: "Therapies Offered", value: "5", icon: "Stethoscope", suffix: "+" },
  { label: "Happy Families", value: "100", icon: "Users", suffix: "+" },
  { label: "Years Experience", value: "5", icon: "Award", suffix: "+" },
] as const;

export const WHATSAPP_URL = `https://wa.me/${CONTACT.whatsapp}?text=${encodeURIComponent(CONTACT.whatsappMessage)}`;

export const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "Therapies", href: "/therapies" },
  { label: "Conditions", href: "/conditions" },
  { label: "Programs", href: "/programs" },
  { label: "Contact", href: "/contact" },
  { label: "About", href: "/about" },
] as const;
