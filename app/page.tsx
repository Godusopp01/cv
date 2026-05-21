"use client";
import Navbar from "@/components/Navbar";
import HeroSection from "@/sections/HeroSection";
import AboutSection from "@/sections/AboutSection";
import SkillsSection from "@/sections/SkillSection";

import ExperienceSection from "@/sections/ExperienceSection";
import EducationSection from "@/sections/EducationSection";
import ContactSection from "@/sections/ContactSection";
import Background from "@/components/Background";
import Footer from "@/components/Footer";

import { ThemeProvider, useTheme } from "../components/ThemeContext";

function PortfolioInner() {
  const { isDark } = useTheme();
  return (
    <div
      className={`min-h-screen selection:bg-blue-500/30 transition-colors duration-300 ${
        isDark ? "text-white" : "text-slate-900"
      }`}
    >
      <Background />
      <Navbar />

      <main>
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <ExperienceSection />
        <EducationSection />
        <ContactSection />
      </main>

      <Footer />

      <style jsx global>{`
        html {
          scroll-behavior: smooth;
        }

        body {
          background-color: ${isDark ? "#0F172A" : "#F8FAFC"};
          overflow-x: hidden;
          transition: background-color 0.3s ease;
        }

        ::-webkit-scrollbar {
          width: 8px;
        }

        ::-webkit-scrollbar-track {
          background: ${isDark ? "#0F172A" : "#F1F5F9"};
        }

        ::-webkit-scrollbar-thumb {
          background: ${isDark ? "#1E293B" : "#CBD5E1"};
          border-radius: 10px;
        }

        ::-webkit-scrollbar-thumb:hover {
          background: ${isDark ? "#334155" : "#94A3B8"};
        }
      `}</style>
    </div>
  );
}

export default function PortfolioPage() {
  return (
    <ThemeProvider>
      <PortfolioInner />
    </ThemeProvider>
  );
}



