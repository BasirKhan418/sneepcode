import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, ArrowRight, ArrowLeft, CheckCircle } from 'lucide-react';
import AuthLayout from '../../components/layout/AuthLayout';
import Button from '../../components/ui/Button';

interface ForgotPasswordPageProps {
  onNavigate: (page: 'login' | 'signup' | 'forgot' | 'reset') => void;
}

// Clean Input Component
interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  icon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  error?: string;
  label?: string;
}

const CleanInput: React.FC<InputProps> = ({ 
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
        <label className="block text-sm font-medium text-gray-700">
          {label}
        </label>
      )}
      
      <div className="relative">
        {icon && (
          <div className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400">
            {icon}
          </div>
        )}
        
        <motion.input
          className={`
            w-full h-12 ${icon ? 'pl-10' : 'pl-4'} ${rightIcon ? 'pr-12' : 'pr-4'}
            bg-white border border-gray-200 rounded-lg
            text-gray-900 placeholder-gray-500
            focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500
            transition-all duration-200
            ${error ? 'border-red-300 focus:ring-red-500/20 focus:border-red-500' : ''}
            ${className}
          `}
          whileFocus={{ scale: 1.01 }}
          transition={{ type: "spring", stiffness: 300, damping: 30 }}
          {...(props as any)}
        />
        
        {rightIcon && (
          <div className="absolute right-3 top-1/2 transform -translate-y-1/2">
            {rightIcon}
          </div>
        )}
      </div>
      
      {error && (
        <motion.p 
          className="text-sm text-red-600"
          initial={{ opacity: 0, y: -5 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.2 }}
        >
          {error}
        </motion.p>
      )}
    </div>
  );
};

const ForgotPasswordPage: React.FC<ForgotPasswordPageProps> = ({ onNavigate }) => {
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    console.log('Forgot password submitted:', email);
    setIsLoading(false);
    setIsSubmitted(true);
  };

  if (isSubmitted) {
    return (
      <AuthLayout
        title="Check Your Email"
        subtitle="We've sent a password reset link to your email"
      >
        <motion.div 
          className="text-center space-y-6"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.3 }}
        >
          <motion.div 
            className="w-16 h-16 bg-blue-50 rounded-full flex items-center justify-center mx-auto border border-blue-100"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ type: "spring", stiffness: 300, damping: 20, delay: 0.1 }}
          >
            <CheckCircle className="w-8 h-8 text-blue-600" />
          </motion.div>
          
          <div className="space-y-2">
            <p className="text-gray-700">
              If an account with <strong className="text-gray-900">{email}</strong> exists, you'll receive a password reset link shortly.
            </p>
            <p className="text-sm text-gray-500">
              Don't see the email? Check your spam folder or try again.
            </p>
          </div>

          <div className="space-y-3">
            <Button 
              onClick={() => setIsSubmitted(false)}
              variant="outline"
              className="w-full"
            >
              Try Another Email
            </Button>
            
            <Button 
              onClick={() => onNavigate('login')}
              variant="ghost"
              className="w-full"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Sign In
            </Button>
          </div>
        </motion.div>
      </AuthLayout>
    );
  }

  return (
    <AuthLayout
      title="Forgot Password?"
      subtitle="Enter your email and we'll send you a reset link"
    >
      <motion.form 
        onSubmit={handleSubmit}
        className="space-y-6"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3, delay: 0.1 }}
      >
        <div className="bg-blue-50 border border-blue-100 rounded-lg p-4">
          <div className="flex items-start space-x-3">
            <Mail className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
            <div>
              <h4 className="text-sm font-medium text-blue-900 mb-1">
                Reset Instructions
              </h4>
              <p className="text-xs text-blue-700">
                Enter your email address and we'll send you a secure link to reset your password. The link will expire in 24 hours.
              </p>
            </div>
          </div>
        </div>

        <CleanInput
          icon={<Mail className="w-5 h-5" />}
          type="email"
          placeholder="Enter your email address"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        <Button 
          type="submit" 
          variant="primary" 
          className="w-full"
          loading={isLoading}
        >
          {isLoading ? 'Sending Reset Link...' : (
            <>
              Send Reset Link
              <ArrowRight className="w-4 h-4 ml-2" />
            </>
          )}
        </Button>

        <Button 
          type="button"
          onClick={() => onNavigate('login')}
          variant="ghost"
          className="w-full"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to Sign In
        </Button>
      </motion.form>
    </AuthLayout>
  );
};

export default ForgotPasswordPage;