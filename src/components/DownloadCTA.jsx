import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Heart } from 'lucide-react';

export const DownloadCTA = () => {
  return (
    <section id="download" className="relative w-full py-32 px-6 bg-[#1A100B] text-white overflow-hidden select-none">
      
      {/* Radiant Conic Rotating Background Rays */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[900px] pointer-events-none opacity-20 animate-rotate-slow">
        <div className="w-full h-full rounded-full bg-[conic-gradient(from_0deg,#FFD34D,transparent_30deg,#E8641D,transparent_60deg,#FFD34D,transparent_90deg)]" />
      </div>

      {/* Radial Soft Dark Vignette Overlay */}
      <div className="absolute inset-0 bg-radial-gradient from-transparent via-[#1A100B]/60 to-[#1A100B] pointer-events-none" />

      <div className="max-w-4xl mx-auto relative z-10 text-center flex flex-col items-center">
        
        {/* Giant Glowing Om (Climax visual moment) */}
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="relative mb-8 cursor-pointer"
        >
          <div className="w-32 h-32 sm:w-40 sm:h-40 rounded-full border-2 border-[#FFD34D] bg-[#2B1B12] flex items-center justify-center text-[#FFD34D] font-devanagari text-7xl sm:text-8xl animate-halo-pulse shadow-[0_0_80px_rgba(255,211,77,0.7)]">
            ॐ
          </div>
          <div className="absolute -inset-6 rounded-full border border-[#E8641D]/40 animate-ping pointer-events-none opacity-50" />
        </motion.div>

        {/* Devanagari Mantra */}
        <motion.h3
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="font-devanagari text-3xl sm:text-5xl text-[#FFD34D] tracking-widest mb-4 drop-shadow-[0_0_20px_rgba(255,211,77,0.6)]"
        >
          ।। जय श्री राम ।।
        </motion.h3>

        {/* Title */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="font-serif-title text-4xl sm:text-6xl font-bold tracking-tight text-white mb-6"
        >
          Begin Your <span className="gold-gradient-text">Divine Sadhana Today</span>
        </motion.h2>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-base sm:text-xl text-white/80 font-light max-w-2xl mb-10 leading-relaxed"
        >
          Download the app now and connect with authentic Pandits, fresh pooja supplies, Gita insights, and daily mantra reminders.
        </motion.p>

        {/* Big Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-5 w-full max-w-md"
        >
          {/* Google Play Button */}
          <a
            href="https://play.google.com/store/apps/details?id=com.rohan2342.MitSadhana"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto px-8 py-4 rounded-full gold-primary-button flex items-center justify-center space-x-3 text-base tracking-wide shadow-[0_0_30px_rgba(232,100,29,0.5)]"
          >
            <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
              <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.6 3,21.09 3,20.5M16.81,15.12L18.81,13.97C20.39,13.06 20.39,10.94 18.81,10.03L16.81,8.88L14.81,10.88L14.81,13.12L16.81,15.12M4.55,1.27L14.28,11.01L12.28,13.01L4.55,5.28C4.7,4.35 4.55,1.27 4.55,1.27Z" />
            </svg>
            <span>Google Play Store</span>
          </a>

          {/* App Store Button */}
          <a
            href="#"
            className="w-full sm:w-auto px-8 py-4 rounded-full glass-button flex items-center justify-center space-x-3 text-base tracking-wide border-[#FFD34D]/60"
          >
            <svg className="w-6 h-6 fill-current text-white" viewBox="0 0 24 24">
              <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M15.97 6.85c.63-.77 1.06-1.83.94-2.89-.91.04-2.02.61-2.67 1.37-.58.67-1.09 1.76-.95 2.8.91.07 1.95-.51 2.68-1.28z"/>
            </svg>
            <span>Apple App Store</span>
          </a>
        </motion.div>

      </div>
    </section>
  );
};

export const Footer = () => {
  return (
    <footer className="relative w-full py-12 px-6 bg-[#120B07] text-white/60 border-t border-white/10 select-none">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
        
        {/* Brand */}
        <div className="flex items-center space-x-3">
          <div className="w-8 h-8 rounded-full border border-[#FFD34D]/40 bg-black/40 flex items-center justify-center text-[#FFD34D] font-devanagari text-base">
            ॐ
          </div>
          <span className="font-serif-title text-xl font-bold text-white tracking-wider">
            Mits Sadhana
          </span>
        </div>

        {/* Devanagari Footer Center */}
        <p className="font-devanagari text-lg text-[#FFD34D] tracking-widest">
          ।। जय श्री राम ।।
        </p>

        {/* Copyright */}
        <p className="text-xs text-white/50">
          © {new Date().getFullYear()} Mits Sadhana. All Divine Rights Reserved.
        </p>

      </div>
    </footer>
  );
};
