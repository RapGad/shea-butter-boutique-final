import { useEffect } from 'react';

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string;
}

export const SEO = ({ 
  title = "LAMORADO - Agricultural Commodity Trading & Distribution in Ghana",
  description = "Leading agricultural commodity trader in Ghana. Quality sourcing from verified suppliers, bulk distribution, competitive pricing for cocoa, cashew, shea, palm products, coffee, and grains.",
  keywords = "agricultural commodities Ghana, cocoa beans Ghana, cashew nuts export, shea butter trading, palm oil Ghana, coffee beans Ghana, grains cereals trading, agricultural products Ghana, commodity trading Ghana, bulk distribution Ghana"
}: SEOProps) => {
  useEffect(() => {
    // Update meta tags
    document.title = title;
    
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', description);
    }
    
    const metaKeywords = document.querySelector('meta[name="keywords"]') || document.createElement('meta');
    metaKeywords.setAttribute('name', 'keywords');
    metaKeywords.setAttribute('content', keywords);
    if (!document.querySelector('meta[name="keywords"]')) {
      document.head.appendChild(metaKeywords);
    }

    // Add structured data for Organization
    const structuredData = {
      "@context": "https://schema.org",
      "@type": "Organization",
      "name": "LAMORADO",
      "description": description,
      "url": window.location.origin,
      "logo": `${window.location.origin}/placeholder.svg`,
      "address": {
        "@type": "PostalAddress",
        "addressCountry": "GH",
        "addressLocality": "Ghana"
      },
      "contactPoint": {
        "@type": "ContactPoint",
        "telephone": "+233-12-345-6789",
        "contactType": "Customer Service",
        "email": "info@lamorado.com",
        "availableLanguage": "English"
      },
      "sameAs": []
    };

    const productData = {
      "@context": "https://schema.org",
      "@type": "Product",
      "name": "Agricultural Commodities",
      "description": "Premium agricultural commodities from Ghana including cocoa beans, cashew nuts, shea products, palm oil, coffee beans, and grains",
      "brand": {
        "@type": "Brand",
        "name": "LAMORADO"
      },
      "offers": {
        "@type": "AggregateOffer",
        "priceCurrency": "USD",
        "availability": "https://schema.org/InStock"
      }
    };

    let script = document.querySelector('script[type="application/ld+json"]');
    if (!script) {
      script = document.createElement('script');
      script.setAttribute('type', 'application/ld+json');
      document.head.appendChild(script);
    }
    script.textContent = JSON.stringify([structuredData, productData]);

  }, [title, description, keywords]);

  return null;
};
