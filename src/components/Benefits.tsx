import { Truck, Clock, Shield, MapPin, Lock, RefreshCw } from "lucide-react";

const benefits = [
  {
    icon: Truck,
    title: "Fast & Reliable Shipping",
    description: "Constant updates and tracking of products to ensure timely delivery of your agricultural commodities."
  },
  {
    icon: Clock,
    title: "Customer Service 24/7",
    description: "Round-the-clock support to assist you with orders, inquiries, and any issues that may arise."
  },
  {
    icon: Shield,
    title: "100% Secure Transaction",
    description: "We ensure a safe and secure financial transaction process for all your commodity purchases."
  },
  {
    icon: MapPin,
    title: "Constant Updates & Tracking",
    description: "Real-time tracking and constant updates on your product shipments from source to destination."
  },
  {
    icon: Lock,
    title: "Safe & Secure Payments",
    description: "Protected payment gateways ensuring your financial information remains confidential and secure."
  },
  {
    icon: RefreshCw,
    title: "Reliable Supply Chain",
    description: "Consistent availability and delivery of high-grade agricultural products for your business needs."
  }
];

export const Benefits = () => {
  return (
    <section id="benefits" className="py-24 bg-background relative overflow-hidden">
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-1/4 left-0 w-96 h-96 bg-primary rounded-full blur-3xl animate-pulse-glow"></div>
        <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-primary rounded-full blur-3xl animate-pulse-glow" style={{ animationDelay: "1s" }}></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16 animate-scale-bounce">
          <h2 className="text-4xl md:text-6xl font-bold mb-6 text-foreground animate-fade-in-up">
            Why Choose LAMORADO
          </h2>
          <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
            <span className="text-primary font-bold">SIMPLIFIED</span>, <span className="text-primary font-bold">EFFICIENT</span>, and easily <span className="text-primary font-bold">SCALABLE</span> commodity trading solutions you can trust
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {benefits.map((benefit, index) => (
            <div 
              key={index}
              className="text-center p-8 rounded-2xl bg-card border-2 border-border hover:border-primary/50 hover:bg-secondary/50 hover:-translate-y-4 hover:shadow-2xl transition-all duration-700 animate-bounce-in group cursor-pointer"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-primary/10 mb-6 group-hover:bg-primary/20 group-hover:animate-float group-hover:rotate-12 transition-all duration-700">
                <benefit.icon className="w-10 h-10 text-primary group-hover:scale-125 group-hover:animate-pulse-glow transition-transform duration-500" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-foreground group-hover:text-primary transition-colors duration-300">
                {benefit.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed group-hover:text-foreground transition-colors duration-300">
                {benefit.description}
              </p>
              <div className="mt-6 h-1 w-0 group-hover:w-full bg-gradient-to-r from-primary/0 via-primary to-primary/0 transition-all duration-700 mx-auto"></div>
            </div>
          ))}
        </div>

        <div className="mt-20 text-center">
          <div className="inline-block animate-bounce-in" style={{ animationDelay: "0.8s" }}>
            <div className="grid md:grid-cols-3 gap-8 p-8 rounded-2xl bg-gradient-to-r from-primary/5 via-primary/10 to-primary/5 border-2 border-primary/20">
              <div className="text-center animate-scale-bounce" style={{ animationDelay: "1s" }}>
                <div className="text-5xl font-bold text-primary mb-2 animate-pulse-glow">500+</div>
                <div className="text-foreground font-semibold">Farmers Connected</div>
              </div>
              <div className="text-center animate-scale-bounce" style={{ animationDelay: "1.2s" }}>
                <div className="text-5xl font-bold text-primary mb-2 animate-pulse-glow">1000+</div>
                <div className="text-foreground font-semibold">Tons Traded Monthly</div>
              </div>
              <div className="text-center animate-scale-bounce" style={{ animationDelay: "1.4s" }}>
                <div className="text-5xl font-bold text-primary mb-2 animate-pulse-glow">100%</div>
                <div className="text-foreground font-semibold">Quality Guarantee</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
