import React, { createContext, useState, useContext, useEffect } from 'react';
import { useLanguage } from './LanguageContext';

const ProgressContext = createContext();

export function ProgressProvider({ children }) {
  const { language } = useLanguage();
  const [learnedPhrases, setLearnedPhrases] = useState(() => {
    const saved = localStorage.getItem(`learnedPhrases_${language}`);
    return saved ? JSON.parse(saved) : {};
  });

  useEffect(() => {
    localStorage.setItem(`learnedPhrases_${language}`, JSON.stringify(learnedPhrases));
  }, [learnedPhrases, language]);

  const markAsLearned = (phraseId) => {
    setLearnedPhrases(prev => ({ ...prev, [phraseId]: true }));
  };

  const isLearned = (phraseId) => {
    return learnedPhrases[phraseId] || false;
  };

  const resetProgress = () => {
    setLearnedPhrases({});
  };

  return (
    <ProgressContext.Provider value={{ markAsLearned, isLearned, resetProgress, learnedPhrases }}>
      {children}
    </ProgressContext.Provider>
  );
}

export function useProgress() {
  return useContext(ProgressContext);
}