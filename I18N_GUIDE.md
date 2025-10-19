# 🌍 Guía de Internacionalización (i18n)

Tu portafolio ahora soporta **Español e Inglés** con un botón de cambio de idioma.

## ✅ Ya está Configurado

### 🎯 Qué Funciona:

1. **Botón de cambio de idioma** en el Header
   - 🖥️ Desktop: Botón con icono + texto "ES/EN"
   - 📱 Móvil: Botón compacto "ES/EN"

2. **Persistencia**: El idioma seleccionado se guarda en localStorage

3. **Navegación traducida**: Los links del menú cambian automáticamente

## 🎨 Cómo se Ve:

### Desktop:
```
┌──────────────────────────────────────┐
│ Portfolio    Inicio  Proyectos  [🌐 EN]│
└──────────────────────────────────────┘
```

### Móvil:
```
┌─────────────────────────┐
│ Portfolio    [EN] [≡]   │
└─────────────────────────┘
```

## 📝 Cómo Traducir Componentes:

### 1. Importa el hook:
```tsx
import { useLanguage } from "@/contexts/LanguageContext";
```

### 2. Usa el hook en tu componente:
```tsx
export default function MiComponente() {
  const { t } = useLanguage();
  
  return (
    <h1>{t("projects.title")}</h1>
    <p>{t("projects.subtitle")}</p>
  );
}
```

### 3. Ejemplo completo:

```tsx
"use client";

import { useLanguage } from "@/contexts/LanguageContext";

export default function About() {
  const { t } = useLanguage();
  
  return (
    <section>
      <h2>{t("about.title")}</h2>
      <p>{t("about.subtitle")}</p>
    </section>
  );
}
```

## 🗂️ Estructura de Traducciones:

Todas las traducciones están en `contexts/LanguageContext.tsx`:

```typescript
const translations = {
  es: {
    nav: { ... },
    hero: { ... },
    about: { ... },
    projects: { ... },
    skills: { ... },
    contact: { ... },
    footer: { ... },
  },
  en: {
    // misma estructura pero en inglés
  },
};
```

## ➕ Agregar Nuevas Traducciones:

### Paso 1: Agrega al archivo de traducciones

Edita `contexts/LanguageContext.tsx`:

```typescript
const translations = {
  es: {
    // ... traducciones existentes
    testimonials: {
      title: "Testimonios",
      subtitle: "Lo que dicen de mí",
    },
  },
  en: {
    // ... traducciones existentes
    testimonials: {
      title: "Testimonials",
      subtitle: "What they say about me",
    },
  },
};
```

### Paso 2: Usa en tu componente

```tsx
const { t } = useLanguage();

<h2>{t("testimonials.title")}</h2>
<p>{t("testimonials.subtitle")}</p>
```

## 🔑 Keys de Traducción Disponibles:

### Navegación
```tsx
t("nav.inicio")      // Inicio / Home
t("nav.sobremi")     // Sobre Mí / About Me
t("nav.proyectos")   // Proyectos / Projects
t("nav.habilidades") // Habilidades / Skills
t("nav.contacto")    // Contacto / Contact
```

### Hero
```tsx
t("hero.greeting")    // Hola, soy / Hi, I'm
t("hero.downloadCV")  // Descargar CV / Download CV
```

### About
```tsx
t("about.title")
t("about.subtitle")
t("about.development")
t("about.developmentDesc")
t("about.design")
t("about.designDesc")
t("about.performance")
t("about.performanceDesc")
t("about.collaboration")
t("about.collaborationDesc")
t("about.bio")
```

### Projects
```tsx
t("projects.title")
t("projects.subtitle")
t("projects.code")
t("projects.demo")
```

### Skills
```tsx
t("skills.title")
t("skills.subtitle")
```

### Contact
```tsx
t("contact.title")
t("contact.subtitle")
t("contact.sendMessage")
t("contact.name")
t("contact.namePlaceholder")
t("contact.email")
t("contact.emailPlaceholder")
t("contact.message")
t("contact.messagePlaceholder")
t("contact.send")
t("contact.phone")
t("contact.location")
t("contact.ready")
t("contact.available")
t("contact.cvSpanish")
t("contact.cvEnglish")
```

### Footer
```tsx
t("footer.madeWith")
t("footer.and")
t("footer.home")
t("footer.projects")
t("footer.contact")
```

## 🎯 Próximos Pasos (Actualizar Componentes):

Para que todo el sitio esté traducido, necesitas actualizar estos componentes:

1. ✅ **Header** - Ya está traducido
2. ⏳ **Hero** - Necesita actualización
3. ⏳ **About** - Necesita actualización
4. ⏳ **Projects** - Necesita actualización
5. ⏳ **Skills** - Necesita actualización
6. ⏳ **Contact** - Necesita actualización
7. ⏳ **Footer** - Necesita actualización

### Ejemplo de cómo actualizar Hero:

**Antes:**
```tsx
<h1>Hola, soy {SITE_CONFIG.name}</h1>
```

**Después:**
```tsx
const { t } = useLanguage();

<h1>{t("hero.greeting")} {SITE_CONFIG.name}</h1>
```

## 💡 Tips:

1. **Componentes "use client"**: El hook `useLanguage` solo funciona en Client Components
2. **Punto de acceso**: Usa la notación con puntos: `t("section.key")`
3. **Fallback**: Si una key no existe, se muestra la key misma
4. **Consistencia**: Mantén la misma estructura en español e inglés

## 🔧 Personalización Avanzada:

### Cambiar el idioma por defecto:

Edita `contexts/LanguageContext.tsx`:

```typescript
const [language, setLanguageState] = useState<Language>("en"); // Cambiar a "en"
```

### Agregar más idiomas:

1. Actualiza el tipo:
```typescript
type Language = "es" | "en" | "fr"; // Agregar más
```

2. Agrega las traducciones:
```typescript
const translations = {
  es: { ... },
  en: { ... },
  fr: { ... },
};
```

3. Actualiza el botón del Header para ciclar entre idiomas

## 🐛 Troubleshooting:

**Error: "useLanguage must be used within a LanguageProvider"**
- Asegúrate de que el componente esté envuelto en el Provider
- Verifica que `Providers` esté en `app/layout.tsx`

**Las traducciones no aparecen:**
- Verifica que la key existe en ambos idiomas (es y en)
- Revisa que estés usando la notación correcta: `t("section.key")`

**El idioma no persiste:**
- El localStorage funciona solo en el cliente
- Verifica que estás en un Client Component ("use client")

---

¿Necesitas ayuda? Revisa los archivos:
- `contexts/LanguageContext.tsx` - Traducciones y lógica
- `components/Header.tsx` - Ejemplo de uso
- `components/Providers.tsx` - Provider wrapper

