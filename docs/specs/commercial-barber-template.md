# Plantilla comercial para barberías

## Objetivo

Construir una landing estática, profesional y reutilizable para presentar propuestas a barberías de Viña del Mar y Valparaíso. La primera variante usa la marca ficticia Norte Barber Studio.

## Estado inicial

La carpeta estaba vacía, sin repositorio, código ni dependencias.

## Alcance

- Landing mobile-first con propuesta de valor, servicios, galería, reseñas demostrativas, horarios, ubicación, Instagram y reserva externa.
- Datos, tema y activación de secciones centralizados en una configuración tipada.
- Contenido e imágenes originales, sin identidad de negocios reales.
- SEO técnico y datos estructurados, manteniendo la demo fuera de índices.
- Despliegue estático sin base de datos ni servidor.

## Fuera de alcance

- Base de datos, autenticación, panel, pagos, CMS y reservas propias.
- Publicación, dominio o conexión a servicios externos.
- Afirmaciones, fotografías o testimonios de negocios reales.

## Criterios de aceptación

- El CTA principal abre WhatsApp con un mensaje predefinido.
- Toda información específica del negocio proviene de `src/config/site.ts`.
- El sitio funciona desde 360 px hasta escritorio sin overflow horizontal.
- HTML semántico, foco visible, contraste suficiente y movimiento reducido.
- Metadatos sociales, JSON-LD local, sitemap y robots coherentes con modo demo.
- `npm run build` completa sin errores.

## Riesgos

- Los datos ficticios deben identificarse como demostrativos para no inducir a error.
- Una variante real requiere validar dirección, enlaces, horarios y consentimiento para publicar imágenes.
- Una URL final distinta exige actualizar `site` y la URL canónica antes de indexar.

## Tareas verificables

1. Definir contrato de configuración.
2. Implementar componentes y sistema visual.
3. Crear recursos editoriales propios.
4. Añadir SEO y modo demo.
5. Verificar tipos, build y presentación responsive.
