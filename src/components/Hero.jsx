import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { FloatingPetals } from './AmbientDecor';

// Ambient floating particles canvas
const AmbientParticles = () => {
  const canvasRef = useRef(null);
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let raf;
    const resize = () => { canvas.width = window.innerWidth; canvas.height = window.innerHeight; };
    resize();
    window.addEventListener('resize', resize);
    const pts = Array.from({ length: 50 }, () => ({
      x: Math.random() * window.innerWidth,
      y: Math.random() * window.innerHeight,
      r: Math.random() * 2.5 + 0.8,
      gold: Math.random() > 0.4,
      a: Math.random() * 0.7 + 0.2,
      vy: -(Math.random() * 0.35 + 0.1),
      vx: (Math.random() - 0.5) * 0.15,
      pd: 1, ps: Math.random() * 0.015 + 0.004,
    }));
    const tick = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      pts.forEach(p => {
        p.y += p.vy; p.x += p.vx; p.a += p.ps * p.pd;
        if (p.a >= 0.9 || p.a <= 0.1) p.pd *= -1;
        if (p.y < -10) { p.y = canvas.height + 10; p.x = Math.random() * canvas.width; }
        ctx.save();
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = p.gold ? `rgba(255,211,77,${p.a})` : `rgba(232,100,29,${p.a})`;
        ctx.shadowColor = '#FFD34D';
        ctx.shadowBlur = 10;
        ctx.fill();
        ctx.restore();
      });
      raf = requestAnimationFrame(tick);
    };
    tick();
    return () => { window.removeEventListener('resize', resize); cancelAnimationFrame(raf); };
  }, []);
  return <canvas ref={canvasRef} style={{ position:'absolute', inset:0, width:'100%', height:'100%', zIndex:10, pointerEvents:'none' }} />;
};

