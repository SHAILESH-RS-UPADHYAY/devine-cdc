// ══════════════════════════════════════════════════════════
// Devine CDC — page content for the approved redesign.
// Copy follows the client's wireframe corrections and her
// WhatsApp answers (FAQ, consultation details) word for word.
// ══════════════════════════════════════════════════════════

import type { StaticImageData } from "next/image";
import type { IconName } from "@/components/site/Icon";
import sandTrayImg from "@/assets/photos/sand-tray-play.webp";
import fineMotorImg from "@/assets/photos/fine-motor-session.webp";
import earlyInterventionImg from "@/assets/photos/early-intervention-balance.webp";
import oneToOneImg from "@/assets/photos/one-to-one-therapy.webp";
import schoolReadinessImg from "@/assets/photos/school-readiness-table.webp";
import teamImg from "@/assets/photos/devine-team.webp";
import teamWithFamiliesImg from "@/assets/photos/team-with-families.webp";
import speechImg from "@/assets/photos/speech-language-session.webp";
import occupationalImg from "@/assets/photos/occupational-therapy-ball.webp";
import abaImg from "@/assets/photos/aba-structured-task.webp";
import specialEducationImg from "@/assets/photos/special-education-writing.webp";
import psychologicalImg from "@/assets/photos/psychological-support-session.webp";
import ballPitImg from "@/assets/photos/ball-pit-joy.webp";
import rangoliImg from "@/assets/photos/rangoli-activity.webp";
import sensoryRoomImg from "@/assets/photos/sensory-room.webp";
import parentGuidanceImg from "@/assets/photos/parent-guidance-session.webp";
import groupSessionImg from "@/assets/photos/group-session.webp";
import activityBoardImg from "@/assets/photos/activity-board.webp";
import celebrationImg from "@/assets/photos/celebration-day.webp";
import tracingImg from "@/assets/photos/tracing-activity.webp";
import trampolineImg from "@/assets/photos/trampoline-play.webp";
import founderImg from "@/assets/photos/founder.webp";
import worksheet23Cover from "@/assets/photos/worksheet-2-3-years-cover.webp";
import worksheet45Cover from "@/assets/photos/worksheet-4-5-years-cover.webp";
import worksheet68Cover from "@/assets/photos/worksheet-6-8-years-cover.webp";
import worksheet710Cover from "@/assets/photos/worksheet-7-10-years-cover.webp";
import sensoryActivitiesCover from "@/assets/photos/sensory-activities-cover.webp";
import monthlyPlannerCover from "@/assets/photos/monthly-planner-cover.webp";
import visualScheduleCover from "@/assets/photos/visual-schedule-cover.webp";
import therapyAtHomeCover from "@/assets/photos/therapy-at-home-cover.webp";
import milestoneChecklistCover from "@/assets/photos/milestone-checklist-cover.webp";
import { ADDRESS } from "@/lib/constants";

export type Tint = 1 | 2 | 3 | 4 | 5;

/** Clinic photos are static imports: the build hashes each file (cached for a year) and
 *  generates its size and blur placeholder, so pages paint a preview instantly. */
export type Photo = { src: StaticImageData; alt: string };

