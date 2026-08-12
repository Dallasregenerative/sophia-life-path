// ============================================================
// Life Path Assessment — Complete Question Bank
// 6 segments × 18-25 questions = ~118 questions total
// ============================================================

export interface Question {
  id: string;
  segmentIndex: number;
  text: string;
  subtext?: string;
  type: "likert" | "choice" | "ranking" | "scenario" | "slider" | "text";
  options?: { label: string; value: string | number }[];
  sliderConfig?: {
    min: number;
    max: number;
    minLabel: string;
    maxLabel: string;
    step: number;
  };
  required: boolean;
  scoring: {
    dimension: string;
    weight: number;
    mapping: Record<string, number>;
  }[];
}

export interface Segment {
  index: number;
  title: string;
  subtitle: string;
  description: string;
  icon: string;
  estimatedMinutes: number;
  questions: Question[];
}

// ============================================================
// SEGMENT 0 — "Who You Are" (Interests & Curiosity)
// Primary: RIASEC | Embedded: happiness_life_satisfaction
// ============================================================

const segment0Questions: Question[] = [
  {
    id: "s0_q1",
    segmentIndex: 0,
    text: "Imagine you have a completely free Saturday — no obligations, no one to answer to. Which of these sounds most appealing right now?",
    subtext: "Go with your gut, not what you think you *should* pick.",
    type: "choice",
    options: [
      { label: "Building or fixing something with my hands — a project, a garden, a DIY craft", value: "a" },
      { label: "Going down a rabbit hole researching something I've been curious about", value: "b" },
      { label: "Creating something — art, music, writing, or something else expressive", value: "c" },
      { label: "Spending quality time with people I care about", value: "d" },
      { label: "Brainstorming a business idea or planning a big goal", value: "e" },
      { label: "Getting organized, finishing tasks on my list, or setting up systems", value: "f" },
    ],
    required: true,
    scoring: [
      {
        dimension: "riasec_realistic",
        weight: 3,
        mapping: { a: 3, b: 0, c: 0, d: 0, e: 0, f: 0 },
      },
      {
        dimension: "riasec_investigative",
        weight: 3,
        mapping: { a: 0, b: 3, c: 0, d: 0, e: 0, f: 0 },
      },
      {
        dimension: "riasec_artistic",
        weight: 3,
        mapping: { a: 0, b: 0, c: 3, d: 0, e: 0, f: 0 },
      },
      {
        dimension: "riasec_social",
        weight: 3,
        mapping: { a: 0, b: 0, c: 0, d: 3, e: 0, f: 0 },
      },
      {
        dimension: "riasec_enterprising",
        weight: 3,
        mapping: { a: 0, b: 0, c: 0, d: 0, e: 3, f: 0 },
      },
      {
        dimension: "riasec_conventional",
        weight: 3,
        mapping: { a: 0, b: 0, c: 0, d: 0, e: 0, f: 3 },
      },
      // Archetype scoring: a=Hero(doing/mastery), b=Sage(knowledge), c=Creator(expression), d=Lover(connection), e=Ruler(leadership), f=Everyperson(reliability)
      {
        dimension: "archetype_hero",
        weight: 1,
        mapping: { a: 2, b: 0, c: 0, d: 0, e: 1, f: 0 },
      },
      {
        dimension: "archetype_sage",
        weight: 1,
        mapping: { a: 0, b: 3, c: 0, d: 0, e: 0, f: 0 },
      },
      {
        dimension: "archetype_creator",
        weight: 1,
        mapping: { a: 0, b: 0, c: 3, d: 0, e: 0, f: 0 },
      },
      {
        dimension: "archetype_lover",
        weight: 1,
        mapping: { a: 0, b: 0, c: 0, d: 2, e: 0, f: 0 },
      },
      {
        dimension: "archetype_caregiver",
        weight: 1,
        mapping: { a: 0, b: 0, c: 0, d: 2, e: 0, f: 0 },
      },
      {
        dimension: "archetype_ruler",
        weight: 1,
        mapping: { a: 0, b: 0, c: 0, d: 0, e: 2, f: 0 },
      },
      {
        dimension: "archetype_everyperson",
        weight: 1,
        mapping: { a: 0, b: 0, c: 0, d: 0, e: 0, f: 2 },
      },
      {
        dimension: "archetype_explorer",
        weight: 1,
        mapping: { a: 0, b: 2, c: 0, d: 0, e: 0, f: 0 },
      },
    ],
  },

  {
    id: "s0_q2",
    segmentIndex: 0,
    text: "When you were a kid, what kind of activities made you completely lose track of time?",
    subtext: "Pick the two that feel most true.",
    type: "choice",
    options: [
      { label: "Sports, outdoor adventures, or building/making things", value: "a" },
      { label: "Reading, puzzles, science kits, or collecting things", value: "b" },
      { label: "Drawing, dancing, performing, storytelling, or music", value: "c" },
      { label: "Playing with animals, babysitting, or organizing clubs with friends", value: "d" },
      { label: "Selling lemonade, planning events, or running the show", value: "e" },
      { label: "Organizing my room, decorating, making lists, or playing games with clear rules", value: "f" },
    ],
    required: true,
    scoring: [
      { dimension: "riasec_realistic", weight: 2, mapping: { a: 3, b: 0, c: 0, d: 0, e: 0, f: 0 } },
      { dimension: "riasec_investigative", weight: 2, mapping: { a: 0, b: 3, c: 0, d: 0, e: 0, f: 0 } },
      { dimension: "riasec_artistic", weight: 2, mapping: { a: 0, b: 0, c: 3, d: 0, e: 0, f: 0 } },
      { dimension: "riasec_social", weight: 2, mapping: { a: 0, b: 0, c: 0, d: 3, e: 0, f: 0 } },
      { dimension: "riasec_enterprising", weight: 2, mapping: { a: 0, b: 0, c: 0, d: 0, e: 3, f: 0 } },
      { dimension: "riasec_conventional", weight: 2, mapping: { a: 0, b: 0, c: 0, d: 0, e: 0, f: 3 } },
    ],
  },

  {
    id: "s0_q3",
    segmentIndex: 0,
    text: "How drawn are you to working with your hands — building, fixing, crafting, or creating physical things?",
    type: "slider",
    sliderConfig: {
      min: 1,
      max: 10,
      minLabel: "Not my thing at all",
      maxLabel: "Absolutely love it",
      step: 1,
    },
    required: true,
    scoring: [
      {
        dimension: "riasec_realistic",
        weight: 2,
        mapping: { "1": 0, "2": 0, "3": 1, "4": 1, "5": 2, "6": 2, "7": 3, "8": 3, "9": 4, "10": 5 },
      },
    ],
  },

  {
    id: "s0_q4",
    segmentIndex: 0,
    text: "When a friend comes to you with a problem, what's your natural first instinct?",
    type: "scenario",
    options: [
      { label: "Listen and try to really understand how they're feeling", value: "a" },
      { label: "Start thinking through solutions and what caused the problem", value: "b" },
      { label: "Come up with a creative or out-of-the-box idea they haven't considered", value: "c" },
      { label: "Make an action plan — what's the next step, who can help, how do we fix this", value: "d" },
      { label: "Look up information or resources that might help", value: "e" },
    ],
    required: true,
    scoring: [
      { dimension: "riasec_social", weight: 3, mapping: { a: 3, b: 0, c: 0, d: 0, e: 0 } },
      { dimension: "riasec_investigative", weight: 2, mapping: { a: 0, b: 3, c: 0, d: 0, e: 2 } },
      { dimension: "riasec_artistic", weight: 2, mapping: { a: 0, b: 0, c: 3, d: 0, e: 0 } },
      { dimension: "riasec_enterprising", weight: 2, mapping: { a: 0, b: 0, c: 0, d: 3, e: 0 } },
      { dimension: "trait_empathy", weight: 2, mapping: { a: 3, b: 0, c: 0, d: 0, e: 0 } },
      { dimension: "archetype_caregiver", weight: 1, mapping: { a: 2, b: 0, c: 0, d: 0, e: 0 } },
      { dimension: "archetype_sage", weight: 1, mapping: { a: 0, b: 2, c: 0, d: 0, e: 2 } },
      { dimension: "archetype_creator", weight: 1, mapping: { a: 0, b: 0, c: 2, d: 0, e: 0 } },
      { dimension: "archetype_hero", weight: 1, mapping: { a: 0, b: 0, c: 0, d: 2, e: 0 } },
    ],
  },

  {
    id: "s0_q5",
    segmentIndex: 0,
    text: "How excited do you get about understanding *why* things work — the science, the logic, the system behind something?",
    type: "slider",
    sliderConfig: {
      min: 1,
      max: 10,
      minLabel: "I just want to know how to use it",
      maxLabel: "I need to understand the whole system",
      step: 1,
    },
    required: true,
    scoring: [
      {
        dimension: "riasec_investigative",
        weight: 2,
        mapping: { "1": 0, "2": 0, "3": 1, "4": 1, "5": 2, "6": 2, "7": 3, "8": 3, "9": 4, "10": 5 },
      },
      {
        dimension: "trait_curiosity",
        weight: 2,
        mapping: { "1": 0, "2": 0, "3": 1, "4": 1, "5": 2, "6": 2, "7": 3, "8": 3, "9": 4, "10": 5 },
      },
    ],
  },

  {
    id: "s0_q6",
    segmentIndex: 0,
    text: "How much does creativity feel like a core part of who you are?",
    subtext: "Creativity can mean art, but also problem-solving, fashion, cooking, storytelling — anything where you're making something your own.",
    type: "slider",
    sliderConfig: {
      min: 1,
      max: 10,
      minLabel: "Not really how I see myself",
      maxLabel: "It's literally everything to me",
      step: 1,
    },
    required: true,
    scoring: [
      {
        dimension: "riasec_artistic",
        weight: 2,
        mapping: { "1": 0, "2": 0, "3": 1, "4": 1, "5": 2, "6": 2, "7": 3, "8": 3, "9": 4, "10": 5 },
      },
      {
        dimension: "big5_openness",
        weight: 1,
        mapping: { "1": 0, "2": 0, "3": 1, "4": 1, "5": 2, "6": 2, "7": 3, "8": 3, "9": 4, "10": 5 },
      },
      {
        dimension: "archetype_creator",
        weight: 2,
        mapping: { "1": 0, "2": 0, "3": 1, "4": 1, "5": 2, "6": 2, "7": 3, "8": 3, "9": 4, "10": 5 },
      },
    ],
  },

  {
    id: "s0_q7",
    segmentIndex: 0,
    text: "Which type of work environment sounds most like you?",
    type: "choice",
    options: [
      { label: "Hands-on — tools, equipment, nature, or physical space", value: "a" },
      { label: "Research-oriented — data, reading, analyzing, figuring things out", value: "b" },
      { label: "Creative studio — designing, performing, writing, making", value: "c" },
      { label: "People-focused — teaching, coaching, caring, connecting", value: "d" },
      { label: "Dynamic — pitching, leading, competing, making things happen", value: "e" },
      { label: "Structured — clear processes, organization, accuracy, systems", value: "f" },
    ],
    required: true,
    scoring: [
      { dimension: "riasec_realistic", weight: 3, mapping: { a: 3, b: 0, c: 0, d: 0, e: 0, f: 0 } },
      { dimension: "riasec_investigative", weight: 3, mapping: { a: 0, b: 3, c: 0, d: 0, e: 0, f: 0 } },
      { dimension: "riasec_artistic", weight: 3, mapping: { a: 0, b: 0, c: 3, d: 0, e: 0, f: 0 } },
      { dimension: "riasec_social", weight: 3, mapping: { a: 0, b: 0, c: 0, d: 3, e: 0, f: 0 } },
      { dimension: "riasec_enterprising", weight: 3, mapping: { a: 0, b: 0, c: 0, d: 0, e: 3, f: 0 } },
      { dimension: "riasec_conventional", weight: 3, mapping: { a: 0, b: 0, c: 0, d: 0, e: 0, f: 3 } },
    ],
  },

  {
    id: "s0_q8",
    segmentIndex: 0,
    text: "How often do you feel genuinely excited about learning something new — like you can't wait to dig deeper?",
    subtext: "Think about when it happens naturally, not just for school or work.",
    type: "likert",
    options: [
      { label: "Never", value: 1 },
      { label: "Rarely", value: 2 },
      { label: "Sometimes", value: 3 },
      { label: "Often", value: 4 },
      { label: "Very Often", value: 5 },
    ],
    required: true,
    scoring: [
      {
        dimension: "riasec_investigative",
        weight: 2,
        mapping: { "1": 0, "2": 1, "3": 2, "4": 3, "5": 4 },
      },
      {
        dimension: "happiness_life_satisfaction",
        weight: 2,
        mapping: { "1": 0, "2": 1, "3": 2, "4": 3, "5": 4 },
      },
      {
        dimension: "big5_openness",
        weight: 1,
        mapping: { "1": 0, "2": 1, "3": 2, "4": 3, "5": 4 },
      },
      {
        dimension: "trait_curiosity",
        weight: 2,
        mapping: { "1": 0, "2": 1, "3": 2, "4": 3, "5": 4 },
      },
      {
        dimension: "archetype_sage",
        weight: 1,
        mapping: { "1": 0, "2": 0, "3": 1, "4": 2, "5": 3 },
      },
    ],
  },

  {
    id: "s0_q9",
    segmentIndex: 0,
    text: "How much do you enjoy being in a leadership position — organizing people, setting direction, or rallying others toward a goal?",
    type: "slider",
    sliderConfig: {
      min: 1,
      max: 10,
      minLabel: "I'd rather follow or work solo",
      maxLabel: "I naturally step up to lead",
      step: 1,
    },
    required: true,
    scoring: [
      {
        dimension: "riasec_enterprising",
        weight: 2,
        mapping: { "1": 0, "2": 0, "3": 1, "4": 1, "5": 2, "6": 2, "7": 3, "8": 3, "9": 4, "10": 5 },
      },
      {
        dimension: "big5_extraversion",
        weight: 1,
        mapping: { "1": 0, "2": 0, "3": 1, "4": 1, "5": 2, "6": 2, "7": 3, "8": 3, "9": 4, "10": 5 },
      },
      {
        dimension: "archetype_ruler",
        weight: 2,
        mapping: { "1": 0, "2": 0, "3": 1, "4": 1, "5": 2, "6": 2, "7": 3, "8": 3, "9": 4, "10": 5 },
      },
    ],
  },

  {
    id: "s0_q10",
    segmentIndex: 0,
    text: "You're tasked with planning an event for 50 people. What's your reaction?",
    type: "scenario",
    options: [
      { label: "Excited — I'd love organizing all the details and making it perfect", value: "a" },
      { label: "Interested — I'd focus on making the experience creative and memorable", value: "b" },
      { label: "Energized by the people side — connecting everyone and making sure they have a good time", value: "c" },
      { label: "In my element — I'd pitch a vision, delegate, and make it happen", value: "d" },
      { label: "Stressed — I'd rather be in the background or behind the scenes", value: "e" },
    ],
    required: true,
    scoring: [
      { dimension: "riasec_conventional", weight: 2, mapping: { a: 3, b: 0, c: 0, d: 0, e: 0 } },
      { dimension: "riasec_artistic", weight: 2, mapping: { a: 0, b: 3, c: 0, d: 0, e: 0 } },
      { dimension: "riasec_social", weight: 2, mapping: { a: 0, b: 0, c: 3, d: 0, e: 0 } },
      { dimension: "riasec_enterprising", weight: 3, mapping: { a: 0, b: 0, c: 0, d: 3, e: 0 } },
      { dimension: "big5_extraversion", weight: 1, mapping: { a: 1, b: 1, c: 2, d: 3, e: 0 } },
    ],
  },

  {
    id: "s0_q11",
    segmentIndex: 0,
    text: "How much does helping people — in a real, meaningful way — feel like something you want to build your life around?",
    type: "slider",
    sliderConfig: {
      min: 1,
      max: 10,
      minLabel: "Not really my focus",
      maxLabel: "It's the most important thing",
      step: 1,
    },
    required: true,
    scoring: [
      {
        dimension: "riasec_social",
        weight: 3,
        mapping: { "1": 0, "2": 0, "3": 1, "4": 1, "5": 2, "6": 2, "7": 3, "8": 3, "9": 4, "10": 5 },
      },
      {
        dimension: "values_helping",
        weight: 2,
        mapping: { "1": 0, "2": 0, "3": 1, "4": 1, "5": 2, "6": 2, "7": 3, "8": 3, "9": 4, "10": 5 },
      },
      {
        dimension: "archetype_caregiver",
        weight: 2,
        mapping: { "1": 0, "2": 0, "3": 1, "4": 1, "5": 2, "6": 2, "7": 3, "8": 3, "9": 4, "10": 5 },
      },
    ],
  },

  {
    id: "s0_q12",
    segmentIndex: 0,
    text: "How appealing is working with data, spreadsheets, research, or detailed analysis?",
    type: "slider",
    sliderConfig: {
      min: 1,
      max: 10,
      minLabel: "Really not my thing",
      maxLabel: "I genuinely love it",
      step: 1,
    },
    required: true,
    scoring: [
      {
        dimension: "riasec_conventional",
        weight: 2,
        mapping: { "1": 0, "2": 0, "3": 1, "4": 1, "5": 2, "6": 2, "7": 3, "8": 3, "9": 4, "10": 5 },
      },
      {
        dimension: "riasec_investigative",
        weight: 1,
        mapping: { "1": 0, "2": 0, "3": 1, "4": 1, "5": 2, "6": 2, "7": 3, "8": 3, "9": 4, "10": 5 },
      },
    ],
  },

  {
    id: "s0_q13",
    segmentIndex: 0,
    text: "If you could snap your fingers and be amazing at one of these, which would you choose?",
    type: "choice",
    options: [
      { label: "A skilled trade — welding, carpentry, electrical, mechanics", value: "a" },
      { label: "A scientific field — biology, chemistry, coding, research", value: "b" },
      { label: "An art form — music, writing, visual art, film", value: "c" },
      { label: "A helping profession — therapy, medicine, teaching, social work", value: "d" },
      { label: "Business or entrepreneurship — starting and growing something", value: "e" },
      { label: "Finance, law, or operations — precision, systems, expertise", value: "f" },
    ],
    required: true,
    scoring: [
      { dimension: "riasec_realistic", weight: 3, mapping: { a: 3, b: 0, c: 0, d: 0, e: 0, f: 0 } },
      { dimension: "riasec_investigative", weight: 3, mapping: { a: 0, b: 3, c: 0, d: 0, e: 0, f: 0 } },
      { dimension: "riasec_artistic", weight: 3, mapping: { a: 0, b: 0, c: 3, d: 0, e: 0, f: 0 } },
      { dimension: "riasec_social", weight: 3, mapping: { a: 0, b: 0, c: 0, d: 3, e: 0, f: 0 } },
      { dimension: "riasec_enterprising", weight: 3, mapping: { a: 0, b: 0, c: 0, d: 0, e: 3, f: 0 } },
      { dimension: "riasec_conventional", weight: 3, mapping: { a: 0, b: 0, c: 0, d: 0, e: 0, f: 3 } },
    ],
  },

  {
    id: "s0_q14",
    segmentIndex: 0,
    text: "When you imagine a job or career that would actually make you happy, what's the feeling you're chasing?",
    type: "choice",
    options: [
      { label: "Pride in craft — doing something really well with my hands or skills", value: "a" },
      { label: "Discovery — always learning, always figuring something out", value: "b" },
      { label: "Expression — making things that didn't exist before I made them", value: "c" },
      { label: "Impact — genuinely changing someone's life for the better", value: "d" },
      { label: "Momentum — building something, making big things happen", value: "e" },
      { label: "Mastery — being the expert, the reliable one, the one who knows exactly what to do", value: "f" },
    ],
    required: true,
    scoring: [
      { dimension: "riasec_realistic", weight: 2, mapping: { a: 3, b: 0, c: 0, d: 0, e: 0, f: 0 } },
      { dimension: "riasec_investigative", weight: 2, mapping: { a: 0, b: 3, c: 0, d: 0, e: 0, f: 0 } },
      { dimension: "riasec_artistic", weight: 2, mapping: { a: 0, b: 0, c: 3, d: 0, e: 0, f: 0 } },
      { dimension: "riasec_social", weight: 2, mapping: { a: 0, b: 0, c: 0, d: 3, e: 0, f: 0 } },
      { dimension: "riasec_enterprising", weight: 2, mapping: { a: 0, b: 0, c: 0, d: 0, e: 3, f: 0 } },
      { dimension: "riasec_conventional", weight: 2, mapping: { a: 0, b: 0, c: 0, d: 0, e: 0, f: 3 } },
      { dimension: "happiness_purpose", weight: 1, mapping: { a: 2, b: 2, c: 2, d: 3, e: 2, f: 2 } },
    ],
  },

  {
    id: "s0_q15",
    segmentIndex: 0,
    text: "How often do you find yourself deep in a creative project — designing, writing, filming, making music, or anything where you're the one creating?",
    type: "likert",
    options: [
      { label: "Never", value: 1 },
      { label: "Rarely", value: 2 },
      { label: "Sometimes", value: 3 },
      { label: "Often", value: 4 },
      { label: "Very Often", value: 5 },
    ],
    required: true,
    scoring: [
      { dimension: "riasec_artistic", weight: 2, mapping: { "1": 0, "2": 1, "3": 2, "4": 3, "5": 4 } },
      { dimension: "values_creativity", weight: 2, mapping: { "1": 0, "2": 1, "3": 2, "4": 3, "5": 4 } },
    ],
  },

  {
    id: "s0_q16",
    segmentIndex: 0,
    text: "You have to give a presentation at work. What's your honest gut reaction?",
    type: "scenario",
    options: [
      { label: "I secretly love it — I like being in front of people", value: "a" },
      { label: "Fine, as long as I know the material really well", value: "b" },
      { label: "I'd rather write it down and let someone else present it", value: "c" },
      { label: "Genuinely dreading it — it takes a lot out of me", value: "d" },
    ],
    required: true,
    scoring: [
      { dimension: "riasec_enterprising", weight: 2, mapping: { a: 3, b: 1, c: 0, d: 0 } },
      { dimension: "riasec_social", weight: 1, mapping: { a: 2, b: 1, c: 0, d: 0 } },
      { dimension: "big5_extraversion", weight: 2, mapping: { a: 4, b: 2, c: 1, d: 0 } },
    ],
  },

  {
    id: "s0_q17",
    segmentIndex: 0,
    text: "How much does the idea of running your own business — your own rules, your own vision — genuinely appeal to you?",
    type: "slider",
    sliderConfig: {
      min: 1,
      max: 10,
      minLabel: "Doesn't appeal to me at all",
      maxLabel: "It's my dream",
      step: 1,
    },
    required: true,
    scoring: [
      {
        dimension: "riasec_enterprising",
        weight: 3,
        mapping: { "1": 0, "2": 0, "3": 1, "4": 1, "5": 2, "6": 2, "7": 3, "8": 3, "9": 4, "10": 5 },
      },
      {
        dimension: "values_independence",
        weight: 2,
        mapping: { "1": 0, "2": 0, "3": 1, "4": 1, "5": 2, "6": 2, "7": 3, "8": 3, "9": 4, "10": 5 },
      },
    ],
  },

  {
    id: "s0_q18",
    segmentIndex: 0,
    text: "How important is it that your future work has a clear sense of order — set schedules, defined roles, and predictable tasks?",
    type: "slider",
    sliderConfig: {
      min: 1,
      max: 10,
      minLabel: "Boring — I want flexibility and variety",
      maxLabel: "Really important — I thrive on structure",
      step: 1,
    },
    required: true,
    scoring: [
      {
        dimension: "riasec_conventional",
        weight: 2,
        mapping: { "1": 0, "2": 0, "3": 1, "4": 1, "5": 2, "6": 2, "7": 3, "8": 3, "9": 4, "10": 5 },
      },
      {
        dimension: "big5_conscientiousness",
        weight: 1,
        mapping: { "1": 0, "2": 0, "3": 1, "4": 1, "5": 2, "6": 2, "7": 3, "8": 3, "9": 4, "10": 5 },
      },
    ],
  },

  {
    id: "s0_q19",
    segmentIndex: 0,
    text: "Right now, how excited are you about your future in general?",
    subtext: "Be honest — there's no right answer here.",
    type: "slider",
    sliderConfig: {
      min: 1,
      max: 10,
      minLabel: "Honestly, not very",
      maxLabel: "Really excited",
      step: 1,
    },
    required: true,
    scoring: [
      {
        dimension: "happiness_life_satisfaction",
        weight: 3,
        mapping: { "1": 0, "2": 1, "3": 2, "4": 3, "5": 4, "6": 5, "7": 6, "8": 7, "9": 8, "10": 9 },
      },
      {
        dimension: "happiness_purpose",
        weight: 2,
        mapping: { "1": 0, "2": 1, "3": 2, "4": 3, "5": 4, "6": 5, "7": 6, "8": 7, "9": 8, "10": 9 },
      },
    ],
  },

  {
    id: "s0_q20",
    segmentIndex: 0,
    text: "When you think about what kind of person you want to become, what word or phrase comes to mind first?",
    subtext: "There's no wrong answer — just write the first thing that comes up.",
    type: "text",
    required: false,
    scoring: [],
  },

  // NEW: S/N differentiator — daydream style
  {
    id: "s0_q21",
    segmentIndex: 0,
    text: "When you daydream, what does it usually look like?",
    subtext: "Go with what actually happens in your head, not what sounds more interesting.",
    type: "choice",
    options: [
      { label: "Replaying real memories or imagining specific, realistic future scenarios", value: "a" },
      { label: "Practical planning — mentally working through a problem or goal", value: "b" },
      { label: "Fantastical, invented worlds or abstract 'what ifs' that couldn't really happen", value: "c" },
      { label: "Exploring big ideas, patterns, or questions without any clear destination", value: "d" },
    ],
    required: true,
    scoring: [
      // a, b = Sensing (low on N scale); c, d = Intuition (high on N scale)
      { dimension: "mbti_sensing_intuition", weight: 2, mapping: { a: 1, b: 1, c: 5, d: 5 } },
      { dimension: "archetype_sage", weight: 1, mapping: { a: 0, b: 0, c: 1, d: 2 } },
      { dimension: "archetype_magician", weight: 1, mapping: { a: 0, b: 0, c: 2, d: 1 } },
      { dimension: "trait_curiosity", weight: 1, mapping: { a: 0, b: 1, c: 2, d: 3 } },
    ],
  },

  // NEW: Archetype story/content preference
  {
    id: "s0_q22",
    segmentIndex: 0,
    text: "Which type of story or content do you find yourself most drawn to?",
    subtext: "This can be movies, books, shows, podcasts — whatever you actually consume.",
    type: "choice",
    options: [
      { label: "Underdog stories — someone fighting against the odds to prove themselves", value: "a" },
      { label: "Adventures and quests — exploring unknown territory or chasing something", value: "b" },
      { label: "Love stories and deep relationships — connection, longing, belonging", value: "c" },
      { label: "Mysteries, philosophy, or intellectual puzzles — truth-seeking", value: "d" },
      { label: "Revolution and rebellion — characters who break the rules and change the world", value: "e" },
      { label: "People building and creating things — art, communities, legacies", value: "f" },
    ],
    required: true,
    scoring: [
      { dimension: "archetype_hero", weight: 2, mapping: { a: 3, b: 1, c: 0, d: 0, e: 1, f: 0 } },
      { dimension: "archetype_explorer", weight: 2, mapping: { a: 0, b: 3, c: 0, d: 1, e: 0, f: 0 } },
      { dimension: "archetype_lover", weight: 2, mapping: { a: 0, b: 0, c: 3, d: 0, e: 0, f: 0 } },
      { dimension: "archetype_sage", weight: 2, mapping: { a: 0, b: 0, c: 0, d: 3, e: 0, f: 0 } },
      { dimension: "archetype_rebel", weight: 2, mapping: { a: 1, b: 0, c: 0, d: 0, e: 3, f: 0 } },
      { dimension: "archetype_creator", weight: 2, mapping: { a: 0, b: 0, c: 0, d: 0, e: 0, f: 3 } },
    ],
  },
];

