import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import { FaGithub } from "react-icons/fa";
import { useTheme } from "@/components/ThemeContext";

const projects = [
  {
    title: "QR Ordering System",
    description:
      "A comprehensive restaurant ordering platform featuring secure authentication and a real-time dashboard for kitchen management.",
    image:
      "./qrpic.png",
    tech: ["Next.js", "Firebase", "Tailwind CSS", "TypeScript"],
    github: "https://github.com/Godusopp01/QR-Dining.git",
    live: "https://qr-dining-omega.vercel.app/",
  },
  {
    title: "Booking Room Website",
    description:
      "A modern room booking platform with real-time availability and reservation management.",
    image:
      "./bookpic.png",
    tech: ["Next.js", "JavaScript", "Tailwind CSS", "Vercel"],
    github: "https://github.com/Godusopp01/Booking-room.git",
    live: "https://booking-room-ashen.vercel.app/",
  },
  {
    title: "Billing Management",
    description:
      "A streamlined billing management platform for tracking invoices, payments, and financial records in real time.",
    image:
      "./billpic.png",
    tech: ["vue.js", "Nuxt 3", "Tailwind CSS", "Node.js" ,"JavaScript"],
    github: "https://github.com/Godusopp01/project-bill.git",
    //live: "https://billing-management.vercel.app/",
  },
];

export default function ProjectsSection() {
  const { isDark } = useTheme();
  return (
    <section id="projects" className="py-24 px-6 scroll-mt-24">
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
            Featured <span className="text-blue-400">Projects</span>
          </h2>
          <p
            className={`max-w-2xl mx-auto ${isDark ? "text-gray-500" : "text-slate-500"}`}
          >
            A selection of my recent work, showcasing my skills in full-stack
            development 
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-center justify-items-center">
          {projects.map((project, idx) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              whileHover={{ y: -10 }}
              className={`group rounded-3xl border overflow-hidden backdrop-blur-sm transition-all ${
                isDark
                  ? "bg-white/5 border-white/10"
                  : "bg-white border-slate-200 shadow-sm hover:shadow-lg hover:shadow-blue-100"
              }`}
            >
              <div className="relative h-56 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div
                  className={`absolute inset-0 bg-gradient-to-t to-transparent opacity-60 ${
                    isDark ? "from-[#0F172A]" : "from-slate-50"
                  }`}
                />
              </div>

              <div className="p-8">
                <h3
                  className={`text-2xl font-bold mb-3 transition-colors ${
                    isDark
                      ? "text-white group-hover:text-blue-400"
                      : "text-slate-900 group-hover:text-blue-600"
                  }`}
                >
                  {project.title}
                </h3>
                <p
                  className={`text-sm mb-6 line-clamp-3 ${
                    isDark ? "text-gray-400" : "text-slate-600"
                  }`}
                >
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-8">
                  {project.tech.map((t) => (
                    <span
                      key={t}
                      className={`px-3 py-1 text-xs font-semibold rounded-full border ${
                        isDark
                          ? "bg-blue-500/10 text-blue-400 border-blue-500/20"
                          : "bg-blue-50 text-blue-600 border-blue-200"
                      }`}
                    >
                      {t}
                    </span>
                  ))}
                </div>

                <div className="flex items-center gap-4">
                  <a
                    href={project.github}
                    className={`flex-1 flex items-center justify-center gap-2 px-4 py-2 rounded-xl text-sm font-bold transition-all border ${
                      isDark
                        ? "bg-white/10 text-white border-white/10 hover:bg-white/20"
                        : "bg-slate-100 text-slate-700 border-slate-200 hover:bg-slate-200"
                    }`}
                  >
                    <FaGithub size={16} />
                    Code
                  </a>
                  <a
                    href={project.live}
                    className="flex-1 flex items-center justify-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-xl text-sm font-bold hover:bg-blue-700 transition-all shadow-lg shadow-blue-600/20"
                  >
                    <ExternalLink size={16} />
                    Demo
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}



