import { motion } from "framer-motion";
import { useTheme } from "./ThemeContext";

export default function Background() {
  const { isDark } = useTheme();
  return (
    <div
      className={`fixed inset-0 -z-10 pointer-events-none ${
        isDark ? "bg-[#0F172A]" : "bg-slate-50"
      }`}
    >
      {/* Primary Glow */}
      <motion.div
        animate={{ x: [0, 100, 0], y: [0, 50, 0], scale: [1, 1.2, 1] }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        className={`absolute -top-[10%] -left-[10%] h-[500px] w-[500px] rounded-full blur-[120px] ${
          isDark ? "bg-blue-500/20" : "bg-blue-400/10"
        }`}
      />
      {/* Secondary Glow */}
      <motion.div
        animate={{ x: [0, -100, 0], y: [0, 100, 0], scale: [1, 1.1, 1] }}
        transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
        className={`absolute top-[20%] -right-[10%] h-[400px] w-[400px] rounded-full blur-[100px] ${
          isDark ? "bg-indigo-500/10" : "bg-indigo-400/8"
        }`}
      />
      {/* Tertiary Glow */}
      <motion.div
        animate={{ x: [0, 50, 0], y: [0, -50, 0], scale: [1, 1.3, 1] }}
        transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
        className={`absolute bottom-[10%] left-[20%] h-[600px] w-[600px] rounded-full blur-[150px] ${
          isDark ? "bg-blue-600/10" : "bg-blue-300/10"
        }`}
      />
    </div>
  );
}



