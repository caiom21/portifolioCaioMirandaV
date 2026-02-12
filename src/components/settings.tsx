import { X } from "lucide-react";

interface SideBarProps {
  theme?: string;
  settingsOpen: boolean;
  setSettingsOpen: (open: boolean) => void;
  setTheme: (theme: string) => void;
}

export default function SideBar({
  theme = "dark",
  settingsOpen,
  setSettingsOpen,
  setTheme,
}: SideBarProps) {
  if (!settingsOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex justify-end">
      <div
        className="flex-1 bg-black/50 backdrop-blur-sm"
        onClick={() => setSettingsOpen(false)}
      />
      <div
        className={`w-80 h-full ${theme === "dark" ? "bg-slate-900" : "bg-white"} shadow-2xl transform transition-transform duration-300 p-6`}
      >
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-2xl font-bold">Configurações</h2>
          <button
            onClick={() => setSettingsOpen(false)}
            className={`p-2 rounded-lg ${theme === "dark" ? "hover:bg-slate-800" : "hover:bg-slate-100"}`}
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        <div className="space-y-6">
          <div>
            <label className="block text-sm font-semibold mb-3">Tema</label>
            <div className="flex gap-3">
              <button
                onClick={() => setTheme("light")}
                className={`flex-1 py-3 px-4 rounded-lg border-2 transition-all ${
                  theme === "light"
                    ? "border-blue-500 bg-blue-500/10"
                    : theme === "dark"
                      ? "border-slate-700"
                      : "border-slate-300"
                }`}
              >
                ☀️ Claro
              </button>
              <button
                onClick={() => setTheme("dark")}
                className={`flex-1 py-3 px-4 rounded-lg border-2 transition-all ${
                  theme === "dark"
                    ? "border-blue-500 bg-blue-500/10"
                    : "border-slate-300"
                }`}
              >
                🌙 Escuro
              </button>
            </div>
          </div>

          <div
            className={`p-4 rounded-lg ${theme === "dark" ? "bg-slate-800" : "bg-slate-100"}`}
          >
            <h3 className="font-semibold mb-2">Preferências</h3>
            <p className="text-sm opacity-70">Mais configurações em breve...</p>
          </div>
        </div>
      </div>
    </div>
  );
}
