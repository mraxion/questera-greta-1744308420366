import React from 'react';
import { motion } from 'framer-motion';
import { useProgress } from '../contexts/ProgressContext';
import { FaCheck, FaVolumeUp } from 'react-icons/fa';

export default function FlashCard({ phrase, isFlipped, onFlip, showHint }) {
  const { markAsLearned, isLearned } = useProgress();
  const learned = isLearned(phrase.id);

  const speakPhrase = (text) => {
    // Only speak English phrases
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = 'en-US';
    utterance.rate = 0.9; // Slightly slower for better clarity
    utterance.pitch = 1;
    window.speechSynthesis.speak(utterance);
  };

  return (
    <div className="relative" role="region" aria-label="Flashcard">
      <motion.div
        className={`bg-white rounded-xl shadow-xl p-6 cursor-pointer ${
          learned ? 'border-4 border-green-500' : ''
        }`}
        onClick={onFlip}
        onKeyPress={(e) => e.key === 'Enter' && onFlip()}
        tabIndex={0}
        role="button"
        aria-pressed={isFlipped}
        aria-label={`Flashcard: ${phrase.english}`}
        style={{ perspective: '1000px' }}
      >
        <motion.div
          animate={{ rotateX: isFlipped ? 180 : 0 }}
          transition={{ duration: 0.6 }}
          className="relative min-h-[200px] flex items-center justify-center"
        >
          <div
            className={`absolute w-full text-center transition-opacity duration-300 ${
              isFlipped ? 'opacity-0' : 'opacity-100'
            }`}
          >
            <h2 className="text-2xl text-secondary mb-4">{phrase.english}</h2>
            <button
              onClick={(e) => {
                e.stopPropagation();
                speakPhrase(phrase.english);
              }}
              className="text-primary hover:text-primary-dark transition-colors"
              aria-label="Listen to English phrase"
            >
              <FaVolumeUp size={24} />
            </button>
            {showHint && (
              <p className="text-sm text-primary-dark mt-2 italic">
                Hint: {phrase.hint}
              </p>
            )}
            <div className="text-sm text-gray-500 mt-2">
              <p>Situation: {phrase.situation}</p>
              <p>Difficulty: Level {phrase.difficulty}</p>
            </div>
          </div>
          <div
            className={`absolute w-full text-center transition-opacity duration-300 ${
              isFlipped ? 'opacity-100' : 'opacity-0'
            }`}
            style={{ transform: 'rotateX(180deg)' }}
          >
            <h2 className="text-2xl text-secondary mb-4">{phrase.translation}</h2>
          </div>
        </motion.div>
      </motion.div>
      
      {!learned && (
        <div className="absolute -right-4 -top-4 flex gap-2">
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={(e) => {
              e.stopPropagation();
              markAsLearned(phrase.id);
            }}
            className="bg-green-500 text-white p-2 rounded-full shadow-lg"
            aria-label="Mark as learned"
          >
            <FaCheck />
          </motion.button>
        </div>
      )}
    </div>
  );
}