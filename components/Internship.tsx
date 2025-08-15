import { motion, Variants } from 'framer-motion';
import { Briefcase, Code, Server, Cpu, Cloud, GitBranch, Shield } from 'lucide-react';

export default function Internship() {
  const fadeInUp: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.6, -0.05, 0.01, 0.99] as any // Type assertion for custom bezier curve
      }
    }
  };

  const stagger: Variants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const internship = {
    company: "LinuxWorld Informatics Pvt. Ltd., Jaipur",
    duration: "Summer Internship (June 2025 – August 2025)",
    role: "AI & DevOps Engineer Intern",
    projects: [
      {
        title: "LifeLine AI – Real-Time Emergency Assistant",
        description: "Developed a voice-triggered emergency alert system with live GPS tracking and Twilio SMS integration, deployed on AWS.",
        technologies: ["Python", "Flask", "AWS", "Twilio", "WebRTC"]
      },
      {
        title: "SmartOps – AI & Automation Menu-Based System",
        description: "Built a Streamlit-based dashboard for managing AI/ML workflows with containerized deployment using Docker and Kubernetes.",
        technologies: ["Streamlit", "Docker", "Kubernetes", "Python", "Prometheus"]
      }
    ],
    responsibilities: [
      "Designed and implemented AI-based solutions using Python, Flask, and Machine Learning models.",
      "Deployed projects on cloud platforms (AWS EC2, Streamlit Cloud) with Docker containers.",
      "Integrated automation pipelines and real-time monitoring dashboards.",
      "Collaborated with team on DevOps practices including CI/CD, Kubernetes, and microservices."
    ]
  };

  const icons = [
    { icon: <Code className="w-5 h-5" />, color: "text-purple-400" },
    { icon: <Server className="w-5 h-5" />, color: "text-blue-400" },
    { icon: <Cpu className="w-5 h-5" />, color: "text-green-400" },
    { icon: <Cloud className="w-5 h-5" />, color: "text-yellow-400" },
    { icon: <GitBranch className="w-5 h-5" />, color: "text-pink-400" },
    { icon: <Shield className="w-5 h-5" />, color: "text-red-400" }
  ];

  return (
    <section id="internship" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-gray-900 to-black">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={stagger}
          className="text-center mb-16"
        >
          <motion.h2 
            variants={fadeInUp}
            className="text-4xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600"
          >
            Internship Experience
          </motion.h2>
          <motion.p 
            variants={fadeInUp}
            className="text-xl text-gray-400 max-w-2xl mx-auto"
          >
            Practical Industry Exposure
          </motion.p>
        </motion.div>

        <motion.div 
          className="bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-2xl p-8 mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
            <div>
              <h3 className="text-2xl font-bold text-white">{internship.role}</h3>
              <p className="text-purple-300 font-medium">{internship.company}</p>
              <p className="text-gray-400 text-sm mt-1">{internship.duration}</p>
            </div>
            <div className="mt-4 md:mt-0 flex space-x-2">
              {icons.map((item, index) => (
                <motion.div
                  key={index}
                  className={`p-2 rounded-lg bg-gray-800/50 ${item.color}`}
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {item.icon}
                </motion.div>
              ))}
            </div>
          </div>

          <div className="mb-8">
            <h4 className="text-xl font-semibold text-white mb-4 flex items-center">
              <Briefcase className="w-5 h-5 mr-2 text-purple-400" />
              Key Projects
            </h4>
            <div className="space-y-6">
              {internship.projects.map((project, index) => (
                <motion.div 
                  key={index}
                  className="bg-gray-800/30 p-6 rounded-xl border-l-4 border-purple-500/50"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                >
                  <h5 className="text-lg font-semibold text-white mb-2">{project.title}</h5>
                  <p className="text-gray-300 mb-3">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, i) => (
                      <span 
                        key={i}
                        className="px-3 py-1 text-xs rounded-full bg-purple-900/30 text-purple-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-xl font-semibold text-white mb-4">
              Key Responsibilities & Achievements
            </h4>
            <ul className="space-y-3">
              {internship.responsibilities.map((item, index) => (
                <motion.li 
                  key={index}
                  className="flex items-start"
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.1 * index }}
                >
                  <span className="text-purple-400 mr-2 mt-1">▹</span>
                  <span className="text-gray-300">{item}</span>
                </motion.li>
              ))}
            </ul>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
