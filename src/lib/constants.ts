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
  url: "https://devinecdc.in",
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
      "M.Phil. Clinical Psychology",
      "M.Sc. Clinical Psychology",
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

export const WELLNESS_WEDNESDAY_CLASSES = [
  {
    id: "wellness-1",
    date: "1st Wednesday",
    title: "Sensory Play & Art",
    description: "This is a placeholder for the description from the PDF. Please replace this text with the actual content.",
    image: "/images/children_sensory_play.webp",
    color: "#E87461",
  },
  {
    id: "wellness-2",
    date: "2nd Wednesday",
    title: "Interactive Storytelling",
    description: "This is a placeholder for the description from the PDF. Please replace this text with the actual content.",
    image: "/images/child_learning_happily.webp",
    color: "#E8B832",
  },
  {
    id: "wellness-3",
    date: "3rd Wednesday",
    title: "Group Music",
    description: "This is a placeholder for the description from the PDF. Please replace this text with the actual content.",
    image: "/images/children_therapy_laughing.webp",
    color: "#7BC8A4",
  },
  {
    id: "wellness-4",
    date: "4th Wednesday",
    title: "Mindfulness & Yoga",
    description: "This is a placeholder for the description from the PDF. Please replace this text with the actual content.",
    image: "/images/therapy_session.webp",
    color: "#14B8A6",
  },
  {
    id: "wellness-5",
    date: "5th Wednesday",
    title: "Creative Expression",
    description: "This is a placeholder for the description from the PDF. Please replace this text with the actual content.",
    image: "/images/therapy_session_joyful.webp",
    color: "#9B59B6",
  },
  {
    id: "wellness-6",
    date: "6th Wednesday",
    title: "Social Skills Workshop",
    description: "This is a placeholder for the description from the PDF. Please replace this text with the actual content.",
    image: "/images/child_laughing_therapy.webp",
    color: "#5B8CC5",
  },
  {
    id: "wellness-7",
    date: "7th Wednesday",
    title: "Nature & Environment",
    description: "This is a placeholder for the description from the PDF. Please replace this text with the actual content.",
    image: "/images/autism_real.webp",
    color: "#E87461",
  },
  {
    id: "wellness-8",
    date: "8th Wednesday",
    title: "Pottery & Clay Workshop",
    description: "This is a placeholder for the description from the PDF. Please replace this text with the actual content.",
    image: "/images/adhd_real.webp",
    color: "#E8B832",
  },
  {
    id: "wellness-9",
    date: "9th Wednesday",
    title: "Activity 9",
    description: "This is a placeholder for the description from the PDF. Please replace this text with the actual content.",
    image: "/images/children_sensory_play.webp",
    color: "#7BC8A4",
  },
  {
    id: "wellness-10",
    date: "10th Wednesday",
    title: "Activity 10",
    description: "This is a placeholder for the description from the PDF. Please replace this text with the actual content.",
    image: "/images/child_learning_happily.webp",
    color: "#14B8A6",
  },
  {
    id: "wellness-11",
    date: "11th Wednesday",
    title: "Activity 11",
    description: "This is a placeholder for the description from the PDF. Please replace this text with the actual content.",
    image: "/images/therapy_session_joyful.webp",
    color: "#9B59B6",
  },
  {
    id: "wellness-12",
    date: "12th Wednesday",
    title: "Activity 12",
    description: "This is a placeholder for the description from the PDF. Please replace this text with the actual content.",
    image: "/images/child_laughing_therapy.webp",
    color: "#5B8CC5",
  },
];

export const TOP_WELLNESS_CLASSES = ["wellness-3", "wellness-5", "wellness-8", "wellness-6"];

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
  { label: "Conditions", href: "/" },
  { label: "Programs", href: "/programs" },
  { label: "Contact", href: "/contact" },
  { label: "About", href: "/about" },
] as const;
