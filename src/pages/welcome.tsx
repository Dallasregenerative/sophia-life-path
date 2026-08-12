import { useState } from "react";
import { useLocation } from "wouter";
import { useAssessment } from "../context/AssessmentContext";
import { segments } from "../data/questions";
import {
  Sparkles,
  Brain,
  Heart,
  Compass,
  Map,
  Sunrise,
  ArrowRight,
  Clock,
} from "lucide-react";

const segmentIcons: Record<string, React.ReactNode> = {
  Sparkles: <Sparkles className="w-5 h-5" />,
  Brain: <Brain className="w-5 h-5" />,
  Heart: <Heart className="w-5 h-5" />,
  Compass: <Compass className="w-5 h-5" />,
  Map: <Map className="w-5 h-5" />,
  Sunrise: <Sunrise className="w-5 h-5" />,
};

export default function WelcomePage() {
  const [, setLocation] = useLocation();
  const { startAssessment } = useAssessment();
  const [name, setName] = useState("Sophia");
  const [age, setAge] = useState("17");
  const [email, setEmail] = useState("");

  const canSubmit = name.trim().length > 0 && age.trim().length > 0 && parseInt(age) > 0;

  const handleBegin = () => {
    startAssessment(name.trim(), parseInt(age), email.trim());
    setLocation("/assessment");
  };

  return (
    <div className="min-h-screen bg-cream-50">
      {/* Hero */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-rose-500/5 via-transparent to-transparent" />
        <div className="relative max-w-3xl mx-auto px-6 pt-16 pb-12 text-center">
          {/* Logo mark */}
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-rose-500/10 mb-6">
            <svg
              width="32"
              height="32"
              viewBox="0 0 32 32"
              fill="none"
              aria-label="Life Path Discovery"
            >
              <path
                d="M16 2C8.268 2 2 8.268 2 16s6.268 14 14 14 14-6.268 14-14S23.732 2 16 2z"
                stroke="currentColor"
                strokeWidth="1.5"
                className="text-rose-500"
              />
              <path
                d="M16 6c-2 4-6 6-6 10a6 6 0 0012 0c0-4-4-6-6-10z"
                fill="currentColor"
                className="text-rose-500/30"
              />
              <path
                d="M16 6c-2 4-6 6-6 10a6 6 0 0012 0c0-4-4-6-6-10z"
                stroke="currentColor"
                strokeWidth="1.5"
                className="text-rose-500"
              />
            </svg>
          </div>

          <h1 className="font-serif text-4xl md:text-5xl text-gray-900 mb-3 tracking-tight">
            Sophia's Life Path Discovery
          </h1>
          <p className="text-lg text-gray-500 max-w-xl mx-auto leading-relaxed">
            A 90-minute guided journey to understand your personality, interests,
            values, and the paths that might light you up.
          </p>
        </div>
      </div>

      {/* Segment cards */}
      <div className="max-w-3xl mx-auto px-6 pb-12">
        <h2 className="font-serif text-xl text-gray-900 mb-4">What we'll explore together</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
          {segments.map((seg) => (
            <div
              key={seg.index}
              className="p-4 bg-white rounded-xl border border-cream-200"
            >
              <div className="flex items-start gap-3">
                <div className="flex-shrink-0 w-9 h-9 rounded-lg bg-rose-500/10 flex items-center justify-center text-rose-500">
                  {segmentIcons[seg.icon] || <Sparkles className="w-5 h-5" />}
                </div>
                <div className="min-w-0">
                  <h3 className="font-semibold text-sm text-gray-900">{seg.title}</h3>
                  <p className="text-xs text-gray-500 mt-0.5">{seg.subtitle}</p>
                  <div className="flex items-center gap-1 mt-1.5 text-xs text-gray-500">
                    <Clock className="w-3 h-3" />
                    <span>~{seg.estimatedMinutes} min</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Form */}
      <div className="max-w-md mx-auto px-6 pb-16">
        <div className="p-6 bg-white rounded-xl border border-cream-200">
          <h2 className="font-serif text-xl text-gray-900 mb-1">Before we begin</h2>
          <p className="text-sm text-gray-500 mb-5">Just a few details so we can personalize your experience.</p>

          <div className="space-y-4">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1.5">
                Your first name
              </label>
              <input
                id="name"
                type="text"
                placeholder="e.g. Sarah"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full px-3.5 py-2.5 rounded-lg border border-cream-300 bg-cream-50 text-gray-900 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-rose-500/30 focus:border-rose-400 transition-colors"
              />
            </div>
            <div>
              <label htmlFor="age" className="block text-sm font-medium text-gray-700 mb-1.5">
                Your age
              </label>
              <input
                id="age"
                type="number"
                placeholder="e.g. 20"
                value={age}
                onChange={(e) => setAge(e.target.value)}
                min={1}
                max={120}
                className="w-full px-3.5 py-2.5 rounded-lg border border-cream-300 bg-cream-50 text-gray-900 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-rose-500/30 focus:border-rose-400 transition-colors"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1.5">
                Email <span className="text-gray-400 font-normal">(optional)</span>
              </label>
              <input
                id="email"
                type="email"
                placeholder="you@example.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-3.5 py-2.5 rounded-lg border border-cream-300 bg-cream-50 text-gray-900 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-rose-500/30 focus:border-rose-400 transition-colors"
              />
            </div>
          </div>

          <button
            disabled={!canSubmit}
            onClick={handleBegin}
            className="w-full mt-6 py-3 px-6 rounded-lg bg-rose-500 text-white font-semibold text-sm flex items-center justify-center gap-2 transition-all hover:bg-rose-600 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            Begin Your Journey
            <ArrowRight className="w-4 h-4" />
          </button>

          <p className="text-center text-xs text-gray-400 mt-4 leading-relaxed">
            There are no wrong answers. This is about discovering who you truly are.
          </p>
        </div>
      </div>
    </div>
  );
}
