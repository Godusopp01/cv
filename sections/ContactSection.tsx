import { motion } from "framer-motion";
import { Mail, MessageSquare } from "lucide-react";
import { FaGithub } from "react-icons/fa";
import { useTheme } from "@/components/ThemeContext";

export default function ContactSection() {
  const { isDark } = useTheme();
  return (
    <section id="contact" className="py-24 px-6 scroll-mt-24">
      <div className="max-w-7xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto"
        >
          <h2
            className={`text-3xl md:text-5xl font-bold mb-6 leading-tight ${
              isDark ? "text-white" : "text-slate-900"
            }`}
          >
            Ready to build something <br />
            <span className="text-blue-400">extraordinary together?</span>
          </h2>
          <p
            className={`text-lg mb-12 ${isDark ? "text-gray-400" : "text-slate-600"}`}
          >
            I'm currently looking for new opportunities and collaborations.
            Whether you have a question or just want to say hi, my inbox is
            always open!
          </p>

          <div className="flex flex-col md:flex-row items-center justify-center gap-6">
            <motion.a
              href="mailto:poruethaikitikam@gmail.com"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="w-full md:w-auto px-8 py-4 bg-blue-600 text-white rounded-2xl font-bold flex items-center justify-center gap-3 hover:bg-blue-700 transition-all shadow-xl shadow-blue-600/20"
            >
              <Mail size={20} />
              Email Me
            </motion.a>
            <motion.a
              href="https://github.com/Godusopp01"
              target="_blank"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`w-full md:w-auto px-8 py-4 rounded-2xl font-bold border backdrop-blur-sm flex items-center justify-center gap-3 transition-all ${
                isDark
                  ? "bg-white/5 text-white border-white/10 hover:bg-white/10"
                  : "bg-white text-slate-700 border-slate-200 hover:bg-slate-50"
              }`}
            >
              <FaGithub size={20} />
              GitHub Profile
            </motion.a>
          </div>

          <div
            className={`mt-16 p-8 rounded-3xl border inline-flex flex-col items-center ${
              isDark
                ? "bg-gradient-to-br from-blue-500/5 to-indigo-500/5 border-white/5"
                : "bg-gradient-to-br from-blue-50 to-indigo-50 border-blue-100"
            }`}
          >
            <MessageSquare className="text-blue-400 mb-4" size={32} />
            <p
              className={`text-sm font-medium ${isDark ? "text-gray-500" : "text-slate-500"}`}
            >
              Available for freelance & full-time positions
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}



