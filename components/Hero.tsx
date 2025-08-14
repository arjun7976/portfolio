"use client";

import { useEffect, useRef, useState } from 'react';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import Link from 'next/link';

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
    <section 
      id="home" 
      ref={heroRef} 
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Hero Content */}
      <motion.div 
        style={{ y, opacity, scale }}
        className="relative z-10 text-center px-6 max-w-6xl mx-auto"
      >
        {/* Main Heading */}
        <motion.h1 
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-6xl md:text-8xl lg:text-9xl font-bold mb-6 bg-gradient-to-b from-white via-purple-100 to-purple-300 bg-clip-text text-transparent"
        >
          Arjun Prajapat
        </motion.h1>

        {/* Tech Stack Rotator */}
        <div className="h-16 md:h-20 lg:h-24 mb-8 overflow-hidden">
          <AnimatePresence mode="wait">
            <motion.p
              key={currentTech}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
              className="text-lg md:text-2xl lg:text-3xl text-gray-300 font-medium"
            >
              {techStack[currentTech]}
            </motion.p>
          </AnimatePresence>
        </div>

        {/* CTA Buttons */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8, ease: "easeOut" }}
          className="flex flex-col sm:flex-row justify-center gap-4 mt-8"
        >
          <Link 
            href="#contact"
            className="px-8 py-4 bg-gradient-to-r from-purple-600 to-indigo-600 text-white rounded-full font-medium hover:opacity-90 transition-opacity"
          >
            Get In Touch
          </Link>
          <Link 
            href="#projects"
            className="px-8 py-4 bg-white/10 text-white rounded-full font-medium hover:bg-white/20 transition-colors"
          >
            View My Work
          </Link>
        </motion.div>
      </motion.div>

      {/* Background Elements */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.3 }}
        transition={{ duration: 1.5, delay: 0.5 }}
        className="absolute inset-0 bg-[url('/images/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]"
      />
      
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-gray-900/50 to-gray-900" />
    </section>
  );
};

export default Hero;
