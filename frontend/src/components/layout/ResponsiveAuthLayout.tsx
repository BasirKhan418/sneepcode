import React from 'react';
import { Code2, Brain, Trophy, Target, Zap, Users, Shield, Clock, Award } from 'lucide-react';

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
    <div className="min-h-screen font-inter relative overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('https://res.cloudinary.com/deeokkhmo/image/upload/v1753474234/pawel-czerwinski-prMn9KINLtI-unsplash_hgprf3.jpg')`
        }}
      />

      {/* Dark overlay for better readability */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900/85 via-blue-900/80 to-slate-800/85" />

      {/* Optimized Background Effects - Static for Performance */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Main gradient orbs - static positioning */}
        <div className="absolute top-20 right-20 w-96 h-96 bg-gradient-to-br from-blue-600/20 via-blue-700/15 to-indigo-800/10 rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-20 w-80 h-80 bg-gradient-to-tr from-indigo-600/20 via-blue-800/15 to-slate-700/8 rounded-full blur-3xl" />

        {/* Subtle accent dots */}
        <div className="absolute top-1/3 left-1/5 w-2 h-2 bg-blue-400/40 rounded-full" />
        <div className="absolute bottom-1/4 right-1/4 w-3 h-3 bg-indigo-400/30 rounded-full" />
        <div className="absolute top-1/2 right-1/3 w-1.5 h-1.5 bg-cyan-400/50 rounded-full" />

        {/* Grid pattern overlay */}
        <div
          className="absolute inset-0 opacity-[0.010]"
          style={{
            backgroundImage: `
              linear-gradient(rgba(59, 130, 246, 0.3) 1px, transparent 1px),
              linear-gradient(90deg, rgba(59, 130, 246, 0.3) 1px, transparent 1px)
            `,
            backgroundSize: '40px 40px'
          }}
        />
      </div>

      <div className="relative z-10 min-h-screen flex items-center justify-center p-4 lg:p-8">
        <div className="w-full max-w-7xl grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">

          {/* Left Side - Marketing Content */}
          <div className="hidden lg:block space-y-8">
            {/* Brand Header */}
            <div className="flex items-center space-x-4">
              <div className="relative">
                <img src='./logo.png' width={70} height={70} />
                {/* Subtle glow effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl blur-lg opacity-20" />
              </div>
              <img src='./sneep.png' width={200} height={500} />
            </div>

            {/* Hero Content */}
            <div className="space-y-6">
              <h2 className="text-4xl lg:text-5xl font-black text-white leading-tight">
                Master{' '}
                <span className="bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-500 bg-clip-text text-transparent">
                  Coding
                </span>{' '}
                Skills
              </h2>
              <p className="text-lg text-blue-100/80 leading-relaxed max-w-lg font-medium">
                Practice coding problems, compete with developers worldwide, and get{' '}
                <span className="font-semibold text-cyan-300">
                  AI-powered assistance
                </span>{' '}
                for instant doubt resolution.
              </p>
            </div>

            {/* Feature Cards */}
            <div className="space-y-4">
              <FeatureCard
                icon={<Target className="w-5 h-5" />}
                title="Smart Practice"
                description="2000+ problems with adaptive difficulty"
                accent="bg-blue-500/10 border-blue-500/20"
              />
             
            </div>

            {/* Stats/Features Grid */}
            <div className="pt-4">
              <div className="grid grid-cols-2 gap-4">
                {[
                  { icon: <Zap className="w-4 h-4" />, text: "Real-time Judge", color: "text-yellow-400" },
                  { icon: <Users className="w-4 h-4" />, text: "15+ Languages", color: "text-green-400" },
                  { icon: <Shield className="w-4 h-4" />, text: "Company Prep", color: "text-purple-400" },
                  { icon: <Clock className="w-4 h-4" />, text: "24/7 Support", color: "text-blue-400" },
                  { icon: <Award className="w-4 h-4" />, text: "Weekly Contests", color: "text-orange-400" },
                  { icon: <Code2 className="w-4 h-4" />, text: "Expert Reviews", color: "text-indigo-400" }
                ].map((item, index) => (
                  <div key={index} className="flex items-center space-x-3 p-2 rounded-lg hover:bg-white/5 transition-colors duration-200">
                    <div className={`w-8 h-8 rounded-lg bg-white/8 border border-white/15 flex items-center justify-center ${item.color}`}>
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

          {/* Right Side - Auth Form */}
          <div className="w-full max-w-md  mx-auto lg:mx-28">
            <div className="relative">
              {/* Enhanced Glass Card */}
              <div className="relative bg-white/[0-2] backdrop-blur-sm rounded-3xl border border-white/20 p-8 lg:p-10 shadow-2xl">
                {/* Inner glow effect */}
                <div className="absolute inset-[1px] rounded-3xl bg-gradient-to-b from-white/[0.08] to-transparent pointer-events-none" />

                {/* Mobile Brand Header */}
                <div className="lg:hidden flex items-center justify-center space-x-3 mb-8">
                  <img src='./logo.png' width={70} height={70} />
                  <img src='./sneep.png' width={200} height={500} />
                </div>

                {/* Form Header */}
                <div className="text-center mb-8">
                  <h2 className="text-2xl lg:text-3xl font-black text-white mb-3 tracking-tight">
                    {title}
                  </h2>
                  <p className="text-blue-100/70 text-base font-medium leading-relaxed">
                    {subtitle}
                  </p>
                </div>

                {/* Form Content with Enhanced Background */}
                <div className="relative">
                  {/* Form background */}
                  <div className="absolute inset-0" />
                  <div className="relative p-6 lg:p-8">
                    {children}
                  </div>
                </div>
              </div>

              {/* Decorative elements */}
              <div className="absolute -top-2 -right-2 w-4 h-4 bg-blue-400/30 rounded-full blur-sm" />
              <div className="absolute -bottom-2 -left-2 w-3 h-3 bg-indigo-400/30 rounded-full blur-sm" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// Optimized Feature Card Component
interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  accent: string;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ accent }) => {
  return (
    <div className={`${accent} rounded-2xl p-1 border backdrop-blur-sm hover:bg-white/[0.08] transition-all duration-300 cursor-pointer`}>
      <div className="flex items-start space-x-4">
       <video 
            src='./video.mp4' 
            autoPlay 
            loop 
            muted 
            playsInline
            className="w-full h-72 object-fill rounded-xl"
          />
      </div>
    </div>
  );
};



export default ResponsiveAuthLayout;