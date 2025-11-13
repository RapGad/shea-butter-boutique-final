import { Card, CardContent } from "@/components/ui/card";
import butterImage from "@/assets/product-butter.jpg";
import extractImage from "@/assets/product-extract.jpg";

const services = [
  {
    title: "Quality Commodity Sourcing",
    description: "Access to VERIFIED suppliers providing HIGH Grade agricultural products for industrial usage. We bridge the gap between farmers and buyers.",
    image: extractImage,
    features: ["Verified Suppliers", "High Grade Quality", "Industrial Standards", "Direct Sourcing"]
  },
  {
    title: "Trading & Distribution",
    description: "Bulk distribution services with COMPETITIVE pricing and comprehensive market access designed to support the supply chain of essential agricultural goods.",
    image: butterImage,
    features: ["Bulk Orders", "Competitive Pricing", "Market Access", "Supply Chain Support"]
  }
];

export const Products = () => {
  return (
    <section id="products" className="py-24 bg-warm-gradient">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-bounce-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">Our Services</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Quality Commodity Sourcing from verified suppliers, Trading, Bulk Distribution, competitive pricing, 
            and market access—designed to support the supply chain of essential agricultural goods
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {services.map((product, index) => (
            <Card 
              key={index} 
              className="overflow-hidden hover:shadow-soft hover:scale-105 transition-all duration-500 animate-slide-up border-border bg-card group"
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              <div className="aspect-square overflow-hidden">
                <img 
                  src={product.image} 
                  alt={product.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
              </div>
              <CardContent className="p-6">
                <h3 className="text-2xl font-bold mb-3 text-foreground">{product.title}</h3>
                <p className="text-muted-foreground mb-4 leading-relaxed">{product.description}</p>
                <div className="grid grid-cols-2 gap-2">
                  {product.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center gap-2">
                      <div className="w-2 h-2 rounded-full bg-primary" />
                      <span className="text-sm text-foreground">{feature}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
