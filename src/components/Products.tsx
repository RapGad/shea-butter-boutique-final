import { Card, CardContent } from "@/components/ui/card";
import soyImage from "@/assets/commodity-soy.jpeg";
import cashewImage from "@/assets/commodity-cashew.jpeg";
import sheaImage from "@/assets/commodity-shea.jpeg";
import cottonImage from "@/assets/commodity-cotton.webp";
import coffeeImage from "@/assets/commodity-coffee.jpg";
import grainsImage from "@/assets/commodity-maize.jpeg";
import cassavaImage from "@/assets/commodity-cassava.jpeg";
import sesameImage from "@/assets/commodity-sesame.jpeg";

import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

const commodities = [
  {
    name: "Soya Beans",
    description: "Premium quality cocoa beans sourced from verified African farmers for chocolate and confectionery industries worldwide.",
    image: soyImage,
    grade: "HIGH GRADE"
  },
  {
    name: "Raw Cashew Nuts",
    description: "Raw and processed cashew nuts meeting international quality standards for export and local distribution.",
    image: cashewImage,
    grade: "VERIFIED"
  },
  {
    name: "Shea Nuts",
    description: "Natural shea nuts and processed butter for cosmetic and pharmaceutical industrial applications.",
    image: sheaImage,
    grade: "INDUSTRIAL"
  },
  {
    name: "Cotton",
    description: "Palm oil, palm kernel, and related products for food processing and manufacturing industries.",
    image: cottonImage,
    grade: "PREMIUM"
  },
  {
    name: "Coffee Beans",
    description: "Arabica and Robusta coffee beans from highland farms, perfect for roasting and processing.",
    image: coffeeImage,
    grade: "SPECIALTY"
  },
  {
    name: "Grains & Cereals",
    description: "Maize, rice, millet, and other grains for food processing and livestock feed industries.",
    image: grainsImage,
    grade: "CERTIFIED"
  },
  {
    name: "Cassava Chips",
    description: "Sourced from verified farmers, our cassava chips are fresh, clean, and ready for processing. Perfect for chips production, flour, or industrial use",
    image: cassavaImage,
    grade: "CERTIFIED"
  },
  {
    name: "Sesame Seeds",
    description: "Our premium sesame seeds are 100% natural, packed with nutrients, and perfect for cooking, baking, or snacking. Healthy, fresh, and delicious – the tiny seed that makes a big difference!",
    image: sesameImage,
    grade: "CERTIFIED"
  },
];

export const Products = () => {
  const navigate = useNavigate();

  const handleProductClick = (productName: string) => {
    navigate(`/contact?product=${encodeURIComponent(productName)}`);
  };

  return (
    <section id="products" className="py-32 bg-warm-gradient relative overflow-hidden">
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-10 w-64 h-64 bg-primary rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-primary rounded-full blur-3xl animate-float-slow"></div>
      </div>
      
      <div className="container mx-auto px-4 md:px-8 lg:px-12 relative z-10">
        <div className="text-center mb-20 animate-scale-bounce">
          <h2 className="text-5xl md:text-7xl font-bold mb-8 text-foreground animate-fade-in-up">
            Agricultural Commodities We Trade
          </h2>
          <p className="text-xl md:text-2xl text-muted-foreground max-w-4xl mx-auto leading-relaxed animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
            Sourcing, trading, and distributing <span className="text-primary font-bold">HIGH GRADE</span> farm-produced goods 
            across Africa with <span className="text-foreground font-semibold">VERIFIED suppliers</span> and <span className="text-foreground font-semibold">COMPETITIVE pricing</span>
          </p>
        </div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 max-w-7xl mx-auto mb-20"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          variants={{
            hidden: {},
            show: {
              transition: {
                staggerChildren: 0.2
              }
            }
          }}
        >
          {commodities.map((commodity, index) => (
            <motion.div
              key={index}
              variants={{
                hidden: { opacity: 1, y: 50 },
                show: {
                  opacity: 1,
                  y: 0,
                  transition: {
                    type: "spring",
                    stiffness: 120,
                    damping: 8
                  }
                }
              }}
              whileInView={{
                rotate: [0, -1.5, 1.5, 0],  // small shake
                transition: { duration: 0.4, delay: 0.1 }
              }}
              viewport={{ once: true,amount: 0.1 }}
            >
              <Card 
                className="overflow-hidden hover:shadow-2xl hover:scale-105 hover:-rotate-1 transition-all duration-700 animate-slide-up border-2 border-border bg-card group cursor-pointer"
                style={{ animationDelay: `${index * 0.1}s` }}
                onClick={() => handleProductClick(commodity.name)}
              >
                <div className="aspect-video overflow-hidden relative">
                  <img 
                    src={commodity.image} 
                    alt={`${commodity.name} - Premium agricultural commodity from Africa`}
                    className="w-full h-full object-cover group-hover:scale-125 group-hover:rotate-3 transition-all duration-1000"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <span className="absolute top-4 right-4 text-xs font-bold px-4 py-2 rounded-full bg-primary/90 text-primary-foreground backdrop-blur-sm animate-pulse-glow">
                    {commodity.grade}
                  </span>
                </div>
                
                <CardContent className="p-8">
                  <h3 className="text-2xl md:text-3xl font-bold mb-4 text-foreground group-hover:text-primary transition-colors duration-300">
                    {commodity.name}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed text-base mb-6 group-hover:text-foreground transition-colors duration-300">
                    {commodity.description}
                  </p>
                  
                  <div className="pt-4 border-t border-border">
                    <div className="flex items-center gap-3 text-sm text-primary font-semibold group-hover:gap-5 transition-all duration-300">
                      <span className="group-hover:animate-wiggle">Request Quote</span>
                      <span className="group-hover:translate-x-3 transition-transform duration-300 text-lg">→</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        <div className="mt-24 text-center animate-fade-in-up" style={{ animationDelay: "0.8s" }}>
          <div className="inline-block p-10 rounded-3xl bg-card border-2 border-primary/20 hover:border-primary/40 transition-all duration-500 hover:scale-105 hover:shadow-2xl">
            <p className="text-xl md:text-2xl text-foreground font-semibold mb-3">
              Need a specific commodity not listed?
            </p>
            <p className="text-lg text-muted-foreground mb-6 max-w-2xl">
              We source a wide range of agricultural products. Contact us for custom requests and bulk orders.
            </p>
            <button 
              onClick={() => navigate('/contact')}
              className="px-10 py-4 bg-primary text-primary-foreground rounded-xl font-semibold text-lg hover:shadow-lg hover:scale-105 transition-all duration-300 animate-pulse-glow"
            >
              Get Custom Quote
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
