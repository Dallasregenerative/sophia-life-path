export interface Archetype {
  id: string;
  name: string;
  motto: string;
  description: string;
  strengths: string[];
  shadows: string[];
  color: string;
}

export const archetypes: Record<string, Archetype> = {
  archetype_hero: {
    id: "archetype_hero",
    name: "The Hero",
    motto: "Where there's a will, there's a way.",
    description: "You're driven to prove your worth through courageous action. You face challenges head-on and believe you can make a difference through determination and hard work.",
    strengths: ["Courage", "Determination", "Competence", "Mastery"],
    shadows: ["Arrogance", "Burnout", "Need to always fight a battle"],
    color: "#C0392B",
  },
  archetype_caregiver: {
    id: "archetype_caregiver",
    name: "The Caregiver",
    motto: "Love your neighbor as yourself.",
    description: "You find meaning through nurturing and protecting others. Your compassion runs deep, and you feel most fulfilled when you know the people around you are safe and supported.",
    strengths: ["Compassion", "Generosity", "Nurturing", "Selflessness"],
    shadows: ["Martyrdom", "People-pleasing", "Enabling"],
    color: "#E8A0BF",
  },
  archetype_explorer: {
    id: "archetype_explorer",
    name: "The Explorer",
    motto: "Don't fence me in.",
    description: "You crave freedom, adventure, and new experiences. The unknown doesn't scare you — it excites you. You're on a lifelong journey to find yourself and your place in the world.",
    strengths: ["Independence", "Ambition", "Authenticity", "Bravery"],
    shadows: ["Restlessness", "Commitment-phobia", "Chronic dissatisfaction"],
    color: "#27AE60",
  },
  archetype_rebel: {
    id: "archetype_rebel",
    name: "The Rebel",
    motto: "Rules are made to be broken.",
    description: "You question the status quo and aren't afraid to tear down what isn't working. You're drawn to revolution — big or small — and value radical authenticity.",
    strengths: ["Radical freedom", "Courage of conviction", "Disruption", "Independence"],
    shadows: ["Self-destructive behavior", "Anger", "Nihilism"],
    color: "#8E44AD",
  },
  archetype_creator: {
    id: "archetype_creator",
    name: "The Creator",
    motto: "If it can be imagined, it can be created.",
    description: "You're driven to bring new things into existence. Whether through art, ideas, or innovation, you need to express your inner vision and make something that endures.",
    strengths: ["Creativity", "Vision", "Innovation", "Self-expression"],
    shadows: ["Perfectionism", "Self-doubt", "Impracticality"],
    color: "#E67E22",
  },
  archetype_sage: {
    id: "archetype_sage",
    name: "The Sage",
    motto: "The truth will set you free.",
    description: "You're a seeker of knowledge and understanding. You believe that wisdom is the path to freedom, and you're happiest when you're learning, analyzing, or teaching.",
    strengths: ["Wisdom", "Intelligence", "Analytical thinking", "Objectivity"],
    shadows: ["Overthinking", "Detachment", "Ivory tower syndrome"],
    color: "#2980B9",
  },
  archetype_magician: {
    id: "archetype_magician",
    name: "The Magician",
    motto: "I make things happen.",
    description: "You believe in transformation — of yourself, of others, of the world. You see connections others miss and have an almost uncanny ability to turn ideas into reality.",
    strengths: ["Vision", "Transformation", "Charisma", "Catalyzing change"],
    shadows: ["Manipulation", "Disconnection from reality", "Shadowy motives"],
    color: "#9B59B6",
  },
  archetype_ruler: {
    id: "archetype_ruler",
    name: "The Ruler",
    motto: "Power isn't everything — it's the only thing.",
    description: "You're a natural leader who takes responsibility and creates order. You want to build something lasting and are willing to make the tough calls to get there.",
    strengths: ["Leadership", "Responsibility", "Organization", "Authority"],
    shadows: ["Controlling behavior", "Rigidity", "Fear of chaos"],
    color: "#2C3E50",
  },
  archetype_innocent: {
    id: "archetype_innocent",
    name: "The Innocent",
    motto: "Free to be you and me.",
    description: "You have an unshakeable faith that things can be good — that safety, happiness, and simplicity are not naive goals but worthy ones. Your optimism is your superpower.",
    strengths: ["Optimism", "Faith", "Purity of intention", "Trust"],
    shadows: ["Denial", "Naivety", "Avoidance of hard truths"],
    color: "#F1C40F",
  },
  archetype_jester: {
    id: "archetype_jester",
    name: "The Jester",
    motto: "You only live once.",
    description: "You believe life is meant to be enjoyed. Your humor, spontaneity, and ability to find joy in the moment make you a light in other people's lives.",
    strengths: ["Joy", "Humor", "Present-moment living", "Lightness"],
    shadows: ["Avoidance of depth", "Irresponsibility", "Cruelty through humor"],
    color: "#F39C12",
  },
  archetype_lover: {
    id: "archetype_lover",
    name: "The Lover",
    motto: "I only have eyes for you.",
    description: "You're driven by deep connection — with people, experiences, beauty, and life itself. Passion, intimacy, and sensory richness are what make life worth living for you.",
    strengths: ["Passion", "Commitment", "Appreciation of beauty", "Empathy"],
    shadows: ["Obsessiveness", "Jealousy", "Loss of self in others"],
    color: "#E74C3C",
  },
  archetype_everyperson: {
    id: "archetype_everyperson",
    name: "The Everyperson",
    motto: "All people are created equal.",
    description: "You value belonging, connection, and being real. You don't need to be special — you just want to be yourself and find your people. Your authenticity is magnetic.",
    strengths: ["Relatability", "Empathy", "Groundedness", "Realism"],
    shadows: ["Blending in too much", "Cynicism", "Loss of individual voice"],
    color: "#7F8C8D",
  },
};
