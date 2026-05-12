'use client';

import dynamic from 'next/dynamic';
import Navbar from '@/components/portfolio/Navbar';
import Hero from '@/components/portfolio/Hero';
import About from '@/components/portfolio/About';
import Experience from '@/components/portfolio/Experience';
import Projects from '@/components/portfolio/Projects';
import Skills from '@/components/portfolio/Skills';
import Contact from '@/components/portfolio/Contact';
import Footer from '@/components/portfolio/Footer';
import SectionDivider from '@/components/portfolio/SectionDivider';

const ParticleBackground = dynamic(
  () => import('@/components/portfolio/ParticleBackground'),
  { ssr: false }
);
const AIChat = dynamic(() => import('@/components/portfolio/AIChat'), { ssr: false });

export default function Portfolio() {
  return (
    <main className="relative min-h-screen bg-grid">
      <ParticleBackground />
      <Navbar />
      <div className="relative z-10">
        <Hero />
        <SectionDivider />
        <About />
        <SectionDivider />
        <Experience />
        <SectionDivider />
        <Projects />
        <SectionDivider />
        <Skills />
        <SectionDivider />
        <Contact />
        <Footer />
      </div>
      <AIChat />
    </main>
  );
}
