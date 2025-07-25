import React from 'react';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import { resetPassword, clearError } from '../../store/slices/authSlice';
import ResponsiveAuthLayout from '../../components/layout/ResponsiveAuthLayout';
import GenericForm from '../../components/forms/GenericForm';
import { getResetPasswordConfig } from '../../utils/formConfigs';
import { resetPasswordSchema } from '../../utils/formSchemas';
import type { ResetPasswordData } from '../../types';

interface ResetPasswordPageProps {
  onNavigate: (page: 'login' | 'signup' | 'forgot' | 'reset') => void;
}

const ResetPasswordPage: React.FC<ResetPasswordPageProps> = ({ onNavigate }) => {
  const dispatch = useAppDispatch();
  const { isLoading, error } = useAppSelector((state) => state.auth);
  const [isSuccess, setIsSuccess] = React.useState(false);

  React.useEffect(() => {
    dispatch(clearError());
  }, [dispatch]);

  const handleSubmit = async (data: ResetPasswordData) => {

    const urlParams = new URLSearchParams(window.location.search);
    const token = urlParams.get('change kar dena') || 'basir-token';
    
    const result = await dispatch(resetPassword({ 
      password: data.password, 
      token 
    }));
    
    if (resetPassword.fulfilled.match(result)) {
      setIsSuccess(true);
    }
  };

  const config = getResetPasswordConfig(handleSubmit);

  if (isSuccess) {
    return (
      <ResponsiveAuthLayout
        title="Password Reset Successful"
        subtitle="Your password has been updated successfully"
      >
        <div className="text-center space-y-6">
          <div className="w-16 h-16 bg-green-50 rounded-full flex items-center justify-center mx-auto border border-green-100">
            <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
          </div>
          
          <div className="space-y-2">
            <h3 className="text-lg font-semibold text-gray-900">All Set!</h3>
            <p className="text-gray-600">
              Your password has been successfully updated. You can now sign in with your new password.
            </p>
          </div>

          <div className="bg-green-50 border border-green-100 rounded-lg p-4">
            <div className="flex items-center space-x-2">
              <svg className="w-5 h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
              <span className="text-sm font-medium text-green-900">
                Your account is now secure
              </span>
            </div>
          </div>

          <button 
            onClick={() => onNavigate('login')}
            className="w-full h-11 px-6 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium transition-colors"
          >
            Continue to Sign In →
          </button>
        </div>
      </ResponsiveAuthLayout>
    );
  }

  return (
    <ResponsiveAuthLayout title={config.title} subtitle={config.subtitle}>
      <GenericForm 
        config={config}
        schema={resetPasswordSchema}
        loading={isLoading}
        error={error}
      />
    </ResponsiveAuthLayout>
  );
};

export default ResetPasswordPage;