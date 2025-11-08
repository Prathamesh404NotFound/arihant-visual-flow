import { Product, GalleryImage, ContactInfo, BrandMilestone } from '@/types';
import productSuit1 from '@/assets/product-suit-1.jpg';
import productBlazer1 from '@/assets/product-blazer-1.jpg';
import productKids1 from '@/assets/product-kids-1.jpg';
import productShirts1 from '@/assets/product-shirts-1.jpg';
import productKids2 from '@/assets/product-kids-2.jpg';
import aboutStore from '@/assets/about-store.jpg';

export const products: Product[] = [
  {
    id: '1',
    name: 'Premium Navy Suit',
    category: 'men',
    price: 14999,
    image: productSuit1,
    description: 'Elegant navy blue formal suit with perfect tailoring for the modern gentleman.',
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    colors: ['Navy', 'Black', 'Charcoal'],
  },
  {
    id: '2',
    name: 'Classic Gray Blazer',
    category: 'men',
    price: 8999,
    image: productBlazer1,
    description: 'Sophisticated gray blazer perfect for business and formal occasions.',
    sizes: ['S', 'M', 'L', 'XL'],
    colors: ['Gray', 'Navy', 'Brown'],
  },
  {
    id: '3',
    name: 'Kids Formal Set',
    category: 'kids',
    price: 4999,
    image: productKids1,
    description: 'Adorable formal outfit with red bow tie for special occasions.',
    sizes: ['2Y', '4Y', '6Y', '8Y', '10Y', '12Y'],
    colors: ['Navy', 'Black'],
  },
  {
    id: '4',
    name: 'Premium Formal Shirts',
    category: 'men',
    price: 2499,
    image: productShirts1,
    description: 'Collection of premium formal shirts in various colors and patterns.',
    sizes: ['38', '40', '42', '44', '46'],
    colors: ['White', 'Blue', 'Pink', 'Gray'],
  },
  {
    id: '5',
    name: 'Kids Casual Collection',
    category: 'kids',
    price: 1999,
    image: productKids2,
    description: 'Comfortable and stylish casual wear for everyday adventures.',
    sizes: ['2Y', '4Y', '6Y', '8Y', '10Y', '12Y'],
    colors: ['Various'],
  },
  {
    id: '6',
    name: 'Executive Suit Collection',
    category: 'men',
    price: 19999,
    image: productSuit1,
    description: 'Premium executive suit collection for the discerning professional.',
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    colors: ['Navy', 'Black', 'Charcoal', 'Brown'],
  },
];

export const galleryImages: GalleryImage[] = [
  {
    id: 'g1',
    src: aboutStore,
    alt: 'Arihant Store Interior',
    category: 'store',
    title: 'Premium Store Experience',
  },
  {
    id: 'g2',
    src: productSuit1,
    alt: 'Premium Men\'s Suit',
    category: 'men',
    title: 'Formal Excellence',
  },
  {
    id: 'g3',
    src: productBlazer1,
    alt: 'Classic Blazer',
    category: 'men',
    title: 'Business Style',
  },
  {
    id: 'g4',
    src: productKids1,
    alt: 'Kids Formal Wear',
    category: 'kids',
    title: 'Little Gentlemen',
  },
  {
    id: 'g5',
    src: productShirts1,
    alt: 'Shirt Collection',
    category: 'men',
    title: 'Shirt Gallery',
  },
  {
    id: 'g6',
    src: productKids2,
    alt: 'Kids Casual Wear',
    category: 'kids',
    title: 'Playful Fashion',
  },
];

export const contactInfo: ContactInfo = {
  address: 'Shop No A-7, Basement, Bhavani Chambers, Mhalaxmi Mandir Mage, Bhavani Mandap – 416012, Kolhapur, Maharashtra, India',
  phone: '+91 7798384061',
  email: 'shubhamjain7979@gmail.com',
  hours: 'Mon-Sat: 10:00 AM - 9:00 PM | Sun: 11:00 AM - 8:00 PM',
  mapUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3821.7823!2d74.2332!3d16.7050!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTbCsDQyJzE4LjAiTiA3NMKwMTMnNTkuNSJF!5e0!3m2!1sen!2sin!4v1234567890',
  whatsapp: '+917798384061',
  instagram: '@arihantmenswear',
};

export const brandStory = {
  title: 'Arihant – Men\'s & Kids Wear',
  subtitle: 'Style Redefined for Men & Kids',
  description: 'Since our inception, Arihant has been Kolhapur\'s premier destination for sophisticated men\'s formal wear and delightful children\'s fashion. We blend timeless elegance with contemporary trends, ensuring every customer finds their perfect style.',
  vision: 'To be the most trusted fashion brand in Kolhapur, known for quality, style, and exceptional customer service.',
};

export const brandMilestones: BrandMilestone[] = [
  {
    year: '2015',
    title: 'Foundation',
    description: 'Arihant opens its first store in Kolhapur, bringing premium fashion to the city.',
  },
  {
    year: '2018',
    title: 'Expansion',
    description: 'Introduced exclusive kids wear collection, becoming a family fashion destination.',
  },
  {
    year: '2021',
    title: 'Recognition',
    description: 'Awarded "Best Men\'s Fashion Store" by Kolhapur Chamber of Commerce.',
  },
  {
    year: '2025',
    title: 'Future',
    description: 'Opening Branch 2 - Expanding our premium fashion experience across Kolhapur.',
  },
];
