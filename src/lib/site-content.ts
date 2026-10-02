// ══════════════════════════════════════════════════════════
// Devine CDC — page content for the approved redesign.
// Copy follows the client's wireframe corrections and her
// WhatsApp answers (FAQ, consultation details) word for word.
// ══════════════════════════════════════════════════════════

import type { IconName } from "@/components/site/Icon";
import { ADDRESS } from "@/lib/constants";

export type Tint = 1 | 2 | 3 | 4 | 5;

/** Portrait photos are exported at 1200×1500 (4:5); landscape ones carry their own size. */
export type Photo = { src: string; alt: string; w?: number; h?: number };

export const PHOTOS = {
  sandTray: { src: "/images/site/sand-tray-play.webp", alt: "A girl smiling while playing in a sensory sand tray at Devine" },
  fineMotor: { src: "/images/site/fine-motor-session.webp", alt: "A therapist guiding a boy through a fine motor activity" },
  earlyIntervention: { src: "/images/site/early-intervention-balance.webp", alt: "A therapist supporting a girl balancing on a therapy ball at Devine" },
  oneToOne: { src: "/images/site/one-to-one-therapy.webp", alt: "Two therapists working one-to-one with a child" },
  schoolReadiness: { src: "/images/site/school-readiness-table.webp", alt: "Children working on a table activity with a therapist" },
  team: { src: "/images/site/devine-team.webp", alt: "The Devine team at the centre" },
  teamWithFamilies: { src: "/images/site/team-with-families.webp", alt: "The Devine team celebrating with families at the centre", w: 1800, h: 1013 },
  speech: { src: "/images/site/speech-language-session.webp", alt: "A therapist and a girl talking during a craft activity" },
  occupational: { src: "/images/site/occupational-therapy-ball.webp", alt: "Therapists supporting a boy on a therapy ball" },
  aba: { src: "/images/site/aba-structured-task.webp", alt: "A young person completing a structured puzzle task" },
  specialEducation: { src: "/images/site/special-education-writing.webp", alt: "A girl practising shapes and writing with her educator" },
  psychological: { src: "/images/site/psychological-support-session.webp", alt: "Two therapists sitting with a boy during a calm session" },
  ballPit: { src: "/images/site/ball-pit-joy.webp", alt: "A boy laughing in the ball pit at Devine" },
  rangoli: { src: "/images/site/rangoli-activity.webp", alt: "A girl smiling during a sensory rangoli activity at Devine" },
  sensoryRoom: { src: "/images/site/sensory-room.webp", alt: "A boy smiling in the Devine sensory room" },
  parentGuidance: { src: "/images/site/parent-guidance-session.webp", alt: "Parents attending a guidance session at Devine" },
  groupSession: { src: "/images/site/group-session.webp", alt: "Children and therapists together at a Devine group session", w: 1800, h: 1013 },
  activityBoard: { src: "/images/site/activity-board.webp", alt: "A child exploring an activity board with her therapist" },
  celebration: { src: "/images/site/celebration-day.webp", alt: "Children smiling together at a Devine celebration" },
  tracing: { src: "/images/site/tracing-activity.webp", alt: "A child practising a tracing activity with her therapist" },
  trampoline: { src: "/images/site/trampoline-play.webp", alt: "A child standing on a trampoline at Devine" },
  founder: { src: "/images/profile.webp", alt: "Mrs. Komal Pahuja, Founder and Clinical Psychologist", w: 1045, h: 1505 },
} satisfies Record<string, Photo>;


// ── Shared lists ─────────────────────────────────────────

export const CONCERN_OPTIONS = [
  "Speech & Language Delay",
  "Autism Support",
  "ADHD & Attention",
  "Sensory Processing",
  "Behavioural Challenges",
  "Learning Difficulties",
  "Social Skills",
  "Not sure yet",
] as const;

export const PROMISES: { icon: IconName; tone: string; title: string; text: string }[] = [
  { icon: "award", tone: "t-peach", title: "Experienced Professionals", text: "RCI-licensed, multidisciplinary specialists." },
  { icon: "users", tone: "t-blue", title: "Personalised Care", text: "Plans built around your child, never a template." },
  { icon: "user-check", tone: "t-mint", title: "Individualised Approach", text: "Goals shaped by strengths and sensory profile." },
  { icon: "home", tone: "t-gold", title: "Support for Families", text: "Parents guided and involved at every step." },
];

