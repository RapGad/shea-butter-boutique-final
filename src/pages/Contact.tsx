import { Contact as ContactComponent } from "@/components/Contact";
import { SEO } from "@/components/SEO";
import { Navigation } from "@/components/Navigation";

const Contact = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <SEO 
        title="Contact Us - LAMORADOGH" 
        description="Get in touch with LAMORADOGH for premium agricultural commodities. We are available for inquiries about cashew, shea, palm products, and more."
      />
      <Navigation />
      <main className="flex-grow pt-16">
        <ContactComponent />
      </main>
    </div>
  );
};

export default Contact;
