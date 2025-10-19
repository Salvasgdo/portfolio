"use client";

import React, { createContext, useContext, useState, useEffect } from "react";

type Language = "es" | "en";

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguageState] = useState<Language>("es");

  // Cargar idioma del localStorage al iniciar
  useEffect(() => {
    const savedLanguage = localStorage.getItem("language") as Language;
    if (savedLanguage) {
      setLanguageState(savedLanguage);
    }
  }, []);

  // Guardar idioma en localStorage cuando cambie
  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    localStorage.setItem("language", lang);
  };

  // Función de traducción
  const t = (key: string): string => {
    const keys = key.split(".");
    let value: any = translations[language];
    
    for (const k of keys) {
      value = value?.[k];
    }
    
    return value || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
}

// Traducciones
const translations = {
  es: {
    nav: {
      portfolio: "Portafolio",
      inicio: "Inicio",
      sobremi: "Sobre Mí",
      proyectos: "Proyectos",
      habilidades: "Habilidades",
      contacto: "Contacto",
    },
    hero: {
      greeting: "Hola, soy",
      title: "Desarrollador Mobile and Web",
      bio: "apasionado por crear experiencias increíbles y soluciones innovadoras",
      viewProjects: "Ver Proyectos",
      contactMe: "Contáctame",
      downloadCV: "Descargar CV",
    },
    about: {
      title: "Sobre Mí",
      subtitle: "Soy un desarrollador apasionado por la tecnología y la creación de soluciones innovadoras que marquen la diferencia",
      development: "Desarrollo",
      developmentDesc: "Experiencia en desarrollo full stack con tecnologías modernas",
      design: "Diseño",
      designDesc: "Creación de interfaces atractivas y experiencias de usuario intuitivas",
      performance: "Performance",
      performanceDesc: "Optimización de aplicaciones para máximo rendimiento",
      collaboration: "Colaboración",
      collaborationDesc: "Trabajo en equipo efectivo y comunicación clara",
      bio: "Con más de 4 años de experiencia en desarrollo web, me especializo en crear aplicaciones modernas y escalables. Mi enfoque está en escribir código limpio, mantener las mejores prácticas y estar siempre aprendiendo nuevas tecnologías. Me apasiona resolver problemas complejos y convertir ideas en realidad.",
    },
    projects: {
      title: "Mis Proyectos",
      subtitle: "Algunos de los proyectos en los que he trabajado recientemente",
      code: "Código",
      demo: "Demo",
    },
    skills: {
      title: "Habilidades",
      subtitle: "Tecnologías y herramientas con las que trabajo",
      frontend: "Frontend",
      backend: "Backend",
      devops: "DevOps & Herramientas",
      design: "Diseño & Otros",
    },
    contact: {
      title: "Contacto",
      subtitle: "¿Tienes un proyecto en mente? ¡Hablemos!",
      sendMessage: "Envíame un mensaje",
      name: "Nombre",
      namePlaceholder: "Tu nombre",
      email: "Email",
      emailPlaceholder: "tu@email.com",
      message: "Mensaje",
      messagePlaceholder: "Tu mensaje...",
      send: "Enviar Mensaje",
      email2: "Email",
      phone: "Teléfono",
      location: "Ubicación",
      ready: "¿Listo para empezar?",
      available: "Estoy disponible para proyectos freelance y colaboraciones",
      cvSpanish: "CV Español",
      cvEnglish: "CV English",
    },
    footer: {
      madeWith: "Hecho con",
      and: "y",
      home: "Inicio",
      projects: "Proyectos",
      contact: "Contacto",
    },
  },
  en: {
    nav: {
      portfolio: "Portfolio",
      inicio: "Home",
      sobremi: "About Me",
      proyectos: "Projects",
      habilidades: "Skills",
      contacto: "Contact",
    },
    hero: {
      greeting: "Hi, I'm",
      title: "Mobile and Web Developer",
      bio: "passionate about creating incredible experiences and innovative solutions",
      viewProjects: "View Projects",
      contactMe: "Contact Me",
      downloadCV: "Download CV",
    },
    about: {
      title: "About Me",
      subtitle: "I'm a developer passionate about technology and creating innovative solutions that make a difference",
      development: "Development",
      developmentDesc: "Experience in full stack development with modern technologies",
      design: "Design",
      designDesc: "Creating attractive interfaces and intuitive user experiences",
      performance: "Performance",
      performanceDesc: "Application optimization for maximum performance",
      collaboration: "Collaboration",
      collaborationDesc: "Effective teamwork and clear communication",
      bio: "With over 4 years of experience in web development, I specialize in creating modern and scalable applications. My focus is on writing clean code, maintaining best practices, and always learning new technologies. I'm passionate about solving complex problems and turning ideas into reality.",
    },
    projects: {
      title: "My Projects",
      subtitle: "Some of the projects I've been working on recently",
      code: "Code",
      demo: "Demo",
    },
    skills: {
      title: "Skills",
      subtitle: "Technologies and tools I work with",
      frontend: "Frontend",
      backend: "Backend",
      devops: "DevOps & Tools",
      design: "Design & Others",
    },
    contact: {
      title: "Contact",
      subtitle: "Have a project in mind? Let's talk!",
      sendMessage: "Send me a message",
      name: "Name",
      namePlaceholder: "Your name",
      email: "Email",
      emailPlaceholder: "your@email.com",
      message: "Message",
      messagePlaceholder: "Your message...",
      send: "Send Message",
      email2: "Email",
      phone: "Phone",
      location: "Location",
      ready: "Ready to start?",
      available: "I'm available for freelance projects and collaborations",
      cvSpanish: "Spanish CV",
      cvEnglish: "English CV",
    },
    footer: {
      madeWith: "Made with",
      and: "and",
      home: "Home",
      projects: "Projects",
      contact: "Contact",
    },
  },
};

