"use client";

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import ProjectCard from './ProjectCard';

const Projects = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const projects = [
    {
      title: "Lifey – AI Emergency System",
      description: "AI-powered real-time emergency assistant with voice-triggered alerts, live GPS tracking, and multi-channel SOS notifications. Designed to save lives faster than ever before.",
      technologies: ["Python", "Flask", "Docker", "AWS", "MongoDB", "Twilio", "Flutter", "Picovoice", "AI"],
      githubUrl: "https://github.com/arjun7976",
      liveUrl: "#",
      featured: true,
      projectUrl: "/lifey",
      officialUrl: "https://getlifey.netlify.app/"
    },
    {
      title: "SmartOps Menu Base",
      description: "SmartOps Menu Base is a centralized Streamlit-based automation hub integrating multiple projects under a single menu-driven interface. It allows easy execution and monitoring of DevOps pipelines, ML models, and AI tasks from one place, improving productivity and workflow efficiency.",
      technologies: ["Streamlit", "Python", "Docker", "DevOps", "Automation", "Cloud"],
      githubUrl: "https://github.com/arjun7976/SmartOps_MenuBase_Project",
      liveUrl: "https://smartopsmenu.streamlit.app/",
      featured: true,
      projectUrl: "https://smartopsmenu.streamlit.app/",
      problemStatement: "Managing multiple AI, Machine Learning, and DevOps projects individually is time-consuming and inefficient. Developers need a centralized interface to monitor, run, and manage various automation tasks seamlessly.",
      features: [
        "Single menu-driven interface for multiple projects",
        "Real-time execution and monitoring of automation scripts",
        "Integration with AI and ML models",
        "Dashboard for DevOps pipelines",
        "User-friendly and responsive UI"
      ],
      challengesSolved: [
        "Eliminates the need to switch between multiple tools",
        "Reduces deployment and execution errors",
        "Provides centralized control for automation tasks"
      ]
    },
    {
      title: "Linux Command Menu in Docker",
      description: "A Dockerized Bash project that runs an interactive Linux menu for basic system commands. Demonstrates how to package and run Bash scripts inside containers, making system administration tasks more accessible and reproducible.",
      technologies: ["Bash", "Docker", "Linux", "Shell Scripting", "DevOps"],
      githubUrl: "https://github.com/arjun7976/linux-menu-docker",
      liveUrl: "#",
      featured: false
    },
    {
      title: "Linear Regression in Docker",
      description: "A simple machine learning project that trains a linear regression model using scikit-learn, runs predictions, and packages everything in a lightweight Docker container for easy reproducibility. Demonstrates ML model deployment and containerization best practices.",
      technologies: ["Python", "scikit-learn", "NumPy", "Docker", "Machine Learning"],
      githubUrl: "https://github.com/arjun7976/docker-linear-regression",
      liveUrl: "#",
      featured: false
    },
    {
      title: "Docker Command Manager",
      description: "A sophisticated Flask web application that enables remote Docker command execution via SSH, featuring a clean UI for container management. Built with security and ease-of-use in mind for streamlined server administration.",
      technologies: ["Flask", "Python", "Docker", "SSH", "Paramiko", "Linux"],
      githubUrl: "https://github.com/arjun7976/docker-flask-ssh-app",
      liveUrl: "#",
      featured: false
    },
    {
      title: "Apache Docker Container",
      description: "A minimal Docker container running Apache HTTP Server serving a custom HTML page. Demonstrates Docker basics: base image usage, file copying, and container networking.",
      technologies: ["Docker", "Linux", "Apache", "DevOps", "Containerization"],
      githubUrl: "https://github.com/arjun7976/apache-docker",
      liveUrl: "#",
      featured: false
    },
    {
      title: "All-In-One Automation Hub",
      description: "A comprehensive Python project featuring 12+ automation and AI tools including email/WhatsApp automation, social media management, web scraping, AI-powered face swapping, LLM comparisons, and system utilities.",
      technologies: ["Python", "PyWhatKit", "Twilio", "BeautifulSoup", "OpenAI API", "Streamlit", "AI"],
      githubUrl: "https://github.com/arjun7976/All-In-One Automation Hub",
      liveUrl: "#",
      featured: false
    },
    {
      title: "Job Selection Prediction App",
      description: "A machine learning web app that predicts whether a candidate is likely to be selected for a job role based on various input parameters, featuring categorical encoding and interactive UI.",
      technologies: ["Python", "Pandas", "Scikit-learn", "Streamlit", "Linear Regression", "LabelEncoder"],
      githubUrl: "https://github.com/arjun7976/ML-Job-Perdection-LinearRegression-Project",
      liveUrl: "#",
      featured: false
    },
    {
      title: "Salary Pass/Fail Predictor",
      description: "A machine learning web app that predicts whether a candidate's salary will likely be above ₹50,000 based on their years of experience using Logistic Regression model.",
      technologies: ["Python", "Pandas", "Scikit-learn", "Streamlit", "Machine Learning"],
      githubUrl: "https://github.com/arjun7976/ML-salary-pass-model-LogicalRegression",
      liveUrl: "#",
      featured: false
    },
    {
      title: "Linux Docker WebApp Manager",
      description: "A modern Streamlit web app for secure SSH connections to Linux machines, featuring remote Linux and Docker command management with an intuitive browser interface.",
      technologies: ["Python", "Docker", "SSH", "Streamlit", "DevOps", "Linux"],
      githubUrl: "https://github.com/arjun7976/linux-docker-webapp-menu",
      liveUrl: "#",
      featured: false
    },

    {
      title: "MyPermission AI",
      description: "Consent-based data and location control system ensuring user privacy and data security.",
      technologies: ["Privacy", "AI", "Data Control", "Security"],
      githubUrl: "https://github.com/arjun-dev-main",
      liveUrl: "#",
      featured: true
    },
    {
      title: "CI/CD Pipeline Automation",
      description: "Docker + Jenkins integration for automated deployment and continuous integration.",
      technologies: ["Docker", "Jenkins", "DevOps", "Automation"],
      githubUrl: "https://github.com/arjun-dev-main",
      liveUrl: "#",
      featured: false
    },
    {
      title: "SIP Calculator",
      description: "AI-powered investment planner with intelligent recommendations and portfolio analysis.",
      technologies: ["AI", "Finance", "Python", "Analytics"],
      githubUrl: "https://github.com/arjun-dev-main",
      liveUrl: "#",
      featured: false
    },
    {
      title: "Executive Command Center",
      description: "Secure Fintech dashboard with live monitoring and integrated chatbot for financial insights.",
      technologies: ["Fintech", "Dashboard", "Security", "Chatbot"],
      githubUrl: "https://github.com/arjun-dev-main",
      liveUrl: "#",
      featured: true
    }
  ];

  return (
    <section id="projects" ref={ref} className="relative py-32 px-6">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-purple-950/10 to-black"></div>
      
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
              PROJECTS
            </span>
          </h2>
          <motion.div 
            initial={{ scaleX: 0 }}
            animate={isInView ? { scaleX: 1 } : {}}
            transition={{ duration: 1, delay: 0.5 }}
            className="w-24 h-1 bg-gradient-to-r from-purple-500 to-violet-600 mx-auto rounded-full"
          ></motion.div>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ProjectCard
              key={project.title}
              title={project.title}
              description={project.description}
              technologies={project.technologies}
              githubUrl={project.githubUrl}
              liveUrl={project.liveUrl}
              featured={project.featured}
              projectUrl={project.projectUrl}
              officialUrl={project.officialUrl}
              problemStatement={project.problemStatement}
              features={project.features}
              challengesSolved={project.challengesSolved}
              index={index}
            />
          ))}
        </div>

        {/* View More Button */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="text-center mt-16"
        >
          <motion.a
            href="https://github.com/arjun-dev-main"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05, boxShadow: "0 20px 40px rgba(168, 85, 247, 0.3)" }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-purple-600 to-violet-600 text-white font-semibold rounded-full border border-purple-500/50 hover:border-purple-400 transition-all duration-300"
          >
            View All Projects on GitHub
            <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
            </svg>
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;