# 🎨 Guía de Personalización

Esta guía te ayudará a personalizar tu portafolio según tus necesidades.

## 📝 Contenido Personal

### 1. Información Básica

#### Hero Section (`components/Hero.tsx`)
```tsx
// Línea 35: Cambia tu nombre
<span className="...">Tu Nombre</span>

// Línea 38-40: Cambia tu descripción
<p className="...">
  Desarrollador Full Stack apasionado por...
</p>

// Línea 59-63: Actualiza tus enlaces de redes sociales
{ icon: Github, href: "https://github.com/tuusuario", label: "GitHub" },
{ icon: Linkedin, href: "https://linkedin.com/in/tuusuario", label: "LinkedIn" },
{ icon: Mail, href: "mailto:tu@email.com", label: "Email" },
```

### 2. Sobre Mí (`components/About.tsx`)

Personaliza las características y biografía:

```tsx
// Líneas 9-30: Edita las características
const features = [
  {
    icon: Code2,
    title: "Tu Característica",
    description: "Tu descripción",
  },
  // ... más características
];

// Líneas 87-95: Actualiza tu biografía
<p className="...">
  Tu biografía personal aquí...
</p>
```

### 3. Proyectos (`components/Projects.tsx`)

Agrega tus proyectos reales:

```tsx
// Líneas 11-46: Reemplaza con tus proyectos
const projects = [
  {
    title: "Nombre de tu Proyecto",
    description: "Descripción detallada",
    image: "URL de la imagen", // Usa Unsplash o tu propia imagen
    tags: ["React", "Node.js", "etc"],
    github: "https://github.com/tu-usuario/repo",
    demo: "https://tu-proyecto.com",
  },
  // ... más proyectos
];
```

