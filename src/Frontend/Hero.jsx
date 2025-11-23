import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Sun, Zap, TrendingUp, ArrowRight, Play, Sparkles, Award, Users, CheckCircle2, IndianRupee, Clock, Shield, Phone } from 'lucide-react';

const Hero = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth - 0.5) * 15,
        y: (e.clientY / window.innerHeight - 0.5) * 15,
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const stats = [
    { icon: Award, value: '60%', label: 'Govt Subsidy', color: 'orange' },
    { icon: Users, value: '500+', label: 'Happy Customers', color: 'blue' },
    { icon: IndianRupee, value: '18K+', label: 'Annual Savings', color: 'green' },
  ];

  const features = [
    { icon: CheckCircle2, text: 'Free Installation Consultation' },
    { icon: Shield, text: '25 Year Panel Warranty' },
    { icon: IndianRupee, text: 'EMI Options Available' },
    { icon: Clock, text: 'Quick 7-Day Installation' },
  ];

  const floatingIcons = [
    { icon: Sun, color: 'text-yellow-400', delay: 0, position: { top: '15%', left: '10%' } },
    { icon: Zap, color: 'text-blue-400', delay: 0.5, position: { top: '25%', right: '15%' } },
    { icon: Sparkles, color: 'text-purple-400', delay: 1, position: { bottom: '20%', left: '8%' } },
    { icon: TrendingUp, color: 'text-green-400', delay: 1.5, position: { bottom: '30%', right: '12%' } },
  ];

  return (
    <div className="relative min-h-screen bg-gradient-to-br from-slate-900 via-blue-950 to-slate-950 overflow-hidden">
      
      {/* Clear Gradient Orbs - No Blur */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          animate={{
            scale: [1, 1.1, 1],
            x: [0, 50, 0],
            y: [0, 30, 0],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
          className="absolute -top-20 -right-20 w-72 h-72 bg-orange-500/20 rounded-full blur-[100px]"
        />
        <motion.div
          animate={{
            scale: [1.1, 1, 1.1],
            x: [0, -30, 0],
            y: [0, 50, 0],
          }}
          transition={{
            duration: 18,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
          className="absolute -bottom-20 -left-20 w-80 h-80 bg-blue-500/20 rounded-full blur-[100px]"
        />
      </div>

      {/* Subtle Grid Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff03_1px,transparent_1px),linear-gradient(to_bottom,#ffffff03_1px,transparent_1px)] bg-[size:4rem_4rem] pointer-events-none" />

      {/* Floating Icons - Desktop Only */}
      <div className="hidden lg:block">
        {floatingIcons.map((item, idx) => (
          <motion.div
            key={idx}
            className="absolute"
            style={item.position}
            initial={{ opacity: 0, scale: 0 }}
            animate={{ 
              opacity: [0.4, 0.8, 0.4],
              scale: 1,
              y: [0, -15, 0],
            }}
            transition={{
              opacity: { duration: 3, delay: item.delay, repeat: Infinity },
              y: { duration: 4, delay: item.delay, repeat: Infinity, ease: 'easeInOut' },
              scale: { duration: 0.5, delay: item.delay }
            }}
          >
            <div className="w-12 h-12 bg-slate-800/60 backdrop-blur-sm rounded-xl flex items-center justify-center border border-white/10 shadow-xl">
              <item.icon className={`w-6 h-6 ${item.color}`} />
            </div>
          </motion.div>
        ))}
      </div>

      {/* Main Content Container */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 sm:pt-32 lg:pt-20 pb-12 lg:pb-20">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center min-h-[calc(100vh-200px)]">
          
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-6 lg:space-y-8"
          >
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center space-x-2 bg-gradient-to-r from-orange-500/20 to-pink-500/20 backdrop-blur-sm border border-orange-500/40 rounded-full px-4 sm:px-6 py-2 sm:py-3"
            >
              <Sparkles className="w-4 h-4 sm:w-5 sm:h-5 text-orange-400" />
              <span className="text-orange-300 font-semibold text-xs sm:text-sm lg:text-base">
                PM Surya Ghar Muft Bijli Yojana Partner
              </span>
            </motion.div>

            {/* Headline */}
            <div className="space-y-4">
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-black leading-tight"
              >
                <span className="text-white block">Power Your Home</span>
                <span className="bg-gradient-to-r from-orange-400 via-pink-500 to-purple-500 bg-clip-text text-transparent block">
                  with Solar Energy
                </span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="text-base sm:text-lg lg:text-xl text-gray-300 leading-relaxed"
              >
                Get up to <span className="text-orange-400 font-bold">60% government subsidy</span> and save 
                <span className="text-green-400 font-bold"> ₹15,000-18,000 annually</span> on electricity bills.
              </motion.p>
            </div>

            {/* Features Grid */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="grid grid-cols-1 sm:grid-cols-2 gap-3"
            >
              {features.map((feature, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.6 + idx * 0.1 }}
                  className="flex items-center space-x-2 text-gray-300 text-sm lg:text-base"
                >
                  <feature.icon className="w-5 h-5 text-green-400 flex-shrink-0" />
                  <span>{feature.text}</span>
                </motion.div>
              ))}
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
              className="flex flex-col sm:flex-row gap-4 pt-2"
            >
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="group px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-orange-500 to-orange-600 rounded-xl sm:rounded-2xl font-bold text-white text-base sm:text-lg shadow-lg shadow-orange-500/50 hover:shadow-orange-500/70 transition-all"
              >
                <span className="flex items-center justify-center space-x-2">
                  <span>Get Free Quote</span>
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </span>
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="group px-6 sm:px-8 py-3 sm:py-4 bg-white/10 backdrop-blur-sm border-2 border-white/20 hover:border-orange-500/50 rounded-xl sm:rounded-2xl font-bold text-white text-base sm:text-lg transition-all"
              >
                <span className="flex items-center justify-center space-x-2">
                  <Phone className="w-5 h-5" />
                  <span>Call Now</span>
                </span>
              </motion.button>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
              className="grid grid-cols-3 gap-3 sm:gap-4 pt-4"
            >
              {stats.map((stat, idx) => (
                <motion.div
                  key={idx}
                  whileHover={{ y: -5 }}
                  className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl sm:rounded-2xl p-3 sm:p-4 text-center hover:border-white/20 transition-all"
                >
                  <div className={`w-10 h-10 sm:w-12 sm:h-12 mx-auto mb-2 bg-gradient-to-br from-${stat.color}-500 to-${stat.color}-600 rounded-lg sm:rounded-xl flex items-center justify-center`}>
                    <stat.icon className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                  </div>
                  <div className="text-xl sm:text-2xl lg:text-3xl font-black text-white mb-1">
                    {stat.value}
                  </div>
                  <div className="text-xs sm:text-sm text-gray-400">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right Side - Solar Panel with Advertisement */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative"
          >
            <motion.div
              style={{
                rotateY: mousePosition.x * 0.5,
                rotateX: mousePosition.y * 0.5,
              }}
              className="relative"
            >
              {/* Main Solar Panel Card */}
              <div className="relative bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl sm:rounded-3xl p-4 sm:p-6 lg:p-8 border border-white/20 shadow-2xl">
                
                {/* Advertisement Banner */}
                <motion.div
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 }}
                  className="bg-gradient-to-r from-orange-500 to-pink-500 rounded-xl sm:rounded-2xl p-4 sm:p-6 mb-4 sm:mb-6 text-white"
                >
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center space-x-2">
                      <Sun className="w-6 h-6 sm:w-8 sm:h-8" />
                      <div>
                        <h3 className="text-base sm:text-lg lg:text-xl font-bold">Kashmir Solar Infratech</h3>
                        <p className="text-xs sm:text-sm opacity-90">Your Trusted Solar Partner</p>
                      </div>
                    </div>
                    <motion.div
                      animate={{ rotate: 360 }}
                      transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
                      className="w-10 h-10 sm:w-12 sm:h-12 bg-white/20 rounded-full flex items-center justify-center"
                    >
                      <Sparkles className="w-5 h-5 sm:w-6 sm:h-6" />
                    </motion.div>
                  </div>
                  <div className="grid grid-cols-2 gap-3 sm:gap-4 text-xs sm:text-sm">
                    <div className="bg-white/10 backdrop-blur-sm rounded-lg p-2 sm:p-3">
                      <div className="font-bold text-lg sm:text-xl lg:text-2xl">₹78,000</div>
                      <div className="opacity-90 text-xs">Max Subsidy</div>
                    </div>
                    <div className="bg-white/10 backdrop-blur-sm rounded-lg p-2 sm:p-3">
                      <div className="font-bold text-lg sm:text-xl lg:text-2xl">7 Days</div>
                      <div className="opacity-90 text-xs">Installation</div>
                    </div>
                  </div>
                </motion.div>

                {/* Solar Panel Grid */}
                <div className="grid grid-cols-6 gap-1 sm:gap-2 mb-4 sm:mb-6">
                  {[...Array(24)].map((_, idx) => (
                    <motion.div
                      key={idx}
                      initial={{ opacity: 0, scale: 0 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{
                        delay: 0.6 + idx * 0.02,
                      }}
                      className="aspect-square bg-gradient-to-br from-blue-600 to-blue-800 rounded border border-blue-400/30 relative overflow-hidden"
                    >
                      <motion.div
                        animate={{
                          opacity: [0.3, 0.9, 0.3],
                        }}
                        transition={{
                          duration: 2,
                          delay: idx * 0.1,
                          repeat: Infinity,
                        }}
                        className="absolute inset-0 bg-gradient-to-br from-cyan-400/60 to-transparent"
                      />
                    </motion.div>
                  ))}
                </div>

                {/* Live Stats Display */}
                <div className="space-y-3 sm:space-y-4 bg-slate-950/50 rounded-xl sm:rounded-2xl p-3 sm:p-4 lg:p-6 border border-white/10">
                  <div className="flex items-center justify-between text-sm sm:text-base">
                    <span className="text-gray-400">Power Output</span>
                    <motion.div
                      animate={{ scale: [1, 1.05, 1] }}
                      transition={{ duration: 2, repeat: Infinity }}
                      className="flex items-center space-x-2"
                    >
                      <Zap className="w-4 h-4 sm:w-5 sm:h-5 text-yellow-400" />
                      <span className="text-green-400 font-bold text-base sm:text-lg lg:text-xl">3.5 kW</span>
                    </motion.div>
                  </div>
                  
                  <div className="flex items-center justify-between text-sm sm:text-base">
                    <span className="text-gray-400">Efficiency</span>
                    <span className="text-orange-400 font-bold text-base sm:text-lg">98.5%</span>
                  </div>
                  
                  <div className="flex items-center justify-between text-sm sm:text-base">
                    <span className="text-gray-400">Status</span>
                    <div className="flex items-center space-x-2">
                      <motion.div
                        animate={{ scale: [1, 1.3, 1] }}
                        transition={{ duration: 1.5, repeat: Infinity }}
                        className="w-2 h-2 sm:w-3 sm:h-3 bg-green-400 rounded-full shadow-lg shadow-green-400/50"
                      />
                      <span className="text-green-400 font-bold">Active</span>
                    </div>
                  </div>

                  {/* Monthly Savings */}
                  <div className="pt-3 sm:pt-4 border-t border-white/10">
                    <div className="bg-gradient-to-r from-green-500/20 to-emerald-500/20 rounded-lg p-3 sm:p-4">
                      <div className="flex items-center justify-between">
                        <span className="text-gray-300 text-xs sm:text-sm">Monthly Savings</span>
                        <div className="flex items-center space-x-1 text-green-400 font-bold text-lg sm:text-xl lg:text-2xl">
                          <IndianRupee className="w-4 h-4 sm:w-5 sm:h-5" />
                          <span>1,500</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Orbiting Energy Icons */}
              {[0, 1, 2].map((idx) => (
                <motion.div
                  key={idx}
                  className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 hidden lg:block"
                  animate={{
                    rotate: 360,
                  }}
                  transition={{
                    duration: 8 + idx * 2,
                    repeat: Infinity,
                    ease: 'linear',
                  }}
                  style={{
                    width: `${180 + idx * 40}px`,
                    height: `${180 + idx * 40}px`,
                  }}
                >
                  <motion.div
                    animate={{
                      scale: [1, 1.2, 1],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      delay: idx * 0.3,
                    }}
                    className="absolute top-0 left-1/2 -translate-x-1/2 w-8 h-8 sm:w-10 sm:h-10 bg-gradient-to-br from-orange-400 to-pink-500 rounded-lg flex items-center justify-center shadow-xl"
                  >
                    <Zap className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
                  </motion.div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Hero;