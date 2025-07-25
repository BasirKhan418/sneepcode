import React from 'react';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import { signupUser, clearError } from '../../store/slices/authSlice';
import ResponsiveAuthLayout from '../../components/layout/ResponsiveAuthLayout';
import GenericForm from '../../components/forms/GenericForm';
import { getSignupConfig } from '../../utils/formConfigs';
import { signupSchema } from '../../utils/formSchemas';
import type { SignupCredentials } from '../../types';

interface SignupPageProps {
  onNavigate: (page: 'login' | 'signup' | 'forgot' | 'reset') => void;
}

const SignupPage: React.FC<SignupPageProps> = ({ onNavigate }) => {
  const dispatch = useAppDispatch();
  const { isLoading, error } = useAppSelector((state) => state.auth);

  React.useEffect(() => {
    dispatch(clearError());
  }, [dispatch]);

  const handleSubmit = async (data: SignupCredentials) => {
    const result = await dispatch(signupUser(data));
    if (signupUser.fulfilled.match(result)) {
      console.log('Signup successful');
    }
  };

  const config = getSignupConfig(
    handleSubmit,
    () => onNavigate('login')
  );

  return (
    <ResponsiveAuthLayout title={config.title} subtitle={config.subtitle}>
      <GenericForm 
        config={config}
        schema={signupSchema}
        loading={isLoading}
        error={error}
      />
    </ResponsiveAuthLayout>
  );
};

export default SignupPage;