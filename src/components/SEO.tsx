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

    // Add structured data for Organization only
    const organizationData = {
      "@context": "https://schema.org",
      "@type": "Organization",
      "name": "LAMORADO",
      "description": description,
      "url": window.location.origin,
      "logo": `/favicon.ico`,
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
      },
      "sameAs": []
    };

    let script = document.querySelector('script[type="application/ld+json"]');
    if (!script) {
      script = document.createElement('script');
      script.setAttribute('type', 'application/ld+json');
      document.head.appendChild(script);
    }
    script.textContent = JSON.stringify([organizationData]);

  }, [title, description, keywords]);

  return null;
};
