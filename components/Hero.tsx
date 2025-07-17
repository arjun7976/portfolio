"use client";

import { useEffect, useRef, useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const Hero: React.FC = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [0, -100]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.8]);

  const [currentTech, setCurrentTech] = useState<number>(0);
  const techStack = [
    "Artificial Intelligence & Machine Learning",
    "Docker & Linux Automation", 
    "Real-Time Emergency Systems",
    "CI/CD & DevOps",
    "Agentic AI & Voice Interfaces"
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTech((prev: number) => (prev + 1) % techStack.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [techStack.length]);

  return (
    <section id="home" ref={heroRef} className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Hero Content */}
      <motion.div 
        style={{ y, opacity, scale }}
        className="relative z-10 text-center px-6 max-w-6xl mx-auto"
      >
        {/* Main Heading */}
        <motion.h1 
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="text-6xl md:text-8xl lg:text-9xl font-bold mb-6 bg-gradient-to-b from-white via-purple-100 to-purple-300 bg-clip-text text-transparent"
        >
          Arjun Prajapat
        </motion.h1>

        {/* Subtitle */}
        <motion.p 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="text-xl md:text-2xl text-gray-300 mb-12 leading-relaxed max-w-4xl mx-auto"
        >
          Engineering Intelligent Solutions with AI, DevOps & Purpose
        </motion.p>

        {/* Tech Marquee */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.2 }}
          className="relative overflow-hidden"
        >
          <div className="bg-gradient-to-r from-purple-900/20 to-violet-900/20 backdrop-blur-sm border border-purple-500/30 rounded-full px-8 py-4 mb-12">
            <motion.p 
              key={currentTech}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="text-lg text-purple-200 font-medium text-center"
            >
              {techStack[currentTech]}
            </motion.p>
          </div>
        </motion.div>

        {/* CTA Buttons */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.5 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <motion.button
            whileHover={{ scale: 1.05, boxShadow: "0 20px 40px rgba(168, 85, 247, 0.4)" }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-4 bg-gradient-to-r from-purple-600 to-violet-600 text-white font-semibold rounded-full border border-purple-500/50 hover:border-purple-400 transition-all duration-300"
            onClick={() => document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' })}
          >
            View My Work
          </motion.button>
          
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-4 bg-transparent text-purple-200 font-semibold rounded-full border border-purple-500/50 hover:border-purple-400 hover:bg-purple-500/10 transition-all duration-300"
            onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Get In Touch
          </motion.button>
        </motion.div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 2 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="flex flex-col items-center text-purple-300"
        >
          <span className="text-sm mb-2">Scroll to explore</span>
          <div className="w-0.5 h-8 bg-gradient-to-b from-purple-500 to-transparent"></div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;