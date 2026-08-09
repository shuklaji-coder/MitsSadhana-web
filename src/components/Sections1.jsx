import React from 'react';
import { motion } from 'framer-motion';

export const About = () => {
  const lines = [
    "मिट्स साधना — जहाँ आधुनिक तकनीक",
    "प्राचीन वैदिक परंपराओं से मिलती है।",
    "आपकी आध्यात्मिक यात्रा को",
    "सरल, पवित्र और दिव्य बनाने का संकल्प।",
  ];
  return (
    <section id="about" style={{ position:'relative', width:'100%', padding:'112px 24px', background:'#FFF8F0', color:'#2B1B12', overflow:'hidden' }}>
      <div className="animate-rotate-slow" style={{ position:'absolute', top:'50%', left:'50%', transform:'translate(-50%,-50%)', width:700, height:700, pointerEvents:'none', opacity:0.04 }}>
        <svg viewBox="0 0 500 500" style={{ width:'100%', height:'100%', fill:'none', stroke:'#E8641D' }}>
          <circle cx="250" cy="250" r="230" strokeWidth="2" strokeDasharray="8 8"/>
          <circle cx="250" cy="250" r="180" strokeWidth="1.5"/>
          <path d="M250 20L270 200L450 250L270 300L250 480L230 300L50 250L230 200Z" strokeWidth="2"/>
          <path d="M100 100L250 220L400 100L280 250L400 400L250 280L100 400L220 250Z" strokeWidth="1.5"/>
          <circle cx="250" cy="250" r="80" strokeWidth="3"/>
        </svg>
      </div>
      <div style={{ maxWidth:900, margin:'0 auto', position:'relative', zIndex:1, textAlign:'center' }}>
        <motion.div initial={{ opacity:0, scale:0.8 }} whileInView={{ opacity:1, scale:1 }} viewport={{ once:true }} transition={{ duration:0.7 }}
          style={{ display:'inline-flex', alignItems:'center', gap:8, padding:'6px 16px', borderRadius:999, background:'rgba(232,100,29,0.1)', border:'1px solid rgba(232,100,29,0.2)', color:'#E8641D', fontSize:11, fontWeight:600, letterSpacing:4, textTransform:'uppercase', marginBottom:32 }}>
          <span style={{ fontFamily:'"Rozha One",serif', fontSize:18 }}>ॐ</span>
          हमारा पवित्र संकल्प
        </motion.div>

        <h2 style={{ fontFamily:'"Rozha One",serif', fontSize:'clamp(22px,4vw,40px)', fontWeight:400, lineHeight:2.0, marginBottom:32 }}>
          {lines.map((line, i) => (
            <motion.span key={i} initial={{ opacity:0, y:18 }} whileInView={{ opacity:1, y:0 }} viewport={{ once:true }} transition={{ duration:0.6, delay:i * 0.18 }}
              style={{ display:'block', color: i % 2 === 0 ? '#2B1B12' : '#E8641D' }}>
              {line}
            </motion.span>
          ))}
        </h2>

        <motion.div initial={{ opacity:0, y:20 }} whileInView={{ opacity:1, y:0 }} viewport={{ once:true }} transition={{ duration:0.9, delay:0.5 }}
          style={{ display:'flex', flexDirection:'column', alignItems:'center', marginTop:40, padding:'36px 28px', borderRadius:24, background:'rgba(232,100,29,0.06)', border:'1px solid rgba(232,100,29,0.18)' }}>
          <span style={{ fontFamily:'"Rozha One",serif', fontSize:36, color:'#E8641D', marginBottom:16, lineHeight:1, filter:'drop-shadow(0 0 10px rgba(232,100,29,0.45))' }}>ॐ</span>
          <p style={{ fontFamily:'"Rozha One",serif', fontSize:'clamp(16px,2.5vw,22px)', color:'#2B1B12', lineHeight:2.1, letterSpacing:0.5, marginBottom:14, textAlign:'center' }}>
            कर्मण्येवाधिकारस्ते मा फलेषु कदाचन।<br/>
            मा कर्मफलहेतुर्भूर्मा ते सङ्गोऽस्त्वकर्मणि॥
          </p>
          <div style={{ width:60, height:2, background:'linear-gradient(90deg,transparent,#E8641D,transparent)', margin:'4px 0 16px' }} />
          <p style={{ fontFamily:'"Rozha One",serif', fontSize:'clamp(14px,2vw,18px)', color:'#E8641D', lineHeight:1.9, textAlign:'center' }}>
            तुम्हारा केवल कर्म करने पर अधिकार है,<br/>
            फल की इच्छा मत रखो।
          </p>
          <p style={{ fontSize:11, color:'rgba(43,27,18,0.45)', marginTop:12, letterSpacing:3, textTransform:'uppercase', fontWeight:600 }}>
            — श्रीमद्‍ भगवद्‍गीता, अध्याय २, श्लोक ४७
          </p>
        </motion.div>

      </div>
    </section>
  );
};

