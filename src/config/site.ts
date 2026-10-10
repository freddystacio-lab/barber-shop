import type { SiteConfig } from "./schema";

export const siteConfig = {
  demo: true,
  business: {
    name: "Norte Barber Studio",
    eyebrow: "Barbería contemporánea · Viña del Mar",
    tagline: "Tu estilo, bien llevado.",
    description:
      "Cortes precisos, barba y rituales de cuidado en un espacio pensado para bajar el ritmo.",
    phoneDisplay: "+56 9 5555 0123",
    whatsappNumber: "56955550123",
    email: "hola@nortebarber.demo",
    address: "5 Norte 000, Viña del Mar",
    city: "Viña del Mar",
    region: "Valparaíso",
    coordinates: { latitude: -33.0153, longitude: -71.5500 },
  },
  brand: {
    accent: "#bd8c52",
    ink: "#171714",
    paper: "#f2eee5",
  },
  links: {
    instagram: "https://instagram.com/",
    instagramHandle: "@nortebarber.studio",
    maps: "https://maps.google.com/?q=Viña+del+Mar,+Chile",
  },
  hero: {
    image: {
      src: "/images/norte-hero.webp",
      alt: "Barbero realizando un corte de cabello en Norte Barber Studio",
      position: "center",
    },
    availability: "Agenda abierta esta semana",
  },
  services: [
    {
      name: "Corte Norte",
      description: "Diagnóstico, corte a tijera o máquina, lavado y peinado.",
      price: "$18.000",
      duration: "45 min",
      icon: "scissors",
      featured: true,
    },
    {
      name: "Barba Ritual",
      description: "Perfilado, toalla caliente, navaja y cuidado hidratante.",
      price: "$14.000",
      duration: "35 min",
      icon: "beard",
    },
    {
      name: "Corte + Barba",
      description: "La experiencia completa, terminada con producto y asesoría.",
      price: "$28.000",
      duration: "70 min",
      icon: "razor",
    },
  ],
  gallery: [
    { src: "/images/gallery-cut.webp", alt: "Detalle de un corte degradado contemporáneo" },
    { src: "/images/gallery-tools.webp", alt: "Herramientas de barbería preparadas sobre una estación" },
    { src: "/images/gallery-studio.webp", alt: "Interior cálido y contemporáneo de Norte Barber Studio" },
  ],
  reviews: [
    {
      quote: "Se toman el tiempo de entender lo que buscas y el resultado se nota.",
      author: "Matías R.",
      context: "Reseña demostrativa",
    },
    {
      quote: "Buen ambiente, atención puntual y un corte que sigue funcionando semanas después.",
      author: "Vicente A.",
      context: "Reseña demostrativa",
    },
    {
      quote: "La experiencia es simple y cuidada desde que reservas hasta que sales.",
      author: "Tomás C.",
      context: "Reseña demostrativa",
    },
  ],
  schedule: [
    { days: "Lunes", hours: "Cerrado" },
    { days: "Martes — Viernes", hours: "10:00 — 20:00" },
    { days: "Sábado", hours: "10:00 — 19:00" },
    { days: "Domingo", hours: "11:00 — 15:00" },
  ],
  seo: {
    title: "Norte Barber Studio | Barbería en Viña del Mar",
    description: "Cortes, barba y cuidado masculino en Viña del Mar. Conoce los servicios y reserva por WhatsApp.",
    canonicalUrl: "https://demo.nortebarber.cl/",
    indexable: false,
    shareImage: "/images/norte-hero.webp",
  },
  sections: { gallery: true, reviews: true, instagram: true, location: true },
} satisfies SiteConfig;

export function getWhatsAppUrl(message = "Hola, quiero reservar una hora en Norte Barber Studio.") {
  return `https://wa.me/${siteConfig.business.whatsappNumber}?text=${encodeURIComponent(message)}`;
}
