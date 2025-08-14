'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Github, ExternalLink, ArrowRight, Globe } from 'lucide-react';
import Link from 'next/link';

// Enable Framer Motion for this component
const MotionDiv = motion('div');
const MotionA = motion('a');

interface ProjectCardProps {
  title: string;
  description: string;
  technologies: string[];
  githubUrl: string;
  liveUrl?: string;
  featured?: boolean;
  projectUrl?: string;
  officialUrl?: string;
  index: number;
  problemStatement?: string;
  features?: string[];
  challengesSolved?: string[];
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  description,
  technologies,
  githubUrl,
  liveUrl,
  featured = false,
  projectUrl,
  officialUrl,
  problemStatement,
  features,
  challengesSolved,
  index
}) => {
  const [isExpanded, setIsExpanded] = React.useState(false);

  return (
    <MotionDiv
      initial={{ opacity: 0, y: 50, scale: 0.98 }}
      whileInView={{ 
        opacity: 1, 
        y: 0, 
        scale: 1,
        transition: { 
          duration: 0.6, 
          ease: [0.16, 1, 0.3, 1],
          delay: index * 0.15
        }
      }}
      viewport={{ once: true, margin: "-50px" }}
      whileHover={{ 
        y: -8,
        scale: 1.02,
        transition: { 
          duration: 0.3,
          ease: [0.16, 1, 0.3, 1]
        }
      }}
      className={`group relative overflow-visible transition-all duration-500 ${featured ? 'lg:col-span-1' : ''}`}
      style={{ willChange: 'transform' }}
    >
      {/* Animated Glow Effect */}
      <MotionDiv 
        className="absolute inset-0 bg-gradient-to-r from-purple-500/20 via-violet-500/20 to-purple-600/20 rounded-2xl pointer-events-none"
        initial={{ opacity: 0 }}
        whileInView={{ 
          opacity: 0.3,
          transition: { 
            delay: 0.5 + (index * 0.1),
            duration: 1
          }
        }}
      />
      
      {/* Glowing Border */}
      <MotionDiv 
        className="absolute -inset-0.5 bg-gradient-to-r from-purple-500 via-violet-500 to-purple-600 rounded-2xl blur opacity-0 group-hover:opacity-70 pointer-events-none"
        transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
      />
      
      {/* Card Content */}
      <MotionDiv 
        className="relative bg-gradient-to-br from-gray-900/90 to-purple-900/30 backdrop-blur-sm border border-purple-500/20 rounded-2xl p-6 sm:p-8 h-full overflow-visible"
        whileHover={{
          borderColor: "rgba(168, 85, 247, 0.5)",
          transition: { duration: 0.3 }
        }}
        style={{ zIndex: 1 }}
      >
        {/* Subtle background pattern */}
        <div 
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: 'url("data:image/svg+xml,%3Csvg width=\'60\' height=\'60\' viewBox=\'0 0 60 60\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'none\' fill-rule=\'evenodd\'%3E%3Cg fill=\'%23a855f7\' fill-opacity=\'0.4\'%3E%3Cpath d=\'M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z\'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")',
            backgroundSize: '60px 60px'
          }}
        ></div>
        {/* Featured Badge */}
        {featured && (
          <div className="absolute top-4 right-4">
            <span className="px-3 py-1 bg-gradient-to-r from-purple-500 to-violet-500 text-white text-xs font-medium rounded-full">
              Featured
            </span>
          </div>
        )}

        {/* Project Logo (for Lifey) */}
        {title.includes('Lifey') && (
          <MotionDiv
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="w-16 h-16 bg-white/5 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 p-2"
          >
            <img 
              src="/images/lifey-logo.png" 
              alt="Lifey Logo" 
              className="w-full h-full object-contain"
              onError={(e) => {
                // Fallback to text if image fails to load
                const target = e.target as HTMLImageElement;
                target.onerror = null;
                target.src = 'data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%2264%22%20height%3D%2264%22%20viewBox%3D%220%200%2064%2064%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Crect%20width%3D%2264%22%20height%3D%2264%22%20rx%3D%2212%22%20fill%3D%22%237E22CE%22%2F%3E%3Ctext%20x%3D%2232%22%20y%3D%2240%22%20font-family%3D%22Arial%2C%20sans-serif%22%20font-size%3D%2224%22%20font-weight%3D%22bold%22%20text-anchor%3D%22middle%22%20fill%3D%22white%22%3EL%3C%2Ftext%3E%3C%2Fsvg%3E';
              }}
            />
          </MotionDiv>
        )}

        {/* Project Title */}
        <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-purple-200 transition-colors duration-300">
          {title}
        </h3>

        {/* Description */}
        <div className="space-y-4">
          <p className="text-gray-300 leading-relaxed">
            {description}
          </p>
          
          {/* Problem Statement */}
          {problemStatement && (
            <div className="bg-gray-800/50 p-4 rounded-lg border-l-4 border-purple-500/50">
              <p className="text-sm text-gray-300 italic">
                <span className="font-medium text-purple-300">Problem:</span> {problemStatement}
              </p>
            </div>
          )}
          
          {/* Features & Challenges (collapsible) */}
          {(features?.length || challengesSolved?.length) && (
            <div className="space-y-3">
              <button 
                onClick={() => setIsExpanded(!isExpanded)}
                className="text-sm text-purple-300 hover:text-purple-200 flex items-center gap-1 transition-colors"
              >
                {isExpanded ? 'Hide details' : 'Show details'}
                <svg 
                  className={`w-4 h-4 transition-transform ${isExpanded ? 'rotate-180' : ''}`} 
                  fill="none" 
                  viewBox="0 0 24 24" 
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              
              {isExpanded && (
                <div className="space-y-4 animate-fadeIn">
                  {features && features.length > 0 && (
                    <div>
                      <h4 className="text-sm font-medium text-purple-300 mb-1">Key Features:</h4>
                      <ul className="list-disc list-inside text-sm text-gray-300 space-y-1">
                        {features.map((feature, i) => (
                          <li key={i}>{feature}</li>
                        ))}
                      </ul>
                    </div>
                  )}
                  
                  {challengesSolved && challengesSolved.length > 0 && (
                    <div>
                      <h4 className="text-sm font-medium text-purple-300 mb-1">Challenges Solved:</h4>
                      <ul className="list-disc list-inside text-sm text-gray-300 space-y-1">
                        {challengesSolved.map((challenge, i) => (
                          <li key={i}>{challenge}</li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              )}
            </div>
          )}
        </div>

        {/* Technologies */}
        <div className="flex flex-wrap gap-2 mb-8">
          {technologies.map((tech) => (
            <span
              key={tech}
              className="px-3 py-1 bg-purple-500/20 border border-purple-500/30 rounded-full text-purple-200 text-sm"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col gap-3 mt-6 relative z-10">
          {/* Official Website Link (for Lifey) */}
          {officialUrl && (
            <MotionA
              href={officialUrl}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-4 py-2 bg-purple-500/20 border border-purple-500/50 text-purple-200 text-center rounded-xl hover:border-purple-400 hover:bg-purple-500/30 transition-all duration-300 text-sm font-medium flex items-center justify-center gap-2 relative z-10"
              style={{ pointerEvents: 'auto' }}
            >
              <Globe className="w-4 h-4" />
              🌐 Official Site
            </MotionA>
          )}
          
          <div className="flex gap-3 relative z-10">
            <MotionA
              href={githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex-1 px-4 py-3 bg-transparent border border-purple-500/50 text-purple-200 text-center rounded-xl hover:border-purple-400 hover:bg-purple-500/10 transition-all duration-300 text-sm font-medium flex items-center justify-center gap-2 relative z-10"
              style={{ pointerEvents: 'auto' }}
            >
              <Github className="w-4 h-4" />
              View Code
            </MotionA>
            
            {projectUrl ? (
              <MotionDiv
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex-1 relative z-10"
                style={{ pointerEvents: 'auto' }}
              >
                <Link
                  href={projectUrl}
                  className="block w-full px-4 py-3 bg-gradient-to-r from-purple-600 to-violet-600 text-white text-center rounded-xl hover:from-purple-500 hover:to-violet-500 transition-all duration-300 text-sm font-medium flex items-center justify-center gap-2"
                  style={{ pointerEvents: 'auto' }}
                >
                  <ArrowRight className="w-4 h-4" />
                  View Project
                </Link>
              </MotionDiv>
            ) : (
              <MotionA
                href={liveUrl || "#"}
                target="_blank"
                rel="noopener noreferrer nofollow"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`flex-1 px-4 py-3 text-white text-center rounded-xl transition-all duration-300 text-sm font-medium flex items-center justify-center gap-2 relative z-10 ${
                  liveUrl && liveUrl !== '#' 
                    ? 'bg-gradient-to-r from-purple-600 to-violet-600 hover:from-purple-500 hover:to-violet-500' 
                    : 'bg-gray-700 cursor-not-allowed opacity-70'
                }`}
                style={{ pointerEvents: liveUrl && liveUrl !== '#' ? 'auto' : 'none' }}
                onClick={(e) => !liveUrl || liveUrl === '#' ? e.preventDefault() : null}
              >
                <ExternalLink className="w-4 h-4" />
                {liveUrl && liveUrl !== '#' ? 'Live Demo' : 'Coming Soon'}
              </MotionA>
            )}
          </div>
        </div>

        {/* Decorative Elements */}
        <div className="absolute top-8 left-8 w-2 h-2 bg-purple-500/50 rounded-full"></div>
        <div className="absolute bottom-8 right-8 w-3 h-3 border border-violet-500/30 rounded-full"></div>
      </MotionDiv>
    </MotionDiv>
  );
};

export default ProjectCard; 