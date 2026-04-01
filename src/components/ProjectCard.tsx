"use client";

import { motion } from "framer-motion";
import { HiExternalLink, HiCode } from "react-icons/hi";
import type { Project } from "@/data/portfolio";

interface ProjectCardProps {
  project: Project;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <motion.div
      whileHover={{ y: -5 }}
      className="glass rounded-lg overflow-hidden group"
    >
      {/* Image placeholder */}
      <div className="h-48 bg-gradient-primary opacity-10 group-hover:opacity-20 transition-opacity flex items-center justify-center">
        <HiCode className="w-16 h-16 text-primary opacity-30" />
      </div>

      <div className="p-6">
        <h3 className="text-2xl font-bold mb-2">{project.name}</h3>
        <p className="text-gray-600 dark:text-gray-400 mb-4">
          {project.description}
        </p>

        <p className="text-sm text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
          {project.longDescription}
        </p>

        {/* Technologies */}
        <div className="flex flex-wrap gap-2 mb-6">
          {project.technologies.map((tech, index) => (
            <span
              key={index}
              className="px-3 py-1 bg-primary/10 text-primary text-xs rounded-full font-medium"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Links */}
        <div className="flex gap-4">
          {project.link && (
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-primary hover:text-secondary transition-colors font-semibold group"
            >
              Live Demo
              <HiExternalLink className="group-hover:translate-x-1 transition-transform" />
            </a>
          )}
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-gray-600 dark:text-gray-400 hover:text-primary transition-colors font-semibold group"
            >
              Code
              <HiCode className="group-hover:translate-x-1 transition-transform" />
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
}
