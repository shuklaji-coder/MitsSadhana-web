import React from 'react';
import { TempleGateIntro } from './components/TempleGateIntro';
import { Hero } from './components/Hero';
import { About, Features, HowItWorks } from './components/Sections1';
import { EcoPickupSection } from './components/EcoPickupSection';
import { AppShowcase, Testimonials, DownloadCTA, Footer } from './components/Sections2';

export function App() {
  return (
    <div style={{ minHeight:'100vh', background:'#1A100B' }}>
      <TempleGateIntro />
      <Hero />
      <About />
      <Features />
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
