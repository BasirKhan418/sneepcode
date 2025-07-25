import React from 'react';
import { motion } from 'framer-motion';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  icon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  error?: string;
  label?: string;
}

const Input: React.FC<InputProps> = ({ 
  icon, 
  rightIcon, 
  error, 
  label,
  className = '', 
  ...props 
}) => {
  return (
    <div className="space-y-2">
      {label && (
        <label className="block text-sm font-medium text-slate-700 dark:text-slate-300">
          {label}
        </label>
      )}
      
      <div className="relative">
        {icon && (
          <div className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-500 dark:text-slate-400">
            {icon}
          </div>
        )}
        
        <motion.input
          className={`
            w-full h-12 px-4 ${icon ? 'pl-11' : ''} ${rightIcon ? 'pr-11' : ''} 
            bg-white dark:bg-slate-800 
            border border-slate-200 dark:border-slate-600 
            rounded-xl text-slate-900 dark:text-white 
            placeholder-slate-500 dark:placeholder-slate-400
            focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent
            transition-all duration-200
            ${error ? 'border-red-500 focus:ring-red-500' : ''}
            ${className}
          `}
          whileFocus={{ scale: 1.01 }}
          transition={{ type: "spring", stiffness: 300, damping: 30 }}
          {...props}
        />
        
        {rightIcon && (
          <div className="absolute right-3 top-1/2 transform -translate-y-1/2">
            {rightIcon}
          </div>
        )}
      </div>
      
      {error && (
        <motion.p 
          className="text-sm text-red-600 dark:text-red-400"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.2 }}
        >
          {error}
        </motion.p>
      )}
    </div>
  );
};

export default Input;
