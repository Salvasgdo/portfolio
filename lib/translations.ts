// 🌐 ARCHIVO CENTRALIZADO DE TRADUCCIONES
// ⚠️ Todas las traducciones del proyecto están aquí
// Para agregar nuevas traducciones, simplemente añádelas a los objetos es/en

export type Language = "es" | "en";

// Estructura de traducciones
export const translations = {
  es: {
    // Navegación
    nav: {
      portfolio: "Portafolio",
      inicio: "Inicio",
      sobremi: "Sobre Mí",
      proyectos: "Proyectos",
      experiencia: "Experiencia",
      habilidades: "Habilidades",
      contacto: "Contacto",
    },

    // Hero/Inicio
    hero: {
      greeting: "Hola, soy",
      title: "Desarrollador Mobile and Web",
      bio: "apasionado por crear experiencias increíbles y soluciones innovadoras",
      viewProjects: "Ver Proyectos",
      contactMe: "Contáctame",
      downloadCV: "Descargar CV",
    },

    // Sobre Mí
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
      bio: "Con más de 4 años de experiencia en desarrollo móvil, y también conocimientos en desarrollo web, me especializo en crear aplicaciones modernas y escalables. Mi enfoque está en escribir código limpio, mantener las mejores prácticas y estar siempre aprendiendo nuevas tecnologías. Me apasiona resolver problemas complejos y convertir ideas en realidad.",
    },

    // Proyectos
    projects: {
      title: "Mis Proyectos",
      subtitle: "Algunos de los proyectos en los que he trabajado recientemente",
      code: "Código",
      demo: "Demo",
      // Contenido de proyectos
      items: {
        portfolio: {
          title: "Portafolio Profesional",
          description: "Portafolio web moderno y responsivo con diseño minimalista, soporte multiidioma (ES/EN), animaciones fluidas y secciones interactivas para mostrar proyectos, experiencia y habilidades",
        },
        infokilo: {
          title: "InfoKilo",
          description: "App móvil cross-platform (iOS/Android) desarrollada con React Native: formularios dinámicos, soporte offline con Redux, notificaciones push con Firebase, multiidioma (i18next), captura de evidencias y gestión de datos en tiempo real.",
        },
        ecommerce: {
          title: "Plataforma E-Commerce",
          description: "Plataforma completa de comercio electrónico con carrito de compras, pasarela de pago y panel de administración",
        },
        taskManagement: {
          title: "Gestión de Tareas",
          description: "Aplicación de gestión de tareas con colaboración en tiempo real y tableros Kanban interactivos",
        }
      },
    },

    // Experiencia
    experience: {
      title: "Experiencia Profesional",
      subtitle: "Mi trayectoria profesional y empresas donde he trabajado",
      stack: "Stack Tecnológico",
      // Contenido de experiencias
      items: {
        axity: {
          company: "Axity | Chedraui",
          position: "Consultor Mobile en React Native y SwiftUI",
          period: "Jul 2024 - Presente",
          description: "Se trabajó en el desarrollo de la aplicación de Chedraui utilizando React Native, implementando con éxito la transición de módulos a Swift, lo que permitió optimizar el rendimiento, la gestión de estados y la arquitectura del código, mejorando significativamente la experiencia del usuario y facilitando el mantenimiento y la escalabilidad futura de la aplicación.",
        },
        maanyu: {
          company: "Maanyuba | Multiplica",
          position: "Desarrollador Mobile",
          period: "Mar 2023 - Jul 2024",
          description: "Se trabajó en el desarrollo de una aplicación móvil avanzada para FEMSA, diseñada para realizar transferencias de dinero sin inconvenientes, pagar servicios de forma ágil y controlar en tiempo real el saldo de cuentas empresariales. El proyecto se desarrolló bajo la metodología SCRUM, participando en la creación del front-end de una súper aplicación enfocada en ofrecer una experiencia fluida, segura y de alto rendimiento para los usuarios corporativos.",
        },
        tecno: {
          company: "Tecnocontrol Vehicular",
          position: "Desarrollador Full Stack",
          period: "Nov 2020 - Mar 2023",
          description: "Se trabajó en el desarrollo de una aplicación avanzada de monitoreo vehicular, capaz de dar seguimiento en tiempo real a las rutas de los vehículos, detener el motor de forma remota, crear y gestionar geocercas, así como detectar el nivel de combustible y registrar las cargas y descargas de gasolina, mejorando el control operativo y la eficiencia logística.",
        },
      },
    },

    // Habilidades
    skills: {
      title: "Habilidades",
      subtitle: "Tecnologías y herramientas con las que trabajo",
      frontend: "Frontend",
      backend: "Backend",
      devops: "DevOps & Herramientas",
      design: "Diseño & Otros",
    },

    // Contacto
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
      sending: "Enviando...",
      success: "¡Mensaje enviado! Te responderé pronto.",
      error: "No se pudo enviar. Intenta de nuevo o escríbeme a",
    },

    // Footer
    footer: {
      madeWith: "Hecho con",
      and: "y",
      home: "Inicio",
      projects: "Proyectos",
      contact: "Contacto",
    },
  },

  en: {
    // Navigation
    nav: {
      portfolio: "Portfolio",
      inicio: "Home",
      sobremi: "About Me",
      proyectos: "Projects",
      experiencia: "Experience",
      habilidades: "Skills",
      contacto: "Contact",
    },

    // Hero
    hero: {
      greeting: "Hi, I'm",
      title: "Mobile and Web Developer",
      bio: "passionate about creating incredible experiences and innovative solutions",
      viewProjects: "View Projects",
      contactMe: "Contact Me",
      downloadCV: "Download CV",
    },

    // About
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
      bio: "With over 4 years of experience in mobile development, and knowledge in web development as well, I specialize in creating modern and scalable applications. My focus is on writing clean code, maintaining best practices, and always learning new technologies. I'm passionate about solving complex problems and turning ideas into reality.",
    },

    // Projects
    projects: {
      title: "My Projects",
      subtitle: "Some of the projects I've been working on recently",
      code: "Code",
      demo: "Demo",
      // Project content
      items: {
        portfolio: {
          title: "Professional Portfolio",
          description: "Modern and responsive web portfolio with minimalist design, multilanguage support (ES/EN), smooth animations and interactive sections to showcase projects, experience and skills",
        },
        infokilo: {
          title: "InfoKilo",
          description: "Cross-platform mobile app (iOS/Android) built with React Native: dynamic forms, offline support with Redux, Firebase push notifications, multi-language (i18next), evidence capture and real-time data management.",
        },
        ecommerce: {
          title: "E-Commerce Platform",
          description: "Complete e-commerce platform with shopping cart, payment gateway and administration panel",
        },
        taskManagement: {
          title: "Task Management App",
          description: "Task management application with real-time collaboration and interactive Kanban boards",
        }
      },
    },

    // Experience
    experience: {
      title: "Professional Experience",
      subtitle: "My professional journey and companies I've worked at",
      stack: "Tech Stack",
      // Experience content
      items: {
        axity: {
          company: "Axity | Chedraui",
          position: "Mobile Consultant in React Native and SwiftUI",
          period: "Jul 2024 - Present",
          description: "Worked on the development of the Chedraui app using React Native, successfully implementing the transition of modules to Swift, which allowed optimizing performance, state management, and code architecture, significantly improving the user experience and facilitating future maintenance and scalability of the application.",
        },
        maanyu: {
          company: "Maanyuba | Multiplica",
          position: "Mobile Developer",
          period: "Mar 2023 - Jul 2024",
          description: "Worked on the development of an advanced mobile application for FEMSA, designed to perform money transfers without complications, pay services quickly, and control real-time account balances. The project was developed under the SCRUM methodology, participating in the creation of the front-end of a super application focused on offering a fluid, secure, and high-performance experience for corporate users.",
        },
        tecno: {
          company: "Tecnocontrol Vehicular",
          position: "Full Stack Developer",
          period: "Nov 2020 - Mar 2023",
          description: "Worked on the development of an advanced vehicle monitoring application, capable of real-time tracking of vehicle routes, remotely stopping the engine, creating and managing geofences, as well as detecting fuel level and registering fuel loads and deliveries, improving operational control and logistics efficiency.",
        },
      },
    },

    // Skills
    skills: {
      title: "Skills",
      subtitle: "Technologies and tools I work with",
      frontend: "Frontend",
      backend: "Backend",
      devops: "DevOps & Tools",
      design: "Design & Others",
    },

    // Contact
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
      sending: "Sending...",
      success: "Message sent! I'll get back to you soon.",
      error: "Could not send. Try again or email me at",
    },

    // Footer
    footer: {
      madeWith: "Made with",
      and: "and",
      home: "Home",
      projects: "Projects",
      contact: "Contact",
    },
  },
};

// Función helper para obtener traducciones de forma type-safe
export function getTranslation(lang: Language, key: string): string {
  const keys = key.split(".");
  let value: any = translations[lang];
  
  for (const k of keys) {
    value = value?.[k];
  }
  
  return value || key;
}

