import { Card, CardContent } from "@/components/ui/card";
import { Leaf, ShoppingCart, Truck, TrendingUp } from "lucide-react";

const commodities = [
  {
    name: "Cocoa Beans",
    description: "Premium quality cocoa beans sourced from verified Ghanaian farmers for chocolate and confectionery industries.",
    icon: Leaf,
    grade: "HIGH GRADE"
  },
  {
    name: "Cashew Nuts",
    description: "Raw and processed cashew nuts meeting international quality standards for export and local distribution.",
    icon: ShoppingCart,
    grade: "VERIFIED"
  },
  {
    name: "Shea Nuts & Butter",
    description: "Natural shea nuts and processed butter for cosmetic and pharmaceutical industrial applications.",
    icon: Truck,
    grade: "INDUSTRIAL"
  },
  {
    name: "Palm Products",
    description: "Palm oil, palm kernel, and related products for food processing and manufacturing industries.",
    icon: TrendingUp,
    grade: "PREMIUM"
  },
  {
    name: "Coffee Beans",
    description: "Arabica and Robusta coffee beans from highland farms, perfect for roasting and processing.",
    icon: Leaf,
    grade: "SPECIALTY"
  },
  {
    name: "Grains & Cereals",
    description: "Maize, rice, millet, and other grains for food processing and livestock feed industries.",
    icon: ShoppingCart,
    grade: "CERTIFIED"
  }
];

export const Products = () => {
  return (
    <section id="products" className="py-24 bg-warm-gradient relative overflow-hidden">
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-10 w-64 h-64 bg-primary rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-primary rounded-full blur-3xl animate-float-slow"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16 animate-scale-bounce">
          <h2 className="text-4xl md:text-6xl font-bold mb-6 text-foreground animate-fade-in-up">
            Agricultural Commodities We Trade
          </h2>
          <p className="text-xl md:text-2xl text-muted-foreground max-w-4xl mx-auto leading-relaxed animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
            Sourcing, trading, and distributing <span className="text-primary font-bold">HIGH GRADE</span> farm-produced goods 
            across Ghana with <span className="text-foreground font-semibold">VERIFIED suppliers</span> and <span className="text-foreground font-semibold">COMPETITIVE pricing</span>
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {commodities.map((commodity, index) => (
            <Card 
              key={index} 
              className="overflow-hidden hover:shadow-2xl hover:scale-105 hover:-rotate-1 transition-all duration-700 animate-slide-up border-2 border-border bg-card group cursor-pointer"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="p-8">
                <div className="flex items-start justify-between mb-4">
                  <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-primary/10 group-hover:bg-primary/20 transition-all duration-500 group-hover:animate-wiggle">
                    <commodity.icon className="w-7 h-7 text-primary group-hover:scale-125 transition-transform duration-500" />
                  </div>
                  <span className="text-xs font-bold px-3 py-1 rounded-full bg-primary/10 text-primary animate-pulse-glow">
                    {commodity.grade}
                  </span>
                </div>
                
                <h3 className="text-2xl font-bold mb-3 text-foreground group-hover:text-primary transition-colors duration-300">
                  {commodity.name}
                </h3>
                <p className="text-muted-foreground leading-relaxed group-hover:text-foreground transition-colors duration-300">
                  {commodity.description}
                </p>
                
                <div className="mt-6 pt-4 border-t border-border">
                  <div className="flex items-center gap-2 text-sm text-primary font-semibold group-hover:gap-4 transition-all duration-300">
                    <span>Learn More</span>
                    <span className="group-hover:translate-x-2 transition-transform duration-300">→</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-16 text-center animate-fade-in-up" style={{ animationDelay: "0.8s" }}>
          <div className="inline-block p-6 rounded-2xl bg-card border-2 border-primary/20 hover:border-primary/40 transition-all duration-500 hover:scale-105 hover:shadow-2xl">
            <p className="text-lg md:text-xl text-foreground font-semibold mb-2">
              Need a specific commodity not listed?
            </p>
            <p className="text-muted-foreground mb-4">
              We source a wide range of agricultural products. Contact us for custom requests.
            </p>
            <button className="px-8 py-3 bg-primary text-primary-foreground rounded-lg font-semibold hover:shadow-lg hover:scale-105 transition-all duration-300 animate-pulse-glow">
              Get Custom Quote
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
