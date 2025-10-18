# 🚀 Guía Rápida - Personaliza tu Portafolio

## 📝 Paso 1: Actualiza tu Información Personal

Abre el archivo `lib/constants.ts` y edita tus datos:

```typescript
export const SITE_CONFIG = {
  // 👤 Cambia estos valores
  name: "Tu Nombre Aquí",                    // ← Tu nombre completo
  title: "Desarrollador Full Stack",         // ← Tu título/rol
  description: "Portafolio profesional...",  // ← Tu descripción
  location: "Tu Ciudad, País",               // ← Tu ubicación
  phone: "+XX XXX XXX XXX",                  // ← Tu teléfono
  
  // 🔗 Actualiza tus enlaces
  email: "tuemail@gmail.com",                // ← Tu email
  github: "https://github.com/tuusuario",    // ← Tu GitHub
  linkedin: "https://linkedin.com/in/tuusuario", // ← Tu LinkedIn
};
```

### ✅ ¡Eso es todo para el paso 1!

Todos los componentes se actualizarán automáticamente:
- ✨ Hero → Muestra tu nombre
- 📧 Contact → Usa tu email
- 🔗 Redes sociales → Enlazan a tus perfiles

---

## 🎨 Paso 2: Personaliza el Contenido

### 2.1 Sección "Sobre Mí" (`components/About.tsx`)

Edita tu biografía (líneas 87-95):

```tsx
<p className="...">
  Escribe aquí tu biografía personal.
  Cuéntanos sobre tu experiencia, pasiones y objetivos.
</p>
```

### 2.2 Proyectos (`components/Projects.tsx`)

Agrega tus proyectos reales (líneas 11-46):

```tsx
const projects = [
  {
    title: "Nombre del Proyecto",
    description: "Descripción detallada de qué hace el proyecto",
    image: "URL_de_imagen", // Ver opciones abajo
    tags: ["React", "Node.js", "MongoDB"],
    github: "https://github.com/tu-usuario/tu-repo",
    demo: "https://tu-proyecto-demo.com",
  },
  // ... más proyectos
];
```

**Opciones para imágenes de proyectos:**
1. Tus propias screenshots: Guarda en `/public/projects/proyecto1.png` y usa `"/projects/proyecto1.png"`
2. Unsplash: `"https://images.unsplash.com/photo-XXXXXX?w=800&q=80"`
3. Placeholder: `"https://placehold.co/800x400"`

### 2.3 Habilidades (`components/Skills.tsx`)

Actualiza tus tecnologías (líneas 8-42):

```tsx
const skillCategories = [
  {
    category: "Frontend",
    skills: ["React", "Next.js", "TypeScript", /* tus skills */],
  },
  {
    category: "Backend",
    skills: ["Node.js", "Python", /* tus skills */],
  },
  // ... más categorías
];
```

---

## 🎨 Paso 3: Cambia los Colores (Opcional)

Edita `app/globals.css` (línea 46):

```css
:root {
  --primary: oklch(0.205 0 0);  /* Color principal - cámbialo aquí */
}
```

**Herramientas útiles:**
- [oklch.com](https://oklch.com/) - Convertir colores
- [shadcn themes](https://ui.shadcn.com/themes) - Temas predefinidos

---

## 🖼️ Paso 4: Agrega tu Foto (Opcional)

**Opción 1:** Mantén el emoji actual 👨‍💻 (sin cambios)

**Opción 2:** Usa tu foto:

1. Guarda tu foto como `/public/avatar.jpg`
2. En `components/Hero.tsx` (línea 18-21), reemplaza:

```tsx
// De:
<div className="...">👨‍💻</div>

// A:
<Image
  src="/avatar.jpg"
  alt={SITE_CONFIG.name}
  width={160}
  height={160}
  className="rounded-full object-cover"
/>
```

3. Agrega el import:
```tsx
import Image from "next/image";
```

---

## ✅ Checklist Rápido

Marca lo que ya has hecho:

- [ ] ✏️ Actualicé `lib/constants.ts` con mis datos
- [ ] 📝 Edité mi biografía en `About.tsx`
- [ ] 💼 Agregué mis proyectos en `Projects.tsx`
- [ ] 🛠️ Actualicé mis habilidades en `Skills.tsx`
- [ ] 📧 Verifiqué que mi email esté correcto
- [ ] 🔗 Actualicé mis enlaces de redes sociales
- [ ] 🎨 (Opcional) Cambié los colores del tema
- [ ] 📸 (Opcional) Agregué mi foto de perfil

---

## 🚀 Siguiente Paso: Desplegar

Una vez personalizado, puedes desplegarlo en Vercel:

1. Sube tu código a GitHub
2. Ve a [vercel.com](https://vercel.com)
3. Importa tu repositorio
4. ¡Listo! Tu portafolio estará en línea

---

## 💡 Tips Extras

### Agregar más secciones de navegación
Edita `lib/constants.ts`:
```typescript
export const NAV_ITEMS = [
  { name: "Inicio", href: "#inicio" },
  { name: "Nueva Sección", href: "#nueva" }, // ← Agrega aquí
];
```

### Cambiar meta tags (SEO)
Edita `app/layout.tsx` (línea 15-18):
```typescript
export const metadata: Metadata = {
  title: "Tu Nombre | Tu Título",
  description: "Tu descripción personalizada",
};
```

### Formulario de contacto funcional
Ve a `CUSTOMIZATION.md` para opciones como EmailJS, Resend o Formspree.

---

## 🆘 ¿Necesitas Ayuda?

- 📖 **README.md** - Documentación completa
- 🎨 **CUSTOMIZATION.md** - Guía detallada de personalización
- 📁 **PROJECT_STRUCTURE.md** - Estructura del proyecto

---

**¡Tu portafolio está listo para brillar! ✨**

Recuerda: Todos los cambios se reflejan automáticamente gracias a hot-reload.