// ============================================================
// SEGMENT 1 — "How You Think" (Cognitive Style)
// Primary: cognitive_* | Embedded: screen_adhd, screen_dyslexia, screen_dyscalculia
// ============================================================

const segment1Questions: Question[] = [
  {
    id: "s1_q1",
    segmentIndex: 1,
    text: "When you think about something — like planning your day or imagining the future — does it feel more like pictures or more like words?",
    subtext: "There's no right answer, just curious how your mind works.",
    type: "slider",
    sliderConfig: {
      min: 1,
      max: 10,
      minLabel: "Mostly words and language",
      maxLabel: "Mostly images and visuals",
      step: 1,
    },
    required: true,
    scoring: [
      {
        dimension: "cognitive_spatial",
        weight: 2,
        mapping: { "1": 0, "2": 0, "3": 1, "4": 1, "5": 2, "6": 2, "7": 3, "8": 3, "9": 4, "10": 5 },
      },
      {
        dimension: "cognitive_verbal",
        weight: 2,
        mapping: { "1": 5, "2": 4, "3": 3, "4": 3, "5": 2, "6": 2, "7": 1, "8": 1, "9": 0, "10": 0 },
      },
    ],
  },

  {
    id: "s1_q2",
    segmentIndex: 1,
    text: "When you're learning something new, which approach works best for you?",
    type: "choice",
    options: [
      { label: "Reading — give me a book, article, or written instructions", value: "a" },
      { label: "Watching or listening — a video, podcast, or someone explaining it", value: "b" },
      { label: "Just trying it — figure it out as I go", value: "c" },
      { label: "Talking it through with someone who knows it well", value: "d" },
    ],
    required: true,
    scoring: [
      { dimension: "cognitive_verbal", weight: 2, mapping: { a: 3, b: 1, c: 0, d: 2 } },
      { dimension: "cognitive_spatial", weight: 1, mapping: { a: 0, b: 2, c: 3, d: 1 } },
    ],
  },

  {
    id: "s1_q3",
    segmentIndex: 1,
    text: "When you're reading something for fun or out of genuine interest, how often do you find yourself re-reading the same line or paragraph?",
    subtext: "Not because it's boring — just because your eyes slipped or something didn't quite click.",
    type: "likert",
    options: [
      { label: "Never", value: 1 },
      { label: "Rarely", value: 2 },
      { label: "Sometimes", value: 3 },
      { label: "Often", value: 4 },
      { label: "Very Often", value: 5 },
    ],
    required: true,
    scoring: [
      {
        dimension: "screen_dyslexia",
        weight: 3,
        mapping: { "1": 0, "2": 1, "3": 2, "4": 3, "5": 4 },
      },
    ],
  },

  {
    id: "s1_q4",
    segmentIndex: 1,
    text: "How do you feel when someone asks you to do quick mental math — like splitting a bill or calculating a tip?",
    type: "choice",
    options: [
      { label: "Totally fine, I just do it in my head", value: "a" },
      { label: "Fine as long as I can use my phone calculator", value: "b" },
      { label: "A little uncomfortable — I prefer to double-check my math", value: "c" },
      { label: "Stressed — numbers under pressure feel genuinely hard", value: "d" },
      { label: "Avoided entirely — I let other people handle it", value: "e" },
    ],
    required: true,
    scoring: [
      {
        dimension: "screen_dyscalculia",
        weight: 3,
        mapping: { a: 0, b: 1, c: 2, d: 3, e: 4 },
      },
      {
        dimension: "cognitive_numerical",
        weight: 2,
        mapping: { a: 4, b: 3, c: 2, d: 1, e: 0 },
      },
    ],
  },

  {
    id: "s1_q5",
    segmentIndex: 1,
    text: "When you're in a conversation and there's background noise — a TV, crowd, music — how hard is it to follow what's being said?",
    type: "likert",
    options: [
      { label: "Strongly Disagree (no problem at all)", value: 1 },
      { label: "Disagree", value: 2 },
      { label: "Neutral", value: 3 },
      { label: "Agree", value: 4 },
      { label: "Strongly Agree (very hard)", value: 5 },
    ],
    required: true,
    scoring: [
      {
        dimension: "screen_adhd",
        weight: 2,
        mapping: { "1": 0, "2": 1, "3": 2, "4": 3, "5": 4 },
      },
    ],
  },

  {
    id: "s1_q6",
    segmentIndex: 1,
    text: "When you're working on something that requires focus, how often do you find your mind wandering to totally unrelated thoughts?",
    type: "likert",
    options: [
      { label: "Never", value: 1 },
      { label: "Rarely", value: 2 },
      { label: "Sometimes", value: 3 },
      { label: "Often", value: 4 },
      { label: "Very Often", value: 5 },
    ],
    required: true,
    scoring: [
      {
        dimension: "screen_adhd",
        weight: 3,
        mapping: { "1": 0, "2": 1, "3": 2, "4": 3, "5": 4 },
      },
      {
        dimension: "ef_task_initiation",
        weight: 1,
        mapping: { "1": 0, "2": 0, "3": 1, "4": 2, "5": 3 },
      },
    ],
  },

  {
    id: "s1_q7",
    segmentIndex: 1,
    text: "Compared to people your age, how quickly do you feel like you pick up new instructions or skills?",
    type: "choice",
    options: [
      { label: "Faster than most — I usually get things quickly", value: "a" },
      { label: "About the same as everyone else", value: "b" },
      { label: "A little slower, but I get there", value: "c" },
      { label: "Noticeably slower — I usually need things repeated or explained differently", value: "d" },
    ],
    required: true,
    scoring: [
      {
        dimension: "screen_dyslexia",
        weight: 1,
        mapping: { a: 0, b: 0, c: 1, d: 2 },
      },
      {
        dimension: "screen_adhd",
        weight: 1,
        mapping: { a: 0, b: 0, c: 1, d: 2 },
      },
    ],
  },

  {
    id: "s1_q8",
    segmentIndex: 1,
    text: "How comfortable are you with abstract ideas — concepts that don't have a concrete or physical form?",
    subtext: "Like philosophy, theoretical math, or deep strategy discussions.",
    type: "slider",
    sliderConfig: {
      min: 1,
      max: 10,
      minLabel: "I need concrete, real-world examples",
      maxLabel: "Abstract ideas are my playground",
      step: 1,
    },
    required: true,
    scoring: [
      {
        dimension: "cognitive_abstract",
        weight: 3,
        mapping: { "1": 0, "2": 0, "3": 1, "4": 1, "5": 2, "6": 2, "7": 3, "8": 3, "9": 4, "10": 5 },
      },
      {
        dimension: "riasec_investigative",
        weight: 1,
        mapping: { "1": 0, "2": 0, "3": 1, "4": 1, "5": 2, "6": 2, "7": 3, "8": 3, "9": 4, "10": 5 },
      },
      // High abstract comfort → Intuition; low → Sensing
      {
        dimension: "mbti_sensing_intuition",
        weight: 1,
        mapping: { "1": 1, "2": 1, "3": 2, "4": 2, "5": 3, "6": 3, "7": 4, "8": 4, "9": 5, "10": 5 },
      },
    ],
  },

  {
    id: "s1_q9",
    segmentIndex: 1,
    text: "When you're trying to explain something to someone, what feels most natural?",
    type: "choice",
    options: [
      { label: "Talking through it step by step with words", value: "a" },
      { label: "Drawing it out or showing them visually", value: "b" },
      { label: "Using an analogy or story to make it click", value: "c" },
      { label: "Having them just try it alongside me", value: "d" },
    ],
    required: true,
    scoring: [
      { dimension: "cognitive_verbal", weight: 2, mapping: { a: 3, b: 0, c: 2, d: 0 } },
      { dimension: "cognitive_spatial", weight: 2, mapping: { a: 0, b: 3, c: 1, d: 1 } },
    ],
  },

  {
    id: "s1_q10",
    segmentIndex: 1,
    text: "How well do you remember things you've *heard* versus things you've *read*?",
    type: "choice",
    options: [
      { label: "I remember things I read much better", value: "a" },
      { label: "About the same for both", value: "b" },
      { label: "I remember things I hear much better", value: "c" },
      { label: "Honestly, I struggle to retain information regardless of the format", value: "d" },
    ],
    required: true,
    scoring: [
      { dimension: "cognitive_verbal", weight: 2, mapping: { a: 3, b: 2, c: 1, d: 1 } },
      { dimension: "screen_dyslexia", weight: 1, mapping: { a: 0, b: 0, c: 2, d: 2 } },
    ],
  },

  {
    id: "s1_q11",
    segmentIndex: 1,
    text: "How good are you at mentally rotating or visualizing objects in 3D — like imagining how furniture will look in a room?",
    type: "slider",
    sliderConfig: {
      min: 1,
      max: 10,
      minLabel: "I struggle with this",
      maxLabel: "I can do it easily in my head",
      step: 1,
    },
    required: true,
    scoring: [
      {
        dimension: "cognitive_spatial",
        weight: 3,
        mapping: { "1": 0, "2": 0, "3": 1, "4": 1, "5": 2, "6": 2, "7": 3, "8": 3, "9": 4, "10": 5 },
      },
    ],
  },

  {
    id: "s1_q12",
    segmentIndex: 1,
    text: "How naturally comfortable are you with numbers — tracking money, spotting patterns in data, or calculating things?",
    type: "slider",
    sliderConfig: {
      min: 1,
      max: 10,
      minLabel: "Numbers make me anxious",
      maxLabel: "Numbers are easy and natural",
      step: 1,
    },
    required: true,
    scoring: [
      {
        dimension: "cognitive_numerical",
        weight: 3,
        mapping: { "1": 0, "2": 0, "3": 1, "4": 1, "5": 2, "6": 2, "7": 3, "8": 3, "9": 4, "10": 5 },
      },
      {
        dimension: "screen_dyscalculia",
        weight: 2,
        mapping: { "1": 4, "2": 3, "3": 2, "4": 2, "5": 1, "6": 1, "7": 0, "8": 0, "9": 0, "10": 0 },
      },
    ],
  },

  {
    id: "s1_q13",
    segmentIndex: 1,
    text: "When you're reading a long article or book, how easy is it to stay absorbed without your focus slipping?",
    type: "likert",
    options: [
      { label: "Very easy — I get absorbed easily", value: 1 },
      { label: "Pretty easy", value: 2 },
      { label: "Sometimes easy, sometimes not", value: 3 },
      { label: "Hard — I frequently have to re-focus", value: 4 },
      { label: "Very hard — I rarely finish what I start reading", value: 5 },
    ],
    required: true,
    scoring: [
      {
        dimension: "screen_adhd",
        weight: 2,
        mapping: { "1": 0, "2": 0, "3": 1, "4": 2, "5": 3 },
      },
      {
        dimension: "screen_dyslexia",
        weight: 1,
        mapping: { "1": 0, "2": 0, "3": 1, "4": 2, "5": 3 },
      },
    ],
  },

  {
    id: "s1_q14",
    segmentIndex: 1,
    text: "How would you describe the way your brain makes connections between ideas?",
    type: "choice",
    options: [
      { label: "Linear — I build on one idea at a time in sequence", value: "a" },
      { label: "Web-like — I jump between many related ideas at once", value: "b" },
      { label: "Intuitive — connections just 'click' without me tracing the steps", value: "c" },
      { label: "Visual — I need to see things mapped out or drawn to understand relationships", value: "d" },
    ],
    required: true,
    scoring: [
      { dimension: "cognitive_verbal", weight: 1, mapping: { a: 3, b: 0, c: 1, d: 0 } },
      { dimension: "cognitive_abstract", weight: 2, mapping: { a: 0, b: 3, c: 3, d: 1 } },
      { dimension: "cognitive_spatial", weight: 1, mapping: { a: 0, b: 0, c: 0, d: 3 } },
      { dimension: "screen_adhd", weight: 1, mapping: { a: 0, b: 2, c: 1, d: 0 } },
    ],
  },

  {
    id: "s1_q15",
    segmentIndex: 1,
    text: "How often do you have great ideas but struggle to actually get them out of your head and into a finished form?",
    type: "likert",
    options: [
      { label: "Never", value: 1 },
      { label: "Rarely", value: 2 },
      { label: "Sometimes", value: 3 },
      { label: "Often", value: 4 },
      { label: "Very Often", value: 5 },
    ],
    required: true,
    scoring: [
      {
        dimension: "screen_adhd",
        weight: 2,
        mapping: { "1": 0, "2": 0, "3": 1, "4": 2, "5": 3 },
      },
      {
        dimension: "ef_task_initiation",
        weight: 2,
        mapping: { "1": 0, "2": 0, "3": 1, "4": 2, "5": 3 },
      },
      {
        dimension: "barrier_perfectionism",
        weight: 1,
        mapping: { "1": 0, "2": 0, "3": 1, "4": 2, "5": 3 },
      },
    ],
  },

  {
    id: "s1_q16",
    segmentIndex: 1,
    text: "How would you describe your relationship with spelling and writing?",
    type: "choice",
    options: [
      { label: "Easy — words and spelling feel natural", value: "a" },
      { label: "Fine, though I rely on spellcheck", value: "b" },
      { label: "Hit or miss — certain words trip me up frequently", value: "c" },
      { label: "Challenging — I mix up letters, words, or find written expression hard", value: "d" },
    ],
    required: true,
    scoring: [
      {
        dimension: "screen_dyslexia",
        weight: 3,
        mapping: { a: 0, b: 1, c: 2, d: 4 },
      },
      {
        dimension: "cognitive_verbal",
        weight: 2,
        mapping: { a: 4, b: 3, c: 2, d: 1 },
      },
    ],
  },

  {
    id: "s1_q17",
    segmentIndex: 1,
    text: "How often do you get completely absorbed in something you love — hours passing without you even noticing?",
    subtext: "Some people call this a 'flow state' — it can happen with gaming, art, coding, sports, anything.",
    type: "likert",
    options: [
      { label: "Never", value: 1 },
      { label: "Rarely", value: 2 },
      { label: "Sometimes", value: 3 },
      { label: "Often", value: 4 },
      { label: "Very Often", value: 5 },
    ],
    required: true,
    scoring: [
      {
        dimension: "happiness_life_satisfaction",
        weight: 2,
        mapping: { "1": 0, "2": 1, "3": 2, "4": 3, "5": 4 },
      },
      {
        dimension: "happiness_purpose",
        weight: 1,
        mapping: { "1": 0, "2": 1, "3": 2, "4": 3, "5": 4 },
      },
    ],
  },

  {
    id: "s1_q18",
    segmentIndex: 1,
    text: "When you look back at your time in school (any level), how well do you feel like the traditional classroom worked for you?",
    type: "slider",
    sliderConfig: {
      min: 1,
      max: 10,
      minLabel: "It really didn't work for me",
      maxLabel: "It was a great fit for how I learn",
      step: 1,
    },
    required: true,
    scoring: [
      {
        dimension: "screen_dyslexia",
        weight: 1,
        mapping: { "1": 3, "2": 2, "3": 2, "4": 1, "5": 1, "6": 0, "7": 0, "8": 0, "9": 0, "10": 0 },
      },
      {
        dimension: "screen_adhd",
        weight: 1,
        mapping: { "1": 3, "2": 2, "3": 2, "4": 1, "5": 1, "6": 0, "7": 0, "8": 0, "9": 0, "10": 0 },
      },
    ],
  },
];

