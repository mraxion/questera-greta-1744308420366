import React from 'react';
import { motion } from 'framer-motion';

export default function CategorySelector({ categories, currentCategory, onSelect }) {
  return (
    <nav className="w-full max-w-md" aria-label="Category navigation">
      <h2 className="text-xl text-secondary-dark mb-4" id="category-heading">
        Choose a Category:
      </h2>
      <div 
        className="grid grid-cols-2 gap-3" 
        role="tablist" 
        aria-labelledby="category-heading"
      >
        {categories.map((category) => (
          <motion.button
            key={category.id}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={() => onSelect(category.id)}
            className={`p-3 rounded-lg text-left transition-colors ${
              currentCategory === category.id 
                ? 'bg-primary text-white' 
                : 'bg-white text-secondary-dark hover:bg-primary-light/10'
            }`}
            role="tab"
            aria-selected={currentCategory === category.id}
            aria-controls={`${category.id}-content`}
          >
            <div className="font-medium">{category.name}</div>
            <div className="text-sm opacity-80">Level {category.level}</div>
          </motion.button>
        ))}
      </div>
    </nav>
  );
}