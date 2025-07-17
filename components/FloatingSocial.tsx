"use client";

import { motion, useScroll, useTransform } from 'framer-motion';

const FloatingSocial = () => {
  const { scrollY } = useScroll();
  const scale = useTransform(scrollY, [0, 300], [1, 0.8]);
  const opacity = useTransform(scrollY, [0, 100], [1, 0.8]);

  const socialLinks = [
    {
      name: 'LinkedIn',
      url: 'www.linkedin.com/in/arjun-prajapati-79769o5815',
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
        </svg>
      )
    },
    {
      name: 'GitHub',
      url: 'https://github.com/arjun7976',
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
        </svg>
      )
    },
    {
      name: 'Twitter',
      url: 'https://x.com/arjun__dev',
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z"/>
        </svg>
      )
    }
  ];

  return (
    <motion.div
      style={{ scale, opacity }}
      className="fixed left-6 bottom-6 z-40 flex flex-col space-y-4"
    >
      {socialLinks.map((link, index) => (
        <motion.a
          key={link.name}
          href={link.url}
          target="_blank"
          rel="noopener noreferrer"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
          whileHover={{ 
            scale: 1.2, 
            x: 5,
            transition: { duration: 0.2 }
          }}
          whileTap={{ scale: 0.9 }}
          className="group relative w-12 h-12 bg-gradient-to-r from-purple-900/30 to-violet-900/30 backdrop-blur-sm border border-purple-500/30 rounded-xl flex items-center justify-center text-white hover:border-purple-400 transition-all duration-300"
        >
          {/* Glowing effect on hover */}
          <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-violet-500 rounded-xl opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
          
          {/* Icon */}
          <div className="relative z-10 group-hover:text-purple-200 transition-colors duration-300">
            {link.icon}
          </div>

          {/* Tooltip */}
          <div className="absolute left-full ml-3 px-3 py-1 bg-black/80 text-white text-sm rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none whitespace-nowrap">
            {link.name}
            <div className="absolute left-0 top-1/2 transform -translate-x-1 -translate-y-1/2 w-2 h-2 bg-black/80 rotate-45"></div>
          </div>
        </motion.a>
      ))}

      {/* Vertical Line */}
      <motion.div
        initial={{ scaleY: 0 }}
        animate={{ scaleY: 1 }}
        transition={{ duration: 1, delay: 0.5 }}
        className="w-0.5 h-16 bg-gradient-to-t from-purple-500 to-transparent mx-auto"
      ></motion.div>
    </motion.div>
  );
};

export default FloatingSocial;