import React from 'react';
import { motion } from 'framer-motion';
import { Code2, Brain, Trophy, Users, Zap, Target } from 'lucide-react';

interface AuthLayoutProps {
  children: React.ReactNode;
  title: string;
  subtitle: string;
}

// Enhanced Glass Card Component
interface CardProps {
  children: React.ReactNode;
  className?: string;
}

const GlassMorphCard: React.FC<CardProps> = ({ children, className = '' }) => {
  return (
    <motion.div
      className={`
        relative backdrop-blur-2xl bg-white/95 rounded-3xl
        shadow-[0_20px_60px_rgba(31,38,135,0.2)]
        border-2 border-white/30
        before:absolute before:inset-0 before:rounded-3xl 
        before:bg-gradient-to-br before:from-white/20 before:via-white/10 before:to-blue-500/10
        before:backdrop-blur-2xl before:pointer-events-none
        overflow-hidden
        hover:shadow-[0_30px_80px_rgba(31,38,135,0.25)]
        transition-all duration-500
        ${className}
      `}
      initial={{ opacity: 0, y: 40, scale: 0.9 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ 
        duration: 1, 
        delay: 0.2,
        type: "spring",
        stiffness: 80,
        damping: 20
      }}
      whileHover={{ 
        y: -5,
        scale: 1.02,
        transition: { duration: 0.3 }
      }}
    >
      {/* Enhanced glass reflection effect */}
      <div className="absolute inset-0 bg-gradient-to-br from-white/30 via-white/5 to-transparent rounded-3xl" />
      
      {/* Animated border glow */}
      <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-blue-400/20 via-transparent to-indigo-400/20 blur-sm" />
      
      {/* Content */}
      <div className="relative z-10">
        {children}
      </div>
      
      {/* Enhanced inner glow with animation */}
      <motion.div 
        className="absolute inset-0 rounded-3xl bg-gradient-to-br from-blue-400/10 via-transparent to-indigo-400/10 pointer-events-none"
        animate={{ 
          opacity: [0.5, 0.8, 0.5],
        }}
        transition={{ 
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
    </motion.div>
  );
};

const AuthLayout: React.FC<AuthLayoutProps> = ({ children, title, subtitle }) => {
  return (
    <div className="h-screen bg-gradient-to-br from-slate-50 via-blue-50/60 to-indigo-50/40 relative overflow-hidden">
      {/* Enhanced background effects */}
      <div className="absolute inset-0">
        {/* Main gradient orbs */}
        <motion.div
          className="absolute top-10 right-10 w-96 h-96 bg-gradient-to-br from-blue-400/20 via-blue-500/10 to-transparent rounded-full blur-3xl"
          animate={{ 
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.6, 0.3],
            x: [0, 30, 0],
            y: [0, -20, 0]
          }}
          transition={{ 
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        
        <motion.div
          className="absolute bottom-10 left-10 w-80 h-80 bg-gradient-to-tr from-indigo-400/15 via-purple-500/10 to-transparent rounded-full blur-3xl"
          animate={{ 
            scale: [1.2, 1, 1.2],
            opacity: [0.4, 0.7, 0.4],
            x: [0, -20, 0],
            y: [0, 30, 0]
          }}
          transition={{ 
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2
          }}
        />
        
        <motion.div
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-72 h-72 bg-gradient-to-r from-cyan-400/10 via-blue-500/8 to-indigo-600/10 rounded-full blur-3xl"
          animate={{ 
            scale: [1, 1.3, 1],
            opacity: [0.2, 0.5, 0.2],
            rotate: [0, 180, 360]
          }}
          transition={{ 
            duration: 15,
            repeat: Infinity,
            ease: "linear"
          }}
        />
        
        {/* Additional floating elements */}
        <motion.div
          className="absolute top-1/4 left-1/4 w-32 h-32 bg-blue-300/20 rounded-full blur-2xl"
          animate={{ 
            y: [0, -30, 0],
            x: [0, 20, 0],
            scale: [1, 1.1, 1]
          }}
          transition={{ 
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1
          }}
        />
        
        <motion.div
          className="absolute bottom-1/4 right-1/4 w-40 h-40 bg-indigo-300/15 rounded-full blur-2xl"
          animate={{ 
            y: [0, 25, 0],
            x: [0, -15, 0],
            scale: [1.1, 1, 1.1]
          }}
          transition={{ 
            duration: 7,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 3
          }}
        />
      </div>

      {/* Subtle grid pattern overlay */}
      <div 
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: `
            linear-gradient(rgba(59, 130, 246, 0.5) 1px, transparent 1px),
            linear-gradient(90deg, rgba(59, 130, 246, 0.5) 1px, transparent 1px)
          `,
          backgroundSize: '50px 50px'
        }}
      />

      <div className="h-screen flex items-center justify-center p-6 relative z-10">
        <div className="w-full max-w-7xl grid lg:grid-cols-2 gap-12 items-center">
          
          {/* Left Side - Enhanced Professional Design */}
          <motion.div 
            className="hidden lg:block space-y-8"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <div className="space-y-8">
              {/* Premium Logo & Brand */}
              <div className="flex items-center space-x-4 mb-2">
                <motion.div 
                  className="w-16 h-16 bg-gradient-to-br from-blue-500 via-blue-600 to-blue-700 rounded-3xl flex items-center justify-center shadow-2xl shadow-blue-500/30 border border-blue-400/20"
                  whileHover={{ 
                    scale: 1.15, 
                    rotate: 10,
                    boxShadow: "0 35px 60px -12px rgba(59, 130, 246, 0.5)"
                  }}
                  transition={{ type: "spring", stiffness: 400, damping: 15 }}
                >
                  <Code2 className="w-8 h-8 text-white drop-shadow-sm" />
                </motion.div>
                <motion.h1 
                  className="text-4xl font-black bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 bg-clip-text text-transparent tracking-tight"
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  SneepCode
                </motion.h1>
              </div>
              
              {/* Enhanced Main Heading with Learn Animation */}
              <div className="space-y-5">
                <motion.h2 
                  className="text-5xl font-black text-gray-900 leading-tight tracking-tight"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.5 }}
                >
                  Master{' '}
                  <motion.span
                    className="inline-block bg-gradient-to-r from-blue-600 via-blue-700 to-indigo-700 bg-clip-text text-transparent cursor-pointer"
                    whileHover={{ 
                      scale: 1.1, 
                      rotate: [0, -3, 3, -3, 0],
                      textShadow: "0 0 20px rgba(59, 130, 246, 0.5)"
                    }}
                    transition={{ 
                      type: "spring", 
                      stiffness: 300, 
                      damping: 10,
                      rotate: { duration: 0.5 }
                    }}
                  >
                    Coding
                  </motion.span>{' '}
                  <motion.span
                    className="inline-block text-gray-900 cursor-pointer"
                    whileHover={{ 
                      scale: 1.05, 
                      y: -5,
                      color: "#2563eb"
                    }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    Skills
                  </motion.span>
                </motion.h2>
                <motion.p 
                  className="text-xl text-gray-600 leading-relaxed max-w-lg font-light"
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.7 }}
                >
                  Practice coding problems, compete with developers worldwide, and get <span className="font-semibold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">AI-powered assistance</span> for instant doubt resolution.
                </motion.p>
              </div>

              {/* Premium Feature Cards with Enhanced Animations */}
              <motion.div 
                className="grid grid-cols-1 gap-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.9 }}
              >
                <FeatureCard 
                  icon={<Target className="w-5 h-5" />}
                  title="Coding Challenges"
                  description="Solve problems from beginner to advanced levels across multiple programming languages"
                  color="blue"
                />
                <FeatureCard 
                  icon={<Trophy className="w-5 h-5" />}
                  title="Live Contests"
                  description="Compete in real-time coding contests and climb the global leaderboard"
                  color="indigo"
                />
                <FeatureCard 
                  icon={<Brain className="w-5 h-5" />}
                  title="AI Code Assistant"
                  description="Get instant help with debugging, code optimization, and concept explanations"
                  color="cyan"
                />
              </motion.div>

              {/* Enhanced Platform Highlights with Animations */}
              <motion.div 
                className="pt-6"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 1.1 }}
              >
                <div className="grid grid-cols-2 gap-6">
                  <div className="space-y-4">
                    {[
                      { color: "bg-blue-500", text: "2000+ Problems" },
                      { color: "bg-indigo-500", text: "Weekly Contests" },
                      { color: "bg-cyan-500", text: "Real-time Judge" }
                    ].map((item, index) => (
                      <motion.div 
                        key={item.text}
                        className="flex items-center space-x-3 group cursor-pointer"
                        whileHover={{ x: 5, scale: 1.02 }}
                        transition={{ type: "spring", stiffness: 300 }}
                      >
                        <motion.div 
                          className={`w-3 h-3 ${item.color} rounded-full shadow-lg`}
                          whileHover={{ scale: 1.3, rotate: 360 }}
                          transition={{ duration: 0.3 }}
                        />
                        <span className="text-sm font-medium text-gray-700 group-hover:text-gray-900 transition-colors duration-200">
                          {item.text}
                        </span>
                      </motion.div>
                    ))}
                  </div>
                  <div className="space-y-4">
                    {[
                      { color: "bg-purple-500", text: "15+ Languages" },
                      { color: "bg-pink-500", text: "Company Prep" },
                      { color: "bg-orange-500", text: "24/7 AI Support" }
                    ].map((item, index) => (
                      <motion.div 
                        key={item.text}
                        className="flex items-center space-x-3 group cursor-pointer"
                        whileHover={{ x: 5, scale: 1.02 }}
                        transition={{ type: "spring", stiffness: 300 }}
                      >
                        <motion.div 
                          className={`w-3 h-3 ${item.color} rounded-full shadow-lg`}
                          whileHover={{ scale: 1.3, rotate: 360 }}
                          transition={{ duration: 0.3 }}
                        />
                        <span className="text-sm font-medium text-gray-700 group-hover:text-gray-900 transition-colors duration-200">
                          {item.text}
                        </span>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* Right Side - Enhanced Auth Form */}
          <div className="w-full max-w-md mx-auto">
            <GlassMorphCard className="p-10">
              <div className="text-center mb-8">
                {/* Enhanced Mobile Logo */}
                <div className="lg:hidden flex items-center justify-center space-x-3 mb-6">
                  <motion.div 
                    className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-700 rounded-2xl flex items-center justify-center shadow-xl shadow-blue-500/25"
                    whileHover={{ scale: 1.15, rotate: 10 }}
                    transition={{ type: "spring", stiffness: 400 }}
                  >
                    <Code2 className="w-6 h-6 text-white drop-shadow-sm" />
                  </motion.div>
                  <h1 className="text-2xl font-black text-gray-900 tracking-tight">
                    SneepCode
                  </h1>
                </div>
                
                <motion.h2 
                  className="text-3xl font-black text-gray-900 mb-4 tracking-tight leading-tight"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                >
                  {title}
                </motion.h2>
                <motion.p 
                  className="text-gray-600 text-lg font-light leading-relaxed"
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.5 }}
                >
                  {subtitle}
                </motion.p>
              </div>
              
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
              >
                {children}
              </motion.div>
            </GlassMorphCard>
          </div>
        </div>
      </div>
    </div>
  );
};

