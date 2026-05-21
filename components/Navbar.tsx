"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Sun, Moon } from "lucide-react";
import { twMerge } from "tailwind-merge";
import { useTheme } from "./ThemeContext";

const navLinks = [
  { name: "About", id: "about" },
  { name: "Skills", id: "skills" },
  { name: "Projects", id: "projects" },
  { name: "Experience", id: "experience" },
  { name: "Contact", id: "contact" },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { isDark, toggleTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    setIsMobileMenuOpen(false);

    setTimeout(() => {
      const el = document.getElementById(id);
      if (el) {
        el.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }
    }, 80); // กัน framer-motion / re-render ชน
  };

  return (
    <nav
      className={twMerge(
        "fixed top-0 left-0 right-0 z-[9999] transition-all duration-300 px-6 py-4",
        isScrolled
          ? isDark
            ? "bg-[#0F172A]/80 backdrop-blur-md border-b border-white/10"
            : "bg-white/90 backdrop-blur-md border-b border-slate-200"
          : "bg-transparent"
      )}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <motion.button
          onClick={() => scrollToSection("about")}
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="text-xl font-bold bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent"
        >
          PORUETHAI.K
        </motion.button>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link, i) => (
            <motion.button
              key={link.id}
              onClick={() => scrollToSection(link.id)}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.05 }}
              className={`text-sm font-medium transition-colors ${
                isDark
                  ? "text-gray-300 hover:text-blue-400"
                  : "text-slate-600 hover:text-blue-600"
              }`}
            >
              {link.name}
            </motion.button>
          ))}

          {/* Theme toggle */}
          <button
            onClick={toggleTheme}
            className={`p-2 rounded-full ${
              isDark
                ? "bg-white/10 text-yellow-300"
                : "bg-slate-100 text-slate-700"
            }`}
          >
            {isDark ? <Sun size={18} /> : <Moon size={18} />}
          </button>
        </div>

        {/* Mobile */}
        <div className="md:hidden flex items-center gap-2">
          <button
            onClick={toggleTheme}
            className={`p-2 rounded-full ${
              isDark ? "bg-white/10 text-yellow-300" : "bg-slate-100"
            }`}
          >
            {isDark ? <Sun size={18} /> : <Moon size={18} />}
          </button>

          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className={`${isDark ? "text-white" : "text-slate-800"}`}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className={`md:hidden border-b overflow-hidden ${
              isDark
                ? "bg-[#0F172A] border-white/10"
                : "bg-white border-slate-200"
            }`}
          >
            <div className="flex flex-col gap-4 p-6">
              {navLinks.map((link) => (
                <button
                  key={link.id}
                  onClick={() => scrollToSection(link.id)}
                  className={`text-lg font-medium text-left ${
                    isDark
                      ? "text-gray-300 hover:text-blue-400"
                      : "text-slate-600 hover:text-blue-600"
                  }`}
                >
                  {link.name}
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}