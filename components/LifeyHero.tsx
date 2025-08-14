"use client";

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';

const LifeyHero = () => {
  // Animation variants
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.3,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  const fadeIn = {
    hidden: { opacity: 0 },
    show: { opacity: 1, transition: { duration: 0.8 } },
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-b from-[#0b0218] to-black">
      {/* Particle Background */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.3 }}
        transition={{ duration: 1.5 }}
        className="absolute inset-0 z-0"
      >
        <div className="absolute inset-0 bg-[url('/images/grid.svg')] opacity-5" />
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-purple-500"
            style={{
              width: Math.random() * 6 + 2 + 'px',
              height: Math.random() * 6 + 2 + 'px',
              left: Math.random() * 100 + '%',
              top: Math.random() * 100 + '%',
            }}
            animate={{
              y: [0, (Math.random() - 0.5) * 40],
              x: [0, (Math.random() - 0.5) * 40],
              opacity: [0.3, 0.7, 0.3],
            }}
            transition={{
              duration: 3 + Math.random() * 5,
              repeat: Infinity,
              repeatType: 'reverse',
              ease: 'easeInOut',
            }}
          />
        ))}
      </motion.div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="flex flex-col lg:flex-row items-center justify-between gap-12 py-20"
        >
          {/* Left Column - Content */}
          <motion.div 
            className="flex-1 text-center lg:text-left"
            variants={container}
          >
            {/* Logo */}
            <motion.div variants={item} className="mb-8 lg:mb-12">
              <div className="inline-block p-2 bg-gradient-to-r from-purple-900/30 to-violet-900/30 backdrop-blur-sm rounded-2xl">
                <div className="w-16 h-16 sm:w-20 sm:h-20 relative">
                  <Image
                    src="/images/lifey-logo.png"
                    alt="Lifey Logo"
                    fill
                    className="object-contain"
                    priority
                  />
                </div>
              </div>
            </motion.div>

            <motion.h1 
              variants={item}
              className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-white via-purple-100 to-violet-200 bg-clip-text text-transparent"
            >
              Lifey
            </motion.h1>
            
            <motion.p 
              variants={item}
              className="text-xl md:text-2xl text-purple-100 font-medium mb-6"
            >
              AI Emergency System
            </motion.p>
            
            <motion.p 
              variants={item}
              className="text-lg text-purple-200 mb-8 max-w-2xl mx-auto lg:mx-0"
            >
              Saving lives faster than ever before.
            </motion.p>

            <motion.p 
              variants={item}
              className="text-purple-300 mb-10"
            >
              Founded by Arjun Prajapat
            </motion.p>

            <motion.div 
              variants={item}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
            >
              <Link
                href="/lifey"
                className="px-8 py-4 bg-gradient-to-r from-purple-600 to-violet-600 text-white font-medium rounded-full hover:from-purple-500 hover:to-violet-500 transition-all duration-300 text-center shadow-lg hover:shadow-purple-500/30"
              >
                Explore Lifey
              </Link>
              <a
                href="https://getlifey.netlify.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-4 border-2 border-purple-500/30 text-white font-medium rounded-full hover:bg-purple-500/10 transition-all duration-300 text-center"
              >
                Visit Website
              </a>
            </motion.div>
          </motion.div>

          {/* Right Column - Founder Photo */}
          <motion.div 
            variants={fadeIn}
            className="flex-1 flex justify-center lg:justify-end"
          >
            <div className="relative w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96">
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-purple-500 to-violet-600 p-1 animate-pulse-slow">
                <div className="relative w-full h-full rounded-full overflow-hidden bg-black">
                  <Image
                    src="/images/arjun-founder.jpg"
                    alt="Arjun Prajapat - Founder"
                    fill
                    className="object-cover"
                    priority
                  />
                </div>
                <div className="absolute inset-0 rounded-full border-4 border-transparent hover:border-purple-400/30 transition-all duration-300" />
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.5, duration: 0.8 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center"
      >
        <div className="w-6 h-10 border-2 border-purple-400/50 rounded-full flex justify-center p-1">
          <motion.div
            className="w-1 h-2 bg-purple-400 rounded-full"
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          />
        </div>
        <span className="mt-2 text-sm text-purple-300/70">Scroll</span>
      </motion.div>
    </section>
  );
};

export default LifeyHero;
