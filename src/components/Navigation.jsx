import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';

export default function Navigation() {
  const location = useLocation();

  return (
    <nav className="fixed bottom-4 left-1/2 transform -translate-x-1/2 bg-white rounded-full shadow-lg px-6 py-3">
      <ul className="flex space-x-8">
        <motion.li whileHover={{ scale: 1.1 }}>
          <Link
            to="/game"
            className={`text-lg ${
              location.pathname === '/game'
                ? 'text-primary font-medium'
                : 'text-gray-600'
            }`}
          >
            Learn
          </Link>
        </motion.li>
        <motion.li whileHover={{ scale: 1.1 }}>
          <Link
            to="/exercise"
            className={`text-lg ${
              location.pathname === '/exercise'
                ? 'text-primary font-medium'
                : 'text-gray-600'
            }`}
          >
            Practice
          </Link>
        </motion.li>
      </ul>
    </nav>
  );
}