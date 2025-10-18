# 🚀 Portafolio Personal

Un sitio web moderno tipo portafolio/CV construido con las últimas tecnologías web.

## 🛠️ Stack Tecnológico

- **Framework**: [Next.js 15](https://nextjs.org/) (App Router)
- **Lenguaje**: [TypeScript](https://www.typescriptlang.org/)
- **Estilos**: [TailwindCSS](https://tailwindcss.com/)
- **Componentes UI**: [shadcn/ui](https://ui.shadcn.com/)
- **Animaciones**: [Framer Motion](https://www.framer.com/motion/)
- **Iconos**: [Lucide React](https://lucide.dev/)

## ✨ Características

- 🎨 Diseño moderno y profesional
- 🌙 Soporte para modo oscuro/claro
- 📱 Completamente responsive
- ⚡ Animaciones fluidas con Framer Motion
- 🎯 Navegación suave entre secciones
- 🧩 Componentes reutilizables con shadcn/ui
- 🎭 Efectos hover y transiciones elegantes
- 🔍 SEO optimizado

## 📦 Secciones

1. **Hero** - Presentación con avatar animado y enlaces a redes sociales
2. **Sobre Mí** - Información personal y características destacadas
3. **Proyectos** - Showcase de proyectos con imágenes, tecnologías y enlaces
4. **Habilidades** - Categorización de tecnologías y herramientas
5. **Contacto** - Formulario de contacto e información de contacto
6. **Footer** - Enlaces rápidos y créditos

## 🚀 Instalación y Uso

### Requisitos Previos

- Node.js 18+ instalado
- npm o yarn

### Instalación

```bash
# Instalar dependencias
npm install

# Ejecutar en modo desarrollo
npm run dev

# Compilar para producción
npm run build

# Ejecutar versión de producción
npm start
```

El sitio estará disponible en [http://localhost:3000](http://localhost:3000)

## 🎨 Personalización

### 1. Información Personal

Edita los siguientes archivos para personalizar tu información:

- `components/Hero.tsx` - Nombre, título y enlaces a redes sociales
- `components/About.tsx` - Biografía y características
- `components/Projects.tsx` - Tus proyectos
- `components/Skills.tsx` - Tus habilidades
- `components/Contact.tsx` - Información de contacto

### 2. Colores y Tema

Los colores se configuran en `app/globals.css` usando variables CSS:

```css
:root {
  --primary: ...;
  --secondary: ...;
  /* más variables */
}
```

### 3. Componentes

Los componentes de UI de shadcn están en `components/ui/` y pueden ser personalizados según necesites.

## 📱 Componentes Principales

```
components/
├── Header.tsx      # Barra de navegación fija
├── Hero.tsx        # Sección hero con animación
├── About.tsx       # Sección sobre mí
├── Projects.tsx    # Grid de proyectos
├── Skills.tsx      # Categorías de habilidades
├── Contact.tsx     # Formulario y datos de contacto
├── Footer.tsx      # Pie de página
└── ui/            # Componentes de shadcn/ui
    ├── button.tsx
    ├── card.tsx
    ├── badge.tsx
    └── separator.tsx
```

## 🌐 Despliegue

### Vercel (Recomendado)

1. Sube tu código a GitHub
2. Importa el proyecto en [Vercel](https://vercel.com)
3. Vercel detectará automáticamente Next.js y configurará todo

### Otras Plataformas

- **Netlify**: Compatible con Next.js
- **AWS Amplify**: Soporte para Next.js
- **Docker**: Incluye `next.config.ts` para contenedores

## 📝 Scripts Disponibles

```bash
npm run dev       # Servidor de desarrollo
npm run build     # Compilar para producción
npm start         # Ejecutar build de producción
npm run lint      # Ejecutar linter
```

## 🤝 Contribuciones

¡Las contribuciones son bienvenidas! Siéntete libre de:

1. Fork el proyecto
2. Crear una rama con tu feature (`git checkout -b feature/AmazingFeature`)
3. Commit tus cambios (`git commit -m 'Add some AmazingFeature'`)
4. Push a la rama (`git push origin feature/AmazingFeature`)
5. Abrir un Pull Request

## 📄 Licencia

Este proyecto está bajo la Licencia MIT - mira el archivo [LICENSE](LICENSE) para más detalles.

## 🙏 Agradecimientos

- [Next.js Team](https://nextjs.org/)
- [shadcn/ui](https://ui.shadcn.com/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Framer Motion](https://www.framer.com/motion/)
- [Lucide Icons](https://lucide.dev/)

---

Hecho con ❤️ y Next.js
