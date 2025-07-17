"use client";

import { motion } from 'framer-motion';

const caseStudies = [
  {
    title: "AI-Powered Chat Application",
    description: "A real-time chat application enhanced with AI capabilities for smart responses and content moderation.",
    role: "Full Stack Developer",
    duration: "3 months",
    keyFeatures: [
      "Real-time messaging with WebSocket",
      "OpenAI integration for smart responses",
      "Content moderation system",
      "User authentication and roles"
    ],
    tech: ["Next.js", "Node.js", "WebSocket", "OpenAI API", "MongoDB"]
  },
  {
    title: "Data Analytics Dashboard",
    description: "An interactive dashboard for visualizing and analyzing business metrics with real-time updates.",
    role: "Frontend Developer",
    duration: "2 months",
    keyFeatures: [
      "Interactive data visualization",
      "Real-time data updates",
      "Custom filtering system",
      "Export functionality"
    ],
    tech: ["React", "D3.js", "Material-UI", "Redux", "REST API"]
  }
];

const CaseStudy = () => {
  return (
    <section id="case-studies" className="py-16">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold bg-gradient-to-r from-purple-500 to-violet-500 bg-clip-text text-transparent">
            Case Studies
          </h2>
          <p className="text-muted-foreground mt-2">
            Detailed look at some of my significant projects
          </p>
          
          {/* Decorative Lines */}
          <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 w-48 h-[2px] bg-gradient-to-r from-transparent via-purple-500 to-transparent" />
          <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 w-24 h-[2px] bg-gradient-to-r from-transparent via-violet-500 to-transparent" />
        </motion.div>

        <div className="space-y-12">
          {caseStudies.map((study, index) => (
            <motion.div
              key={study.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="bg-black/20 border border-purple-500/20 rounded-lg p-6 hover:border-purple-500/40 transition-all duration-300"
            >
              <div className="flex flex-col md:flex-row gap-6">
                <div className="flex-1">
                  <h3 className="text-xl font-semibold mb-2">{study.title}</h3>
                  <p className="text-muted-foreground mb-4">{study.description}</p>
                  
                  <div className="grid grid-cols-2 gap-4 mb-4">
                    <div>
                      <p className="text-sm text-purple-400">Role</p>
                      <p className="text-sm">{study.role}</p>
                    </div>
                    <div>
                      <p className="text-sm text-purple-400">Duration</p>
                      <p className="text-sm">{study.duration}</p>
                    </div>
                  </div>
                </div>

                <div className="flex-1">
                  <div className="mb-4">
                    <h4 className="text-sm text-purple-400 mb-2">Key Features</h4>
                    <ul className="list-disc list-inside space-y-1">
                      {study.keyFeatures.map((feature, i) => (
                        <li key={i} className="text-sm text-muted-foreground">
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h4 className="text-sm text-purple-400 mb-2">Technologies</h4>
                    <div className="flex flex-wrap gap-2">
                      {study.tech.map((tech, i) => (
                        <span
                          key={i}
                          className="px-2 py-1 text-xs rounded-full bg-purple-500/10 text-purple-400"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CaseStudy;
