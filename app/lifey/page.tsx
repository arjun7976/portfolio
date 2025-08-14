"use client";

import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Mic, MapPin, Phone, Server, Shield, Github, ArrowRight, Globe } from 'lucide-react';
import Navbar from '@/components/Navbar';

export default function LifeyPage() {
  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [0, -100]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  const features = [
    {
      icon: Mic,
      title: "Voice-Activated Alerts",
      description: "Instant emergency activation through voice commands, ensuring help is summoned even when hands are occupied."
    },
    {
      icon: MapPin,
      title: "Live GPS + Reverse Geocoding",
      description: "Real-time location tracking with precise address identification for faster emergency response."
    },
    {
      icon: Phone,
      title: "Multi-Channel SOS",
      description: "Simultaneous alerts to emergency contacts, local services, and emergency responders through multiple channels."
    },
    {
      icon: Server,
      title: "Cloud Deployment",
      description: "Scalable cloud infrastructure ensuring 24/7 availability and instant response times during emergencies."
    },
    {
      icon: Shield,
      title: "Panic-Proof UX",
      description: "Intuitive interface designed for high-stress situations with one-touch emergency activation."
    }
  ];

  const scrollToDetails = () => {
    document.getElementById('project-details')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-purple-900/30 text-white">
      <div className="relative min-h-screen">
        <motion.div 
          ref={heroRef}
          style={{ y, opacity }}
          className="relative min-h-screen flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8 text-center overflow-hidden"
        >
          <div className="absolute inset-0 bg-[url('/images/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))] opacity-20"></div>
          
          {/* Lifey Logo */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="w-32 h-32 md:w-40 md:h-40 mb-8 mx-auto z-10"
          >
            <img 
              src="/images/lifey-logo.png" 
              alt="Lifey Logo" 
              className="w-full h-full object-contain"
              onError={(e) => {
                const target = e.target as HTMLImageElement;
                target.onerror = null;
                target.src = 'data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%22160%22%20height%3D%22160%22%20viewBox%3D%220%200%20160%20160%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Crect%20width%3D%22160%22%20height%3D%22160%22%20rx%3D%2230%22%20fill%3D%22%237E22CE%22%2F%3E%3Ctext%20x%3D%2280%22%20y%3D%22100%22%20font-family%3D%22Arial%2C%20sans-serif%22%20font-size%3D%2264%22%20font-weight%3D%22bold%22%20text-anchor%3D%22middle%22%20fill%3D%22white%22%3EL%3C%2Ftext%3E%3C%2Fsvg%3E';
              }}
            />
          </motion.div>

          {/* Background Video */}
          <div className="absolute inset-0 z-0">
            <video
              autoPlay
              loop
              muted
              playsInline
              className="w-full h-full object-cover"
            >
              <source src="https://videos.pexels.com/video-files/854427/854427-hd_1920_1080_30fps.mp4" type="video/mp4" />
            </video>
            <div className="absolute inset-0 bg-black/60"></div>
          </div>

          <Navbar />

          <motion.div 
            style={{ y, opacity }}
            className="relative z-10 text-center px-6 max-w-6xl mx-auto"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.2 }}
              className="mb-8"
            >
              <div className="w-24 h-24 md:w-32 md:h-32 mx-auto bg-gradient-to-br from-purple-500 to-violet-600 rounded-2xl flex items-center justify-center shadow-2xl">
                <span className="text-white text-2xl md:text-3xl font-bold">L</span>
              </div>
            </motion.div>

            <motion.h1 
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.3 }}
              className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6"
            >
              <span className="bg-gradient-to-b from-white via-purple-100 to-purple-300 bg-clip-text text-transparent">
                Lifey
              </span>
              <span className="text-purple-400"> – </span>
              <span className="bg-gradient-to-b from-purple-400 to-violet-500 bg-clip-text text-transparent">
                AI Emergency System
              </span>
            </motion.h1>

            <motion.p 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.6 }}
              className="text-xl md:text-2xl text-gray-300 mb-6 leading-relaxed max-w-4xl mx-auto"
            >
              Real-time emergency alerts, voice activation, and instant SOS – powered by AI to save lives faster than ever before.
            </motion.p>

            <motion.a
              href="https://getlifey.netlify.app/"
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.8 }}
              className="inline-flex items-center gap-2 text-lg text-purple-300 hover:text-purple-200 transition-colors duration-300 mb-8"
            >
              <Globe className="w-5 h-5" />
              🌐 Visit Official Website
            </motion.a>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.9 }}
              className="flex flex-col md:flex-row items-center justify-center gap-6 mb-12"
            >
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 1.1 }}
                className="w-20 h-20 md:w-24 md:h-24 rounded-full bg-gradient-to-br from-purple-500 to-violet-600 flex items-center justify-center shadow-lg border-4 border-purple-500/30"
              >
                <span className="text-white text-xl md:text-2xl font-bold">A</span>
              </motion.div>
              
              <div className="text-center md:text-left">
                <div className="text-lg text-purple-200 font-semibold">👨‍💻 Arjun Prajapat</div>
                <div className="text-purple-300">Founder & CEO</div>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 1.2 }}
              className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            >
              <motion.button
                whileHover={{ scale: 1.05, boxShadow: "0 20px 40px rgba(168, 85, 247, 0.4)" }}
                whileTap={{ scale: 0.95 }}
                onClick={scrollToDetails}
                className="px-8 py-4 bg-gradient-to-r from-purple-600 to-violet-600 text-white font-semibold rounded-full border border-purple-500/50 hover:border-purple-400 transition-all duration-300 flex items-center gap-2"
              >
                View Project Details
                <ArrowRight className="w-5 h-5" />
              </motion.button>
              
              <motion.a
                href="https://getlifey.netlify.app/"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-transparent text-purple-200 font-semibold rounded-full border border-purple-500/50 hover:border-purple-400 hover:bg-purple-500/10 transition-all duration-300 flex items-center gap-2"
              >
                <Globe className="w-5 h-5" />
                Visit Website
              </motion.a>

              <motion.a
                href="https://github.com/arjun7976"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-transparent text-purple-200 font-semibold rounded-full border border-purple-500/50 hover:border-purple-400 hover:bg-purple-500/10 transition-all duration-300 flex items-center gap-2"
              >
                <Github className="w-5 h-5" />
                GitHub
              </motion.a>
            </motion.div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1.5 }}
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
        </motion.div>
      </div>

      <section id="project-details" className="relative py-32 px-6">
        <div className="absolute inset-0 bg-gradient-to-b from-black via-purple-950/10 to-black"></div>
        
        <div className="relative z-10 max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <h2 className="text-4xl md:text-6xl font-bold mb-8">
              <span className="bg-gradient-to-r from-white to-purple-300 bg-clip-text text-transparent">
                Project Overview
              </span>
            </h2>
            <p className="text-xl text-gray-300 leading-relaxed max-w-4xl mx-auto">
              Lifey is an AI-powered real-time emergency assistant designed to provide instant help during life-threatening situations. It enables voice-triggered alerts, live GPS with reverse geocoding, and multi-channel SOS notifications.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ 
                  y: -10,
                  transition: { duration: 0.3 }
                }}
                className="group relative"
              >
                <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-500 via-violet-500 to-purple-600 rounded-2xl blur opacity-20 group-hover:opacity-50 transition-opacity duration-300"></div>
                
                <div className="relative bg-gradient-to-br from-gray-900/80 to-purple-900/20 backdrop-blur-sm border border-purple-500/30 rounded-2xl p-8 h-full">
                  <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-violet-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                    <feature.icon className="w-8 h-8 text-white" />
                  </div>

                  <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-purple-200 transition-colors duration-300">
                    {feature.title}
                  </h3>

                  <p className="text-gray-300 leading-relaxed">
                    {feature.description}
                  </p>

                  <div className="absolute top-8 left-8 w-2 h-2 bg-purple-500/50 rounded-full"></div>
                  <div className="absolute bottom-8 right-8 w-3 h-3 border border-violet-500/30 rounded-full"></div>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <h3 className="text-3xl md:text-4xl font-bold mb-8">
              <span className="bg-gradient-to-r from-white to-purple-300 bg-clip-text text-transparent">
                Tech Stack
              </span>
            </h3>
            <div className="bg-gradient-to-r from-purple-900/20 to-violet-900/20 backdrop-blur-sm border border-purple-500/30 rounded-2xl px-8 py-6 inline-block">
              <p className="text-lg text-purple-200 font-medium">
                Python · Flask · Docker · AWS (SNS, EC2, Lambda) · MongoDB · Twilio · Flutter · Picovoice
              </p>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
