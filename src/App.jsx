import React from 'react';
import { Hero } from './components/Hero';
import { About, Features, HowItWorks } from './components/Sections1';
import { EcoPickupSection } from './components/EcoPickupSection';
import { AppShowcase, Testimonials, DownloadCTA, Footer } from './components/Sections2';

const ShlokaMarquee = () => {
  const shlokas = [
    '।। ॐ शांति शांति शांति ॐ ।।',
    'सर्वे भवन्तु सुखिनः',
    'ॐ नमः शिवाय',
    'हरे कृष्ण हरे कृष्ण',
    'जय श्री राम',
    'गणपति बप्पा मोरया',
    'शुभं करोति कल्याणम्',
    'ॐ गं गणपतये नमः',
    'जय माता दी',
    'ॐ नमो भगवते वासुदेवाय',
  ];
  const row = [...shlokas, ...shlokas];
  return (
    <div style={{ position:'relative', width:'100%', padding:'18px 0', background:'linear-gradient(90deg,#1A100B,#2B1B12,#1A100B)', borderTop:'1px solid rgba(255,211,77,0.15)', borderBottom:'1px solid rgba(255,211,77,0.15)', overflow:'hidden' }}>
      <div className="animate-marquee" style={{ display:'flex', whiteSpace:'nowrap', width:'max-content' }}>
        {row.map((s, i) => (
          <span key={i} style={{ fontFamily:'"Rozha One",serif', fontSize:'clamp(13px,2vw,18px)', color:'#FFD34D', letterSpacing:3, margin:'0 32px', opacity:0.85, textShadow:'0 0 12px rgba(255,211,77,0.4)' }}>
            ✦ {s} ✦
          </span>
        ))}
      </div>
    </div>
  );
};

export function App() {
  return (
    <div style={{ minHeight:'100vh', background:'#1A100B' }}>
      <Hero />
      <ShlokaMarquee />
      <About />
      <Features />
      <ShlokaMarquee />
      <EcoPickupSection />
      <HowItWorks />
      <AppShowcase />
      <Testimonials />
      <DownloadCTA />
      <Footer />
    </div>
  );
}

export default App;
