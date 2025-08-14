// About.tsx
"use client";

import { motion } from 'framer-motion';
import Image from 'next/image';

// Animation variants
const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
} as const;

const item = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut"
    }
  }
} as const;

const About = () => {
  return (
    <section id="about" className="py-20 px-4 relative overflow-hidden bg-gradient-to-b from-gray-900 to-black">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-[url('/images/grid.svg')] bg-center opacity-5"></div>
      
      <div className="relative z-10 max-w-6xl mx-auto">
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "0px 0px -100px 0px" }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600">
            About Me
          </h2>
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="w-24 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto rounded-full"
          />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Profile Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="relative"
          >
            <div className="relative w-full aspect-square max-w-md mx-auto">
              <Image
                src="/images/arjun-founder.jpg"
                alt="Arjun Prajapat"
                fill
                className="rounded-2xl object-cover border-4 border-purple-500/20 shadow-2xl"
                sizes="(max-width: 768px) 90vw, 40vw"
                priority
              />
              <div className="absolute inset-0 rounded-2xl border-4 border-transparent bg-gradient-to-br from-purple-500/10 to-pink-500/10 mix-blend-overlay" />
            </div>
          </motion.div>

          {/* About Content */}
          <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "0px 0px -100px 0px" }}
            className="space-y-8"
          >
            <motion.div variants={item}>
              <h3 className="text-2xl font-bold text-white mb-4">Who I Am</h3>
              <p className="text-gray-300 leading-relaxed">
                I'm a passionate developer and entrepreneur with expertise in AI, web development, and cloud technologies. 
                As the founder of Lifey, I'm dedicated to creating innovative solutions that make a real difference in people's lives.
              </p>
            </motion.div>

            {/* Education Section */}
            <motion.div 
              variants={item}
              className="bg-gray-800/50 backdrop-blur-sm p-6 rounded-xl border border-gray-700/50"
            >
              <h3 className="text-2xl font-bold text-white mb-4 flex items-center">
                <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  className="h-6 w-6 mr-2 text-purple-400" 
                  fill="none" 
                  viewBox="0 0 24 24" 
                  stroke="currentColor"
                >
                  <path 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    strokeWidth={2} 
                    d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" 
                  />
                </svg>
                Education
              </h3>
              <div className="space-y-4">
                <div>
                  <h4 className="text-lg font-semibold text-white">BCA in AI & Data Science</h4>
                  <p className="text-purple-300">Vivekananda Global University</p>
                  <p className="text-gray-400 text-sm">Jaipur, Rajasthan</p>
                  <p className="text-gray-400 text-sm mt-1">
                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-purple-900/50 text-purple-200">
                      Currently Pursuing • 4th Semester
                    </span>
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Skills Section */}
            <motion.div variants={item} className="pt-4">
              <h3 className="text-2xl font-bold text-white mb-4">My Skills</h3>
              <div className="flex flex-wrap gap-2">
                {['Python', 'Docker', 'Jenkins', 'LangChain', 'Gemini', 'Prompt Engineering', 'JavaScript', 'React', 'Next.js', 'Node.js', 'MongoDB', 'AWS', 'AI/ML'].map((skill, i) => (
                  <motion.span
                    key={skill}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1 * i }}
                    className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-gray-800 text-gray-200 border border-gray-700"
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;