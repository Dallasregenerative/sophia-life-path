import { allQuestions, dimensionGroups } from "../data/questions";
import { mbtiTypes } from "../data/mbtiTypes";
import { archetypes } from "../data/archetypes";
import { careerClusters } from "../data/careers";

export interface ResponseInput {
  questionId: string;
  responseValue: string;
}

// ============================================================
// RAW SCORE COMPUTATION
// ============================================================

export function computeRawScores(responses: ResponseInput[]): Record<string, number> {
  const scores: Record<string, number> = {};

  // Initialize all dimensions to 0
  for (const dims of Object.values(dimensionGroups)) {
    for (const dim of dims) {
      scores[dim] = 0;
    }
  }

  // Build a map of questionId -> response for quick lookup
  const responseMap = new Map<string, string>();
  for (const r of responses) {
    responseMap.set(r.questionId, r.responseValue);
  }

  // Score each question
  for (const question of allQuestions) {
    const responseValue = responseMap.get(question.id);
    if (responseValue === undefined) continue;

    for (const scoring of question.scoring) {
      const mappedValue = scoring.mapping[responseValue];
      if (mappedValue !== undefined) {
        scores[scoring.dimension] = (scores[scoring.dimension] || 0) + mappedValue * scoring.weight;
      }
    }
  }

  return scores;
}

// ============================================================
// NORMALIZATION (0-100 percentile within group)
// ============================================================

function normalizeGroup(scores: Record<string, number>, dimensions: string[]): Record<string, number> {
  const values = dimensions.map(d => scores[d] || 0);
  const max = Math.max(...values, 1); // prevent division by zero

  const normalized: Record<string, number> = {};
  for (const dim of dimensions) {
    normalized[dim] = Math.round(((scores[dim] || 0) / max) * 100);
  }
  return normalized;
}

export function normalizeAllScores(rawScores: Record<string, number>): Record<string, number> {
  const normalized: Record<string, number> = {};

  for (const [, dims] of Object.entries(dimensionGroups)) {
    const groupNorm = normalizeGroup(rawScores, dims);
    Object.assign(normalized, groupNorm);
  }

  return normalized;
}

// ============================================================
// MBTI TYPE DERIVATION
// ============================================================

export interface MBTIResult {
  type: string;
  name: string;
  description: string;
  strengths: string[];
  challenges: string[];
  careerFit: string;
  dichotomies: {
    label: string;
    leftPole: string;
    rightPole: string;
    leftScore: number;
    rightScore: number;
  }[];
}

export function deriveMBTI(normalizedScores: Record<string, number>): MBTIResult {
  const ei = normalizedScores["mbti_extraversion_introversion"] || 50;
  const sn = normalizedScores["mbti_sensing_intuition"] || 50;
  const tf = normalizedScores["mbti_thinking_feeling"] || 50;
  const jp = normalizedScores["mbti_judging_perceiving"] || 50;

  // Higher score → E, N, F, P; Lower → I, S, T, J
  const letter1 = ei >= 50 ? "E" : "I";
  const letter2 = sn >= 50 ? "N" : "S";
  const letter3 = tf >= 50 ? "F" : "T";
  const letter4 = jp >= 50 ? "P" : "J";

  const typeCode = `${letter1}${letter2}${letter3}${letter4}`;
  const typeInfo = mbtiTypes[typeCode] || mbtiTypes["ENFP"]; // fallback

  return {
    type: typeCode,
    name: typeInfo.name,
    description: typeInfo.description,
    strengths: typeInfo.strengths,
    challenges: typeInfo.challenges,
    careerFit: typeInfo.careerFit,
    dichotomies: [
      {
        label: "Energy",
        leftPole: "Introversion",
        rightPole: "Extraversion",
        leftScore: 100 - ei,
        rightScore: ei,
      },
      {
        label: "Information",
        leftPole: "Sensing",
        rightPole: "Intuition",
        leftScore: 100 - sn,
        rightScore: sn,
      },
      {
        label: "Decisions",
        leftPole: "Thinking",
        rightPole: "Feeling",
        leftScore: 100 - tf,
        rightScore: tf,
      },
      {
        label: "Lifestyle",
        leftPole: "Judging",
        rightPole: "Perceiving",
        leftScore: 100 - jp,
        rightScore: jp,
      },
    ],
  };
}

