import { useState, useEffect, useCallback } from "react";
import { useLocation } from "wouter";
import { useAssessment } from "../context/AssessmentContext";
import { segments, type Question } from "../data/questions";
import {
  ArrowLeft,
  ArrowRight,
  Check,
  Clock,
  Sparkles,
  Brain,
  Heart,
  Compass,
  Map,
  Sunrise,
  Loader2,
  Coffee,
} from "lucide-react";

const segmentIcons: Record<string, React.ReactNode> = {
  Sparkles: <Sparkles className="w-5 h-5" />,
  Brain: <Brain className="w-5 h-5" />,
  Heart: <Heart className="w-5 h-5" />,
  Compass: <Compass className="w-5 h-5" />,
  Map: <Map className="w-5 h-5" />,
  Sunrise: <Sunrise className="w-5 h-5" />,
};

// ============================================================
// Likert renderer
// ============================================================
function LikertQuestion({
  question,
  value,
  onChange,
}: {
  question: Question;
  value: string;
  onChange: (v: string) => void;
}) {
  const options = question.options || [
    { label: "Strongly Disagree", value: "1" },
    { label: "Disagree", value: "2" },
    { label: "Neutral", value: "3" },
    { label: "Agree", value: "4" },
    { label: "Strongly Agree", value: "5" },
  ];

  return (
    <div className="flex flex-wrap gap-2 justify-center">
      {options.map((opt) => {
        const optValue = String(opt.value);
        const selected = value === optValue;
        return (
          <button
            key={optValue}
            onClick={() => onChange(optValue)}
            className={`
              px-4 py-2.5 rounded-full text-sm font-medium transition-all duration-200
              ${
                selected
                  ? "bg-rose-500 text-white scale-105 shadow-sm"
                  : "bg-cream-200 text-gray-600 hover:bg-cream-300"
              }
            `}
          >
            {opt.label}
          </button>
        );
      })}
    </div>
  );
}

// ============================================================
// Choice renderer
// ============================================================
function ChoiceQuestion({
  question,
  value,
  onChange,
}: {
  question: Question;
  value: string;
  onChange: (v: string) => void;
}) {
  const options = question.options || [];
  return (
    <div className="space-y-2">
      {options.map((opt) => {
        const optValue = String(opt.value);
        const selected = value === optValue;
        return (
          <button
            key={optValue}
            onClick={() => onChange(optValue)}
            className={`
              w-full text-left p-4 rounded-xl transition-all duration-200 border
              ${
                selected
                  ? "bg-rose-50 border-rose-400 text-gray-900"
                  : "bg-white border-cream-200 text-gray-900 hover:border-rose-300"
              }
            `}
          >
            <span className="text-sm leading-relaxed">{opt.label}</span>
          </button>
        );
      })}
    </div>
  );
}

// ============================================================
// Scenario renderer
// ============================================================
function ScenarioQuestion({
  question,
  value,
  onChange,
}: {
  question: Question;
  value: string;
  onChange: (v: string) => void;
}) {
  const options = question.options || [];
  return (
    <div className="space-y-3">
      {options.map((opt) => {
        const optValue = String(opt.value);
        const selected = value === optValue;
        return (
          <button
            key={optValue}
            onClick={() => onChange(optValue)}
            className={`
              w-full text-left p-5 rounded-xl transition-all duration-200 border
              ${
                selected
                  ? "bg-rose-50 border-rose-400 text-gray-900"
                  : "bg-white border-cream-200 text-gray-900 hover:border-rose-300"
              }
            `}
          >
            <span className="text-sm leading-relaxed">{opt.label}</span>
          </button>
        );
      })}
    </div>
  );
}

// ============================================================
// Slider renderer
// ============================================================
function SliderQuestion({
  question,
  value,
  onChange,
}: {
  question: Question;
  value: string;
  onChange: (v: string) => void;
}) {
  const config = question.sliderConfig || {
    min: 1,
    max: 10,
    minLabel: "Not at all",
    maxLabel: "Completely",
    step: 1,
  };
  const numValue = value ? parseInt(value) : Math.round((config.min + config.max) / 2);

  return (
    <div className="space-y-4 px-2">
      <div className="flex justify-between text-xs text-gray-500">
        <span>{config.minLabel}</span>
        <span>{config.maxLabel}</span>
      </div>
      <input
        type="range"
        min={config.min}
        max={config.max}
        step={config.step}
        value={numValue}
        onChange={(e) => onChange(e.target.value)}
        className="w-full"
      />
      <div className="text-center">
        <span className="inline-block px-4 py-1.5 rounded-full bg-rose-50 text-rose-500 font-semibold text-lg">
          {numValue}
        </span>
      </div>
    </div>
  );
}

