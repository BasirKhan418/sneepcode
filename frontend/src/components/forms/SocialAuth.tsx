import React from 'react';
import { Github } from 'lucide-react';

interface SocialAuthProps {
  onGoogleAuth?: () => void;
  onGithubAuth?: () => void;
}

const SocialAuth: React.FC<SocialAuthProps> = ({ 
  onGoogleAuth,
  onGithubAuth 
}) => {
  const handleGoogleAuth = () => {
    if (onGoogleAuth) {
      onGoogleAuth();
    } else {
      console.log('Google auth clicked');
    }
  };

  const handleGithubAuth = () => {
    if (onGithubAuth) {
      onGithubAuth();
    } else {
      console.log('GitHub auth clicked');
    }
  };

  return (
    <>
      <div className="relative my-8">
        <div className="absolute inset-0 flex items-center">
          <div className="w-full border-t border-white/20" />
        </div>
        <div className="relative flex justify-center text-sm">
          <span className="px-6 bg-transparent text-white/70 font-medium">
            Or continue with
          </span>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-4">
        <button
          type="button"
          onClick={handleGithubAuth}
          className="w-full h-12 px-4 bg-white/8 hover:bg-white/12 border border-white/20 hover:border-white/30 text-white rounded-xl font-medium transition-all duration-200 flex items-center justify-center space-x-2 group focus:outline-none focus:ring-2 focus:ring-blue-400/50"
        >
          <Github className="w-5 h-5 group-hover:scale-110 transition-transform duration-200" />
          <span>GitHub</span>
        </button>
        
        <button
          type="button"
          onClick={handleGoogleAuth}
          className="w-full h-12 px-4 bg-white/8 hover:bg-white/12 border border-white/20 hover:border-white/30 text-white rounded-xl font-medium transition-all duration-200 flex items-center justify-center space-x-2 group focus:outline-none focus:ring-2 focus:ring-blue-400/50"
        >
          <svg className="w-5 h-5 group-hover:scale-110 transition-transform duration-200" viewBox="0 0 24 24">
            <path fill="#4285f4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
            <path fill="#34a853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
            <path fill="#fbbc05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
            <path fill="#ea4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
          </svg>
          <span>Google</span>
        </button>
      </div>
    </>
  );
};

export default SocialAuth;