export const CONCERNS: { icon: IconName; bg: string; fg: string; title: string; text: string }[] = [
  { icon: "message", bg: "#FCE7E3", fg: "#B8412F", title: "Speech & Language Delay", text: "Late talking, unclear speech, understanding and using words." },
  { icon: "puzzle", bg: "#FFE3CC", fg: "#A94E17", title: "Autism Support", text: "Communication, regulation and everyday skills." },
  { icon: "activity", bg: "#E4F4EC", fg: "#2F7D59", title: "Behavioural Challenges", text: "Meltdowns, aggression and difficult transitions." },
  { icon: "book", bg: "#FBF1D3", fg: "#8A6A0C", title: "Learning Difficulties", text: "Reading, writing and keeping up with learning." },
  { icon: "smile", bg: "#E6EFF8", fg: "#2E6DA4", title: "Social Skills", text: "Play, sharing, turn-taking and making friends." },
  { icon: "waves", bg: "#E4F4EC", fg: "#2F7D59", title: "Sensory Processing", text: "Over- or under-responding to sound, touch and movement." },
  { icon: "target", bg: "#FCE7E3", fg: "#B8412F", title: "ADHD & Attention", text: "Focus, impulsivity and staying regulated." },
];

export const WHY_ITEMS: { icon: IconName; tone: string; title: string; text: string }[] = [
  { icon: "star", tone: "t-gold", title: "Experienced Professionals", text: "A clinical psychologist-led, multidisciplinary team that plans every child’s support together." },
  { icon: "heart", tone: "t-coral", title: "Personalised Care", text: "Goals set around your child’s needs, strengths and sensory profile." },
  { icon: "shield", tone: "t-mint", title: "Safe & Nurturing Environment", text: "A warm space where children feel genuinely happy to be here." },
  { icon: "sprout", tone: "t-peach", title: "Focus on Everyday Progress", text: "Therapy with a clear purpose: a happier, more confident, more independent child." },
];

export const STATS = [
  { value: "RCI", label: "Licensed professionals" },
  { value: "5+", label: "Years of experience" },
  { value: "250+", label: "Children supported" },
  { value: "5", label: "Core therapies, one team" },
] as const;

// ── Programmes ───────────────────────────────────────────

export type DetailItem = {
  id: string;
  title: string;
  icon: IconName;
  tint: Tint;
  photo: Photo;
  points: string[];
  meta?: string;
  note?: string;
};

export const PROGRAMMES: DetailItem[] = [
  {
    id: "early-intervention", title: "Early Intervention", icon: "sprout", tint: 4, photo: PHOTOS.earlyIntervention,
    points: ["Supports early developmental skills", "Focus on communication, play and foundational skills", "Includes parent guidance and involvement"],
  },
  {
    id: "school-readiness", title: "School Readiness", icon: "pencil", tint: 5, photo: PHOTOS.schoolReadiness, meta: "3 – 6 years",
    points: ["Communication and social skills", "Attention and learning readiness", "Focus on independence and confidence", "Emotional regulation"],
  },
  {
    id: "individualised-programmes", title: "Individualised Therapy Programmes", icon: "puzzle", tint: 3, photo: PHOTOS.oneToOne,
    points: ["Individualised goals and intervention", "Multidisciplinary approach", "Regular progress review", "Parent involvement throughout the journey"],
  },
  {
    id: "parent-training", title: "Parent Training & Support", icon: "users", tint: 2, photo: PHOTOS.parentGuidance,
    note: "Because progress shouldn’t stop when the therapy session ends.",
    points: ["Practical strategies for home", "Individualised home plans", "Regular discussion of progress and challenges"],
  },
];

// ── Therapies ────────────────────────────────────────────

