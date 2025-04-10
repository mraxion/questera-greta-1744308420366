export const categories = [
  {
    id: 'basics',
    name: 'Basic Compliments',
    description: 'Simple and effective compliments',
    level: 1
  },
  {
    id: 'icebreakers',
    name: 'Icebreakers',
    description: 'Conversation starters',
    level: 1
  },
  {
    id: 'casual',
    name: 'Casual Chat',
    description: 'Everyday flirting situations',
    level: 2
  },
  {
    id: 'romantic',
    name: 'Romantic Expressions',
    description: 'Deep and meaningful phrases',
    level: 3
  },
  {
    id: 'dating',
    name: 'Dating',
    description: 'Perfect for dates',
    level: 2
  },
  {
    id: 'advanced',
    name: 'Advanced Flirting',
    description: 'Sophisticated expressions',
    level: 3
  }
];

export const phrases = {
  es: [
    // Basic Compliments (Level 1) - First 10: Simple Appearance
    {
      id: 'basic_1',
      english: "I like your smile",
      translation: "Me gusta tu sonrisa",
      category: "basics",
      situation: "First meeting",
      difficulty: 1,
      hint: "Simple, direct compliment"
    },
    // ... rest of the phrases remain the same
  ],
  it: [
    // Italian translations
  ],
  pt: [
    // Portuguese translations
  ]
};

// Utility functions for phrases
export const getDifficultyLabel = (level) => {
  switch (level) {
    case 1: return 'Beginner';
    case 2: return 'Intermediate';
    case 3: return 'Advanced';
    default: return 'Unknown';
  }
};

export const getCategoryById = (categoryId) => {
  return categories.find(cat => cat.id === categoryId);
};

export const getPhrasesByCategory = (language, categoryId) => {
  return phrases[language].filter(phrase => phrase.category === categoryId);
};