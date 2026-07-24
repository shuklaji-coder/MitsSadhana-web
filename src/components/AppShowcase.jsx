import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Sparkles, ShieldCheck, Flame, BookOpen, Heart, Clock } from 'lucide-react';

export const AppShowcase = () => {
  const [activeScreenIndex, setActiveScreenIndex] = useState(0);
  const [tilt, setTilt] = useState({ x: 0, y: 0 });

  const appScreens = [
    {
      title: 'Vedic Pandit Booking',
      subtitle: 'Verified & Certified',
      badge: 'Live Streaming & On-Site',
      color: 'from-[#E8641D] to-[#FF9E2C]',
      icon: <ShieldCheck className="w-5 h-5 text-[#FFD34D]" />,
      ui: (
        <div className="p-4 text-white flex flex-col h-full justify-between select-none">
          <div>
            <div className="flex justify-between items-center mb-4">
              <span className="font-devanagari text-xl text-[#FFD34D]">ॐ Mits Sadhana</span>
              <span className="text-[10px] bg-red-600/80 px-2 py-0.5 rounded-full font-bold uppercase tracking-wider animate-pulse">LIVE</span>
            </div>
            
            <div className="bg-black/40 backdrop-blur-md rounded-xl p-3 border border-[#FFD34D]/30 mb-3">
              <span className="text-[10px] text-[#FFD34D] uppercase tracking-wider font-semibold">Today's Sacred Muhurat</span>
              <h4 className="font-serif-title text-base font-bold text-white mt-0.5">Abhijit Muhurat: 11:45 AM</h4>
              <p className="text-[11px] text-white/70">Highly auspicious for launching new rituals</p>
            </div>

            <h5 className="text-xs font-semibold uppercase tracking-wider text-[#FFB74D] mb-2">Available Pandits</h5>
            
            <div className="space-y-2">
              {[
                { name: 'Pt. Ramesh Shastri', exp: '18 Yrs Exp', ritual: 'Satyanarayan & Havan', rating: '4.9 ★' },
                { name: 'Acharya Vidyanand', exp: '24 Yrs Exp', ritual: 'Vastu & Griha Pravesh', rating: '5.0 ★' }
              ].map((p, i) => (
                <div key={i} className="flex items-center justify-between p-2.5 rounded-lg bg-white/10 border border-white/10">
                  <div>
                    <p className="text-xs font-bold text-white">{p.name}</p>
                    <p className="text-[10px] text-white/60">{p.ritual} • {p.exp}</p>
                  </div>
                  <span className="text-[11px] font-bold text-[#FFD34D]">{p.rating}</span>
                </div>
              ))}
            </div>
          </div>

          <button className="w-full py-2.5 rounded-lg gold-primary-button text-xs font-bold text-black uppercase tracking-wider mt-3">
            Instant Pandit Booking
          </button>
        </div>
      )
    },
    {
      title: 'Daily Japamala & Mantras',
      subtitle: 'Synced Lyrics & Audio',
      badge: 'Interactive Counter',
      color: 'from-[#D4AF37] to-[#E8641D]',
      icon: <Flame className="w-5 h-5 text-[#FFD34D]" />,
      ui: (
        <div className="p-4 text-white flex flex-col h-full justify-between select-none">
          <div className="text-center">
            <span className="text-[10px] text-[#FFD34D] uppercase tracking-widest font-semibold">Daily Sadhana</span>
            <h4 className="font-serif-title text-lg font-bold text-white mb-4">Gayatri Mantra 108 Chant</h4>
            
            {/* Circular Counter */}
            <div className="w-32 h-32 mx-auto rounded-full border-4 border-[#FFD34D] bg-black/50 flex flex-col items-center justify-center shadow-[0_0_30px_rgba(255,211,77,0.3)] mb-4">
              <span className="text-3xl font-bold font-serif-title text-[#FFD34D]">72</span>
              <span className="text-[10px] text-white/60 tracking-widest uppercase">/ 108 Beads</span>
            </div>

            <p className="font-devanagari text-sm text-[#FFD34D] tracking-wide italic">
              "ॐ भूर्भुवः स्वः तत्सवितुर्वरेण्यं..."
            </p>
          </div>

          <div className="flex justify-center space-x-3 mt-4">
            <button className="flex-1 py-2 rounded-lg bg-[#E8641D] text-xs font-bold text-white">Pause Chant</button>
            <button className="flex-1 py-2 rounded-lg bg-white/10 border border-white/20 text-xs font-bold">Lyrics</button>
          </div>
        </div>
      )
    },
    {
      title: 'AI Spiritual Guru Chat',
      subtitle: 'Personalized Gita Wisdom',
      badge: '24/7 Sanatana Guidance',
      color: 'from-[#FF9E2C] to-[#2B1B12]',
      icon: <BookOpen className="w-5 h-5 text-[#FFD34D]" />,
      ui: (
        <div className="p-4 text-white flex flex-col h-full justify-between select-none">
          <div>
            <div className="flex items-center space-x-2 pb-3 border-b border-white/10 mb-3">
              <div className="w-7 h-7 rounded-full bg-[#FFD34D] text-black font-bold flex items-center justify-center text-xs">ॐ</div>
              <div>
                <p className="text-xs font-bold text-white">AI Guru Mentor</p>
                <p className="text-[9px] text-[#FFD34D]">Connected • Vedic Wisdom</p>
              </div>
            </div>

            <div className="space-y-3">
              <div className="p-2.5 rounded-lg bg-white/10 text-xs max-w-[85%]">
                How can I find peace of mind during stressful work days?
              </div>
              <div className="p-2.5 rounded-lg bg-[#E8641D]/30 border border-[#FFD34D]/30 text-xs ml-auto max-w-[90%] text-white">
                <span className="font-semibold text-[#FFD34D]">Gita Ch 2, V 47:</span> "Focus on your action without attachment to outcomes." Practicing 5 minutes of Pranayama in the morning helps maintain focus.
              </div>
            </div>
          </div>

          <div className="mt-3 relative">
            <input 
              type="text" 
              placeholder="Ask AI Guru anything..." 
              readOnly 
              className="w-full bg-black/40 border border-white/20 rounded-full px-3 py-1.5 text-xs text-white placeholder-white/40"
            />
          </div>
        </div>
      )
    }
  ];

  // Auto cycle screens every 4 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setActiveScreenIndex((prev) => (prev + 1) % appScreens.length);
    }, 4500);
    return () => clearInterval(timer);
  }, [appScreens.length]);

  // Parallax tilt effect handler
  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    setTilt({ x: y * -15, y: x * 15 });
  };

  const handleMouseLeave = () => {
    setTilt({ x: 0, y: 0 });
  };

  return (
    <section id="showcase" className="relative w-full py-28 px-6 bg-gradient-to-b from-[#1A100B] via-[#2B1B12] to-[#1A100B] text-white overflow-hidden select-none">
      
      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full bg-[#FFD34D]/10 border border-[#FFD34D]/30 text-[#FFD34D] text-xs font-semibold uppercase tracking-widest mb-4"
          >
            <Sparkles className="w-3.5 h-3.5" />
            <span>Mobile Sanctuary</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="font-serif-title text-4xl sm:text-5xl font-bold tracking-tight text-white mb-6"
          >
            Your Personal <span className="gold-gradient-text">Divine Sanctuary</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-base sm:text-lg text-white/70 font-light"
          >
            Experience seamless devotional living right at your fingertips with our intuitive iOS & Android app.
          </motion.p>
        </div>

        {/* 3D Phone Mockup Container */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column Controls */}
          <div className="lg:col-span-5 space-y-4">
            {appScreens.map((screen, idx) => (
              <div
                key={idx}
                onClick={() => setActiveScreenIndex(idx)}
                className={`p-6 rounded-2xl cursor-pointer transition-all duration-300 border ${
                  activeScreenIndex === idx
                    ? 'bg-[#2B1B12]/80 border-[#FFD34D] shadow-[0_0_30px_rgba(232,100,29,0.25)] translate-x-2'
                    : 'bg-black/20 border-white/10 hover:border-white/30'
                }`}
              >
                <div className="flex items-center space-x-4">
                  <div className={`p-3 rounded-xl bg-gradient-to-br ${screen.color}`}>
                    {screen.icon}
                  </div>
                  <div>
                    <span className="text-[10px] uppercase tracking-widest font-semibold text-[#FFD34D]">
                      {screen.badge}
                    </span>
                    <h4 className="font-serif-title text-xl font-bold text-white">
                      {screen.title}
                    </h4>
                    <p className="text-xs text-white/60 mt-0.5">
                      {screen.subtitle}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Right Column Interactive 3D Phone Frame */}
          <div 
            className="lg:col-span-7 flex justify-center items-center py-6 perspective-1000"
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
          >
            <motion.div
              style={{
                transform: `rotateX(${tilt.x}deg) rotateY(${tilt.y}deg)`,
                transformStyle: 'preserve-3d'
              }}
              transition={{ type: 'spring', stiffness: 200, damping: 20 }}
              className="relative w-[300px] sm:w-[320px] h-[610px] rounded-[48px] p-3 bg-gradient-to-b from-[#4A3528] via-[#1A100B] to-[#4A3528] border-4 border-[#FFD34D]/40 shadow-[0_25px_60px_rgba(0,0,0,0.8),0_0_50px_rgba(232,100,29,0.3)] animate-float-gentle"
            >
              {/* Phone Speaker Notch */}
              <div className="absolute top-6 left-1/2 -translate-x-1/2 w-28 h-5 bg-black rounded-full z-30 flex items-center justify-center">
                <div className="w-3 h-3 rounded-full bg-black border border-white/20 mr-2" />
                <div className="w-10 h-1 bg-white/20 rounded-full" />
              </div>

              {/* Inner Display Screen */}
              <div className="w-full h-full rounded-[38px] bg-[#1A100B] overflow-hidden pt-8 relative z-20 border border-white/10">
                
                {/* Active Screen Transition */}
                <motion.div
                  key={activeScreenIndex}
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5 }}
                  className="w-full h-full bg-gradient-to-b from-[#2B1B12] to-[#1A100B]"
                >
                  {appScreens[activeScreenIndex].ui}
                </motion.div>

              </div>

              {/* Radiant Bottom Shadow Glow */}
              <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 w-4/5 h-12 bg-[#FFD34D]/20 rounded-full blur-2xl pointer-events-none" />
            </motion.div>
          </div>

        </div>

      </div>
    </section>
  );
};