**Tip**: Para imágenes de proyectos, puedes usar:
- Screenshots de tus proyectos (guárdalas en `/public/projects/`)
- Imágenes de Unsplash: `https://images.unsplash.com/photo-ID?w=800&q=80`
- Usar servicios como [shots.so](https://shots.so/) para mockups

### 4. Habilidades (`components/Skills.tsx`)

Actualiza tus tecnologías:

```tsx
// Líneas 8-42: Modifica las categorías y habilidades
const skillCategories = [
  {
    category: "Frontend",
    skills: ["Tus", "Habilidades", "Aquí"],
  },
  // ... más categorías
];
```

### 5. Contacto (`components/Contact.tsx`)

Actualiza tu información de contacto:

```tsx
// Líneas 11-26: Cambia tus datos
const contactInfo = [
  {
    icon: Mail,
    label: "Email",
    value: "tu@email.com",
    href: "mailto:tu@email.com",
  },
  // ... más información
];
```

## 🎨 Colores y Tema

### Cambiar Colores Principales

Edita `app/globals.css`:

```css
:root {
  /* Cambia estos valores para tu paleta de colores */
  --primary: oklch(0.205 0 0);  /* Color principal */
  --secondary: oklch(0.97 0 0);  /* Color secundario */
  
  /* Modo oscuro */
}

.dark {
  --primary: oklch(0.922 0 0);  /* Color principal en dark mode */
  /* ... más colores */
}
```

**Tip**: Usa herramientas como:
- [oklch.com](https://oklch.com/) - Convertir colores a oklch
- [realtime colors](https://realtimecolors.com/) - Visualizar paletas
- [shadcn themes](https://ui.shadcn.com/themes) - Temas predefinidos

### Cambiar Radio de Bordes

```css
:root {
  --radius: 0.625rem;  /* Cambia esto para borders más/menos redondeados */
}
```

## 🖼️ Imágenes y Assets

### Avatar/Foto Personal

Opción 1: Usa un emoji (actual):
```tsx
// components/Hero.tsx, línea 18
<div className="...">👨‍💻</div>
```

Opción 2: Usa tu foto:
1. Guarda tu foto en `/public/avatar.jpg`
2. Reemplaza el emoji:
```tsx
import Image from "next/image";

<Image
  src="/avatar.jpg"
  alt="Tu Nombre"
  width={160}
  height={160}
  className="rounded-full object-cover"
/>
```

### Favicon

1. Genera un favicon en [favicon.io](https://favicon.io/)
2. Reemplaza `app/favicon.ico` con tu archivo

### Open Graph Images (para compartir en redes sociales)

Crea `app/opengraph-image.png` (1200x630px) con tu diseño personalizado.

## ⚙️ Funcionalidad del Formulario de Contacto

El formulario actual es solo visual. Para hacerlo funcional:

### Opción 1: EmailJS (Gratis, fácil)

1. Crea una cuenta en [EmailJS](https://www.emailjs.com/)
2. Instala el paquete:
```bash
npm install @emailjs/browser
```

3. Actualiza `components/Contact.tsx`:
```tsx
import emailjs from '@emailjs/browser';

const handleSubmit = (e: React.FormEvent) => {
  e.preventDefault();
  emailjs.sendForm(
    'YOUR_SERVICE_ID',
    'YOUR_TEMPLATE_ID',
    e.target as HTMLFormElement,
    'YOUR_PUBLIC_KEY'
  );
};
```

### Opción 2: Resend (Moderno, mejor para producción)

1. Instala: `npm install resend`
2. Crea una API route en `app/api/contact/route.ts`
3. Implementa el envío de emails

### Opción 3: Formspree (Sin código)

Simplemente cambia el action del form:
```tsx
<form action="https://formspree.io/f/YOUR_FORM_ID" method="POST">
```

## 🚀 Optimizaciones

### Imágenes

Usa siempre el componente `Image` de Next.js:
```tsx
import Image from "next/image";

<Image
  src="/tu-imagen.jpg"
  alt="Descripción"
  width={800}
  height={600}
  priority // Para imágenes above the fold
/>
```

### Fuentes

Las fuentes están optimizadas con `next/font/google`. Para cambiarlas:

```tsx
// app/layout.tsx
import { Inter, Roboto } from "next/font/google";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});
```

### Metadata y SEO

Actualiza `app/layout.tsx`:
```tsx
export const metadata: Metadata = {
  title: "Tu Nombre | Tu Título",
  description: "Tu descripción personalizada",
  keywords: ["tu", "palabras", "clave"],
  authors: [{ name: "Tu Nombre" }],
  openGraph: {
    title: "Tu Nombre",
    description: "Tu descripción",
    url: "https://tu-sitio.com",
    siteName: "Tu Nombre",
    locale: "es_ES",
    type: "website",
  },
};
```

## 🎭 Animaciones

Las animaciones usan Framer Motion. Para ajustar:

### Cambiar Duración
```tsx
<motion.div
  initial={{ opacity: 0 }}
  animate={{ opacity: 1 }}
  transition={{ duration: 0.8 }} // Cambia aquí (en segundos)
>
```

### Cambiar Tipo de Animación
```tsx
transition={{ 
  type: "spring",  // o "tween", "inertia"
  stiffness: 100,
  damping: 10
}}
```

### Deshabilitar Animaciones
Si prefieres un sitio sin animaciones, simplemente elimina los props de motion:
```tsx
// De esto:
<motion.div
  initial={{ opacity: 0, y: 50 }}
  animate={{ opacity: 1, y: 0 }}
>

// A esto:
<div>
```

## 📱 Responsive Design

El sitio es responsive por defecto. Para ajustar breakpoints:

```tsx
className="
  text-sm           // móvil
  md:text-base      // tablet (768px+)
  lg:text-lg        // desktop (1024px+)
  xl:text-xl        // desktop grande (1280px+)
"
```

## 🔗 Enlaces Útiles

- [Next.js Docs](https://nextjs.org/docs)
- [TailwindCSS Docs](https://tailwindcss.com/docs)
- [Framer Motion Docs](https://www.framer.com/motion/)
- [shadcn/ui Docs](https://ui.shadcn.com/)
- [Lucide Icons](https://lucide.dev/)

## 💡 Tips Finales

1. **Usa variables**: Define constantes en `lib/constants.ts`
2. **Tipos TypeScript**: Define tipos en `types/index.ts`
3. **Componentes reutilizables**: Crea componentes en `components/`
4. **Imágenes optimizadas**: Siempre usa Next.js `Image`
5. **Testing**: Prueba en diferentes dispositivos y navegadores
6. **Performance**: Usa Lighthouse para optimizar

¿Necesitas ayuda? Revisa el README.md o la documentación oficial de cada tecnología.

