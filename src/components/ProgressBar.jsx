import React from 'react';
import { motion } from 'framer-motion';

export default function ProgressBar({ progress }) {
  return (
    <div className="w-full h-2 bg-gray-200 rounded-full overflow-hidden">
      <motion.div
        initial={{ width: 0 }}
        animate={{ width: `${progress}%` }}
        transition={{ duration: 0.5 }}
        className="h-full bg-primary rounded-full"
      />
    </div>
  );
}