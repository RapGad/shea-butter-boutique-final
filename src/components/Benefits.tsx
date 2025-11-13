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
    <section id="benefits" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-scale-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">Why Choose LAMORADO</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Simplified, efficient, and scalable commodity trading solutions you can trust
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {benefits.map((benefit, index) => (
            <div 
              key={index}
              className="text-center p-6 rounded-lg hover:bg-secondary/50 hover:-translate-y-2 transition-all duration-500 animate-bounce-in group"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-4 group-hover:animate-float">
                <benefit.icon className="w-8 h-8 text-primary group-hover:animate-pulse-glow" />
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