// ============================================================
// SEGMENT 2 — "Your Inner World" (Personality & Emotional Life)
// Primary: Big Five | Embedded: screening flags + wellbeing
// ============================================================

const segment2Questions: Question[] = [
  {
    id: "s2_q1",
    segmentIndex: 2,
    text: "I love trying foods, music, or experiences from cultures very different from mine.",
    type: "likert",
    options: [
      { label: "Strongly Disagree", value: 1 },
      { label: "Disagree", value: 2 },
      { label: "Neutral", value: 3 },
      { label: "Agree", value: 4 },
      { label: "Strongly Agree", value: 5 },
    ],
    required: true,
    scoring: [
      { dimension: "big5_openness", weight: 2, mapping: { "1": 0, "2": 1, "3": 2, "4": 3, "5": 4 } },
      // Openness to new cultures = Intuition side
      { dimension: "mbti_sensing_intuition", weight: 1, mapping: { "1": 1, "2": 2, "3": 3, "4": 4, "5": 5 } },
      { dimension: "archetype_explorer", weight: 1, mapping: { "1": 0, "2": 0, "3": 1, "4": 2, "5": 3 } },
    ],
  },

  {
    id: "s2_q2",
    segmentIndex: 2,
    text: "Being around a lot of people gives me energy rather than draining me.",
    type: "likert",
    options: [
      { label: "Strongly Disagree", value: 1 },
      { label: "Disagree", value: 2 },
      { label: "Neutral", value: 3 },
      { label: "Agree", value: 4 },
      { label: "Strongly Agree", value: 5 },
    ],
    required: true,
    scoring: [
      { dimension: "big5_extraversion", weight: 3, mapping: { "1": 0, "2": 1, "3": 2, "4": 3, "5": 4 } },
      { dimension: "mbti_extraversion_introversion", weight: 3, mapping: { "1": 1, "2": 2, "3": 3, "4": 4, "5": 5 } },
    ],
  },

  {
    id: "s2_q3",
    segmentIndex: 2,
    text: "I naturally keep my space organized without having to force myself.",
    type: "likert",
    options: [
      { label: "Strongly Disagree", value: 1 },
      { label: "Disagree", value: 2 },
      { label: "Neutral", value: 3 },
      { label: "Agree", value: 4 },
      { label: "Strongly Agree", value: 5 },
    ],
    required: true,
    scoring: [
      { dimension: "big5_conscientiousness", weight: 3, mapping: { "1": 0, "2": 1, "3": 2, "4": 3, "5": 4 } },
      { dimension: "ef_planning", weight: 1, mapping: { "1": 0, "2": 1, "3": 2, "4": 3, "5": 4 } },
      // Organized = Judging (low on P scale)
      { dimension: "mbti_judging_perceiving", weight: 2, mapping: { "1": 5, "2": 4, "3": 3, "4": 2, "5": 1 } },
    ],
  },

  {
    id: "s2_q4",
    segmentIndex: 2,
    text: "I genuinely care about how other people are feeling, even strangers.",
    type: "likert",
    options: [
      { label: "Strongly Disagree", value: 1 },
      { label: "Disagree", value: 2 },
      { label: "Neutral", value: 3 },
      { label: "Agree", value: 4 },
      { label: "Strongly Agree", value: 5 },
    ],
    required: true,
    scoring: [
      { dimension: "big5_agreeableness", weight: 3, mapping: { "1": 0, "2": 1, "3": 2, "4": 3, "5": 4 } },
      { dimension: "riasec_social", weight: 1, mapping: { "1": 0, "2": 1, "3": 2, "4": 3, "5": 4 } },
      // Caring about feelings = Feeling over Thinking
      { dimension: "mbti_thinking_feeling", weight: 2, mapping: { "1": 1, "2": 2, "3": 3, "4": 4, "5": 5 } },
      { dimension: "trait_empathy", weight: 3, mapping: { "1": 0, "2": 1, "3": 2, "4": 3, "5": 4 } },
      { dimension: "archetype_caregiver", weight: 2, mapping: { "1": 0, "2": 1, "3": 2, "4": 3, "5": 4 } },
    ],
  },

  {
    id: "s2_q5",
    segmentIndex: 2,
    text: "Most days, I feel like my life is heading in a good direction.",
    type: "likert",
    options: [
      { label: "Strongly Disagree", value: 1 },
      { label: "Disagree", value: 2 },
      { label: "Neutral", value: 3 },
      { label: "Agree", value: 4 },
      { label: "Strongly Agree", value: 5 },
    ],
    required: true,
    scoring: [
      {
        dimension: "happiness_life_satisfaction",
        weight: 3,
        mapping: { "1": 0, "2": 1, "3": 2, "4": 3, "5": 4 },
      },
      {
        dimension: "screen_depression",
        weight: 2,
        mapping: { "1": 4, "2": 3, "3": 2, "4": 1, "5": 0 },
      },
      {
        dimension: "happiness_purpose",
        weight: 2,
        mapping: { "1": 0, "2": 1, "3": 2, "4": 3, "5": 4 },
      },
    ],
  },

  {
    id: "s2_q6",
    segmentIndex: 2,
    text: "Sometimes I feel like I'm watching my life from the outside rather than really living it.",
    subtext: "Like you're a passenger in your own story, or observing yourself like it's a movie.",
    type: "likert",
    options: [
      { label: "Strongly Disagree", value: 1 },
      { label: "Disagree", value: 2 },
      { label: "Neutral", value: 3 },
      { label: "Agree", value: 4 },
      { label: "Strongly Agree", value: 5 },
    ],
    required: true,
    scoring: [
      {
        dimension: "screen_dissociation",
        weight: 3,
        mapping: { "1": 0, "2": 1, "3": 2, "4": 3, "5": 4 },
      },
      {
        dimension: "screen_depression",
        weight: 1,
        mapping: { "1": 0, "2": 1, "3": 2, "4": 3, "5": 4 },
      },
      {
        dimension: "trait_self_awareness",
        weight: 1,
        mapping: { "1": 1, "2": 2, "3": 3, "4": 3, "5": 3 },
      },
    ],
  },

  {
    id: "s2_q7",
    segmentIndex: 2,
    text: "My mood can shift pretty dramatically within a single day, sometimes for no obvious reason.",
    type: "likert",
    options: [
      { label: "Strongly Disagree", value: 1 },
      { label: "Disagree", value: 2 },
      { label: "Neutral", value: 3 },
      { label: "Agree", value: 4 },
      { label: "Strongly Agree", value: 5 },
    ],
    required: true,
    scoring: [
      {
        dimension: "screen_emotional_dysregulation",
        weight: 3,
        mapping: { "1": 0, "2": 1, "3": 2, "4": 3, "5": 4 },
      },
      {
        dimension: "big5_emotional_stability",
        weight: 2,
        mapping: { "1": 4, "2": 3, "3": 2, "4": 1, "5": 0 },
      },
    ],
  },

  {
    id: "s2_q8",
    segmentIndex: 2,
    text: "I sometimes worry that people I care about will eventually leave or stop caring about me.",
    type: "likert",
    options: [
      { label: "Strongly Disagree", value: 1 },
      { label: "Disagree", value: 2 },
      { label: "Neutral", value: 3 },
      { label: "Agree", value: 4 },
      { label: "Strongly Agree", value: 5 },
    ],
    required: true,
    scoring: [
      {
        dimension: "screen_anxiety",
        weight: 2,
        mapping: { "1": 0, "2": 1, "3": 2, "4": 3, "5": 4 },
      },
      {
        dimension: "screen_emotional_dysregulation",
        weight: 1,
        mapping: { "1": 0, "2": 1, "3": 2, "4": 3, "5": 4 },
      },
      {
        dimension: "barrier_self_worth",
        weight: 2,
        mapping: { "1": 0, "2": 1, "3": 2, "4": 3, "5": 4 },
      },
    ],
  },

  {
    id: "s2_q9",
    segmentIndex: 2,
    text: "I have a clear sense of who I am and what I stand for.",
    type: "likert",
    options: [
      { label: "Strongly Disagree", value: 1 },
      { label: "Disagree", value: 2 },
      { label: "Neutral", value: 3 },
      { label: "Agree", value: 4 },
      { label: "Strongly Agree", value: 5 },
    ],
    required: true,
    scoring: [
      {
        dimension: "happiness_self_worth",
        weight: 3,
        mapping: { "1": 0, "2": 1, "3": 2, "4": 3, "5": 4 },
      },
      {
        dimension: "barrier_self_worth",
        weight: 2,
        mapping: { "1": 4, "2": 3, "3": 2, "4": 1, "5": 0 },
      },
      {
        dimension: "screen_emotional_dysregulation",
        weight: 1,
        mapping: { "1": 3, "2": 2, "3": 1, "4": 0, "5": 0 },
      },
      { dimension: "trait_authenticity", weight: 2, mapping: { "1": 0, "2": 1, "3": 2, "4": 3, "5": 4 } },
      { dimension: "trait_self_awareness", weight: 2, mapping: { "1": 0, "2": 1, "3": 2, "4": 3, "5": 4 } },
    ],
  },

  {
    id: "s2_q10",
    segmentIndex: 2,
    text: "I sometimes feel empty or hollow inside, even when things in my life seem fine on the surface.",
    type: "likert",
    options: [
      { label: "Strongly Disagree", value: 1 },
      { label: "Disagree", value: 2 },
      { label: "Neutral", value: 3 },
      { label: "Agree", value: 4 },
      { label: "Strongly Agree", value: 5 },
    ],
    required: true,
    scoring: [
      {
        dimension: "screen_depression",
        weight: 3,
        mapping: { "1": 0, "2": 1, "3": 2, "4": 3, "5": 4 },
      },
      {
        dimension: "big5_emotional_stability",
        weight: 2,
        mapping: { "1": 4, "2": 3, "3": 2, "4": 1, "5": 0 },
      },
      {
        dimension: "barrier_self_worth",
        weight: 1,
        mapping: { "1": 0, "2": 1, "3": 2, "4": 3, "5": 4 },
      },
    ],
  },

  {
    id: "s2_q11",
    segmentIndex: 2,
    text: "When I'm really upset, I sometimes do things I later regret.",
    subtext: "This is incredibly common — you're not being judged here.",
    type: "likert",
    options: [
      { label: "Strongly Disagree", value: 1 },
      { label: "Disagree", value: 2 },
      { label: "Neutral", value: 3 },
      { label: "Agree", value: 4 },
      { label: "Strongly Agree", value: 5 },
    ],
    required: true,
    scoring: [
      {
        dimension: "screen_emotional_dysregulation",
        weight: 3,
        mapping: { "1": 0, "2": 1, "3": 2, "4": 3, "5": 4 },
      },
      {
        dimension: "ef_impulse_control",
        weight: 2,
        mapping: { "1": 0, "2": 1, "3": 2, "4": 3, "5": 4 },
      },
    ],
  },

  {
    id: "s2_q12",
    segmentIndex: 2,
    text: "I feel like I genuinely like who I am as a person.",
    type: "likert",
    options: [
      { label: "Strongly Disagree", value: 1 },
      { label: "Disagree", value: 2 },
      { label: "Neutral", value: 3 },
      { label: "Agree", value: 4 },
      { label: "Strongly Agree", value: 5 },
    ],
    required: true,
    scoring: [
      {
        dimension: "happiness_self_worth",
        weight: 3,
        mapping: { "1": 0, "2": 1, "3": 2, "4": 3, "5": 4 },
      },
      {
        dimension: "barrier_self_worth",
        weight: 2,
        mapping: { "1": 4, "2": 3, "3": 2, "4": 1, "5": 0 },
      },
      {
        dimension: "screen_depression",
        weight: 1,
        mapping: { "1": 3, "2": 2, "3": 1, "4": 0, "5": 0 },
      },
    ],
  },

  {
    id: "s2_q13",
    segmentIndex: 2,
    text: "There are things from my past that still affect how I feel day to day, even when I don't want them to.",
    type: "likert",
    options: [
      { label: "Strongly Disagree", value: 1 },
      { label: "Disagree", value: 2 },
      { label: "Neutral", value: 3 },
      { label: "Agree", value: 4 },
      { label: "Strongly Agree", value: 5 },
    ],
    required: true,
    scoring: [
      {
        dimension: "screen_trauma",
        weight: 3,
        mapping: { "1": 0, "2": 1, "3": 2, "4": 3, "5": 4 },
      },
      {
        dimension: "big5_emotional_stability",
        weight: 1,
        mapping: { "1": 4, "2": 3, "3": 2, "4": 1, "5": 0 },
      },
    ],
  },

  {
    id: "s2_q14",
    segmentIndex: 2,
    text: "I tend to see the best in people, even when they've let me down.",
    type: "likert",
    options: [
      { label: "Strongly Disagree", value: 1 },
      { label: "Disagree", value: 2 },
      { label: "Neutral", value: 3 },
      { label: "Agree", value: 4 },
      { label: "Strongly Agree", value: 5 },
    ],
    required: true,
    scoring: [
      { dimension: "big5_agreeableness", weight: 2, mapping: { "1": 0, "2": 1, "3": 2, "4": 3, "5": 4 } },
      // Seeing the best in people = Feeling
      { dimension: "mbti_thinking_feeling", weight: 2, mapping: { "1": 1, "2": 2, "3": 3, "4": 4, "5": 5 } },
      { dimension: "archetype_innocent", weight: 1, mapping: { "1": 0, "2": 1, "3": 2, "4": 3, "5": 3 } },
    ],
  },

  {
    id: "s2_q15",
    segmentIndex: 2,
    text: "I'm someone who likes to have things planned out rather than winging it.",
    type: "likert",
    options: [
      { label: "Strongly Disagree", value: 1 },
      { label: "Disagree", value: 2 },
      { label: "Neutral", value: 3 },
      { label: "Agree", value: 4 },
      { label: "Strongly Agree", value: 5 },
    ],
    required: true,
    scoring: [
      { dimension: "big5_conscientiousness", weight: 2, mapping: { "1": 0, "2": 1, "3": 2, "4": 3, "5": 4 } },
      { dimension: "ef_planning", weight: 2, mapping: { "1": 0, "2": 1, "3": 2, "4": 3, "5": 4 } },
      // Plans = Judging (low P score)
      { dimension: "mbti_judging_perceiving", weight: 2, mapping: { "1": 5, "2": 4, "3": 3, "4": 2, "5": 1 } },
    ],
  },

  {
    id: "s2_q16",
    segmentIndex: 2,
    text: "I find small talk easy and can strike up a conversation with pretty much anyone.",
    type: "likert",
    options: [
      { label: "Strongly Disagree", value: 1 },
      { label: "Disagree", value: 2 },
      { label: "Neutral", value: 3 },
      { label: "Agree", value: 4 },
      { label: "Strongly Agree", value: 5 },
    ],
    required: true,
    scoring: [
      { dimension: "big5_extraversion", weight: 2, mapping: { "1": 0, "2": 1, "3": 2, "4": 3, "5": 4 } },
      { dimension: "mbti_extraversion_introversion", weight: 2, mapping: { "1": 1, "2": 2, "3": 3, "4": 4, "5": 5 } },
    ],
  },

  {
    id: "s2_q17",
    segmentIndex: 2,
    text: "I often worry about things that are outside my control.",
    type: "likert",
    options: [
      { label: "Strongly Disagree", value: 1 },
      { label: "Disagree", value: 2 },
      { label: "Neutral", value: 3 },
      { label: "Agree", value: 4 },
      { label: "Strongly Agree", value: 5 },
    ],
    required: true,
    scoring: [
      {
        dimension: "screen_anxiety",
        weight: 3,
        mapping: { "1": 0, "2": 1, "3": 2, "4": 3, "5": 4 },
      },
      {
        dimension: "big5_emotional_stability",
        weight: 2,
        mapping: { "1": 4, "2": 3, "3": 2, "4": 1, "5": 0 },
      },
    ],
  },

  {
    id: "s2_q18",
    segmentIndex: 2,
    text: "I get excited by new ideas and possibilities, even if they're not practical.",
    type: "likert",
    options: [
      { label: "Strongly Disagree", value: 1 },
      { label: "Disagree", value: 2 },
      { label: "Neutral", value: 3 },
      { label: "Agree", value: 4 },
      { label: "Strongly Agree", value: 5 },
    ],
    required: true,
    scoring: [
      { dimension: "big5_openness", weight: 2, mapping: { "1": 0, "2": 1, "3": 2, "4": 3, "5": 4 } },
      { dimension: "values_creativity", weight: 1, mapping: { "1": 0, "2": 1, "3": 2, "4": 3, "5": 4 } },
      // Excited by ideas = Intuition
      { dimension: "mbti_sensing_intuition", weight: 2, mapping: { "1": 1, "2": 2, "3": 3, "4": 4, "5": 5 } },
      { dimension: "trait_curiosity", weight: 2, mapping: { "1": 0, "2": 1, "3": 2, "4": 3, "5": 4 } },
      { dimension: "archetype_explorer", weight: 1, mapping: { "1": 0, "2": 0, "3": 1, "4": 2, "5": 3 } },
      { dimension: "archetype_magician", weight: 1, mapping: { "1": 0, "2": 0, "3": 1, "4": 2, "5": 3 } },
    ],
  },

  {
    id: "s2_q19",
    segmentIndex: 2,
    text: "I hold myself to really high standards — sometimes so high that I get frustrated when I don't meet them.",
    type: "likert",
    options: [
      { label: "Strongly Disagree", value: 1 },
      { label: "Disagree", value: 2 },
      { label: "Neutral", value: 3 },
      { label: "Agree", value: 4 },
      { label: "Strongly Agree", value: 5 },
    ],
    required: true,
    scoring: [
      { dimension: "barrier_perfectionism", weight: 3, mapping: { "1": 0, "2": 1, "3": 2, "4": 3, "5": 4 } },
      { dimension: "big5_conscientiousness", weight: 1, mapping: { "1": 0, "2": 1, "3": 2, "4": 3, "5": 4 } },
    ],
  },

  {
    id: "s2_q20",
    segmentIndex: 2,
    text: "I tend to feel like a burden to the people I care about.",
    type: "likert",
    options: [
      { label: "Strongly Disagree", value: 1 },
      { label: "Disagree", value: 2 },
      { label: "Neutral", value: 3 },
      { label: "Agree", value: 4 },
      { label: "Strongly Agree", value: 5 },
    ],
    required: true,
    scoring: [
      {
        dimension: "screen_depression",
        weight: 3,
        mapping: { "1": 0, "2": 1, "3": 2, "4": 3, "5": 4 },
      },
      {
        dimension: "barrier_self_worth",
        weight: 3,
        mapping: { "1": 0, "2": 1, "3": 2, "4": 3, "5": 4 },
      },
    ],
  },

  {
    id: "s2_q21",
    segmentIndex: 2,
    text: "I bounce back pretty quickly after something hard or disappointing.",
    type: "likert",
    options: [
      { label: "Strongly Disagree", value: 1 },
      { label: "Disagree", value: 2 },
      { label: "Neutral", value: 3 },
      { label: "Agree", value: 4 },
      { label: "Strongly Agree", value: 5 },
    ],
    required: true,
    scoring: [
      {
        dimension: "big5_emotional_stability",
        weight: 3,
        mapping: { "1": 0, "2": 1, "3": 2, "4": 3, "5": 4 },
      },
      {
        dimension: "screen_depression",
        weight: 1,
        mapping: { "1": 3, "2": 2, "3": 1, "4": 0, "5": 0 },
      },
      { dimension: "trait_resilience", weight: 3, mapping: { "1": 0, "2": 1, "3": 2, "4": 3, "5": 4 } },
    ],
  },

  {
    id: "s2_q22",
    segmentIndex: 2,
    text: "I feel most like myself when I'm around other people.",
    type: "likert",
    options: [
      { label: "Strongly Disagree", value: 1 },
      { label: "Disagree", value: 2 },
      { label: "Neutral", value: 3 },
      { label: "Agree", value: 4 },
      { label: "Strongly Agree", value: 5 },
    ],
    required: true,
    scoring: [
      { dimension: "big5_extraversion", weight: 2, mapping: { "1": 0, "2": 1, "3": 2, "4": 3, "5": 4 } },
      { dimension: "barrier_isolation", weight: 1, mapping: { "1": 3, "2": 2, "3": 1, "4": 0, "5": 0 } },
      { dimension: "mbti_extraversion_introversion", weight: 2, mapping: { "1": 1, "2": 2, "3": 3, "4": 4, "5": 5 } },
    ],
  },

  {
    id: "s2_q23",
    segmentIndex: 2,
    text: "I find it easy to trust people, even before I know them well.",
    type: "likert",
    options: [
      { label: "Strongly Disagree", value: 1 },
      { label: "Disagree", value: 2 },
      { label: "Neutral", value: 3 },
      { label: "Agree", value: 4 },
      { label: "Strongly Agree", value: 5 },
    ],
    required: true,
    scoring: [
      { dimension: "big5_agreeableness", weight: 1, mapping: { "1": 0, "2": 1, "3": 2, "4": 3, "5": 4 } },
      { dimension: "screen_trauma", weight: 1, mapping: { "1": 2, "2": 1, "3": 0, "4": 0, "5": 0 } },
      { dimension: "archetype_innocent", weight: 2, mapping: { "1": 0, "2": 1, "3": 2, "4": 3, "5": 3 } },
    ],
  },

  {
    id: "s2_q24",
    segmentIndex: 2,
    text: "Sometimes I feel like I've been the same person for so long that I don't know how to grow or change.",
    type: "likert",
    options: [
      { label: "Strongly Disagree", value: 1 },
      { label: "Disagree", value: 2 },
      { label: "Neutral", value: 3 },
      { label: "Agree", value: 4 },
      { label: "Strongly Agree", value: 5 },
    ],
    required: true,
    scoring: [
      {
        dimension: "screen_depression",
        weight: 2,
        mapping: { "1": 0, "2": 1, "3": 2, "4": 3, "5": 4 },
      },
      {
        dimension: "barrier_self_worth",
        weight: 1,
        mapping: { "1": 0, "2": 1, "3": 2, "4": 3, "5": 4 },
      },
      {
        dimension: "big5_openness",
        weight: 1,
        mapping: { "1": 4, "2": 3, "3": 2, "4": 1, "5": 0 },
      },
      { dimension: "trait_adaptability", weight: 1, mapping: { "1": 4, "2": 3, "3": 2, "4": 1, "5": 0 } },
    ],
  },

  {
    id: "s2_q25",
    segmentIndex: 2,
    text: "Overall, how happy would you say you feel on a typical day?",
    subtext: "Not your best day and not your worst — just a regular Tuesday kind of day.",
    type: "slider",
    sliderConfig: {
      min: 1,
      max: 10,
      minLabel: "Pretty unhappy, honestly",
      maxLabel: "Really happy and content",
      step: 1,
    },
    required: true,
    scoring: [
      {
        dimension: "happiness_life_satisfaction",
        weight: 3,
        mapping: { "1": 0, "2": 1, "3": 2, "4": 3, "5": 4, "6": 5, "7": 6, "8": 7, "9": 8, "10": 9 },
      },
      {
        dimension: "screen_depression",
        weight: 2,
        mapping: { "1": 5, "2": 4, "3": 3, "4": 3, "5": 2, "6": 1, "7": 1, "8": 0, "9": 0, "10": 0 },
      },
    ],
  },

  // NEW: T/F — logic vs. feelings in decisions
  {
    id: "s2_q26",
    segmentIndex: 2,
    text: "When making a decision that affects others, I tend to weigh logic and fairness more than how people will feel.",
    type: "likert",
    options: [
      { label: "Strongly Disagree", value: 1 },
      { label: "Disagree", value: 2 },
      { label: "Neutral", value: 3 },
      { label: "Agree", value: 4 },
      { label: "Strongly Agree", value: 5 },
    ],
    required: true,
    scoring: [
      // High = Thinking, Low = Feeling
      { dimension: "mbti_thinking_feeling", weight: 3, mapping: { "1": 5, "2": 4, "3": 3, "4": 2, "5": 1 } },
    ],
  },

  // NEW: J/P — options open vs. committed
  {
    id: "s2_q27",
    segmentIndex: 2,
    text: "I'd rather keep my options open than commit to a set plan.",
    type: "likert",
    options: [
      { label: "Strongly Disagree", value: 1 },
      { label: "Disagree", value: 2 },
      { label: "Neutral", value: 3 },
      { label: "Agree", value: 4 },
      { label: "Strongly Agree", value: 5 },
    ],
    required: true,
    scoring: [
      // High = Perceiving, Low = Judging
      { dimension: "mbti_judging_perceiving", weight: 3, mapping: { "1": 1, "2": 2, "3": 3, "4": 4, "5": 5 } },
      { dimension: "trait_adaptability", weight: 2, mapping: { "1": 0, "2": 1, "3": 2, "4": 3, "5": 4 } },
      { dimension: "archetype_explorer", weight: 1, mapping: { "1": 0, "2": 0, "3": 1, "4": 2, "5": 3 } },
    ],
  },

  // NEW: S/N — what is vs. what could be
  {
    id: "s2_q28",
    segmentIndex: 2,
    text: "I'm more interested in what could be than in what is.",
    type: "likert",
    options: [
      { label: "Strongly Disagree", value: 1 },
      { label: "Disagree", value: 2 },
      { label: "Neutral", value: 3 },
      { label: "Agree", value: 4 },
      { label: "Strongly Agree", value: 5 },
    ],
    required: true,
    scoring: [
      // High = Intuition, Low = Sensing
      { dimension: "mbti_sensing_intuition", weight: 3, mapping: { "1": 1, "2": 2, "3": 3, "4": 4, "5": 5 } },
      { dimension: "archetype_magician", weight: 1, mapping: { "1": 0, "2": 0, "3": 1, "4": 2, "5": 3 } },
      { dimension: "big5_openness", weight: 1, mapping: { "1": 0, "2": 1, "3": 2, "4": 3, "5": 4 } },
    ],
  },

  // NEW: E/I — alone time to recharge
  {
    id: "s2_q29",
    segmentIndex: 2,
    text: "I need regular alone time to feel like myself — even when I love the people around me.",
    type: "likert",
    options: [
      { label: "Strongly Disagree", value: 1 },
      { label: "Disagree", value: 2 },
      { label: "Neutral", value: 3 },
      { label: "Agree", value: 4 },
      { label: "Strongly Agree", value: 5 },
    ],
    required: true,
    scoring: [
      // High = Introversion (inverted: high agreement = low E score)
      { dimension: "mbti_extraversion_introversion", weight: 3, mapping: { "1": 5, "2": 4, "3": 3, "4": 2, "5": 1 } },
      { dimension: "big5_extraversion", weight: 1, mapping: { "1": 4, "2": 3, "3": 2, "4": 1, "5": 0 } },
    ],
  },
];

