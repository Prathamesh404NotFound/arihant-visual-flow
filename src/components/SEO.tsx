/**
 * SEO Component - Comprehensive SEO optimization with meta tags, structured data, and social media tags
 * 
 * This component provides:
 * - Dynamic meta tags (title, description, keywords)
 * - Open Graph tags for social media sharing
 * - Twitter Card tags
 * - JSON-LD structured data for better search engine understanding
 * - Canonical URLs
 * - Favicon and theme color support
 */

import { Helmet } from 'react-helmet-async';
import { contactInfo } from '@/data/data';

interface SEOProps {
  title: string;
  description: string;
  keywords?: string;
  image?: string;
  url?: string;
  type?: 'website' | 'article' | 'product';
  structuredData?: object;
  noindex?: boolean;
  canonical?: string;
}

const SEO = ({
  title,
  description,
  keywords,
  image = '/og-image.jpg', // Default OG image - should be replaced with actual image
  url,
  type = 'website',
  structuredData,
  noindex = false,
  canonical,
}: SEOProps) => {
  const siteUrl = 'https://arihant-kolhapur.netlify.app'; // Update with actual domain
  const fullUrl = url ? `${siteUrl}${url}` : siteUrl;
  const imageUrl = image.startsWith('http') ? image : `${siteUrl}${image}`;
  const canonicalUrl = canonical ? `${siteUrl}${canonical}` : fullUrl;

  // Default structured data for Organization
  const defaultStructuredData = {
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
  };

  const mergedStructuredData = structuredData || defaultStructuredData;

  return (
    <Helmet>
      {/* Primary Meta Tags */}
      <title>{title}</title>
      <meta name="title" content={title} />
      <meta name="description" content={description} />
      {keywords && <meta name="keywords" content={keywords} />}
      {noindex && <meta name="robots" content="noindex, nofollow" />}
      <link rel="canonical" href={canonicalUrl} />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content={type} />
      <meta property="og:url" content={fullUrl} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={imageUrl} />
      <meta property="og:site_name" content="Arihant Fashion" />
      <meta property="og:locale" content="en_IN" />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content={fullUrl} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={imageUrl} />
      <meta name="twitter:site" content="@arihantmenswear" />
      <meta name="twitter:creator" content="@arihantmenswear" />

      {/* Additional Meta Tags */}
      <meta name="author" content="Arihant Fashion" />
      <meta name="geo.region" content="IN-MH" />
      <meta name="geo.placename" content="Kolhapur" />
      <meta name="geo.position" content="16.7050;74.2332" />
      <meta name="ICBM" content="16.7050, 74.2332" />

      {/* Structured Data (JSON-LD) */}
      {mergedStructuredData && (
        <>
          {Array.isArray(mergedStructuredData) ? (
            mergedStructuredData.map((data, index) => (
              <script key={index} type="application/ld+json">
                {JSON.stringify(data)}
              </script>
            ))
          ) : (
            <script type="application/ld+json">
              {JSON.stringify(mergedStructuredData)}
            </script>
          )}
        </>
      )}
    </Helmet>
  );
};

export default SEO;

