"use client";

import { useTheme } from "./ThemeContext";

export default function Background() {
  const { isDark } = useTheme();

  return (
    <div
      className={`fixed inset-0 -z-10 pointer-events-none transition-colors duration-300 ${
        isDark ? "bg-[#0F172A]" : "bg-slate-50"
      }`}
    >
      {/* static soft glow only (NO ANIMATION) */}
      <div
        className={`absolute -top-20 -left-20 h-[300px] w-[300px] rounded-full blur-3xl ${
          isDark ? "bg-blue-500/10" : "bg-blue-400/10"
        }`}
      />

      <div
        className={`absolute bottom-10 right-0 h-[250px] w-[250px] rounded-full blur-3xl ${
          isDark ? "bg-indigo-500/10" : "bg-indigo-400/10"
        }`}
      />
    </div>
  );
}