export const PHOTOS = {
  sandTray: { src: sandTrayImg, alt: "A girl smiling while playing in a sensory sand tray at Devine" },
  fineMotor: { src: fineMotorImg, alt: "A therapist guiding a boy through a fine motor activity" },
  earlyIntervention: { src: earlyInterventionImg, alt: "A therapist supporting a girl balancing on a therapy ball at Devine" },
  oneToOne: { src: oneToOneImg, alt: "Two therapists working one-to-one with a child" },
  schoolReadiness: { src: schoolReadinessImg, alt: "Children working on a table activity with a therapist" },
  team: { src: teamImg, alt: "The Devine team at the centre" },
  teamWithFamilies: { src: teamWithFamiliesImg, alt: "The Devine team celebrating with families at the centre" },
  speech: { src: speechImg, alt: "A therapist and a girl talking during a craft activity" },
  occupational: { src: occupationalImg, alt: "Therapists supporting a boy on a therapy ball" },
  aba: { src: abaImg, alt: "A young person completing a structured puzzle task" },
  specialEducation: { src: specialEducationImg, alt: "A girl practising shapes and writing with her educator" },
  psychological: { src: psychologicalImg, alt: "Two therapists sitting with a boy during a calm session" },
  ballPit: { src: ballPitImg, alt: "A boy laughing in the ball pit at Devine" },
  rangoli: { src: rangoliImg, alt: "A girl smiling during a sensory rangoli activity at Devine" },
  sensoryRoom: { src: sensoryRoomImg, alt: "A boy smiling in the Devine sensory room" },
  parentGuidance: { src: parentGuidanceImg, alt: "Parents attending a guidance session at Devine" },
  groupSession: { src: groupSessionImg, alt: "Children and therapists together at a Devine group session" },
  activityBoard: { src: activityBoardImg, alt: "A child exploring an activity board with her therapist" },
  celebration: { src: celebrationImg, alt: "Children smiling together at a Devine celebration" },
  tracing: { src: tracingImg, alt: "A child practising a tracing activity with her therapist" },
  trampoline: { src: trampolineImg, alt: "A child standing on a trampoline at Devine" },
  founder: { src: founderImg, alt: "Mrs. Komal Pahuja, Founder and Clinical Psychologist" },
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
  /** Detail page, when the item has one (therapies). */
  href?: string;
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
    id: "speech-language-therapy", href: "/therapies/speech-therapy", title: "Speech & Language Therapy", short: "Speech & Language Therapy", icon: "message", tint: 5, photo: PHOTOS.speech,
    points: ["Speech and language development", "Understanding and expressing language", "Functional communication skills"],
    homePoints: ["Speech and language development", "Understanding and expressing language", "Functional communication skills"],
  },
  {
    id: "occupational-therapy", href: "/therapies/occupational-therapy", title: "Occupational Therapy", short: "Occupational Therapy", icon: "hand", tint: 2, photo: PHOTOS.occupational,
    points: ["Sensory processing and regulation", "Fine and gross motor skills", "Self-care and daily living skills"],
    homePoints: ["Sensory processing and regulation", "Fine and gross motor skills", "Self-care and daily living skills"],
  },
  {
    id: "aba-therapy", href: "/therapies/aba-therapy", title: "ABA Therapy", short: "ABA Therapy", icon: "puzzle", tint: 3, photo: PHOTOS.aba,
    points: ["Evidence-informed behavioural support to build meaningful skills", "Positive behaviour support", "Individualised programmes based on your child’s needs"],
    homePoints: ["Evidence-informed behavioural support to build meaningful skills", "Individualised programmes based on your child’s needs", "Positive behaviour support"],
  },
  {
    id: "special-education", href: "/therapies/special-education", title: "Special Education", short: "Special Education", icon: "cap", tint: 4, photo: PHOTOS.specialEducation,
    points: ["Individualised educational support for learning and development", "Helps build academic, cognitive and social skills", "Learning strategies tailored to the child"],
    homePoints: ["Individualised educational support", "Academic, cognitive and social skills", "Learning strategies tailored to the child"],
  },
  {
    id: "psychological-intervention", href: "/therapies/psychological-behavioral-intervention", title: "Psychological & Behavioural Intervention", short: "Psychological Support", icon: "brain", tint: 1, photo: PHOTOS.psychological,
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
  cover: StaticImageData;
  topics: string[];
};

