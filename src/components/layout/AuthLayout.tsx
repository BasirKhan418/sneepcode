import React from 'react';
import { motion } from 'framer-motion';
import { Code2, Sparkles, Zap, Users } from 'lucide-react';
import Card from '../ui/Card';

interface AuthLayoutProps {
  children: React.ReactNode;
  title: string;
  subtitle: string;
}

const AuthLayout: React.FC<AuthLayoutProps> = ({ children, title, subtitle }) => {
  return (
    <div className="min-h-screen flex items-center justify-center p-4">
      <div className="w-full max-w-6xl grid lg:grid-cols-2 gap-12 items-center">
        
        {/* Left Side - Branding */}
        <motion.div 
          className="hidden lg:block space-y-8"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="space-y-6">
            {/* Logo & Brand */}
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-blue-700 rounded-xl flex items-center justify-center shadow-lg">
                <Code2 className="w-6 h-6 text-white" />
              </div>
              <h1 className="text-3xl font-bold bg-gradient-to-r from-slate-900 to-slate-600 dark:from-white dark:to-slate-300 bg-clip-text text-transparent">
                SneepCode
              </h1>
            </div>
            
            {/* Main Heading */}
            <div className="space-y-4">
              <h2 className="text-4xl font-bold text-slate-900 dark:text-white leading-tight">
                Code. Learn.{' '}
                <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                  Innovate.
                </span>
              </h2>
              <p className="text-xl text-slate-600 dark:text-slate-300 leading-relaxed">
                Join thousands of developers building the future with our powerful coding platform.
              </p>
            </div>

            {/* Feature Cards */}
            <div className="grid grid-cols-1 gap-4">
              <FeatureCard 
                icon={<Sparkles className="w-5 h-5" />}
                title="AI-Powered IDE"
                description="Smart coding assistance with real-time suggestions and error detection"
                color="blue"
              />
              <FeatureCard 
                icon={<Users className="w-5 h-5" />}
                title="Live Collaboration"
                description="Code together in real-time with your team from anywhere"
                color="indigo"
              />
              <FeatureCard 
                icon={<Zap className="w-5 h-5" />}
                title="Instant Deployment"
                description="Deploy your projects instantly with one-click deployment"
                color="purple"
              />
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 pt-6">
              <div className="text-center">
                <div className="text-2xl font-bold text-slate-900 dark:text-white">50K+</div>
                <div className="text-sm text-slate-600 dark:text-slate-400">Developers</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-slate-900 dark:text-white">1M+</div>
                <div className="text-sm text-slate-600 dark:text-slate-400">Projects</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-slate-900 dark:text-white">99.9%</div>
                <div className="text-sm text-slate-600 dark:text-slate-400">Uptime</div>
              </div>
            </div>
          </div>

          {/* Floating Elements */}
          <div className="relative">
            <motion.div
              className="absolute -top-4 -right-4 w-20 h-20 bg-gradient-to-br from-blue-400/20 to-indigo-400/20 rounded-full blur-xl"
              animate={{ 
                scale: [1, 1.2, 1],
                opacity: [0.3, 0.6, 0.3]
              }}
              transition={{ 
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
            <motion.div
              className="absolute top-1/2 -left-8 w-16 h-16 bg-gradient-to-br from-indigo-400/20 to-purple-400/20 rounded-full blur-xl"
              animate={{ 
                scale: [1.2, 1, 1.2],
                opacity: [0.4, 0.7, 0.4]
              }}
              transition={{ 
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 1
              }}
            />
          </div>
        </motion.div>

        {/* Right Side - Auth Form */}
        <div className="w-full max-w-md mx-auto">
          <Card className="p-8">
            <div className="text-center mb-8">
              {/* Mobile Logo */}
              <div className="lg:hidden flex items-center justify-center space-x-3 mb-6">
                <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-blue-700 rounded-lg flex items-center justify-center">
                  <Code2 className="w-5 h-5 text-white" />
                </div>
                <h1 className="text-2xl font-bold bg-gradient-to-r from-slate-900 to-slate-600 dark:from-white dark:to-slate-300 bg-clip-text text-transparent">
                  SneepCode
                </h1>
              </div>
              
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-2">
                {title}
              </h2>
              <p className="text-slate-600 dark:text-slate-300">
                {subtitle}
              </p>
            </div>
            
            {children}
          </Card>
        </div>
      </div>
    </div>
  );
};

// Feature Card Component
interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  color: 'blue' | 'indigo' | 'purple';
}

const FeatureCard: React.FC<FeatureCardProps> = ({ icon, title, description, color }) => {
  const colorClasses = {
    blue: 'bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400',
    indigo: 'bg-indigo-100 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-400',
    purple: 'bg-purple-100 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400'
  };

  return (
    <motion.div 
      className="bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm rounded-xl p-4 border border-slate-200/50 dark:border-slate-700/50"
      whileHover={{ scale: 1.02 }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
    >
      <div className={`w-8 h-8 rounded-lg flex items-center justify-center mb-3 ${colorClasses[color]}`}>
        {icon}
      </div>
      <h3 className="font-semibold text-slate-900 dark:text-white mb-1 text-sm">{title}</h3>
      <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
        {description}
      </p>
    </motion.div>
  );
};

export default AuthLayout;