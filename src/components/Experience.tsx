"use client";

import { motion } from "framer-motion";
import { experience } from "@/data/portfolio";
import { FaBriefcase, FaMapPin, FaCalendarAlt } from "react-icons/fa";

export default function Experience() {
  return (
    <section id="experience" className="section bg-white dark:bg-dark">
      <div className="container">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="section-title">Experience</h2>
          <p className="section-subtitle">My Professional Journey</p>
        </motion.div>

        <div className="space-y-8 mt-12">
          {experience.map((exp, index) => (
            <motion.div
              key={exp.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="relative pl-8 pb-8 border-l-2 border-primary/30 hover:border-primary/60 transition-colors duration-300 last:pb-0"
            >
              {/* Timeline dot */}
              <motion.div
                whileHover={{ scale: 1.3 }}
                className="absolute -left-4 top-1 w-7 h-7 bg-gradient-primary rounded-full shadow-lg shadow-primary/50"
              />

              {/* Card */}
              <motion.div
                whileHover={{ x: 8 }}
                className="backdrop-blur-sm bg-gray-50 dark:bg-dark-secondary/50 rounded-lg p-6 border border-gray-200 dark:border-dark-tertiary hover:border-primary/30 transition-all duration-300"
              >
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-4">
                  <div>
                    <div className="flex items-center gap-3 mb-2">
                      <FaBriefcase className="text-primary text-xl" />
                      <h3 className="text-xl md:text-2xl font-bold text-gray-900 dark:text-white">
                        {exp.position}
                      </h3>
                    </div>
                    <p className="text-primary font-semibold">{exp.company}</p>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-3 py-1 bg-primary/10 dark:bg-primary/20 text-primary text-sm font-semibold rounded-full">
                      {exp.type}
                    </span>
                    <span className="px-3 py-1 bg-secondary/10 dark:bg-secondary/20 text-secondary text-sm font-semibold rounded-full">
                      {exp.workMode}
                    </span>
                  </div>
                </div>

                {/* Date & Duration */}
                <div className="flex flex-col sm:flex-row sm:items-center gap-4 text-gray-600 dark:text-gray-400 text-sm mb-4">
                  <div className="flex items-center gap-2">
                    <FaCalendarAlt className="text-tertiary" />
                    <span>
                      {exp.startDate} - {exp.endDate}
                    </span>
                  </div>
                  <span className="hidden sm:inline text-tertiary">•</span>
                  <span className="font-semibold text-gray-700 dark:text-gray-300">
                    {exp.duration}
                  </span>
                </div>

                {/* Location */}
                <div className="flex items-start gap-2 text-gray-600 dark:text-gray-400 text-sm mb-4">
                  <FaMapPin className="text-tertiary mt-0.5 flex-shrink-0" />
                  <span>{exp.location}</span>
                </div>

                {/* Description */}
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                  {exp.description}
                </p>

                {/* Achievements */}
                {exp.achievements && exp.achievements.length > 0 && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                  >
                    <p className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-3">
                      Key Achievements:
                    </p>
                    <ul className="space-y-2">
                      {exp.achievements.map((achievement, idx) => (
                        <motion.li
                          key={idx}
                          initial={{ opacity: 0, x: -10 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.4, delay: idx * 0.1 }}
                          className="flex items-start gap-3 text-gray-600 dark:text-gray-400 text-sm"
                        >
                          <span className="inline-flex items-center justify-center w-5 h-5 rounded-full bg-primary/20 dark:bg-primary/30 mt-0.5 flex-shrink-0">
                            <svg
                              className="w-3 h-3 text-primary"
                              fill="currentColor"
                              viewBox="0 0 20 20"
                            >
                              <path
                                fillRule="evenodd"
                                d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                clipRule="evenodd"
                              />
                            </svg>
                          </span>
                          <span>{achievement}</span>
                        </motion.li>
                      ))}
                    </ul>
                  </motion.div>
                )}
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
