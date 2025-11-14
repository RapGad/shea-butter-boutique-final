import { Navigation } from "@/components/Navigation";
import { Hero } from "@/components/Hero";
import { Products } from "@/components/Products";
import { Benefits } from "@/components/Benefits";
import { About } from "@/components/About";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";
import { SEO } from "@/components/SEO";

const Index = () => {
  return (
    <div className="min-h-screen">
      <SEO />
      <Navigation />
      <main>
        <Hero />
        <Products />
        <Benefits />
        <About />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