/** Printable worksheets: the only downloads that ask for a parent's name and number (client request). */
export const WORKSHEETS: Worksheet[] = [
  {
    id: "worksheet-age-2-3",
    title: "Learning Worksheet",
    ageGroup: "2 – 3 years",
    description: "52 playful pages for little hands: tracing circles and lines, counting and matching, colouring and first letters.",
    pages: 52,
    sizeLabel: "PDF · 5.7 MB",
    file: "/resources/devine-worksheet-age-2-3.pdf",
    cover: worksheet23Cover,
    topics: ["Tracing & pre-writing", "Counting & matching", "Colouring"],
  },
  {
    id: "worksheet-age-4-5",
    title: "Learning Worksheet",
    ageGroup: "4 – 5 years",
    description: "58 colourful activity pages to practise at home: tracing, finding the odd one out, reading and simple comprehension.",
    pages: 58,
    sizeLabel: "PDF · 8.7 MB",
    file: "/resources/devine-worksheet-age-4-5.pdf",
    cover: worksheet45Cover,
    topics: ["Pre-writing & tracing", "Visual discrimination", "Early reading"],
  },
  {
    id: "worksheet-age-6-8",
    title: "Learning Worksheet",
    ageGroup: "6 – 8 years",
    description: "52 pages of practice: shapes, emotions, healthy food, addition and times tables, and simple sentence writing.",
    pages: 52,
    sizeLabel: "PDF · 6.4 MB",
    file: "/resources/devine-worksheet-age-6-8.pdf",
    cover: worksheet68Cover,
    topics: ["Maths & tables", "Emotions", "Reading & writing"],
  },
  {
    id: "worksheet-age-7-10",
    title: "Learning Worksheet",
    ageGroup: "7 – 10 years",
    description: "47 pages building school skills: grammar and spelling, vowels and opposites, number puzzles, time of day and family words.",
    pages: 47,
    sizeLabel: "PDF · 6.7 MB",
    file: "/resources/devine-worksheet-age-7-10.pdf",
    cover: worksheet710Cover,
    topics: ["Grammar & spelling", "Number skills", "Everyday concepts"],
  },
];

/** Free material: downloads straight away, no form. */
export type LibraryItem = {
  title: string;
  summary: string;
  kind: "Activity book" | "Printable" | "Research paper";
  /** Authors and source, shown for research papers. */
  source?: string;
  file: string;
  pages: number;
  sizeLabel: string;
  /** First page of the PDF, shown for printables and activity books. */
  cover?: StaticImageData;
};

export type LibraryTopic = { id: string; title: string; text: string; icon: IconName; tint: Tint; items: LibraryItem[] };

const READS = {
  earlyIntervention: {
    title: "Parent-mediated early intervention for young children with autism",
    summary: "A Cochrane review of programmes where parents learn to support their child’s development at home.",
    kind: "Research paper",
    source: "Diggle, McConachie & Randle · Cochrane Review, 2003",
    file: "/resources/research/parent-mediated-early-intervention-autism.pdf",
    cover: PHOTOS.earlyIntervention.src,
    pages: 26,
    sizeLabel: "395 KB",
  },
  autismSigns: {
    title: "Early identification of autism: early signs and onset of symptoms",
    summary: "What early characteristics of autism look like, when they appear and how stable an early diagnosis is.",
    kind: "Research paper",
    source: "Sara Jane Webb et al. · Research review",
    file: "/resources/research/early-identification-of-autism.pdf",
    cover: PHOTOS.oneToOne.src,
    pages: 22,
    sizeLabel: "124 KB",
  },
  sensoryCircleTime: {
    title: "Sensory circle time to improve sensory-motor skills",
    summary: "A study of sensory play activities and how they support sensory-motor development in early childhood.",
    kind: "Research paper",
    source: "Winda Sherly Utami et al. · Research study",
    file: "/resources/research/sensory-circle-time-early-childhood.pdf",
    cover: PHOTOS.occupational.src,
    pages: 10,
    sizeLabel: "1.1 MB",
  },
  sensoryEverydayLife: {
    title: "Supporting children in everyday life using sensory processing knowledge",
    summary: "How understanding a child’s sensory patterns helps families shape daily routines that work.",
    kind: "Research paper",
    source: "Winnie Dunn · Infants & Young Children, 2007",
    file: "/resources/research/sensory-processing-everyday-life.pdf",
    cover: PHOTOS.sensoryRoom.src,
    pages: 18,
    sizeLabel: "222 KB",
  },
} satisfies Record<string, LibraryItem>;

