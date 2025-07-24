import React from 'react';
import { motion } from 'framer-motion';

interface SocialButtonProps {
  icon: React.ReactNode;
  label: string;
  onClick: () => void;
  disabled?: boolean;
}

const SocialButton: React.FC<SocialButtonProps> = ({ 
  icon, 
  label, 
  onClick, 
  disabled = false 
}) => {
  return (
    <motion.button
      type="button"
      onClick={onClick}
      disabled={disabled}
      className={`
        flex items-center justify-center w-full h-11 px-4 
        bg-white hover:bg-gray-50
        border border-gray-200 hover:border-gray-300
        rounded-lg text-gray-700 
        focus:outline-none focus:ring-2 focus:ring-gray-500/50 focus:ring-offset-2 
        transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed 
        shadow-sm hover:shadow-md
      `}
      whileHover={!disabled ? { scale: 1.02, y: -1 } : {}}
      whileTap={!disabled ? { scale: 0.98 } : {}}
      transition={{ type: "spring", stiffness: 400, damping: 17 }}
    >
      <span className="mr-3">{icon}</span>
      <span className="text-sm font-medium">{label}</span>
    </motion.button>
  );
};

export default SocialButton;