import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Lock, Eye, EyeOff, ArrowRight, CheckCircle, Shield, Check, X } from 'lucide-react';
import AuthLayout from '../../components/layout/AuthLayout';
import Input from '../../components/ui/Input';
import Button from '../../components/ui/Button';

interface ResetPasswordPageProps {
  onNavigate: (page: 'login' | 'signup' | 'forgot' | 'reset') => void;
}

const ResetPasswordPage: React.FC<ResetPasswordPageProps> = ({ onNavigate }) => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({
    password: '',
    confirmPassword: ''
  });

  // Password validation
  const passwordValidation = {
    length: formData.password.length >= 8,
    uppercase: /[A-Z]/.test(formData.password),
    lowercase: /[a-z]/.test(formData.password),
    number: /\d/.test(formData.password),
    special: /[!@#$%^&*(),.?":{}|<>]/.test(formData.password)
  };

  const isPasswordValid = Object.values(passwordValidation).every(Boolean);
  const passwordsMatch = formData.password === formData.confirmPassword && formData.confirmPassword !== '';

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!isPasswordValid) {
      alert('Please meet all password requirements');
      return;
    }
    
    if (formData.password !== formData.confirmPassword) {
      alert('Passwords do not match');
      return;
    }
    
    setIsLoading(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    console.log('Reset password submitted:', formData);
    setIsLoading(false);
    setIsSuccess(true);
  };

  if (isSuccess) {
    return (
      <AuthLayout
        title="Password Reset Successful"
        subtitle="Your password has been updated successfully"
      >
        <motion.div 
          className="text-center space-y-6"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.3 }}
        >
          <motion.div 
            className="w-16 h-16 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center mx-auto"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ type: "spring", stiffness: 300, damping: 20, delay: 0.1 }}
          >
            <CheckCircle className="w-8 h-8 text-green-600 dark:text-green-400" />
          </motion.div>
          
          <div className="space-y-2">
            <h3 className="text-lg font-semibold text-slate-900 dark:text-white">
              All Set!
            </h3>
            <p className="text-slate-600 dark:text-slate-300">
              Your password has been successfully updated. You can now sign in with your new password.
            </p>
          </div>

          <div className="bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-lg p-4">
            <div className="flex items-center space-x-2">
              <Shield className="w-5 h-5 text-green-600 dark:text-green-400" />
              <span className="text-sm font-medium text-green-900 dark:text-green-100">
                Your account is now secure
              </span>
            </div>
          </div>

          <Button 
            onClick={() => onNavigate('login')}
            variant="primary"
            className="w-full"
          >
            Continue to Sign In
            <ArrowRight className="w-4 h-4 ml-2" />
          </Button>
        </motion.div>
      </AuthLayout>
    );
  }

  return (
    <AuthLayout
      title="Reset Password"
      subtitle="Enter your new password below"
    >
      <motion.form 
        onSubmit={handleSubmit}
        className="space-y-6"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3, delay: 0.1 }}
      >
        <Input
          icon={<Lock className="w-5 h-5" />}
          type={showPassword ? "text" : "password"}
          placeholder="New password"
          value={formData.password}
          onChange={(e) => setFormData(prev => ({ ...prev, password: e.target.value }))}
          rightIcon={
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="text-slate-500 hover:text-slate-700 dark:text-slate-400 dark:hover:text-slate-200 transition-colors"
            >
              {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
            </button>
          }
          required
        />

        <Input
          icon={<Lock className="w-5 h-5" />}
          type={showConfirmPassword ? "text" : "password"}
          placeholder="Confirm new password"
          value={formData.confirmPassword}
          onChange={(e) => setFormData(prev => ({ ...prev, confirmPassword: e.target.value }))}
          rightIcon={
            <button
              type="button"
              onClick={() => setShowConfirmPassword(!showConfirmPassword)}
              className="text-slate-500 hover:text-slate-700 dark:text-slate-400 dark:hover:text-slate-200 transition-colors"
            >
              {showConfirmPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
            </button>
          }
          required
        />

        {/* Password Requirements */}
        <div className="bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700 rounded-lg p-4">
          <h4 className="text-sm font-medium text-slate-900 dark:text-white mb-3 flex items-center">
            <Shield className="w-4 h-4 mr-2" />
            Password Requirements
          </h4>
          <div className="grid grid-cols-1 gap-2">
            <PasswordRequirement 
              met={passwordValidation.length}
              text="At least 8 characters"
            />
            <PasswordRequirement 
              met={passwordValidation.uppercase}
              text="One uppercase letter"
            />
            <PasswordRequirement 
              met={passwordValidation.lowercase}
              text="One lowercase letter"
            />
            <PasswordRequirement 
              met={passwordValidation.number}
              text="One number"
            />
            <PasswordRequirement 
              met={passwordValidation.special}
              text="One special character"
            />
            {formData.confirmPassword && (
              <PasswordRequirement 
                met={passwordsMatch}
                text="Passwords match"
              />
            )}
          </div>
        </div>

        <Button 
          type="submit" 
          variant="primary" 
          className="w-full"
          disabled={!isPasswordValid || !passwordsMatch}
          loading={isLoading}
        >
          {isLoading ? 'Updating Password...' : (
            <>
              Update Password
              <ArrowRight className="w-4 h-4 ml-2" />
            </>
          )}
        </Button>
      </motion.form>
    </AuthLayout>
  );
};

// Password Requirement Component
interface PasswordRequirementProps {
  met: boolean;
  text: string;
}

const PasswordRequirement: React.FC<PasswordRequirementProps> = ({ met, text }) => {
  return (
    <motion.div 
      className="flex items-center space-x-2"
      initial={{ opacity: 0, x: -10 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.2 }}
    >
      <div className={`w-4 h-4 rounded-full flex items-center justify-center ${
        met ? 'bg-green-100 dark:bg-green-900/30' : 'bg-slate-200 dark:bg-slate-700'
      }`}>
        {met ? (
          <Check className="w-2.5 h-2.5 text-green-600 dark:text-green-400" />
        ) : (
          <X className="w-2.5 h-2.5 text-slate-400 dark:text-slate-500" />
        )}
      </div>
      <span className={`text-xs ${
        met ? 'text-green-700 dark:text-green-300' : 'text-slate-600 dark:text-slate-400'
      }`}>
        {text}
      </span>
    </motion.div>
  );
};

export default ResetPasswordPage;