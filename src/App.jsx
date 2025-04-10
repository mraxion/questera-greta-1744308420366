import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import GamePage from './pages/GamePage';
import ExercisePage from './pages/ExercisePage';
import { LanguageProvider } from './contexts/LanguageContext';
import { ProgressProvider } from './contexts/ProgressContext';

export default function App() {
  return (
    <LanguageProvider>
      <ProgressProvider>
        <Router>
          <div className="min-h-screen bg-gradient-to-b from-primary-light/10 to-primary/5">
            <Routes>
              <Route path="/" element={<LandingPage />} />
              <Route path="/game" element={<GamePage />} />
              <Route path="/exercise" element={<ExercisePage />} />
            </Routes>
          </div>
        </Router>
      </ProgressProvider>
    </LanguageProvider>
  );
}