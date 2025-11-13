import { Leaf, Heart, Sparkles, ShieldCheck } from "lucide-react";

const benefits = [
  {
    icon: Leaf,
    title: "100% Natural",
    description: "Pure, organic ingredients sourced directly from nature with no harmful additives or chemicals."
  },
  {
    icon: Heart,
    title: "Deep Nourishment",
    description: "Rich in essential fatty acids and vitamins that deeply penetrate and nourish your skin."
  },
  {
    icon: Sparkles,
    title: "Multi-Purpose",
    description: "Perfect for skin, hair, and overall wellness. One product, countless benefits."
  },
  {
    icon: ShieldCheck,
    title: "Quality Assured",
    description: "Rigorously tested for purity and potency. We guarantee the highest quality standards."
  }
];

export const Benefits = () => {
  return (
    <section id="benefits" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">Why Choose Pure Shea?</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Experience the difference of authentic, sustainably sourced natural ingredients
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
          {benefits.map((benefit, index) => (
            <div 
              key={index}
              className="text-center p-6 rounded-lg hover:bg-secondary/50 transition-all duration-300 animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-4">
                <benefit.icon className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-foreground">{benefit.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
