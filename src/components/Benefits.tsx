import { Leaf, Heart, Sparkles, Award } from "lucide-react";

const benefits = [
  {
    icon: Leaf,
    title: "100% Pure Extract",
    description: "Our raw extracts are completely unrefined, containing no additives or chemicals. Pure concentrated essence."
  },
  {
    icon: Sparkles,
    title: "Vitamin Rich",
    description: "Packed with vitamins A, E, and F, essential fatty acids, and natural antioxidants in concentrated form."
  },
  {
    icon: Heart,
    title: "Ethically Sourced",
    description: "We work directly with local communities, ensuring fair trade practices and sustainable extraction methods."
  },
  {
    icon: Award,
    title: "Professional Grade",
    description: "Highest concentration and purity standards for cosmetic manufacturers and professional formulations."
  }
];

export const Benefits = () => {
  return (
    <section id="benefits" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">Why Choose Our Raw Extracts</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Experience the highest concentration and purity of raw shea extract for your formulations
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
