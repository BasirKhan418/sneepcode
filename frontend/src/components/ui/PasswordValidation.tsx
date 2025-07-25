import React from 'react';

interface PasswordValidationProps {
  password: string;
  confirmPassword?: string;
  className?: string;
}

interface ValidationRule {
  test: boolean;
  text: string;
}

const PasswordValidation: React.FC<PasswordValidationProps> = ({ 
  password, 
  confirmPassword,
  className = '' 
}) => {
  const rules: ValidationRule[] = [
    {
      test: password.length >= 8,
      text: 'At least 8 characters'
    },
    {
      test: /[A-Z]/.test(password),
      text: 'One uppercase letter'
    },
    {
      test: /[a-z]/.test(password),
      text: 'One lowercase letter'
    },
    {
      test: /\d/.test(password),
      text: 'One number'
    },
    {
      test: /[!@#$%^&*(),.?":{}|<>]/.test(password),
      text: 'One special character'
    }
  ];

  if (confirmPassword !== undefined) {
    rules.push({
      test: password === confirmPassword && confirmPassword !== '',
      text: 'Passwords match'
    });
  }

  const allValid = rules.every(rule => rule.test);

  return (
    <div className={`bg-white/95 backdrop-blur-sm border-2 border-blue-100 rounded-xl p-5 shadow-sm ${className}`}>
      <h4 className="text-sm font-bold text-gray-900 mb-4 flex items-center">
        <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg flex items-center justify-center mr-3 shadow-lg shadow-blue-500/25">
          <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
          </svg>
        </div>
        Password Requirements
      </h4>
      <div className="grid grid-cols-1 gap-3">
        {rules.map((rule, index) => (
          <PasswordRequirement key={index} met={rule.test} text={rule.text} />
        ))}
      </div>
      {password && (
        <div className="mt-4 pt-4 border-t border-blue-100">
          <div className="flex items-center space-x-3">
            <div className={`w-4 h-4 rounded-full flex items-center justify-center ${
              allValid ? 'bg-gradient-to-br from-green-500 to-green-600 shadow-lg shadow-green-500/25' : 'bg-gray-300'
            }`}>
              {allValid && (
                <svg className="w-2.5 h-2.5 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
              )}
            </div>
            <span className={`text-sm font-semibold ${allValid ? 'text-green-700' : 'text-gray-600'}`}>
              {allValid ? 'Password meets all requirements' : 'Password requirements not met'}
            </span>
          </div>
        </div>
      )}
    </div>
  );
};

interface PasswordRequirementProps {
  met: boolean;
  text: string;
}

const PasswordRequirement: React.FC<PasswordRequirementProps> = ({ met, text }) => {
  return (
    <div className="flex items-center space-x-3">
      <div className={`w-5 h-5 rounded-lg flex items-center justify-center border-2 ${
        met 
          ? 'bg-gradient-to-br from-green-500 to-green-600 border-green-500 shadow-sm shadow-green-500/25' 
          : 'bg-white border-gray-300'
      }`}>
        {met ? (
          <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
          </svg>
        ) : (
          <svg className="w-3 h-3 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
          </svg>
        )}
      </div>
      <span className={`text-sm font-medium ${
        met ? 'text-green-700' : 'text-gray-600'
      }`}>
        {text}
      </span>
    </div>
  );
};

export default PasswordValidation;