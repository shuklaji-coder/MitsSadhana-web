import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

export const AppShowcase = () => {
  const [active, setActive] = useState(0);
  const [tilt, setTilt] = useState({ x: 0, y: 0 });
  const screens = [
    { badge:'Live Booking', title:'Pandit Booking', sub:'Verified & Certified', color:'#E8641D', emoji:'👨‍🏫',
      content: <div style={{ padding:16, color:'#fff', height:'100%', display:'flex', flexDirection:'column', justifyContent:'space-between' }}>
        <div>
          <div style={{ display:'flex', justifyContent:'space-between', alignItems:'center', marginBottom:12 }}>
            <span style={{ fontFamily:'"Rozha One",serif', fontSize:16, color:'#FFD34D' }}>ॐ Mits Sadhana</span>
            <span style={{ fontSize:9, background:'rgba(220,38,38,0.8)', padding:'2px 8px', borderRadius:999, fontWeight:700, letterSpacing:1, animation:'pulse 2s infinite' }}>● LIVE</span>
          </div>
          <div style={{ background:'rgba(0,0,0,0.4)', borderRadius:12, padding:10, border:'1px solid rgba(255,211,77,0.3)', marginBottom:10 }}>
            <p style={{ fontSize:9, color:'#FFD34D', letterSpacing:2, textTransform:'uppercase', fontWeight:600 }}>Today's Muhurat</p>
            <p style={{ fontFamily:'"Playfair Display",serif', fontWeight:700, fontSize:13 }}>Abhijit: 11:45 AM</p>
          </div>
          {[{ n:'Pt. Ramesh Shastri', r:'4.9 ★', d:'Satyanarayan & Havan' }, { n:'Acharya Vidyanand', r:'5.0 ★', d:'Griha Pravesh' }].map((p,i)=>(
            <div key={i} style={{ display:'flex', justifyContent:'space-between', alignItems:'center', padding:'8px 10px', borderRadius:10, background:'rgba(255,255,255,0.08)', marginBottom:6 }}>
              <div><p style={{ fontSize:11, fontWeight:700 }}>{p.n}</p><p style={{ fontSize:9, color:'rgba(255,255,255,0.55)' }}>{p.d}</p></div>
              <span style={{ fontSize:11, fontWeight:700, color:'#FFD34D' }}>{p.r}</span>
            </div>
          ))}
        </div>
        <button style={{ width:'100%', padding:'10px', borderRadius:10, background:'linear-gradient(135deg,#E8641D,#FFD34D)', color:'#1A100B', fontSize:11, fontWeight:700, border:'none', cursor:'pointer', letterSpacing:1 }}>Book Pandit Now</button>
      </div>
    },
    { badge:'Japamala Counter', title:'Mantra Sadhana', sub:'Audio Chants & Timer', color:'#D4AF37', emoji:'📿',
      content: <div style={{ padding:16, color:'#fff', height:'100%', display:'flex', flexDirection:'column', alignItems:'center', justifyContent:'space-between' }}>
        <div style={{ textAlign:'center', width:'100%' }}>
          <p style={{ fontSize:9, color:'#FFD34D', letterSpacing:3, textTransform:'uppercase', fontWeight:600, marginBottom:4 }}>Daily Sadhana</p>
          <h4 style={{ fontFamily:'"Playfair Display",serif', fontSize:14, fontWeight:700, marginBottom:16 }}>Gayatri Mantra 108 Chant</h4>
          <div style={{ width:120, height:120, margin:'0 auto 16px', borderRadius:'50%', border:'4px solid #FFD34D', background:'rgba(0,0,0,0.5)', display:'flex', flexDirection:'column', alignItems:'center', justifyContent:'center', boxShadow:'0 0 30px rgba(255,211,77,0.3)' }}>
            <span style={{ fontSize:32, fontWeight:700, fontFamily:'"Playfair Display",serif', color:'#FFD34D' }}>72</span>
            <span style={{ fontSize:9, color:'rgba(255,255,255,0.5)', letterSpacing:2 }}>/ 108</span>
          </div>
          <p style={{ fontFamily:'"Rozha One",serif', fontSize:12, color:'#FFD34D', letterSpacing:2 }}>"ॐ भूर्भुवः स्वः..."</p>
        </div>
        <div style={{ display:'flex', gap:8, width:'100%' }}>
          <button style={{ flex:1, padding:8, borderRadius:8, background:'#E8641D', color:'#fff', fontSize:11, fontWeight:700, border:'none', cursor:'pointer' }}>Pause</button>
          <button style={{ flex:1, padding:8, borderRadius:8, background:'rgba(255,255,255,0.1)', color:'#fff', fontSize:11, fontWeight:700, border:'1px solid rgba(255,255,255,0.2)', cursor:'pointer' }}>Lyrics</button>
        </div>
      </div>
    },
    { badge:'AI Guidance', title:'AI Guru Chat', sub:'Vedic Wisdom 24/7', color:'#FF9E2C', emoji:'🤖',
      content: <div style={{ padding:16, color:'#fff', height:'100%', display:'flex', flexDirection:'column', justifyContent:'space-between' }}>
        <div>
          <div style={{ display:'flex', alignItems:'center', gap:8, paddingBottom:10, borderBottom:'1px solid rgba(255,255,255,0.1)', marginBottom:10 }}>
            <div style={{ width:28, height:28, borderRadius:'50%', background:'#FFD34D', color:'#1A100B', fontFamily:'"Rozha One",serif', fontSize:12, fontWeight:700, display:'flex', alignItems:'center', justifyContent:'center' }}>ॐ</div>
            <div><p style={{ fontSize:11, fontWeight:700 }}>AI Guru Mentor</p><p style={{ fontSize:9, color:'#FFD34D' }}>Connected • Vedic Wisdom</p></div>
          </div>
          <div style={{ padding:'8px 10px', borderRadius:10, background:'rgba(255,255,255,0.1)', fontSize:11, marginBottom:8, maxWidth:'85%' }}>How can I find peace during stressful work?</div>
          <div style={{ padding:'8px 10px', borderRadius:10, background:'rgba(232,100,29,0.25)', border:'1px solid rgba(255,211,77,0.25)', fontSize:11, marginLeft:'auto', maxWidth:'90%' }}>
            <span style={{ color:'#FFD34D', fontWeight:700 }}>Gita Ch 2, V 47: </span>"Focus on action without attachment to outcomes." Practice 5 mins of Pranayama every morning.
          </div>
        </div>
        <input readOnly placeholder="Ask AI Guru anything..." style={{ width:'100%', background:'rgba(0,0,0,0.4)', border:'1px solid rgba(255,255,255,0.2)', borderRadius:999, padding:'6px 12px', fontSize:11, color:'rgba(255,255,255,0.5)', outline:'none' }} />
      </div>
    },
  ];
  useEffect(() => {
    const t = setInterval(() => setActive(p => (p + 1) % screens.length), 4500);
    return () => clearInterval(t);
  }, []);
  const boxRef = useRef(null);
  const onMove = (e) => {
    const rect = boxRef.current?.getBoundingClientRect();
    if (!rect) return;
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    setTilt({ x: y * -15, y: x * 15 });
  };
  return (
    <section id="showcase" style={{ position:'relative', width:'100%', padding:'112px 24px', background:'linear-gradient(to bottom,#1A100B,#2B1B12,#1A100B)', color:'#fff', overflow:'hidden' }}>
      <div style={{ maxWidth:1280, margin:'0 auto', position:'relative', zIndex:1 }}>
        <div style={{ textAlign:'center', maxWidth:700, margin:'0 auto 56px' }}>
          <motion.h2 initial={{ opacity:0, y:20 }} whileInView={{ opacity:1, y:0 }} viewport={{ once:true }} transition={{ duration:0.7 }}
            style={{ fontFamily:'"Playfair Display",serif', fontSize:'clamp(28px,5vw,48px)', fontWeight:700 }}>
            Your Personal <span style={{ background:'linear-gradient(135deg,#FFF5D6,#FFD34D,#E8641D)', WebkitBackgroundClip:'text', WebkitTextFillColor:'transparent', fontStyle:'italic' }}>Divine Sanctuary</span>
          </motion.h2>
        </div>
        <div style={{ display:'grid', gridTemplateColumns:'repeat(auto-fit,minmax(280px,1fr))', gap:32, alignItems:'center' }}>
          {/* Screen selectors */}
          <div style={{ display:'flex', flexDirection:'column', gap:16 }}>
            {screens.map((s, i) => (
              <div key={i} onClick={() => setActive(i)} style={{ padding:20, borderRadius:20, cursor:'pointer', border: active===i ? `1px solid ${s.color}` : '1px solid rgba(255,255,255,0.1)', background: active===i ? 'rgba(43,27,18,0.85)' : 'rgba(0,0,0,0.2)', transform: active===i ? 'translateX(8px)' : 'none', boxShadow: active===i ? `0 0 30px rgba(232,100,29,0.2)` : 'none', transition:'all 0.35s ease', display:'flex', alignItems:'center', gap:16 }}>
                <div style={{ fontSize:32 }}>{s.emoji}</div>
                <div>
                  <p style={{ fontSize:9, textTransform:'uppercase', letterSpacing:3, color:'#FFD34D', fontWeight:600 }}>{s.badge}</p>
                  <h4 style={{ fontFamily:'"Playfair Display",serif', fontSize:18, fontWeight:700 }}>{s.title}</h4>
                  <p style={{ fontSize:12, color:'rgba(255,255,255,0.5)' }}>{s.sub}</p>
                </div>
              </div>
            ))}
          </div>
          {/* 3D Phone */}
          <div ref={boxRef} onMouseMove={onMove} onMouseLeave={() => setTilt({x:0,y:0})} style={{ display:'flex', justifyContent:'center', perspective:1000 }}>
            <motion.div style={{ transform:`rotateX(${tilt.x}deg) rotateY(${tilt.y}deg)`, transformStyle:'preserve-3d', transition:'transform 0.2s ease' }} className="animate-float-gentle">
              <div style={{ width:'min(280px, 85vw)', height:'min(570px, 170vw)', borderRadius:44, padding:12, background:'linear-gradient(to bottom,#4A3528,#1A100B,#4A3528)', border:'4px solid rgba(255,211,77,0.35)', boxShadow:'0 25px 60px rgba(0,0,0,0.8), 0 0 50px rgba(232,100,29,0.25)', position:'relative' }}>
                {/* Notch */}
                <div style={{ position:'absolute', top:18, left:'50%', transform:'translateX(-50%)', width:90, height:18, background:'#000', borderRadius:999, zIndex:10 }} />
                {/* Screen */}
                <div style={{ width:'100%', height:'100%', borderRadius:32, background:'#1A100B', overflow:'hidden', paddingTop:28, border:'1px solid rgba(255,255,255,0.08)', position:'relative', zIndex:5 }}>
                  <motion.div key={active} initial={{ opacity:0, scale:0.95 }} animate={{ opacity:1, scale:1 }} transition={{ duration:0.4 }} style={{ width:'100%', height:'100%' }}>
                    {screens[active].content}
                  </motion.div>
                </div>
                {/* Bottom glow */}
                <div style={{ position:'absolute', bottom:-24, left:'50%', transform:'translateX(-50%)', width:'70%', height:24, background:'rgba(255,211,77,0.15)', borderRadius:'50%', filter:'blur(12px)' }} />
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export const Testimonials = () => {
  const reviews = [
    { q:"Booking Pandit for our Griha Pravesh was completely seamless. He arrived right on time and performed the havan with utmost devotion.", n:"Ananya Sharma", loc:"New Delhi", img:"https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&q=80" },
    { q:"Daily pooja samagri subscription delivers fresh flowers and Gangajal every morning at 6 AM. It has transformed my morning sadhana completely.", n:"Vikramaditya Roy", loc:"Bengaluru", img:"https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&q=80" },
    { q:"AI Guru answered my Bhagavad Gita queries with such profound clarity. It feels like having a compassionate mentor available 24/7.", n:"Pooja Deshmukh", loc:"Mumbai", img:"https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&q=80" },
    { q:"The audio Gita chants with synchronized Sanskrit lyrics helped me memorize Chapter 12 effortlessly. Mits Sadhana is truly divine tech.", n:"Rajesh Kulkarni", loc:"Pune", img:"https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&q=80" },
  ];
  return (
    <section id="testimonials" style={{ position:'relative', width:'100%', padding:'112px 24px', background:'#FFF8F0', overflow:'hidden' }}>
      <div style={{ maxWidth:1280, margin:'0 auto', position:'relative', zIndex:1 }}>
        <div style={{ textAlign:'center', maxWidth:700, margin:'0 auto 56px' }}>
          <motion.h2 initial={{ opacity:0, y:20 }} whileInView={{ opacity:1, y:0 }} viewport={{ once:true }} transition={{ duration:0.7 }}
            style={{ fontFamily:'"Playfair Display",serif', fontSize:'clamp(28px,5vw,48px)', fontWeight:700, color:'#2B1B12' }}>
            Loved by Thousands of <span style={{ color:'#E8641D', fontStyle:'italic' }}>Devotees</span>
          </motion.h2>
        </div>
        <div style={{ display:'grid', gridTemplateColumns:'repeat(auto-fit,minmax(280px,1fr))', gap:24 }}>
          {reviews.map((r, i) => (
            <motion.div key={i} initial={{ opacity:0, y:30 }} whileInView={{ opacity:1, y:0 }} viewport={{ once:true }} transition={{ duration:0.6, delay:i*0.12 }}
              style={{ background:'rgba(255,248,240,0.9)', backdropFilter:'blur(12px)', border:'1px solid rgba(232,100,29,0.12)', borderRadius:24, padding:32, boxShadow:'0 8px 30px rgba(43,27,18,0.07)', display:'flex', flexDirection:'column', justifyContent:'space-between', transition:'transform 0.3s ease, box-shadow 0.3s ease', cursor:'default', position:'relative' }}>
              <div style={{ position:'absolute', top:20, right:20, fontSize:40, color:'rgba(232,100,29,0.12)', fontFamily:'serif', lineHeight:1 }}>"</div>
              <div>
                <div style={{ display:'flex', gap:4, marginBottom:12 }}>
                  {[1,2,3,4,5].map(s => <span key={s} style={{ color:'#E8641D', fontSize:14 }}>★</span>)}
                </div>
                <p style={{ fontSize:15, color:'rgba(43,27,18,0.82)', fontStyle:'italic', lineHeight:1.7, marginBottom:20 }}>"{r.q}"</p>
              </div>
              <div style={{ display:'flex', alignItems:'center', gap:12, paddingTop:16, borderTop:'1px solid rgba(43,27,18,0.08)' }}>
                <img src={r.img} alt={r.n} style={{ width:44, height:44, borderRadius:'50%', objectFit:'cover', border:'2px solid #E8641D' }} />
                <div><p style={{ fontFamily:'"Playfair Display",serif', fontWeight:700, fontSize:15, color:'#2B1B12' }}>{r.n}</p><p style={{ fontSize:11, color:'rgba(43,27,18,0.55)' }}>{r.loc}</p></div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export const DownloadCTA = () => (
  <section id="download" style={{ position:'relative', width:'100%', padding:'128px 24px', background:'#1A100B', overflow:'hidden', textAlign:'center' }}>
    <div className="animate-rotate-slow" style={{ position:'absolute', top:'50%', left:'50%', transform:'translate(-50%,-50%)', width:900, height:900, borderRadius:'50%', background:'conic-gradient(from 0deg,rgba(255,211,77,0.15),transparent 30deg,rgba(232,100,29,0.12),transparent 60deg,rgba(255,211,77,0.1),transparent 90deg)', pointerEvents:'none', opacity:0.6 }} />
    <div style={{ position:'absolute', inset:0, background:'radial-gradient(ellipse at center, transparent 20%, #1A100B 75%)', pointerEvents:'none' }} />
    <div style={{ maxWidth:800, margin:'0 auto', position:'relative', zIndex:1, display:'flex', flexDirection:'column', alignItems:'center' }}>
      <motion.div initial={{ scale:0.8, opacity:0 }} whileInView={{ scale:1, opacity:1 }} viewport={{ once:true }} transition={{ duration:1 }} style={{ position:'relative', marginBottom:32 }}>
        <div className="animate-halo-pulse" style={{ width:140, height:140, borderRadius:'50%', border:'2px solid #FFD34D', background:'rgba(43,27,18,0.9)', display:'flex', alignItems:'center', justifyContent:'center', fontSize:72, color:'#FFD34D', fontFamily:'"Rozha One",serif', boxShadow:'0 0 80px rgba(255,211,77,0.6)', cursor:'pointer' }}>ॐ</div>
      </motion.div>
      <motion.h3 initial={{ opacity:0, y:20 }} whileInView={{ opacity:1, y:0 }} viewport={{ once:true }} transition={{ delay:0.2, duration:0.8 }}
        style={{ fontFamily:'"Rozha One",serif', fontSize:'clamp(28px,5vw,52px)', color:'#FFD34D', letterSpacing:6, marginBottom:16, textShadow:'0 0 30px rgba(255,211,77,0.5)' }}>।। जय श्री राम ।।</motion.h3>
      <motion.h2 initial={{ opacity:0, y:20 }} whileInView={{ opacity:1, y:0 }} viewport={{ once:true }} transition={{ delay:0.3, duration:0.8 }}
        style={{ fontFamily:'"Playfair Display",serif', fontSize:'clamp(28px,5vw,52px)', fontWeight:700, color:'#fff', marginBottom:16 }}>
        Begin Your <span style={{ background:'linear-gradient(135deg,#FFF5D6,#FFD34D,#E8641D)', WebkitBackgroundClip:'text', WebkitTextFillColor:'transparent', fontStyle:'italic' }}>Divine Sadhana</span>
      </motion.h2>
      <motion.p initial={{ opacity:0, y:20 }} whileInView={{ opacity:1, y:0 }} viewport={{ once:true }} transition={{ delay:0.4, duration:0.8 }} style={{ fontSize:18, color:'rgba(255,255,255,0.75)', fontWeight:300, maxWidth:600, marginBottom:40, lineHeight:1.7 }}>
        Download now and connect with authentic Pandits, fresh pooja supplies, Gita insights, and daily mantra reminders.
      </motion.p>
      <motion.div initial={{ opacity:0, y:20 }} whileInView={{ opacity:1, y:0 }} viewport={{ once:true }} transition={{ delay:0.5, duration:0.8 }} style={{ display:'flex', flexWrap:'wrap', gap:16, justifyContent:'center' }}>
        <a href="#" className="gold-primary-button" style={{ padding:'16px 36px', borderRadius:999, display:'flex', alignItems:'center', gap:10, textDecoration:'none', fontSize:16, fontWeight:700, boxShadow:'0 0 35px rgba(232,100,29,0.5)' }}>
          <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor"><path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.6 3,21.09 3,20.5M16.81,15.12L6.81,8.88L14.81,13.12L16.81,15.12M4.55,1.27L14.28,11.01L12.28,13.01L4.55,5.28Z"/></svg>
          Get it on Google Play
        </a>
      </motion.div>
    </div>
  </section>
);

export const Footer = () => (
  <footer style={{ background:'#0F0805', padding:'40px 24px', borderTop:'1px solid rgba(255,255,255,0.06)' }}>
    <div style={{ maxWidth:1280, margin:'0 auto', display:'flex', flexWrap:'wrap', alignItems:'center', justifyContent:'space-between', gap:16, textAlign:'center' }}>
      <div style={{ display:'flex', alignItems:'center', gap:10 }}>
        <div style={{ width:32, height:32, borderRadius:'50%', border:'1px solid rgba(255,211,77,0.4)', background:'rgba(0,0,0,0.4)', display:'flex', alignItems:'center', justifyContent:'center', color:'#FFD34D', fontFamily:'"Rozha One",serif', fontSize:14 }}>ॐ</div>
        <span style={{ fontFamily:'"Playfair Display",serif', fontSize:18, fontWeight:700, color:'#fff', letterSpacing:2 }}>Mits Sadhana</span>
      </div>
      <p style={{ fontFamily:'"Rozha One",serif', fontSize:16, color:'#FFD34D', letterSpacing:4 }}>।। जय श्री राम ।।</p>
      <p style={{ fontSize:12, color:'rgba(255,255,255,0.35)' }}>© {new Date().getFullYear()} Mits Sadhana. All Divine Rights Reserved.</p>
    </div>
  </footer>
);
