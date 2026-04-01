"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { useTheme } from "next-themes";
import { HiMenu, HiX, HiMoon, HiSun } from "react-icons/hi";
import { motion } from "framer-motion";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  // Prevent hydration mismatch
  useEffect(() => setMounted(true), []);

  const scrollToSection = (id: string) => {
    setIsOpen(false);
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  const navLinks = [
    { label: "Home", id: "home" },
    { label: "About", id: "about" },
    { label: "Skills", id: "skills" },
    { label: "Projects", id: "projects" },
    { label: "Contact", id: "contact" },
  ];

  return (
    <nav className="fixed top-0 w-full bg-white/80 dark:bg-dark-secondary/80 backdrop-blur-md border-b border-gray-200 dark:border-gray-800 z-50 transition-colors duration-300">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/">
            <motion.div
              className="text-2xl font-bold bg-gradient-primary bg-clip-text text-transparent cursor-pointer"
              whileHover={{ scale: 1.05 }}
            >
              Rantika
            </motion.div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => scrollToSection(link.id)}
                className="text-gray-700 dark:text-gray-300 hover:text-primary dark:hover:text-primary transition-colors font-medium"
              >
                {link.label}
              </button>
            ))}
          </div>

          {/* Actions */}
          <div className="flex items-center gap-4">
            {mounted && (
              <motion.button
                whileHover={{ rotate: 20 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                className="p-2 rounded-lg bg-gray-100 dark:bg-dark hover:bg-gray-200 dark:hover:bg-gray-800 transition-colors"
              >
                {theme === "dark" ? (
                  <HiSun className="w-5 h-5 text-yellow-500" />
                ) : (
                  <HiMoon className="w-5 h-5 text-gray-700" />
                )}
              </motion.button>
            )}

            {/* Mobile menu button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden p-2 rounded-lg bg-gray-100 dark:bg-dark hover:bg-gray-200 dark:hover:bg-gray-800"
            >
              {isOpen ? (
                <HiX className="w-6 h-6" />
              ) : (
                <HiMenu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="md:hidden pb-4 space-y-2 border-t border-gray-200 dark:border-gray-800"
          >
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => scrollToSection(link.id)}
                className="block w-full text-left px-4 py-2 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-dark rounded-lg transition-colors"
              >
                {link.label}
              </button>
            ))}
          </motion.div>
        )}
      </div>
    </nav>
  );
}