// ============================================================
// SEGMENT 3 — "What Matters to You" (Values & Motivation)
// Primary: values_* | Embedded: happiness_purpose
// ============================================================

const segment3Questions: Question[] = [
  {
    id: "s3_q1",
    segmentIndex: 3,
    text: "How often do you feel a genuine sense of purpose or meaning in your daily life?",
    subtext: "Not like life-changing purpose — just a feeling that what you're doing actually matters.",
    type: "slider",
    sliderConfig: {
      min: 1,
      max: 10,
      minLabel: "Rarely or never",
      maxLabel: "Most of the time",
      step: 1,
    },
    required: true,
    scoring: [
      {
        dimension: "happiness_purpose",
        weight: 3,
        mapping: { "1": 0, "2": 1, "3": 2, "4": 3, "5": 4, "6": 5, "7": 6, "8": 7, "9": 8, "10": 9 },
      },
      {
        dimension: "screen_depression",
        weight: 1,
        mapping: { "1": 4, "2": 3, "3": 2, "4": 2, "5": 1, "6": 1, "7": 0, "8": 0, "9": 0, "10": 0 },
      },
    ],
  },

  {
    id: "s3_q2",
    segmentIndex: 3,
    text: "Right now, what feels more important to you?",
    type: "choice",
    options: [
      { label: "Finding happiness — feeling good, at peace, content", value: "a" },
      { label: "Finding direction — knowing what I'm supposed to do", value: "b" },
      { label: "Both feel equally urgent", value: "c" },
      { label: "Honestly, I'm not sure what I want", value: "d" },
    ],
    required: true,
    scoring: [
      { dimension: "happiness_life_satisfaction", weight: 2, mapping: { a: 3, b: 0, c: 2, d: 0 } },
      { dimension: "happiness_purpose", weight: 2, mapping: { a: 0, b: 3, c: 2, d: 0 } },
      { dimension: "barrier_self_worth", weight: 1, mapping: { a: 0, b: 0, c: 0, d: 3 } },
    ],
  },

  {
    id: "s3_q3",
    segmentIndex: 3,
    text: "How much do you feel like you're living the life *you* want, versus the life other people expect of you?",
    type: "slider",
    sliderConfig: {
      min: 1,
      max: 10,
      minLabel: "Mostly living for others' expectations",
      maxLabel: "Fully living my own life",
      step: 1,
    },
    required: true,
    scoring: [
      {
        dimension: "barrier_external_pressure",
        weight: 3,
        mapping: { "1": 5, "2": 4, "3": 3, "4": 2, "5": 2, "6": 1, "7": 1, "8": 0, "9": 0, "10": 0 },
      },
      {
        dimension: "values_independence",
        weight: 2,
        mapping: { "1": 0, "2": 1, "3": 2, "4": 2, "5": 3, "6": 3, "7": 4, "8": 4, "9": 5, "10": 5 },
      },
      { dimension: "trait_authenticity", weight: 2, mapping: { "1": 0, "2": 1, "3": 2, "4": 3, "5": 4, "6": 5, "7": 6, "8": 7, "9": 8, "10": 9 } },
    ],
  },

  {
    id: "s3_q4",
    segmentIndex: 3,
    text: "Which matters more to you?",
    subtext: "Pick the one that feels more true in your gut.",
    type: "choice",
    options: [
      { label: "Financial security — stability, not worrying about money", value: "a" },
      { label: "Freedom to explore — try things, take risks, not be locked in", value: "b" },
    ],
    required: true,
    scoring: [
      { dimension: "values_security", weight: 3, mapping: { a: 3, b: 0 } },
      { dimension: "values_independence", weight: 3, mapping: { a: 0, b: 3 } },
      { dimension: "values_adventure", weight: 1, mapping: { a: 0, b: 2 } },
      { dimension: "archetype_explorer", weight: 1, mapping: { a: 0, b: 2 } },
    ],
  },

  {
    id: "s3_q5",
    segmentIndex: 3,
    text: "Which matters more to you?",
    type: "choice",
    options: [
      { label: "Helping others in a meaningful, direct way", value: "a" },
      { label: "Personal achievement — doing something I'm proud of", value: "b" },
    ],
    required: true,
    scoring: [
      { dimension: "values_helping", weight: 3, mapping: { a: 3, b: 0 } },
      { dimension: "values_achievement", weight: 3, mapping: { a: 0, b: 3 } },
      { dimension: "archetype_caregiver", weight: 1, mapping: { a: 2, b: 0 } },
      { dimension: "archetype_hero", weight: 1, mapping: { a: 0, b: 2 } },
    ],
  },

  {
    id: "s3_q6",
    segmentIndex: 3,
    text: "Which matters more to you?",
    type: "choice",
    options: [
      { label: "Stability and predictability — knowing what to expect", value: "a" },
      { label: "Adventure and variety — always something new", value: "b" },
    ],
    required: true,
    scoring: [
      { dimension: "values_security", weight: 2, mapping: { a: 3, b: 0 } },
      { dimension: "values_adventure", weight: 3, mapping: { a: 0, b: 3 } },
      { dimension: "archetype_explorer", weight: 1, mapping: { a: 0, b: 2 } },
      { dimension: "trait_adaptability", weight: 1, mapping: { a: 0, b: 2 } },
    ],
  },

  {
    id: "s3_q7",
    segmentIndex: 3,
    text: "Which matters more to you?",
    type: "choice",
    options: [
      { label: "Being recognized and respected for what I do", value: "a" },
      { label: "Doing meaningful work quietly, without needing the spotlight", value: "b" },
    ],
    required: true,
    scoring: [
      { dimension: "values_recognition", weight: 3, mapping: { a: 3, b: 0 } },
      { dimension: "values_helping", weight: 1, mapping: { a: 0, b: 2 } },
      { dimension: "archetype_ruler", weight: 1, mapping: { a: 2, b: 0 } },
      { dimension: "archetype_everyperson", weight: 1, mapping: { a: 0, b: 2 } },
    ],
  },

  {
    id: "s3_q8",
    segmentIndex: 3,
    text: "Which matters more to you?",
    type: "choice",
    options: [
      { label: "Expressing myself creatively — making things that feel like *me*", value: "a" },
      { label: "Getting concrete results — seeing real, measurable progress", value: "b" },
    ],
    required: true,
    scoring: [
      { dimension: "values_creativity", weight: 3, mapping: { a: 3, b: 0 } },
      { dimension: "values_achievement", weight: 2, mapping: { a: 0, b: 3 } },
      { dimension: "archetype_creator", weight: 1, mapping: { a: 2, b: 0 } },
    ],
  },

  {
    id: "s3_q9",
    segmentIndex: 3,
    text: "How important is it that your work-life actually feels balanced — time for yourself, relationships, and things that recharge you?",
    type: "slider",
    sliderConfig: {
      min: 1,
      max: 10,
      minLabel: "I'll sacrifice everything for the right opportunity",
      maxLabel: "Balance is non-negotiable for me",
      step: 1,
    },
    required: true,
    scoring: [
      {
        dimension: "values_balance",
        weight: 3,
        mapping: { "1": 0, "2": 0, "3": 1, "4": 1, "5": 2, "6": 2, "7": 3, "8": 3, "9": 4, "10": 5 },
      },
    ],
  },

  {
    id: "s3_q10",
    segmentIndex: 3,
    text: "How much does money — real financial security — factor into what you want from your life path?",
    type: "slider",
    sliderConfig: {
      min: 1,
      max: 10,
      minLabel: "I care way more about meaning than money",
      maxLabel: "Financial security is a top priority",
      step: 1,
    },
    required: true,
    scoring: [
      {
        dimension: "values_security",
        weight: 2,
        mapping: { "1": 0, "2": 0, "3": 1, "4": 1, "5": 2, "6": 2, "7": 3, "8": 3, "9": 4, "10": 5 },
      },
    ],
  },

  {
    id: "s3_q11",
    segmentIndex: 3,
    text: "How important is it that you are seen as successful — by family, by society, by your social circle?",
    type: "slider",
    sliderConfig: {
      min: 1,
      max: 10,
      minLabel: "Their opinion doesn't drive me",
      maxLabel: "Being seen as successful really matters to me",
      step: 1,
    },
    required: true,
    scoring: [
      {
        dimension: "values_recognition",
        weight: 2,
        mapping: { "1": 0, "2": 0, "3": 1, "4": 1, "5": 2, "6": 2, "7": 3, "8": 3, "9": 4, "10": 5 },
      },
      {
        dimension: "barrier_external_pressure",
        weight: 2,
        mapping: { "1": 0, "2": 0, "3": 1, "4": 1, "5": 2, "6": 2, "7": 3, "8": 3, "9": 4, "10": 5 },
      },
    ],
  },

  {
    id: "s3_q12",
    segmentIndex: 3,
    text: "When you think about what would genuinely make you happy, what comes first?",
    type: "choice",
    options: [
      { label: "Close relationships and feeling loved", value: "a" },
      { label: "Doing work that feels meaningful", value: "b" },
      { label: "Having freedom and not feeling trapped", value: "c" },
      { label: "Feeling safe and financially stable", value: "d" },
      { label: "Growing and learning — becoming more than I am now", value: "e" },
      { label: "Making a real difference in the world", value: "f" },
    ],
    required: true,
    scoring: [
      { dimension: "values_balance", weight: 2, mapping: { a: 3, b: 0, c: 0, d: 0, e: 0, f: 0 } },
      { dimension: "happiness_purpose", weight: 2, mapping: { a: 0, b: 3, c: 0, d: 0, e: 2, f: 3 } },
      { dimension: "values_independence", weight: 2, mapping: { a: 0, b: 0, c: 3, d: 0, e: 0, f: 0 } },
      { dimension: "values_security", weight: 2, mapping: { a: 0, b: 0, c: 0, d: 3, e: 0, f: 0 } },
      { dimension: "values_achievement", weight: 2, mapping: { a: 0, b: 0, c: 0, d: 0, e: 3, f: 0 } },
      { dimension: "values_helping", weight: 2, mapping: { a: 0, b: 0, c: 0, d: 0, e: 0, f: 3 } },
      { dimension: "archetype_lover", weight: 1, mapping: { a: 2, b: 0, c: 0, d: 0, e: 0, f: 0 } },
      { dimension: "archetype_explorer", weight: 1, mapping: { a: 0, b: 0, c: 2, d: 0, e: 0, f: 0 } },
      { dimension: "archetype_sage", weight: 1, mapping: { a: 0, b: 0, c: 0, d: 0, e: 2, f: 0 } },
      { dimension: "archetype_caregiver", weight: 1, mapping: { a: 0, b: 0, c: 0, d: 0, e: 0, f: 2 } },
    ],
  },

  {
    id: "s3_q13",
    segmentIndex: 3,
    text: "How much does making your family proud drive your decisions?",
    type: "slider",
    sliderConfig: {
      min: 1,
      max: 10,
      minLabel: "Barely at all",
      maxLabel: "It's a huge driver",
      step: 1,
    },
    required: true,
    scoring: [
      {
        dimension: "barrier_external_pressure",
        weight: 3,
        mapping: { "1": 0, "2": 0, "3": 1, "4": 1, "5": 2, "6": 2, "7": 3, "8": 3, "9": 4, "10": 5 },
      },
    ],
  },

  {
    id: "s3_q14",
    segmentIndex: 3,
    text: "How much do you believe you're actually capable of having the life you want?",
    subtext: "This is about belief, not effort — do you feel like it's possible *for you*?",
    type: "slider",
    sliderConfig: {
      min: 1,
      max: 10,
      minLabel: "I honestly don't believe I can get there",
      maxLabel: "I know I can make it happen",
      step: 1,
    },
    required: true,
    scoring: [
      {
        dimension: "happiness_self_worth",
        weight: 3,
        mapping: { "1": 0, "2": 1, "3": 2, "4": 3, "5": 4, "6": 5, "7": 6, "8": 7, "9": 8, "10": 9 },
      },
      {
        dimension: "barrier_self_worth",
        weight: 2,
        mapping: { "1": 5, "2": 4, "3": 3, "4": 2, "5": 2, "6": 1, "7": 1, "8": 0, "9": 0, "10": 0 },
      },
    ],
  },

  {
    id: "s3_q15",
    segmentIndex: 3,
    text: "How important is creativity and self-expression in your ideal life — art, music, design, writing, performance, or anything where you're the one making it?",
    type: "slider",
    sliderConfig: {
      min: 1,
      max: 10,
      minLabel: "Not a priority",
      maxLabel: "Central to everything I want",
      step: 1,
    },
    required: true,
    scoring: [
      {
        dimension: "values_creativity",
        weight: 3,
        mapping: { "1": 0, "2": 0, "3": 1, "4": 1, "5": 2, "6": 2, "7": 3, "8": 3, "9": 4, "10": 5 },
      },
      {
        dimension: "riasec_artistic",
        weight: 1,
        mapping: { "1": 0, "2": 0, "3": 1, "4": 1, "5": 2, "6": 2, "7": 3, "8": 3, "9": 4, "10": 5 },
      },
    ],
  },

  {
    id: "s3_q16",
    segmentIndex: 3,
    text: "How drawn are you to living and working in a way that involves travel, new environments, or unpredictable experiences?",
    type: "slider",
    sliderConfig: {
      min: 1,
      max: 10,
      minLabel: "I want roots, not wandering",
      maxLabel: "The more adventures, the better",
      step: 1,
    },
    required: true,
    scoring: [
      {
        dimension: "values_adventure",
        weight: 3,
        mapping: { "1": 0, "2": 0, "3": 1, "4": 1, "5": 2, "6": 2, "7": 3, "8": 3, "9": 4, "10": 5 },
      },
      {
        dimension: "big5_openness",
        weight: 1,
        mapping: { "1": 0, "2": 0, "3": 1, "4": 1, "5": 2, "6": 2, "7": 3, "8": 3, "9": 4, "10": 5 },
      },
      { dimension: "archetype_explorer", weight: 2, mapping: { "1": 0, "2": 0, "3": 1, "4": 1, "5": 2, "6": 2, "7": 3, "8": 3, "9": 4, "10": 5 } },
    ],
  },

  {
    id: "s3_q17",
    segmentIndex: 3,
    text: "How much does achieving something specific — reaching a goal, finishing a project, being excellent at something — drive you?",
    type: "slider",
    sliderConfig: {
      min: 1,
      max: 10,
      minLabel: "I'm more about the journey than the destination",
      maxLabel: "Achieving goals is what gets me out of bed",
      step: 1,
    },
    required: true,
    scoring: [
      {
        dimension: "values_achievement",
        weight: 3,
        mapping: { "1": 0, "2": 0, "3": 1, "4": 1, "5": 2, "6": 2, "7": 3, "8": 3, "9": 4, "10": 5 },
      },
      { dimension: "archetype_hero", weight: 2, mapping: { "1": 0, "2": 0, "3": 1, "4": 1, "5": 2, "6": 2, "7": 3, "8": 3, "9": 4, "10": 5 } },
    ],
  },

  {
    id: "s3_q18",
    segmentIndex: 3,
    text: "If you had to describe the kind of impact you'd love to have on the world — even if it's small — what would it be?",
    type: "text",
    required: false,
    scoring: [],
  },

  {
    id: "s3_q19",
    segmentIndex: 3,
    text: "When you imagine yourself at 30, what matters most to you about that version of your life?",
    type: "choice",
    options: [
      { label: "She's financially independent and secure", value: "a" },
      { label: "She's doing work she genuinely loves", value: "b" },
      { label: "She has deep, meaningful relationships", value: "c" },
      { label: "She's made a real difference for someone or something", value: "d" },
      { label: "She's free — no one controls her time or choices", value: "e" },
      { label: "She's proud of who she became", value: "f" },
    ],
    required: true,
    scoring: [
      { dimension: "values_security", weight: 2, mapping: { a: 3, b: 0, c: 0, d: 0, e: 0, f: 0 } },
      { dimension: "happiness_purpose", weight: 2, mapping: { a: 0, b: 3, c: 0, d: 2, e: 0, f: 0 } },
      { dimension: "values_balance", weight: 2, mapping: { a: 0, b: 0, c: 3, d: 0, e: 0, f: 0 } },
      { dimension: "values_helping", weight: 2, mapping: { a: 0, b: 0, c: 0, d: 3, e: 0, f: 0 } },
      { dimension: "values_independence", weight: 2, mapping: { a: 0, b: 0, c: 0, d: 0, e: 3, f: 0 } },
      { dimension: "happiness_self_worth", weight: 2, mapping: { a: 0, b: 0, c: 0, d: 0, e: 0, f: 3 } },
    ],
  },

  {
    id: "s3_q20",
    segmentIndex: 3,
    text: "How much do your values feel like *your own*, versus values you absorbed from your family or upbringing?",
    type: "slider",
    sliderConfig: {
      min: 1,
      max: 10,
      minLabel: "Mostly my family's — I haven't figured out mine yet",
      maxLabel: "Fully mine — I've done the work to know who I am",
      step: 1,
    },
    required: true,
    scoring: [
      {
        dimension: "barrier_external_pressure",
        weight: 2,
        mapping: { "1": 5, "2": 4, "3": 3, "4": 2, "5": 2, "6": 1, "7": 1, "8": 0, "9": 0, "10": 0 },
      },
      {
        dimension: "happiness_self_worth",
        weight: 1,
        mapping: { "1": 0, "2": 1, "3": 2, "4": 3, "5": 4, "6": 5, "7": 6, "8": 7, "9": 8, "10": 9 },
      },
      { dimension: "trait_authenticity", weight: 2, mapping: { "1": 0, "2": 1, "3": 2, "4": 3, "5": 4, "6": 5, "7": 6, "8": 7, "9": 8, "10": 9 } },
      { dimension: "trait_self_awareness", weight: 2, mapping: { "1": 0, "2": 1, "3": 2, "4": 3, "5": 4, "6": 5, "7": 6, "8": 7, "9": 8, "10": 9 } },
    ],
  },

  // NEW: Archetype — at your best (Hero, Caregiver, Explorer, Creator, Sage, Magician)
  {
    id: "s3_q21",
    segmentIndex: 3,
    text: "Which of these feels most like you at your best?",
    subtext: "Think about who you are when you're really in your element.",
    type: "choice",
    options: [
      { label: "The Hero — I rise to challenges, push through hard things, and prove what I'm capable of", value: "a" },
      { label: "The Caregiver — I show up for people, protect what I love, and give generously", value: "b" },
      { label: "The Explorer — I chase new experiences, forge my own path, and need freedom", value: "c" },
      { label: "The Creator — I make things, imagine new worlds, and need to express what's inside me", value: "d" },
      { label: "The Sage — I seek truth, love learning, and want to understand how things really work", value: "e" },
      { label: "The Magician — I transform things, see hidden possibilities, and make the impossible happen", value: "f" },
    ],
    required: true,
    scoring: [
      { dimension: "archetype_hero", weight: 3, mapping: { a: 3, b: 0, c: 0, d: 0, e: 0, f: 0 } },
      { dimension: "archetype_caregiver", weight: 3, mapping: { a: 0, b: 3, c: 0, d: 0, e: 0, f: 0 } },
      { dimension: "archetype_explorer", weight: 3, mapping: { a: 0, b: 0, c: 3, d: 0, e: 0, f: 0 } },
      { dimension: "archetype_creator", weight: 3, mapping: { a: 0, b: 0, c: 0, d: 3, e: 0, f: 0 } },
      { dimension: "archetype_sage", weight: 3, mapping: { a: 0, b: 0, c: 0, d: 0, e: 3, f: 0 } },
      { dimension: "archetype_magician", weight: 3, mapping: { a: 0, b: 0, c: 0, d: 0, e: 0, f: 3 } },
    ],
  },

  // NEW: Archetype — second set (Rebel, Ruler, Innocent, Jester, Lover, Everyperson)
  {
    id: "s3_q22",
    segmentIndex: 3,
    text: "And which of these also resonates — even if it's a smaller part of you?",
    subtext: "You might see yourself in more than one. Go with the one that fits most.",
    type: "choice",
    options: [
      { label: "The Rebel — I question everything, resist conformity, and believe systems need to change", value: "a" },
      { label: "The Ruler — I naturally take charge, set standards, and want to build something that lasts", value: "b" },
      { label: "The Innocent — I believe in goodness, trust people, and just want a simple, happy life", value: "c" },
      { label: "The Jester — I find the humor in everything, live in the moment, and make life lighter", value: "d" },
      { label: "The Lover — I value deep connection, beauty, and passion — in relationships and in life", value: "e" },
      { label: "The Everyperson — I care about belonging, realness, and connecting across difference", value: "f" },
    ],
    required: true,
    scoring: [
      { dimension: "archetype_rebel", weight: 3, mapping: { a: 3, b: 0, c: 0, d: 0, e: 0, f: 0 } },
      { dimension: "archetype_ruler", weight: 3, mapping: { a: 0, b: 3, c: 0, d: 0, e: 0, f: 0 } },
      { dimension: "archetype_innocent", weight: 3, mapping: { a: 0, b: 0, c: 3, d: 0, e: 0, f: 0 } },
      { dimension: "archetype_jester", weight: 3, mapping: { a: 0, b: 0, c: 0, d: 3, e: 0, f: 0 } },
      { dimension: "archetype_lover", weight: 3, mapping: { a: 0, b: 0, c: 0, d: 0, e: 3, f: 0 } },
      { dimension: "archetype_everyperson", weight: 3, mapping: { a: 0, b: 0, c: 0, d: 0, e: 0, f: 3 } },
    ],
  },
];

