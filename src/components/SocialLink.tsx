"use client";

import { motion } from "framer-motion";
import {
  HiOutlineGlobeAlt,
  HiGithub,
  HiLinkedin,
  HiInstagram,
} from "react-icons/hi";

interface SocialLinkProps {
  platform: string;
  url: string;
  icon: string;
}

const iconMap: Record<string, React.ReactNode> = {
  github: <HiGithub className="w-6 h-6" />,
  linkedin: <HiLinkedin className="w-6 h-6" />,
  instagram: <HiInstagram className="w-6 h-6" />,
  global: <HiOutlineGlobeAlt className="w-6 h-6" />,
};

export default function SocialLink({ platform, url, icon }: SocialLinkProps) {
  const Icon = iconMap[icon] || iconMap.global;

  return (
    <motion.a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      whileHover={{ scale: 1.2, rotate: 12 }}
      whileTap={{ scale: 0.95 }}
      className="inline-flex items-center justify-center w-12 h-12 rounded-lg bg-gradient-primary text-white hover:shadow-lg hover:shadow-pink-500/50 transition-all"
      title={platform}
    >
      {Icon}
    </motion.a>
  );
}
