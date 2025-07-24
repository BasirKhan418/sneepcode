import React from 'react';
import { motion } from 'framer-motion';

interface CardProps {
  children: React.ReactNode;
  className?: string;
}

const Card: React.FC<CardProps> = ({ children, className = '' }) => {
  return (
    <motion.div
      className={`
        bg-white/95 dark:bg-slate-800/95 
        backdrop-blur-sm rounded-2xl 
        shadow-xl border border-slate-200/50 dark:border-slate-700/50 
        ${className}
      `}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.2 }}
    >
      {children}
    </motion.div>
  );
};

export default Card;