export const THERAPY_DETAILS: (DetailItem & { short: string; homePoints: string[] })[] = [
  {
    id: "speech-language-therapy", title: "Speech & Language Therapy", short: "Speech & Language Therapy", icon: "message", tint: 5, photo: PHOTOS.speech,
    points: ["Speech and language development", "Understanding and expressing language", "Functional communication skills"],
    homePoints: ["Speech and language development", "Understanding and expressing language", "Functional communication skills"],
  },
  {
    id: "occupational-therapy", title: "Occupational Therapy", short: "Occupational Therapy", icon: "hand", tint: 2, photo: PHOTOS.occupational,
    points: ["Sensory processing and regulation", "Fine and gross motor skills", "Self-care and daily living skills"],
    homePoints: ["Sensory processing and regulation", "Fine and gross motor skills", "Self-care and daily living skills"],
  },
  {
    id: "aba-therapy", title: "ABA Therapy", short: "ABA Therapy", icon: "puzzle", tint: 3, photo: PHOTOS.aba,
    points: ["Evidence-informed behavioural support to build meaningful skills", "Positive behaviour support", "Individualised programmes based on your child’s needs"],
    homePoints: ["Evidence-informed behavioural support to build meaningful skills", "Individualised programmes based on your child’s needs", "Positive behaviour support"],
  },
  {
    id: "special-education", title: "Special Education", short: "Special Education", icon: "cap", tint: 4, photo: PHOTOS.specialEducation,
    points: ["Individualised educational support for learning and development", "Helps build academic, cognitive and social skills", "Learning strategies tailored to the child"],
    homePoints: ["Individualised educational support", "Academic, cognitive and social skills", "Learning strategies tailored to the child"],
  },
  {
    id: "psychological-intervention", title: "Psychological & Behavioural Intervention", short: "Psychological Support", icon: "brain", tint: 1, photo: PHOTOS.psychological,
    points: ["Social and emotional skills", "Psychological intervention", "Guidance for children and families"],
    homePoints: ["Social and emotional skills", "Psychological and behavioural intervention", "Guidance for children and families"],
  },
];

// ── Questions (client answers, WhatsApp 2 Oct 2026) ─────

export type QA = { q: string; a: string };

const DIAGNOSIS = "No, you don’t need any formal diagnosis. If something bothers you, we are here to help.";
const BOTH_PARENTS = "Yes, both parents can attend. We prefer that both parents come if possible.";
const BRING = "Any previous diagnosis reports, if you have them.";
const ONLINE = "Yes, online consultations are available. They are 30 minutes, with the same ₹1,000 fee.";
const BOOK = "Simply contact us to book a consultation, and our team will guide you through the next steps.";

export const CONSULT_QA: QA[] = [
  { q: "How long is the consultation?", a: "30 to 40 minutes. Time observing your child is included." },
  { q: "Is there a consultation fee?", a: "Yes, the consultation fee is ₹1,000." },
  { q: "Do I need a formal diagnosis before booking?", a: DIAGNOSIS },
  { q: "Can both parents attend the consultation?", a: BOTH_PARENTS },
  { q: "What should we bring to the consultation?", a: BRING },
  { q: "Do you offer online consultations?", a: ONLINE },
];

export const CONTACT_QA: QA[] = [
  { q: "How do I book a consultation?", a: BOOK },
  { q: "Is there a consultation fee?", a: "Yes, the consultation fee is ₹1,000." },
  { q: "What should I bring to the first visit?", a: BRING },
  { q: "Can both parents attend the consultation?", a: BOTH_PARENTS },
  { q: "Do you offer online consultations?", a: ONLINE },
];

export type FaqGroup = { id: string; icon: IconName; tint: Tint; title: string; sub: string; items: QA[] };

