import { motion } from "framer-motion";
import {
  Layout,
  Database,
  Cloud,
  Wrench,
  Globe,
  Terminal,
  Zap,
  Smartphone,
  Layers,
  Cpu,
  Map as MapIcon,
  Search,
  Monitor,
  PenTool,
  BookOpen,
} from "lucide-react";
import { useTheme } from "@/components/ThemeContext";
import { FaGithub } from "react-icons/fa";

const skillCategories = [
  {
    title: "Frontend",
    icon: <Layout className="text-blue-400" size={24} />,
    skills: [
      { name: "React", icon: <Zap size={18} /> },
      { name: "Next.js", icon: <Globe size={18} /> },
      { name: "TypeScript", icon: <Terminal size={18} /> },
      { name: "JavaScript", icon: <Terminal size={18} /> },
      { name: "Tailwind CSS", icon: <Layers size={18} /> },
    ],
  },
  {
    title: "Backend & Database",
    icon: <Database className="text-indigo-400" size={24} />,
    skills: [
      { name: "Node.js", icon: <Terminal size={18} /> },
      { name: "Firebase", icon: <Cloud size={18} /> },
      { name: "Firestore", icon: <Database size={18} /> },
      { name: "Supabase", icon: <Database size={18} /> },
      { name: "REST API", icon: <Smartphone size={18} /> },
    ],
  },
  {
    title: "AI & Cloud",
    icon: <Cloud className="text-blue-400" size={24} />,
    skills: [
      { name: "OpenAI API", icon: <Cpu size={18} /> },
      { name: "Vertex AI", icon: <Search size={18} /> },
      { name: "Google Cloud Platform (GCP)", icon: <Cloud size={18} /> },
      { name: "Google Cloud Storage (GCS)", icon: <Cloud size={18} /> },
    ],
  },
  {
    title: "Tools",
    icon: <Wrench className="text-indigo-400" size={24} />,
    skills: [
      { name: "Git & GitHub", icon: <FaGithub size={18} /> },
      { name: "Vercel", icon: <Monitor size={18} /> },
      { name: "Notion", icon: <BookOpen size={18} /> },
    ],
  },
];

export default function SkillsSection() {
  const { isDark } = useTheme();
  return (
    <section id="skills" className="py-24 px-6 scroll-mt-24">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2
            className={`text-3xl md:text-4xl font-bold mb-4 ${
              isDark ? "text-white" : "text-slate-900"
            }`}
          >
            Technical <span className="text-blue-400">Skills</span>
          </h2>
          <p
            className={`max-w-2xl mx-auto ${isDark ? "text-gray-500" : "text-slate-500"}`}
          >
            A comprehensive list of the technologies and tools I use to bring
            ideas to life.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skillCategories.map((category, idx) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className={`p-6 rounded-2xl border backdrop-blur-sm group hover:border-blue-500/30 transition-all ${
                isDark
                  ? "bg-white/5 border-white/10"
                  : "bg-white border-slate-200 shadow-sm hover:shadow-blue-100"
              }`}
            >
              <div className="flex items-center gap-3 mb-6">
                {category.icon}
                <h3
                  className={`font-bold text-xl ${
                    isDark ? "text-white" : "text-slate-800"
                  }`}
                >
                  {category.title}
                </h3>
              </div>
              <div className="space-y-4">
                {category.skills.map((skill) => (
                  <div
                    key={skill.name}
                    className={`flex items-center gap-3 transition-colors ${
                      isDark
                        ? "text-gray-400 group-hover:text-gray-300"
                        : "text-slate-600 group-hover:text-slate-800"
                    }`}
                  >
                    <div
                      className={`p-2 rounded-lg border ${
                        isDark
                          ? "bg-white/5 border-white/5"
                          : "bg-slate-50 border-slate-200"
                      }`}
                    >
                      {skill.icon}
                    </div>
                    <span className="font-medium">{skill.name}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}



