"use client";

import { motion, useInView } from 'framer-motion';
import { useRef, useState } from 'react';

const Skills = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [activeCategory, setActiveCategory] = useState(0);

  const skillCategories = [
    {
      title: "Frontend",
      skills: ["HTML", "CSS", "TailwindCSS", "JavaScript"],
      color: "from-blue-500 to-cyan-500"
    },
    {
      title: "Backend",
      skills: ["Python", "Flask", "API Development"],
      color: "from-green-500 to-emerald-500"
    },
    {
      title: "OS & Security",
      skills: ["Linux (RHEL 9)", "Bash", "SSH"],
      color: "from-red-500 to-orange-500"
    },
    {
      title: "AI Tools",
      skills: ["Streamlit", "Gemini API", "LangChain"],
      color: "from-purple-500 to-violet-500"
    },
    {
      title: "DevOps",
      skills: ["Docker", "Jenkins", "Git", "GitHub"],
      color: "from-indigo-500 to-blue-500"
    },
    {
      title: "Google Badges",
      skills: ["Prompt Design", "Gemini", "Imagen"],
      color: "from-yellow-500 to-orange-500"
    },
    {
      title: "Agentic AI",
      skills: ["LLMs", "AI Agents", "Generative AI"],
      color: "from-pink-500 to-rose-500"
    }
  ];

  return (
    <section id="skills" ref={ref} className="relative py-32 px-6">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-black to-purple-950/20"></div>
      
      <div className="relative z-10 max-w-6xl mx-auto">
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h2 className="text-5xl md:text-7xl font-bold mb-4">
            <span className="bg-gradient-to-r from-white to-purple-300 bg-clip-text text-transparent">
              SKILLS
            </span>
          </h2>
          <motion.div 
            initial={{ scaleX: 0 }}
            animate={isInView ? { scaleX: 1 } : {}}
            transition={{ duration: 1, delay: 0.5 }}
            className="w-24 h-1 bg-gradient-to-r from-purple-500 to-violet-600 mx-auto rounded-full"
          ></motion.div>
        </motion.div>

        {/* Skills Content */}
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Rotating Circle - Desktop */}
          <div className="hidden lg:flex justify-center items-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 1, delay: 0.3 }}
              className="relative w-80 h-80"
            >
              {/* Center Circle */}
              <div className="absolute inset-4 rounded-full bg-gradient-to-br from-purple-900/30 to-violet-900/30 border-2 border-purple-500/30 backdrop-blur-sm flex items-center justify-center">
                <div className="text-center">
                  <h3 className="text-2xl font-bold text-white mb-2">
                    {skillCategories[activeCategory].title}
                  </h3>
                  <div className="space-y-1">
                    {skillCategories[activeCategory].skills.map((skill, index) => (
                      <motion.div
                        key={skill}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.3, delay: index * 0.1 }}
                        className="text-purple-200 text-sm"
                      >
                        {skill}
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Orbit Controls */}
              {skillCategories.map((category, index) => {
                const angle = (index * 360) / skillCategories.length;
                const radian = (angle * Math.PI) / 180;
                const x = Math.cos(radian) * 140;
                const y = Math.sin(radian) * 140;

                return (
                  <motion.button
                    key={category.title}
                    className={`absolute w-12 h-12 rounded-full border-2 ${
                      activeCategory === index 
                        ? 'bg-gradient-to-r ' + category.color + ' border-white shadow-lg' 
                        : 'bg-purple-900/30 border-purple-500/30 hover:border-purple-400'
                    } transition-all duration-300 flex items-center justify-center text-white font-bold text-xs`}
                    style={{
                      left: `calc(50% + ${x}px - 24px)`,
                      top: `calc(50% + ${y}px - 24px)`,
                    }}
                    onClick={() => setActiveCategory(index)}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {index + 1}
                  </motion.button>
                );
              })}
            </motion.div>
          </div>

          {/* Mobile Cards */}
          <div className="lg:hidden space-y-4">
            {skillCategories.map((category, index) => (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-gradient-to-r from-purple-900/20 to-violet-900/20 border border-purple-500/30 rounded-xl p-6 backdrop-blur-sm"
              >
                <h3 className="text-xl font-bold text-white mb-3">{category.title}</h3>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1 bg-purple-500/20 border border-purple-500/30 rounded-full text-purple-200 text-sm"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Skills Navigation - Desktop */}
          <div className="hidden lg:block space-y-4">
            {skillCategories.map((category, index) => (
              <motion.button
                key={category.title}
                initial={{ opacity: 0, x: 50 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                onClick={() => setActiveCategory(index)}
                className={`w-full text-left p-4 rounded-xl border transition-all duration-300 ${
                  activeCategory === index
                    ? 'bg-gradient-to-r from-purple-900/30 to-violet-900/30 border-purple-500 text-white'
                    : 'bg-purple-900/10 border-purple-500/30 text-gray-300 hover:border-purple-400 hover:text-white'
                }`}
              >
                <h3 className="text-lg font-semibold">{category.title}</h3>
                <p className="text-sm opacity-70">{category.skills.join(' • ')}</p>
              </motion.button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;