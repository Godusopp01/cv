import { useTheme } from "./ThemeContext";
import { Mail, MessageSquare, Phone } from "lucide-react";
import { FaGithub } from "react-icons/fa";
export default function Footer() {
  const { isDark } = useTheme();
  return (
    <footer
      className={`py-12 px-6 border-t transition-colors duration-300 ${
        isDark ? "border-white/5" : "border-slate-200"
      }`}
    >
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-left justify-between gap-10">

        {/* Left */}
        <div className="text-left md:text-left max-w-xl">
          <h3 className="text-xl font-bold bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent">
            CONTACT
          </h3>

        </div>

        {/* Right */}
        <div className="flex flex-col gap-4 text-sm">
          
          {/* Email */}
          <a
            href="mailto:poruethaikitikam@gmail.com"
            className={`flex items-center gap-3 transition-colors ${
              isDark
                ? "text-gray-300 hover:text-blue-400"
                : "text-slate-700 hover:text-blue-600"
            }`}
          >
            <Mail size={18} />
            <span>poruethaikitikam@gmail.com</span>
          </a>

          {/* GitHub */}
          <a
            href="https://github.com/Godusopp01"
            target="_blank"
            rel="noopener noreferrer"
            className={`flex items-center gap-3 transition-colors ${
              isDark
                ? "text-gray-300 hover:text-blue-400"
                : "text-slate-700 hover:text-blue-600"
            }`}
          >
            <FaGithub size={18} />
            <span>github.com/Godusopp01</span>
          </a>

          {/* Phone */}
          <a
            className={`flex items-center gap-3 transition-colors ${
              isDark
                ? "text-gray-300 hover:text-blue-400"
                : "text-slate-700 hover:text-blue-600"
            }`}
          >
            <Phone size={18} />
            <span>+66 92-625-6796</span>
          </a>

        </div>
      </div>
    </footer>
  );
}