// ============================================================
// ARCHETYPE RANKING
// ============================================================

export interface ArchetypeResult {
  id: string;
  name: string;
  motto: string;
  description: string;
  strengths: string[];
  shadows: string[];
  color: string;
  score: number;
}

export function rankArchetypes(normalizedScores: Record<string, number>): ArchetypeResult[] {
  const archetypeDims = dimensionGroups.jungianArchetypes;
  const ranked = archetypeDims
    .map(dim => ({
      dim,
      score: normalizedScores[dim] || 0,
    }))
    .sort((a, b) => b.score - a.score);

  return ranked.map(r => {
    const arch = archetypes[r.dim];
    return {
      id: r.dim,
      name: arch?.name || r.dim,
      motto: arch?.motto || "",
      description: arch?.description || "",
      strengths: arch?.strengths || [],
      shadows: arch?.shadows || [],
      color: arch?.color || "#888",
      score: r.score,
    };
  });
}

// ============================================================
// RIASEC PROFILE
// ============================================================

export interface RIASECResult {
  scores: { dimension: string; label: string; score: number }[];
  hollandCode: string;
}

const riasecLabels: Record<string, string> = {
  riasec_realistic: "Realistic",
  riasec_investigative: "Investigative",
  riasec_artistic: "Artistic",
  riasec_social: "Social",
  riasec_enterprising: "Enterprising",
  riasec_conventional: "Conventional",
};

export function computeRIASEC(normalizedScores: Record<string, number>): RIASECResult {
  const dims = dimensionGroups.riasec;
  const scores = dims.map(d => ({
    dimension: d,
    label: riasecLabels[d] || d,
    score: normalizedScores[d] || 0,
  }));

  const sorted = [...scores].sort((a, b) => b.score - a.score);
  const hollandCode = sorted.slice(0, 3).map(s => s.label[0]).join("");

  return { scores, hollandCode };
}

// ============================================================
// BIG FIVE PROFILE
// ============================================================

export interface BigFiveResult {
  dimensions: {
    dimension: string;
    label: string;
    score: number;
    description: string;
  }[];
}

const bigFiveLabels: Record<string, { label: string; low: string; high: string }> = {
  big5_openness: { label: "Openness", low: "You prefer the familiar and practical, valuing tradition and concrete experience.", high: "You're drawn to novelty, abstract thinking, and creative exploration." },
  big5_conscientiousness: { label: "Conscientiousness", low: "You're flexible and spontaneous, preferring to go with the flow rather than stick to rigid plans.", high: "You're organized, reliable, and goal-directed. You follow through on commitments." },
  big5_extraversion: { label: "Extraversion", low: "You recharge in solitude and prefer deep one-on-one connections to large groups.", high: "You're energized by social interaction and enjoy being around people." },
  big5_agreeableness: { label: "Agreeableness", low: "You're independent-minded and not afraid to challenge others or prioritize your own needs.", high: "You're cooperative, empathetic, and naturally attuned to others' feelings." },
  big5_emotional_stability: { label: "Emotional Stability", low: "You experience emotions intensely and may be more sensitive to stress and change.", high: "You're emotionally even-keeled and handle stress with relative ease." },
};

export function computeBigFive(normalizedScores: Record<string, number>): BigFiveResult {
  const dims = dimensionGroups.bigFive;
  return {
    dimensions: dims.map(d => {
      const score = normalizedScores[d] || 50;
      const info = bigFiveLabels[d];
      return {
        dimension: d,
        label: info?.label || d,
        score,
        description: score >= 50 ? (info?.high || "") : (info?.low || ""),
      };
    }),
  };
}

// ============================================================
// VALUES PROFILE
// ============================================================

