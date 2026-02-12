import { useState, lazy, Suspense } from "react";
import {
  Heart,
  ExternalLink,
  Code2,
  Globe,
  Palette,
  FileCode,
  Server,
  GitBranch,
} from "lucide-react";
import { translations } from "../lib/translations";
import toast, { Toaster } from "react-hot-toast";

const Header = lazy(() => import("./header"));
const NavBar = lazy(() => import("./navBar"));
const SideBarSettings = lazy(() => import("./sideBarSettings"));
const Carrossel = lazy(() => import("./carrossel"));
const Habilidades = lazy(() => import("./habilidades"));
const SideBar = lazy(() => import("./sideBar"));
const Footer = lazy(() => import("./footer"));

import { Language, Theme, CarouselItem } from "./tipos";

const getCarouselData = (t: any): CarouselItem[] => [
  {
    image: "/fotoEcommerce.png",
    title: t.project1_title,
    description: t.project1_description,
    projectLink: "https://ponto-cruz-ecommerce.netlify.app/",
    technologies: [
      "TypeScript",
      "Node.js",
      "Tailwind CSS",
      "Batchfile",
      "Dockerfile",
      "Html",
      "CSS",
    ],
  },
  {
    image:
      "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=800&h=500&fit=crop",
    title: t.project2_title,
    description: t.project2_description,
    projectLink: "https://example.com/project-2",
    technologies: ["Next.js", "TypeScript", "GraphQL"],
  },
  {
    image:
      "https://images.unsplash.com/photo-1484417894907-623942c8ee29?w=800&h=500&fit=crop",
    title: t.project3_title,
    description: t.project3_description,
    projectLink: "https://example.com/project-3",
    technologies: ["HTML5", "CSS3", "JavaScript"],
  },
  {
    image:
      "https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&h=500&fit=crop",
    title: t.project4_title,
    description: t.project4_description,
    projectLink: "https://example.com/project-4",
    technologies: ["Python", "Django", "PostgreSQL"],
  },
];

const getEducationData = (t: any) => [
  {
    degree: t.degree1,
    institution: "Estácio",
    period: t.period1,
  },
  {
    degree: t.degree2,
    institution: "EBAC",
    period: t.period2,
  },
  {
    degree: t.degree3,
    institution: "ETE",
    period: "2016 - 2018",
  },
];

const getSkillsData = (t: any) => [
  { name: "JavaScript/TypeScript", level: 95 },
  { name: "React & Next.js", level: 90 },
  { name: "Node.js", level: 85 },
  { name: t.skill4, level: 80 },
  { name: t.skill5, level: 88 },
];

const getTechSkillsData = (t: any) => [
  {
    name: "React",
    description: t.reactDescription,
    icon: Code2,
  },
  {
    name: "HTML5",
    description: t.htmlDescription,
    icon: Globe,
  },
  {
    name: "CSS3",
    description: t.cssDescription,
    icon: Palette,
  },
  {
    name: "TypeScript",
    description: t.tsDescription,
    icon: FileCode,
  },
  {
    name: "Node.js",
    description: t.nodeDescription,
    icon: Server,
  },
  {
    name: "Git",
    description: t.gitDescription,
    icon: GitBranch,
  },
];

