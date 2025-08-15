"use client";

import { motion } from 'framer-motion';
import Image from 'next/image';

const Certifications = () => {
  const certificates = [
    {
      id: 1,
      title: "Prompt Engineering",
      issuer: "Vanderbilt University",
      issueDate: "Mar 28, 2025",
      credentialLink: "https://coursera.org/verify/specialization/NCYXLNETCVQE",
      description: "Upon completing this specialization, you will have developed expertise in prompt engineering for generative AI systems like ChatGPT. Through hands-on practice, you will become proficient at instructing large language models to accomplish useful tasks. The specialization provides you with principles and templates for writing effective prompts that tap into the capabilities of systems like ChatGPT.",
      skills: [
        "Prompt Engineering",
        "Generative AI",
        "ChatGPT",
        "LLM Systems",
        "AI Automation",
        "Advanced Data Analysis",
        "AI Problem Solving"
      ],
      images: [
        {
          src: "/certificates/prompt_engineering.jpeg",
          alt: "Vanderbilt University Prompt Engineering Certificate"
        }
      ]
    },
    {
      id: 5,
      title: "IBM Data Science",
      issuer: "IBM",
      issueDate: "Mar 27, 2025",
      credentialLink: "https://coursera.org/share/ec1f50e11b2d0ff91136ce9689d70add",
      description: "Professional Certificate in Data Science and Machine Learning. Completed 12 comprehensive courses covering Python programming, data visualization, machine learning, and SQL. Developed hands-on skills through cloud-based assignments and a capstone project.",
      skills: [
        "Python Programming",
        "Machine Learning",
        "Data Science",
        "SQL",
        "Data Visualization",
        "Statistical Analysis",
        "Cloud Computing"
      ],
      images: [
        {
          src: "/certificates/IBM_Data_Science.jpeg",
          alt: "IBM Data Science Certificate"
        }
      ]
    },
    {
      id: 2,
      title: "Meta Data Analyst",
      issuer: "Meta",
      issueDate: "Mar 30, 2025",
      credentialLink: "https://coursera.org/share/43230fd0b94670f865dd00f900a224bc",
      description: "In this specialization, learners developed and honed essential data analytics skills, including applying the OSEMN framework to data analysis, using SQL queries to pull data from a database, cleaning data using spreadsheets, and basic Python applied to data analytics. Learners also developed a foundational understanding of statistics and data management principles.",
      courseCount: "5 Courses",
      courses: [
        "Introduction to Data Analytics",
        "Data Analysis with Spreadsheets and SQL",
        "Python Data Analytics",
        "Statistics Foundations",
        "Introduction to Data Management"
      ],
      skills: [
        "Data Analytics",
        "SQL",
        "Python",
        "Spreadsheets",
        "OSEMN Framework",
        "Data Management",
        "Statistical Analysis"
      ],
      images: [
        {
          src: "/certificates/Meta_Data_Analyst.jpeg",
          alt: "Meta Data Analyst Certificate"
        }
      ]
    },
    {
      id: 3,
      title: "Microsoft Power BI Data Analyst",
      issuer: "Microsoft",
      issueDate: "Mar 27, 2025",
      credentialLink: "https://coursera.org/verify/professional-cert/8ATKUQD8PW2F",
      description: "The role of a Power BI data analyst includes working closely with business stakeholders, collecting data, performing analyses, creating visualizations, & presenting actionable data-driven insights. Completed 8 comprehensive courses covering Power BI fundamentals, data modeling with Star schema, DAX calculations, and advanced visualization techniques.",
      skills: [
        "Power BI",
        "Data Modeling",
        "DAX",
        "Data Analysis",
        "Data Visualization",
        "Star Schema",
        "Business Intelligence",
        "Microsoft Excel"
      ],
      images: [
        {
          src: "/certificates/Microsoft_Power_BI.jpeg",
          alt: "Microsoft Power BI Data Analyst Certificate"
        }
      ]
    },
    {
      id: 4,
      title: "Google Data Analytics",
      issuer: "Google",
      issueDate: "Mar 21, 2025",
      credentialLink: "https://coursera.org/verify/professional-cert/5RV63O8VAVFK",
      description: "Professional Certificate covering data analytics fundamentals including spreadsheets, SQL, Tableau, and R programming. Completed 8 comprehensive courses with hands-on projects and assessments.",
      skills: [
        "Data Analysis",
        "SQL",
        "R Programming",
        "Tableau",
        "Spreadsheets",
        "Data Visualization"
      ],
      images: [
        {
          src: "/certificates/Google_Data_Analytics.jpeg",
          alt: "Google Data Analytics Certificate"
        }
      ]
    }
  ];

  return (
    <section id="certifications" className="py-20 bg-gradient-to-b from-gray-900 to-black">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-purple-400 to-pink-600 bg-clip-text text-transparent mb-4">
            Certifications
          </h2>
          <p className="text-gray-400 text-lg">Professional certifications and achievements</p>
        </motion.div>

        <div className="grid gap-8">
          {certificates.map((cert, index) => (
            <motion.div
              key={cert.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="bg-gradient-to-r from-gray-800/50 to-gray-900/50 rounded-2xl p-6 backdrop-blur-sm border border-gray-700/50 hover:border-purple-500/30 transition-all duration-300"
            >
              <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-4">
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-2">{cert.title}</h3>
                    <p className="text-purple-400">Issued by {cert.issuer} • {cert.issueDate}</p>
                  </div>
                  
                  <p className="text-gray-300">{cert.description}</p>
                  
                  <div>
                    <h4 className="text-lg font-semibold text-white mb-2">Skills</h4>
                    <div className="flex flex-wrap gap-2">
                      {cert.skills.map((skill) => (
                        <span
                          key={skill}
                          className="px-3 py-1 bg-purple-500/10 text-purple-300 rounded-full text-sm border border-purple-500/20"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>

                  <a
                    href={cert.credentialLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-purple-400 hover:text-purple-300 transition-colors"
                  >
                    <span>Verify Certificate</span>
                    <svg
                      className="w-5 h-5 ml-1"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                      />
                    </svg>
                  </a>
                </div>

                <div className="relative aspect-[4/3] rounded-xl overflow-hidden bg-gradient-to-br from-gray-900 to-gray-800">
                  {cert.images.map((image) => (
                    <Image
                      key={image.alt}
                      src={image.src}
                      alt={image.alt}
                      fill
                      className="object-contain p-4 hover:scale-105 transition-transform duration-300"
                    />
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications; 