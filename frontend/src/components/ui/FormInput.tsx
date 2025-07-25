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
          <label className="block text-sm font-semibold text-gray-800">
            {label}
          </label>
        )}
        
        <div className="relative group">
          {icon && (
            <div className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 z-10 group-focus-within:text-blue-500 transition-colors duration-200">
              {icon}
            </div>
          )}
          
          <input
            ref={ref}
            className={`
              w-full h-12 ${icon ? 'pl-12' : 'pl-4'} ${rightIcon ? 'pr-12' : 'pr-4'}
              bg-white/95 backdrop-blur-sm border-2 border-gray-200 rounded-xl
              text-gray-900 placeholder-gray-500 font-medium
              focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500
              hover:border-gray-300 hover:bg-white
              transition-all duration-200 shadow-sm hover:shadow-md focus:shadow-lg
              ${error ? 'border-red-300 focus:ring-red-500/20 focus:border-red-500 bg-red-50/50' : ''}
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
            <svg className="w-4 h-4 text-red-500 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <p className="text-sm text-red-600 font-medium">
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