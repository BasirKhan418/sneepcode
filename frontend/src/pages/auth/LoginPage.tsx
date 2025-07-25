import React from 'react';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import { loginUser, clearError } from '../../store/slices/authSlice';
import ResponsiveAuthLayout from '../../components/layout/ResponsiveAuthLayout';
import GenericForm from '../../components/forms/GenericForm';
import { getLoginConfig } from '../../utils/formConfigs';
import { loginSchema } from '../../utils/formSchemas';
import type { LoginCredentials } from '../../types';

interface LoginPageProps {
  onNavigate: (page: 'login' | 'signup' | 'forgot' | 'reset') => void;
}

const LoginPage: React.FC<LoginPageProps> = ({ onNavigate }) => {
  const dispatch = useAppDispatch();
  const { isLoading, error } = useAppSelector((state) => state.auth);

  React.useEffect(() => {
    dispatch(clearError());
  }, [dispatch]);

  const handleSubmit = async (data: LoginCredentials) => {
    const result = await dispatch(loginUser(data));
    if (loginUser.fulfilled.match(result)) {
      // Handle successful login
      console.log('Login successful');
    }
  };

  const config = getLoginConfig(
    handleSubmit,
    () => onNavigate('signup'),
    () => onNavigate('forgot')
  );

  return (
    <ResponsiveAuthLayout title={config.title} subtitle={config.subtitle}>
      <GenericForm 
        config={config}
        schema={loginSchema}
        loading={isLoading}
        error={error}
      />
    </ResponsiveAuthLayout>
  );
};

export default LoginPage;