const valuesLabels: Record<string, { label: string; description: string }> = {
  values_achievement: { label: "Achievement", description: "Success, mastery, and personal accomplishment drive you." },
  values_security: { label: "Security", description: "Stability, safety, and predictability give you peace of mind." },
  values_independence: { label: "Independence", description: "Freedom, autonomy, and self-direction are essential to you." },
  values_creativity: { label: "Creativity", description: "Self-expression, innovation, and originality fuel your spirit." },
  values_helping: { label: "Helping Others", description: "Making a difference in people's lives gives you deep purpose." },
  values_recognition: { label: "Recognition", description: "Being acknowledged for your contributions matters to you." },
  values_adventure: { label: "Adventure", description: "New experiences, exploration, and excitement keep you alive." },
  values_balance: { label: "Balance", description: "Harmony between work, relationships, and personal time is your priority." },
};

export interface ValuesResult {
  ranked: { dimension: string; label: string; description: string; score: number }[];
}

export function computeValues(normalizedScores: Record<string, number>): ValuesResult {
  const dims = dimensionGroups.values;
  const scored = dims.map(d => ({
    dimension: d,
    label: valuesLabels[d]?.label || d,
    description: valuesLabels[d]?.description || "",
    score: normalizedScores[d] || 0,
  }));

  scored.sort((a, b) => b.score - a.score);
  return { ranked: scored };
}

// ============================================================
// COGNITIVE STYLE
// ============================================================

const cognitiveLabels: Record<string, string> = {
  cognitive_verbal: "Verbal",
  cognitive_numerical: "Numerical",
  cognitive_spatial: "Spatial",
  cognitive_abstract: "Abstract",
};

export interface CognitiveResult {
  styles: { dimension: string; label: string; score: number }[];
}

export function computeCognitive(normalizedScores: Record<string, number>): CognitiveResult {
  const dims = dimensionGroups.cognitiveStyle;
  return {
    styles: dims.map(d => ({
      dimension: d,
      label: cognitiveLabels[d] || d,
      score: normalizedScores[d] || 0,
    })),
  };
}

// ============================================================
// CHARACTER TRAITS
// ============================================================

const traitLabels: Record<string, string> = {
  trait_resilience: "Resilience",
  trait_empathy: "Empathy",
  trait_curiosity: "Curiosity",
  trait_authenticity: "Authenticity",
  trait_adaptability: "Adaptability",
  trait_self_awareness: "Self-Awareness",
};

export interface TraitResult {
  traits: { dimension: string; label: string; score: number }[];
}

export function computeTraits(normalizedScores: Record<string, number>): TraitResult {
  const dims = dimensionGroups.characterTraits;
  return {
    traits: dims.map(d => ({
      dimension: d,
      label: traitLabels[d] || d,
      score: normalizedScores[d] || 0,
    })),
  };
}

// ============================================================
// HAPPINESS & WELLBEING
// ============================================================

const happinessLabels: Record<string, { label: string; lowDesc: string; midDesc: string; highDesc: string }> = {
  happiness_life_satisfaction: {
    label: "Life Satisfaction",
    lowDesc: "You may be going through a challenging period. Consider exploring what specific changes could help.",
    midDesc: "You're in a developing place — some things are working, others could use attention.",
    highDesc: "You generally feel good about where your life is heading. That's wonderful.",
  },
  happiness_purpose: {
    label: "Sense of Purpose",
    lowDesc: "Finding your 'why' is still a journey — and that's completely okay at this stage.",
    midDesc: "You have some sense of direction, but may be seeking more clarity.",
    highDesc: "You feel a strong sense of direction and meaning in your life.",
  },
  happiness_self_worth: {
    label: "Self-Worth",
    lowDesc: "You may struggle with self-doubt. Remember: your worth isn't determined by achievement.",
    midDesc: "Your self-esteem has room to grow. You're on the path.",
    highDesc: "You have a healthy sense of your own value and capabilities.",
  },
  happiness_energy: {
    label: "Energy & Vitality",
    lowDesc: "You may be feeling drained or fatigued. Taking care of your energy is a priority.",
    midDesc: "Your energy levels are moderate — there are good days and harder ones.",
    highDesc: "You feel energized and vital. You have the fuel to pursue what matters.",
  },
};

export interface HappinessResult {
  dimensions: {
    dimension: string;
    label: string;
    score: number;
    status: "thriving" | "developing" | "needs_attention";
    description: string;
  }[];
}

