import React from 'react';
import { motion } from 'framer-motion';

export const About = () => {
  const visionWords = "Mits Sadhana bridges timeless ancient Vedic rituals with state-of-the-art modern technology — elevating your daily spiritual journey into an effortless, serene, and deeply sacred practice.".split(" ");

  return (
    <section id="about" className="relative w-full py-28 px-6 bg-[#FFF8F0] text-[#2B1B12] overflow-hidden select-none">
      
      {/* Subtle Rotating Mandala Watermark in Background */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] pointer-events-none opacity-[0.04] animate-rotate-slow">
        <svg viewBox="0 0 500 500" className="w-full h-full fill-current text-[#E8641D]">
          <circle cx="250" cy="250" r="230" fill="none" stroke="currentColor" strokeWidth="2" strokeDasharray="8 8" />
          <circle cx="250" cy="250" r="180" fill="none" stroke="currentColor" strokeWidth="1.5" />
          <path d="M250 20 L270 200 L450 250 L270 300 L250 480 L230 300 L50 250 L230 200 Z" fill="none" stroke="currentColor" strokeWidth="2" />
          <path d="M100 100 L250 220 L400 100 L280 250 L400 400 L250 280 L100 400 L220 250 Z" fill="none" stroke="currentColor" strokeWidth="1.5" />
          <circle cx="250" cy="250" r="80" fill="none" stroke="currentColor" strokeWidth="3" />
        </svg>
      </div>

      <div className="max-w-5xl mx-auto relative z-10 text-center">
        
        {/* Small Gold Om Accent Header */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
          className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full bg-[#E8641D]/10 border border-[#E8641D]/20 text-[#E8641D] text-sm font-semibold tracking-wider mb-8"
        >
          <span className="font-devanagari text-lg">ॐ</span>
          <span className="uppercase text-xs tracking-widest">Our Sacred Vision</span>
        </motion.div>

        {/* Staggered Word Reveal Statement */}
        <h2 className="font-serif-title text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight sm:leading-snug text-[#2B1B12] mb-8">
          {visionWords.map((word, i) => (
            <motion.span
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.04 }}
              className="inline-block mr-[0.25em]"
            >
              {word === "Vedic" || word === "rituals" || word === "sacred" ? (
                <span className="text-[#E8641D] italic">{word}</span>
              ) : word === "modern" || word === "technology" || word === "Mits" || word === "Sadhana" ? (
                <span className="text-[#D4AF37] font-semibold">{word}</span>
              ) : (
                word
              )}
            </motion.span>
          ))}
        </h2>

        {/* Divider & Sub-quote */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="flex flex-col items-center mt-10"
        >
          <div className="w-24 h-0.5 bg-gradient-to-r from-transparent via-[#E8641D] to-transparent mb-6" />
          <p className="font-devanagari text-xl sm:text-2xl text-[#E8641D] tracking-widest">
            "सर्वे भवन्तु सुखिनः सर्वे सन्तु निरामयाः"
          </p>
          <p className="text-xs uppercase tracking-[0.2em] text-[#2B1B12]/60 mt-2 font-medium">
            May all beings be peaceful & prosperous
          </p>
        </motion.div>

      </div>
    </section>
  );
};
