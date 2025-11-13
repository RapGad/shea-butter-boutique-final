import { Card, CardContent } from "@/components/ui/card";
import butterImage from "@/assets/product-butter.jpg";
import extractImage from "@/assets/product-extract.jpg";

const products = [
  {
    title: "Premium Raw Extract",
    description: "100% pure, unrefined raw shea extract rich in vitamins A, E, and F. Perfect for professional formulations and direct application.",
    image: extractImage,
    features: ["Unrefined & Natural", "Highly Concentrated", "Rich in Vitamins", "Professional Grade"]
  },
  {
    title: "Organic Raw Extract",
    description: "Certified organic raw shea extract for enhanced skincare formulations. Ideal for cosmetic manufacturers and DIY beauty products.",
    image: butterImage,
    features: ["100% Organic", "Pure & Natural", "Versatile Use", "Premium Quality"]
  }
];

export const Products = () => {
  return (
    <section id="products" className="py-24 bg-warm-gradient">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">Our Raw Extracts</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Premium raw shea extracts for professional formulations and natural skincare
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {products.map((product, index) => (
            <Card 
              key={index} 
              className="overflow-hidden hover:shadow-soft transition-all duration-300 animate-slide-in border-border bg-card"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="aspect-square overflow-hidden">
                <img 
                  src={product.image} 
                  alt={product.title}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
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
