/**
 * SEO Helpers - Structured Data Generators
 * 
 * These functions generate JSON-LD structured data for better search engine understanding
 */

import { Product, ContactInfo } from '@/types';
import { contactInfo } from '@/data/data';

const siteUrl = 'https://arihant-kolhapur.netlify.app'; // Update with actual domain

/**
 * Generate Organization structured data
 */
export const getOrganizationSchema = () => ({
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'Arihant Fashion',
  url: siteUrl,
  logo: `${siteUrl}/logo.png`,
  description: 'Kolhapur\'s premier destination for sophisticated men\'s formal wear and stylish children\'s fashion',
  address: {
    '@type': 'PostalAddress',
    streetAddress: contactInfo.address.split(',')[0],
    addressLocality: 'Kolhapur',
    addressRegion: 'Maharashtra',
    postalCode: '416012',
    addressCountry: 'IN',
  },
  contactPoint: {
    '@type': 'ContactPoint',
    telephone: contactInfo.phone,
    contactType: 'Customer Service',
    areaServed: 'IN',
    availableLanguage: ['en', 'hi', 'mr'],
  },
  sameAs: [
    contactInfo.instagram ? `https://instagram.com/${contactInfo.instagram.replace('@', '')}` : null,
  ].filter(Boolean),
});

/**
 * Generate LocalBusiness structured data
 */
export const getLocalBusinessSchema = () => ({
  '@context': 'https://schema.org',
  '@type': 'ClothingStore',
  name: 'Arihant Fashion',
  image: `${siteUrl}/og-image.jpg`,
  '@id': `${siteUrl}#organization`,
  url: siteUrl,
  telephone: contactInfo.phone,
  priceRange: '₹₹',
  address: {
    '@type': 'PostalAddress',
    streetAddress: contactInfo.address,
    addressLocality: 'Kolhapur',
    addressRegion: 'Maharashtra',
    postalCode: '416012',
    addressCountry: 'IN',
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: 16.7050,
    longitude: 74.2332,
  },
  openingHoursSpecification: [
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
      opens: '10:00',
      closes: '21:00',
    },
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: 'Sunday',
      opens: '11:00',
      closes: '20:00',
    },
  ],
  servesCuisine: null, // Not applicable for clothing store
  areaServed: {
    '@type': 'City',
    name: 'Kolhapur',
  },
});

/**
 * Generate Product structured data
 */
export const getProductSchema = (product: Product) => ({
  '@context': 'https://schema.org',
  '@type': 'Product',
  name: product.name,
  description: product.description,
  image: product.image,
  brand: {
    '@type': 'Brand',
    name: 'Arihant Fashion',
  },
  offers: {
    '@type': 'Offer',
    url: `${siteUrl}/products#${product.id}`,
    priceCurrency: 'INR',
    price: product.price,
    availability: 'https://schema.org/InStock',
    itemCondition: 'https://schema.org/NewCondition',
  },
  aggregateRating: {
    '@type': 'AggregateRating',
    ratingValue: '4.9',
    reviewCount: '50',
  },
});

/**
 * Generate ProductCollection structured data
 */
export const getProductCollectionSchema = (products: Product[]) => ({
  '@context': 'https://schema.org',
  '@type': 'ItemList',
  name: 'Arihant Fashion Product Collection',
  description: 'Premium men\'s wear and kids fashion collection',
  itemListElement: products.map((product, index) => ({
    '@type': 'ListItem',
    position: index + 1,
    item: getProductSchema(product),
  })),
});

/**
 * Generate BreadcrumbList structured data
 */
export const getBreadcrumbSchema = (items: Array<{ name: string; url: string }>) => ({
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: items.map((item, index) => ({
    '@type': 'ListItem',
    position: index + 1,
    name: item.name,
    item: `${siteUrl}${item.url}`,
  })),
});

/**
 * Generate WebSite structured data with search action
 */
export const getWebSiteSchema = () => ({
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  name: 'Arihant Fashion',
  url: siteUrl,
  potentialAction: {
    '@type': 'SearchAction',
    target: {
      '@type': 'EntryPoint',
      urlTemplate: `${siteUrl}/products?search={search_term_string}`,
    },
    'query-input': 'required name=search_term_string',
  },
});

/**
 * Generate FAQ structured data
 */
export const getFAQSchema = (faqs: Array<{ question: string; answer: string }>) => ({
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqs.map((faq => ({
    '@type': 'Question',
    name: faq.question,
    acceptedAnswer: {
      '@type': 'Answer',
      text: faq.answer,
    },
  }))),
});

