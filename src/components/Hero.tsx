import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-shea.jpg";

export const Hero = () => {
  const scrollToProducts = () => {
    const element = document.getElementById("products");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const scrollToContact = () => {
    const element = document.getElementById("contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src={heroImage} 
          alt="Premium raw shea extract" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/80 to-background/60" />
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 text-foreground leading-tight animate-slide-in">
            <span className="block">LAMORADO</span>
            <span className="block text-primary animate-slide-up" style={{ animationDelay: "0.2s" }}>Your Agricultural Commodity Connect</span>
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-6 leading-relaxed animate-fade-in" style={{ animationDelay: "0.4s" }}>
            Offering trading and distribution services for key agricultural products. 
            Connect with <span className="text-foreground font-semibold">traders, farmers, and businesses</span> seeking reliable commodity trading solutions across <span className="text-foreground font-semibold">Ghana</span>.
          </p>
          <p className="text-lg md:text-xl text-muted-foreground mb-8 leading-relaxed animate-fade-in" style={{ animationDelay: "0.6s" }}>
            We ensure availability in the expected quantity—<span className="text-primary font-bold">HIGH Grade</span> produce for industrial usage. 
            With LAMORADO, trade is <span className="text-primary font-bold">SIMPLIFIED</span>, <span className="text-primary font-bold">EFFICIENT</span>, and easily <span className="text-primary font-bold">SCALABLE</span>.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 animate-scale-in" style={{ animationDelay: "0.8s" }}>
            <Button 
              onClick={scrollToProducts}
              size="lg" 
              className="text-lg px-8 py-6 shadow-soft hover:shadow-lg hover:scale-105 transition-all duration-300"
            >
              Our Services
            </Button>
            <Button 
              onClick={scrollToContact}
              size="lg" 
              variant="outline" 
              className="text-lg px-8 py-6 border-2 hover:bg-primary/10 hover:scale-105 transition-all duration-300"
            >
              Get in Touch
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