export const Hero = () => {
  return (
    <section className="hero-section" style={{ position:'relative', width:'100%', minHeight:'100dvh', overflow:'hidden', display:'flex', flexDirection:'column', justifyContent:'space-between', alignItems:'center', backgroundColor:'#0d0500', color:'#fff', userSelect:'none' }}>

      {/* Background */}
      <div style={{ position:'absolute', inset:0, zIndex:0, overflow:'hidden' }}>
        <img src="/image.png" alt="Varanasi Ghat" className="animate-ken-burns" style={{ width:'100%', height:'100%', objectFit:'cover', objectPosition:'center 30%', filter:'brightness(1.0) saturate(1.1)' }} />
        {/* Subtle bottom gradient only */}
        <div style={{ position:'absolute', inset:0, background:'linear-gradient(to top, rgba(10,4,1,0.85) 0%, rgba(0,0,0,0.2) 50%, rgba(0,0,0,0.4) 100%)' }} />
      </div>

      <AmbientParticles />

      <FloatingPetals count={10} />

      {/* Top Nav */}
      <motion.header initial={{ opacity:0, y:-20 }} animate={{ opacity:1, y:0 }} transition={{ duration:0.8 }}
        className="hero-nav"
        style={{ position:'relative', zIndex:20, width:'100%', maxWidth:1280, padding:'16px 24px', display:'flex', justifyContent:'space-between', alignItems:'center' }}>
        <div style={{ display:'flex', alignItems:'center', gap:10 }}>
          <div className="animate-halo-pulse hero-nav-om" style={{ width:36, height:36, borderRadius:'50%', border:'1px solid rgba(255,211,77,0.5)', background:'rgba(0,0,0,0.4)', backdropFilter:'blur(12px)', display:'flex', alignItems:'center', justifyContent:'center', fontSize:18, color:'#FFD34D', fontFamily:'"Rozha One", serif' }}>ॐ</div>
          <span className="hero-nav-title" style={{ fontFamily:'"Playfair Display", serif', fontSize:22, fontWeight:700, letterSpacing:1.5, background:'linear-gradient(135deg,#FFF5D6,#FFD34D,#E8641D)', WebkitBackgroundClip:'text', WebkitTextFillColor:'transparent' }}>Mits Sadhana</span>
        </div>
        <div style={{ display:'flex', alignItems:'center', gap:16 }}>
          <span className="hero-nav-ram" style={{ fontFamily:'"Rozha One",serif', color:'#FFD34D', fontSize:14, letterSpacing:2, textShadow:'0 0 15px rgba(255,211,77,0.6)' }}>।। जय श्री राम ।।</span>
          <a href="#download" className="glass-button" style={{ padding:'6px 16px', borderRadius:999, fontSize:11, fontWeight:600, textDecoration:'none', letterSpacing:1, whiteSpace:'nowrap' }}>Divine App</a>
        </div>
      </motion.header>

      {/* Center Content */}
      <div className="hero-center-content" style={{ position:'relative', zIndex:20, flex:1, display:'flex', flexDirection:'column', justifyContent:'center', alignItems:'center', textAlign:'center', padding:'16px 20px', maxWidth:900, margin:'0 auto' }}>

        {/* Om Badge */}
        <motion.div initial={{ scale:0.8, opacity:0 }} animate={{ scale:1, opacity:1 }} transition={{ duration:1, ease:[0.16,1,0.3,1] }} className="hero-om-container" style={{ marginBottom:20, position:'relative' }}>
          <div className="animate-pulse-ring" style={{ position:'absolute', inset:0, borderRadius:'50%', border:'1.5px solid rgba(255,211,77,0.6)' }} />
          <div className="animate-pulse-ring" style={{ position:'absolute', inset:0, borderRadius:'50%', border:'1.5px solid rgba(232,100,29,0.5)', animationDelay:'1.2s' }} />
          <div className="animate-halo-pulse hero-main-om" style={{ width:96, height:96, borderRadius:'50%', border:'2px solid #FFD34D', background:'rgba(43,27,18,0.85)', backdropFilter:'blur(20px)', display:'flex', alignItems:'center', justifyContent:'center', fontSize:48, color:'#FFD34D', fontFamily:'"Rozha One",serif', cursor:'pointer' }}>ॐ</div>
          <div style={{ position:'absolute', inset:-10, borderRadius:'50%', border:'1px solid rgba(232,100,29,0.3)', animation:'ping 2s cubic-bezier(0,0,0.2,1) infinite', opacity:0.4, pointerEvents:'none' }} />
        </motion.div>

        {/* Headline */}
        <motion.h1 initial={{ opacity:0, y:30 }} animate={{ opacity:1, y:0 }} transition={{ duration:0.9, delay:0.3 }}
          style={{ fontFamily:'"Playfair Display",serif', fontSize:'clamp(36px,7vw,80px)', fontWeight:900, lineHeight:1.1, marginBottom:12, textShadow:'0 4px 30px rgba(0,0,0,0.5)' }}>
          Mits&nbsp;<span style={{ fontStyle:'italic', fontWeight:400, background:'linear-gradient(135deg,#FFF5D6,#FFD34D,#E8641D)', WebkitBackgroundClip:'text', WebkitTextFillColor:'transparent' }}>Sadhana</span>
        </motion.h1>

        {/* Gold Line */}
        <motion.div initial={{ width:0, opacity:0 }} animate={{ width:160, opacity:1 }} transition={{ duration:1.2, delay:0.6 }}
          style={{ height:2, background:'linear-gradient(90deg,transparent,#FFD34D,#E8641D,#FFD34D,transparent)', borderRadius:999, marginBottom:14 }} />

        {/* Subtitle */}
        <motion.p initial={{ opacity:0, y:20 }} animate={{ opacity:1, y:0 }} transition={{ duration:0.8, delay:0.8 }}
          style={{ fontSize:12, fontWeight:600, letterSpacing:'0.35em', textTransform:'uppercase', color:'#FFB74D', marginBottom:28 }}>
          DIVINE CONNECTIVITY
        </motion.p>

        {/* Buttons */}
        <motion.div initial={{ opacity:0, y:20 }} animate={{ opacity:1, y:0 }} transition={{ duration:0.8, delay:1 }}
          style={{ display:'flex', flexWrap:'wrap', gap:12, justifyContent:'center', alignItems:'center' }}>
          <a href="https://play.google.com/store/apps/details?id=com.rohan2342.MitSadhana" target="_blank" rel="noopener noreferrer" className="gold-primary-button" style={{ padding:'12px 28px', borderRadius:999, display:'flex', alignItems:'center', gap:8, textDecoration:'none', fontSize:13, letterSpacing:1, border:'2px solid #FFD34D' }}>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.6 3,21.09 3,20.5M16.81,15.12L6.81,8.88L14.81,13.12L16.81,15.12M4.55,1.27L14.28,11.01L12.28,13.01L4.55,5.28Z"/></svg>
            Get it on Google Play
          </a>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div initial={{ opacity:0 }} animate={{ opacity:1, y:[0,6,0] }} transition={{ duration:2, repeat:Infinity, ease:'easeInOut', delay:1.2 }}
        onClick={() => document.getElementById('about')?.scrollIntoView({ behavior:'smooth' })}
        style={{ position:'relative', zIndex:20, paddingBottom:20, display:'flex', flexDirection:'column', alignItems:'center', cursor:'pointer', opacity:0.8 }}>
        <span style={{ fontSize:9, textTransform:'uppercase', letterSpacing:'0.25em', color:'#FFD34D', marginBottom:6, fontWeight:500 }}>Scroll to Explore</span>
        <div style={{ width:28, height:28, borderRadius:'50%', border:'1px solid rgba(255,211,77,0.4)', background:'rgba(0,0,0,0.3)', backdropFilter:'blur(8px)', display:'flex', alignItems:'center', justifyContent:'center', color:'#FFD34D', fontSize:14 }}>↓</div>
      </motion.div>

    </section>
  );
};
