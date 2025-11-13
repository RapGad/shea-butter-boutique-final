import { Card, CardContent } from "@/components/ui/card";
import butterImage from "@/assets/product-butter.jpg";
import extractImage from "@/assets/product-extract.jpg";

const products = [
  {
    title: "Premium Shea Butter",
    description: "100% pure, unrefined shea butter rich in vitamins A, E, and F. Perfect for deep moisturization and skin healing.",
    image: butterImage,
    features: ["Unrefined & Natural", "Rich in Vitamins", "Deep Moisturizing", "Anti-aging Properties"]
  },
  {
    title: "Raw Shea Extract",
    description: "Concentrated shea extract for enhanced skincare formulations. Ideal for professional use and DIY beauty products.",
    image: extractImage,
    features: ["Highly Concentrated", "Pure & Organic", "Versatile Use", "Professional Grade"]
  }
];

export const Products = () => {
  return (
    <section id="products" className="py-24 bg-warm-gradient">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">Our Products</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Handpicked natural products that bring the essence of pure wellness to your daily routine
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
