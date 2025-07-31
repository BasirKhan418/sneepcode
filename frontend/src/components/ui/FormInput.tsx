import React, { forwardRef } from 'react';

interface FormInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  icon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  error?: string;
  label?: string;
}

const FormInput = forwardRef<HTMLInputElement, FormInputProps>(
  ({ icon, rightIcon, error, label, className = '', ...props }, ref) => {
    return (
      <div className="space-y-2">
        {label && (
          <label className="block text-sm font-semibold text-white/90">
            {label}
          </label>
        )}
        
        <div className="relative group">
          {icon && (
            <div className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white/50 z-10 group-focus-within:text-blue-400 transition-colors duration-200">
              {icon}
            </div>
          )}
          
          <input
            ref={ref}
            className={`
              w-full h-12 ${icon ? 'pl-12' : 'pl-4'} ${rightIcon ? 'pr-12' : 'pr-4'}
              bg-white/[0.08] backdrop-blur-sm border border-white/20 rounded-xl
              text-white placeholder-white/50 font-medium
              focus:outline-none focus:ring-2 focus:ring-blue-400/50 focus:border-blue-400/50
              hover:border-white/30 hover:bg-white/[0.12]
              transition-all duration-200
              ${error ? 'border-red-400/60 focus:ring-red-400/50 focus:border-red-400 bg-red-500/[0.08]' : ''}
              ${className}
            `}
            {...props}
          />
          
          {rightIcon && (
            <div className="absolute right-4 top-1/2 transform -translate-y-1/2 z-10">
              {rightIcon}
            </div>
          )}
        </div>
        
        {error && (
          <div className="flex items-center space-x-2 mt-2">
            <svg className="w-4 h-4 text-red-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <p className="text-sm text-red-400 font-medium">
              {error}
            </p>
          </div>
        )}
      </div>
    );
  }
);

FormInput.displayName = 'FormInput';

export default FormInput;