// ============================================================
// SEGMENT 4 — "How You Navigate Life" (Behavioral Patterns)
// Primary: barriers, ef_*, screen_* | Embedded: coping + decision-making
// ============================================================

const segment4Questions: Question[] = [
  {
    id: "s4_q1",
    segmentIndex: 4,
    text: "When you're facing a big decision — like a life direction, a relationship choice, or a major move — what usually happens?",
    type: "scenario",
    options: [
      { label: "I trust my gut and decide pretty quickly", value: "a" },
      { label: "I research everything, make a pros/cons list, and decide thoughtfully", value: "b" },
      { label: "I overthink it until the window to decide closes", value: "c" },
      { label: "I ask everyone I trust for their opinion and go with the majority", value: "d" },
      { label: "I avoid making the decision as long as possible", value: "e" },
    ],
    required: true,
    scoring: [
      { dimension: "ef_planning", weight: 2, mapping: { a: 2, b: 4, c: 1, d: 1, e: 0 } },
      { dimension: "barrier_avoidance", weight: 3, mapping: { a: 0, b: 0, c: 3, d: 1, e: 4 } },
      { dimension: "barrier_perfectionism", weight: 2, mapping: { a: 0, b: 1, c: 3, d: 0, e: 2 } },
      { dimension: "barrier_external_pressure", weight: 2, mapping: { a: 0, b: 0, c: 0, d: 3, e: 0 } },
      // a = intuitive/perceiving; b = thinking/judging; d = feeling side
      { dimension: "mbti_judging_perceiving", weight: 1, mapping: { a: 4, b: 1, c: 3, d: 3, e: 4 } },
      { dimension: "mbti_thinking_feeling", weight: 1, mapping: { a: 3, b: 1, c: 3, d: 5, e: 3 } },
    ],
  },

  {
    id: "s4_q2",
    segmentIndex: 4,
    text: "How often do you put off important tasks — even when you know you need to do them?",
    type: "likert",
    options: [
      { label: "Never", value: 1 },
      { label: "Rarely", value: 2 },
      { label: "Sometimes", value: 3 },
      { label: "Often", value: 4 },
      { label: "Very Often", value: 5 },
    ],
    required: true,
    scoring: [
      {
        dimension: "barrier_avoidance",
        weight: 3,
        mapping: { "1": 0, "2": 1, "3": 2, "4": 3, "5": 4 },
      },
      {
        dimension: "screen_adhd",
        weight: 2,
        mapping: { "1": 0, "2": 1, "3": 2, "4": 3, "5": 4 },
      },
      {
        dimension: "ef_task_initiation",
        weight: 3,
        mapping: { "1": 0, "2": 1, "3": 2, "4": 3, "5": 4 },
      },
    ],
  },

  {
    id: "s4_q3",
    segmentIndex: 4,
    text: "When life gets really stressful, how do you usually cope?",
    subtext: "Pick the one that happens most — not the one you wish you'd do.",
    type: "choice",
    options: [
      { label: "I talk to someone I trust", value: "a" },
      { label: "I get moving — exercise, walk, clean, do something physical", value: "b" },
      { label: "I withdraw and need time alone to process", value: "c" },
      { label: "I distract myself — social media, TV, gaming, food", value: "d" },
      { label: "I sleep a lot more than usual", value: "e" },
      { label: "I push through and keep functioning no matter what", value: "f" },
      { label: "I spiral — anxiety, crying, overthinking", value: "g" },
    ],
    required: true,
    scoring: [
      { dimension: "screen_depression", weight: 1, mapping: { a: 0, b: 0, c: 1, d: 1, e: 3, f: 0, g: 2 } },
      { dimension: "screen_anxiety", weight: 1, mapping: { a: 0, b: 0, c: 0, d: 0, e: 0, f: 0, g: 3 } },
      { dimension: "barrier_avoidance", weight: 2, mapping: { a: 0, b: 0, c: 1, d: 2, e: 2, f: 0, g: 0 } },
      { dimension: "big5_emotional_stability", weight: 1, mapping: { a: 2, b: 3, c: 1, d: 0, e: 0, f: 2, g: 0 } },
      // Talking = Feeling/Extraversion; withdrawing = Introversion
      { dimension: "mbti_extraversion_introversion", weight: 1, mapping: { a: 4, b: 3, c: 1, d: 2, e: 2, f: 3, g: 2 } },
      { dimension: "trait_resilience", weight: 1, mapping: { a: 2, b: 3, c: 1, d: 0, e: 0, f: 3, g: 0 } },
    ],
  },

  {
    id: "s4_q4",
    segmentIndex: 4,
    text: "How often do you feel genuinely stuck — like you can't move forward, even when you want to?",
    type: "likert",
    options: [
      { label: "Never", value: 1 },
      { label: "Rarely", value: 2 },
      { label: "Sometimes", value: 3 },
      { label: "Often", value: 4 },
      { label: "Very Often", value: 5 },
    ],
    required: true,
    scoring: [
      {
        dimension: "barrier_avoidance",
        weight: 2,
        mapping: { "1": 0, "2": 1, "3": 2, "4": 3, "5": 4 },
      },
      {
        dimension: "screen_depression",
        weight: 2,
        mapping: { "1": 0, "2": 1, "3": 2, "4": 3, "5": 4 },
      },
      {
        dimension: "ef_task_initiation",
        weight: 2,
        mapping: { "1": 0, "2": 1, "3": 2, "4": 3, "5": 4 },
      },
    ],
  },

  {
    id: "s4_q5",
    segmentIndex: 4,
    text: "I find it hard to start things, even when I genuinely want to do them.",
    subtext: "Like you have the desire but can't get momentum going.",
    type: "likert",
    options: [
      { label: "Strongly Disagree", value: 1 },
      { label: "Disagree", value: 2 },
      { label: "Neutral", value: 3 },
      { label: "Agree", value: 4 },
      { label: "Strongly Agree", value: 5 },
    ],
    required: true,
    scoring: [
      {
        dimension: "ef_task_initiation",
        weight: 3,
        mapping: { "1": 0, "2": 1, "3": 2, "4": 3, "5": 4 },
      },
      {
        dimension: "screen_adhd",
        weight: 2,
        mapping: { "1": 0, "2": 1, "3": 2, "4": 3, "5": 4 },
      },
      {
        dimension: "screen_depression",
        weight: 2,
        mapping: { "1": 0, "2": 1, "3": 2, "4": 3, "5": 4 },
      },
    ],
  },

  {
    id: "s4_q6",
    segmentIndex: 4,
    text: "How comfortable are you asking for help when you genuinely need it?",
    type: "slider",
    sliderConfig: {
      min: 1,
      max: 10,
      minLabel: "I'd almost never ask — I handle things alone",
      maxLabel: "Totally comfortable — I know when to reach out",
      step: 1,
    },
    required: true,
    scoring: [
      {
        dimension: "barrier_self_worth",
        weight: 2,
        mapping: { "1": 4, "2": 3, "3": 3, "4": 2, "5": 2, "6": 1, "7": 1, "8": 0, "9": 0, "10": 0 },
      },
      {
        dimension: "barrier_isolation",
        weight: 2,
        mapping: { "1": 4, "2": 3, "3": 2, "4": 2, "5": 1, "6": 1, "7": 0, "8": 0, "9": 0, "10": 0 },
      },
    ],
  },

  {
    id: "s4_q7",
    segmentIndex: 4,
    text: "When someone gives you feedback — even if they mean well — what's your first reaction?",
    type: "scenario",
    options: [
      { label: "I genuinely appreciate it and use it", value: "a" },
      { label: "I listen, but it stings a little even if I don't show it", value: "b" },
      { label: "It really gets to me — I have a hard time not taking it personally", value: "c" },
      { label: "I get defensive first, then process it later", value: "d" },
      { label: "I immediately doubt myself and feel like I can't do anything right", value: "e" },
    ],
    required: true,
    scoring: [
      { dimension: "barrier_self_worth", weight: 3, mapping: { a: 0, b: 1, c: 3, d: 2, e: 4 } },
      { dimension: "screen_emotional_dysregulation", weight: 2, mapping: { a: 0, b: 0, c: 2, d: 2, e: 3 } },
      { dimension: "screen_anxiety", weight: 1, mapping: { a: 0, b: 0, c: 1, d: 0, e: 3 } },
      { dimension: "trait_resilience", weight: 1, mapping: { a: 3, b: 2, c: 1, d: 1, e: 0 } },
    ],
  },

  {
    id: "s4_q8",
    segmentIndex: 4,
    text: "How often do you feel anxious about things that other people in your life seem to handle without much stress?",
    type: "likert",
    options: [
      { label: "Never", value: 1 },
      { label: "Rarely", value: 2 },
      { label: "Sometimes", value: 3 },
      { label: "Often", value: 4 },
      { label: "Very Often", value: 5 },
    ],
    required: true,
    scoring: [
      {
        dimension: "screen_anxiety",
        weight: 3,
        mapping: { "1": 0, "2": 1, "3": 2, "4": 3, "5": 4 },
      },
      {
        dimension: "big5_emotional_stability",
        weight: 2,
        mapping: { "1": 4, "2": 3, "3": 2, "4": 1, "5": 0 },
      },
    ],
  },

  {
    id: "s4_q9",
    segmentIndex: 4,
    text: "I often lose track of time and miss deadlines or appointments.",
    type: "likert",
    options: [
      { label: "Strongly Disagree", value: 1 },
      { label: "Disagree", value: 2 },
      { label: "Neutral", value: 3 },
      { label: "Agree", value: 4 },
      { label: "Strongly Agree", value: 5 },
    ],
    required: true,
    scoring: [
      {
        dimension: "screen_adhd",
        weight: 3,
        mapping: { "1": 0, "2": 1, "3": 2, "4": 3, "5": 4 },
      },
      {
        dimension: "ef_planning",
        weight: 2,
        mapping: { "1": 0, "2": 1, "3": 2, "4": 3, "5": 4 },
      },
    ],
  },

  {
    id: "s4_q10",
    segmentIndex: 4,
    text: "Keeping track of responsibilities and commitments — appointments, deadlines, tasks — feels...",
    type: "slider",
    sliderConfig: {
      min: 1,
      max: 10,
      minLabel: "Completely overwhelming — I can't keep up",
      maxLabel: "Easy — I stay on top of it naturally",
      step: 1,
    },
    required: true,
    scoring: [
      {
        dimension: "ef_planning",
        weight: 3,
        mapping: { "1": 5, "2": 4, "3": 3, "4": 2, "5": 2, "6": 1, "7": 1, "8": 0, "9": 0, "10": 0 },
      },
      {
        dimension: "screen_adhd",
        weight: 2,
        mapping: { "1": 4, "2": 3, "3": 2, "4": 2, "5": 1, "6": 1, "7": 0, "8": 0, "9": 0, "10": 0 },
      },
    ],
  },

  {
    id: "s4_q11",
    segmentIndex: 4,
    text: "I tend to start a lot of projects or plans that I never end up finishing.",
    type: "likert",
    options: [
      { label: "Strongly Disagree", value: 1 },
      { label: "Disagree", value: 2 },
      { label: "Neutral", value: 3 },
      { label: "Agree", value: 4 },
      { label: "Strongly Agree", value: 5 },
    ],
    required: true,
    scoring: [
      {
        dimension: "screen_adhd",
        weight: 3,
        mapping: { "1": 0, "2": 1, "3": 2, "4": 3, "5": 4 },
      },
      {
        dimension: "ef_task_initiation",
        weight: 2,
        mapping: { "1": 0, "2": 1, "3": 2, "4": 3, "5": 4 },
      },
      {
        dimension: "barrier_avoidance",
        weight: 1,
        mapping: { "1": 0, "2": 1, "3": 2, "4": 3, "5": 4 },
      },
    ],
  },

  {
    id: "s4_q12",
    segmentIndex: 4,
    text: "When things get hard, how likely are you to give up or step back rather than push through?",
    type: "slider",
    sliderConfig: {
      min: 1,
      max: 10,
      minLabel: "I give up easily when things get hard",
      maxLabel: "I almost never quit — I push through",
      step: 1,
    },
    required: true,
    scoring: [
      {
        dimension: "barrier_avoidance",
        weight: 2,
        mapping: { "1": 5, "2": 4, "3": 3, "4": 2, "5": 2, "6": 1, "7": 1, "8": 0, "9": 0, "10": 0 },
      },
      {
        dimension: "big5_conscientiousness",
        weight: 1,
        mapping: { "1": 0, "2": 1, "3": 2, "4": 3, "5": 4, "6": 5, "7": 6, "8": 7, "9": 8, "10": 9 },
      },
      { dimension: "trait_resilience", weight: 2, mapping: { "1": 0, "2": 1, "3": 2, "4": 3, "5": 4, "6": 5, "7": 6, "8": 7, "9": 8, "10": 9 } },
    ],
  },

  {
    id: "s4_q13",
    segmentIndex: 4,
    text: "How much does the fear of failing — or looking stupid — hold you back from trying things?",
    type: "slider",
    sliderConfig: {
      min: 1,
      max: 10,
      minLabel: "It doesn't hold me back at all",
      maxLabel: "It stops me from trying constantly",
      step: 1,
    },
    required: true,
    scoring: [
      {
        dimension: "barrier_self_worth",
        weight: 2,
        mapping: { "1": 0, "2": 0, "3": 1, "4": 1, "5": 2, "6": 2, "7": 3, "8": 3, "9": 4, "10": 5 },
      },
      {
        dimension: "barrier_perfectionism",
        weight: 2,
        mapping: { "1": 0, "2": 0, "3": 1, "4": 1, "5": 2, "6": 2, "7": 3, "8": 3, "9": 4, "10": 5 },
      },
      {
        dimension: "screen_anxiety",
        weight: 2,
        mapping: { "1": 0, "2": 0, "3": 1, "4": 1, "5": 2, "6": 2, "7": 3, "8": 3, "9": 4, "10": 5 },
      },
    ],
  },

  {
    id: "s4_q14",
    segmentIndex: 4,
    text: "I tend to act on impulse and regret it later.",
    type: "likert",
    options: [
      { label: "Strongly Disagree", value: 1 },
      { label: "Disagree", value: 2 },
      { label: "Neutral", value: 3 },
      { label: "Agree", value: 4 },
      { label: "Strongly Agree", value: 5 },
    ],
    required: true,
    scoring: [
      {
        dimension: "ef_impulse_control",
        weight: 3,
        mapping: { "1": 0, "2": 1, "3": 2, "4": 3, "5": 4 },
      },
      {
        dimension: "screen_adhd",
        weight: 2,
        mapping: { "1": 0, "2": 1, "3": 2, "4": 3, "5": 4 },
      },
    ],
  },

  {
    id: "s4_q15",
    segmentIndex: 4,
    text: "How often do you find yourself saying yes to things you really don't want to do — just to avoid letting someone down?",
    type: "likert",
    options: [
      { label: "Never", value: 1 },
      { label: "Rarely", value: 2 },
      { label: "Sometimes", value: 3 },
      { label: "Often", value: 4 },
      { label: "Very Often", value: 5 },
    ],
    required: true,
    scoring: [
      {
        dimension: "barrier_external_pressure",
        weight: 2,
        mapping: { "1": 0, "2": 1, "3": 2, "4": 3, "5": 4 },
      },
      {
        dimension: "big5_agreeableness",
        weight: 1,
        mapping: { "1": 0, "2": 1, "3": 2, "4": 3, "5": 4 },
      },
      {
        dimension: "barrier_self_worth",
        weight: 1,
        mapping: { "1": 0, "2": 1, "3": 2, "4": 3, "5": 4 },
      },
      // People-pleasing = low authenticity
      { dimension: "trait_authenticity", weight: 2, mapping: { "1": 4, "2": 3, "3": 2, "4": 1, "5": 0 } },
    ],
  },

  {
    id: "s4_q16",
    segmentIndex: 4,
    text: "When you have a big goal or project, how do you usually approach it?",
    type: "scenario",
    options: [
      { label: "I break it into steps and work through it systematically", value: "a" },
      { label: "I dive in and figure it out as I go", value: "b" },
      { label: "I think about it a lot but struggle to start", value: "c" },
      { label: "I get excited at the start but lose steam partway through", value: "d" },
      { label: "I wait until the last possible moment and then go into overdrive", value: "e" },
    ],
    required: true,
    scoring: [
      { dimension: "ef_planning", weight: 3, mapping: { a: 4, b: 2, c: 1, d: 1, e: 0 } },
      { dimension: "ef_task_initiation", weight: 2, mapping: { a: 3, b: 3, c: 0, d: 2, e: 1 } },
      { dimension: "screen_adhd", weight: 2, mapping: { a: 0, b: 0, c: 2, d: 3, e: 3 } },
      { dimension: "barrier_perfectionism", weight: 1, mapping: { a: 0, b: 0, c: 3, d: 0, e: 0 } },
      // a = Judging style; b = Perceiving style
      { dimension: "mbti_judging_perceiving", weight: 1, mapping: { a: 1, b: 5, c: 2, d: 4, e: 4 } },
    ],
  },

  {
    id: "s4_q17",
    segmentIndex: 4,
    text: "How often do you feel overwhelmed by ordinary daily life — stuff that seems manageable for everyone else?",
    type: "likert",
    options: [
      { label: "Never", value: 1 },
      { label: "Rarely", value: 2 },
      { label: "Sometimes", value: 3 },
      { label: "Often", value: 4 },
      { label: "Very Often", value: 5 },
    ],
    required: true,
    scoring: [
      {
        dimension: "screen_anxiety",
        weight: 2,
        mapping: { "1": 0, "2": 1, "3": 2, "4": 3, "5": 4 },
      },
      {
        dimension: "screen_adhd",
        weight: 2,
        mapping: { "1": 0, "2": 1, "3": 2, "4": 3, "5": 4 },
      },
      {
        dimension: "screen_depression",
        weight: 1,
        mapping: { "1": 0, "2": 1, "3": 2, "4": 3, "5": 4 },
      },
    ],
  },

  {
    id: "s4_q18",
    segmentIndex: 4,
    text: "When you think about the future, which feeling shows up most?",
    type: "choice",
    options: [
      { label: "Hopeful and excited — I'm looking forward to it", value: "a" },
      { label: "Calm — I feel like it'll work out", value: "b" },
      { label: "Uncertain — I just don't know what's ahead", value: "c" },
      { label: "Anxious — a lot could go wrong", value: "d" },
      { label: "Overwhelmed — it's hard to even think about", value: "e" },
      { label: "Numb or disconnected — I try not to think about it", value: "f" },
    ],
    required: true,
    scoring: [
      { dimension: "happiness_life_satisfaction", weight: 2, mapping: { a: 4, b: 3, c: 1, d: 0, e: 0, f: 0 } },
      { dimension: "screen_anxiety", weight: 2, mapping: { a: 0, b: 0, c: 0, d: 4, e: 3, f: 0 } },
      { dimension: "screen_depression", weight: 2, mapping: { a: 0, b: 0, c: 0, d: 0, e: 2, f: 4 } },
      { dimension: "screen_dissociation", weight: 1, mapping: { a: 0, b: 0, c: 0, d: 0, e: 0, f: 3 } },
      { dimension: "archetype_innocent", weight: 1, mapping: { a: 2, b: 2, c: 0, d: 0, e: 0, f: 0 } },
    ],
  },

  {
    id: "s4_q19",
    segmentIndex: 4,
    text: "I often feel like I'm too much for people — too emotional, too intense, too needy.",
    type: "likert",
    options: [
      { label: "Strongly Disagree", value: 1 },
      { label: "Disagree", value: 2 },
      { label: "Neutral", value: 3 },
      { label: "Agree", value: 4 },
      { label: "Strongly Agree", value: 5 },
    ],
    required: true,
    scoring: [
      {
        dimension: "barrier_self_worth",
        weight: 3,
        mapping: { "1": 0, "2": 1, "3": 2, "4": 3, "5": 4 },
      },
      {
        dimension: "screen_emotional_dysregulation",
        weight: 2,
        mapping: { "1": 0, "2": 1, "3": 2, "4": 3, "5": 4 },
      },
    ],
  },

  {
    id: "s4_q20",
    segmentIndex: 4,
    text: "How often do you follow through on the commitments you make to yourself — like goals or habits you set?",
    type: "likert",
    options: [
      { label: "Never", value: 1 },
      { label: "Rarely", value: 2 },
      { label: "Sometimes", value: 3 },
      { label: "Often", value: 4 },
      { label: "Very Often", value: 5 },
    ],
    required: true,
    scoring: [
      {
        dimension: "big5_conscientiousness",
        weight: 2,
        mapping: { "1": 0, "2": 1, "3": 2, "4": 3, "5": 4 },
      },
      {
        dimension: "ef_task_initiation",
        weight: 2,
        mapping: { "1": 0, "2": 1, "3": 2, "4": 3, "5": 4 },
      },
      {
        dimension: "screen_adhd",
        weight: 1,
        mapping: { "1": 3, "2": 2, "3": 1, "4": 0, "5": 0 },
      },
      { dimension: "trait_resilience", weight: 1, mapping: { "1": 0, "2": 1, "3": 2, "4": 3, "5": 4 } },
    ],
  },

  // NEW: Archetype-mapping scenario (instinct when something isn't working)
  {
    id: "s4_q21",
    segmentIndex: 4,
    text: "When something in my life isn't working, my first instinct is to...",
    type: "choice",
    options: [
      { label: "Fix it myself — push harder and figure it out through effort", value: "a" },
      { label: "Check in on the people around me first — make sure they're okay before I deal with it", value: "b" },
      { label: "Walk away and find a completely new path — this clearly isn't it", value: "c" },
      { label: "Tear it down and start fresh — something fundamental needs to change", value: "d" },
      { label: "Reimagine it — what could this become if I approach it differently?", value: "e" },
      { label: "Research and understand what's actually going wrong before I act", value: "f" },
    ],
    required: true,
    scoring: [
      { dimension: "archetype_hero", weight: 2, mapping: { a: 3, b: 0, c: 0, d: 0, e: 0, f: 0 } },
      { dimension: "archetype_caregiver", weight: 2, mapping: { a: 0, b: 3, c: 0, d: 0, e: 0, f: 0 } },
      { dimension: "archetype_explorer", weight: 2, mapping: { a: 0, b: 0, c: 3, d: 0, e: 0, f: 0 } },
      { dimension: "archetype_rebel", weight: 2, mapping: { a: 0, b: 0, c: 0, d: 3, e: 0, f: 0 } },
      { dimension: "archetype_creator", weight: 2, mapping: { a: 0, b: 0, c: 0, d: 0, e: 3, f: 0 } },
      { dimension: "archetype_sage", weight: 2, mapping: { a: 0, b: 0, c: 0, d: 0, e: 0, f: 3 } },
      { dimension: "trait_resilience", weight: 1, mapping: { a: 3, b: 1, c: 2, d: 2, e: 2, f: 2 } },
    ],
  },

  // NEW: S/N — details vs. big picture (inverted)
  {
    id: "s4_q22",
    segmentIndex: 4,
    text: "I pay more attention to the specific details in front of me than to the big picture.",
    type: "likert",
    options: [
      { label: "Strongly Disagree", value: 1 },
      { label: "Disagree", value: 2 },
      { label: "Neutral", value: 3 },
      { label: "Agree", value: 4 },
      { label: "Strongly Agree", value: 5 },
    ],
    required: true,
    scoring: [
      // High agreement = Sensing (details); so inverted for N scale
      { dimension: "mbti_sensing_intuition", weight: 2, mapping: { "1": 5, "2": 4, "3": 3, "4": 2, "5": 1 } },
    ],
  },

  // NEW: T/F — logical analysis vs. emotional processing (inverted)
  {
    id: "s4_q23",
    segmentIndex: 4,
    text: "When things go wrong, I'm more likely to analyze the problem logically than to process it emotionally first.",
    type: "likert",
    options: [
      { label: "Strongly Disagree", value: 1 },
      { label: "Disagree", value: 2 },
      { label: "Neutral", value: 3 },
      { label: "Agree", value: 4 },
      { label: "Strongly Agree", value: 5 },
    ],
    required: true,
    scoring: [
      // High = Thinking, Low = Feeling
      { dimension: "mbti_thinking_feeling", weight: 2, mapping: { "1": 5, "2": 4, "3": 3, "4": 2, "5": 1 } },
      { dimension: "trait_self_awareness", weight: 1, mapping: { "1": 1, "2": 2, "3": 3, "4": 3, "5": 3 } },
    ],
  },
];

