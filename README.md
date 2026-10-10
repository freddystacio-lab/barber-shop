# Norte Barber Studio

Demo comercial estática y reutilizable para barberías. La marca, dirección, contacto, fotografías y reseñas de esta variante son ficticios.

## Desarrollo

```bash
npm install
npm run dev
```

## Personalizar para un prospecto

1. Edita `src/config/site.ts`: identidad, contacto, enlaces, servicios, horarios, reseñas y SEO.
2. Reemplaza los archivos de `public/images/` conservando sus rutas o actualízalas en la configuración.
3. Ajusta los tres colores de `brand`; se exponen como variables CSS automáticamente.
4. Mantén `demo: true` y `seo.indexable: false` mientras los datos sean ficticios o la propuesta sea privada.
5. Antes de publicar una versión real, valida todos los datos, cambia la URL en `astro.config.mjs` y `seo.canonicalUrl`, activa la indexación y ejecuta `npm run build`.

## Fuente de verdad

Los componentes no deben contener información específica del negocio. Toda personalización comercial pertenece a `src/config/site.ts`.

## Verificación

```bash
npm run check
npm run build
```

La salida estática queda en `dist/` y puede desplegarse en cualquier hosting de archivos estáticos. El repositorio no publica ni conecta servicios automáticamente.
