export const About = () => {
  return (
    <section id="about" className="py-24 bg-warm-gradient">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12 animate-scale-in">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">About LAMORADO</h2>
            <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
              <p className="animate-fade-in" style={{ animationDelay: "0.2s" }}>
                <span className="text-foreground font-bold">LAMORADO</span> is your trusted agricultural commodity business, 
                connecting traders, farmers, and businesses seeking reliable commodity trading solutions across Ghana.
              </p>
              <p className="animate-fade-in" style={{ animationDelay: "0.4s" }}>
                Our services include <span className="text-foreground font-semibold">Quality Commodity Sourcing from VERIFIED suppliers</span>, 
                Trading, <span className="text-foreground font-semibold">Bulk Distribution</span>, COMPETITIVE pricing, and market access—all designed 
                to support the supply chain of essential agricultural goods, bridging the gap between our farmers and buyers.
              </p>
              <p className="animate-fade-in" style={{ animationDelay: "0.6s" }}>
                We make sure of the availability in the expected quantity, delivering <span className="text-primary font-bold">HIGH Grade</span> produce 
                for industrial usage. With LAMORADO, trade is <span className="text-primary font-bold">SIMPLIFIED</span>, 
                <span className="text-primary font-bold"> EFFICIENT</span>, and easily <span className="text-primary font-bold">SCALABLE</span>.
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mt-16">
            <div className="text-center p-6 rounded-lg bg-card border border-border animate-bounce-in hover:shadow-soft hover:-translate-y-2 transition-all duration-300">
              <div className="text-4xl font-bold text-primary mb-2 animate-pulse-glow">VERIFIED</div>
              <div className="text-foreground font-semibold">Suppliers</div>
            </div>
            <div className="text-center p-6 rounded-lg bg-card border border-border animate-bounce-in hover:shadow-soft hover:-translate-y-2 transition-all duration-300" style={{ animationDelay: "0.1s" }}>
              <div className="text-4xl font-bold text-primary mb-2 animate-pulse-glow">HIGH</div>
              <div className="text-foreground font-semibold">Grade Quality</div>
            </div>
            <div className="text-center p-6 rounded-lg bg-card border border-border animate-bounce-in hover:shadow-soft hover:-translate-y-2 transition-all duration-300" style={{ animationDelay: "0.2s" }}>
              <div className="text-4xl font-bold text-primary mb-2 animate-pulse-glow">24/7</div>
              <div className="text-foreground font-semibold">Support</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
