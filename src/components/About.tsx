"use client";

import { motion } from "framer-motion";
import {
  HiOutlineGlobeAlt,
  HiOutlineLightBulb,
  HiOutlineCode,
} from "react-icons/hi";

const features = [
  {
    icon: HiOutlineCode,
    title: "Clean Code",
    description:
      "Writing maintainable, scalable, and well-documented code following best practices.",
  },
  {
    icon: HiOutlineLightBulb,
    title: "Creative Solutions",
    description:
      "Solving complex problems with innovative approaches and attention to detail.",
  },
  {
    icon: HiOutlineGlobeAlt,
    title: "Responsive Design",
    description:
      "Building beautiful interfaces that work seamlessly across all devices.",
  },
];

export default function About() {
  return (
    <section
      id="about"
      className="section bg-gray-50 dark:bg-dark-secondary/50"
    >
      <div className="container">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="section-title">About Me</h2>
          <p className="section-subtitle">Get to know me better</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-20">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
              I&apos;m a passionate Frontend Developer with a strong foundation
              in web development technologies. I graduated from Glints Academy x
              Binar Academy bootcamp, where I honed my skills in building
              modern, responsive web applications.
            </p>

            <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
              With expertise in React, Next.js, and modern CSS frameworks, I
              love transforming design concepts into interactive, user-friendly
              applications. I&apos;m committed to continuous learning and
              staying updated with the latest web development trends.
            </p>

            <div className="grid grid-cols-2 gap-6 py-6">
              <div>
                <h3 className="text-3xl font-bold text-primary mb-2">2+</h3>
                <p className="text-gray-600 dark:text-gray-400">
                  Projects Completed
                </p>
              </div>
              <div>
                <h3 className="text-3xl font-bold text-primary mb-2">100%</h3>
                <p className="text-gray-600 dark:text-gray-400">
                  Client Satisfaction
                </p>
              </div>
            </div>

            <button className="btn-primary">Download Resume</button>
          </motion.div>

          {/* Features Grid */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="glass p-6 rounded-lg hover:border-primary transition-all"
                >
                  <Icon className="w-8 h-8 text-primary mb-4" />
                  <h3 className="text-xl font-semibold mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400">
                    {feature.description}
                  </p>
                </motion.div>
              );
            })}
          </motion.div>
        </div>

        {/* Education Timeline */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h3 className="text-3xl font-bold text-center mb-12">Education</h3>
          <div className="space-y-8 max-w-3xl mx-auto">
            {/* Bootcamp */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="glass p-6 rounded-lg border-l-4 border-primary"
            >
              <div className="flex justify-between items-start mb-2">
                <div>
                  <h4 className="text-xl font-semibold">
                    Frontend Development Bootcamp
                  </h4>
                  <p className="text-gray-600 dark:text-gray-400">
                    Glints Academy x Binar Academy
                  </p>
                </div>
                <span className="text-sm text-gray-500 dark:text-gray-500">
                  Dec 2020 - Mar 2021
                </span>
              </div>
              <p className="text-gray-700 dark:text-gray-300">
                Intensive 4-month bootcamp covering React, JavaScript, CSS, and
                modern web development practices.
              </p>
            </motion.div>

            {/* High School */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
              className="glass p-6 rounded-lg border-l-4 border-secondary"
            >
              <div className="flex justify-between items-start mb-2">
                <div>
                  <h4 className="text-xl font-semibold">Hotel Management</h4>
                  <p className="text-gray-600 dark:text-gray-400">
                    International Hotel Management School Karanganyar
                  </p>
                </div>
                <span className="text-sm text-gray-500 dark:text-gray-500">
                  May 2016 - Apr 2019
                </span>
              </div>
              <p className="text-gray-700 dark:text-gray-300">
                Developed strong problem-solving and communication skills
                through hospitality management studies.
              </p>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
