import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { scenarios } from '../data/scenarios';
import ExerciseInput from '../components/ExerciseInput';
import Navigation from '../components/Navigation';
import AdSpace from '../components/AdSpace';
import { trackExercise } from '../utils/analytics';

function ScenarioExercise({ scenario, exercise }) {
  const parts = exercise.text.split('_____');
  
  return (
    <div className="bg-white rounded-xl p-6 shadow-lg">
      <h3 className="text-xl text-secondary mb-4">{scenario.name}</h3>
      <p className="text-gray-600 mb-4">{exercise.situation}</p>
      
      <div className="mb-6">
        {parts.map((part, index) => (
          <React.Fragment key={index}>
            <span>{part}</span>
            {index < parts.length - 1 && (
              <ExerciseInput
                exercise={exercise}
                index={index}
              />
            )}
          </React.Fragment>
        ))}
      </div>

      <div className="mt-4 p-4 bg-primary-light/10 rounded-lg">
        <p className="text-sm text-gray-600">{exercise.explanation}</p>
      </div>
    </div>
  );
}

export default function ExercisePage() {
  const [currentScenario, setCurrentScenario] = useState('cafe');
  const scenario = scenarios[currentScenario];

  return (
    <div className="min-h-screen p-4 pb-24">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="max-w-2xl mx-auto"
      >
        <h1 className="text-3xl text-secondary mb-8 text-center">Practice Scenarios</h1>
        
        <div className="space-y-6">
          {scenario.culturalNotes.map((note, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-white p-4 rounded-lg shadow"
            >
              <p className="text-sm text-gray-600">{note}</p>
            </motion.div>
          ))}

          {scenario.exercises.map((exercise, index) => (
            <motion.div
              key={exercise.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 + index * 0.1 }}
            >
              <ScenarioExercise
                scenario={scenario}
                exercise={exercise}
              />
            </motion.div>
          ))}
        </div>

        <AdSpace />
      </motion.div>
      <Navigation />
    </div>
  );
}