export const LIBRARY: LibraryTopic[] = [
  {
    id: "sensory-regulation",
    title: "Sensory & Regulation",
    text: "Learn about sensory needs",
    icon: "waves",
    tint: 3,
    items: [
      {
        title: "Sensory & Regulation Activity Book",
        summary: "Kinetic sand, finger painting, tracing, swings, balance, yoga, blowing games and calm-down spaces, with a picture for every activity.",
        kind: "Activity book",
        file: "/resources/devine-sensory-regulation-activities.pdf",
        cover: sensoryActivitiesCover,
        pages: 47,
        sizeLabel: "9.1 MB",
      },
      READS.sensoryEverydayLife,
      READS.sensoryCircleTime,
    ],
  },
  {
    id: "therapy-at-home",
    title: "Therapy at Home",
    text: "Activities and strategies",
    icon: "home",
    tint: 4,
    items: [
      {
        title: "Therapy at Home Activity Guide",
        summary: "Step-by-step home practice for speech, OT, sensory, social skills, school readiness, attention, fine motor and parent-led play, with an example for every activity.",
        kind: "Activity book",
        file: "/resources/devine-therapy-at-home-activities.pdf",
        cover: therapyAtHomeCover,
        pages: 22,
        sizeLabel: "5.2 MB",
      },
      {
        title: "Daily Routine Template",
        summary: "A monthly planner with goals, fun things to do and space for notes, to build structure at home.",
        kind: "Printable",
        file: "/resources/devine-monthly-planner.pdf",
        cover: monthlyPlannerCover,
        pages: 5,
        sizeLabel: "969 KB",
      },
      {
        title: "Visual Schedule",
        summary: "A picture schedule from waking up to play time that helps children follow their day independently.",
        kind: "Printable",
        file: "/resources/devine-visual-schedule.pdf",
        cover: visualScheduleCover,
        pages: 2,
        sizeLabel: "412 KB",
      },
    ],
  },
  { id: "parent-guides", title: "Parent Guides", text: "Practical tips for everyday life", icon: "book", tint: 1, items: [READS.earlyIntervention] },
  {
    id: "development-milestones",
    title: "Development & Milestones",
    text: "Understand key stages",
    icon: "sprout",
    tint: 5,
    items: [
      {
        title: "Developmental Milestone Checklist",
        summary: "Track gross motor, fine motor, speech and social milestones with expected ages, and note areas to discuss with a professional.",
        kind: "Printable",
        file: "/resources/devine-developmental-milestone-checklist.pdf",
        cover: milestoneChecklistCover,
        pages: 4,
        sizeLabel: "223 KB",
      },
      READS.autismSigns,
    ],
  },
  { id: "behaviour-support", title: "Behaviour Support", text: "Guidance for common challenges", icon: "heart", tint: 2, items: [] },
  { id: "communication-speech", title: "Communication & Speech", text: "Ideas to support speech and language", icon: "message", tint: 1, items: [] },
];

/** Handpicked reads shown with a photo above the library (ticked in the client's review). */
export const FEATURED_READS = [
  { tag: "Guide", title: "A parent’s guide to early intervention", text: "Learn how early support at home can make a big difference.", photo: PHOTOS.earlyIntervention, item: READS.earlyIntervention },
  { tag: "Article", title: "Early signs of autism: what parents should look for", text: "Early characteristics, and when to talk to a professional.", photo: PHOTOS.oneToOne, item: READS.autismSigns },
  { tag: "Tips", title: "Sensory play ideas for different ages", text: "Fun and meaningful sensory activities for home.", photo: PHOTOS.occupational, item: READS.sensoryCircleTime },
];

/** Site-wide offer strip. Shows only between `from` and `until` (inclusive, India time), then hides by itself. */
export const OFFER = {
  from: "2026-10-07",
  until: "2026-10-20",
  label: "Navratri Special (10 – 20 Oct)",
  perks: ["Free consultation", "Up to 30% off on monthly packages", "₹2,000 off on first month"],
  terms: [
    "Valid on consultations and therapy packages booked between 10 and 20 October 2026.",
    "Free consultation: the consultation fee is waived for bookings made during the offer period.",
    "Up to 30% off applies to monthly therapy packages. The exact discount depends on the package and is confirmed by our team before you book.",
    "₹2,000 off applies to the first month of a new monthly therapy package.",
    "Cannot be combined with other offers or discounts, and cannot be exchanged for cash.",
    "Devine Child Development Centre may change or end the offer at any time.",
  ],
  cta: "Book now",
  href: "/consultation",
};
