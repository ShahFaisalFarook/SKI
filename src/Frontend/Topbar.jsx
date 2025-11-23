import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Phone, Mail, MapPin, Facebook, Instagram, Twitter, Linkedin, Youtube, ChevronDown, X, ExternalLink } from 'lucide-react';

const TopBar = () => {
  const [isSocialDropdownOpen, setIsSocialDropdownOpen] = useState(false);

  // Contact Information
  const contactInfo = {
    phone: '+91 9596154535',
    email: 'info@kashmirsolar.in',
    address: 'Anantnag, Jammu & Kashmir',
    googleMapsUrl: 'https://www.google.com/maps/place/Anantnag,+Jammu+and+Kashmir'
  };

  // Social Media Links
  const socialLinks = [
    { name: 'Facebook', icon: Facebook, url: 'https://facebook.com', color: '#1877F2', bgGradient: 'from-blue-500 to-blue-600' },
    { name: 'Instagram', icon: Instagram, url: 'https://instagram.com', color: '#E4405F', bgGradient: 'from-pink-500 to-purple-600' },
    { name: 'Twitter', icon: Twitter, url: 'https://twitter.com', color: '#1DA1F2', bgGradient: 'from-sky-400 to-blue-500' },
    { name: 'LinkedIn', icon: Linkedin, url: 'https://linkedin.com', color: '#0A66C2', bgGradient: 'from-blue-600 to-blue-700' },
    { name: 'YouTube', icon: Youtube, url: 'https://youtube.com', color: '#FF0000', bgGradient: 'from-red-500 to-red-600' },
  ];

  return (
    <div className="relative z-50">
      {/* Main Top Bar - Fixed at very top */}
      <motion.div
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        className="fixed top-0 left-0 right-0 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-white overflow-hidden shadow-2xl z-50"
      >
        {/* Animated Mesh Background */}
        <div className="absolute inset-0 opacity-5">
          <motion.div
            animate={{
              backgroundPosition: ['0% 0%', '100% 100%'],
            }}
            transition={{
              duration: 25,
              repeat: Infinity,
              repeatType: 'reverse',
              ease: 'linear',
            }}
            className="absolute inset-0"
            style={{
              backgroundImage: 'radial-gradient(circle at 20% 50%, #f97316 1px, transparent 1px), radial-gradient(circle at 80% 80%, #3b82f6 1px, transparent 1px)',
              backgroundSize: '60px 60px, 80px 80px',
            }}
          />
        </div>

        {/* Glowing Top Border */}
        <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-orange-500 to-transparent opacity-50" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Desktop Layout */}
          <div className="hidden md:flex items-center justify-between h-14">
            
            {/* Left - Contact Info */}
            <motion.div 
              className="flex items-center space-x-6"
              initial={{ x: -50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.6 }}
            >
              {/* Phone */}
              <motion.a
                href={`tel:${contactInfo.phone}`}
                className="flex items-center space-x-2 group"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <motion.div
                  whileHover={{ rotate: 15, scale: 1.1 }}
                  className="bg-gradient-to-br from-orange-500 to-orange-600 p-2 rounded-xl shadow-lg group-hover:shadow-orange-500/50 transition-all"
                >
                  <Phone className="w-3.5 h-3.5" />
                </motion.div>
                <span className="text-sm font-medium group-hover:text-orange-400 transition-colors">
                  {contactInfo.phone}
                </span>
              </motion.a>

              {/* Email */}
              <motion.a
                href={`mailto:${contactInfo.email}`}
                className="flex items-center space-x-2 group"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <motion.div
                  whileHover={{ rotate: 15, scale: 1.1 }}
                  className="bg-gradient-to-br from-blue-500 to-blue-600 p-2 rounded-xl shadow-lg group-hover:shadow-blue-500/50 transition-all"
                >
                  <Mail className="w-3.5 h-3.5" />
                </motion.div>
                <span className="text-sm font-medium group-hover:text-blue-400 transition-colors">
                  {contactInfo.email}
                </span>
              </motion.a>

              {/* Address */}
              <motion.a
                href={contactInfo.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-2 group"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <motion.div
                  whileHover={{ rotate: 15, scale: 1.1 }}
                  className="bg-gradient-to-br from-green-500 to-green-600 p-2 rounded-xl shadow-lg group-hover:shadow-green-500/50 transition-all"
                >
                  <MapPin className="w-3.5 h-3.5" />
                </motion.div>
                <span className="text-sm font-medium group-hover:text-green-400 transition-colors">
                  {contactInfo.address}
                </span>
              </motion.a>
            </motion.div>

            {/* Right - Social Media */}
            <motion.div
              initial={{ x: 50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="flex items-center space-x-3"
            >
              <span className="text-xs text-gray-400 font-medium">Follow Us:</span>
              {socialLinks.map((social, index) => (
                <motion.a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 + index * 0.08 }}
                  whileHover={{ y: -5, scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className="relative group"
                >
                  <motion.div
                    className="w-8 h-8 rounded-lg bg-white/10 backdrop-blur-md flex items-center justify-center border border-white/20 hover:border-white/40 transition-all"
                    whileHover={{
                      boxShadow: `0 8px 20px ${social.color}60`,
                      backgroundColor: `${social.color}20`,
                    }}
                  >
                    <social.icon className="w-4 h-4" style={{ color: social.color }} />
                  </motion.div>
                </motion.a>
              ))}
            </motion.div>
          </div>

          {/* Mobile Layout */}
          <div className="md:hidden py-2.5 space-y-2.5">
            {/* Contact Row */}
            <motion.div
              className="flex items-center justify-between"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              {/* Phone */}
              <motion.a
                href={`tel:${contactInfo.phone}`}
                className="flex items-center space-x-2 group flex-1"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <motion.div
                  whileHover={{ rotate: 15 }}
                  className="bg-gradient-to-br from-orange-500 to-orange-600 p-1.5 rounded-lg shadow-lg"
                >
                  <Phone className="w-3.5 h-3.5" />
                </motion.div>
                <span className="text-xs font-medium">{contactInfo.phone}</span>
              </motion.a>

              {/* Email */}
              <motion.a
                href={`mailto:${contactInfo.email}`}
                className="flex items-center space-x-2 group flex-1"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <motion.div
                  whileHover={{ rotate: 15 }}
                  className="bg-gradient-to-br from-blue-500 to-blue-600 p-1.5 rounded-lg shadow-lg"
                >
                  <Mail className="w-3.5 h-3.5" />
                </motion.div>
                <span className="text-xs font-medium truncate">{contactInfo.email}</span>
              </motion.a>
            </motion.div>

            {/* Social Media Button */}
            <motion.button
              onClick={() => setIsSocialDropdownOpen(!isSocialDropdownOpen)}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="w-full bg-gradient-to-r from-orange-500 via-orange-600 to-orange-500 hover:from-orange-600 hover:via-orange-700 hover:to-orange-600 px-3 py-2 rounded-lg shadow-lg hover:shadow-orange-500/50 transition-all flex items-center justify-between group"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <div className="flex items-center space-x-2">
                <div className="flex -space-x-1.5">
                  {socialLinks.slice(0, 3).map((social, idx) => (
                    <div
                      key={idx}
                      className="w-6 h-6 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center border-2 border-orange-600"
                    >
                      <social.icon className="w-3 h-3" />
                    </div>
                  ))}
                </div>
                <span className="text-xs font-bold">Social Media & Location</span>
              </div>
              <motion.div
                animate={{ rotate: isSocialDropdownOpen ? 180 : 0 }}
                transition={{ duration: 0.3 }}
              >
                <ChevronDown className="w-4 h-4" />
              </motion.div>
            </motion.button>
          </div>
        </div>

        {/* Glowing Bottom Border */}
        <motion.div
          className="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-orange-500 to-transparent"
          initial={{ scaleX: 0, opacity: 0 }}
          animate={{ scaleX: 1, opacity: 0.7 }}
          transition={{ delay: 0.8, duration: 1.2 }}
        />
      </motion.div>

      {/* Mobile Dropdown Menu */}
      <AnimatePresence>
        {isSocialDropdownOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40"
              onClick={() => setIsSocialDropdownOpen(false)}
            />

            {/* Dropdown Panel */}
            <motion.div
              initial={{ opacity: 0, y: -30, scale: 0.9 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -30, scale: 0.9 }}
              transition={{ type: 'spring', damping: 25, stiffness: 300 }}
              className="fixed top-20 left-4 right-4 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 rounded-3xl shadow-2xl border border-white/10 overflow-hidden z-50 max-w-md mx-auto"
            >
              {/* Header */}
              <div className="relative bg-gradient-to-r from-orange-500 to-orange-600 p-5">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-lg font-bold text-white">Connect With Us</h3>
                    <p className="text-sm text-orange-100">Follow & Find Us</p>
                  </div>
                  <motion.button
                    onClick={() => setIsSocialDropdownOpen(false)}
                    className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center hover:bg-white/30 transition-colors"
                    whileHover={{ rotate: 90, scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <X className="w-5 h-5 text-white" />
                  </motion.button>
                </div>
                <div className="absolute -bottom-1 left-0 right-0 h-2 bg-gradient-to-b from-orange-600/50 to-transparent" />
              </div>

              {/* Content */}
              <div className="p-5 space-y-4">
                {/* Google Maps */}
                <motion.a
                  href={contactInfo.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-4 p-4 rounded-2xl bg-gradient-to-br from-green-500/20 to-green-600/20 border border-green-500/30 hover:border-green-500/50 transition-all group"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.1 }}
                  whileHover={{ x: 5, scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => setIsSocialDropdownOpen(false)}
                >
                  <motion.div
                    className="w-14 h-14 rounded-xl bg-gradient-to-br from-green-500 to-green-600 flex items-center justify-center shadow-lg"
                    whileHover={{ rotate: 5, scale: 1.1 }}
                  >
                    <MapPin className="w-7 h-7 text-white" />
                  </motion.div>
                  <div className="flex-1">
                    <p className="text-sm font-bold text-white mb-0.5">Find Us On Map</p>
                    <p className="text-xs text-gray-400">{contactInfo.address}</p>
                  </div>
                  <ExternalLink className="w-5 h-5 text-green-400 group-hover:text-green-300 transition-colors" />
                </motion.a>

                {/* Social Media Grid */}
                <div className="space-y-2">
                  <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider px-1">Social Media</p>
                  <div className="grid grid-cols-2 gap-3">
                    {socialLinks.map((social, index) => (
                      <motion.a
                        key={social.name}
                        href={social.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center space-x-3 p-3 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/20 transition-all group"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 + index * 0.05 }}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={() => setIsSocialDropdownOpen(false)}
                      >
                        <motion.div
                          className={`w-11 h-11 rounded-lg bg-gradient-to-br ${social.bgGradient} flex items-center justify-center shadow-md`}
                          whileHover={{ rotate: 10, scale: 1.1 }}
                        >
                          <social.icon className="w-6 h-6 text-white" />
                        </motion.div>
                        <div className="flex-1 min-w-0">
                          <p className="text-sm font-semibold text-white truncate">{social.name}</p>
                          <p className="text-xs text-gray-400">Follow</p>
                        </div>
                      </motion.a>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
};

export default TopBar;
// Final Edit