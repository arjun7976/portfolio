"use client";

import { useEffect, useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Skills from '@/components/Skills';
import Journey from '@/components/Journey';
import Projects from '@/components/Projects';
import Internship from '@/components/Internship';
import Contact from '@/components/Contact';
import FloatingSocial from '@/components/FloatingSocial';
import ParticleBackground from '@/components/ParticleBackground';
import Certifications from '@/components/Certifications';
import CaseStudy from '@/components/CaseStudy';

export default function Home() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  const opacity = useTransform(scrollYProgress, [0, 0.1], [1, 0.8]);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const cursor = document.querySelector('.cursor-glow') as HTMLElement;
      if (cursor) {
        cursor.style.left = e.clientX + 'px';
        cursor.style.top = e.clientY + 'px';
      }
    };

    document.addEventListener('mousemove', handleMouseMove);
    return () => document.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div ref={containerRef} className="relative min-h-screen bg-black text-white overflow-x-hidden">
      {/* Custom Cursor */}
      <div className="cursor-glow fixed w-6 h-6 pointer-events-none z-50 rounded-full bg-gradient-to-r from-purple-500 to-violet-600 opacity-50 blur-sm transform -translate-x-1/2 -translate-y-1/2" />
      
      {/* Background Particles */}
      <motion.div style={{ opacity }} className="fixed inset-0 z-0">
        <ParticleBackground />
      </motion.div>

      {/* Navigation */}
      <Navbar />

      {/* Main Content */}
      <main className="relative z-10">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <CaseStudy />
        <Internship />
        <Certifications />
        <Journey />
        <Contact />
      </main>

      {/* Floating Social */}
      <FloatingSocial />
    </div>
  );
}