import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-shea.jpg";
import commodity from "@/assets/dried.png";
import sideImage from "@/assets/side-image.jpeg";
import cassava from "@/assets/cassava.jpg";
import test from "@/assets/quality-control.jpeg";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

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

  const navigate = useNavigate()

  const images = [
    {
      src: commodity,
      alt: "LAMORADOGH Agricultural Products - High quality commodities from Ghana",
      title: "Premium Quality",
      description: "Sourced directly from verified Ghanaian farmers and suppliers"
    },
    {
      src: sideImage,
      alt: "Name",
      title: "Name Here",
      description: "CEO of LAMORADOGH"
    },
    {
      src: cassava,
      alt: "Shea Butter Production - Natural shea products",
      title: "Proper Distribution Network",
      description: "Deliver Agri products, in and out of Ghana"
    },
    {
      src: test,
      alt: "Cashew Nuts - Quality cashew products from Ghana",
      title: "Quality Cashews",
      description: "Premium cashew nuts from Ghana's cashew-growing regions"
    }
  ];

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 4000); // Change image every 4 seconds

    return () => clearInterval(interval);
  }, [images.length]);

  const goToImage = (index: number) => {
    setCurrentImageIndex(index);
  };

  const nextImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-24 pb-12">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src={heroImage} 
          alt="LAMORADOGH - Premium agricultural commodities from Ghana including cocoa, cashew, and shea products" 
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
        <div className="max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Text Content */}
            <div className="animate-slide-in-left">
              <div className="mb-8">
                <span className="inline-block px-8 py-3 bg-primary/10 border-2 border-primary/30 rounded-full text-primary font-bold text-sm tracking-wider animate-pulse-glow">
                  GHANA'S PREMIER AGRICULTURAL COMMODITY TRADER
                </span>
              </div>
              
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-10 text-foreground leading-tight">
                <span
                  className="animate-slide-in-left mb-4 flex items-center gap-2"
                  style={{ animationDelay: "0.1s" }}
                >
                  <span className="text-primary">LAMORADOGH</span>
                  <img
                    src="/favicon.ico"
                    alt="Logo"
                    className="h-12 w-auto object-contain"
                  />
                </span>

                <span
                  className="block animate-slide-in-right text-2xl md:text-4xl lg:text-5xl"
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
                usage. With LAMORADOGH, trade is{' '}
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
                  onClick={()=> navigate('/contact')}
                  className="text-xl px-12 py-8 bg-transparent border-2 border-primary/50 text-foreground rounded-xl font-semibold hover:bg-primary/20 hover:border-primary hover:scale-110 hover:rotate-2 transition-all duration-500"
                >
                  Get in Touch
                </button>
              </div>

              {/* Stats Bar */}
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 p-8 rounded-3xl bg-background/80 max-w-screen-lg backdrop-blur-sm border-2 border-primary/20 animate-slide-in-left" style={{ animationDelay: "1.1s" }}>
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

            {/* Image Carousel */}
            <div className="relative animate-slide-in-right" style={{ animationDelay: "0.8s" }}>
              <div className="relative group">
                {/* Main Carousel Image */}
                <div className="relative overflow-hidden rounded-3xl shadow-2xl h-[600px]">
                  {images.map((image, index) => (
                    <div
                      key={index}
                      className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
                        index === currentImageIndex ? 'opacity-100' : 'opacity-0'
                      }`}
                    >
                      <img 
                        src={image.src} 
                        alt={image.alt}
                        className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                      />
                      
                      {/* Floating Elements */}
                      <div className="absolute -top-6 -right-6 w-32 h-32 bg-primary/20 rounded-2xl blur-xl animate-float"></div>
                      <div className="absolute -bottom-6 -left-6 w-24 h-24 bg-primary/10 rounded-2xl blur-xl animate-float-slow"></div>
                      
                      {/* Image Border Glow */}
                      <div className="absolute inset-0 rounded-3xl border-2 border-primary/30 group-hover:border-primary/50 transition-all duration-500"></div>
                      
                    </div>
                  ))}
                </div>

                {/* Navigation Arrows */}
                <button
                  onClick={prevImage}
                  className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-background/80 backdrop-blur-sm rounded-full p-3 opacity-0 group-hover:opacity-100 transition-all duration-300 hover:bg-primary hover:text-primary-foreground"
                  aria-label="Previous image"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                  </svg>
                </button>
                <button
                  onClick={nextImage}
                  className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-background/80 backdrop-blur-sm rounded-full p-3 opacity-0 group-hover:opacity-100 transition-all duration-300 hover:bg-primary hover:text-primary-foreground"
                  aria-label="Next image"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>

                {/* Dot Indicators */}
                <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
                  {images.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => goToImage(index)}
                      className={`w-3 h-3 rounded-full transition-all duration-300 ${
                        index === currentImageIndex 
                          ? 'bg-primary scale-125' 
                          : 'bg-background/60 hover:bg-background/80'
                      }`}
                      aria-label={`Go to image ${index + 1}`}
                    />
                  ))}
                </div>
              </div>

              {/* Thumbnail Navigation */}
              <div className="grid grid-cols-4 gap-3 mt-6">
                {images.map((image, index) => (
                  <button
                    key={index}
                    onClick={() => goToImage(index)}
                    className={`relative group overflow-hidden rounded-2xl transition-all duration-300 ${
                      index === currentImageIndex 
                        ? 'ring-2 ring-primary scale-105' 
                        : 'hover:scale-105'
                    }`}
                  >
                    <img 
                      src={image.src} 
                      alt={`Thumbnail ${index + 1}`}
                      className="w-full h-20 object-cover"
                    />
                    <div className={`absolute inset-0 transition-opacity duration-300 ${
                      index === currentImageIndex ? 'bg-primary/20' : 'bg-primary/10 opacity-0 group-hover:opacity-100'
                    }`} />
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};