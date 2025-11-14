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
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-24 pb-12">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src={heroImage} 
          alt="LAMORADO - Premium agricultural commodities from Ghana including cocoa, cashew, and shea products" 
          className="w-full h-full object-cover animate-scale-in"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/80 to-background/60" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-background/40" />
      </div>

      {/* Animated Background Elements */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/20 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-float-slow"></div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 md:px-8 lg:px-12 relative z-10">
        <div className="max-w-5xl">
          <div className="mb-8 animate-slide-in-left">
            <span className="inline-block px-8 py-3 bg-primary/10 border-2 border-primary/30 rounded-full text-primary font-bold text-sm tracking-wider animate-pulse-glow">
              GHANA'S PREMIER AGRICULTURAL COMMODITY TRADER
            </span>
          </div>
          
<h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-10 text-foreground leading-tight">
  <span
    className=" animate-slide-in-left mb-4 flex items-center gap-2"
    style={{ animationDelay: "0.1s" }}
  >
    <span className="text-primary">LAMORADO</span>
                <img
              src="/favicon.ico"
              alt="Logo"
              className="h-12 w-auto object-contain"
            />
  </span>

  <span
    className="block  animate-slide-in-right text-2xl md:text-4xl lg:text-5xl"
    style={{ animationDelay: "0.3s" }}
  >
    Your Agricultural Commodity Connect
  </span>
</h1>

<p
  className="text-sm md:text-base text-foreground mb-8 leading-relaxed font-semibold animate-fade-in-up"
  style={{ animationDelay: "0.5s" }}
>
  Trading, Sourcing & Distributing Farm-Produced Goods Across Ghana
</p>

<p
  className="text-sm md:text-base text-muted-foreground mb-8 leading-relaxed animate-fade-in-up"
  style={{ animationDelay: "0.6s" }}
>
  Connect with <span className="text-foreground font-semibold">traders, farmers, and businesses</span> seeking
  reliable commodity trading solutions. We provide{' '}
  <span className="text-primary font-bold">Quality Commodity Sourcing</span> from{' '}
  <span className="text-foreground font-bold">VERIFIED suppliers</span>, Trading,{' '}
  <span className="text-foreground font-semibold">Bulk Distribution</span>, and{' '}
  <span className="text-foreground font-semibold">COMPETITIVE pricing</span>.
</p>

<p
  className="text-sm md:text-base text-muted-foreground mb-12 leading-relaxed animate-fade-in-up"
  style={{ animationDelay: "0.7s" }}
>
  We ensure availability in the expected quantity—
  <span className="text-primary font-bold text-lg animate-pulse-glow">HIGH Grade</span> produce for industrial
  usage. With LAMORADO, trade is{' '}
  <span className="text-primary font-bold text-lg">SIMPLIFIED</span>,{' '}
  <span className="text-primary font-bold text-lg">EFFICIENT</span>, and easily{' '}
  <span className="text-primary font-bold text-lg">SCALABLE</span>.
</p>

          
          <div className="flex flex-col sm:flex-row gap-6 mb-16 animate-scale-bounce" style={{ animationDelay: "0.9s" }}>
            <button 
              onClick={scrollToProducts}
              className="text-xl px-12 py-8 bg-primary text-primary-foreground rounded-xl font-semibold shadow-2xl hover:shadow-primary/50 hover:scale-110 hover:-rotate-2 transition-all duration-500 animate-pulse-glow"
            >
              Explore Our Commodities
            </button>
            <button 
              onClick={scrollToContact}
              className="text-xl px-12 py-8 bg-transparent border-2 border-primary/50 text-foreground rounded-xl font-semibold hover:bg-primary/20 hover:border-primary hover:scale-110 hover:rotate-2 transition-all duration-500"
            >
              Get in Touch
            </button>
          </div>

          {/* Stats Bar */}
         <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 p-8 rounded-3xl bg-background/80 backdrop-blur-sm border-2 border-primary/20 animate-slide-in-left" style={{ animationDelay: "1.1s" }}>
  <div className="text-center animate-bounce-in" style={{ animationDelay: "1.2s" }}>
    <div className="text-4xl md:text-5xl font-bold text-primary mb-2 animate-pulse-glow">6+</div>
    <div className="text-sm md:text-base text-muted-foreground">Commodities</div>
  </div>
  <div className="text-center animate-bounce-in" style={{ animationDelay: "1.3s" }}>
    <div className="text-4xl md:text-5xl font-bold text-primary mb-2 animate-pulse-glow">VERIFIED</div>
    <div className="text-sm md:text-base text-muted-foreground">Suppliers</div>
  </div>
  <div className="text-center animate-bounce-in" style={{ animationDelay: "1.4s" }}>
    <div className="text-4xl md:text-5xl font-bold text-primary mb-2 animate-pulse-glow">100%</div>
    <div className="text-sm md:text-base text-muted-foreground">Quality</div>
  </div>
</div>

        </div>
      </div>
    </section>
  );
};
