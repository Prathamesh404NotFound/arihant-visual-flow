export interface Product {
  id: string;
  name: string;
  category: 'men' | 'kids';
  price: number;
  image: string;
  description: string;
  sizes?: string[];
  colors?: string[];
}

export interface GalleryImage {
  id: string;
  src: string;
  alt: string;
  category: string;
  title?: string;
}

export interface ContactInfo {
  address: string;
  phone: string;
  email: string;
  hours: string;
  mapUrl: string;
}

export interface FormData {
  name: string;
  email: string;
  message: string;
}

export interface BrandMilestone {
  year: string;
  title: string;
  description: string;
}
