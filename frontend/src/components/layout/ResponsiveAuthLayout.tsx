import React from 'react';
import { Code2, Brain, Trophy, Target, Zap, Users } from 'lucide-react';

interface ResponsiveAuthLayoutProps {
  children: React.ReactNode;
  title: string;
  subtitle: string;
}

const ResponsiveAuthLayout: React.FC<ResponsiveAuthLayoutProps> = ({ 
  children, 
  title, 
  subtitle 
}) => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800 relative overflow-hidden">
    
      <div className="absolute inset-0">
     
        <div className="absolute top-10 right-10 w-[500px] h-[500px] bg-gradient-to-br from-blue-600/40 via-blue-700/30 to-indigo-800/20 rounded-full blur-3xl opacity-80" />
        
        <div className="absolute bottom-10 left-10 w-[400px] h-[400px] bg-gradient-to-tr from-indigo-600/35 via-blue-800/25 to-slate-700/15 rounded-full blur-3xl opacity-70" />
        
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] bg-gradient-to-r from-cyan-600/25 via-blue-700/20 to-indigo-700/15 rounded-full blur-3xl opacity-60" />

        <div className="absolute top-1/4 left-1/4 w-16 h-16 bg-blue-400/10 rounded-full blur-xl" />
        <div className="absolute bottom-1/3 right-1/3 w-20 h-20 bg-indigo-400/8 rounded-full blur-xl" />
        
        <div 
          className="absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage: `
              linear-gradient(rgba(59, 130, 246, 0.3) 1px, transparent 1px),
              linear-gradient(90deg, rgba(59, 130, 246, 0.3) 1px, transparent 1px)
            `,
            backgroundSize: '50px 50px'
          }}
        />
        
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-slate-900/5 to-slate-900/10" />
      </div>

      <div className="relative z-10 min-h-screen flex items-center justify-center p-6">
        <div className="w-full max-w-7xl grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          
          <div className="hidden lg:block space-y-10">
            <div className="space-y-8">
              
              <div className="flex items-center space-x-4 group">
                <div className="relative">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-500 via-blue-600 to-blue-700 rounded-2xl flex items-center justify-center shadow-2xl shadow-blue-500/30 border border-blue-400/30 backdrop-blur-sm">
                    <Code2 className="w-8 h-8 text-white drop-shadow-sm" />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-blue-700 rounded-2xl blur-xl opacity-30" />
                </div>
                <h1 className="text-4xl font-black bg-gradient-to-r from-white via-blue-100 to-white bg-clip-text text-transparent tracking-tight">
                  SneepCode
                </h1>
              </div>
              
              <div className="space-y-6">
                <h2 className="text-5xl font-black text-white leading-tight tracking-tight">
                  Master{' '}
                  <span className="bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-500 bg-clip-text text-transparent">
                    Coding
                  </span>{' '}
                  <span className="text-white">Skills</span>
                </h2>
                <p className="text-xl text-blue-100/80 leading-relaxed max-w-lg font-light">
                  Practice coding problems, compete with developers worldwide, and get{' '}
                  <span className="font-semibold bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
                    AI-powered assistance
                  </span>{' '}
                  for instant doubt resolution.
                </p>
              </div>
              <div className="space-y-4">
                <FeatureCard 
                  icon={<Target className="w-5 h-5" />}
                  title="Smart Practice"
                  description="2000+ problems with adaptive difficulty"
                  color="blue"
                />
                <FeatureCard 
                  icon={<Trophy className="w-5 h-5" />}
                  title="Live Contests"
                  description="Weekly competitions with global rankings"
                  color="indigo"
                />
                <FeatureCard 
                  icon={<Brain className="w-5 h-5" />}
                  title="AI Assistant"
                  description="Real-time code help and optimization"
                  color="cyan"
                />
              </div>

        
              <div className="pt-6">
                <div className="grid grid-cols-2 gap-6">
                  <div className="space-y-4">
                    {[
                      { icon: <Zap className="w-3 h-3" />, text: "Real-time Judge", color: "text-yellow-400" },
                      { icon: <Users className="w-3 h-3" />, text: "15+ Languages", color: "text-green-400" },
                      { icon: <Target className="w-3 h-3" />, text: "Company Prep", color: "text-purple-400" }
                    ].map((item, index) => (
                      <div key={index} className="flex items-center space-x-3 group cursor-pointer">
                        <div className={`w-8 h-8 rounded-xl bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center ${item.color}`}>
                          {item.icon}
                        </div>
                        <span className="text-sm font-medium text-blue-100/90">
                          {item.text}
                        </span>
                      </div>
                    ))}
                  </div>
                  <div className="space-y-4">
                    {[
                      { icon: <Brain className="w-3 h-3" />, text: "24/7 AI Support", color: "text-blue-400" },
                      { icon: <Trophy className="w-3 h-3" />, text: "Weekly Contests", color: "text-orange-400" },
                      { icon: <Code2 className="w-3 h-3" />, text: "Expert Reviews", color: "text-indigo-400" }
                    ].map((item, index) => (
                      <div key={index} className="flex items-center space-x-3 group cursor-pointer">
                        <div className={`w-8 h-8 rounded-xl bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center ${item.color}`}>
                          {item.icon}
                        </div>
                        <span className="text-sm font-medium text-blue-100/90">
                          {item.text}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

      
          <div className="w-full max-w-md mx-auto lg:mx-0">
          
            <div className="relative">
            
              <div className="relative backdrop-blur-[40px] bg-gradient-to-br from-white/[0.85] via-white/[0.75] to-white/[0.65] rounded-3xl shadow-[0_25px_60px_rgba(0,0,0,0.4),0_8px_32px_rgba(255,255,255,0.1)_inset] border-2 border-white/40 p-10 transition-all duration-500 hover:shadow-[0_35px_80px_rgba(0,0,0,0.5),0_12px_40px_rgba(255,255,255,0.15)_inset] hover:border-white/50 hover:backdrop-blur-[50px]">
                
              
                <div className="absolute inset-0 bg-gradient-to-br from-white/60 via-white/30 to-white/10 rounded-3xl pointer-events-none" />
                
                <div className="absolute inset-[1px] rounded-3xl bg-gradient-to-br from-transparent via-white/20 to-transparent border border-white/20" />
          
                <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-blue-500/8 via-transparent to-indigo-500/8" />
                
                <div className="absolute top-0 left-1/4 right-1/4 h-px bg-gradient-to-r from-transparent via-white/60 to-transparent" />
                
             
                <div className="relative z-10">
                
                  <div className="lg:hidden flex items-center justify-center space-x-3 mb-8">
                    <div className="relative">
                      <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-700 rounded-2xl flex items-center justify-center shadow-xl shadow-blue-500/25">
                        <Code2 className="w-6 h-6 text-white drop-shadow-sm" />
                      </div>
                      <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-blue-700 rounded-2xl blur-lg opacity-30" />
                    </div>
                    <h1 className="text-2xl font-black text-gray-900 tracking-tight">
                      SneepCode
                    </h1>
                  </div>
                  
                 
                  <div className="text-center mb-8">
                    <h2 className="text-3xl font-black text-gray-900 mb-4 tracking-tight leading-tight">
                      {title}
                    </h2>
                    <p className="text-gray-600 text-lg font-light leading-relaxed">
                      {subtitle}
                    </p>
                  </div>
                  
                
                  {children}
                </div>
              </div>
              
        
              <div className="absolute -top-4 -right-4 w-8 h-8 bg-blue-400/20 rounded-full blur-lg" />
              <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-indigo-400/20 rounded-full blur-lg" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};


interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  color: 'blue' | 'indigo' | 'cyan';
}

const FeatureCard: React.FC<FeatureCardProps> = ({ icon, title, description, color }) => {
  const colorClasses = {
    blue: {
      iconBg: 'from-blue-500 to-blue-600',
      iconShadow: 'shadow-blue-500/30'
    },
    indigo: {
      iconBg: 'from-indigo-500 to-indigo-600',
      iconShadow: 'shadow-indigo-500/30'
    },
    cyan: {
      iconBg: 'from-cyan-500 to-cyan-600',
      iconShadow: 'shadow-cyan-500/30'
    }
  };

  const colors = colorClasses[color];

  return (
    <div className="backdrop-blur-xl bg-white/10 rounded-2xl p-6 border border-white/20 shadow-lg hover:shadow-xl hover:bg-white/15 transition-all duration-300 cursor-pointer relative overflow-hidden">
      
 
      <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-blue-500/5 opacity-0 hover:opacity-100 transition-opacity duration-300 rounded-2xl" />
      
      <div className="flex items-start space-x-4 relative z-10">
  
        <div className={`w-12 h-12 bg-gradient-to-br ${colors.iconBg} text-white rounded-2xl flex items-center justify-center flex-shrink-0 shadow-xl ${colors.iconShadow} relative`}>
          {icon}
          <div className={`absolute inset-0 bg-gradient-to-br ${colors.iconBg} rounded-2xl blur-lg opacity-40`} />
        </div>
        
        <div className="flex-1 min-w-0">
          <h3 className="font-bold text-white mb-2 text-base tracking-tight">
            {title}
          </h3>
          <p className="text-sm text-blue-100/70 leading-relaxed font-light">
            {description}
          </p>
        </div>
      </div>
    </div>
  );
};


export default ResponsiveAuthLayout;