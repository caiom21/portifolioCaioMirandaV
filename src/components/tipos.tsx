import React from "react";

// Tipos Globais
export type Language = "pt" | "en";
export type Theme = "dark" | "light";

// Tipo para os itens do Carrossel de Projetos
export interface CarouselItem {
  image: string;
  title: string;
  description: string;
  projectLink: string;
  technologies: string[];
}

// Tipo para as Habilidades (ex: Barras de progresso)
export interface Skill {
  name: string;
  level: number;
}

// Tipo para a Formação Acadêmica
export interface Education {
  degree: string;
  institution: string;
  period: string;
}

// Tipo para as Habilidades Técnicas (com ícones)
export type TechSkill = {
  name: string;
  description: string;
  icon: React.ElementType;
};

// Props para o componente Header
export interface HeaderProps {
  theme: Theme;
  navbarOpen: boolean;
  setNavbarOpen: (open: boolean) => void;
  settingsOpen: boolean;
  setSettingsOpen: (open: boolean) => void;
  toggleLanguage: () => void;
  t: any;
}

// Props para o componente NavBar
export interface NavBarProps {
  theme: Theme;
  navbarOpen: boolean;
  setNavbarOpen: (open: boolean) => void;
  t: any;
}

// Props para o componente SideBarSettings
export interface SideBarSettingsProps {
  theme: Theme;
  settingsOpen: boolean;
  setSettingsOpen: (open: boolean) => void;
  setTheme: (theme: Theme) => void;
  t: any;
}

// Props para o componente Carrossel
export interface CarrosselProps {
  theme: Theme;
  currentSlide: number;
  setCurrentSlide: (index: number) => void;
  carouselData: CarouselItem[];
}

// Props para o componente SideBar
export interface SideBarProps {
  theme: Theme;
  showEducationOnly?: boolean;
  showSkillsOnly?: boolean;
  education: Education[];
  skills: Skill[];
  t: any;
}

// Props para o componente Footer
export interface FooterProps {
  theme: Theme;
  t: any;
}

// Props para o componente Habilidades (anteriormente Main)
export interface HabilidadesProps {
  theme: Theme;
  t: any;
  techSkills: TechSkill[];
}
