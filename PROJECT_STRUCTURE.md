# 📁 Estructura del Proyecto

```
Portfolio/
│
├── 📂 app/                          # Directorio principal de Next.js (App Router)
│   ├── favicon.ico                  # Icono del sitio
│   ├── globals.css                  # Estilos globales y variables CSS
│   ├── layout.tsx                   # Layout raíz con metadata y fuentes
│   └── page.tsx                     # Página principal (/)
│
├── 📂 components/                   # Componentes React
│   ├── Header.tsx                   # Barra de navegación fija
│   ├── Hero.tsx                     # Sección hero con animaciones
│   ├── About.tsx                    # Sección "Sobre Mí"
│   ├── Projects.tsx                 # Grid de proyectos
│   ├── Skills.tsx                   # Categorías de habilidades
│   ├── Contact.tsx                  # Formulario de contacto
│   ├── Footer.tsx                   # Pie de página
│   │
│   └── 📂 ui/                       # Componentes UI de shadcn
│       ├── badge.tsx                # Componente Badge
│       ├── button.tsx               # Componente Button
│       ├── card.tsx                 # Componente Card
│       └── separator.tsx            # Componente Separator
│
├── 📂 lib/                          # Utilidades y configuración
│   ├── constants.ts                 # Constantes y configuración
│   └── utils.ts                     # Funciones de utilidad (shadcn)
│
├── 📂 types/                        # Definiciones de tipos TypeScript
│   └── index.ts                     # Interfaces y tipos personalizados
│
├── 📂 public/                       # Archivos estáticos
│   ├── file.svg                     # Iconos SVG predeterminados
│   ├── globe.svg
│   ├── next.svg
│   ├── vercel.svg
│   └── window.svg
│
├── 📄 components.json               # Configuración de shadcn/ui
├── 📄 next.config.ts                # Configuración de Next.js
├── 📄 postcss.config.mjs            # Configuración de PostCSS
├── 📄 tsconfig.json                 # Configuración de TypeScript
├── 📄 package.json                  # Dependencias del proyecto
│
├── 📖 README.md                     # Documentación principal
├── 📖 CUSTOMIZATION.md              # Guía de personalización
└── 📖 PROJECT_STRUCTURE.md          # Este archivo

```

## 🗂️ Descripción de Carpetas

### `/app`
Directorio principal de Next.js usando el App Router. Contiene:
- **layout.tsx**: Layout raíz que envuelve toda la aplicación
- **page.tsx**: Página principal que renderiza todos los componentes
- **globals.css**: Estilos globales y variables de tema

### `/components`
Todos los componentes React del portafolio:
- **Principales**: Header, Hero, About, Projects, Skills, Contact, Footer
- **ui/**: Componentes de shadcn/ui (reutilizables)

### `/lib`
Código auxiliar y configuración:
- **constants.ts**: Configuración del sitio, constantes de animación
- **utils.ts**: Funciones de utilidad (merging de clases, etc.)

### `/types`
Definiciones de tipos TypeScript para mantener el código type-safe

### `/public`
Archivos estáticos accesibles públicamente (imágenes, iconos, etc.)

## 🔄 Flujo de la Aplicación

```
app/layout.tsx (Root Layout)
    └─> app/page.tsx (Home Page)
            ├─> Header
            ├─> Hero
            ├─> About
            ├─> Projects
            ├─> Skills
            ├─> Contact
            └─> Footer
```

## 📦 Dependencias Principales

### Producción
- **next**: Framework React
- **react** & **react-dom**: Librería UI
- **framer-motion**: Animaciones
- **lucide-react**: Iconos
- **tailwindcss**: Estilos
- **shadcn/ui** (varios paquetes @radix-ui): Componentes UI

### Desarrollo
- **typescript**: Tipado estático
- **@types/**: Tipos para TypeScript
- **tailwindcss**: Framework CSS

## 🎯 Puntos de Entrada

### Desarrollo
```bash
npm run dev
# → Inicia servidor en http://localhost:3000
# → Usa Turbopack para hot-reload ultra-rápido
```

### Producción
```bash
npm run build  # Compila el proyecto
npm start      # Inicia servidor de producción
```

## 🔧 Archivos de Configuración

| Archivo | Propósito |
|---------|-----------|
| `next.config.ts` | Configuración de Next.js |
| `tsconfig.json` | Configuración de TypeScript |
| `components.json` | Configuración de shadcn/ui |
| `postcss.config.mjs` | Configuración de PostCSS/Tailwind |
| `.env.example` | Ejemplo de variables de entorno |

## 📝 Convenciones de Código

### Componentes
- **PascalCase** para nombres de archivos y componentes
- Un componente por archivo
- Export default para el componente principal

### Estilos
- Uso de **Tailwind CSS** para estilos
- Variables CSS en `globals.css`
- Componentes de shadcn/ui para UI consistente

### TypeScript
- Definir interfaces en `/types`
- Props tipadas en todos los componentes
- Uso de tipos estrictos

### Animaciones
- Framer Motion para todas las animaciones
- Constantes de animación en `lib/constants.ts`
- Viewport `once: true` para animaciones que solo ocurren una vez

## 🚀 Siguientes Pasos

1. **Personalizar contenido**: Ver `CUSTOMIZATION.md`
2. **Agregar más páginas**: Crear archivos en `/app`
3. **Nuevos componentes**: Agregar en `/components`
4. **Instalar más componentes UI**: `npx shadcn@latest add [componente]`
5. **Optimizar SEO**: Actualizar metadata en `layout.tsx`
6. **Deploy**: Subir a Vercel, Netlify, o tu plataforma preferida

## 🆘 Solución de Problemas

### El servidor no inicia
```bash
# Borra node_modules y reinstala
rm -rf node_modules package-lock.json
npm install
npm run dev
```

### Errores de TypeScript
```bash
# Regenera tipos
npx tsc --noEmit
```

### Problemas con shadcn/ui
```bash
# Reinstala componentes
npx shadcn@latest add button card badge separator
```

---

Para más información, consulta:
- [README.md](./README.md) - Documentación principal
- [CUSTOMIZATION.md](./CUSTOMIZATION.md) - Guía de personalización

