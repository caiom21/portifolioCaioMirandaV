import { memo } from "react";
import { HabilidadesProps, TechSkill } from "./tipos";

function Habilidades({ theme, t, techSkills }: HabilidadesProps) {
  return (
    <div
      className={`p-8 rounded-2xl bg-transparent backdrop-blur-sm border ${
        theme === "dark" ? "border-gray-800" : "border-gray-200"
      } shadow-lg`}
    >
      <h3 className="text-2xl font-bold mb-6">{t.mainTitle}</h3>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {techSkills.map((skill: TechSkill) => (
          <div
            key={skill.name}
            className={`p-6 rounded-xl border transition-all duration-300 ${
              theme === "dark"
                ? "border-gray-700 hover:border-red-500/50 hover:shadow-red-500/10"
                : "border-gray-300 hover:border-green-500/50 hover:shadow-green-500/10"
            } hover:shadow-lg`}
          >
            <div className="flex items-center gap-4 mb-3">
              <skill.icon
                className={`w-7 h-7 ${
                  theme === "dark" ? "text-red-500" : "text-green-500"
                }`}
              />
              <h4 className="font-bold text-lg">{skill.name}</h4>
            </div>
            <p className="text-sm">{skill.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default memo(Habilidades);