export default function Portfolio() {
  const [navbarOpen, setNavbarOpen] = useState(false);
  const [settingsOpen, setSettingsOpen] = useState(false);
  const [language, setLanguage] = useState<Language>("pt");
  const [currentSlide, setCurrentSlide] = useState(0);
  const [theme, setTheme] = useState<Theme>("dark");

  const t = translations[language];
  const carouselData = getCarouselData(t);
  const educationData = getEducationData(t);
  const skillsData = getSkillsData(t);
  const techSkillsData = getTechSkillsData(t);

  const [likes, setLikes] = useState(Array(carouselData.length).fill(false));

  const toggleLanguage = () => {
    setLanguage((prev) => (prev === "pt" ? "en" : "pt"));
  };

  const handleLike = (index: number) => {
    const newLikes = [...likes];
    newLikes[index] = !newLikes[index];
    setLikes(newLikes);
    if (newLikes[index]) {
      toast.success(t.likeNotification);
    }
  };

  const handleFormSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const myForm = event.currentTarget;
    const formData = new FormData(myForm);

    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: new URLSearchParams(formData as any).toString(),
    })
      .then(() => toast.success(t.formSuccessNotification))
      .catch(() => toast.error(t.formErrorNotification));
  };

  return (
    <div
      className={`min-h-screen ${theme === "dark" ? "bg-[#121212] text-white" : "bg-[#F5F7FA] text-[#1A1A1A]"} transition-all duration-500`}
    >
      <Toaster
        position="top-right"
        toastOptions={{
          className: "",
          style: {
            border: `1px solid ${theme === "dark" ? "#DC0428" : "#18DE02"}`,
            padding: "16px",
            color: `${theme === "dark" ? "#FFFFFF" : "#1A1A1A"}`,
            backgroundColor: `${theme === "dark" ? "#121212" : "#F5F7FA"}`,
          },
        }}
      />
      <Suspense
        fallback={
          <div className="flex h-screen w-screen items-center justify-center">
            <p>Loading...</p>
          </div>
        }
      >
        <Header
          theme={theme}
          navbarOpen={navbarOpen}
          setNavbarOpen={setNavbarOpen}
          settingsOpen={settingsOpen}
          setSettingsOpen={setSettingsOpen}
          toggleLanguage={toggleLanguage}
          t={t}
        />

        <NavBar
          theme={theme}
          navbarOpen={navbarOpen}
          setNavbarOpen={setNavbarOpen}
          t={t}
        />

        <SideBarSettings
          theme={theme}
          settingsOpen={settingsOpen}
          setSettingsOpen={setSettingsOpen}
          setTheme={setTheme}
          t={t}
        />

        <div className="container mx-auto px-4 pt-24 pb-12">
          <div className="flex flex-col lg:grid lg:grid-cols-[1fr_20rem] lg:gap-8 space-y-8 lg:space-y-0">
            {/* Coluna Principal (Carrossel e Descrição) */}
            <div className="flex flex-col space-y-8">
              {/* Carrossel */}
              <div className="lg:order-1">
                <Carrossel
                  theme={theme}
                  currentSlide={currentSlide}
                  setCurrentSlide={setCurrentSlide}
                  carouselData={carouselData}
                />
              </div>

              {/* Descrição do Projeto */}
              <div className="lg:order-3">
                <div
                  className={`p-8 md:p-8 rounded-2xl bg-transparent backdrop-blur-sm border ${theme === "dark" ? "border-gray-800" : "border-gray-200"} shadow-lg flex flex-col justify-between min-h-[270px]`}
                >
                  <div>
                    <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-4">
                      <h3 className="text-2xl font-bold mb-2 sm:mb-0">
                        {carouselData[currentSlide].title}
                      </h3>
                      <div className="flex items-center gap-2 sm:gap-4">
                        <button
                          onClick={() => handleLike(currentSlide)}
                          className={`p-2 rounded-full transition-all ${
                            likes[currentSlide]
                              ? `${theme === "dark" ? "bg-[#DC0428]" : "bg-[#18DE02]"} text-white`
                              : `bg-opacity-20 ${theme === "dark" ? "bg-gray-700" : "bg-gray-200"}`
                          }`}
                        >
                          <Heart className="w-5 h-5" />
                        </button>
                        <a
                          href={carouselData[currentSlide].projectLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className={`flex items-center gap-2 px-3 py-2 text-sm rounded-full bg-opacity-20 ${theme === "dark" ? "bg-gray-700" : "bg-gray-200"} transition-all`}
                        >
                          <ExternalLink className="w-4 h-4 sm:w-5 sm:h-5" />
                          <span className="hidden sm:inline">
                            {t.viewProject}
                          </span>
                        </a>
                      </div>
                    </div>
                    <p className="text-sm mb-6">
                      {carouselData[currentSlide].description}
                    </p>
                  </div>
                  <div className="mt-auto">
                    <h4 className="text-sm font-semibold mb-3">
                      {t.usedTechnologies}
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {carouselData[currentSlide].technologies.map((tech) => (
                        <span
                          key={tech}
                          className={`px-3 py-1 text-xs font-medium rounded-full border ${
                            theme === "dark"
                              ? "border-[#DC0428] text-[#DC0428]"
                              : "border-[#18DE02] text-[#18DE02]"
                          }`}
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Coluna Lateral (Educação e Skills) */}
            <div className="flex flex-col space-y-8 ">
              {/* Educação */}
              <div className="lg:order-2">
                <SideBar
                  theme={theme}
                  showEducationOnly
                  education={educationData}
                  skills={skillsData}
                  t={t}
                />
              </div>

              {/* Skills */}
              <div className="lg:order-4 h-[270px]">
                <SideBar
                  theme={theme}
                  showSkillsOnly
                  education={educationData}
                  skills={skillsData}
                  t={t}
                />
              </div>
            </div>

            {/* Tecnologias & Ferramentas (ocupa ambas as colunas) */}
            <div className="lg:col-span-2 lg:order-5">
              <Habilidades theme={theme} t={t} techSkills={techSkillsData} />
            </div>

            {/* Formulário de Contato */}
            <div className="lg:col-span-2 lg:order-6">
              <div
                className={`p-8 rounded-2xl bg-transparent backdrop-blur-sm border ${theme === "dark" ? "border-gray-800" : "border-gray-200"} shadow-lg`}
              >
                <h3 className="text-2xl font-bold mb-6">
                  {t.contactFormTitle}
                </h3>
                <form
                  name="contact"
                  method="POST"
                  data-netlify="true"
                  onSubmit={handleFormSubmit}
                  className="space-y-6"
                >
                  <input type="hidden" name="form-name" value="contact" />
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label
                        htmlFor="name"
                        className="block text-sm font-medium mb-2"
                      >
                        {t.nameLabel}
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        className={`w-full p-3 rounded-lg bg-transparent border ${
                          theme === "dark"
                            ? "border-gray-700 focus:ring-red-500"
                            : "border-gray-300 focus:ring-green-500"
                        } focus:outline-none focus:ring-2`}
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="email"
                        className="block text-sm font-medium mb-2"
                      >
                        {t.emailLabel}
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        className={`w-full p-3 rounded-lg bg-transparent border ${
                          theme === "dark"
                            ? "border-gray-700 focus:ring-red-500"
                            : "border-gray-300 focus:ring-green-500"
                        } focus:outline-none focus:ring-2`}
                      />
                    </div>
                  </div>
                  <div>
                    <label
                      htmlFor="message"
                      className="block text-sm font-medium mb-2"
                    >
                      {t.messageLabel}
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={5}
                      required
                      className={`w-full p-3 rounded-lg bg-transparent border ${
                        theme === "dark"
                          ? "border-gray-700 focus:ring-red-500"
                          : "border-gray-300 focus:ring-green-500"
                      } focus:outline-none focus:ring-2`}
                    ></textarea>
                  </div>
                  <div>
                    <button
                      type="submit"
                      className={`w-full md:w-auto px-8 py-3 rounded-lg text-white font-bold transition-all duration-300 ${
                        theme === "dark"
                          ? "bg-gradient-to-r from-[#DC0428] to-[#DC4C04] hover:opacity-90"
                          : "bg-gradient-to-r from-[#18DE02] to-[#02DE5A] hover:opacity-90"
                      }`}
                    >
                      {t.sendMessageButton}
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
        <Footer theme={theme} t={t} />
      </Suspense>
    </div>
  );
}
