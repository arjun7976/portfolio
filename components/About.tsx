"use client";

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const highlights = [
    "Docker", "Jenkins", "LangChain", "Gemini", "Prompt Engineering"
  ];

  return (
    <section id="about" ref={ref} className="relative py-32 px-6">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-purple-950/10 to-black"></div>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl"></div>

      <div className="relative z-10 max-w-6xl mx-auto">
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-7xl font-bold mb-4">
            <span className="bg-gradient-to-r from-white to-purple-300 bg-clip-text text-transparent">
              ABOUT ME
            </span>
          </h2>
          <motion.div 
            initial={{ scaleX: 0 }}
            animate={isInView ? { scaleX: 1 } : {}}
            transition={{ duration: 1, delay: 0.5 }}
            className="w-24 h-1 bg-gradient-to-r from-purple-500 to-violet-600 mx-auto rounded-full"
          ></motion.div>
        </motion.div>

        {/* Content Grid */}
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Profile Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative"
          >
            <div className="relative w-80 h-80 mx-auto">
              {/* Glowing Border */}
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500 via-violet-500 to-purple-600 rounded-2xl blur opacity-75"></div>
              <div className="relative w-full h-full bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl overflow-hidden border border-purple-500/30">
                {/* Placeholder for profile image */}
                <div className="w-full h-full bg-gradient-to-br from-purple-900/20 to-violet-900/20 flex items-center justify-center">
                  <div className="text-6xl text-purple-300">AP</div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Bio Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="space-y-6"
          >
            <div className="text-lg md:text-xl text-gray-300 leading-relaxed space-y-4">
              <p>
                <span className="font-semibold text-white">Arjun Prajapat</span> — Final-year BCA (AI & Data Science) student building privacy-first AI systems. 
                Skilled in <span className="text-purple-300 font-medium">Docker, Linux, Jenkins, Python, Git, Streamlit, LangChain & Prompt Engineering</span>.
              </p>
              <p>
                Google-certified in GenAI, NLP, Gemini & Vertex AI. My mission is to build secure, human-centric solutions that matter.
              </p>
            </div>

            {/* Highlights */}
            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-purple-200">Key Expertise</h3>
              <div className="flex flex-wrap gap-3">
                {highlights.map((skill, index) => (
                  <motion.span
                    key={skill}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ duration: 0.5, delay: 0.7 + index * 0.1 }}
                    className="px-4 py-2 bg-gradient-to-r from-purple-900/30 to-violet-900/30 border border-purple-500/30 rounded-full text-purple-200 text-sm font-medium backdrop-blur-sm"
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </div>

            {/* Location & Contact */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.9 }}
              className="pt-6 border-t border-purple-500/20"
            >
              <div className="flex flex-col sm:flex-row gap-4 text-gray-400">
                <div className="flex items-center gap-2">
                  <span className="text-purple-400">📍</span>
                  <span>Jaipur, Rajasthan</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-purple-400">🎓</span>
                  <span>BCA (AI & Data Science)</span>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;