export const Features = () => {
  const cards = [
    { emoji:'🗓️', tag:'Rituals & Havans', title:'On-Demand Pandit Booking', sub:'Verified Vedic Priests', desc:'Book authentic, certified Pandits for Griha Pravesh, Satyanarayan Katha, or Havans at your doorstep or via live stream.' },
    { emoji:'🌸', tag:'Fresh Delivery', title:'Daily Pooja Samagri', sub:'Pure Organic Subscriptions', desc:'Fresh Gangajal, brass diyas, organic camphor, and fragrant flowers delivered daily before your morning sadhana.' },
    { emoji:'🤖', tag:'AI Mentor', title:'AI Spiritual Guru', sub:'24/7 Sanatana Guidance', desc:'Ask about Shastras, Bhagavad Gita verses, horoscope insights, or get personalized daily mantra recommendations.' },
    { emoji:'📖', tag:'Sadhana Tracker', title:'Gita & Mantra Timer', sub:'Track Spiritual Progress', desc:'Interactive Japamala counter, audio chants with synced lyrics, and verse-by-verse Bhagavad Gita audiobooks.' },
  ];
  return (
    <section id="features" style={{ position:'relative', width:'100%', padding:'112px 24px', background:'#1A100B', color:'#fff', overflow:'hidden' }}>
      {/* Background Image Overlay */}
      <div style={{ position:'absolute', inset:0, zIndex:0, overflow:'hidden' }}>
        <img src="/image.png" alt="Varanasi Temple" style={{ width:'100%', height:'100%', objectFit:'cover', objectPosition:'center', opacity:0.25, filter:'brightness(0.9) saturate(1.2)' }} />
        <div style={{ position:'absolute', inset:0, background:'linear-gradient(to bottom, #1A100B 0%, rgba(26,16,11,0.8) 50%, #1A100B 100%)' }} />
      </div>
      <div style={{ position:'absolute', top:'33%', left:'50%', transform:'translate(-50%,-50%)', width:600, height:600, background:'rgba(232,100,29,0.08)', borderRadius:'50%', filter:'blur(120px)', pointerEvents:'none' }} />
      <div style={{ maxWidth:1280, margin:'0 auto', position:'relative', zIndex:1 }}>
        <div style={{ textAlign:'center', maxWidth:720, margin:'0 auto 72px' }}>
          <motion.div initial={{ opacity:0, y:20 }} whileInView={{ opacity:1, y:0 }} viewport={{ once:true }} transition={{ duration:0.6 }}
            style={{ display:'inline-flex', alignItems:'center', gap:8, padding:'6px 16px', borderRadius:999, background:'rgba(255,211,77,0.1)', border:'1px solid rgba(255,211,77,0.3)', color:'#FFD34D', fontSize:11, fontWeight:600, letterSpacing:4, textTransform:'uppercase', marginBottom:16 }}>
            ✨ Divine Features
          </motion.div>
          <motion.h2 initial={{ opacity:0, y:20 }} whileInView={{ opacity:1, y:0 }} viewport={{ once:true }} transition={{ duration:0.7, delay:0.1 }}
            style={{ fontFamily:'"Playfair Display",serif', fontSize:'clamp(30px,5vw,48px)', fontWeight:700, marginBottom:16 }}>
            Empowering Your <span className="gold-shimmer" style={{ fontStyle:'italic' }}>Devotional Journey</span>
          </motion.h2>
          <motion.p initial={{ opacity:0, y:20 }} whileInView={{ opacity:1, y:0 }} viewport={{ once:true }} transition={{ duration:0.7, delay:0.2 }} style={{ color:'rgba(255,255,255,0.65)', fontSize:16, fontWeight:300 }}>
            Designed with reverence to make authentic Vedic rituals, pooja supplies, and spiritual wisdom accessible anywhere.
          </motion.p>
        </div>
        <div style={{ display:'grid', gridTemplateColumns:'repeat(auto-fit,minmax(260px,1fr))', gap:28 }}>
          {cards.map((c, i) => (
            <motion.div key={i} initial={{ opacity:0, y:40 }} whileInView={{ opacity:1, y:0 }} viewport={{ once:true }} transition={{ duration:0.7, delay:i * 0.12 }}
              whileHover={{ y:-8, scale:1.02 }} className="glass-card" style={{ padding:32, display:'flex', flexDirection:'column', cursor:'default' }}>
              <div style={{ display:'flex', alignItems:'center', justifyContent:'space-between', marginBottom:24 }}>
                <div className="animate-bob" style={{ animationDelay:`${i * 0.7}s`, width:56, height:56, borderRadius:16, background:'rgba(232,100,29,0.15)', border:'1px solid rgba(255,211,77,0.3)', display:'flex', alignItems:'center', justifyContent:'center', fontSize:28 }}>{c.emoji}</div>
                <span style={{ fontSize:10, fontWeight:700, letterSpacing:2, textTransform:'uppercase', padding:'4px 10px', borderRadius:999, border:'1px solid rgba(255,211,77,0.3)', color:'#FFD34D', background:'rgba(0,0,0,0.3)' }}>{c.tag}</span>
              </div>
              <p style={{ fontSize:10, textTransform:'uppercase', letterSpacing:3, color:'rgba(255,179,74,0.8)', marginBottom:6, fontWeight:600 }}>{c.sub}</p>
              <h3 style={{ fontFamily:'"Playfair Display",serif', fontSize:22, fontWeight:700, color:'#fff', marginBottom:12 }}>{c.title}</h3>
              <p style={{ fontSize:14, color:'rgba(255,255,255,0.65)', lineHeight:1.7, flex:1 }}>{c.desc}</p>
              <div style={{ marginTop:20, paddingTop:16, borderTop:'1px solid rgba(255,255,255,0.1)', display:'flex', justifyContent:'space-between', fontSize:12, color:'#FFD34D', fontWeight:600 }}>
                <span>Explore Feature</span><span>→</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export const HowItWorks = () => {
  const steps = [
    { n:'01', emoji:'🧭', title:'Choose Your Ritual', sub:'Personalized Selections', desc:'Select from 50+ Vedic poojas, Havans, or daily samagri kits tailored to your gotra and Nakshatra.', img: '/image copy.png' },
    { n:'02', emoji:'✅', title:'Book Pandit / Samagri', sub:'Seamless Scheduling', desc:'Schedule a certified priest or get pure organic pooja items delivered at your preferred Muhurat time.', img: '/image copy 2.png' },
    { n:'03', emoji:'🪔', title:'Experience Divine Connection', sub:'Sacred Fulfillment', desc:'Perform your sadhana with tranquility while tracking your daily chants, Gita verses, and spiritual progress.', img: '/image copy 3.png' },
  ];
  return (
    <section id="how-it-works" style={{ position:'relative', width:'100%', padding:'112px 24px', background:'#FFF8F0', color:'#2B1B12', overflow:'hidden' }}>
      <div style={{ position:'absolute', bottom:-40, right:-40, fontSize:320, fontFamily:'"Rozha One",serif', color:'#E8641D', opacity:0.03, pointerEvents:'none', lineHeight:1 }}>ॐ</div>
      <div style={{ maxWidth:1100, margin:'0 auto', position:'relative', zIndex:1 }}>
        <div style={{ textAlign:'center', maxWidth:720, margin:'0 auto 80px' }}>
          <motion.div initial={{ opacity:0, y:20 }} whileInView={{ opacity:1, y:0 }} viewport={{ once:true }} transition={{ duration:0.6 }}
            style={{ display:'inline-flex', alignItems:'center', gap:8, padding:'6px 16px', borderRadius:999, background:'rgba(232,100,29,0.1)', border:'1px solid rgba(232,100,29,0.2)', color:'#E8641D', fontSize:11, fontWeight:600, letterSpacing:4, textTransform:'uppercase', marginBottom:16 }}>
            Simple 3-Step Journey
          </motion.div>
          <motion.h2 initial={{ opacity:0, y:20 }} whileInView={{ opacity:1, y:0 }} viewport={{ once:true }} transition={{ duration:0.7, delay:0.1 }}
            style={{ fontFamily:'"Playfair Display",serif', fontSize:'clamp(30px,5vw,48px)', fontWeight:700, marginBottom:16 }}>
            How <span className="gold-shimmer" style={{ fontStyle:'italic' }}>Mits Sadhana</span> Works
          </motion.h2>
          <motion.p initial={{ opacity:0, y:20 }} whileInView={{ opacity:1, y:0 }} viewport={{ once:true }} transition={{ duration:0.7, delay:0.2 }} style={{ color:'rgba(43,27,18,0.65)', fontSize:16, fontWeight:300 }}>
            Three graceful steps to authentic spiritual fulfillment at your doorstep.
          </motion.p>
        </div>
        <div style={{ display:'grid', gridTemplateColumns:'repeat(auto-fit,minmax(280px,1fr))', gap:48, position:'relative' }}>
          {steps.map((s, i) => (
            <motion.div key={i} initial={{ opacity:0, y:35 }} whileInView={{ opacity:1, y:0 }} viewport={{ once:true }} transition={{ duration:0.8, delay:i * 0.2 }}
              whileHover={{ y:-10 }} style={{ display:'flex', flexDirection:'column', alignItems:'center', textAlign:'center' }}>
              <div style={{ position:'relative', marginBottom:28 }}>
                {s.img ? (
                  <div style={{ width:200, height:160, borderRadius:20, overflow:'hidden', border:'2px solid rgba(255,211,77,0.8)', boxShadow:'0 8px 32px rgba(0,0,0,0.25)' }}>
                    <img src={s.img} alt={s.title} style={{ width:'100%', height:'100%', objectFit:'cover', transition:'transform 0.5s ease' }} onMouseEnter={e => e.currentTarget.style.transform = 'scale(1.08)'} onMouseLeave={e => e.currentTarget.style.transform = 'scale(1)'} />
                  </div>
                ) : (
                  <div className="animate-bob" style={{ animationDelay:`${i * 0.6}s`, width:96, height:96, borderRadius:'50%', background:'linear-gradient(135deg,#2B1B12,#1A100B)', border:'2px solid rgba(255,211,77,0.6)', display:'flex', alignItems:'center', justifyContent:'center', fontSize:36, boxShadow:'0 8px 32px rgba(0,0,0,0.25)' }}>{s.emoji}</div>
                )}
                <div className="animate-halo-pulse" style={{ position:'absolute', bottom:-8, right:s.img ? -8 : 0, width:28, height:28, borderRadius:'50%', background:'#E8641D', color:'#fff', fontSize:10, fontWeight:700, display:'flex', alignItems:'center', justifyContent:'center', boxShadow:'0 2px 8px rgba(0,0,0,0.3)', border:'1.5px solid #fff' }}>{s.n}</div>
              </div>
              <span style={{ fontSize:10, textTransform:'uppercase', letterSpacing:3, color:'#E8641D', fontWeight:700, marginBottom:8 }}>{s.sub}</span>
              <h3 style={{ fontFamily:'"Playfair Display",serif', fontSize:22, fontWeight:700, color:'#2B1B12', marginBottom:12 }}>{s.title}</h3>
              <p style={{ fontSize:14, color:'rgba(43,27,18,0.7)', lineHeight:1.7, maxWidth:280 }}>{s.desc}</p>
            </motion.div>
          ))}
        </div>
        <div style={{ display:'flex', justifyContent:'center', marginTop:48 }}>
          <motion.div initial={{ width:0, opacity:0 }} whileInView={{ width:'60%', opacity:1 }} viewport={{ once:true }} transition={{ duration:2, ease:'easeInOut' }}
            style={{ height:3, background:'linear-gradient(90deg,#E8641D,#FFD34D,#E8641D)', borderRadius:999, boxShadow:'0 0 15px rgba(255,211,77,0.5)' }} />
        </div>
      </div>
    </section>
  );
};
