import { X, Github, Linkedin, Twitter, Mail } from "lucide-react";
import React, { memo } from "react";
import { NavBarProps } from "./tipos";

function NavBar({ theme = "dark", navbarOpen, setNavbarOpen, t }: NavBarProps) {
  return (
    <div
      className={`fixed inset-0 z-50 flex transition-opacity duration-300 ${
        navbarOpen ? "opacity-100" : "opacity-0 pointer-events-none"
      }`}
    >
      <div
        className={`relative w-80 h-full bg-cover bg-center shadow-2xl p-6 flex flex-col transform transition-transform duration-300 ${
          navbarOpen ? "translate-x-0" : "-translate-x-full"
        }`}
        style={{ backgroundImage: "url('/fotoDevProfissional.jpeg')" }}
      >
        <div
          className={`absolute inset-0 bg-gradient-to-b from-transparent ${theme === "dark" ? "to-[#DC0428]/40" : "to-[#18DE02]/40"}`}
        />
        <div className="relative z-10 flex flex-col flex-1">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-2xl font-bold text-white">{t.contactTitle}</h2>
            <button
              onClick={() => setNavbarOpen(false)}
              className="p-2 rounded-lg bg-transparent text-white"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          <div className="flex flex-col items-center mb-8">
            <h3 className="text-xl font-bold text-white">Caio Miranda</h3>
            <p className="text-sm text-gray-200">{t.devTitle}</p>
          </div>

          <nav className="space-y-3 flex-1">
            <a
              href="https://github.com/caiom21"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 py-3 px-4 rounded-lg bg-white/10 hover:bg-white/20 transition-all text-white"
            >
              <Github className="w-5 h-5" />
              <span>GitHub</span>
            </a>
            <a
              href="https://www.linkedin.com/in/caio-miranda-7817b2307"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 py-3 px-4 rounded-lg bg-white/10 hover:bg-white/20 transition-all text-white"
            >
              <Linkedin className="w-5 h-5" />
              <span>LinkedIn</span>
            </a>
            <a
              href="mailto:caiomvasconcelos21@gmail.com"
              className="flex items-center gap-3 py-3 px-4 rounded-lg bg-white/10 hover:bg-white/20 transition-all text-white"
            >
              <Mail className="w-5 h-5" />
              <span>Email</span>
            </a>
          </nav>

          <div className="mt-6 p-4 rounded-lg bg-black/20">
            <p className="text-sm text-center text-white">
              © 2026 Caio Miranda
            </p>
          </div>
        </div>
      </div>
      <div
        className="flex-1 bg-black/50 backdrop-blur-sm"
        onClick={() => setNavbarOpen(false)}
      />
    </div>
  );
}
export default memo(NavBar);