// ============================================================
// SEGMENT 5 — "Your Life Right Now" (Context, Dreams & Barriers)
// Most personal segment — direct happiness + open reflection
// ============================================================

const segment5Questions: Question[] = [
  {
    id: "s5_q1",
    segmentIndex: 5,
    text: "On a scale of 1-10, how happy would you honestly say you are right now in life?",
    subtext: "Not what you tell people — what's actually true.",
    type: "slider",
    sliderConfig: {
      min: 1,
      max: 10,
      minLabel: "Not happy at all",
      maxLabel: "Genuinely happy",
      step: 1,
    },
    required: true,
    scoring: [
      {
        dimension: "happiness_life_satisfaction",
        weight: 3,
        mapping: { "1": 0, "2": 1, "3": 2, "4": 3, "5": 4, "6": 5, "7": 6, "8": 7, "9": 8, "10": 9 },
      },
      {
        dimension: "screen_depression",
        weight: 2,
        mapping: { "1": 5, "2": 4, "3": 3, "4": 2, "5": 2, "6": 1, "7": 0, "8": 0, "9": 0, "10": 0 },
      },
    ],
  },

  {
    id: "s5_q2",
    segmentIndex: 5,
    text: "What's the biggest thing holding you back from the life you want right now?",
    subtext: "Write honestly — this goes directly into your personalized results.",
    type: "text",
    required: false,
    scoring: [],
  },

  {
    id: "s5_q3",
    segmentIndex: 5,
    text: "How supported do you feel by the people in your life right now?",
    type: "slider",
    sliderConfig: {
      min: 1,
      max: 10,
      minLabel: "Very alone — I feel like I'm on my own",
      maxLabel: "Deeply supported — I have people who have my back",
      step: 1,
    },
    required: true,
    scoring: [
      {
        dimension: "barrier_isolation",
        weight: 3,
        mapping: { "1": 5, "2": 4, "3": 3, "4": 2, "5": 2, "6": 1, "7": 1, "8": 0, "9": 0, "10": 0 },
      },
      {
        dimension: "happiness_life_satisfaction",
        weight: 2,
        mapping: { "1": 0, "2": 1, "3": 2, "4": 3, "5": 4, "6": 5, "7": 6, "8": 7, "9": 8, "10": 9 },
      },
    ],
  },

  {
    id: "s5_q4",
    segmentIndex: 5,
    text: "Is there something you've always wanted to try or explore but felt like you couldn't? What is it?",
    subtext: "There are no silly answers here. Big or small.",
    type: "text",
    required: false,
    scoring: [],
  },

  {
    id: "s5_q5",
    segmentIndex: 5,
    text: "How would you describe your energy levels on most days?",
    type: "slider",
    sliderConfig: {
      min: 1,
      max: 10,
      minLabel: "Exhausted — I'm running on empty",
      maxLabel: "Energized — I feel awake and alive",
      step: 1,
    },
    required: true,
    scoring: [
      {
        dimension: "happiness_energy",
        weight: 3,
        mapping: { "1": 0, "2": 1, "3": 2, "4": 3, "5": 4, "6": 5, "7": 6, "8": 7, "9": 8, "10": 9 },
      },
      {
        dimension: "screen_depression",
        weight: 2,
        mapping: { "1": 4, "2": 3, "3": 2, "4": 2, "5": 1, "6": 1, "7": 0, "8": 0, "9": 0, "10": 0 },
      },
    ],
  },

  {
    id: "s5_q6",
    segmentIndex: 5,
    text: "Do you feel like your education so far — school, college, training, or self-learning — has set you up well for your future?",
    type: "likert",
    options: [
      { label: "Strongly Disagree", value: 1 },
      { label: "Disagree", value: 2 },
      { label: "Neutral", value: 3 },
      { label: "Agree", value: 4 },
      { label: "Strongly Agree", value: 5 },
    ],
    required: true,
    scoring: [
      {
        dimension: "happiness_life_satisfaction",
        weight: 1,
        mapping: { "1": 0, "2": 1, "3": 2, "4": 3, "5": 4 },
      },
      {
        dimension: "barrier_external_pressure",
        weight: 1,
        mapping: { "1": 2, "2": 1, "3": 0, "4": 0, "5": 0 },
      },
    ],
  },

  {
    id: "s5_q7",
    segmentIndex: 5,
    text: "If money didn't exist and no one's opinion of you mattered — what would you actually do with your life?",
    subtext: "Don't edit yourself. First instinct.",
    type: "text",
    required: false,
    scoring: [],
  },

  {
    id: "s5_q8",
    segmentIndex: 5,
    text: "How often do you compare yourself to people your age and feel like you're behind?",
    type: "likert",
    options: [
      { label: "Never", value: 1 },
      { label: "Rarely", value: 2 },
      { label: "Sometimes", value: 3 },
      { label: "Often", value: 4 },
      { label: "Very Often", value: 5 },
    ],
    required: true,
    scoring: [
      {
        dimension: "barrier_self_worth",
        weight: 3,
        mapping: { "1": 0, "2": 1, "3": 2, "4": 3, "5": 4 },
      },
      {
        dimension: "screen_anxiety",
        weight: 1,
        mapping: { "1": 0, "2": 1, "3": 2, "4": 3, "5": 4 },
      },
      {
        dimension: "screen_depression",
        weight: 1,
        mapping: { "1": 0, "2": 1, "3": 2, "4": 3, "5": 4 },
      },
    ],
  },

  {
    id: "s5_q9",
    segmentIndex: 5,
    text: "Do you have someone in your life you can talk to about anything — your real feelings, your fears, the stuff you don't post about?",
    type: "choice",
    options: [
      { label: "Yes — I have at least one person I trust completely", value: "a" },
      { label: "Sort of — there's someone, but I don't always feel comfortable being fully honest", value: "b" },
      { label: "Not really — I mostly keep things to myself", value: "c" },
      { label: "No — I feel like I have no one to talk to", value: "d" },
    ],
    required: true,
    scoring: [
      {
        dimension: "barrier_isolation",
        weight: 3,
        mapping: { a: 0, b: 1, c: 3, d: 5 },
      },
      {
        dimension: "happiness_life_satisfaction",
        weight: 2,
        mapping: { a: 4, b: 2, c: 1, d: 0 },
      },
      {
        dimension: "screen_depression",
        weight: 1,
        mapping: { a: 0, b: 0, c: 2, d: 4 },
      },
    ],
  },

  {
    id: "s5_q10",
    segmentIndex: 5,
    text: "What are 3 things you're genuinely good at?",
    subtext: "This can be anything — skills, qualities, how you make people feel. No false modesty.",
    type: "text",
    required: false,
    scoring: [],
  },

  {
    id: "s5_q11",
    segmentIndex: 5,
    text: "Right now, which of these best captures where you are in life?",
    type: "choice",
    options: [
      { label: "Exploring — I'm figuring things out, and that feels okay", value: "a" },
      { label: "Stuck — I know I want more but can't seem to move", value: "b" },
      { label: "Anxious — I feel pressure and uncertainty more than anything", value: "c" },
      { label: "Hopeful — things aren't perfect but I feel like they're turning", value: "d" },
      { label: "Numb — I'm going through the motions but not really feeling much", value: "e" },
      { label: "Excited — I have momentum and I'm ready to go", value: "f" },
    ],
    required: true,
    scoring: [
      { dimension: "happiness_life_satisfaction", weight: 2, mapping: { a: 3, b: 1, c: 1, d: 3, e: 0, f: 5 } },
      { dimension: "screen_depression", weight: 2, mapping: { a: 0, b: 2, c: 1, d: 0, e: 4, f: 0 } },
      { dimension: "screen_anxiety", weight: 2, mapping: { a: 0, b: 0, c: 4, d: 0, e: 0, f: 0 } },
      { dimension: "screen_dissociation", weight: 1, mapping: { a: 0, b: 0, c: 0, d: 0, e: 3, f: 0 } },
      { dimension: "barrier_avoidance", weight: 1, mapping: { a: 0, b: 3, c: 1, d: 0, e: 2, f: 0 } },
    ],
  },

  {
    id: "s5_q12",
    segmentIndex: 5,
    text: "How often do you feel lonely — even when you're physically around other people?",
    type: "likert",
    options: [
      { label: "Never", value: 1 },
      { label: "Rarely", value: 2 },
      { label: "Sometimes", value: 3 },
      { label: "Often", value: 4 },
      { label: "Very Often", value: 5 },
    ],
    required: true,
    scoring: [
      {
        dimension: "barrier_isolation",
        weight: 3,
        mapping: { "1": 0, "2": 1, "3": 2, "4": 3, "5": 4 },
      },
      {
        dimension: "screen_depression",
        weight: 2,
        mapping: { "1": 0, "2": 1, "3": 2, "4": 3, "5": 4 },
      },
      {
        dimension: "screen_dissociation",
        weight: 1,
        mapping: { "1": 0, "2": 0, "3": 1, "4": 2, "5": 3 },
      },
    ],
  },

  {
    id: "s5_q13",
    segmentIndex: 5,
    text: "What does a 'good life' look like to you — your version, not anyone else's?",
    subtext: "Paint the picture, however it looks.",
    type: "text",
    required: false,
    scoring: [],
  },

  {
    id: "s5_q14",
    segmentIndex: 5,
    text: "If you could change one thing about your life right now — just one — what would it be?",
    type: "text",
    required: false,
    scoring: [],
  },

  {
    id: "s5_q15",
    segmentIndex: 5,
    text: "How hopeful do you feel that things can actually get better for you — not just someday, but in the next year?",
    type: "slider",
    sliderConfig: {
      min: 1,
      max: 10,
      minLabel: "I honestly don't feel much hope",
      maxLabel: "I genuinely believe things will improve",
      step: 1,
    },
    required: true,
    scoring: [
      {
        dimension: "happiness_life_satisfaction",
        weight: 3,
        mapping: { "1": 0, "2": 1, "3": 2, "4": 3, "5": 4, "6": 5, "7": 6, "8": 7, "9": 8, "10": 9 },
      },
      {
        dimension: "screen_depression",
        weight: 2,
        mapping: { "1": 5, "2": 4, "3": 3, "4": 2, "5": 2, "6": 1, "7": 0, "8": 0, "9": 0, "10": 0 },
      },
      {
        dimension: "happiness_self_worth",
        weight: 2,
        mapping: { "1": 0, "2": 1, "3": 2, "4": 3, "5": 4, "6": 5, "7": 6, "8": 7, "9": 8, "10": 9 },
      },
    ],
  },

  // NEW: Story chapter — archetype narrative signal
  {
    id: "s5_q16",
    segmentIndex: 5,
    text: "If your life were a story, what chapter would you say you're in right now?",
    subtext: "There's no right answer — just describe it how it feels. A sentence is fine.",
    type: "text",
    required: false,
    scoring: [],
  },

  // NEW: Word resonance — archetype/value need signal
  {
    id: "s5_q17",
    segmentIndex: 5,
    text: "Pick the word that resonates most with what you need right now.",
    type: "choice",
    options: [
      { label: "Adventure", value: "a" },
      { label: "Safety", value: "b" },
      { label: "Connection", value: "c" },
      { label: "Freedom", value: "d" },
      { label: "Purpose", value: "e" },
      { label: "Joy", value: "f" },
    ],
    required: true,
    scoring: [
      { dimension: "archetype_explorer", weight: 2, mapping: { a: 3, b: 0, c: 0, d: 1, e: 0, f: 0 } },
      { dimension: "archetype_innocent", weight: 2, mapping: { a: 0, b: 3, c: 1, d: 0, e: 0, f: 1 } },
      { dimension: "archetype_lover", weight: 2, mapping: { a: 0, b: 0, c: 3, d: 0, e: 0, f: 1 } },
      { dimension: "archetype_rebel", weight: 2, mapping: { a: 1, b: 0, c: 0, d: 3, e: 0, f: 0 } },
      { dimension: "archetype_hero", weight: 2, mapping: { a: 0, b: 0, c: 0, d: 0, e: 3, f: 0 } },
      { dimension: "archetype_jester", weight: 2, mapping: { a: 1, b: 0, c: 1, d: 1, e: 0, f: 3 } },
      { dimension: "values_adventure", weight: 1, mapping: { a: 3, b: 0, c: 0, d: 2, e: 0, f: 0 } },
      { dimension: "values_security", weight: 1, mapping: { a: 0, b: 3, c: 0, d: 0, e: 0, f: 0 } },
      { dimension: "values_balance", weight: 1, mapping: { a: 0, b: 0, c: 2, d: 0, e: 0, f: 2 } },
      { dimension: "values_independence", weight: 1, mapping: { a: 1, b: 0, c: 0, d: 3, e: 0, f: 0 } },
      { dimension: "happiness_purpose", weight: 1, mapping: { a: 0, b: 0, c: 0, d: 0, e: 3, f: 0 } },
    ],
  },
];

