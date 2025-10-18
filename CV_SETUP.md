# 📄 Configuración de CVs

## ✅ Ya está Configurado

Tu portafolio ya tiene **dos botones de descarga** en la sección de Contacto:
- 🇪🇸 **CV Español**
- 🇬🇧 **CV English**

## 📥 Cómo Agregar tus Archivos PDF

### Paso 1: Prepara tus CVs

Asegúrate de tener tus CVs en formato PDF con estos nombres:
- `cv-salvador-salgado-es.pdf` (CV en español)
- `cv-salvador-salgado-en.pdf` (CV en inglés)

### Paso 2: Copia los archivos

**Opción A - Arrastrando archivos:**
1. Abre Finder
2. Navega a: `/Users/usuario/Desktop/Portfolio/public/`
3. Arrastra tus dos archivos PDF a esta carpeta

**Opción B - Desde terminal:**
```bash
# Suponiendo que tus CVs están en el Escritorio
cp ~/Desktop/cv-salvador-salgado-es.pdf ~/Desktop/Portfolio/public/
cp ~/Desktop/cv-salvador-salgado-en.pdf ~/Desktop/Portfolio/public/
```

### Paso 3: Verifica

Abre tu terminal y ejecuta:
```bash
cd ~/Desktop/Portfolio
ls -lh public/*.pdf
```

Deberías ver algo como:
```
-rw-r--r--  1 usuario  staff   245K  Oct 18 12:00 cv-salvador-salgado-en.pdf
-rw-r--r--  1 usuario  staff   251K  Oct 18 12:00 cv-salvador-salgado-es.pdf
```

### Paso 4: Prueba en el Navegador

1. Ve a: http://localhost:3000
2. Scroll hasta la sección **Contacto** (al final)
3. Haz clic en los botones **CV Español** o **CV English**
4. El PDF debería descargarse automáticamente

## 🔧 Personalización

### Cambiar nombres de archivo

Si prefieres otros nombres para tus archivos, edita `lib/constants.ts`:

```typescript
export const SITE_CONFIG = {
  // ...
  cvEs: "/tu-nombre-cv-es.pdf",
  cvEn: "/your-name-resume-en.pdf",
};
```

### Usar URLs externas

Si prefieres hospedar tus CVs en servicios como Google Drive, Dropbox, etc:

```typescript
export const SITE_CONFIG = {
  // ...
  cvEs: "https://drive.google.com/file/d/XXXXX/view",
  cvEn: "https://dropbox.com/s/XXXXX/resume.pdf",
};
```

## 🎨 Cómo se ven los botones

### Desktop (lado a lado):
```
┌──────────────────────────────────────────┐
│       ¿Listo para empezar?               │
│  Estoy disponible para proyectos...     │
│                                          │
│  [📥 CV Español]  [📥 CV English]      │
└──────────────────────────────────────────┘
```

### Mobile (uno debajo del otro):
```
┌─────────────────────┐
│ ¿Listo para...      │
│                     │
│  [📥 CV Español]   │
│  [📥 CV English]   │
└─────────────────────┘
```

## 📝 Checklist

- [ ] Tengo mi CV en español en formato PDF
- [ ] Tengo mi CV en inglés en formato PDF
- [ ] Renombré los archivos con los nombres correctos
- [ ] Copié los archivos a `/public/`
- [ ] Verifiqué que los archivos estén en `/public/`
- [ ] Probé hacer clic en los botones
- [ ] Los PDFs se descargan correctamente

## ⚠️ Notas Importantes

1. **Tamaño del archivo**: Procura que tus PDFs no pesen más de 2-3 MB
2. **Nombres sin espacios**: Usa guiones (-) en lugar de espacios
3. **Actualización**: Cada vez que actualices tus CVs, reemplaza los archivos en `/public/`
4. **Git**: Si subes tu código a GitHub, tus CVs serán públicos (considera esto)

## 🔒 Privacidad

Si no quieres que tus CVs estén en GitHub:

1. Crea un archivo `.gitignore` (si no existe)
2. Agrega estas líneas:
```
# CVs
public/*.pdf
```

O usa URLs externas en lugar de archivos locales.

## 💡 Tips

- Mantén tus CVs actualizados
- Usa nombres descriptivos pero profesionales
- Asegúrate que ambos CVs tengan el mismo formato/diseño
- Revisa que los enlaces funcionen antes de desplegar

---

¿Tienes dudas? Revisa:
- **README.md** - Documentación general
- **QUICK_START.md** - Guía rápida de personalización
- **CUSTOMIZATION.md** - Personalización avanzada

