import { X, Sun, Moon } from "lucide-react";
import React, { memo } from "react";

import { SideBarSettingsProps } from "./tipos";

function SideBarSettings({
  theme = "dark",
  settingsOpen,
  setSettingsOpen,
  setTheme,
  t,
}: SideBarSettingsProps) {
  return (
    <div
      className={`fixed inset-0 z-50 flex justify-end transition-opacity duration-300 ${
        settingsOpen ? "opacity-100" : "opacity-0 pointer-events-none"
      }`}
    >
      <div
        className="flex-1 bg-black/50 backdrop-blur-sm"
        onClick={() => setSettingsOpen(false)}
      />
      <div
        className={`w-80 h-full ${theme === "dark" ? "bg-[#121212]" : "bg-[#F5F7FA]"} shadow-2xl transform transition-transform duration-300 p-6 ${
          settingsOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-2xl font-bold">{t.settingsTitle}</h2>
          <button
            onClick={() => setSettingsOpen(false)}
            className={`p-2 rounded-lg ${theme === "dark" ? "hover:bg-gray-800" : "hover:bg-gray-100"}`}
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        <div className="space-y-6">
          <div>
            <label className="block text-sm font-semibold mb-3">
              {t.themeTitle}
            </label>
            <div className="flex gap-3">
              <button
                onClick={() => setTheme("light")}
                className={`flex items-center justify-center gap-2 flex-1 py-3 px-4 rounded-lg border-2 transition-all ${
                  theme === "light"
                    ? "border-[#18DE02] bg-[#18DE02]/10"
                    : theme === "dark"
                      ? "border-gray-700"
                      : "border-gray-300"
                }`}
              >
                <Sun className="w-5 h-5" />
                Claro
              </button>
              <button
                onClick={() => setTheme("dark")}
                className={`flex items-center justify-center gap-2 flex-1 py-3 px-4 rounded-lg border-2 transition-all ${
                  theme === "dark"
                    ? "border-[#DC0428] bg-[#DC0428]/10"
                    : "border-gray-300"
                }`}
              >
                <Moon className="w-5 h-5" />
                Escuro
              </button>
            </div>
          </div>

          <div
            className={`p-4 rounded-lg ${theme === "dark" ? "bg-gray-800" : "bg-gray-100"}`}
          >
            <h3 className="font-semibold mb-2">Preferências</h3>
            <p className="text-sm opacity-70">Mais configurações em breve...</p>
          </div>
        </div>
      </div>
    </div>
  );
}
export default memo(SideBarSettings);