// ============================================================
// Text renderer
// ============================================================
function TextQuestion({
  value,
  onChange,
}: {
  question: Question;
  value: string;
  onChange: (v: string) => void;
}) {
  return (
    <textarea
      placeholder="Take your time — there's no word limit..."
      value={value}
      onChange={(e) => onChange(e.target.value)}
      className="w-full min-h-[120px] px-4 py-3 rounded-xl border border-cream-300 bg-cream-50 text-gray-900 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-rose-500/30 focus:border-rose-400 resize-none transition-colors"
    />
  );
}

// ============================================================
// Segment Intro
// ============================================================
function SegmentIntro({
  segmentIndex,
  onContinue,
}: {
  segmentIndex: number;
  onContinue: () => void;
}) {
  const seg = segments[segmentIndex];
  if (!seg) return null;

  return (
    <div className="flex items-center justify-center min-h-[60vh]">
      <div className="max-w-md text-center space-y-6 animate-fade-in">
        <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-rose-500/10 text-rose-500">
          {segmentIcons[seg.icon] || <Sparkles className="w-6 h-6" />}
        </div>
        <div>
          <p className="text-sm text-gray-500 font-medium mb-1">
            Part {segmentIndex + 1} of {segments.length}
          </p>
          <h2 className="font-serif text-3xl text-gray-900 mb-2">{seg.title}</h2>
          <p className="text-sm text-gray-500">{seg.subtitle}</p>
        </div>
        <p className="text-sm text-gray-500 leading-relaxed">{seg.description}</p>
        <div className="flex items-center justify-center gap-1.5 text-sm text-gray-500">
          <Clock className="w-4 h-4" />
          <span>About {seg.estimatedMinutes} minutes</span>
        </div>
        <button
          onClick={onContinue}
          className="inline-flex items-center gap-2 py-3 px-8 rounded-lg bg-rose-500 text-white font-semibold text-sm hover:bg-rose-600 transition-colors"
        >
          Let's go
          <ArrowRight className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
}

// ============================================================
// Segment Complete
// ============================================================
function SegmentComplete({
  segmentIndex,
  isLast,
  onContinue,
  isComputing,
}: {
  segmentIndex: number;
  isLast: boolean;
  onContinue: () => void;
  isComputing: boolean;
}) {
  const seg = segments[segmentIndex];
  const messages = [
    "Beautiful work. You're doing great.",
    "Wonderful — you're really reflecting here.",
    "This takes courage. Thank you for being honest.",
    "You're halfway there. How are you feeling?",
    "Almost done. You've put real thought into this.",
    "That's it — you've completed everything!",
  ];

  return (
    <div className="flex items-center justify-center min-h-[60vh]">
      <div className="max-w-md text-center space-y-6 animate-fade-in">
        <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-sage-100 text-sage-600">
          <Check className="w-6 h-6" />
        </div>
        <div>
          <h2 className="font-serif text-2xl text-gray-900 mb-2">
            {seg?.title} — Complete
          </h2>
          <p className="text-sm text-gray-500 leading-relaxed">
            {messages[segmentIndex] || "Great work!"}
          </p>
        </div>
        {!isLast && (
          <div className="flex items-center justify-center gap-2 text-sm text-gray-500">
            <Coffee className="w-4 h-4" />
            <span>Feel free to take a break if you need one</span>
          </div>
        )}
        <button
          onClick={onContinue}
          disabled={isComputing}
          className="inline-flex items-center gap-2 py-3 px-8 rounded-lg bg-rose-500 text-white font-semibold text-sm hover:bg-rose-600 transition-colors disabled:opacity-50"
        >
          {isComputing ? (
            <Loader2 className="w-4 h-4 animate-spin" />
          ) : isLast ? (
            <>
              See My Results
              <Sparkles className="w-4 h-4" />
            </>
          ) : (
            <>
              Continue to Next Section
              <ArrowRight className="w-4 h-4" />
            </>
          )}
        </button>
      </div>
    </div>
  );
}

// ============================================================
// Main Assessment Page
// ============================================================
export default function AssessmentPage() {
  const [, setLocation] = useLocation();
  const {
    state,
    saveResponse,
    goToNextQuestion,
    goToPrevQuestion,
    setSegment,
    setQuestionIndex,
    completeAssessment,
    getCurrentQuestion,
    getProgress,
    getCurrentSegmentQuestions,
    getAnswer,
  } = useAssessment();

  const [showingIntro, setShowingIntro] = useState(true);
  const [showingComplete, setShowingComplete] = useState(false);
  const [showingThankYou, setShowingThankYou] = useState(false);
  const [downloaded, setDownloaded] = useState(false);
  const [segmentStartTime, setSegmentStartTime] = useState(Date.now());
  const [elapsedSeconds, setElapsedSeconds] = useState(0);
  const [isComputing, setIsComputing] = useState(false);

  // Redirect if not started
  useEffect(() => {
    if (state.status === "not_started") {
      setLocation("/");
    }
  }, [state.status, setLocation]);

  // Timer
  useEffect(() => {
    const interval = setInterval(() => {
      setElapsedSeconds(Math.floor((Date.now() - segmentStartTime) / 1000));
    }, 1000);
    return () => clearInterval(interval);
  }, [segmentStartTime]);

  const currentQuestion = getCurrentQuestion();
  const questions = getCurrentSegmentQuestions();
  const currentAnswer = currentQuestion ? getAnswer(currentQuestion.id) : "";
  const seg = segments[state.currentSegment];

  const handleAnswer = useCallback(
    (value: string) => {
      if (!currentQuestion) return;
      saveResponse(currentQuestion.id, value, currentQuestion.type);
    },
    [currentQuestion, saveResponse]
  );

  const canProceed = currentQuestion
    ? currentQuestion.required
      ? currentAnswer.trim().length > 0
      : true
    : false;

  const handleNext = () => {
    const result = goToNextQuestion();
    if (result === "segment_end") {
      setShowingComplete(true);
    }
  };

  const handlePrevious = () => {
    goToPrevQuestion();
  };

  const handleSegmentContinue = () => {
    if (state.currentSegment < segments.length - 1) {
      const nextSeg = state.currentSegment + 1;
      setSegment(nextSeg);
      setQuestionIndex(0);
      setShowingComplete(false);
      setShowingIntro(true);
      setSegmentStartTime(Date.now());
    } else {
      // All segments done — compute results and show thank you
      setIsComputing(true);
      setTimeout(() => {
        completeAssessment();
        setShowingThankYou(true);
        setIsComputing(false);
      }, 500);
    }
  };

  const formatTime = (seconds: number) => {
    const m = Math.floor(seconds / 60);
    const s = seconds % 60;
    return `${m}:${s.toString().padStart(2, "0")}`;
  };

  const overallProgress = getProgress();

  const handleDownloadForDoctor = () => {
    const exportData = {
      participant: {
        name: state.participantName,
        age: state.participantAge,
        email: state.participantEmail,
      },
      completedAt: state.completedAt || new Date().toISOString(),
      responses: state.responses,
      results: state.results,
    };
    const blob = new Blob([JSON.stringify(exportData, null, 2)], { type: "application/json" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `life-path-results-${state.participantName?.toLowerCase().replace(/\s+/g, "-") || "patient"}.json`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
    setDownloaded(true);
  };

  if (state.status === "not_started") {
    return null;
  }

  // Thank you screen after completion — no results shown
  if (showingThankYou) {
    return (
      <div className="min-h-screen bg-cream-50 flex items-center justify-center p-6">
        <div className="max-w-md w-full text-center">
          <div className="w-20 h-20 rounded-full bg-sage-100 flex items-center justify-center mx-auto mb-6">
            <svg className="w-10 h-10 text-sage-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M9 12l2 2 4-4" strokeLinecap="round" strokeLinejoin="round" />
              <circle cx="12" cy="12" r="10" />
            </svg>
          </div>
          <h1 className="font-serif text-3xl text-gray-900 mb-3">You're all done!</h1>
          <p className="text-gray-600 mb-2">Thank you for taking the time to complete this.</p>
          <p className="text-gray-600 mb-8">Your answers have been recorded. There's just one last step.</p>

          <div className="bg-white rounded-2xl border border-cream-200 p-6 mb-6 text-left">
            <p className="font-semibold text-gray-900 mb-2">Please send your results to Dr. C</p>
            <p className="text-sm text-gray-500 mb-4">Tap the button below to download your results file, then text or email it to Dr. C.</p>
            <button
              onClick={handleDownloadForDoctor}
              className="w-full py-3 px-6 rounded-xl font-semibold text-white transition-all"
              style={{ backgroundColor: downloaded ? "#5f825f" : "#e54d6d" }}
              data-testid="button-download-results"
            >
              {downloaded ? "✓ Downloaded — Now send it to Dr. C" : "Download Results File"}
            </button>
          </div>

          {downloaded && (
            <p className="text-sm text-gray-500">
              Check your downloads folder for the file and send it over. That's it!
            </p>
          )}
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-cream-50">
      {/* Top bar */}
      <div className="sticky top-0 z-10 bg-cream-50/90 backdrop-blur-sm border-b border-cream-200">
        <div className="max-w-2xl mx-auto px-6 py-3">
          {/* Segment dots */}
          <div className="flex items-center justify-between mb-2">
            <div className="flex items-center gap-1.5">
              {segments.map((_, i) => (
                <div
                  key={i}
                  className={`w-2.5 h-2.5 rounded-full transition-all ${
                    i < state.currentSegment
                      ? "bg-rose-500"
                      : i === state.currentSegment
                      ? "bg-rose-500 ring-2 ring-rose-500/30 scale-125"
                      : "bg-cream-300"
                  }`}
                />
              ))}
            </div>
            <div className="flex items-center gap-1.5 text-xs text-gray-500">
              <Clock className="w-3 h-3" />
              <span>{formatTime(elapsedSeconds)}</span>
            </div>
          </div>
          {/* Progress bar */}
          <div className="h-1 bg-cream-200 rounded-full overflow-hidden">
            <div
              className="h-full bg-rose-500 rounded-full transition-all duration-500"
              style={{ width: `${overallProgress}%` }}
            />
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-2xl mx-auto px-6 py-8">
        {showingIntro && !showingComplete ? (
          <SegmentIntro
            segmentIndex={state.currentSegment}
            onContinue={() => {
              setShowingIntro(false);
              setSegmentStartTime(Date.now());
            }}
          />
        ) : showingComplete ? (
          <SegmentComplete
            segmentIndex={state.currentSegment}
            isLast={state.currentSegment === segments.length - 1}
            onContinue={handleSegmentContinue}
            isComputing={isComputing}
          />
        ) : currentQuestion ? (
          <div className="animate-fade-in">
            {/* Question counter */}
            <div className="text-center mb-8">
              <p className="text-xs text-gray-500 font-medium">
                {seg?.title} — Question {state.currentQuestionIndex + 1} of {questions.length}
              </p>
            </div>

            {/* Question card */}
            <div className="p-6 md:p-8 bg-white rounded-xl border border-cream-200 mb-6">
              <h2 className="font-serif text-xl md:text-2xl text-gray-900 leading-relaxed mb-2">
                {currentQuestion.text}
              </h2>
              {currentQuestion.subtext && (
                <p className="text-sm text-gray-500 mb-6 italic">
                  {currentQuestion.subtext}
                </p>
              )}
              {!currentQuestion.subtext && <div className="mb-6" />}

              {/* Render question by type */}
              {currentQuestion.type === "likert" && (
                <LikertQuestion
                  question={currentQuestion}
                  value={currentAnswer}
                  onChange={handleAnswer}
                />
              )}
              {currentQuestion.type === "choice" && (
                <ChoiceQuestion
                  question={currentQuestion}
                  value={currentAnswer}
                  onChange={handleAnswer}
                />
              )}
              {currentQuestion.type === "scenario" && (
                <ScenarioQuestion
                  question={currentQuestion}
                  value={currentAnswer}
                  onChange={handleAnswer}
                />
              )}
              {currentQuestion.type === "slider" && (
                <SliderQuestion
                  question={currentQuestion}
                  value={currentAnswer}
                  onChange={handleAnswer}
                />
              )}
              {currentQuestion.type === "text" && (
                <TextQuestion
                  question={currentQuestion}
                  value={currentAnswer}
                  onChange={handleAnswer}
                />
              )}
            </div>

            {/* Navigation */}
            <div className="flex items-center justify-between">
              <button
                onClick={handlePrevious}
                disabled={state.currentQuestionIndex === 0}
                className="flex items-center gap-2 px-4 py-2.5 rounded-lg text-sm font-medium text-gray-500 hover:text-gray-900 hover:bg-cream-100 transition-colors disabled:opacity-30 disabled:cursor-not-allowed"
              >
                <ArrowLeft className="w-4 h-4" />
                Previous
              </button>
              <button
                onClick={handleNext}
                disabled={!canProceed}
                className="flex items-center gap-2 px-6 py-2.5 rounded-lg text-sm font-semibold bg-rose-500 text-white hover:bg-rose-600 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {state.currentQuestionIndex < questions.length - 1 ? "Next" : "Finish Section"}
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        ) : (
          <div className="flex items-center justify-center min-h-[60vh]">
            <Loader2 className="w-8 h-8 animate-spin text-gray-400" />
          </div>
        )}
      </div>

      {/* Loading overlay for completion */}
      {isComputing && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-cream-50/80 backdrop-blur-sm">
          <div className="text-center space-y-4">
            <Loader2 className="w-10 h-10 animate-spin text-rose-500 mx-auto" />
            <p className="text-sm text-gray-500">Analyzing your responses...</p>
          </div>
        </div>
      )}
    </div>
  );
}
