import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sun, X, Home, Info, Calculator, Wrench, Phone, FileText, LogIn, Gift, Sparkles } from 'lucide-react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home', icon: Home, color: 'from-orange-500 to-red-500' },
    { name: 'About', href: '#about', icon: Info, color: 'from-blue-500 to-cyan-500' },
    { name: 'PM Surya Ghar', href: '#scheme', icon: Sun, color: 'from-yellow-500 to-orange-500' },
    { name: 'Calculator', href: '#calculator', icon: Calculator, color: 'from-green-500 to-emerald-500' },
    { name: 'Services', href: '#services', icon: Wrench, color: 'from-purple-500 to-pink-500' },
    { name: 'Contact', href: '#contact', icon: Phone, color: 'from-red-500 to-pink-500' },
  ];

  return (
    <>
      {/* Spacer for both TopBar + Navbar */}
      <div className="h-[118px] md:h-28" />

      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className="fixed left-0 right-0 z-40 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 shadow-2xl border-b border-orange-500/20"
        style={{
          top: '56px',
          backdropFilter: 'blur(20px)',
          backgroundColor: 'rgba(15, 23, 42, 0.98)'
        }}
      >
        <div className="max-w-7xl mx-auto px-3 sm:px-4 lg:px-8">
          <div className="flex justify-between items-center h-14 lg:h-16">
            
            {/* Logo */}
            <motion.a
              href="#home"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center space-x-2 cursor-pointer group"
            >
              <motion.div
                className="relative"
                animate={{ 
                  rotate: [0, 3, -3, 0],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: 'easeInOut'
                }}
              >
                <motion.div
                  className="absolute inset-0 bg-gradient-to-br from-orange-500/40 to-yellow-500/40 rounded-lg blur-md"
                  animate={{
                    scale: [1, 1.2, 1],
                    opacity: [0.5, 0.8, 0.5]
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                  }}
                />
                <img 
                  src="/src/assets/logo.jpeg"
                  alt="Kashmir Solar Logo" 
                  className="relative h-9 w-9 lg:h-11 lg:w-11 object-contain rounded-lg shadow-xl group-hover:shadow-orange-500/50 transition-shadow border border-orange-500/30"
                />
              </motion.div>

              <div className="hidden sm:block">
                <h1 className="text-sm lg:text-base font-bold text-white leading-tight">
                  Kashmir Solar
                </h1>
                <p className="text-[10px] lg:text-xs text-orange-400 font-medium flex items-center gap-1">
                  <Sun className="w-2.5 h-2.5 lg:w-3 lg:h-3 text-orange-400" />
                  PM Surya Ghar
                </p>
              </div>
            </motion.a>

            {/* Desktop Menu */}
            <div className="hidden lg:flex items-center space-x-1">
              {navLinks.map((link, idx) => (
                <motion.a
                  key={link.name}
                  href={link.href}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 + idx * 0.08 }}
                  whileHover={{ y: -2, scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-2.5 py-2 rounded-lg font-semibold text-gray-200 hover:text-white hover:bg-white/15 transition-all text-sm"
                >
                  {link.name}
                </motion.a>
              ))}
              
              {/* Refer & Earn */}
              <motion.a
                href="#refer"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.9 }}
                whileHover={{ scale: 1.08 }}
                whileTap={{ scale: 0.95 }}
                className="relative group ml-1"
              >
                <motion.div 
                  className="absolute inset-0 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full blur-md"
                  animate={{
                    opacity: [0.6, 1, 0.6],
                    scale: [1, 1.1, 1]
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                  }}
                />
                <div className="relative bg-gradient-to-r from-yellow-400 via-orange-500 to-pink-500 text-white px-4 py-2 rounded-full font-bold shadow-lg flex items-center space-x-1.5 text-sm">
                  <Gift className="w-4 h-4" />
                  <span>Refer & Earn</span>
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 2, repeat: Infinity, ease: 'linear' }}
                  >
                    <Sparkles className="w-4 h-4" />
                  </motion.div>
                </div>
              </motion.a>

              {/* Admin Login */}
              <motion.button
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1 }}
                whileHover={{ scale: 1.08 }}
                whileTap={{ scale: 0.95 }}
                className="ml-1 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-4 py-2 rounded-full font-bold shadow-lg shadow-blue-500/50 hover:shadow-blue-500/70 transition-all flex items-center space-x-1.5 text-sm"
              >
                <LogIn className="w-4 h-4" />
                <span>Admin</span>
              </motion.button>
            </div>

            {/* Mobile Buttons */}
            <div className="lg:hidden flex items-center space-x-2">
              {/* Refer & Earn Icon */}
              <motion.a
                href="#refer"
                whileTap={{ scale: 0.9 }}
                className="relative"
              >
                <motion.div 
                  className="absolute inset-0 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full blur-md"
                  animate={{
                    opacity: [0.6, 1, 0.6],
                    scale: [1, 1.2, 1]
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                  }}
                />
                <div className="relative bg-gradient-to-r from-yellow-400 to-orange-500 text-white p-2.5 rounded-full shadow-lg">
                  <Gift className="w-4 h-4" />
                </div>
              </motion.a>

              {/* Hamburger */}
              <motion.button
                whileTap={{ scale: 0.9 }}
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="relative w-10 h-10 flex items-center justify-center bg-white/10 backdrop-blur-sm rounded-lg border border-white/30 hover:border-orange-500/50 transition-colors"
              >
                <div className="relative w-5 h-5">
                  <motion.span
                    animate={isMobileMenuOpen ? { rotate: 45, y: 6 } : { rotate: 0, y: 0 }}
                    className={`absolute w-5 h-0.5 rounded-full left-0 top-0.5 ${
                      isMobileMenuOpen ? 'bg-orange-400' : 'bg-white'
                    }`}
                  />
                  <motion.span
                    animate={isMobileMenuOpen ? { opacity: 0 } : { opacity: 1 }}
                    className="absolute w-5 h-0.5 rounded-full left-0 top-1/2 -translate-y-1/2 bg-white"
                  />
                  <motion.span
                    animate={isMobileMenuOpen ? { rotate: -45, y: -6 } : { rotate: 0, y: 0 }}
                    className={`absolute w-5 h-0.5 rounded-full left-0 bottom-0.5 ${
                      isMobileMenuOpen ? 'bg-orange-400' : 'bg-white'
                    }`}
                  />
                </div>
              </motion.button>
            </div>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="fixed inset-0 bg-black/80 backdrop-blur-md z-[35] lg:hidden"
              onClick={() => setIsMobileMenuOpen(false)}
            />

            {/* Menu Panel */}
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="fixed top-[118px] right-0 bottom-0 w-full sm:w-80 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 z-[36] lg:hidden overflow-y-auto"
            >
              {/* Header */}
              <div className="relative bg-gradient-to-r from-orange-500 to-pink-500 p-4">
                <motion.button
                  onClick={() => setIsMobileMenuOpen(false)}
                  whileHover={{ rotate: 90, scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className="absolute top-4 right-4 w-9 h-9 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center"
                >
                  <X className="w-5 h-5 text-white" />
                </motion.button>
                
                <div className="flex items-center space-x-2.5 pr-11">
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
                  >
                    <img 
                      src="/src/assets/logo.jpeg"
                      alt="Logo" 
                      className="h-11 w-11 object-contain rounded-lg shadow-lg"
                    />
                  </motion.div>
                  <div>
                    <h2 className="text-base font-bold text-white">Kashmir Solar</h2>
                    <p className="text-xs text-white/90">Your Solar Partner</p>
                  </div>
                </div>
              </div>

              {/* Buttons */}
              <div className="p-4 space-y-2.5 bg-slate-950/50">
                <motion.a
                  href="#refer"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="relative group block"
                >
                  <motion.div 
                    className="absolute inset-0 bg-gradient-to-r from-yellow-400 via-orange-500 to-pink-500 rounded-xl blur-md"
                    animate={{
                      opacity: [0.6, 1, 0.6],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                    }}
                  />
                  <div className="relative bg-gradient-to-r from-yellow-400 via-orange-500 to-pink-500 text-white py-3.5 rounded-xl font-bold shadow-xl flex items-center justify-center space-x-2">
                    <Gift className="w-5 h-5" />
                    <span>Refer & Earn Rewards</span>
                    <motion.div
                      animate={{ rotate: 360, scale: [1, 1.2, 1] }}
                      transition={{ duration: 2, repeat: Infinity }}
                    >
                      <Sparkles className="w-4 h-4" />
                    </motion.div>
                  </div>
                </motion.a>

                <motion.button
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 }}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-3.5 rounded-xl font-bold shadow-xl shadow-blue-500/50 flex items-center justify-center space-x-2"
                >
                  <LogIn className="w-5 h-5" />
                  <span>Admin Login</span>
                </motion.button>
              </div>

              {/* Menu Items */}
              <div className="p-4 space-y-2.5">
                {navLinks.map((link, idx) => (
                  <motion.a
                    key={link.name}
                    href={link.href}
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.2 + idx * 0.06 }}
                    whileHover={{ x: 5, scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="flex items-center space-x-3 p-3.5 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/20 transition-all"
                  >
                    <motion.div
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.6 }}
                      className={`w-11 h-11 rounded-lg bg-gradient-to-br ${link.color} flex items-center justify-center shadow-lg flex-shrink-0`}
                    >
                      <link.icon className="w-5 h-5 text-white" />
                    </motion.div>
                    <div className="flex-1">
                      <p className="font-bold text-white text-sm">{link.name}</p>
                      <p className="text-xs text-gray-400">Explore {link.name.toLowerCase()}</p>
                    </div>
                    <span className="text-gray-400">→</span>
                  </motion.a>
                ))}
              </div>

              {/* CTA */}
              <div className="p-4">
                <motion.button
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full bg-gradient-to-r from-orange-500 to-pink-500 text-white py-3.5 rounded-xl font-bold shadow-xl shadow-orange-500/50 flex items-center justify-center space-x-2"
                >
                  <FileText className="w-5 h-5" />
                  <span>Get Free Quote</span>
                </motion.button>
              </div>

              {/* Footer */}
              <div className="p-4 border-t border-white/10">
                <p className="text-center text-xs text-gray-400">PM Surya Ghar Muft Bijli Yojana</p>
                <p className="text-center text-xs text-gray-500 mt-1">Authorized Partner</p>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;