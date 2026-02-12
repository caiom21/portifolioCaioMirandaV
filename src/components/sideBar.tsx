import { GraduationCap, Zap } from "lucide-react";
import React from "react";
import { SideBarProps } from "./tipos";


export default function SideBar({
  theme = "dark",
  showEducationOnly = false,
  showSkillsOnly = false,
  education,
  skills,
  t,
}: SideBarProps) {
  const showBoth = !showEducationOnly && !showSkillsOnly;

  return (
    <aside className="w-full space-y-6 ">
      {(showEducationOnly || showBoth) && (
        <div
          className={`p-6 rounded-2xl bg-transparent border ${theme === "dark" ? "border-gray-800" : "border-gray-200"} shadow-lg h-[385px]`}
        >
          <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
            <GraduationCap className="w-6 h-6" />
            {t.academicEducation}
          </h2>
          <div className="space-y-4 px-4 max-h-60  overflow-y-automax-h-[280px]  overflow-y-auto">
            {education.map((edu, index) => (
              <div
                key={index}
                className={`pb-4 ${index !== education.length - 1 ? `border-b ${theme === "dark" ? "border-gray-800" : "border-gray-200"}` : ""}`}
              >
                <h3 className="font-semibold text-lg mb-1">{edu.degree}</h3>
                <p
                  className={`text-sm ${theme === "dark" ? "text-gray-400" : "text-gray-600"} mb-1`}
                >
                  {edu.institution}
                </p>
                <p
                  className={`text-xs ${theme === "dark" ? "text-[#DC0428]" : "text-[#18DE02]"} font-medium`}
                >
                  {edu.period}
                </p>
              </div>
            ))}
          </div>
        </div>
      )}

      {(showSkillsOnly || showBoth) && (
        <div
          className={` p-6 rounded-2xl bg-transparent border ${theme === "dark" ? "border-gray-800" : "border-gray-200"} shadow-lg h-full flex flex-col`}
        >
          <h2 className="text-2xl font-bold mb-6 flex items-center gap-2 flex-shrink-0">
            <Zap className="w-6 h-6" />
            {t.skillsTitle}
          </h2>
          <div className="max-h-40  overflow-y-auto space-y-4 overflow-y-auto px-4">
            {skills.map((skill, index) => (
              <div key={index}>
                <div className="flex justify-between mb-2 ">
                  <span className="font-medium text-sm">{skill.name}</span>
                  <span
                    className={`text-sm ${theme === "dark" ? "text-[#DC0428]" : "text-[#18DE02]"} font-semibold`}
                  >
                    {skill.level}%
                  </span>
                </div>
                <div
                  className={`h-2 rounded-full overflow-hidden ${theme === "dark" ? "bg-gray-800" : "bg-gray-200"}`}
                >
                  <div
                    className={`h-full ${theme === "dark" ? "bg-gradient-to-r from-[#DC0428] to-[#DC4C04]" : "bg-gradient-to-r from-[#18DE02] to-[#02DE5A]"} rounded-full transition-all duration-1000 ease-out`}
                    style={{ width: `${skill.level}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </aside>
  );
}
