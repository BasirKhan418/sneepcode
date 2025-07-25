import React, { useState } from 'react';
import { useAppSelector } from '../hooks/redux';
import LoginPage from '../pages/auth/LoginPage';
import SignupPage from '../pages/auth/SignupPage';
import ForgotPasswordPage from '../pages/auth/ForgotPasswordPage';
import ResetPasswordPage from '../pages/auth/ResetPasswordPage';
import Dashboard from '../pages/Dashboard';

const AuthFlow: React.FC = () => {
  const { isAuthenticated } = useAppSelector((state) => state.auth);
  const [currentPage, setCurrentPage] = useState<'login' | 'signup' | 'forgot' | 'reset'>('login');

  if (isAuthenticated) {
    return <Dashboard />;
  }

  const renderPage = () => {
    switch (currentPage) {
      case 'login':
        return <LoginPage onNavigate={setCurrentPage} />;
      case 'signup':
        return <SignupPage onNavigate={setCurrentPage} />;
      case 'forgot':
        return <ForgotPasswordPage onNavigate={setCurrentPage} />;
      case 'reset':
        return <ResetPasswordPage onNavigate={setCurrentPage} />;
      default:
        return <LoginPage onNavigate={setCurrentPage} />;
    }
  };

  return <>{renderPage()}</>;
};

export default AuthFlow;