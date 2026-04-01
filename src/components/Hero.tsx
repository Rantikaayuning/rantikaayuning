"use client";

import { motion } from "framer-motion";
import { HiArrowDown } from "react-icons/hi";
import { socials } from "@/data/portfolio";
import SocialLink from "./SocialLink";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.3,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: "easeOut" },
  },
};

export default function Hero() {
  const scrollToSection = () => {
    document.getElementById("about")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="home"
      className="min-h-screen flex items-center pt-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden"
    >
      {/* Background decorations */}
      <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-primary rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob" />
      <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-secondary rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000" />

      <div className="max-w-6xl mx-auto w-full z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="text-center max-w-3xl mx-auto"
        >
          {/* Greeting */}
          <motion.div variants={itemVariants}>
            <p className="text-lg sm:text-xl text-primary font-semibold mb-4">
              Welcome to my portfolio
            </p>
          </motion.div>

          {/* Main Title */}
          <motion.h1
            variants={itemVariants}
            className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6"
          >
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              Hi, I'm Rantika
            </span>
          </motion.h1>

          {/* Subtitle */}
          <motion.h2
            variants={itemVariants}
            className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-gray-700 dark:text-gray-300 mb-6"
          >
            Frontend Developer & UI/UX Enthusiast
          </motion.h2>

          {/* Description */}
          <motion.p
            variants={itemVariants}
            className="text-lg sm:text-xl text-gray-600 dark:text-gray-400 mb-8 leading-relaxed"
          >
            Crafting beautiful, responsive, and user-friendly web experiences
            using modern technologies. Passionate about creating digital
            solutions that make a difference.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row gap-4 justify-center mb-12"
          >
            <a
              href="#projects"
              className="btn-primary"
              onClick={() =>
                document
                  .getElementById("projects")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
            >
              View My Work
              <HiArrowDown className="w-5 h-5" />
            </a>
            <a
              href="#contact"
              className="btn-secondary"
              onClick={() =>
                document
                  .getElementById("contact")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
            >
              Get In Touch
            </a>
          </motion.div>

          {/* Social Links */}
          <motion.div
            variants={itemVariants}
            className="flex justify-center gap-6"
          >
            {socials.map((social) => (
              <SocialLink key={social.platform} {...social} />
            ))}
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <button
          onClick={scrollToSection}
          className="flex flex-col items-center gap-2 text-gray-600 dark:text-gray-400 hover:text-primary transition-colors"
        >
          <span className="text-sm">Scroll Down</span>
          <HiArrowDown className="w-6 h-6 animate-bounce" />
        </button>
      </motion.div>
    </section>
  );
}
