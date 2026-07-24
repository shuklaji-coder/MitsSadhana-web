import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Star, Quote } from 'lucide-react';

export const Testimonials = () => {
  const reviews = [
    {
      quote: "Booking Pt. Ramesh Shastri for our home Griha Pravesh was completely hassle-free. He arrived right on time and performed the havan with utmost devotion.",
      name: "Ananya Sharma",
      location: "New Delhi",
      rating: 5,
      avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=150&q=80"
    },
    {
      quote: "The daily pooja samagri subscription delivers fresh flowers and pure Gangajal to my doorstep every morning at 6 AM. It has transformed my daily morning sadhana.",
      name: "Vikramaditya Roy",
      location: "Bengaluru",
      rating: 5,
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&q=80"
    },
    {
      quote: "AI Guru answered my Bhagavad Gita queries with such profound clarity! It feels like having a compassionate mentor available 24/7.",
      name: "Pooja Deshmukh",
      location: "Mumbai",
      rating: 5,
      avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=150&q=80"
    },
    {
      quote: "The audio Gita chants with synchronized Sanskrit lyrics helped me memorize Chapter 12 effortlessly. Mits Sadhana is truly divine tech.",
      name: "Rajesh Kulkarni",
      location: "Pune",
      rating: 5,
      avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=150&q=80"
    }
  ];

  return (
    <section id="testimonials" className="relative w-full py-28 px-6 bg-[#FFF8F0] text-[#2B1B12] overflow-hidden select-none">
      
      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full bg-[#E8641D]/10 border border-[#E8641D]/20 text-[#E8641D] text-xs font-semibold uppercase tracking-widest mb-4"
          >
            <Sparkles className="w-3.5 h-3.5" />
            <span>Devotee Experiences</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="font-serif-title text-4xl sm:text-5xl font-bold tracking-tight text-[#2B1B12] mb-6"
          >
            Loved by Thousands of <span className="text-[#E8641D] italic">Devotees</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-base sm:text-lg text-[#2B1B12]/70 font-light"
          >
            Hear how Mits Sadhana is enriching daily spiritual lives across the globe.
          </motion.p>
        </div>

        {/* Testimonials Marquee Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {reviews.map((rev, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.15 }}
              className="glass-card-light p-8 rounded-3xl relative flex flex-col justify-between group hover:border-[#E8641D]/40 transition-all duration-300"
            >
              <Quote className="absolute top-6 right-6 w-10 h-10 text-[#E8641D]/15 group-hover:text-[#E8641D]/30 transition-colors" />

              <div>
                {/* Rating Stars */}
                <div className="flex items-center space-x-1 text-[#FFD34D] mb-4">
                  {Array.from({ length: rev.rating }).map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-current text-[#E8641D]" />
                  ))}
                </div>

                {/* Quote text */}
                <p className="text-base text-[#2B1B12]/85 italic leading-relaxed mb-6 font-normal">
                  "{rev.quote}"
                </p>
              </div>

              {/* User Avatar Info */}
              <div className="flex items-center space-x-4 pt-4 border-t border-[#2B1B12]/10">
                <img
                  src={rev.avatar}
                  alt={rev.name}
                  className="w-12 h-12 rounded-full object-cover border-2 border-[#E8641D]"
                />
                <div>
                  <h4 className="font-serif-title font-bold text-base text-[#2B1B12]">
                    {rev.name}
                  </h4>
                  <p className="text-xs text-[#2B1B12]/60 font-medium">
                    {rev.location}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};
