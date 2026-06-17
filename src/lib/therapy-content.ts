// ══════════════════════════════════════════════════════════
// Devine CDC — Detailed Therapy Content
// Rich clinical content for each therapy inner page
// ══════════════════════════════════════════════════════════

export interface TherapyContent {
  id: string;
  heroTagline: string;
  whatIs: string;
  whyItMatters: string;
  benefits: { title: string; description: string }[];
  approach: { step: string; detail: string }[];
  signsToWatch: string[];
  faqs: { question: string; answer: string }[];
  parentNote: string;
  imageUrl?: string;
}

export const THERAPY_CONTENT: Record<string, TherapyContent> = {
  "aba-therapy": {
    id: "aba-therapy",
    heroTagline: "Building positive behaviours, one step at a time.",
    whatIs:
      "Applied Behaviour Analysis (ABA) is a scientifically validated therapy that focuses on understanding how behaviour works, how it is affected by the environment, and how learning takes place. At Devine CDC, we use ABA to help children develop meaningful skills — from communication and social interaction to daily routines and self-care — through structured, play-based sessions that feel natural and engaging.",
    whyItMatters:
      "Early and consistent ABA therapy can significantly improve a child's ability to learn, communicate, and form relationships. Research spanning over five decades shows that intensive ABA programmes lead to substantial gains in language, cognitive skills, and adaptive behaviour. Our programmes are individually designed, so every child receives exactly the support they need to thrive.",
    benefits: [
      {
        title: "Improved Communication",
        description:
          "Helps children express their needs, wants, and feelings more effectively — whether through words, gestures, or assisted communication devices.",
      },
      {
        title: "Positive Social Skills",
        description:
          "Teaches turn-taking, sharing, eye contact, and cooperative play so children can build friendships and participate in group settings.",
      },
      {
        title: "Reduced Challenging Behaviours",
        description:
          "Identifies the reasons behind difficult behaviours (like tantrums or self-injury) and replaces them with functional alternatives.",
      },
      {
        title: "Daily Living Independence",
        description:
          "Supports children in mastering everyday tasks such as dressing, brushing teeth, eating independently, and following routines.",
      },
      {
        title: "Academic Readiness",
        description:
          "Builds foundational skills like attention, following instructions, and task completion that prepare children for school environments.",
      },
      {
        title: "Generalisation of Skills",
        description:
          "Ensures that skills learned in therapy transfer to home, school, and community settings for real-world impact.",
      },
    ],
    approach: [
      {
        step: "Comprehensive Assessment",
        detail:
          "We begin with a thorough evaluation using standardised tools to understand your child's current skill levels, strengths, and specific areas where support is needed.",
      },
      {
        step: "Individualised Goal Setting",
        detail:
          "Based on the assessment, our Board-Certified and trained behaviour analysts create a customised treatment plan with clear, measurable goals aligned with your family's priorities.",
      },
      {
        step: "One-on-One Therapy Sessions",
        detail:
          "Each child receives dedicated time with a trained therapist who uses positive reinforcement, structured teaching, and natural play to build skills progressively.",
      },
      {
        step: "Data-Driven Progress Tracking",
        detail:
          "We record and analyse data from every session to ensure your child is making meaningful progress. Treatment plans are adjusted regularly based on this data.",
      },
      {
        step: "Parent Training & Collaboration",
        detail:
          "We empower parents with ABA strategies they can use at home, ensuring consistency across environments and accelerating your child's development.",
      },
    ],
    signsToWatch: [
      "Limited or no speech by age 2",
      "Difficulty making eye contact or engaging with others",
      "Repetitive behaviours like hand-flapping or lining up objects",
      "Resistance to changes in routine",
      "Frequent tantrums or meltdowns that seem disproportionate",
      "Difficulty playing with peers or sharing toys",
      "Not responding to their name being called",
    ],
    faqs: [
      {
        question: "At what age should ABA therapy start?",
        answer:
          "ABA therapy is most effective when started early — ideally between ages 2 and 6. However, children of any age can benefit from ABA. The earlier the intervention, the greater the potential for positive outcomes.",
      },
      {
        question: "How many hours per week does a child need?",
        answer:
          "This varies based on each child's needs. Some children benefit from 10-15 hours per week, while others may need more intensive support. Our team will recommend the right intensity after the initial assessment.",
      },
      {
        question: "Is ABA therapy only for children with Autism?",
        answer:
          "While ABA is widely recognised as a leading treatment for Autism Spectrum Disorder, it is also effective for children with ADHD, developmental delays, learning disabilities, and behavioural challenges.",
      },
      {
        question: "Will my child enjoy the sessions?",
        answer:
          "Absolutely! Our therapists use play, games, and activities your child loves to make learning fun and motivating. Sessions are designed to be engaging, not stressful.",
      },
    ],
    parentNote:
      "We understand that starting therapy can feel overwhelming. At Devine CDC, we walk alongside you every step of the way — answering your questions, celebrating small wins, and ensuring your child feels safe and happy throughout their journey.",
    imageUrl: "/images/aba-therapy.png",
  },

  "occupational-therapy": {
    id: "occupational-therapy",
    heroTagline: "Empowering little hands to do big things.",
    whatIs:
      "Occupational Therapy (OT) helps children develop the fine motor, sensory processing, and self-regulation skills they need to participate fully in daily life — from writing and buttoning a shirt to managing emotions in a busy classroom. At Devine CDC, our occupational therapists use engaging, play-based activities that feel like fun while building essential capabilities.",
    whyItMatters:
      "Children with sensory processing difficulties, fine motor delays, or coordination challenges often struggle with tasks that seem simple to others. OT addresses these underlying issues, giving children the confidence and ability to engage with their world independently. With the right support, children learn to navigate sensory experiences, develop handwriting skills, and build the self-care habits that set them up for success.",
    benefits: [
      {
        title: "Fine Motor Development",
        description:
          "Strengthens hand muscles and coordination for writing, drawing, cutting with scissors, and manipulating small objects.",
      },
      {
        title: "Sensory Integration",
        description:
          "Helps children who are over-sensitive or under-sensitive to sensory input (touch, sound, movement) learn to process and respond appropriately.",
      },
      {
        title: "Self-Care Independence",
        description:
          "Teaches children to dress themselves, feed independently, brush teeth, and manage personal hygiene with confidence.",
      },
      {
        title: "Emotional Regulation",
        description:
          "Provides strategies for managing big emotions, reducing anxiety, and building coping mechanisms for challenging situations.",
      },
      {
        title: "Visual-Motor Coordination",
        description:
          "Improves hand-eye coordination needed for catching balls, completing puzzles, and navigating physical spaces safely.",
      },
      {
        title: "Attention & Focus",
        description:
          "Addresses the sensory and motor foundations that support a child's ability to sit, attend, and participate in classroom activities.",
      },
    ],
    approach: [
      {
        step: "Sensory Profile Assessment",
        detail:
          "We evaluate your child's unique sensory preferences, motor abilities, and daily living skills using standardised assessments and clinical observation.",
      },
      {
        step: "Personalised Therapy Plan",
        detail:
          "A tailored plan is created targeting specific goals — whether it's improving handwriting, managing sensory sensitivities, or building independence in self-care.",
      },
      {
        step: "Sensory-Rich Play Sessions",
        detail:
          "Our therapy room is equipped with swings, tactile stations, fine motor activity centres, and movement equipment to provide a rich sensory environment.",
      },
      {
        step: "Home Activity Programme",
        detail:
          "We provide parents with simple, fun activities to continue therapy at home — like dough play for hand strength or obstacle courses for coordination.",
      },
      {
        step: "School Readiness Preparation",
        detail:
          "For children approaching school age, we focus on the skills needed for classroom success — sitting posture, pencil grip, scissor skills, and following multi-step instructions.",
      },
    ],
    signsToWatch: [
      "Avoids touching certain textures (sand, paint, food)",
      "Difficulty holding a pencil or crayon correctly",
      "Struggles with buttons, zippers, or tying shoelaces",
      "Appears clumsy or frequently bumps into things",
      "Gets overwhelmed in noisy or crowded environments",
      "Has trouble sitting still or maintaining attention",
      "Resists grooming activities like hair brushing or nail cutting",
    ],
    faqs: [
      {
        question: "How is OT different from physiotherapy?",
        answer:
          "While physiotherapy focuses on gross motor skills and physical rehabilitation, OT addresses fine motor skills, sensory processing, and daily living activities. Both can complement each other in a child's care plan.",
      },
      {
        question: "Can OT help with handwriting difficulties?",
        answer:
          "Yes! Handwriting is one of the most common reasons children are referred for OT. We address the underlying issues — hand strength, pencil grip, visual-motor coordination — to improve writing legibility and speed.",
      },
      {
        question: "How long does OT typically take to show results?",
        answer:
          "Every child is different, but many parents notice improvements within 8-12 weeks of consistent therapy. Sensory processing improvements may take longer as the nervous system gradually adapts.",
      },
      {
        question: "What should I bring to my child's first OT session?",
        answer:
          "Comfortable clothing your child can move freely in, any school reports or previous assessments, and a list of your main concerns or goals for therapy.",
      },
    ],
    parentNote:
      "Your child's world is full of sensory experiences and physical challenges. OT helps them navigate this world with confidence. We create a safe, playful space where every child can explore, learn, and grow at their own pace.",
    imageUrl: "/images/occupational-therapy.png",
  },

  "speech-therapy": {
    id: "speech-therapy",
    heroTagline: "Helping every child find their voice.",
    whatIs:
      "Speech and Language Therapy addresses challenges with communication — from speech sounds and fluency to understanding language and using it socially. At Devine CDC, our speech-language pathologists work with children to build their communication abilities through engaging, evidence-based techniques that make learning to talk (or communicate in any way) a joyful experience.",
    whyItMatters:
      "Communication is the foundation of everything — relationships, learning, self-expression, and emotional well-being. When a child struggles to communicate, it can lead to frustration, behavioural challenges, and social isolation. Early speech therapy can prevent these cascading effects and give your child the tools to connect with the world around them.",
    benefits: [
      {
        title: "Speech Sound Clarity",
        description:
          "Helps children pronounce sounds correctly so they can be understood by family, teachers, and peers.",
      },
      {
        title: "Language Comprehension",
        description:
          "Builds the ability to understand instructions, questions, and conversations — the foundation of all learning.",
      },
      {
        title: "Expressive Language",
        description:
          "Supports children in using words, phrases, and sentences to share their thoughts, needs, and stories.",
      },
      {
        title: "Social Communication",
        description:
          "Teaches pragmatic skills like maintaining conversations, understanding body language, and reading social cues.",
      },
      {
        title: "Fluency Support",
        description:
          "Provides strategies for children who stutter, helping them speak more smoothly and with greater confidence.",
      },
      {
        title: "Feeding & Oral Motor Skills",
        description:
          "Addresses oral muscle weakness that affects both speech clarity and safe, efficient eating and drinking.",
      },
    ],
    approach: [
      {
        step: "Speech-Language Evaluation",
        detail:
          "A comprehensive assessment of your child's receptive language, expressive language, speech sounds, fluency, and pragmatic skills using standardised tools.",
      },
      {
        step: "Targeted Intervention Plan",
        detail:
          "We create a focused therapy plan addressing your child's specific communication goals — whether it's first words, clear pronunciation, or conversation skills.",
      },
      {
        step: "Interactive Therapy Sessions",
        detail:
          "Sessions are filled with songs, stories, games, and activities that naturally encourage language use. We follow your child's interests to maximise engagement.",
      },
      {
        step: "Augmentative Communication",
        detail:
          "For children who need additional support, we introduce picture boards, communication apps, or sign language to ensure every child has a way to express themselves.",
      },
      {
        step: "Carryover Strategies",
        detail:
          "We equip parents with conversation techniques, book-reading strategies, and daily routines that reinforce speech goals outside of therapy.",
      },
    ],
    signsToWatch: [
      "Not babbling by 12 months",
      "No single words by 18 months",
      "Not combining two words by age 2",
      "Speech is difficult to understand by age 3",
      "Difficulty following simple instructions",
      "Frustration when trying to communicate",
      "Loss of previously acquired speech or language skills",
      "Limited vocabulary compared to same-age peers",
    ],
    faqs: [
      {
        question: "When should I be concerned about my child's speech?",
        answer:
          "If your child isn't babbling by 12 months, not using single words by 18 months, or not combining words by age 2, it's worth getting an assessment. Trust your instinct — if something feels off, early evaluation is always beneficial.",
      },
      {
        question: "Can bilingual homes cause speech delay?",
        answer:
          "No. Research consistently shows that growing up in a bilingual environment does not cause speech delay. Children can learn multiple languages simultaneously. However, if you notice delays, therapy can be conducted in the child's dominant language.",
      },
      {
        question: "How can I support my child's speech at home?",
        answer:
          "Talk to your child throughout the day, read together daily, narrate your activities, expand on what they say, and give them time to respond. Reduce screen time and increase face-to-face interaction.",
      },
      {
        question: "Will my child need speech therapy forever?",
        answer:
          "Most children graduate from speech therapy once they reach their communication goals. The duration depends on the severity of the delay and the child's response to therapy — it could range from a few months to a couple of years.",
      },
    ],
    parentNote:
      "Every word your child learns is a bridge to the world. We celebrate every babble, every new sound, every sentence — because we know how much courage it takes. At Devine CDC, your child's voice matters, however it sounds.",
    imageUrl: "/images/speech-therapy.png",
  },

  "special-education": {
    id: "special-education",
    heroTagline: "Every child can learn — we find the way.",
    whatIs:
      "Special Education at Devine CDC provides individually tailored academic instruction for children who learn differently. Whether your child has a learning disability, developmental delay, or needs additional support to keep up with peers, our special educators adapt teaching methods, materials, and pace to match your child's unique learning style.",
    whyItMatters:
      "Traditional classrooms often follow a one-size-fits-all approach that doesn't work for every child. Children who struggle academically may develop low self-esteem, anxiety, and a dislike of learning. Special Education re-ignites a child's curiosity by teaching them in a way that makes sense to them — building confidence alongside academic skills.",
    benefits: [
      {
        title: "Individualised Learning Plans",
        description:
          "Every child receives a learning plan tailored to their strengths, interests, and specific areas of difficulty — not a generic curriculum.",
      },
      {
        title: "Pre-Academic Readiness",
        description:
          "Builds foundational skills like colour recognition, shape sorting, number concepts, and letter identification for younger children.",
      },
      {
        title: "Reading & Writing Support",
        description:
          "Specialised techniques for children with dyslexia or reading difficulties — including multisensory phonics, sight word strategies, and guided writing.",
      },
      {
        title: "Mathematics Concepts",
        description:
          "Uses concrete manipulatives and visual aids to make abstract math concepts tangible and understandable.",
      },
      {
        title: "Attention & Executive Function",
        description:
          "Teaches organisational skills, task initiation, time management, and self-monitoring that support independent learning.",
      },
      {
        title: "School Integration Support",
        description:
          "Works closely with your child's school to ensure accommodations are in place and that therapy goals align with classroom expectations.",
      },
    ],
    approach: [
      {
        step: "Educational Assessment",
        detail:
          "We evaluate your child's current academic levels, learning style, cognitive strengths, and areas where support is needed using formal and informal assessments.",
      },
      {
        step: "Individualised Education Plan (IEP)",
        detail:
          "A structured plan with specific, measurable academic goals and the teaching strategies that will be used to achieve them.",
      },
      {
        step: "Multisensory Teaching",
        detail:
          "We use visual, auditory, and hands-on approaches simultaneously — because children learn best when multiple senses are engaged.",
      },
      {
        step: "Structured Learning Environment",
        detail:
          "Sessions follow a predictable routine with clear expectations, visual schedules, and positive reinforcement to create a calm, focused learning space.",
      },
      {
        step: "Progress Reports & School Liaison",
        detail:
          "Regular written updates for parents and, with your permission, coordination with your child's school teachers to ensure consistency.",
      },
    ],
    signsToWatch: [
      "Difficulty recognising letters or numbers by age 4-5",
      "Struggling to follow classroom instructions",
      "Avoiding reading or writing activities",
      "Reversing letters or numbers beyond age 7",
      "Difficulty staying on task or completing assignments",
      "Poor retention of previously learned concepts",
      "Low confidence or frustration around schoolwork",
    ],
    faqs: [
      {
        question: "Is Special Education only for children with disabilities?",
        answer:
          "No. Special Education is for any child who needs a different approach to learning. This includes children with learning disabilities, attention difficulties, developmental delays, or even gifted children who need enrichment beyond the regular curriculum.",
      },
      {
        question: "Will my child always need Special Education support?",
        answer:
          "Many children eventually catch up to their peers and transition to independent learning. The goal is always to build enough skills and confidence that the child can succeed with minimal support.",
      },
      {
        question: "How does this differ from regular tutoring?",
        answer:
          "Unlike tutoring, which reteaches the same material faster, Special Education uses scientifically designed teaching methods tailored to how your child's brain learns best. It addresses the root cause of learning difficulties, not just the symptoms.",
      },
      {
        question: "Can you coordinate with my child's school?",
        answer:
          "Absolutely. With your permission, we work directly with teachers and school counsellors to ensure that classroom accommodations and our therapy goals are aligned for maximum impact.",
      },
    ],
    parentNote:
      "Learning is not a race. Every child has their own timeline and their own brilliance. At Devine CDC, we don't try to fit your child into a mould — we find the mould that fits them. And we celebrate every milestone, no matter how small it may seem.",
    imageUrl: "/images/special-education.png",
  },

  "psychological-behavioral-intervention": {
    id: "psychological-behavioral-intervention",
    heroTagline: "Fostering emotional well-being and social confidence.",
    whatIs:
      "Psychological & Behavioral Intervention is a comprehensive approach that supports children's emotional, behavioral, and social development. At Devine CDC, our experienced psychologists use evidence-based therapies, including behavioral therapy, play therapy, and psychological counseling, to help children navigate their feelings, develop coping strategies, and build positive relationships.",
    whyItMatters:
      "Children face various challenges as they grow, from anxiety and emotional regulation difficulties to social struggles and behavioral issues. Early psychological intervention provides them with a safe space to express themselves, understand their emotions, and learn effective ways to manage challenges. By addressing these issues early, we can prevent long-term emotional distress and equip children with the resilience they need to succeed in life.",
    benefits: [
      {
        title: "Emotional Regulation",
        description:
          "Teaches children to identify, understand, and manage their emotions, reducing anxiety, frustration, and emotional outbursts.",
      },
      {
        title: "Behavioral Management",
        description:
          "Addresses challenging behaviors through positive reinforcement and skill-building, promoting more adaptive and socially acceptable responses.",
      },
      {
        title: "Social Skills Development",
        description:
          "Helps children navigate social interactions, build empathy, resolve conflicts, and form meaningful friendships with peers.",
      },
      {
        title: "Anxiety Reduction",
        description:
          "Provides coping strategies and therapeutic support to alleviate anxiety, fears, and phobias, empowering children to face challenges with confidence.",
      },
      {
        title: "Self-Esteem Enhancement",
        description:
          "Fosters a positive self-image and a sense of self-worth by celebrating achievements, building resilience, and challenging negative thought patterns.",
      },
      {
        title: "Family Support & Guidance",
        description:
          "Equips parents with effective strategies, communication techniques, and a deeper understanding of their child's needs to support them at home.",
      },
    ],
    approach: [
      {
        step: "Comprehensive Psychological Assessment",
        detail:
          "We begin with a thorough evaluation to understand your child's emotional, behavioral, and cognitive functioning, identifying their strengths and areas for support.",
      },
      {
        step: "Individualised Therapy Plan",
        detail:
          "Based on the assessment, our psychologists create a tailored treatment plan with clear goals, drawing from various therapeutic approaches to best meet your child's needs.",
      },
      {
        step: "Evidence-Based Therapies",
        detail:
          "We utilize a range of interventions, including Cognitive Behavioral Therapy (CBT), play therapy, and behavior modification techniques, in a safe and supportive environment.",
      },
      {
        step: "Collaboration with Parents and School",
        detail:
          "We believe in a holistic approach, working closely with parents and educators to ensure consistency and support across all environments.",
      },
      {
        step: "Ongoing Monitoring and Review",
        detail:
          "We regularly review your child's progress, adjusting the therapy plan as needed to ensure continued growth and well-being.",
      },
    ],
    signsToWatch: [
      "Frequent or severe temper tantrums",
      "Difficulty managing anger or frustration",
      "Excessive worry, anxiety, or fears",
      "Sadness, withdrawal, or loss of interest in activities",
      "Difficulty making or keeping friends",
      "Changes in sleep or appetite",
      "School refusal or declining academic performance",
      "Aggressive behavior towards themselves or others",
    ],
    faqs: [
      {
        question: "How do I know if my child needs psychological support?",
        answer:
          "If your child's behavior, emotions, or social interactions are interfering with their daily life, school performance, or family relationships, a psychological assessment can help identify the underlying issues and provide guidance on appropriate support.",
      },
      {
        question: "What happens during a therapy session?",
        answer:
          "Therapy sessions are tailored to your child's age and needs. For younger children, play therapy is often used to help them express their feelings and learn new skills. Older children and teenagers may participate in talk therapy or cognitive-behavioral interventions.",
      },
      {
        question: "Will you involve me in my child's therapy?",
        answer:
          "Absolutely. Parent involvement is crucial for successful outcomes. We provide regular updates, parent training, and strategies you can use at home to support your child's progress.",
      },
      {
        question: "How long does therapy take?",
        answer:
          "The duration of therapy varies depending on the child's needs and goals. Some children benefit from short-term intervention to address specific issues, while others may require longer-term support for ongoing challenges.",
      },
    ],
    parentNote:
      "We understand that seeking psychological support for your child can be a big step. Rest assured that our team provides a compassionate, non-judgmental, and safe space for your family. We are here to support your child's emotional well-being and help them thrive.",
    imageUrl: "/images/psychological-intervention.png",
  },
};
