"use client";

import { useEffect, useState } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

const CustomCursor = () => {
  const [isHovered, setIsHovered] = useState(false);
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);
  
  // Create smooth spring animations
  const springConfig = { damping: 25, stiffness: 400 };
  const smoothX = useSpring(cursorX, springConfig);
  const smoothY = useSpring(cursorY, springConfig);

  useEffect(() => {
    const moveCursor = (e: MouseEvent) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
    };

    // Add hover detection for interactive elements
    const handleMouseEnter = () => setIsHovered(true);
    const handleMouseLeave = () => setIsHovered(false);

    const interactiveElements = document.querySelectorAll('a, button, [role="button"], .interactive');

    interactiveElements.forEach(element => {
      element.addEventListener('mouseenter', handleMouseEnter);
      element.addEventListener('mouseleave', handleMouseLeave);
    });

    window.addEventListener('mousemove', moveCursor);

    return () => {
      window.removeEventListener('mousemove', moveCursor);
      interactiveElements.forEach(element => {
        element.removeEventListener('mouseenter', handleMouseEnter);
        element.removeEventListener('mouseleave', handleMouseLeave);
      });
    };
  }, [cursorX, cursorY]);

  return (
    <>
      {/* Main cursor */}
      <motion.div
        style={{
          translateX: smoothX,
          translateY: smoothY,
        }}
        animate={{
          scale: isHovered ? 1.5 : 1,
          opacity: isHovered ? 0.7 : 0.5,
        }}
        className="fixed top-0 left-0 w-8 h-8 pointer-events-none z-50 mix-blend-difference"
      >
        <div className="relative w-full h-full">
          <div className="absolute inset-0 rounded-full bg-white" />
        </div>
      </motion.div>

      {/* Trailing cursor */}
      <motion.div
        style={{
          translateX: smoothX,
          translateY: smoothY,
        }}
        animate={{
          scale: isHovered ? 0.5 : 0.8,
          opacity: isHovered ? 0.3 : 0.15,
        }}
        transition={{ delay: 0.05 }}
        className="fixed top-0 left-0 w-12 h-12 pointer-events-none z-40 mix-blend-difference"
      >
        <div className="relative w-full h-full">
          <div className="absolute inset-0 rounded-full bg-white blur-sm" />
        </div>
      </motion.div>

      {/* Style overrides for the default cursor */}
      <style jsx global>{`
        * {
          cursor: none !important;
        }
        
        /* Ensure cursor is visible on white backgrounds */
        .mix-blend-difference {
          mix-blend-mode: difference;
        }
      `}</style>
    </>
  );
};

export default CustomCursor; 