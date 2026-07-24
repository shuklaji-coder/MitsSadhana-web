import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Compass, UserCheck, Flame } from 'lucide-react';

export const HowItWorks = () => {
  const steps = [
    {
      number: '01',
      title: 'Choose Your Ritual',
      subtitle: 'Personalized Selections',
      description: 'Select from over 50+ Vedic poojas, Havans, or daily samagri delivery kits tailored to your gotra and Nakshatra.',
      icon: <Compass className="w-8 h-8 text-[#FFD34D]" />,
    },
    {
      number: '02',
      title: 'Book Verified Pandit / Samagri',
      subtitle: 'Seamless Scheduling',
      description: 'Schedule a certified priest or get pure organic pooja items delivered straight to your home at your preferred Muhurat time.',
      icon: <UserCheck className="w-8 h-8 text-[#FFD34D]" />,
    },
    {
      number: '03',
      title: 'Experience Divine Connection',
      subtitle: 'Sacred Fulfillment',
      description: 'Perform your sadhana with tranquility while tracking your daily chants, Gita verses, and spiritual progress.',
      icon: <Flame className="w-8 h-8 text-[#FFD34D] animate-flame" />,
    }
  ];

  return (
    <section id="how-it-works" className="relative w-full py-28 px-6 bg-[#FFF8F0] text-[#2B1B12] overflow-hidden select-none">
      
      {/* Background Watermark Om */}
      <div className="absolute -bottom-20 -right-20 text-[350px] font-devanagari opacity-[0.03] pointer-events-none select-none text-[#E8641D]">
        ॐ
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full bg-[#E8641D]/10 border border-[#E8641D]/20 text-[#E8641D] text-xs font-semibold uppercase tracking-widest mb-4"
          >
            <Sparkles className="w-3.5 h-3.5" />
            <span>Simple 3-Step Journey</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="font-serif-title text-4xl sm:text-5xl font-bold tracking-tight text-[#2B1B12] mb-6"
          >
            How <span className="text-[#E8641D] italic">Mits Sadhana</span> Works
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-base sm:text-lg text-[#2B1B12]/70 font-light"
          >
            Bringing authentic spiritual fulfillment to your doorstep in three graceful steps.
          </motion.p>
        </div>

        {/* Timeline Grid (Horizontal Desktop / Vertical Mobile) */}
        <div className="relative grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-8">
          
          {/* Lit Wick Connecting Line (Desktop) */}
          <div className="hidden md:block absolute top-[90px] left-[15%] right-[15%] h-[3px] bg-[#E8641D]/20 z-0 rounded-full overflow-hidden">
            <motion.div 
              initial={{ width: "0%" }}
              whileInView={{ width: "100%" }}
              viewport={{ once: true }}
              transition={{ duration: 1.8, ease: "easeInOut" }}
              className="h-full bg-gradient-to-r from-[#E8641D] via-[#FFD34D] to-[#E8641D] shadow-[0_0_15px_#FFD34D]"
            />
          </div>

          {steps.map((step, idx) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: idx * 0.25 }}
              className="relative z-10 flex flex-col items-center text-center group"
            >
              {/* Step Circle Badge */}
              <div className="relative mb-8">
                <div className="w-24 h-24 rounded-full bg-gradient-to-br from-[#2B1B12] to-[#1A100B] border-2 border-[#FFD34D]/60 flex items-center justify-center shadow-xl group-hover:border-[#FFD34D] group-hover:scale-105 transition-all duration-300">
                  {step.icon}
                </div>
                {/* Step Number Tag */}
                <div className="absolute -bottom-2 right-0 w-8 h-8 rounded-full bg-[#E8641D] text-white font-bold text-xs flex items-center justify-center shadow-md border border-white">
                  {step.number}
                </div>
                {/* Pulsing halo behind badge */}
                <div className="absolute -inset-2 rounded-full border border-[#E8641D]/30 opacity-0 group-hover:opacity-100 group-hover:scale-110 transition-all duration-500 pointer-events-none" />
              </div>

              {/* Subtitle */}
              <span className="text-xs uppercase tracking-widest font-semibold text-[#E8641D] mb-2">
                {step.subtitle}
              </span>

              {/* Title */}
              <h3 className="font-serif-title text-2xl font-bold text-[#2B1B12] mb-3 group-hover:text-[#E8641D] transition-colors">
                {step.title}
              </h3>

              {/* Description */}
              <p className="text-sm text-[#2B1B12]/75 font-normal leading-relaxed max-w-xs">
                {step.description}
              </p>
            </motion.div>
          ))}

        </div>

      </div>
    </section>
  );
};
