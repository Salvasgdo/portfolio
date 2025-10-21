// Tipos personalizados para el portafolio

export interface Project {
  title: string;
  description: string;
  image: string;
  tags: string[];
  github?: string;
  demo?: string;
  featured?: boolean;
}

export interface Skill {
  name: string;
  level?: number;
  category: string;
}

export interface SkillCategory {
  category: string;
  skills: string[];
}

export interface ContactInfo {
  icon: any;
  label: string;
  value: string;
  href: string;
}

export interface SocialLink {
  name: string;
  url: string;
  icon: any;
}

export interface Experience {
  company: string;
  position: string;
  period: string;
  description: string;
  technologies: string[];
  logo?: string; // URL o ruta al logo de la empresa
}

export interface Education {
  institution: string;
  degree: string;
  period: string;
  description?: string;
}