// Enhanced Feature Card Component with Beautiful Animations
interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  color: 'blue' | 'indigo' | 'cyan';
}

const FeatureCard: React.FC<FeatureCardProps> = ({ icon, title, description, color }) => {
  const colorClasses = {
    blue: {
      bg: 'from-blue-50/90 to-blue-100/60',
      iconBg: 'from-blue-500 to-blue-600',
      border: 'border-blue-200/60',
      shadow: 'shadow-blue-500/10',
      hoverShadow: 'hover:shadow-blue-500/20'
    },
    indigo: {
      bg: 'from-indigo-50/90 to-indigo-100/60',
      iconBg: 'from-indigo-500 to-indigo-600',
      border: 'border-indigo-200/60',
      shadow: 'shadow-indigo-500/10',
      hoverShadow: 'hover:shadow-indigo-500/20'
    },
    cyan: {
      bg: 'from-cyan-50/90 to-cyan-100/60',
      iconBg: 'from-cyan-500 to-cyan-600',
      border: 'border-cyan-200/60',
      shadow: 'shadow-cyan-500/10',
      hoverShadow: 'hover:shadow-cyan-500/20'
    }
  };

  const colors = colorClasses[color];

  return (
    <motion.div 
      className={`
        backdrop-blur-xl bg-white/80 rounded-2xl p-6 
        border-2 border-white/40 shadow-lg ${colors.shadow}
        hover:shadow-2xl hover:bg-white/90 ${colors.hoverShadow}
        transition-all duration-500 cursor-pointer
        hover:border-white/60 relative overflow-hidden
        group
      `}
      whileHover={{ 
        y: -8, 
        scale: 1.03,
        transition: { duration: 0.3, type: "spring", stiffness: 300 }
      }}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.1 }}
    >
      {/* Animated background gradient */}
      <motion.div
        className={`absolute inset-0 bg-gradient-to-br ${colors.bg} opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl`}
        initial={false}
      />
      
      <div className="flex items-start space-x-4 relative z-10">
        {/* Enhanced icon container with animations */}
        <div className={`
          w-12 h-12 bg-gradient-to-br ${colors.iconBg} text-white rounded-2xl 
          flex items-center justify-center flex-shrink-0
          shadow-xl ${colors.shadow} relative
          group-hover:scale-110 group-hover:rotate-3
          transition-all duration-300
        `}>
          {icon}
          {/* Icon glow effect */}
          <div className={`absolute inset-0 bg-gradient-to-br ${colors.iconBg} rounded-2xl blur-lg opacity-30 group-hover:opacity-50 transition-opacity duration-300`} />
        </div>
        
        <div className="flex-1 min-w-0">
          <motion.h3 
            className="font-bold text-gray-900 mb-2 text-base tracking-tight group-hover:text-gray-800 transition-colors duration-300"
            whileHover={{ x: 3 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            {title}
          </motion.h3>
          <p className="text-sm text-gray-600 leading-relaxed font-light group-hover:text-gray-700 transition-colors duration-300">
            {description}
          </p>
        </div>
      </div>
      
      {/* Enhanced shine effect */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent rounded-2xl opacity-0 group-hover:opacity-100"
        animate={{
          x: ['-100%', '100%'],
        }}
        transition={{
          duration: 1.5,
          repeat: Infinity,
          repeatDelay: 3,
          ease: "easeInOut"
        }}
        style={{
          background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.4), transparent)'
        }}
      />
    </motion.div>
  );
};

export default AuthLayout;