import React, { useState, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Sun, Zap, TrendingUp, ArrowRight, Play, Sparkles, Award, Users, CheckCircle2 } from 'lucide-react';

const Hero = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 300], [0, 100]);
  const y2 = useTransform(scrollY, [0, 300], [0, -100]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth - 0.5) * 20,
        y: (e.clientY / window.innerHeight - 0.5) * 20,
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const stats = [
    { icon: Award, value: '60%', label: 'Govt Subsidy', color: 'from-orange-500 to-red-500' },
    { icon: Users, value: '500+', label: 'Happy Customers', color: 'from-blue-500 to-cyan-500' },
    { icon: Zap, value: '₹18K+', label: 'Annual Savings', color: 'from-green-500 to-emerald-500' },
  ];

  const features = [
    'Free Installation Consultation',
    '25 Year Panel Warranty',
    'EMI Options Available',
    'Complete Documentation Support',
  ];

  const floatingElements = [
    { icon: Sun, delay: 0, duration: 6, x: 20, y: 30 },
    { icon: Zap, delay: 1, duration: 8, x: 80, y: 20 },
    { icon: Sparkles, delay: 2, duration: 7, x: 60, y: 70 },
    { icon: TrendingUp, delay: 1.5, duration: 9, x: 15, y: 60 },
  ];

  return (
    <div className="relative min-h-screen overflow-hidden bg-gradient-to-br from-slate-950 via-blue-950 to-slate-950">
      {/* Animated Gradient Orbs */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 90, 0],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
          className="absolute -top-40 -right-40 w-96 h-96 bg-gradient-to-br from-orange-500/30 to-pink-500/30 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            scale: [1.2, 1, 1.2],
            rotate: [90, 0, 90],
            opacity: [0.4, 0.6, 0.4],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
          className="absolute -bottom-40 -left-40 w-96 h-96 bg-gradient-to-tr from-blue-500/30 to-cyan-500/30 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-br from-purple-500/20 to-orange-500/20 rounded-full blur-3xl"
        />
      </div>

      {/* Grid Pattern Overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:4rem_4rem]" />

      {/* Floating Animated Icons */}
      {floatingElements.map((element, idx) => (
        <motion.div
          key={idx}
          className="absolute hidden lg:block"
          style={{ left: `${element.x}%`, top: `${element.y}%` }}
          animate={{
            y: [0, -30, 0],
            rotate: [0, 360],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: element.duration,
            delay: element.delay,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        >
          <div className="w-16 h-16 bg-gradient-to-br from-orange-500/20 to-blue-500/20 backdrop-blur-xl rounded-2xl flex items-center justify-center border border-white/10 shadow-2xl">
            <element.icon className="w-8 h-8 text-orange-400" />
          </div>
        </motion.div>
      ))}

      {/* Main Content */}
      <motion.div 
        style={{ y: y1, opacity }}
        className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 lg:pt-32 pb-20"
      >
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: 'easeOut' }}
            className="space-y-8"
          >
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              whileHover={{ scale: 1.05 }}
              className="inline-flex items-center space-x-2 bg-gradient-to-r from-orange-500/20 to-pink-500/20 backdrop-blur-xl border border-orange-500/30 rounded-full px-6 py-3 shadow-lg"
            >
              <Sparkles className="w-5 h-5 text-orange-400" />
              <span className="text-orange-300 font-semibold text-sm lg:text-base">
                PM Surya Ghar Muft Bijli Yojana Partner
              </span>
            </motion.div>

            {/* Main Headline */}
            <div className="space-y-6">
              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.8 }}
                className="text-4xl sm:text-5xl lg:text-7xl font-black leading-tight"
              >
                <span className="text-white">Power Your Home</span>
                <br />
                <span className="bg-gradient-to-r from-orange-400 via-pink-500 to-purple-500 bg-clip-text text-transparent">
                  with Solar Energy
                </span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.8 }}
                className="text-lg lg:text-xl text-gray-300 leading-relaxed max-w-xl"
              >
                Get up to <span className="text-orange-400 font-bold">60% government subsidy</span> and save 
                <span className="text-green-400 font-bold"> ₹15,000-18,000 annually</span> on electricity bills. 
                Join 500+ satisfied customers in Kashmir.
              </motion.p>
            </div>

            {/* Feature List */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
              className="grid grid-cols-1 sm:grid-cols-2 gap-3"
            >
              {features.map((feature, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.8 + idx * 0.1 }}
                  whileHover={{ x: 5 }}
                  className="flex items-center space-x-2 text-gray-300"
                >
                  <CheckCircle2 className="w-5 h-5 text-green-400 flex-shrink-0" />
                  <span className="text-sm lg:text-base">{feature}</span>
                </motion.div>
              ))}
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9 }}
              className="flex flex-col sm:flex-row gap-4 pt-4"
            >
              <motion.button
                whileHover={{ scale: 1.05, boxShadow: '0 20px 40px rgba(249, 115, 22, 0.4)' }}
                whileTap={{ scale: 0.95 }}
                className="group relative px-8 py-4 bg-gradient-to-r from-orange-500 via-orange-600 to-orange-500 rounded-2xl font-bold text-white text-lg shadow-2xl overflow-hidden"
              >
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-orange-400 to-pink-500"
                  initial={{ x: '-100%' }}
                  whileHover={{ x: '100%' }}
                  transition={{ duration: 0.5 }}
                />
                <span className="relative flex items-center justify-center space-x-2">
                  <span>Get Free Quote</span>
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </span>
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="group px-8 py-4 bg-white/10 backdrop-blur-xl border-2 border-white/20 hover:border-orange-500/50 rounded-2xl font-bold text-white text-lg shadow-xl transition-all"
              >
                <span className="flex items-center justify-center space-x-2">
                  <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center group-hover:bg-orange-500/30 transition-colors">
                    <Play className="w-5 h-5 ml-0.5" />
                  </div>
                  <span>Watch Demo</span>
                </span>
              </motion.button>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.1 }}
              className="grid grid-cols-3 gap-4 pt-8"
            >
              {stats.map((stat, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 1.2 + idx * 0.1 }}
                  whileHover={{ y: -5, scale: 1.05 }}
                  className="relative group"
                >
                  <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-4 text-center hover:border-orange-500/30 transition-all">
                    <div className={`w-12 h-12 mx-auto mb-2 bg-gradient-to-br ${stat.color} rounded-xl flex items-center justify-center shadow-lg`}>
                      <stat.icon className="w-6 h-6 text-white" />
                    </div>
                    <div className="text-2xl lg:text-3xl font-black text-white mb-1">
                      {stat.value}
                    </div>
                    <div className="text-xs lg:text-sm text-gray-400">
                      {stat.label}
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right Visual */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
            style={{ y: y2 }}
            className="relative hidden lg:block"
          >
            {/* 3D Solar Panel Mockup */}
            <motion.div
              style={{
                rotateY: mousePosition.x,
                rotateX: mousePosition.y,
              }}
              transition={{ type: 'spring', stiffness: 50 }}
              className="relative perspective-1000"
            >
              {/* Main Panel */}
              <motion.div
                animate={{
                  y: [0, -20, 0],
                }}
                transition={{
                  duration: 6,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }}
                className="relative"
              >
                {/* Glow Effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-orange-500/50 to-blue-500/50 rounded-3xl blur-3xl" />
                
                {/* Panel Container */}
                <div className="relative bg-gradient-to-br from-slate-800/80 to-slate-900/80 backdrop-blur-2xl border border-white/20 rounded-3xl p-8 shadow-2xl">
                  {/* Solar Panel Grid */}
                  <div className="grid grid-cols-6 gap-2 mb-6">
                    {[...Array(24)].map((_, idx) => (
                      <motion.div
                        key={idx}
                        initial={{ opacity: 0, scale: 0 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{
                          delay: 1.5 + idx * 0.02,
                          duration: 0.3,
                        }}
                        className="aspect-square bg-gradient-to-br from-blue-600 to-blue-800 rounded-lg border border-blue-400/30 shadow-lg"
                      >
                        <motion.div
                          animate={{
                            opacity: [0.3, 0.8, 0.3],
                          }}
                          transition={{
                            duration: 2,
                            delay: idx * 0.1,
                            repeat: Infinity,
                            ease: 'easeInOut',
                          }}
                          className="w-full h-full bg-gradient-to-br from-cyan-400/50 to-transparent rounded-lg"
                        />
                      </motion.div>
                    ))}
                  </div>

                  {/* Info Display */}
                  <div className="space-y-4 bg-black/30 rounded-2xl p-6 border border-white/10">
                    <div className="flex items-center justify-between">
                      <span className="text-gray-400 text-sm">Power Output</span>
                      <motion.span
                        animate={{ opacity: [1, 0.5, 1] }}
                        transition={{ duration: 2, repeat: Infinity }}
                        className="text-green-400 font-bold text-lg"
                      >
                        3.5 kW
                      </motion.span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-gray-400 text-sm">Efficiency</span>
                      <span className="text-orange-400 font-bold text-lg">98.5%</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-gray-400 text-sm">System Status</span>
                      <div className="flex items-center space-x-2">
                        <motion.div
                          animate={{ scale: [1, 1.2, 1] }}
                          transition={{ duration: 1, repeat: Infinity }}
                          className="w-2 h-2 bg-green-400 rounded-full"
                        />
                        <span className="text-green-400 font-bold text-sm">Active</span>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Orbiting Elements */}
              {[0, 1, 2].map((idx) => (
                <motion.div
                  key={idx}
                  className="absolute"
                  animate={{
                    rotate: 360,
                  }}
                  transition={{
                    duration: 10 + idx * 3,
                    repeat: Infinity,
                    ease: 'linear',
                  }}
                  style={{
                    top: '50%',
                    left: '50%',
                    marginLeft: '-20px',
                    marginTop: '-20px',
                  }}
                >
                  <motion.div
                    animate={{
                      y: [0, -100 - idx * 30, 0],
                      scale: [1, 1.2, 1],
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      ease: 'easeInOut',
                    }}
                    className="w-10 h-10 bg-gradient-to-br from-orange-400 to-pink-500 rounded-xl flex items-center justify-center shadow-2xl"
                  >
                    <Zap className="w-6 h-6 text-white" />
                  </motion.div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </motion.div>

      {/* Bottom Gradient Fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-slate-950 to-transparent" />
    </div>
  );
};

export default Hero;