// ============================================================
// ASSEMBLED SEGMENTS
// ============================================================

export const segments: Segment[] = [
  {
    index: 0,
    title: "Who You Are",
    subtitle: "Interests & Curiosity",
    description:
      "There are no wrong answers in this section — we're just exploring what genuinely lights you up. These questions are about what you're naturally drawn to, not what you think you should be into.",
    icon: "Sparkles",
    estimatedMinutes: 15,
    questions: segment0Questions,
  },
  {
    index: 1,
    title: "How You Think",
    subtitle: "Your Cognitive Style",
    description:
      "Every brain is wired a little differently — and that's a good thing. This section explores how you naturally process information, learn, and think. None of this is about intelligence; it's about style.",
    icon: "Brain",
    estimatedMinutes: 15,
    questions: segment1Questions,
  },
  {
    index: 2,
    title: "Your Inner World",
    subtitle: "Personality & Emotional Life",
    description:
      "This is where things get a little deeper. We'll explore your personality, your emotional landscape, and some of the inner experiences that shape how you move through the world. Be as honest as you can — this is just for you.",
    icon: "Heart",
    estimatedMinutes: 15,
    questions: segment2Questions,
  },
  {
    index: 3,
    title: "What Matters to You",
    subtitle: "Values & Motivation",
    description:
      "What actually drives you? This section is about getting clear on what you genuinely care about — not what you think you're supposed to want. Some choices might feel hard, and that's good. The tension is where the insight lives.",
    icon: "Compass",
    estimatedMinutes: 15,
    questions: segment3Questions,
  },
  {
    index: 4,
    title: "How You Navigate Life",
    subtitle: "Patterns & Habits",
    description:
      "How do you actually move through the world — the decisions you make, the way you handle stress, the things that trip you up? This section looks at your real patterns, not your ideal ones. Be honest about how it actually goes.",
    icon: "Map",
    estimatedMinutes: 15,
    questions: segment4Questions,
  },
  {
    index: 5,
    title: "Your Life Right Now",
    subtitle: "Context, Dreams & What's Next",
    description:
      "The final stretch — and the most personal. This section is about your life exactly as it is today: what's working, what isn't, and what you're hoping for. There are no right answers here, only honest ones.",
    icon: "Sunrise",
    estimatedMinutes: 15,
    questions: segment5Questions,
  },
];

