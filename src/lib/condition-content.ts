// ══════════════════════════════════════════════════════════
// Devine CDC — Detailed Condition Content
// Rich clinical content for each condition inner page
// ══════════════════════════════════════════════════════════

export interface ConditionContent {
  id: string;
  heroTagline: string;
  overview: string;
  understanding: string;
  signs: { category: string; items: string[] }[];
  howWeHelp: { title: string; description: string }[];
  therapiesUsed: { therapy: string; role: string }[];
  myths: { myth: string; fact: string }[];
  faqs: { question: string; answer: string }[];
  parentMessage: string;
}

export const CONDITION_CONTENT: Record<string, ConditionContent> = {
  autism: {
    id: "autism",
    heroTagline: "Understanding your child's unique world.",
    overview:
      "Autism Spectrum Disorder (ASD) is a neurodevelopmental condition that affects how a person communicates, interacts with others, and experiences the world. It is called a 'spectrum' because every child with autism is unique — some may need minimal support while others require more intensive help. At Devine CDC, we see autism not as something to 'fix' but as a different way of experiencing life that deserves understanding, respect, and the right kind of support.",
    understanding:
      "Children with autism often experience the world more intensely. Sounds may seem louder, lights brighter, and social situations more confusing. They may communicate differently — through actions rather than words, or with a unique way of using language. Many children with autism have incredible strengths: exceptional memory, deep focus on interests, creative thinking, and an honest, genuine way of connecting with others. Our role is to help them use these strengths while building the skills they need for daily life.",
    signs: [
      {
        category: "Social Communication",
        items: [
          "Limited or no eye contact",
          "Doesn't respond to their name by 12 months",
          "Doesn't point or wave by 12 months",
          "Prefers playing alone rather than with others",
          "Difficulty understanding or expressing emotions",
          "Doesn't engage in pretend play by 18 months",
        ],
      },
      {
        category: "Repetitive Behaviours & Interests",
        items: [
          "Lining up toys or objects in a specific order",
          "Repeating words, phrases, or sounds (echolalia)",
          "Hand-flapping, spinning, or rocking",
          "Intense focus on specific topics or objects",
          "Distress with small changes in routine",
          "Unusual sensory responses (covering ears, avoiding textures)",
        ],
      },
      {
        category: "Daily Living",
        items: [
          "Difficulty with transitions between activities",
          "Selective eating (limited food preferences)",
          "Sleep difficulties",
          "Challenges with self-care tasks (dressing, grooming)",
        ],
      },
    ],
    howWeHelp: [
      {
        title: "Early Intervention Programmes",
        description:
          "Our structured early intervention programmes for children aged 2-6 combine ABA, speech therapy, and OT into an intensive yet play-based schedule that maximises developmental gains during the most critical years.",
      },
      {
        title: "Communication Building",
        description:
          "Whether through verbal speech, sign language, picture exchange systems (PECS), or communication devices — we ensure every child has a reliable way to express themselves.",
      },
      {
        title: "Social Skills Training",
        description:
          "Through structured group activities and one-on-one coaching, we teach children how to read social cues, take turns, share, and build friendships.",
      },
      {
        title: "Sensory Integration Support",
        description:
          "Our sensory-rich therapy environment helps children learn to process and respond to sensory input in a regulated way, reducing meltdowns and increasing comfort.",
      },
      {
        title: "Behaviour Support",
        description:
          "We identify the function behind challenging behaviours and teach children appropriate alternatives — transforming frustration into communication.",
      },
      {
        title: "Family-Centred Approach",
        description:
          "We provide comprehensive parent training, sibling support, and home strategies so your entire family feels equipped and empowered.",
      },
    ],
    therapiesUsed: [
      {
        therapy: "ABA Therapy",
        role: "Primary intervention for building communication, social, and daily living skills through positive reinforcement.",
      },
      {
        therapy: "Speech & Language Therapy",
        role: "Addresses speech delays, language comprehension, and social communication challenges.",
      },
      {
        therapy: "Occupational Therapy",
        role: "Supports sensory processing, fine motor skills, and self-care independence.",
      },
      {
        therapy: "Special Education",
        role: "Provides tailored academic instruction adapted to the child's learning style.",
      },
    ],
    myths: [
      {
        myth: "Autism is caused by bad parenting.",
        fact: "Autism is a neurodevelopmental condition with a strong genetic basis. It has nothing to do with parenting style, diet, or lifestyle choices.",
      },
      {
        myth: "Children with autism can't feel emotions.",
        fact: "Children with autism feel emotions deeply. They may express them differently, but they experience the full range of human feelings — love, joy, frustration, and empathy.",
      },
      {
        myth: "If a child can speak, they don't have autism.",
        fact: "Many children with autism are highly verbal. Autism affects communication in varied ways — some children struggle with speech, while others have difficulty with the social use of language.",
      },
      {
        myth: "Children will 'outgrow' autism.",
        fact: "Autism is a lifelong condition. However, with the right support, children can develop significant skills and lead fulfilling, independent lives.",
      },
    ],
    faqs: [
      {
        question: "At what age can autism be diagnosed?",
        answer:
          "Reliable diagnosis is possible from 18-24 months, though many children are diagnosed later. If you notice signs, don't wait — early assessment allows for earlier intervention, which leads to better outcomes.",
      },
      {
        question: "What causes autism?",
        answer:
          "The exact cause is not fully understood, but research points to a combination of genetic and environmental factors. It is NOT caused by vaccines, parenting style, or anything the parents did or didn't do.",
      },
      {
        question: "Can my child attend a regular school?",
        answer:
          "Many children with autism attend mainstream schools with appropriate support (shadow teachers, accommodations). The right school depends on your child's individual needs and abilities.",
      },
      {
        question: "How long will my child need therapy?",
        answer:
          "This varies greatly. Some children make rapid progress and need less support over time, while others benefit from ongoing therapy. We regularly review goals and adjust the plan as your child grows.",
      },
    ],
    parentMessage:
      "Receiving an autism diagnosis for your child can bring a whirlwind of emotions — and that's completely normal. But know this: your child is still the same wonderful person they were before the diagnosis. They just have a name for why certain things are harder. At Devine CDC, we are here to walk this journey with you — with expertise, empathy, and unwavering belief in your child's potential.",
  },

  adhd: {
    id: "adhd",
    heroTagline: "Channelling energy into extraordinary potential.",
    overview:
      "Attention Deficit Hyperactivity Disorder (ADHD) is a neurodevelopmental condition that affects a child's ability to focus, control impulses, and regulate their activity level. It's not about being naughty or lazy — children with ADHD have brains that are wired differently, often leading to incredible creativity, energy, and out-of-the-box thinking alongside the challenges.",
    understanding:
      "ADHD shows up differently in every child. Some children are primarily inattentive — dreamy, forgetful, and easily distracted. Others are primarily hyperactive-impulsive — always on the move, talking non-stop, and acting before thinking. Many children have a combination of both. Understanding which pattern your child follows is key to providing the right support. At Devine CDC, we don't just manage symptoms — we help children harness their ADHD traits as strengths.",
    signs: [
      {
        category: "Inattention",
        items: [
          "Difficulty sustaining attention during tasks or play",
          "Doesn't seem to listen when spoken to directly",
          "Frequently loses belongings (toys, books, school supplies)",
          "Avoids tasks requiring sustained mental effort",
          "Easily distracted by unrelated thoughts or stimuli",
          "Often forgetful in daily activities",
        ],
      },
      {
        category: "Hyperactivity",
        items: [
          "Fidgets, squirms, or can't stay seated",
          "Runs or climbs in inappropriate situations",
          "Talks excessively",
          "Difficulty playing quietly",
          "Seems 'driven by a motor' — always on the go",
        ],
      },
      {
        category: "Impulsivity",
        items: [
          "Blurts out answers before questions are finished",
          "Difficulty waiting for their turn",
          "Interrupts or intrudes on others",
          "Acts without thinking about consequences",
          "Makes hasty decisions",
        ],
      },
    ],
    howWeHelp: [
      {
        title: "Behavioural Strategies",
        description:
          "We teach children concrete strategies for impulse control, emotional regulation, and self-monitoring through structured behavioural interventions.",
      },
      {
        title: "Executive Function Training",
        description:
          "Our programmes build the 'CEO skills' of the brain — planning, organising, prioritising, time management, and working memory.",
      },
      {
        title: "Attention Building Activities",
        description:
          "Through carefully graded activities, we gradually increase your child's ability to sustain focus, filter distractions, and complete tasks.",
      },
      {
        title: "Social Skills Coaching",
        description:
          "Many children with ADHD struggle with friendships due to impulsivity. We teach waiting, listening, and reading social situations.",
      },
      {
        title: "Academic Support",
        description:
          "Our special educators provide strategies for homework management, study skills, and classroom behaviour that set children up for school success.",
      },
      {
        title: "Parent Coaching",
        description:
          "We equip parents with evidence-based strategies for managing ADHD at home — from morning routines to homework battles — reducing stress for the whole family.",
      },
    ],
    therapiesUsed: [
      {
        therapy: "ABA Therapy",
        role: "Teaches self-regulation, impulse control, and appropriate behavioural responses through positive reinforcement.",
      },
      {
        therapy: "Occupational Therapy",
        role: "Addresses sensory processing issues, motor restlessness, and builds attention through sensory integration activities.",
      },
      {
        therapy: "Special Education",
        role: "Provides academic strategies, organisational skills training, and study techniques adapted for ADHD learners.",
      },
      {
        therapy: "Speech & Language Therapy",
        role: "Supports pragmatic language skills — turn-taking in conversation, listening, and organised verbal expression.",
      },
    ],
    myths: [
      {
        myth: "ADHD isn't real — it's just bad behaviour.",
        fact: "ADHD is a well-documented neurological condition with differences visible on brain imaging. It is recognised by every major medical organisation worldwide.",
      },
      {
        myth: "Only boys get ADHD.",
        fact: "Girls get ADHD too, but they are often underdiagnosed because they tend to show more inattentive symptoms rather than hyperactive ones.",
      },
      {
        myth: "Children with ADHD can never focus.",
        fact: "Children with ADHD can often 'hyperfocus' on activities they find interesting. The challenge is directing attention to tasks that are less stimulating.",
      },
      {
        myth: "ADHD is caused by too much sugar or screen time.",
        fact: "ADHD has a strong genetic component. While sugar and screens can affect behaviour in all children, they do not cause ADHD.",
      },
    ],
    faqs: [
      {
        question: "When is ADHD typically diagnosed?",
        answer:
          "ADHD can be diagnosed from around age 4-5, though it's often identified when children start school and the demands for sustained attention increase. Some children aren't diagnosed until later childhood or even adolescence.",
      },
      {
        question: "Does my child need medication for ADHD?",
        answer:
          "Medication is one option but not the only one. Many children benefit significantly from behavioural therapy, skills training, and environmental modifications alone. We can discuss all options and help you make an informed decision in collaboration with your paediatrician.",
      },
      {
        question: "Will my child outgrow ADHD?",
        answer:
          "About one-third of children with ADHD see significant improvement in adolescence. However, many carry some symptoms into adulthood. The skills learned in therapy serve them throughout life.",
      },
      {
        question: "How can I help my child at home?",
        answer:
          "Establish consistent routines, break tasks into small steps, use visual schedules and timers, offer specific praise for effort, create a calm homework space, and build in plenty of physical activity breaks.",
      },
    ],
    parentMessage:
      "Parenting a child with ADHD can be exhausting — but it can also be incredibly rewarding. Your child's energy, creativity, and unique way of seeing the world are gifts. At Devine CDC, we help you see past the challenges to the extraordinary child underneath — and we give both of you the tools to thrive.",
  },

  "speech-delay": {
    id: "speech-delay",
    heroTagline: "Every voice deserves to be heard.",
    overview:
      "Speech delay occurs when a child doesn't develop speech and language skills at the expected rate for their age. It is one of the most common developmental concerns parents bring to us — and one where early intervention makes the greatest difference. At Devine CDC, we assess the root cause of the delay and create a targeted therapy plan that helps your child communicate with confidence.",
    understanding:
      "Speech delay can range from mild (a few sounds or words behind) to significant (very limited or no speech). It's important to distinguish between speech delay (difficulty producing sounds and words) and language delay (difficulty understanding and using language). Some children have both. The causes can vary — from hearing difficulties and oral muscle weakness to neurological factors or limited language exposure. Whatever the cause, the outcome with therapy is almost always positive, especially when intervention begins early.",
    signs: [
      {
        category: "By 12 Months",
        items: [
          "Not babbling (ba-ba, da-da, ma-ma)",
          "Not using gestures like pointing or waving",
          "Not responding to their name",
          "Limited interest in people's faces or voices",
        ],
      },
      {
        category: "By 18-24 Months",
        items: [
          "Fewer than 10-20 words",
          "Not imitating words or sounds",
          "Not understanding simple instructions ('Give me the ball')",
          "Using gestures instead of words to communicate",
          "Frustration or tantrums due to inability to express needs",
        ],
      },
      {
        category: "By 2-3 Years",
        items: [
          "Not combining two words ('More milk', 'Daddy go')",
          "Speech is difficult for family members to understand",
          "Limited vocabulary (fewer than 50 words by age 2)",
          "Difficulty with simple conversations",
          "Not asking simple questions",
        ],
      },
      {
        category: "By 3-4 Years",
        items: [
          "Strangers can't understand most of what the child says",
          "Not using 3-4 word sentences",
          "Difficulty telling stories or describing events",
          "Leaving out consonant sounds in words",
          "Struggling with age-appropriate grammar",
        ],
      },
    ],
    howWeHelp: [
      {
        title: "Comprehensive Speech-Language Assessment",
        description:
          "We conduct a thorough evaluation to identify the type and severity of the delay, check for underlying causes (like hearing issues or oral motor weakness), and establish a clear baseline.",
      },
      {
        title: "Play-Based Speech & Language Therapy",
        description:
          "Our sessions are filled with songs, bubbles, puppets, and games that naturally elicit speech. Children don't even realise they're in therapy — they think they're playing.",
      },
      {
        title: "Articulation Training",
        description:
          "For children who have difficulty producing specific sounds, we use targeted exercises to train the mouth muscles and teach correct sound placement.",
      },
      {
        title: "Language Stimulation",
        description:
          "We create language-rich environments and use modelling, expansion, and recasting techniques to build vocabulary and sentence structure organically.",
      },
      {
        title: "Alternative Communication",
        description:
          "For children with significant delays, we introduce visual supports, sign language, or communication apps to give them an immediate way to express themselves while verbal skills develop.",
      },
      {
        title: "Parent Language Coaching",
        description:
          "We teach parents powerful, simple techniques to stimulate language development during everyday activities — meals, bath time, outings, and play.",
      },
    ],
    therapiesUsed: [
      {
        therapy: "Speech & Language Therapy",
        role: "Primary intervention targeting speech sounds, language comprehension, expressive language, and social communication.",
      },
      {
        therapy: "Occupational Therapy",
        role: "Addresses oral motor strength, sensory processing, and fine motor skills that support speech production and feeding.",
      },
      {
        therapy: "ABA Therapy",
        role: "Uses structured teaching and reinforcement to build functional communication — especially for children who are minimally verbal.",
      },
      {
        therapy: "Special Education",
        role: "Supports language-based academic skills like pre-reading, narrative development, and following verbal instructions.",
      },
    ],
    myths: [
      {
        myth: "Boys just talk later — it's normal.",
        fact: "While boys do tend to develop speech slightly later than girls, a significant delay warrants assessment regardless of gender. 'Wait and see' can waste valuable early intervention time.",
      },
      {
        myth: "Bilingual homes cause speech delay.",
        fact: "Research clearly shows that bilingualism does not cause speech delay. Bilingual children may mix languages temporarily, but this is normal and not a sign of delay.",
      },
      {
        myth: "If a child is speaking late, they must have autism.",
        fact: "Speech delay and autism are not the same thing. Many children with speech delays have no other developmental concerns. A proper assessment can clarify the situation.",
      },
      {
        myth: "Screen time can replace real communication.",
        fact: "Screens cannot teach language the way human interaction does. Children learn speech through back-and-forth interaction with real people. Excessive screen time is associated with language delays.",
      },
    ],
    faqs: [
      {
        question: "My child understands everything but won't talk. Is this a problem?",
        answer:
          "A child who understands language well but isn't using words may be an 'expressive language delay' — their receptive skills are strong but their output is lagging. This is very common and responds well to therapy.",
      },
      {
        question: "Should I wait until my child is older to start therapy?",
        answer:
          "No. The research is clear: early intervention (before age 3) leads to the best outcomes. The brain is most adaptable in the early years, and therapy during this window can dramatically accelerate language development.",
      },
      {
        question: "Could hearing problems be causing the delay?",
        answer:
          "Possibly. Hearing is the foundation of speech development. We always recommend a hearing test as part of the evaluation. Even mild or intermittent hearing loss (from frequent ear infections) can affect speech development.",
      },
      {
        question: "How quickly will I see improvement?",
        answer:
          "Many parents notice initial improvements within 4-8 weeks of consistent therapy. The pace depends on the severity of the delay, the child's age, and how consistently therapy strategies are used at home.",
      },
    ],
    parentMessage:
      "If you're worried about your child's speech, you're not overreacting — you're being a good parent. Trust your instinct. Early assessment is never too early, and it can never hurt. At Devine CDC, we've seen children go from silence to sentences, from frustration to fluency. Your child's voice is in there — we'll help them find it.",
  },
};
