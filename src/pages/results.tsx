import { useState, useCallback, useEffect } from "react";
import { useLocation } from "wouter";
import { useAssessment } from "../context/AssessmentContext";
import type {
  MBTIResult,
  RIASECResult,
  BigFiveResult,
  ArchetypeResult,
  ValuesResult,
  CognitiveResult,
  TraitResult,
  HappinessResult,
  ScreeningResult,
  CareerMatch,
  ExecutiveFunctionResult,
  BarrierResult,
} from "../lib/scoring";
import {
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  Radar,
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Cell,
} from "recharts";
import {
  Sparkles,
  Heart,
  Compass,
  Brain,
  Trophy,
  Lightbulb,
  Shield,
  Briefcase,
  GraduationCap,
  TrendingUp,
  AlertTriangle,
  Eye,
  EyeOff,
  ChevronRight,
  Download,
  Copy,
  CheckCircle,
} from "lucide-react";

// ============================================================
// Section A: MBTI Personality Type
// ============================================================
function MBTISection({ data }: { data: MBTIResult }) {
  return (
    <section className="space-y-6">
      <div className="flex items-center gap-3">
        <div className="w-10 h-10 rounded-full bg-rose-500/10 flex items-center justify-center text-rose-500">
          <Sparkles className="w-5 h-5" />
        </div>
        <div>
          <h2 className="font-serif text-2xl text-gray-900">Your Personality Type</h2>
          <p className="text-sm text-gray-500">Based on how you think, decide, and engage</p>
        </div>
      </div>

      <div className="p-6 bg-white rounded-xl border border-cream-200 text-center">
        <div className="mb-4">
          <span className="font-serif text-5xl md:text-6xl text-rose-500 tracking-wider">
            {data.type}
          </span>
        </div>
        <p className="text-lg font-medium text-gray-900 mb-1">{data.name}</p>
        <p className="text-sm text-gray-500 leading-relaxed max-w-lg mx-auto">
          {data.description}
        </p>
      </div>

      {/* Dichotomy bars */}
      <div className="space-y-4">
        {data.dichotomies.map((d) => (
          <div key={d.label} className="space-y-1.5">
            <div className="flex justify-between text-xs text-gray-500">
              <span>{d.leftPole} ({d.leftScore}%)</span>
              <span className="font-medium text-gray-900">{d.label}</span>
              <span>{d.rightPole} ({d.rightScore}%)</span>
            </div>
            <div className="h-3 bg-cream-200 rounded-full overflow-hidden relative">
              <div
                className="absolute inset-y-0 left-0 bg-rose-300 rounded-full transition-all duration-700"
                style={{ width: `${d.leftScore}%` }}
              />
              <div
                className="absolute inset-y-0 right-0 bg-rose-500 rounded-full transition-all duration-700"
                style={{ width: `${d.rightScore}%` }}
              />
            </div>
          </div>
        ))}
      </div>

      {/* Strengths & Challenges */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="p-5 bg-white rounded-xl border border-cream-200">
          <h3 className="text-sm font-semibold text-gray-900 mb-3">Your Strengths</h3>
          <div className="flex flex-wrap gap-2">
            {data.strengths.map((s) => (
              <span key={s} className="px-3 py-1 rounded-full bg-sage-100 text-sage-600 text-xs font-medium">
                {s}
              </span>
            ))}
          </div>
        </div>
        <div className="p-5 bg-white rounded-xl border border-cream-200">
          <h3 className="text-sm font-semibold text-gray-900 mb-3">Growth Areas</h3>
          <div className="flex flex-wrap gap-2">
            {data.challenges.map((c) => (
              <span key={c} className="px-3 py-1 rounded-full border border-cream-300 text-gray-600 text-xs font-medium">
                {c}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

// ============================================================
// Section B: Archetypes
// ============================================================
function ArchetypesSection({ data }: { data: ArchetypeResult[] }) {
  const top3 = data.slice(0, 3);
  return (
    <section className="space-y-6">
      <div className="flex items-center gap-3">
        <div className="w-10 h-10 rounded-full bg-rose-500/10 flex items-center justify-center text-rose-500">
          <Shield className="w-5 h-5" />
        </div>
        <div>
          <h2 className="font-serif text-2xl text-gray-900">Your Archetypes</h2>
          <p className="text-sm text-gray-500">The mythic patterns that shape your story</p>
        </div>
      </div>

      <div className="grid gap-4">
        {top3.map((arch, i) => (
          <div key={arch.id} className="p-5 bg-white rounded-xl border border-cream-200">
            <div className="flex items-start gap-4">
              <div
                className="w-12 h-12 rounded-xl flex items-center justify-center text-white font-serif text-xl flex-shrink-0"
                style={{ backgroundColor: arch.color }}
              >
                {i + 1}
              </div>
              <div className="min-w-0">
                <div className="flex items-center gap-2 mb-1">
                  <h3 className="font-semibold text-gray-900">{arch.name}</h3>
                  <span className="text-xs text-gray-500">({arch.score}%)</span>
                </div>
                <p className="text-xs italic text-gray-500 mb-2">"{arch.motto}"</p>
                <p className="text-sm text-gray-500 leading-relaxed">{arch.description}</p>
                <div className="flex flex-wrap gap-1.5 mt-3">
                  {arch.strengths.map((s) => (
                    <span key={s} className="px-2.5 py-0.5 rounded-full bg-sage-100 text-sage-600 text-xs font-medium">
                      {s}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

// ============================================================
// Section C: RIASEC
// ============================================================
function RIASECSection({ data }: { data: RIASECResult }) {
  const chartData = data.scores.map((s) => ({
    subject: s.label,
    value: s.score,
  }));

  return (
    <section className="space-y-6">
      <div className="flex items-center gap-3">
        <div className="w-10 h-10 rounded-full bg-rose-500/10 flex items-center justify-center text-rose-500">
          <Compass className="w-5 h-5" />
        </div>
        <div>
          <h2 className="font-serif text-2xl text-gray-900">Your Interest Profile</h2>
          <p className="text-sm text-gray-500">What you're naturally drawn to (Holland / RIASEC)</p>
        </div>
      </div>

      <div className="p-6 bg-white rounded-xl border border-cream-200 text-center">
        <p className="text-sm text-gray-500 mb-2">Your Holland Code</p>
        <span className="font-serif text-4xl text-rose-500 tracking-wider">
          {data.hollandCode}
        </span>
      </div>

      <div className="p-4 bg-white rounded-xl border border-cream-200">
        <ResponsiveContainer width="100%" height={300}>
          <RadarChart data={chartData}>
            <PolarGrid stroke="#ebe3d9" />
            <PolarAngleAxis
              dataKey="subject"
              tick={{ fill: "#8b7e6e", fontSize: 12 }}
            />
            <PolarRadiusAxis
              angle={30}
              domain={[0, 100]}
              tick={{ fill: "#8b7e6e", fontSize: 10 }}
            />
            <Radar
              name="Interests"
              dataKey="value"
              stroke="#e54d6d"
              fill="#e54d6d"
              fillOpacity={0.2}
              strokeWidth={2}
            />
          </RadarChart>
        </ResponsiveContainer>
      </div>
    </section>
  );
}

// ============================================================
// Section D: Big Five
// ============================================================
function BigFiveSection({ data }: { data: BigFiveResult }) {
  const chartData = data.dimensions.map((d) => ({
    name: d.label,
    score: d.score,
  }));

  const barColors = [
    "#e54d6d",
    "#5f825f",
    "#d4925a",
    "#5a8fb0",
    "#8b6aad",
  ];

  return (
    <section className="space-y-6">
      <div className="flex items-center gap-3">
        <div className="w-10 h-10 rounded-full bg-rose-500/10 flex items-center justify-center text-rose-500">
          <Brain className="w-5 h-5" />
        </div>
        <div>
          <h2 className="font-serif text-2xl text-gray-900">Your Personality Traits</h2>
          <p className="text-sm text-gray-500">The Big Five dimensions of who you are</p>
        </div>
      </div>

      <div className="p-4 bg-white rounded-xl border border-cream-200">
        <ResponsiveContainer width="100%" height={250}>
          <BarChart data={chartData} layout="vertical" margin={{ left: 10, right: 30 }}>
            <CartesianGrid strokeDasharray="3 3" stroke="#ebe3d9" />
            <XAxis
              type="number"
              domain={[0, 100]}
              tick={{ fill: "#8b7e6e", fontSize: 11 }}
            />
            <YAxis
              type="category"
              dataKey="name"
              width={120}
              tick={{ fill: "#2d2318", fontSize: 12 }}
            />
            <Tooltip
              contentStyle={{
                background: "#fff",
                border: "1px solid #ebe3d9",
                borderRadius: "8px",
                fontSize: "12px",
              }}
            />
            <Bar dataKey="score" radius={[0, 4, 4, 0]}>
              {chartData.map((_, i) => (
                <Cell key={i} fill={barColors[i % barColors.length]} />
              ))}
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      </div>

      <div className="space-y-3">
        {data.dimensions.map((d) => (
          <div key={d.dimension} className="text-sm">
            <span className="font-medium text-gray-900">{d.label}: </span>
            <span className="text-gray-500">{d.description}</span>
          </div>
        ))}
      </div>
    </section>
  );
}

// ============================================================
// Section E: Values
// ============================================================
function ValuesSection({ data }: { data: ValuesResult }) {
  const top5 = data.ranked.slice(0, 5);
  return (
    <section className="space-y-6">
      <div className="flex items-center gap-3">
        <div className="w-10 h-10 rounded-full bg-rose-500/10 flex items-center justify-center text-rose-500">
          <Heart className="w-5 h-5" />
        </div>
        <div>
          <h2 className="font-serif text-2xl text-gray-900">What Drives You</h2>
          <p className="text-sm text-gray-500">Your core values, ranked by importance</p>
        </div>
      </div>

      <div className="space-y-3">
        {top5.map((v, i) => (
          <div key={v.dimension} className="p-4 bg-white rounded-xl border border-cream-200">
            <div className="flex items-start gap-3">
              <span className="font-serif text-2xl text-rose-400 w-8 text-center flex-shrink-0">
                {i + 1}
              </span>
              <div className="flex-1">
                <h3 className="font-semibold text-gray-900 text-sm">{v.label}</h3>
                <p className="text-xs text-gray-500 mt-0.5">{v.description}</p>
              </div>
              <div className="flex-shrink-0">
                <span className="text-xs font-medium text-rose-500 bg-rose-50 px-2.5 py-1 rounded-full">
                  {v.score}%
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

// ============================================================
// Section F: Cognitive Style
// ============================================================
function CognitiveSection({ data }: { data: CognitiveResult }) {
  return (
    <section className="space-y-6">
      <div className="flex items-center gap-3">
        <div className="w-10 h-10 rounded-full bg-rose-500/10 flex items-center justify-center text-rose-500">
          <Lightbulb className="w-5 h-5" />
        </div>
        <div>
          <h2 className="font-serif text-2xl text-gray-900">How You Think</h2>
          <p className="text-sm text-gray-500">Your cognitive strengths and processing style</p>
        </div>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
        {data.styles.map((s) => (
          <div key={s.dimension} className="p-4 bg-white rounded-xl border border-cream-200 text-center">
            <div
              className="w-16 h-16 rounded-full mx-auto mb-3 flex items-center justify-center"
              style={{
                background: `conic-gradient(#e54d6d ${s.score * 3.6}deg, #ebe3d9 0)`,
              }}
            >
              <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center">
                <span className="text-sm font-semibold text-gray-900">{s.score}</span>
              </div>
            </div>
            <p className="text-sm font-medium text-gray-900">{s.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

// ============================================================
// Section G: Character Strengths
// ============================================================
function TraitsSection({ data }: { data: TraitResult }) {
  const chartData = data.traits.map((t) => ({
    subject: t.label,
    value: t.score,
  }));

  return (
    <section className="space-y-6">
      <div className="flex items-center gap-3">
        <div className="w-10 h-10 rounded-full bg-rose-500/10 flex items-center justify-center text-rose-500">
          <Trophy className="w-5 h-5" />
        </div>
        <div>
          <h2 className="font-serif text-2xl text-gray-900">Character Strengths</h2>
          <p className="text-sm text-gray-500">The qualities that define you</p>
        </div>
      </div>

      <div className="p-4 bg-white rounded-xl border border-cream-200">
        <ResponsiveContainer width="100%" height={300}>
          <RadarChart data={chartData}>
            <PolarGrid stroke="#ebe3d9" />
            <PolarAngleAxis
              dataKey="subject"
              tick={{ fill: "#8b7e6e", fontSize: 12 }}
            />
            <PolarRadiusAxis angle={30} domain={[0, 100]} tick={false} />
            <Radar
              name="Traits"
              dataKey="value"
              stroke="#5f825f"
              fill="#5f825f"
              fillOpacity={0.2}
              strokeWidth={2}
            />
          </RadarChart>
        </ResponsiveContainer>
      </div>

      <div className="flex flex-wrap gap-2">
        {[...data.traits]
          .sort((a, b) => b.score - a.score)
          .slice(0, 3)
          .map((t) => (
            <span key={t.dimension} className="px-3 py-1 rounded-full bg-sage-100 text-sage-600 text-xs font-medium">
              Top Strength: {t.label} ({t.score}%)
            </span>
          ))}
      </div>
    </section>
  );
}

// ============================================================
// Section H: Happiness & Wellbeing
// ============================================================
function HappinessSection({ data }: { data: HappinessResult }) {
  const statusColors: Record<string, string> = {
    thriving: "#5f825f",
    developing: "#d4925a",
    needs_attention: "#c0392b",
  };
  const statusLabels: Record<string, string> = {
    thriving: "Thriving",
    developing: "Developing",
    needs_attention: "Needs Attention",
  };

  return (
    <section className="space-y-6">
      <div className="flex items-center gap-3">
        <div className="w-10 h-10 rounded-full bg-rose-500/10 flex items-center justify-center text-rose-500">
          <Heart className="w-5 h-5" />
        </div>
        <div>
          <h2 className="font-serif text-2xl text-gray-900">Your Happiness & Wellbeing</h2>
          <p className="text-sm text-gray-500">A snapshot of where you are right now</p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {data.dimensions.map((d) => (
          <div key={d.dimension} className="p-5 bg-white rounded-xl border border-cream-200">
            <div className="flex items-center justify-between mb-3">
              <h3 className="text-sm font-semibold text-gray-900">{d.label}</h3>
              <span
                className="text-xs font-medium px-2.5 py-0.5 rounded-full border"
                style={{ color: statusColors[d.status], borderColor: statusColors[d.status] }}
              >
                {statusLabels[d.status]}
              </span>
            </div>
            {/* Gauge */}
            <div className="relative h-3 bg-cream-200 rounded-full overflow-hidden mb-3">
              <div
                className="absolute inset-y-0 left-0 rounded-full transition-all duration-700"
                style={{
                  width: `${d.score}%`,
                  backgroundColor: statusColors[d.status],
                }}
              />
            </div>
            <p className="text-xs text-gray-500 leading-relaxed">{d.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

// ============================================================
// Section H2: Top 10 College Majors
// ============================================================
function MajorsSection({ data }: { data: CareerMatch[] }) {
  const top10Careers = data.slice(0, 10);

  const majorMap = new Map<string, { weight: number; careers: string[] }>();
  top10Careers.forEach((career) => {
    const weight = (career.matchScore || 0) / 100;
    (career.collegeMajors || []).forEach((major) => {
      const entry = majorMap.get(major) || { weight: 0, careers: [] };
      entry.weight += weight;
      entry.careers.push(career.name);
      majorMap.set(major, entry);
    });
  });

  const ranked = Array.from(majorMap.entries())
    .map(([major, v]) => ({ major, ...v }))
    .sort((a, b) => b.weight - a.weight || b.careers.length - a.careers.length)
    .slice(0, 10);

  if (ranked.length === 0) return null;

  const maxWeight = ranked[0].weight || 1;

  const strengthLabel = (count: number) =>
    count >= 3 ? "Very strong fit" : count === 2 ? "Strong fit" : "Worth exploring";

  return (
    <section className="space-y-6">
      <div className="flex items-center gap-3">
        <div className="w-10 h-10 rounded-full bg-rose-500/10 flex items-center justify-center text-rose-500">
          <GraduationCap className="w-5 h-5" />
        </div>
        <div>
          <h2 className="font-serif text-2xl text-gray-900">Your Top 10 College Majors to Consider</h2>
          <p className="text-sm text-gray-500">Ranked by how often they appear across your strongest career matches</p>
        </div>
      </div>

      <div className="space-y-3">
        {ranked.map((m, i) => (
          <div key={m.major} className="bg-white rounded-xl border border-cream-200 p-4">
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 w-8 h-8 rounded-full bg-rose-500 flex items-center justify-center">
                <span className="text-white text-sm font-semibold">{i + 1}</span>
              </div>
              <div className="flex-1 min-w-0">
                <h3 className="font-semibold text-sm text-gray-900">{m.major}</h3>
                <p className="text-xs text-gray-500 mt-0.5">
                  Appears in your matches for {m.careers.slice(0, 3).join(", ")}
                </p>
                <div className="flex items-center gap-2 mt-2">
                  <div className="flex-1 h-1.5 rounded-full bg-cream-200 overflow-hidden max-w-[160px]">
                    <div
                      className="h-full bg-rose-500 rounded-full"
                      style={{ width: `${Math.round((m.weight / maxWeight) * 100)}%` }}
                    />
                  </div>
                  <span className="text-xs font-medium text-rose-500">{strengthLabel(m.careers.length)}</span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

// ============================================================
// Section I: Career Paths
// ============================================================
function CareersSection({ data }: { data: CareerMatch[] }) {
  const top10 = data.slice(0, 10);
  const [expandedId, setExpandedId] = useState<string | null>(null);

  return (
    <section className="space-y-6">
      <div className="flex items-center gap-3">
        <div className="w-10 h-10 rounded-full bg-rose-500/10 flex items-center justify-center text-rose-500">
          <Briefcase className="w-5 h-5" />
        </div>
        <div>
          <h2 className="font-serif text-2xl text-gray-900">Career Paths to Explore</h2>
          <p className="text-sm text-gray-500">Based on your interests, personality, and values</p>
        </div>
      </div>

      <div className="space-y-3">
        {top10.map((career, i) => {
          const isExpanded = expandedId === career.id;
          return (
            <div key={career.id} className="bg-white rounded-xl border border-cream-200 overflow-hidden">
              <button
                className="w-full p-4 text-left flex items-center gap-4"
                onClick={() => setExpandedId(isExpanded ? null : career.id)}
              >
                <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-rose-50 flex items-center justify-center">
                  <span className="font-semibold text-rose-500 text-sm">{i + 1}</span>
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 flex-wrap">
                    <h3 className="font-semibold text-sm text-gray-900">{career.name}</h3>
                    <span className="text-xs font-medium text-rose-500 bg-rose-50 px-2 py-0.5 rounded-full">
                      {career.matchScore}% match
                    </span>
                  </div>
                  <p className="text-xs text-gray-500 mt-0.5 truncate">{career.whyItFits}</p>
                </div>
                <ChevronRight
                  className={`w-4 h-4 text-gray-400 transition-transform flex-shrink-0 ${isExpanded ? "rotate-90" : ""}`}
                />
              </button>

              {isExpanded && (
                <div className="px-4 pb-4 space-y-3 border-t border-cream-200 pt-3">
                  <p className="text-sm text-gray-500">{career.description}</p>

                  <div>
                    <p className="text-xs font-semibold text-gray-900 mb-1.5 flex items-center gap-1">
                      <Briefcase className="w-3 h-3" /> Example Roles
                    </p>
                    <div className="flex flex-wrap gap-1.5">
                      {career.exampleJobs.map((j) => (
                        <span key={j} className="px-2.5 py-0.5 rounded-full bg-sage-100 text-sage-600 text-xs font-medium">
                          {j}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div>
                    <p className="text-xs font-semibold text-gray-900 mb-1.5 flex items-center gap-1">
                      <GraduationCap className="w-3 h-3" /> College Majors to Consider
                    </p>
                    <ul className="text-xs text-gray-500 space-y-1">
                      {career.collegeMajors.slice(0, 4).map((m) => (
                        <li key={m} className="flex items-start gap-1.5">
                          <ChevronRight className="w-3 h-3 mt-0.5 flex-shrink-0" />
                          {m}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div
                    className={`rounded-lg border p-3 ${
                      career.aiResilience === "high"
                        ? "bg-sage-100 border-sage-200"
                        : career.aiResilience === "medium"
                        ? "bg-amber-50 border-amber-200"
                        : "bg-red-50 border-red-200"
                    }`}
                  >
                    <div className="flex items-center gap-2 mb-1">
                      <span
                        className={`px-2 py-0.5 rounded-full text-[10px] font-semibold uppercase tracking-wide ${
                          career.aiResilience === "high"
                            ? "bg-sage-600 text-white"
                            : career.aiResilience === "medium"
                            ? "bg-amber-500 text-white"
                            : "bg-red-500 text-white"
                        }`}
                      >
                        {career.aiResilience} AI resilience
                      </span>
                      <span className="text-xs font-semibold text-gray-900">AI-Era Outlook</span>
                    </div>
                    <p className="text-xs text-gray-600 leading-relaxed">{career.aiResilienceNotes}</p>
                  </div>

                  <div>
                    <p className="text-xs font-semibold text-gray-900 mb-1.5 flex items-center gap-1">
                      <GraduationCap className="w-3 h-3" /> Education Pathways
                    </p>
                    <ul className="text-xs text-gray-500 space-y-1">
                      {career.educationPaths.map((p) => (
                        <li key={p} className="flex items-start gap-1.5">
                          <ChevronRight className="w-3 h-3 mt-0.5 flex-shrink-0" />
                          {p}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="flex items-start gap-1.5 text-xs text-gray-500">
                    <TrendingUp className="w-3 h-3 mt-0.5 flex-shrink-0" />
                    <span>{career.growthOutlook}</span>
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
}

// ============================================================
// Section J: Practitioner Summary
// ============================================================
function PractitionerSection({
  screening,
  ef,
  barriers,
}: {
  screening: ScreeningResult;
  ef: ExecutiveFunctionResult;
  barriers: BarrierResult;
}) {
  const [visible, setVisible] = useState(false);
  const flaggedItems = screening.flags.filter((f) => f.flagged);
  const significantBarriers = barriers.barriers.filter((b) => b.significant);

  return (
    <section className="space-y-6">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-cream-200 flex items-center justify-center text-gray-500">
            <AlertTriangle className="w-5 h-5" />
          </div>
          <div>
            <h2 className="font-serif text-2xl text-gray-900">Insights for Your Journey</h2>
            <p className="text-sm text-gray-500">Practitioner summary (toggle visibility)</p>
          </div>
        </div>
        <button
          onClick={() => setVisible(!visible)}
          className="flex items-center gap-1.5 text-sm text-gray-500 hover:text-gray-900 transition-colors"
        >
          {visible ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
          {visible ? "Hide" : "Show"}
        </button>
      </div>

      {visible && (
        <div className="space-y-4 animate-fade-in">
          {/* Executive Function */}
          <div className="p-5 bg-white rounded-xl border border-cream-200">
            <h3 className="text-sm font-semibold text-gray-900 mb-3">Executive Function Profile</h3>
            <div className="space-y-3">
              {ef.functions.map((f) => (
                <div key={f.dimension}>
                  <div className="flex justify-between text-xs mb-1">
                    <span className="text-gray-500">{f.label}</span>
                    <span className="text-gray-900 font-medium">{f.score}%</span>
                  </div>
                  <div className="h-2 bg-cream-200 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-blue-400 rounded-full transition-all duration-500"
                      style={{ width: `${f.score}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Screening Flags */}
          {flaggedItems.length > 0 && (
            <div className="p-5 bg-white rounded-xl border border-amber-200">
              <h3 className="text-sm font-semibold text-gray-900 mb-1">
                Areas That May Benefit From Further Exploration
              </h3>
              <p className="text-xs text-gray-500 mb-3">
                These are not diagnoses — they are patterns that may be worth discussing with a professional.
              </p>
              <div className="space-y-2">
                {flaggedItems.map((f) => (
                  <div key={f.dimension} className="flex items-start gap-2 text-sm">
                    <div className="w-2 h-2 rounded-full bg-amber-500 mt-1.5 flex-shrink-0" />
                    <div>
                      <span className="font-medium text-gray-900">{f.label}</span>
                      <span className="text-gray-500"> — {f.suggestion}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Barriers */}
          {significantBarriers.length > 0 && (
            <div className="p-5 bg-white rounded-xl border border-cream-200">
              <h3 className="text-sm font-semibold text-gray-900 mb-3">Barrier Identification</h3>
              <div className="space-y-2">
                {significantBarriers.map((b) => (
                  <div key={b.dimension} className="text-sm">
                    <span className="font-medium text-gray-900">{b.label}: </span>
                    <span className="text-gray-500">{b.description}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {flaggedItems.length === 0 && significantBarriers.length === 0 && (
            <div className="p-5 bg-white rounded-xl border border-cream-200">
              <p className="text-sm text-gray-500">
                No significant screening flags or barriers were identified. This is a positive sign,
                though it doesn't replace professional assessment.
              </p>
            </div>
          )}
        </div>
      )}
    </section>
  );
}

// ============================================================
// Export Section
// ============================================================
function ExportSection() {
  const { state } = useAssessment();
  const [copied, setCopied] = useState(false);

  const buildExportData = useCallback(() => {
    const results = state.results;
    if (!results) return null;

    return {
      participant: {
        name: state.participantName,
        age: state.participantAge,
        email: state.participantEmail,
      },
      completedAt: state.completedAt,
      responses: Object.fromEntries(
        Object.entries(state.responses).map(([k, v]) => [
          k,
          { value: v.value, type: v.type, timestamp: v.timestamp },
        ])
      ),
      results: {
        mbtiType: results.mbtiProfile.type,
        mbtiDichotomies: Object.fromEntries(
          results.mbtiProfile.dichotomies.map((d) => [
            d.label,
            { left: d.leftPole, leftScore: d.leftScore, right: d.rightPole, rightScore: d.rightScore },
          ])
        ),
        riasecCode: results.riasecProfile.hollandCode,
        riasecScores: Object.fromEntries(
          results.riasecProfile.scores.map((s) => [s.label, s.score])
        ),
        bigFive: Object.fromEntries(
          results.bigFiveProfile.dimensions.map((d) => [d.label, { score: d.score, description: d.description }])
        ),
        archetypes: results.archetypeProfile.slice(0, 5).map((a) => ({
          name: a.name,
          score: a.score,
          motto: a.motto,
        })),
        values: Object.fromEntries(
          results.valuesProfile.ranked.map((v) => [v.label, v.score])
        ),
        cognitiveStyle: Object.fromEntries(
          results.cognitiveProfile.styles.map((s) => [s.label, s.score])
        ),
        characterTraits: Object.fromEntries(
          results.traitProfile.traits.map((t) => [t.label, t.score])
        ),
        happiness: Object.fromEntries(
          results.happinessProfile.dimensions.map((d) => [
            d.label,
            { score: d.score, status: d.status, description: d.description },
          ])
        ),
        screeningFlags: Object.fromEntries(
          results.screeningFlags.flags.map((f) => [
            f.label,
            { score: f.score, flagged: f.flagged, suggestion: f.suggestion },
          ])
        ),
        barriers: Object.fromEntries(
          results.barrierProfile.barriers.map((b) => [
            b.label,
            { score: b.score, significant: b.significant, description: b.description },
          ])
        ),
        executiveFunction: Object.fromEntries(
          results.executiveFunctionProfile.functions.map((f) => [f.label, f.score])
        ),
        careerRecommendations: results.careerRecommendations.slice(0, 10).map((c) => ({
          name: c.name,
          matchScore: c.matchScore,
          whyItFits: c.whyItFits,
          exampleJobs: c.exampleJobs,
        })),
      },
    };
  }, [state]);

  const handleDownload = () => {
    const data = buildExportData();
    if (!data) return;

    const json = JSON.stringify(data, null, 2);
    const blob = new Blob([json], { type: "application/json" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `life-path-discovery-${state.participantName.toLowerCase().replace(/\s+/g, "-")}-${new Date().toISOString().split("T")[0]}.json`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  const handleShare = async () => {
    const results = state.results;
    if (!results) return;

    const summary = [
      `Life Path Discovery Results for ${state.participantName}`,
      ``,
      `Personality Type: ${results.mbtiProfile.type} — ${results.mbtiProfile.name}`,
      `Holland Code: ${results.riasecProfile.hollandCode}`,
      ``,
      `Top Archetypes:`,
      ...results.archetypeProfile.slice(0, 3).map((a, i) => `  ${i + 1}. ${a.name} (${a.score}%)`),
      ``,
      `Core Values:`,
      ...results.valuesProfile.ranked.slice(0, 3).map((v, i) => `  ${i + 1}. ${v.label}`),
      ``,
      `Top Career Matches:`,
      ...results.careerRecommendations.slice(0, 5).map((c, i) => `  ${i + 1}. ${c.name} (${c.matchScore}% match)`),
      ``,
      `Generated by Life Path Discovery`,
    ].join("\n");

    try {
      await navigator.clipboard.writeText(summary);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    } catch {
      // Fallback for older browsers
      const textarea = document.createElement("textarea");
      textarea.value = summary;
      document.body.appendChild(textarea);
      textarea.select();
      document.execCommand("copy");
      document.body.removeChild(textarea);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    }
  };

  return (
    <section className="space-y-4">
      <div className="flex items-center gap-3 mb-2">
        <div className="w-10 h-10 rounded-full bg-rose-500/10 flex items-center justify-center text-rose-500">
          <Download className="w-5 h-5" />
        </div>
        <div>
          <h2 className="font-serif text-2xl text-gray-900">Export Your Results</h2>
          <p className="text-sm text-gray-500">Save or share your complete assessment</p>
        </div>
      </div>

      <div className="flex flex-col sm:flex-row gap-3">
        <button
          onClick={handleDownload}
          className="flex-1 flex items-center justify-center gap-2 py-3 px-6 rounded-lg bg-rose-500 text-white font-semibold text-sm hover:bg-rose-600 transition-colors"
        >
          <Download className="w-4 h-4" />
          Download Full Report
        </button>
        <button
          onClick={handleShare}
          className="flex-1 flex items-center justify-center gap-2 py-3 px-6 rounded-lg border-2 border-rose-500 text-rose-500 font-semibold text-sm hover:bg-rose-50 transition-colors"
        >
          {copied ? (
            <>
              <CheckCircle className="w-4 h-4" />
              Copied to Clipboard!
            </>
          ) : (
            <>
              <Copy className="w-4 h-4" />
              Share Results
            </>
          )}
        </button>
      </div>
    </section>
  );
}

// ============================================================
// Main Results Page
// ============================================================
export default function ResultsPage() {
  const [, setLocation] = useLocation();
  const { state } = useAssessment();

  useEffect(() => {
    if (state.status !== "completed" || !state.results) {
      setLocation("/");
    }
  }, [state.status, state.results, setLocation]);

  const results = state.results;

  if (!results) {
    return (
      <div className="min-h-screen bg-cream-50 flex items-center justify-center">
        <div className="text-center space-y-4">
          <h2 className="font-serif text-2xl text-gray-900">Results not found</h2>
          <p className="text-sm text-gray-500">This assessment may not be complete yet.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-cream-50">
      {/* Header */}
      <div className="bg-gradient-to-b from-rose-500/5 via-transparent to-transparent">
        <div className="max-w-3xl mx-auto px-6 pt-12 pb-8 text-center">
          <p className="text-sm text-gray-500 mb-1">Results for</p>
          <h1 className="font-serif text-3xl md:text-4xl text-gray-900 mb-2">
            {state.participantName}'s Life Path Discovery
          </h1>
          <p className="text-sm text-gray-500">
            Completed {state.completedAt ? new Date(state.completedAt).toLocaleDateString() : "today"}
          </p>
        </div>
      </div>

      {/* Results sections */}
      <div className="max-w-3xl mx-auto px-6 pb-16 space-y-16">
        <MBTISection data={results.mbtiProfile} />
        <ArchetypesSection data={results.archetypeProfile} />
        <RIASECSection data={results.riasecProfile} />
        <BigFiveSection data={results.bigFiveProfile} />
        <ValuesSection data={results.valuesProfile} />
        <CognitiveSection data={results.cognitiveProfile} />
        <TraitsSection data={results.traitProfile} />
        <HappinessSection data={results.happinessProfile} />
        <MajorsSection data={results.careerRecommendations} />
        <CareersSection data={results.careerRecommendations} />
        <PractitionerSection
          screening={results.screeningFlags}
          ef={results.executiveFunctionProfile}
          barriers={results.barrierProfile}
        />
        <ExportSection />
      </div>
    </div>
  );
}