export const FAQ_GROUPS: FaqGroup[] = [
  {
    id: "about-devine", icon: "message", tint: 1, title: "About Devine", sub: "Learn more about Devine and our approach.",
    items: [
      { q: "What is Devine Child Development Centre?", a: "Devine Child Development Centre is a child-focused developmental and therapeutic centre offering personalised support through in-person and online sessions worldwide. We follow a multidisciplinary, child-centred approach focused on understanding and supporting every child’s individual needs." },
      { q: "What age group do you support?", a: "We support children aged 2.5 to 14 years, based on their individual developmental needs." },
      { q: "What makes Devine different?", a: "We focus on understanding each child first, with personalised care, parent involvement, and a multidisciplinary approach." },
      { q: "Where are you located?", a: `We are located in Sector 51, Gurugram: ${ADDRESS.street}, ${ADDRESS.landmark}.` },
    ],
  },
  {
    id: "programmes", icon: "users", tint: 2, title: "Programmes", sub: "Understand our developmental programmes.",
    items: [
      { q: "What programmes do you offer?", a: "We offer Speech Therapy, Occupational Therapy, Behaviour Therapy, ABA, Special Education, Counselling, Assessments, and Parent Training." },
      { q: "How do I know which programme my child needs?", a: "Our team first understands your concerns and your child’s needs, then guides you towards the right support plan." },
      { q: "Do you provide assessments?", a: "Yes, we offer developmental, psychological, and diagnostic assessments." },
      { q: "Do parents get involved in therapy?", a: "Yes. Parent involvement and guidance are an important part of our approach." },
      { q: "How frequently should my child attend sessions?", a: "Session frequency depends on your child’s individual needs and goals." },
      { q: "How can I book a consultation?", a: BOOK },
    ],
  },
  {
    id: "therapies", icon: "puzzle", tint: 3, title: "Therapies", sub: "Get details about our therapy services.",
    items: [
      { q: "What types of therapies do you offer?", a: "We offer Speech & Language Therapy, Occupational Therapy, Behaviour Therapy, ABA, Special Education, and Counselling." },
      { q: "Are sessions individual or group-based?", a: "We offer individual sessions." },
      { q: "How do I know which therapy my child needs?", a: "Our team assesses your child’s needs and guides you towards the most appropriate therapy or combination of therapies." },
      { q: "Who provides the therapy?", a: "Therapy is provided by trained and RCI-licensed therapists, with guidance from our clinical team." },
    ],
  },
  {
    id: "assessments", icon: "doc", tint: 4, title: "Assessments", sub: "Learn about our assessment process.",
    items: [
      { q: "Do you offer developmental assessments?", a: "Yes, we offer developmental, psychological, and diagnostic assessments." },
      { q: "How long does the assessment take?", a: "Assessments take a minimum of 1.5 hours, and some may take up to 3 hours. Depending on the assessment and availability, sessions may be conducted across different days for the comfort of both the child and parents." },
      { q: "Will we receive a detailed report?", a: "Yes, you receive a detailed assessment report with key findings and recommendations." },
      { q: "What happens after the assessment?", a: "After the assessment, we discuss the findings and recommend the appropriate session frequency, if required. If no therapy is needed, we guide you accordingly." },
    ],
  },
  {
    id: "consultation", icon: "calendar", tint: 5, title: "Consultation", sub: "Bookings and what to expect.",
    items: CONSULT_QA.filter((x) => !x.q.includes("fee")),
  },
  {
    id: "fees", icon: "shield", tint: 1, title: "Fees", sub: "Payments and support.",
    items: [
      { q: "Is there a consultation fee?", a: "Yes, the consultation fee is ₹1,000." },
      { q: "How much do therapy sessions cost?", a: "Therapy fees vary based on the type and frequency of sessions. Contact us for details." },
    ],
  },
];

// ── Study material for parents (Resources page) ──────────

export type Worksheet = {
  id: string;
  title: string;
  ageGroup: string;
  description: string;
  pages: number;
  sizeLabel: string;
  file: string;
  cover: string;
  topics: string[];
};

export const WORKSHEETS: Worksheet[] = [
  {
    id: "worksheet-age-4-5",
    title: "Learning Worksheet",
    ageGroup: "4 – 5 years",
    description: "58 colourful activity pages to practise at home: tracing, finding the odd one out, reading and simple comprehension.",
    pages: 58,
    sizeLabel: "PDF · 8.5 MB",
    file: "/resources/devine-worksheet-age-4-5.pdf",
    cover: "/images/site/worksheet-4-5-years-cover.webp",
    topics: ["Pre-writing & tracing", "Visual discrimination", "Early reading"],
  },
];
