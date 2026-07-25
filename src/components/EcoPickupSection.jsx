import React from 'react';
import { motion } from 'framer-motion';
import { Truck, Waves, RefreshCw, HeartHandshake, Coins, Leaf, Sparkles, ArrowRight, CheckCircle2, Calendar, Flower2 } from 'lucide-react';

export const EcoPickupSection = () => {
  const steps = [
    {
      number: '01',
      title: 'Step 1: Schedule Pickup',
      icon: <Calendar className="w-6 h-6 text-[#34D399]" />,
      image: '/step1.png',
      description: 'App/Website par apni comfort ke anusar date & time select karein.'
    },
    {
      number: '02',
      title: 'Step 2: Hand Over Flowers',
      icon: <Flower2 className="w-6 h-6 text-[#FFD34D]" />,
      image: '/step2.png',
      description: 'MitSadhana agent ko apna Nirmalya (pooja phool) eco-bag mein handover karein.'
    },
    {
      number: '03',
      title: 'Step 3: Earn Karma Points',
      icon: <Coins className="w-6 h-6 text-[#38BDF8]" />,
      image: '/step 3.png',
      description: 'Green Karma Points paayein aur apni megi pooja samagri ya pandit booking par redeem karein!'
    }
  ];

  const featurePoints = [
    {
      id: 'doorstep-pickup',
      title: 'Doorstep Nirmalya Collection',
      subtitle: 'Ghar aur Mandir se Pickup',
      emoji: '🚜',
      icon: <Truck className="w-7 h-7 text-[#34D399] group-hover:scale-110 transition-transform duration-300" />,
      description: 'Pooja, festivals (Ganesh Chaturthi, Navratri, Diwali) ya daily pooja ke baad bache hue phool, bel-patra aur samagri ke liye doorstep pickup schedule karein.',
      badge: 'Doorstep Service',
      accentColor: 'from-[#10B981]/20 to-[#059669]/10',
      borderColor: 'border-[#34D399]/30',
      textColor: 'text-[#34D399]'
    },
    {
      id: 'river-protection',
      title: 'River & Water Protection',
      subtitle: 'Nadiyon ki Suraksha',
      emoji: '🌊',
      icon: <Waves className="w-7 h-7 text-[#38BDF8] group-hover:scale-110 transition-transform duration-300" />,
      description: 'Pavitra phoolon ko nadiyon ya kachre mein fekne ke bajaye unka paryavaran ke anukoole (eco-friendly) visarjan karein aur hamari nadiyon ko polluted hone se bachayein.',
      badge: 'Clean Rivers',
      accentColor: 'from-[#0284C7]/20 to-[#0369A1]/10',
      borderColor: 'border-[#38BDF8]/30',
      textColor: 'text-[#38BDF8]'
    },
    {
      id: 'sacred-upcycling',
      title: 'Sacred Upcycling',
      subtitle: 'Nirmalya se Naye Product',
      emoji: '♻️',
      icon: <RefreshCw className="w-7 h-7 text-[#FBBF24] group-hover:rotate-180 transition-transform duration-700" />,
      description: 'Collect kiye gaye phoolon ko shradha aur pavitrata ke sath process karke 100% Organic Agarbatti, Dhoop Cones aur Organic Compost (Khaad) banaya jata hai.',
      badge: '100% Organic',
      accentColor: 'from-[#F59E0B]/20 to-[#D97706]/10',
      borderColor: 'border-[#FBBF24]/30',
      textColor: 'text-[#FBBF24]'
    },
    {
      id: 'sanctity-respect',
      title: 'Respect to Tradition & Sanctity',
      subtitle: 'Maan aur Pavitrata',
      emoji: '🕉️',
      icon: <HeartHandshake className="w-7 h-7 text-[#F472B6] group-hover:scale-110 transition-transform duration-300" />,
      description: 'Nirmalya ka anadara nahi hota. Har ek patte aur phool ko Vedic maryaada aur aadar ke sath handle kiya jata hai.',
      badge: 'Vedic Maryaada',
      accentColor: 'from-[#EC4899]/20 to-[#BE185D]/10',
      borderColor: 'border-[#F472B6]/30',
      textColor: 'text-[#F472B6]'
    },
    {
      id: 'green-karma-points',
      title: 'Earn Green Karma Points',
      subtitle: 'Redeemable Rewards',
      emoji: '🪙',
      icon: <Coins className="w-7 h-7 text-[#FFD34D] group-hover:scale-110 transition-transform duration-300" />,
      description: 'Har Eco-Pickup par paayein Green Karma Points, jinhe aap apni megi Pooja Samagri ya Pandit Booking par redeem kar sakte hain.',
      badge: 'Karma Rewards',
      accentColor: 'from-[#E8641D]/20 to-[#FFD34D]/10',
      borderColor: 'border-[#FFD34D]/40',
      textColor: 'text-[#FFD34D]'
    }
  ];

  return (
    <section id="eco-pickup" className="relative w-full py-28 px-6 bg-gradient-to-b from-[#1A100B] via-[#15231B] to-[#1A100B] text-white overflow-hidden select-none">
      
      {/* Subtle Background Glows (Green & Amber Eco Aura) */}
      <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-[#10B981]/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-[#E8641D]/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full bg-[#10B981]/15 border border-[#34D399]/30 text-[#34D399] text-xs font-semibold uppercase tracking-widest mb-4 shadow-[0_0_15px_rgba(16,185,129,0.15)]"
          >
            <Leaf className="w-3.5 h-3.5 animate-pulse" />
            <span>Eco-Friendly Nirmalya Sewa 🌿🌸</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="font-serif-title text-4xl sm:text-5xl font-bold tracking-tight text-white mb-6"
          >
            Eco-Friendly Nirmalya Pickup & <span className="bg-gradient-to-r from-[#34D399] via-[#FFD34D] to-[#E8641D] bg-clip-text text-transparent">Visarjan</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-base sm:text-xl text-[#A7F3D0] font-medium leading-relaxed max-w-2xl mx-auto"
          >
            <span className="text-[#FFD34D] font-semibold">Pavitrata Bhi, Paryavaran Bhi!</span> Chadhe hue phoolon aur pooja samagri ka aadar ke sath eco-friendly visarjan.
          </motion.p>
        </div>

        {/* Short Summary Banner Card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="relative max-w-4xl mx-auto mb-16 p-8 sm:p-10 rounded-3xl bg-gradient-to-r from-[#10B981]/15 via-[#2B1B12]/80 to-[#E8641D]/15 border border-[#34D399]/30 backdrop-blur-md shadow-[0_10px_40px_rgba(0,0,0,0.4)] overflow-hidden"
        >
          {/* Top Decorative Line */}
          <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#34D399] via-[#FFD34D] to-[#E8641D]" />

          <div className="flex flex-col md:flex-row items-center justify-between gap-6 relative z-10">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-2xl bg-[#34D399]/15 border border-[#34D399]/40 flex items-center justify-center text-[#34D399] shrink-0 mt-1 shadow-[0_0_20px_rgba(52,211,153,0.2)]">
                <Sparkles className="w-6 h-6 animate-spin-slow" />
              </div>
              <div>
                <span className="text-[11px] font-bold uppercase tracking-widest text-[#FFD34D] mb-1 block">
                  Pavitra Sankalp • Eco Mission
                </span>
                <p className="text-base sm:text-lg text-white/90 font-light leading-relaxed">
                  "MitSadhana Eco Pickup aapke ghar aur mandir ke Nirmalya (used flowers & sacred items) ko aadar ke sath collect karke unhe organic agarbatti aur compost mein transform karta hai. Ab apni shradha nibhaiye bina paryavaran ko nuksan pahunchaye."
                </p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* 3-Step Process Flow Workflow */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-24"
        >
          <div className="text-center mb-12">
            <span className="text-[#34D399] text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-full bg-[#10B981]/10 border border-[#34D399]/30 inline-block shadow-[0_0_12px_rgba(52,211,153,0.15)]">
              3 Easy Steps • Simple Process ➔
            </span>
            <h3 className="font-serif-title text-2xl sm:text-3xl font-bold text-white mt-3">
              Kaise Kaam Karta Hai Eco Pickup?
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
            {steps.map((step, idx) => (
              <motion.div
                key={idx}
                whileHover={{ y: -8 }}
                className="relative flex flex-col items-center text-center group glass-card p-6 sm:p-8 rounded-3xl border border-[#34D399]/25 hover:border-[#34D399]/60 transition-all duration-300 shadow-xl overflow-hidden"
              >
                {/* Step Image Box */}
                <div className="w-full h-48 sm:h-52 rounded-2xl overflow-hidden mb-6 relative border border-[#34D399]/30 shadow-[0_8px_25px_rgba(0,0,0,0.5)] group/img">
                  <img
                    src={step.image}
                    alt={step.title}
                    className="w-full h-full object-cover object-center transform group-hover/img:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#1A100B] via-transparent to-transparent opacity-50" />
                  
                  {/* Floating Badge on Image */}
                  <div className="absolute top-3 left-3 px-3 py-1 rounded-full bg-black/60 backdrop-blur-md border border-[#34D399]/40 text-[#FFD34D] text-xs font-bold uppercase tracking-widest shadow-md">
                    Step {step.number}
                  </div>
                </div>

                {/* Step Icon & Title Header */}
                <div className="flex items-center justify-center gap-3 mb-3">
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#10B981]/20 to-[#FFD34D]/20 border border-[#34D399]/40 flex items-center justify-center text-[#FFD34D] shadow-sm">
                    {step.icon}
                  </div>
                  <h4 className="font-serif-title text-xl font-bold text-white group-hover:text-[#34D399] transition-colors">
                    {step.title}
                  </h4>
                </div>

                <p className="text-sm text-white/75 leading-relaxed font-normal">
                  {step.description}
                </p>

                {/* Arrow Connector between steps for desktop */}
                {idx < 2 && (
                  <div className="hidden md:flex absolute -right-5 top-1/2 -translate-y-1/2 z-20 text-[#34D399] text-base font-bold bg-[#1A100B] w-9 h-9 rounded-full border border-[#34D399]/40 items-center justify-center shadow-lg">
                    ➔
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default EcoPickupSection;
