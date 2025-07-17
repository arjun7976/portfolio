"use client";

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

const Journey = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const journeySteps = [
    {
      title: "Motivation",
      description: "Curiosity to build something different",
      icon: "🚀",
      details: "Started with a passion for creating innovative solutions that make a real difference in people's lives."
    },
    {
      title: "Skills Timeline",
      description: "Linux → Google → LangChain → Docker",
      icon: "📈",
      details: "Progressive learning journey from system administration to cloud technologies and AI development."
    },
    {
      title: "Milestones",
      description: "Internship, SIP App, Executive Dashboard",
      icon: "🎯",
      details: "Key achievements including successful internships and production-ready applications."
    },
    {
      title: "Challenges",
      description: "Live debugging, API bugs, real-time systems",
      icon: "⚡",
      details: "Overcame complex technical challenges in production environments and real-time systems."
    },
    {
      title: "Current Focus",
      description: "CI/CD, GenAI, Agentic AI",
      icon: "🔥",
      details: "Actively working on automation pipelines and next-generation AI agent systems."
    },
    {
      title: "Future Vision",
      description: "Launch AI-powered tech startup",
      icon: "🌟",
      details: "Building towards launching an innovative AI-powered startup that solves real-world problems."
    }
  ];

  return (
    <section id="journey" ref={ref} className="relative py-32 px-6 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-purple-950/20 via-black to-black"></div>
      <div className="absolute top-1/4 right-1/4 w-64 h-64 bg-purple-500/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-violet-500/5 rounded-full blur-3xl"></div>

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h2 className="text-5xl md:text-7xl font-bold mb-4">
            <span className="bg-gradient-to-r from-white to-purple-300 bg-clip-text text-transparent">
              MY AI JOURNEY
            </span>
          </h2>
          <motion.div 
            initial={{ scaleX: 0 }}
            animate={isInView ? { scaleX: 1 } : {}}
            transition={{ duration: 1, delay: 0.5 }}
            className="w-24 h-1 bg-gradient-to-r from-purple-500 to-violet-600 mx-auto rounded-full"
          ></motion.div>
        </motion.div>

        {/* Journey Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {journeySteps.map((step, index) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: 50, rotateX: 15 }}
              animate={isInView ? { opacity: 1, y: 0, rotateX: 0 } : {}}
              transition={{ 
                duration: 0.8, 
                delay: index * 0.2,
                type: "spring",
                stiffness: 100
              }}
              whileHover={{ 
                y: -10, 
                rotateY: 5,
                transition: { duration: 0.3 }
              }}
              className="group perspective-1000"
            >
              <div className="relative">
                {/* Glowing Border */}
                <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-500 via-violet-500 to-purple-600 rounded-2xl blur opacity-30 group-hover:opacity-60 transition-opacity duration-300"></div>
                
                {/* Card Content */}
                <div className="relative bg-gradient-to-br from-gray-900/80 to-purple-900/20 backdrop-blur-sm border border-purple-500/30 rounded-2xl p-8 h-full transform-gpu">
                  {/* Icon */}
                  <div className="text-4xl mb-4 transform group-hover:scale-110 transition-transform duration-300">
                    {step.icon}
                  </div>

                  {/* Title */}
                  <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-purple-200 transition-colors duration-300">
                    {step.title}
                  </h3>

                  {/* Description */}
                  <p className="text-purple-300 font-medium mb-4 text-lg">
                    {step.description}
                  </p>

                  {/* Details */}
                  <p className="text-gray-400 text-sm leading-relaxed">
                    {step.details}
                  </p>

                  {/* Decorative Elements */}
                  <div className="absolute top-4 right-4 w-8 h-8 border border-purple-500/30 rounded-full opacity-20 group-hover:opacity-40 transition-opacity duration-300"></div>
                  <div className="absolute bottom-4 left-4 w-6 h-6 border border-violet-500/30 rounded-full opacity-20 group-hover:opacity-40 transition-opacity duration-300"></div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Connection Lines */}
        <div className="hidden lg:block absolute inset-0 pointer-events-none">
          <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
            <motion.path
              initial={{ pathLength: 0 }}
              animate={isInView ? { pathLength: 1 } : {}}
              transition={{ duration: 2, delay: 1 }}
              d="M 20 30 Q 50 10 80 30 Q 50 50 20 70"
              stroke="url(#gradient)"
              strokeWidth="0.1"
              fill="none"
              opacity="0.3"
            />
            <defs>
              <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#8b5cf6" />
                <stop offset="50%" stopColor="#a855f7" />
                <stop offset="100%" stopColor="#8b5cf6" />
              </linearGradient>
            </defs>
          </svg>
        </div>
      </div>
    </section>
  );
};

export default Journey;