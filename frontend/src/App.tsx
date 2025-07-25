import { useState } from 'react';
import './App.css';
import LoginPage from './pages/auth/LoginPage';
import SignupPage from './pages/auth/SignupPage';
import ForgotPasswordPage from './pages/auth/ForgotPasswordPage';
import ResetPasswordPage from './pages/auth/ResetPasswordPage';

function App() {
  const [currentPage, setCurrentPage] = useState<'login' | 'signup' | 'forgot' | 'reset'>('login');

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

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-blue-100 dark:from-blue-950 dark:via-blue-900 dark:to-blue-800">
      {renderPage()}
    </div>
  );
}

export default App;