import { Helmet } from "react-helmet-async";

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string;
  canonicalUrl?: string;
  structuredData?: Record<string, any>;
}

export const SEO = ({
  title = "LAMORADOGH - Agricultural Commodity Trading & Distribution in Africa and West Africa",
  description = "Leading agricultural commodity trader in Africa and West Africa. Quality sourcing from verified suppliers for cashew, shea, palm products, cassava chips, coffee, and grains.",
  keywords = "agricultural commodities Africa, cashew Africa, shea butter Africa, cassava chips export, palm oil Africa, coffee beans Africa, cocoa Africa, grains cereals Africa, West African trade",
  canonicalUrl = "https://www.lamoradogh.com/",
  structuredData
}: SEOProps) => {

  const organizationData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "LAMORADOGH",
    "description": description,
    "url": "https://www.lamoradogh.com",
    "logo": "https://www.lamoradogh.com/apple-touch-icon.png",
    "address": {
      "@type": "PostalAddress",
      "addressCountry": "GH",
      "addressLocality": "Accra",
      "addressRegion": "Greater Accra"
    },
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+233-53-512-6757",
      "contactType": "Customer Service",
      "email": "enquiries@lamoradogh.com",
      "availableLanguage": "English"
    }
  };

  return (
    <Helmet>
      <title>{title}</title>

      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="robots" content="index, follow" />

      <link rel="canonical" href={canonicalUrl} />

      {/* OPEN GRAPH */}
      <meta property="og:type" content="website" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:image" content="https://www.lamoradogh.com/og-image.png" />

      {/* TWITTER */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta
        name="twitter:image"
        content="https://www.lamoradogh.com/og-image.png"
      />

      {/* Structured Data */}
      <script type="application/ld+json">
        {JSON.stringify(structuredData || organizationData)}
      </script>
    </Helmet>
  );
};
