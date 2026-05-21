import { motion } from "framer-motion";
import { Cpu, Code, Brain } from "lucide-react";
import { useTheme } from "@/components/ThemeContext";

export default function AboutSection() {
  const { isDark } = useTheme();
  const cardClass = `p-6 rounded-2xl border backdrop-blur-sm hover:border-blue-500/30 transition-all ${
    isDark
      ? "bg-white/5 border-white/10"
      : "bg-white border-slate-200 shadow-sm hover:shadow-blue-100"
  }`;
  const headingClass = `font-semibold mb-2 text-xl ${
    isDark ? "text-white" : "text-slate-800"
  }`;
  const descClass = `text-sm ${isDark ? "text-gray-500" : "text-slate-500"}`;

  return (
    <section id="about" className="py-24 px-6 relative scroll-mt-24">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center"
        >
          <div>
            <h2
              className={`text-3xl md:text-4xl font-bold mb-6 ${
                isDark ? "text-white" : "text-slate-900"
              }`}
            >
              About <span className="text-blue-400">Me</span>
            </h2>
            <div
              className={`space-y-4 text-lg leading-relaxed ${
                isDark ? "text-gray-400" : "text-slate-600"
              }`}
            >
              <p>
                I am a Computer Engineering graduate, driven by a deep curiosity for how technology shapes our
                world. My journey in tech started with a fascination for solving
                complex problems through code.
              </p>
              <p>
                Currently, I specialize in building robust frontend experiences
                with React and Next.js, while exploring the vast possibilities
                of AI integration and cloud computing. I believe in creating
                software that is not only functional but also intuitive and
                impactful.
              </p>
              <p>
                I value continuous learning, problem-solving, and writing code that balances performance, usability, and scalability.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className={cardClass}>
              <Cpu className="text-blue-400 mb-4" size={32} />
              <h3 className={headingClass}>Computer Engineering</h3>
              <p className={descClass}>
                Solid foundation in system architecture and hardware-software
                integration.
              </p>
            </div>
            <div className={cardClass}>
              <Brain className="text-indigo-400 mb-4" size={32} />
              <h3 className={headingClass}>AI Integration</h3>
              <p className={descClass}>
                Experience leveraging Vertex AI and OpenAI to create intelligent
                apps.
              </p>
            </div>
            <div className={`${cardClass} md:col-span-2`}>
              <Code className="text-blue-400 mb-4" size={32} />
              <h3 className={headingClass}>Modern Web Stack</h3>
              <p className={descClass}>
                Expertise in React, Next.js, Firebase, and cloud-native
                development workflows.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}



