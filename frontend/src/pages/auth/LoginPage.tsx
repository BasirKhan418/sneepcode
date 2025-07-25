import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Eye, EyeOff, Mail, Lock, ArrowRight, Github } from 'lucide-react';
import AuthLayout from '../../components/layout/AuthLayout';
import Button from '../../components/ui/Button';
import SocialButton from '../../components/ui/SocialButton';

interface LoginPageProps {
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

const LoginPage: React.FC<LoginPageProps> = ({ onNavigate }) => {
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    rememberMe: false
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Login submitted:', formData);
  };

  const handleGoogleLogin = () => {
    console.log('Google login');
  };

  const handleGithubLogin = () => {
    console.log('GitHub login');
  };

  return (
    <AuthLayout
      title="Welcome Back"
      subtitle="Sign in to your SneepCode account"
    >
      <motion.form 
        onSubmit={handleSubmit}
        className="space-y-6"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3, delay: 0.1 }}
      >
        <CleanInput
          icon={<Mail className="w-5 h-5" />}
          type="email"
          placeholder="Enter your email"
          value={formData.email}
          onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
          required
        />

        <CleanInput
          icon={<Lock className="w-5 h-5" />}
          type={showPassword ? "text" : "password"}
          placeholder="Enter your password"
          value={formData.password}
          onChange={(e) => setFormData(prev => ({ ...prev, password: e.target.value }))}
          rightIcon={
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="text-gray-400 hover:text-gray-600 transition-colors"
            >
              {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
            </button>
          }
          required
        />

        <div className="flex items-center justify-between">
          <label className="flex items-center space-x-2 cursor-pointer">
            <input
              type="checkbox"
              checked={formData.rememberMe}
              onChange={(e) => setFormData(prev => ({ ...prev, rememberMe: e.target.checked }))}
              className="w-4 h-4 text-blue-600 bg-white border-gray-300 rounded focus:ring-blue-500 focus:ring-2"
            />
            <span className="text-sm text-gray-600">Remember me</span>
          </label>
          <button
            type="button"
            onClick={() => onNavigate('forgot')}
            className="text-sm text-blue-600 hover:text-blue-700 transition-colors font-medium"
          >
            Forgot password?
          </button>
        </div>

        <Button type="submit" variant="primary" className="w-full">
          Sign In
          <ArrowRight className="w-4 h-4 ml-2" />
        </Button>

        <div className="relative">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-gray-200" />
          </div>
          <div className="relative flex justify-center text-sm">
            <span className="px-4 bg-white text-gray-500">
              Or continue with
            </span>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-3">
          <SocialButton
            icon={<Github className="w-5 h-5" />}
            onClick={handleGithubLogin}
            label="GitHub"
          />
          <SocialButton
            icon={
              <svg className="w-5 h-5" viewBox="0 0 24 24">
                <path fill="currentColor" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                <path fill="currentColor" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                <path fill="currentColor" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                <path fill="currentColor" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
              </svg>
            }
            onClick={handleGoogleLogin}
            label="Google"
          />
        </div>

        <p className="text-center text-sm text-gray-600">
          Don't have an account?{' '}
          <button
            type="button"
            onClick={() => onNavigate('signup')}
            className="text-blue-600 hover:text-blue-700 font-medium transition-colors"
          >
            Sign up
          </button>
        </p>
      </motion.form>
    </AuthLayout>
  );
};

export default LoginPage;