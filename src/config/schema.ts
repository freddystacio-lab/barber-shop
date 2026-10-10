export type IconName = "scissors" | "razor" | "beard";

export interface Service {
  name: string;
  description: string;
  price: string;
  duration: string;
  icon: IconName;
  featured?: boolean;
}

export interface GalleryImage {
  src: string;
  alt: string;
  position?: string;
}

export interface Review {
  quote: string;
  author: string;
  context: string;
}

export interface DaySchedule {
  days: string;
  hours: string;
}

export interface SiteConfig {
  demo: boolean;
  business: {
    name: string;
    eyebrow: string;
    tagline: string;
    description: string;
    phoneDisplay: string;
    whatsappNumber: string;
    email: string;
    address: string;
    city: string;
    region: string;
    coordinates: { latitude: number; longitude: number };
  };
  brand: {
    accent: string;
    ink: string;
    paper: string;
  };
  links: {
    instagram: string;
    instagramHandle: string;
    maps: string;
    booking?: string;
  };
  hero: { image: GalleryImage; availability: string };
  services: Service[];
  gallery: GalleryImage[];
  reviews: Review[];
  schedule: DaySchedule[];
  seo: {
    title: string;
    description: string;
    canonicalUrl: string;
    indexable: boolean;
    shareImage: string;
  };
  sections: {
    gallery: boolean;
    reviews: boolean;
    instagram: boolean;
    location: boolean;
  };
}
