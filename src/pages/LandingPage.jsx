import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useLanguage } from '../contexts/LanguageContext';
import { motion } from 'framer-motion';

export default function LandingPage() {
  const navigate = useNavigate();
  const { setLanguage } = useLanguage();

  const handleLanguageSelect = (lang) => {
    setLanguage(lang);
    navigate('/game');
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center"
      >
        <h1 className="text-4xl md:text-5xl font-bold text-secondary mb-6">
          Flirt & Learn English
        </h1>
        <p className="text-lg text-secondary-light mb-12">
          Master the art of flirting in English
        </p>

        <div className="flex flex-col gap-4">
          <h2 className="text-xl text-secondary mb-4">Choose your language:</h2>
          {['Spanish', 'Italian', 'Portuguese'].map((lang, index) => (
            <motion.button
              key={lang}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => handleLanguageSelect(['es', 'it', 'pt'][index])}
              className="px-8 py-3 bg-primary text-white rounded-lg shadow-lg hover:bg-primary-dark transition-colors"
            >
              {lang}
            </motion.button>
          ))}
        </div>
      </motion.div>
    </div>
  );
}