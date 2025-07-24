import React from 'react';
import { motion } from 'framer-motion';
import type { HTMLMotionProps } from 'framer-motion';

interface ButtonProps {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  loading?: boolean;
  children: React.ReactNode;
  className?: string;
  disabled?: boolean;
  type?: 'button' | 'submit' | 'reset';
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

// Combine our custom props with motion props, excluding conflicting ones
type MotionButtonProps = ButtonProps & 
  Omit<HTMLMotionProps<"button">, keyof ButtonProps | 'onDrag' | 'onDragStart' | 'onDragEnd'>;

const Button: React.FC<MotionButtonProps> = ({ 
  variant = 'primary', 
  size = 'md', 
  loading = false,
  disabled,
  className = '', 
  children, 
  ...motionProps 
}) => {
  const baseClasses = "inline-flex items-center justify-center font-medium rounded-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed";
  
  const variantClasses = {
    primary: `
      bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 
      text-white shadow-sm hover:shadow-md
      focus:ring-blue-500/50
    `,
    secondary: `
      bg-white hover:bg-gray-50 
      text-gray-900 border border-gray-200 hover:border-gray-300
      shadow-sm hover:shadow-md
      focus:ring-gray-500/50
    `,
    outline: `
      border border-gray-300 hover:border-gray-400 
      text-gray-700 hover:bg-gray-50 
      focus:ring-gray-500/50
    `,
    ghost: `
      text-gray-600 hover:text-gray-900 
      hover:bg-gray-100 
      focus:ring-gray-500/50
    `
  };
  
  const sizeClasses = {
    sm: "h-9 px-3 text-sm",
    md: "h-11 px-6 text-sm",
    lg: "h-12 px-8 text-base"
  };

  return (
    <motion.button
      className={`${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${className}`}
      disabled={disabled || loading}
      whileHover={!disabled && !loading ? { scale: 1.02, y: -1 } : {}}
      whileTap={!disabled && !loading ? { scale: 0.98 } : {}}
      transition={{ type: "spring", stiffness: 400, damping: 17 }}
      {...motionProps}
    >
      {loading ? (
        <>
          <motion.div
            className="w-4 h-4 border-2 border-current border-t-transparent rounded-full mr-2"
            animate={{ rotate: 360 }}
            transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
          />
          Loading...
        </>
      ) : (
        children
      )}
    </motion.button>
  );
};

export default Button;