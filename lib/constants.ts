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
  github: process.env.NEXT_PUBLIC_GITHUB_URL || "https://github.com/tuusuario",
  linkedin: process.env.NEXT_PUBLIC_LINKEDIN_URL || "https://linkedin.com/in/tuusuario",
  
  // URLs (opcional)
  twitter: "https://twitter.com/tuusuario", // opcional
  portfolio: "https://tu-sitio.com", // opcional
  
  // CVs (guarda tus archivos PDF en /public/)
  cvEs: "/cv-salvador-salgado-es.pdf", // CV en español
  cvEn: "/cv-salvador-salgado-en.pdf", // CV en inglés
};

export const NAV_ITEMS = [
  { name: "Inicio", href: "#inicio" },
  { name: "Sobre Mí", href: "#sobre-mi" },
  { name: "Proyectos", href: "#proyectos" },
  { name: "Habilidades", href: "#habilidades" },
  { name: "Contacto", href: "#contacto" },
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