export function computeHappiness(normalizedScores: Record<string, number>): HappinessResult {
  const dims = dimensionGroups.happinessWellbeing;
  return {
    dimensions: dims.map(d => {
      const score = normalizedScores[d] || 0;
      const info = happinessLabels[d];
      let status: "thriving" | "developing" | "needs_attention";
      let description: string;

      if (score >= 65) {
        status = "thriving";
        description = info?.highDesc || "";
      } else if (score >= 35) {
        status = "developing";
        description = info?.midDesc || "";
      } else {
        status = "needs_attention";
        description = info?.lowDesc || "";
      }

      return {
        dimension: d,
        label: info?.label || d,
        score,
        status,
        description,
      };
    }),
  };
}

// ============================================================
// SCREENING FLAGS
// ============================================================

const screeningLabels: Record<string, string> = {
  screen_adhd: "Attention & Focus Patterns",
  screen_dyslexia: "Reading & Language Processing",
  screen_dyscalculia: "Numerical Processing",
  screen_depression: "Mood & Energy Patterns",
  screen_anxiety: "Worry & Stress Patterns",
  screen_emotional_dysregulation: "Emotional Regulation",
  screen_trauma: "Past Experiences",
  screen_dissociation: "Presence & Grounding",
};

export interface ScreeningResult {
  flags: {
    dimension: string;
    label: string;
    score: number;
    flagged: boolean;
    suggestion: string;
  }[];
}

export function computeScreening(normalizedScores: Record<string, number>): ScreeningResult {
  const dims = dimensionGroups.screeningFlags;
  return {
    flags: dims.map(d => {
      const score = normalizedScores[d] || 0;
      const flagged = score >= 70;
      return {
        dimension: d,
        label: screeningLabels[d] || d,
        score,
        flagged,
        suggestion: flagged
          ? "This area may benefit from further professional exploration."
          : "No significant concerns noted.",
      };
    }),
  };
}

// ============================================================
// EXECUTIVE FUNCTION
// ============================================================

const efLabels: Record<string, string> = {
  ef_planning: "Planning & Organization",
  ef_task_initiation: "Task Initiation",
  ef_impulse_control: "Impulse Control",
};

export interface ExecutiveFunctionResult {
  functions: { dimension: string; label: string; score: number }[];
}

export function computeExecutiveFunction(normalizedScores: Record<string, number>): ExecutiveFunctionResult {
  const dims = dimensionGroups.executiveFunction;
  return {
    functions: dims.map(d => ({
      dimension: d,
      label: efLabels[d] || d,
      score: normalizedScores[d] || 0,
    })),
  };
}

// ============================================================
// BARRIERS
// ============================================================

const barrierLabels: Record<string, { label: string; description: string }> = {
  barrier_self_worth: { label: "Self-Worth Barriers", description: "Beliefs about not being good enough may be holding you back." },
  barrier_avoidance: { label: "Avoidance Patterns", description: "Tendency to avoid challenges or uncomfortable situations." },
  barrier_perfectionism: { label: "Perfectionism", description: "Setting impossibly high standards may be creating paralysis." },
  barrier_external_pressure: { label: "External Pressure", description: "Others' expectations may be steering you away from your own path." },
  barrier_isolation: { label: "Isolation", description: "Limited support network may be making things harder than they need to be." },
};

export interface BarrierResult {
  barriers: { dimension: string; label: string; description: string; score: number; significant: boolean }[];
}

export function computeBarriers(normalizedScores: Record<string, number>): BarrierResult {
  const dims = dimensionGroups.barriers;
  return {
    barriers: dims.map(d => {
      const score = normalizedScores[d] || 0;
      return {
        dimension: d,
        label: barrierLabels[d]?.label || d,
        description: barrierLabels[d]?.description || "",
        score,
        significant: score >= 60,
      };
    }),
  };
}

// ============================================================
// CAREER MATCHING
// ============================================================

export interface CareerMatch {
  id: string;
  name: string;
  description: string;
  matchScore: number;
  exampleJobs: string[];
  educationPaths: string[];
  growthOutlook: string;
  whyItFits: string;
  aiResilience: "high" | "medium" | "low";
  aiResilienceNotes: string;
  collegeMajors: string[];
}