// ============================================================
// FLAT QUESTION ARRAY (convenience export)
// ============================================================

export const allQuestions: Question[] = segments.flatMap((s) => s.questions);

// ============================================================
// SCORING DIMENSION REGISTRY
// ============================================================

export type ScoringDimension =
  // RIASEC
  | "riasec_realistic"
  | "riasec_investigative"
  | "riasec_artistic"
  | "riasec_social"
  | "riasec_enterprising"
  | "riasec_conventional"
  // Big Five
  | "big5_openness"
  | "big5_conscientiousness"
  | "big5_extraversion"
  | "big5_agreeableness"
  | "big5_emotional_stability"
  // MBTI Dichotomies
  // 5 = strong Extraversion / Intuition / Feeling / Perceiving
  // 1 = strong Introversion / Sensing / Thinking / Judging
  | "mbti_extraversion_introversion"
  | "mbti_sensing_intuition"
  | "mbti_thinking_feeling"
  | "mbti_judging_perceiving"
  // Jungian Archetypes (score all 12, surface top 2-3)
  | "archetype_hero"
  | "archetype_caregiver"
  | "archetype_explorer"
  | "archetype_rebel"
  | "archetype_creator"
  | "archetype_sage"
  | "archetype_magician"
  | "archetype_ruler"
  | "archetype_innocent"
  | "archetype_jester"
  | "archetype_lover"
  | "archetype_everyperson"
  // Character Traits
  | "trait_resilience"
  | "trait_empathy"
  | "trait_curiosity"
  | "trait_authenticity"
  | "trait_adaptability"
  | "trait_self_awareness"
  // Values
  | "values_achievement"
  | "values_security"
  | "values_independence"
  | "values_creativity"
  | "values_helping"
  | "values_recognition"
  | "values_adventure"
  | "values_balance"
  // Cognitive Style
  | "cognitive_verbal"
  | "cognitive_numerical"
  | "cognitive_spatial"
  | "cognitive_abstract"
  // Happiness / Wellbeing
  | "happiness_life_satisfaction"
  | "happiness_purpose"
  | "happiness_self_worth"
  | "happiness_energy"
  // Screening Flags
  | "screen_adhd"
  | "screen_dyslexia"
  | "screen_dyscalculia"
  | "screen_depression"
  | "screen_anxiety"
  | "screen_emotional_dysregulation"
  | "screen_trauma"
  | "screen_dissociation"
  // Barriers
  | "barrier_self_worth"
  | "barrier_avoidance"
  | "barrier_perfectionism"
  | "barrier_external_pressure"
  | "barrier_isolation"
  // Executive Function
  | "ef_planning"
  | "ef_task_initiation"
  | "ef_impulse_control";

export const dimensionGroups: Record<string, ScoringDimension[]> = {
  riasec: [
    "riasec_realistic",
    "riasec_investigative",
    "riasec_artistic",
    "riasec_social",
    "riasec_enterprising",
    "riasec_conventional",
  ],
  bigFive: [
    "big5_openness",
    "big5_conscientiousness",
    "big5_extraversion",
    "big5_agreeableness",
    "big5_emotional_stability",
  ],
  mbtiDichotomies: [
    "mbti_extraversion_introversion",
    "mbti_sensing_intuition",
    "mbti_thinking_feeling",
    "mbti_judging_perceiving",
  ],
  jungianArchetypes: [
    "archetype_hero",
    "archetype_caregiver",
    "archetype_explorer",
    "archetype_rebel",
    "archetype_creator",
    "archetype_sage",
    "archetype_magician",
    "archetype_ruler",
    "archetype_innocent",
    "archetype_jester",
    "archetype_lover",
    "archetype_everyperson",
  ],
  characterTraits: [
    "trait_resilience",
    "trait_empathy",
    "trait_curiosity",
    "trait_authenticity",
    "trait_adaptability",
    "trait_self_awareness",
  ],
  values: [
    "values_achievement",
    "values_security",
    "values_independence",
    "values_creativity",
    "values_helping",
    "values_recognition",
    "values_adventure",
    "values_balance",
  ],
  cognitiveStyle: [
    "cognitive_verbal",
    "cognitive_numerical",
    "cognitive_spatial",
    "cognitive_abstract",
  ],
  happinessWellbeing: [
    "happiness_life_satisfaction",
    "happiness_purpose",
    "happiness_self_worth",
    "happiness_energy",
  ],
  screeningFlags: [
    "screen_adhd",
    "screen_dyslexia",
    "screen_dyscalculia",
    "screen_depression",
    "screen_anxiety",
    "screen_emotional_dysregulation",
    "screen_trauma",
    "screen_dissociation",
  ],
  barriers: [
    "barrier_self_worth",
    "barrier_avoidance",
    "barrier_perfectionism",
    "barrier_external_pressure",
    "barrier_isolation",
  ],
  executiveFunction: [
    "ef_planning",
    "ef_task_initiation",
    "ef_impulse_control",
  ],
};
