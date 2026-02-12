import { Menu, Settings, Globe } from "lucide-react";
import { HeaderProps } from "./tipos";
import { memo } from "react";

 function Header({
  theme = "dark",
  navbarOpen,
  setNavbarOpen,
  settingsOpen,
  setSettingsOpen,
  toggleLanguage,
  t,
}: HeaderProps) {
  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 ${theme === "dark" ? "bg-[#121212]/90" : "bg-[#F5F7FA]/90"} backdrop-blur-xl border-b ${theme === "dark" ? "border-gray-800" : "border-gray-200"} shadow-lg`}
    >
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <button
            onClick={() => setNavbarOpen(!navbarOpen)}
            className={`p-2 rounded-lg ${theme === "dark" ? "hover:bg-gray-800" : "hover:bg-gray-100"} transition-all hover:scale-110 active:scale-95`}
            aria-label={t.menuAriaLabel}
          >
            <Menu className="w-6 h-6" />
          </button>
          <h1
            className={`text-2xl font-bold ${theme === "dark" ? "bg-gradient-to-r from-[#DC0428] to-[#DC4C04]" : "bg-gradient-to-r from-[#18DE02] to-[#02DE5A]"} bg-clip-text text-transparent`}
          >
            {t.portfolioTitle}
          </h1>
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={toggleLanguage}
            className={`p-2 rounded-lg ${theme === "dark" ? "hover:bg-gray-800" : "hover:bg-gray-100"} transition-all hover:scale-110 active:scale-95`}
            aria-label={t.languageAriaLabel}
          >
            <Globe className="w-6 h-6" />
          </button>
          <button
            onClick={() => setSettingsOpen(!settingsOpen)}
            className={`p-2 rounded-lg ${theme === "dark" ? "hover:bg-slate-800" : "hover:bg-slate-100"} transition-all hover:scale-110 active:scale-95`}
            aria-label={t.settingsAriaLabel}
          >
            <Settings className="w-6 h-6" />
          </button>
        </div>
      </div>
    </header>
  );
}

export default memo(Header);
