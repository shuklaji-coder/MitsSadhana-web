import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Calendar, Flower2, Bot, BookOpenCheck } from 'lucide-react';

export const Features = () => {
  const featuresList = [
    {
      id: 'pandit',
      title: 'On-Demand Pandit Booking',
      subtitle: 'Verified Vedic Priests',
      description: 'Book authentic, certified Pandits for Griha Pravesh, Satyanarayan Katha, or custom Havans at your doorstep or via live 4K stream.',
      icon: (
        <div className="relative w-14 h-14 rounded-2xl bg-gradient-to-br from-[#E8641D]/20 to-[#FFD34D]/10 border border-[#FFD34D]/30 flex items-center justify-center text-[#FFD34D] shadow-[0_0_20px_rgba(232,100,29,0.2)]">
          <Calendar className="w-7 h-7 transform group-hover:scale-110 transition-transform duration-300" />
          <div className="absolute top-1 right-1 w-2.5 h-2.5 rounded-full bg-[#FFD34D] animate-ping" />
        </div>
      ),
      tag: 'Rituals & Havans',
      badgeColor: 'border-[#E8641D]/30 text-[#FFD34D]'
    },
    {
      id: 'samagri',
      title: 'Daily Pooja Samagri',
      subtitle: 'Pure Organic Subscriptions',
      description: 'Handpicked fresh Gangajal, brass diyas, organic camphor, and fragrant flowers delivered daily at dawn before your morning sadhana.',
      icon: (
        <div className="relative w-14 h-14 rounded-2xl bg-gradient-to-br from-[#E8641D]/20 to-[#FFD34D]/10 border border-[#FFD34D]/30 flex items-center justify-center text-[#FFD34D] shadow-[0_0_20px_rgba(232,100,29,0.2)]">
          <Flower2 className="w-7 h-7 animate-spin-slow group-hover:rotate-45 transition-transform duration-500" />
        </div>
      ),
      tag: 'Fresh Delivery',
      badgeColor: 'border-[#FFD34D]/40 text-[#FFD34D]'
    },
    {
      id: 'aiguru',
      title: 'AI Spiritual Mentor',
      subtitle: '24/7 Sanatana Guidance',
      description: 'Ask deep questions on Shastras, Bhagavad Gita verses, horoscope insights, or personalized daily mantra recommendations powered by AI.',
      icon: (
        <div className="relative w-14 h-14 rounded-2xl bg-gradient-to-br from-[#E8641D]/20 to-[#FFD34D]/10 border border-[#FFD34D]/30 flex items-center justify-center text-[#FFD34D] shadow-[0_0_20px_rgba(232,100,29,0.2)]">
          <Bot className="w-7 h-7 animate-pulse group-hover:scale-110 transition-transform duration-300" />
        </div>
      ),
      tag: 'Smart Mentor',
      badgeColor: 'border-[#E8641D]/40 text-[#FFB74D]'
    },
    {
      id: 'gita',
      title: 'Daily Gita & Mantra Timer',
      subtitle: 'Track Your Spiritual Progress',
      description: 'Interactive Japamala counter, audio chants with synced lyrics, and verse-by-verse Bhagavad Gita audiobooks for inner peace.',
      icon: (
        <div className="relative w-14 h-14 rounded-2xl bg-gradient-to-br from-[#E8641D]/20 to-[#FFD34D]/10 border border-[#FFD34D]/30 flex items-center justify-center text-[#FFD34D] shadow-[0_0_20px_rgba(232,100,29,0.2)]">
          <BookOpenCheck className="w-7 h-7 group-hover:translate-y-[-2px] transition-transform duration-300" />
        </div>
      ),
      tag: 'Sadhana Tracker',
      badgeColor: 'border-[#FFD34D]/30 text-[#FFD34D]'
    }
  ];

  return (
    <section id="features" className="relative w-full py-28 px-6 bg-gradient-to-b from-[#1A100B] via-[#2B1B12] to-[#1A100B] text-white overflow-hidden select-none">
      
      {/* Background Subtle Ambient Glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-[#E8641D]/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full bg-[#FFD34D]/10 border border-[#FFD34D]/30 text-[#FFD34D] text-xs font-semibold uppercase tracking-widest mb-4"
          >
            <Sparkles className="w-3.5 h-3.5" />
            <span>Divine Features</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="font-serif-title text-4xl sm:text-5xl font-bold tracking-tight text-white mb-6"
          >
            Empowering Your <span className="gold-gradient-text">Devotional Journey</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-base sm:text-lg text-white/70 font-light"
          >
            Designed with reverence to make authentic Vedic rituals, pooja supplies, and spiritual wisdom accessible anywhere in the world.
          </motion.p>
        </div>

        {/* 4 Feature Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {featuresList.map((feature, index) => (
            <motion.div
              key={feature.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: index * 0.15 }}
              className="group glass-card p-8 flex flex-col justify-between relative overflow-hidden"
            >
              {/* Subtle card glow accent line at top */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#FFD34D]/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              <div>
                {/* Header Tag & Icon */}
                <div className="flex items-center justify-between mb-8">
                  {feature.icon}
                  <span className={`text-[10px] font-semibold uppercase tracking-widest px-3 py-1 rounded-full border bg-black/30 backdrop-blur-sm ${feature.badgeColor}`}>
                    {feature.tag}
                  </span>
                </div>

                {/* Subtitle */}
                <p className="text-xs uppercase tracking-widest font-semibold text-[#FFB74D]/80 mb-2">
                  {feature.subtitle}
                </p>

                {/* Title */}
                <h3 className="font-serif-title text-2xl font-bold text-white mb-4 group-hover:text-[#FFD34D] transition-colors duration-300">
                  {feature.title}
                </h3>

                {/* Description */}
                <p className="text-sm text-white/70 font-normal leading-relaxed">
                  {feature.description}
                </p>
              </div>

              {/* Bottom Decorative Arrow Link */}
              <div className="mt-8 pt-4 border-t border-white/10 flex items-center justify-between text-xs text-[#FFD34D] font-semibold group-hover:text-white transition-colors">
                <span>Explore Feature</span>
                <span className="transform group-hover:translate-x-1.5 transition-transform duration-300">→</span>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};
