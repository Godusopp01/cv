import { motion } from "framer-motion";
import { FaGithub } from "react-icons/fa";
import { useTheme } from "@/components/ThemeContext";
import {
  Brain,
  Code2,
  Database,
  Sparkles,
} from "lucide-react"

export default function HeroSection() {
  const { isDark } = useTheme();
  const items = [
  { icon: Brain, title: "AI" },
  { icon: Code2, title: "Frontend" },
  { icon: Database, title: "Backend" },
  { icon: Sparkles, title: "Automation" },
]
  
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 px-6 overflow-hidden scroll-mt-24">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="z-10"
        >
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className={`font-medium mb-4 tracking-wider ${
              isDark ? "text-blue-400" : "text-blue-600"
            }`}
          >
            HELLO, I'M
          </motion.p>
          <h1
            className={`text-5xl md:text-7xl font-bold mb-6 leading-tight ${
              isDark ? "text-white" : "text-slate-900"
            }`}
          >
            PORUETHAI <br />
            <span className="bg-gradient-to-r from-blue-400 to-indigo-500 bg-clip-text text-transparent">
              KITIKAM
            </span>
          </h1>
          <p
            className={`text-lg md:text-xl mb-10 max-w-lg leading-relaxed ${
              isDark ? "text-gray-400" : "text-slate-600"
            }`}
          >
            A passionate Web Developer dedicated to building
            modern, high-performance web applications with a focus on seamless
            user experiences and AI-powered solutions.
          </p>

          <div className="flex flex-wrap gap-4">
            {/* <motion.a
              href="#projects"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-3 bg-blue-600 text-white rounded-full font-semibold flex items-center gap-2 hover:bg-blue-700 transition-colors shadow-lg shadow-blue-600/20"
            >
              View Projects
            </motion.a> */}
            <motion.a
              href="https://github.com/Godusopp01"
              target="_blank"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`px-8 py-3 rounded-full font-semibold border backdrop-blur-sm flex items-center gap-2 transition-colors ${
                isDark
                  ? "bg-white/10 text-white border-white/10 hover:bg-white/20"
                  : "bg-white text-slate-700 border-slate-200 hover:bg-slate-50"
              }`}
            >
              <FaGithub size={20} />
              GitHub
            </motion.a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, }}
          transition={{ duration: 1, delay: 0.3 }}
          className="relative hidden lg:block"
        >
          <div className="grid grid-cols-2 gap-4 w-full">
            {items.map((item, i) => {
              const Icon = item.icon

              return (
                <div
                  key={i}
                  className={`h-32 rounded-2xl border p-4 flex flex-col items-center justify-center transition-all duration-300 hover:scale-105 ${
                    isDark
                      ? "bg-white/5 border-white/5"
                      : "bg-white border-slate-200 shadow-sm"
                  }`}
                >
                  <Icon className="w-10 h-10 text-blue-500 mb-3" />
                  <p className="text-sm font-medium">
                    {item.title}
                  </p>
                </div>
              )
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
}



