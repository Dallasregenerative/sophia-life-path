export interface MBTIType {
  code: string;
  name: string;
  description: string;
  strengths: string[];
  challenges: string[];
  careerFit: string;
}

export const mbtiTypes: Record<string, MBTIType> = {
  INTJ: {
    code: "INTJ",
    name: "The Architect",
    description: "Strategic and independent, you see the world as a chessboard of possibilities. You thrive when building systems, solving complex problems, and turning ambitious visions into reality.",
    strengths: ["Strategic thinking", "Independence", "Determination", "High standards", "Innovation"],
    challenges: ["Perfectionism", "Impatience with inefficiency", "Difficulty expressing emotions", "Can seem aloof"],
    careerFit: "You excel in roles that reward independent thinking and long-term strategy — science, engineering, architecture, law, or entrepreneurship.",
  },
  INTP: {
    code: "INTP",
    name: "The Thinker",
    description: "Endlessly curious and analytically gifted, you're drawn to understanding how things work at the deepest level. Your mind naturally finds patterns where others see chaos.",
    strengths: ["Analytical depth", "Creativity", "Open-mindedness", "Objectivity", "Intellectual curiosity"],
    challenges: ["Overthinking", "Procrastination", "Social withdrawal", "Difficulty with routine"],
    careerFit: "You thrive in research, software development, data science, philosophy, or any field that rewards deep thinking and creative problem-solving.",
  },
  ENTJ: {
    code: "ENTJ",
    name: "The Commander",
    description: "A natural leader with a clear vision, you have the rare ability to see the big picture and rally people to make it happen. You're energized by challenges and driven to achieve.",
    strengths: ["Leadership", "Decisiveness", "Confidence", "Strategic planning", "Efficiency"],
    challenges: ["Impatience", "Dominance", "Difficulty with vulnerability", "Workaholism"],
    careerFit: "You're built for leadership — business management, law, consulting, politics, or entrepreneurship where you can shape outcomes.",
  },
  ENTP: {
    code: "ENTP",
    name: "The Visionary",
    description: "Quick-witted and inventive, you see possibilities everywhere and love debating ideas. You're at your best when brainstorming, challenging assumptions, and exploring what could be.",
    strengths: ["Innovation", "Quick thinking", "Adaptability", "Charisma", "Problem-solving"],
    challenges: ["Difficulty following through", "Argumentativeness", "Boredom with routine", "Restlessness"],
    careerFit: "You flourish in entrepreneurship, marketing, consulting, journalism, or any field that rewards creative thinking and persuasion.",
  },
  INFJ: {
    code: "INFJ",
    name: "The Advocate",
    description: "Deeply intuitive and compassionate, you have a gift for understanding people and a quiet determination to make the world better. You see meaning in everything and feel called to a purpose.",
    strengths: ["Empathy", "Insight", "Idealism", "Determination", "Creativity"],
    challenges: ["Perfectionism", "Burnout from over-giving", "Difficulty with conflict", "Overthinking"],
    careerFit: "You shine in counseling, writing, education, healthcare, social work, or any role where you can advocate for others and create meaningful change.",
  },
  INFP: {
    code: "INFP",
    name: "The Dreamer",
    description: "Idealistic, creative, and deeply feeling, you're guided by your values and your vision of what the world could be. You have a rich inner world and a gift for authentic self-expression.",
    strengths: ["Empathy", "Creativity", "Authenticity", "Idealism", "Open-mindedness"],
    challenges: ["Sensitivity to criticism", "Difficulty with structure", "Unrealistic expectations", "Self-isolation"],
    careerFit: "You thrive in writing, art, psychology, nonprofit work, education, or any role that lets you express your values and help others heal or grow.",
  },
  ENFJ: {
    code: "ENFJ",
    name: "The Teacher",
    description: "Warm, inspiring, and natural at bringing people together, you have an innate ability to see potential in others and help them grow. People are drawn to your enthusiasm and genuine care.",
    strengths: ["Inspiration", "Empathy", "Communication", "Leadership", "Generosity"],
    challenges: ["People-pleasing", "Over-involvement", "Neglecting own needs", "Idealism"],
    careerFit: "You excel in teaching, counseling, HR, public relations, social entrepreneurship, or any role where you can mentor and inspire.",
  },
  ENFP: {
    code: "ENFP",
    name: "The Campaigner",
    description: "Enthusiastic, creative, and deeply curious about people, you light up every room you walk into. You see life as full of possibilities and are passionate about exploring all of them.",
    strengths: ["Enthusiasm", "Creativity", "Empathy", "Adaptability", "Communication"],
    challenges: ["Difficulty focusing", "Overcommitment", "Sensitivity", "Avoidance of conflict"],
    careerFit: "You flourish in creative roles, journalism, counseling, marketing, event planning, or entrepreneurship — anywhere that values imagination and people skills.",
  },
  ISTJ: {
    code: "ISTJ",
    name: "The Inspector",
    description: "Reliable, thorough, and deeply responsible, you're the person everyone counts on. You value tradition, clear expectations, and doing things right — and you follow through every time.",
    strengths: ["Reliability", "Organization", "Thoroughness", "Loyalty", "Practicality"],
    challenges: ["Rigidity", "Difficulty with change", "Suppressing emotions", "Judgmental tendencies"],
    careerFit: "You excel in accounting, law enforcement, military, project management, engineering, or any role that rewards precision and dependability.",
  },
  ISFJ: {
    code: "ISFJ",
    name: "The Protector",
    description: "Gentle, devoted, and deeply caring, you show your love through actions rather than words. You have an incredible memory for people and details, and you quietly keep everything running smoothly.",
    strengths: ["Loyalty", "Patience", "Attention to detail", "Supportiveness", "Reliability"],
    challenges: ["Difficulty saying no", "Undervaluing yourself", "Avoiding conflict", "Resistance to change"],
    careerFit: "You shine in nursing, teaching, social work, administrative roles, librarianship, or any role where your care and reliability make a difference.",
  },
  ESTJ: {
    code: "ESTJ",
    name: "The Director",
    description: "Organized, direct, and committed to getting results, you naturally take charge and create structure. You value honesty, hard work, and following through on commitments.",
    strengths: ["Organization", "Decisiveness", "Reliability", "Leadership", "Directness"],
    challenges: ["Inflexibility", "Impatience", "Difficulty with emotions", "Controlling tendencies"],
    careerFit: "You thrive in management, military, law enforcement, finance, school administration, or any role that needs structure and decisive leadership.",
  },
  ESFJ: {
    code: "ESFJ",
    name: "The Caregiver",
    description: "Warm, social, and deeply attuned to others' needs, you're the heart of every group. You create harmony wherever you go and find deep satisfaction in taking care of the people you love.",
    strengths: ["Warmth", "Loyalty", "Social awareness", "Organization", "Generosity"],
    challenges: ["People-pleasing", "Sensitivity to criticism", "Difficulty with change", "Over-involvement"],
    careerFit: "You excel in healthcare, teaching, event planning, customer service, HR, or any role where your people skills and organizational ability can shine.",
  },
  ISTP: {
    code: "ISTP",
    name: "The Craftsperson",
    description: "Cool, analytical, and hands-on, you understand how things work at a fundamental level. You're a quiet problem-solver who learns by doing and stays calm under pressure.",
    strengths: ["Practical skills", "Adaptability", "Logic", "Independence", "Cool-headedness"],
    challenges: ["Emotional detachment", "Risk-taking", "Difficulty with long-term planning", "Restlessness"],
    careerFit: "You thrive in engineering, mechanics, IT, forensics, athletics, or any hands-on field that rewards practical problem-solving.",
  },
  ISFP: {
    code: "ISFP",
    name: "The Artist",
    description: "Sensitive, creative, and deeply present, you experience the world through your senses and your values. You express yourself through what you do rather than what you say.",
    strengths: ["Creativity", "Sensitivity", "Loyalty", "Adaptability", "Aesthetic sense"],
    challenges: ["Conflict avoidance", "Difficulty with planning", "Underestimating yourself", "Fiercely private"],
    careerFit: "You flourish in art, design, music, veterinary care, culinary arts, or any field that lets you create beauty and stay true to your values.",
  },
  ESTP: {
    code: "ESTP",
    name: "The Dynamo",
    description: "Bold, energetic, and action-oriented, you live fully in the present moment. You have a talent for reading situations quickly, taking calculated risks, and making things happen.",
    strengths: ["Boldness", "Practicality", "Sociability", "Quick thinking", "Directness"],
    challenges: ["Impatience", "Risk-taking", "Difficulty with routine", "Insensitivity"],
    careerFit: "You thrive in sales, entrepreneurship, emergency services, athletics, real estate, or any fast-paced field that rewards action and adaptability.",
  },
  ESFP: {
    code: "ESFP",
    name: "The Performer",
    description: "Spontaneous, energetic, and genuinely fun to be around, you bring joy wherever you go. You live in the moment, love connecting with people, and have a talent for making life feel like a celebration.",
    strengths: ["Enthusiasm", "Sociability", "Practicality", "Spontaneity", "Optimism"],
    challenges: ["Difficulty with long-term planning", "Easily bored", "Sensitivity", "Avoidance of conflict"],
    careerFit: "You excel in entertainment, hospitality, teaching, sales, event planning, or any role that lets your natural warmth and energy shine.",
  },
};
