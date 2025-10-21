// Constantes y configuración del portafolio
// ⚠️ PERSONALIZA ESTOS VALORES CON TU INFORMACIÓN

export const SITE_CONFIG = {
  // Información personal
  name: "Salvador Salgado",
  title: "Desarrollador Mobile and Web",
  description: "Portafolio profesional de desarrollo web",
  bio: "apasionado por crear experiencias web increíbles y soluciones innovadoras",
  location: "Cuernavaca, Morelos",
  phone: "+7771292438",
  
  // Redes sociales y contacto
  email: process.env.NEXT_PUBLIC_EMAIL || "salvador2salgado@gmail.com",
  github: process.env.NEXT_PUBLIC_GITHUB_URL || "https://github.com/Salvasgdo",
  linkedin: process.env.NEXT_PUBLIC_LINKEDIN_URL || "https://linkedin.com/in/salvador-salgado-toledano",
  
  // CVs (guarda tus archivos PDF en /public/)
  cvEs: "/cv-salvador-salgado-es.pdf", // CV en español
  cvEn: "/cv-salvador-salgado-en.pdf", // CV en inglés
};

export const NAV_ITEMS = [
  { name: "Inicio", href: "#inicio", i18nKey: "inicio" },
  { name: "Sobre Mí", href: "#sobre-mi", i18nKey: "sobremi" },
  { name: "Proyectos", href: "#proyectos", i18nKey: "proyectos" },
  { name: "Experiencia", href: "#experiencia", i18nKey: "experiencia" },
  { name: "Habilidades", href: "#habilidades", i18nKey: "habilidades" },
  { name: "Contacto", href: "#contacto", i18nKey: "contacto" },
];

// Animaciones comunes de Framer Motion
export const FADE_IN_UP = {
  initial: { opacity: 0, y: 50 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 0.5 },
  viewport: { once: true },
};

export const FADE_IN_DOWN = {
  initial: { opacity: 0, y: -50 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 0.5 },
  viewport: { once: true },
};

export const FADE_IN_LEFT = {
  initial: { opacity: 0, x: -50 },
  whileInView: { opacity: 1, x: 0 },
  transition: { duration: 0.5 },
  viewport: { once: true },
};

export const FADE_IN_RIGHT = {
  initial: { opacity: 0, x: 50 },
  whileInView: { opacity: 1, x: 0 },
  transition: { duration: 0.5 },
  viewport: { once: true },
};

export const SCALE_IN = {
  initial: { opacity: 0, scale: 0 },
  whileInView: { opacity: 1, scale: 1 },
  transition: { duration: 0.5, type: "spring", stiffness: 100 },
  viewport: { once: true },
};

// Experiencia profesional
// ⚠️ Las traducciones están en lib/translations.ts bajo experience.items
export const EXPERIENCES = [
  {
    id: "axity",
    technologies: ["React Native", "SwiftUI", "TypeScript", "JavaScript", "XCode", "Git", "CI/CD"],
    logo: "/logos/axity.jpeg"
  },
  {
    id: "maanyu",
    technologies: ["React Native", "Redux", "JavaScript", "TypeScript", "Git", "CI/CD"],
    logo: "/logos/maanyu.jpeg"
  },
  {
    id: "tecno",
    technologies: ["React Native", "JavaScript", "Git", "CI/CD", "Linux", "Nginx", "NodeJs", "Jest", "Android Studio", "XCode"],
    logo: "/logos/tecno.jpeg"
  }
];

// Proyectos
// ⚠️ Las traducciones están en lib/translations.ts bajo projects.items
export const PROJECTS = [
  {
    id: "portfolio",
    image: "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=800&q=80",
    tags: ["Next.js", "TypeScript", "TailwindCSS", "Framer Motion", "React"],
    github: "https://github.com/Salvasgdo",
    demo: "#",
  },
  /*{
    id: "ecommerce",
    image: "https://images.unsplash.com/photo-1557821552-17105176677c?w=800&q=80",
    tags: ["Next.js", "TypeScript", "Stripe", "PostgreSQL"],
    github: "#",
    demo: "#",
  },
  {
    id: "taskManagement",
    image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&q=80",
    tags: ["React", "Firebase", "TailwindCSS", "Framer Motion"],
    github: "#",
    demo: "#",
  }*/
];

