import { motion } from "framer-motion";
import { useTheme } from "@/components/ThemeContext";

export default function ExperienceSection() {
  const { isDark } = useTheme();
  return (
    <section id="experience" className="py-24 px-6 relative scroll-mt-24">
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
            Professional <span className="text-blue-400">Experience</span>
          </h2>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className={`relative pl-8 border-l ${
              isDark ? "border-white/10" : "border-slate-200"
            }`}
          >
            {/* Timeline Dot */}
            <div
              className={`absolute left-[-9px] top-0 w-4 h-4 rounded-full bg-blue-500 border-4 ${
                isDark ? "border-[#0F172A]" : "border-slate-50"
              }`}
            />

            <div
              className={`mb-12 p-8 rounded-3xl border backdrop-blur-sm transition-all hover:border-blue-500/30 ${
                isDark
                  ? "bg-white/5 border-white/10"
                  : "bg-white border-slate-200 shadow-sm hover:shadow-blue-100"
              }`}
            >
              <div className="flex flex-col md:flex-row md:items-center justify-between mb-4 gap-2">
                <div>
                  <h3
                    className={`text-2xl font-bold ${
                      isDark ? "text-white" : "text-slate-900"
                    }`}
                  >
                    Frontend Developer Internship
                  </h3>
                  <p
                    className={`font-medium ${isDark ? "text-blue-400" : "text-blue-600"}`}
                  >
                    Dudee Indeed Corporation Co.,Ltd.
                  </p>
                </div>
                <span
                  className={`px-4 py-1 rounded-full text-xs font-bold border h-fit ${
                    isDark
                      ? "bg-white/5 text-gray-400 border-white/10"
                      : "bg-slate-100 text-slate-500 border-slate-200"
                  }`}
                >
                  Nov 2025 - Feb 2026
                </span>
              </div>

              <ul
                className={`space-y-4 ${isDark ? "text-gray-400" : "text-slate-600"}`}
              >
                {[
                  "Developing responsive and performant user interfaces using React and modern CSS frameworks.",
                  "Building a library of reusable UI components to ensure design consistency across multiple platforms.",
                  "Integrating complex RESTful APIs and real-time database services for dynamic data management.",
                  "Collaborating with cross-functional teams to translate design prototypes into functional code.",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-blue-500 shrink-0" />
                    <p>{item}</p>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}



