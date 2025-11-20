import { Navigation } from "@/components/Navigation";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { Hero } from "@/components/Hero";
import { Products } from "@/components/Products";
import { Benefits } from "@/components/Benefits";

import { SEO } from "@/components/SEO";

const Index = () => {
  const location = useLocation();

  useEffect(() => {
    if (location.state && location.state.scrollTo) {
      const element = document.getElementById(location.state.scrollTo);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [location]);

  return (
    <div className="min-h-screen">
      <SEO />
      <main>
        <Hero />
        <Products />
        <Benefits />

      </main>
    </div>
  );
};

export default Index;
