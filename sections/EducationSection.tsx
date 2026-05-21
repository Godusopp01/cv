import { motion } from "framer-motion";
import { GraduationCap } from "lucide-react";
import { useTheme } from "@/components/ThemeContext";

export default function EducationSection() {
  const { isDark } = useTheme();
  return (
    <section className="py-24 px-6 scroll-mt-24">
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
            My <span className="text-blue-400">Education</span>
          </h2>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className={`p-8 rounded-3xl border flex flex-col md:flex-row gap-8 items-center ${
              isDark
                ? "bg-white/5 border-white/10"
                : "bg-white border-slate-200 shadow-sm"
            }`}
          >
            <div
              className={`p-6 rounded-2xl border ${
                isDark
                  ? "bg-blue-500/10 border-blue-500/20"
                  : "bg-blue-50 border-blue-100"
              }`}
            >
              <GraduationCap className="text-blue-400" size={48} />
            </div>

            <div className="flex-1 text-center md:text-left">
              <div className="flex flex-col md:flex-row md:items-center justify-between mb-2 gap-2">
                <h3
                  className={`text-2xl font-bold ${
                    isDark ? "text-white" : "text-slate-900"
                  }`}
                >
                  Bachelor of Engineering
                </h3>
                <span
                  className={`font-medium tracking-wide text-sm ${
                    isDark ? "text-gray-500" : "text-slate-400"
                  }`}
                >
                  Graduated 2026
                </span>
              </div>
              <p
                className={`text-xl font-semibold mb-4 ${
                  isDark ? "text-blue-400" : "text-blue-600"
                }`}
              >
                Computer Engineering
              </p>
              <div
                className={`flex items-center justify-center md:justify-start gap-2 ${
                  isDark ? "text-gray-400" : "text-slate-600"
                }`}
              >
                <p>University of Phayao</p>
              </div>

              <div className="mt-6 flex flex-wrap justify-center md:justify-start gap-3">
                {[
                  "Software Development",
                  "Computer Architecture",
                  "Artificial Intelligence",
                ].map((label) => (
                  <span
                    key={label}
                    className={`px-3 py-1 rounded-full border text-xs font-bold uppercase ${
                      isDark
                        ? "bg-white/5 border-white/5 text-gray-500"
                        : "bg-slate-100 border-slate-200 text-slate-500"
                    }`}
                  >
                    {label}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}



