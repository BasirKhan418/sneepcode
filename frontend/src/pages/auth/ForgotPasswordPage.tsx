import React from 'react';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import { forgotPassword, clearError } from '../../store/slices/authSlice';
import ResponsiveAuthLayout from '../../components/layout/ResponsiveAuthLayout';
import GenericForm from '../../components/forms/GenericForm';
import { getForgotPasswordConfig } from '../../utils/formConfigs';
import { forgotPasswordSchema } from '../../utils/formSchemas';
import type { ForgotPasswordData } from '../../types';

interface ForgotPasswordPageProps {
  onNavigate: (page: 'login' | 'signup' | 'forgot' | 'reset') => void;
}

const ForgotPasswordPage: React.FC<ForgotPasswordPageProps> = ({ onNavigate }) => {
  const dispatch = useAppDispatch();
  const { isLoading, error } = useAppSelector((state) => state.auth);
  const [isSubmitted, setIsSubmitted] = React.useState(false);

  React.useEffect(() => {
    dispatch(clearError());
  }, [dispatch]);

  const handleSubmit = async (data: ForgotPasswordData) => {
    const result = await dispatch(forgotPassword(data));
    if (forgotPassword.fulfilled.match(result)) {
      setIsSubmitted(true);
    }
  };

  const config = getForgotPasswordConfig(
    handleSubmit,
    () => onNavigate('login')
  );

  if (isSubmitted) {
    return (
      <ResponsiveAuthLayout
        title="Check Your Email"
        subtitle="We've sent a password reset link to your email"
      >
        <div className="text-center space-y-6">
          <div className="w-16 h-16 bg-blue-50 rounded-full flex items-center justify-center mx-auto border border-blue-100">
            <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
          </div>
          
          <div className="space-y-2">
            <p className="text-gray-700">
              If an account exists, you'll receive a password reset link shortly.
            </p>
            <p className="text-sm text-gray-500">
              Don't see the email? Check your spam folder or try again.
            </p>
          </div>

          <div className="space-y-3">
            <button 
              onClick={() => setIsSubmitted(false)}
              className="w-full h-11 px-6 bg-white hover:bg-gray-50 text-gray-900 border border-gray-200 rounded-lg font-medium transition-colors"
            >
              Try Another Email
            </button>
            
            <button 
              onClick={() => onNavigate('login')}
              className="w-full h-11 px-6 text-gray-600 hover:text-gray-900 hover:bg-gray-100 rounded-lg font-medium transition-colors"
            >
              ← Back to Sign In
            </button>
          </div>
        </div>
      </ResponsiveAuthLayout>
    );
  }

  return (
    <ResponsiveAuthLayout title={config.title} subtitle={config.subtitle}>
      <GenericForm 
        config={config}
        schema={forgotPasswordSchema}
        loading={isLoading}
        error={error}
      />
    </ResponsiveAuthLayout>
  );
};

export default ForgotPasswordPage;