export function matchCareers(
  riasec: RIASECResult,
  mbti: MBTIResult,
  values: ValuesResult,
  bigFive: BigFiveResult
): CareerMatch[] {
  const topRIASEC = riasec.scores
    .sort((a, b) => b.score - a.score)
    .slice(0, 3)
    .map(s => s.label[0]);

  const topValues = values.ranked.slice(0, 3).map(v => v.dimension);
  const mbtiType = mbti.type;

  return careerClusters
    .map(cluster => {
      let score = 0;
      const reasons: string[] = [];

      // RIASEC match (0-40 points)
      const riasecOverlap = cluster.riasecFit.filter(r => topRIASEC.includes(r)).length;
      score += riasecOverlap * 15;
      if (riasecOverlap > 0) reasons.push("Matches your interest profile");

      // MBTI match (0-25 points)
      if (cluster.mbtiFit.includes(mbtiType)) {
        score += 25;
        reasons.push("Aligns with your personality type");
      }

      // Values match (0-24 points)
      const valuesOverlap = cluster.valueFit.filter(v => topValues.includes(v)).length;
      score += valuesOverlap * 8;
      if (valuesOverlap > 0) reasons.push("Reflects what matters most to you");

      // Big Five bonus (0-11 points)
      const openness = bigFive.dimensions.find(d => d.dimension === "big5_openness")?.score || 50;
      if (cluster.riasecFit.includes("A") && openness >= 60) {
        score += 6;
        reasons.push("Your creative curiosity would thrive here");
      }
      const conscientiousness = bigFive.dimensions.find(d => d.dimension === "big5_conscientiousness")?.score || 50;
      if (cluster.riasecFit.includes("C") && conscientiousness >= 60) {
        score += 5;
        reasons.push("Your organization skills are a great fit");
      }

      return {
        id: cluster.id,
        name: cluster.name,
        description: cluster.description,
        matchScore: Math.min(score, 100),
        exampleJobs: cluster.exampleJobs,
        educationPaths: cluster.educationPaths,
        growthOutlook: cluster.growthOutlook,
        aiResilience: cluster.aiResilience,
        aiResilienceNotes: cluster.aiResilienceNotes,
        collegeMajors: cluster.collegeMajors,
        whyItFits: reasons.length > 0 ? reasons.join(". ") + "." : "Potential area to explore.",
      };
    })
    .sort((a, b) => b.matchScore - a.matchScore);
}

// ============================================================
// MASTER SCORING FUNCTION
// ============================================================

export interface FullResults {
  mbtiProfile: MBTIResult;
  riasecProfile: RIASECResult;
  bigFiveProfile: BigFiveResult;
  archetypeProfile: ArchetypeResult[];
  valuesProfile: ValuesResult;
  cognitiveProfile: CognitiveResult;
  traitProfile: TraitResult;
  happinessProfile: HappinessResult;
  screeningFlags: ScreeningResult;
  careerRecommendations: CareerMatch[];
  executiveFunctionProfile: ExecutiveFunctionResult;
  barrierProfile: BarrierResult;
}

export function computeAllResults(responses: ResponseInput[]): FullResults {
  const rawScores = computeRawScores(responses);
  const normalizedScores = normalizeAllScores(rawScores);

  const mbtiProfile = deriveMBTI(normalizedScores);
  const riasecProfile = computeRIASEC(normalizedScores);
  const bigFiveProfile = computeBigFive(normalizedScores);
  const archetypeProfile = rankArchetypes(normalizedScores);
  const valuesProfile = computeValues(normalizedScores);
  const cognitiveProfile = computeCognitive(normalizedScores);
  const traitProfile = computeTraits(normalizedScores);
  const happinessProfile = computeHappiness(normalizedScores);
  const screeningFlags = computeScreening(normalizedScores);
  const executiveFunctionProfile = computeExecutiveFunction(normalizedScores);
  const barrierProfile = computeBarriers(normalizedScores);
  const careerRecommendations = matchCareers(riasecProfile, mbtiProfile, valuesProfile, bigFiveProfile);

  return {
    mbtiProfile,
    riasecProfile,
    bigFiveProfile,
    archetypeProfile,
    valuesProfile,
    cognitiveProfile,
    traitProfile,
    happinessProfile,
    screeningFlags,
    careerRecommendations,
    executiveFunctionProfile,
    barrierProfile,
  };
}
