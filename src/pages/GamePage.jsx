import React, { useState, useEffect, useCallback } from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { useProgress } from '../contexts/ProgressContext';
import { phrases, categories } from '../data/phrases';
import { motion } from 'framer-motion';
import CategorySelector from '../components/CategorySelector';
import FlashCard from '../components/FlashCard';
import ProgressBar from '../components/ProgressBar';
import AdSpace from '../components/AdSpace';

export default function GamePage() {
  const { language } = useLanguage();
  const [currentCategory, setCurrentCategory] = useState('basics');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isFlipped, setIsFlipped] = useState(false);
  const [showHint, setShowHint] = useState(false);
  const [showLearned, setShowLearned] = useState(false);
  const { isLearned } = useProgress();

  const filteredPhrases = phrases[language]
    .filter(phrase => phrase.category === currentCategory)
    .filter(phrase => showLearned ? true : !isLearned(phrase.id));

  const currentPhrase = filteredPhrases[currentIndex];
  const progress = ((currentIndex + 1) / filteredPhrases.length) * 100;

  const handleNext = useCallback(() => {
    if (currentIndex < filteredPhrases.length - 1) {
      setIsFlipped(false);
      setShowHint(false);
      setCurrentIndex(prev => prev + 1);
    }
  }, [currentIndex, filteredPhrases.length]);

  const handlePrevious = () => {
    if (currentIndex > 0) {
      setIsFlipped(false);
      setShowHint(false);
      setCurrentIndex(prev => prev - 1);
    }
  };

  const handleCategoryChange = (category) => {
    setCurrentCategory(category);
    setCurrentIndex(0);
    setIsFlipped(false);
    setShowHint(false);
  };

  useEffect(() => {
    const handleKeyPress = (e) => {
      if (e.key === 'ArrowRight') handleNext();
      else if (e.key === 'ArrowLeft') handlePrevious();
      else if (e.key === ' ') setIsFlipped(!isFlipped);
    };

    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, [handleNext, handlePrevious, isFlipped]);

  return (
    <main className="min-h-screen flex flex-col items-center p-4 pt-8">
      <AdSpace />
      
      <CategorySelector
        categories={categories}
        currentCategory={currentCategory}
        onSelect={handleCategoryChange}
      />

      <div className="w-full max-w-md mt-8">
        <div className="flex justify-between items-center mb-4">
          <ProgressBar progress={progress} />
          <button
            onClick={() => setShowLearned(!showLearned)}
            className="text-sm text-primary underline"
            aria-label={showLearned ? 'Hide learned phrases' : 'Show all phrases'}
          >
            {showLearned ? 'Hide Learned' : 'Show All'}
          </button>
        </div>

        {filteredPhrases.length > 0 ? (
          <section aria-live="polite">
            <div className="my-6">
              <FlashCard
                phrase={currentPhrase}
                isFlipped={isFlipped}
                onFlip={() => setIsFlipped(!isFlipped)}
                showHint={showHint}
              />
            </div>

            <div className="flex flex-col gap-4">
              <button
                onClick={() => setShowHint(!showHint)}
                className="text-primary-dark underline text-sm"
                aria-label={showHint ? 'Hide hint' : 'Show hint'}
              >
                {showHint ? 'Hide Hint' : 'Show Hint'}
              </button>

              <div className="flex justify-between gap-4">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={handlePrevious}
                  disabled={currentIndex === 0}
                  className={`px-6 py-2 rounded-lg ${
                    currentIndex === 0 ? 'bg-gray-300' : 'bg-primary text-white'
                  }`}
                >
                  Previous
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={handleNext}
                  disabled={currentIndex === filteredPhrases.length - 1}
                  className={`px-6 py-2 rounded-lg ${
                    currentIndex === filteredPhrases.length - 1
                      ? 'bg-gray-300'
                      : 'bg-primary text-white'
                  }`}
                >
                  Next
                </motion.button>
              </div>
            </div>
          </section>
        ) : (
          <div className="text-center py-8" role="alert">
            <h3 className="text-xl text-secondary mb-4">
              Great job! You've learned all the phrases in this category.
            </h3>
            <button
              onClick={() => setShowLearned(true)}
              className="text-primary underline"
            >
              Review learned phrases
            </button>
          </div>
        )}
      </div>
    </main>
  );
}