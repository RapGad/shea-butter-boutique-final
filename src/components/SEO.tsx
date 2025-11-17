import { Helmet } from "react-helmet-async";

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string;
}

export const SEO = ({
  title = "LAMORADO - Agricultural Commodity Trading & Distribution in Ghana and West Africa",
  description = "Leading agricultural commodity trader in Ghana and West Africa. Quality sourcing from verified suppliers for cashew, shea, palm products, cassava chips, coffee, and grains.",
  keywords = "agricultural commodities Ghana, cashew Ghana, shea butter Ghana, cassava chips export, palm oil Ghana, coffee beans Ghana, cocoa Ghana, grains cereals Ghana"
}: SEOProps) => {

  const organizationData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "LAMORADO",
    "description": description,
    "url": "https://www.lamoradogh.com",
    "logo": "https://www.lamoradogh.com/favicon.ico",
    "address": {
      "@type": "PostalAddress",
      "addressCountry": "GH",
      "addressLocality": "Ghana"
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

      <link rel="canonical" href="https://www.lamoradogh.com/" />

      {/* OPEN GRAPH */}
      <meta property="og:type" content="website" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content="https://www.lamoradogh.com" />
      <meta property="og:image" content="https://lovable.dev/opengraph-image-p98pqg.png" />

      {/* TWITTER */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta
        name="twitter:image"
        content="https://lovable.dev/opengraph-image-p98pqg.png"
      />

      {/* Structured Data */}
      <script type="application/ld+json">
        {JSON.stringify(organizationData)}
      </script>
    </Helmet>
  );
};
