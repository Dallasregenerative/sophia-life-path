import React, { createContext, useContext, useState, useCallback } from "react";
import { segments, type Question } from "../data/questions";
import {
  computeAllResults,
  type FullResults,
  type ResponseInput,
} from "../lib/scoring";

// ============================================================
// Types
// ============================================================

interface StoredResponse {
  value: string;
  type: string;
  timestamp: string;
}

interface AssessmentState {
  participantName: string;
  participantAge: number;
  participantEmail: string;
  currentSegment: number;
  currentQuestionIndex: number;
  responses: Record<string, StoredResponse>;
  results: FullResults | null;
  status: "not_started" | "in_progress" | "completed";
  startedAt: string | null;
  completedAt: string | null;
}

interface AssessmentContextType {
  state: AssessmentState;
  startAssessment: (name: string, age: number, email: string) => void;
  saveResponse: (questionId: string, value: string, type: string) => void;
  goToNextQuestion: () => "next" | "segment_end";
  goToPrevQuestion: () => void;
  setSegment: (seg: number) => void;
  setQuestionIndex: (idx: number) => void;
  completeAssessment: () => void;
  getCurrentQuestion: () => Question | null;
  getProgress: () => number;
  getCurrentSegmentQuestions: () => Question[];
  getAnswer: (questionId: string) => string;
}

const defaultState: AssessmentState = {
  participantName: "",
  participantAge: 0,
  participantEmail: "",
  currentSegment: 0,
  currentQuestionIndex: 0,
  responses: {},
  results: null,
  status: "not_started",
  startedAt: null,
  completedAt: null,
};

// ============================================================
// Context
// ============================================================

const AssessmentContext = createContext<AssessmentContextType | null>(null);

export function useAssessment(): AssessmentContextType {
  const ctx = useContext(AssessmentContext);
  if (!ctx) throw new Error("useAssessment must be used within AssessmentProvider");
  return ctx;
}

// ============================================================
// Provider
// ============================================================

export function AssessmentProvider({ children }: { children: React.ReactNode }) {
  const [state, setState] = useState<AssessmentState>(defaultState);

  const startAssessment = useCallback((name: string, age: number, email: string) => {
    setState({
      ...defaultState,
      participantName: name,
      participantAge: age,
      participantEmail: email,
      status: "in_progress",
      startedAt: new Date().toISOString(),
    });
  }, []);

  const saveResponse = useCallback((questionId: string, value: string, type: string) => {
    setState((prev) => ({
      ...prev,
      responses: {
        ...prev.responses,
        [questionId]: {
          value,
          type,
          timestamp: new Date().toISOString(),
        },
      },
    }));
  }, []);

  const goToNextQuestion = useCallback((): "next" | "segment_end" => {
    const seg = segments[state.currentSegment];
    if (!seg) return "segment_end";
    const questions = seg.questions;

    if (state.currentQuestionIndex < questions.length - 1) {
      setState((prev) => ({
        ...prev,
        currentQuestionIndex: prev.currentQuestionIndex + 1,
      }));
      return "next";
    } else {
      return "segment_end";
    }
  }, [state.currentSegment, state.currentQuestionIndex]);

  const goToPrevQuestion = useCallback(() => {
    if (state.currentQuestionIndex > 0) {
      setState((prev) => ({
        ...prev,
        currentQuestionIndex: prev.currentQuestionIndex - 1,
      }));
    }
  }, [state.currentQuestionIndex]);

  const setSegment = useCallback((seg: number) => {
    setState((prev) => ({
      ...prev,
      currentSegment: seg,
      currentQuestionIndex: 0,
    }));
  }, []);

  const setQuestionIndex = useCallback((idx: number) => {
    setState((prev) => ({
      ...prev,
      currentQuestionIndex: idx,
    }));
  }, []);

  const completeAssessment = useCallback(() => {
    // Build responses array for the scoring engine
    const responseInputs: ResponseInput[] = Object.entries(state.responses).map(
      ([questionId, resp]) => ({
        questionId,
        responseValue: resp.value,
      })
    );

    const results = computeAllResults(responseInputs);

    setState((prev) => ({
      ...prev,
      results,
      status: "completed",
      completedAt: new Date().toISOString(),
    }));
  }, [state.responses]);

  const getCurrentQuestion = useCallback((): Question | null => {
    const seg = segments[state.currentSegment];
    if (!seg) return null;
    return seg.questions[state.currentQuestionIndex] || null;
  }, [state.currentSegment, state.currentQuestionIndex]);

  const getProgress = useCallback((): number => {
    const totalQuestions = segments.reduce((sum, s) => sum + s.questions.length, 0);
    const answeredCount = Object.keys(state.responses).length;
    return totalQuestions > 0 ? (answeredCount / totalQuestions) * 100 : 0;
  }, [state.responses]);

  const getCurrentSegmentQuestions = useCallback((): Question[] => {
    const seg = segments[state.currentSegment];
    return seg?.questions || [];
  }, [state.currentSegment]);

  const getAnswer = useCallback(
    (questionId: string): string => {
      return state.responses[questionId]?.value || "";
    },
    [state.responses]
  );

  const value: AssessmentContextType = {
    state,
    startAssessment,
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
  };

  return (
    <AssessmentContext.Provider value={value}>
      {children}
    </AssessmentContext.Provider>
  );
}
