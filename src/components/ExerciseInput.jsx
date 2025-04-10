import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaCheck, FaLightbulb } from 'react-icons/fa';

export default function ExerciseInput({ exercise, index }) {
  const [answer, setAnswer] = useState('');
  const [isCorrect, setIsCorrect] = useState(false);
  const [showHint, setShowHint] = useState(false);

  const checkAnswer = () => {
    const isRight = exercise.answers[index].some(correct => 
      answer.toLowerCase().includes(correct.toLowerCase())
    );
    setIsCorrect(isRight);
  };

  return (
    <div className="flex flex-col gap-2">
      <div className="flex items-center gap-2">
        <input
          type="text"
          className="px-3 py-1 border-b-2 border-primary focus:outline-none focus:border-primary-dark rounded"
          value={answer}
          onChange={(e) => setAnswer(e.target.value)}
          placeholder="Your answer"
        />
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={checkAnswer}
          className="px-4 py-1 bg-primary text-white rounded-lg"
        >
          Check
        </motion.button>
        <button
          onClick={() => setShowHint(!showHint)}
          className="text-primary hover:text-primary-dark p-1"
        >
          <FaLightbulb size={20} />
        </button>
      </div>
      
      {isCorrect && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-green-500 flex items-center gap-2"
        >
          <FaCheck /> Correct!
        </motion.div>
      )}
      
      {showHint && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-sm text-primary-dark bg-primary-light/10 p-2 rounded"
        >
          {exercise.hints[index]}
        </motion.div>
      )}
    </div>
  );
}