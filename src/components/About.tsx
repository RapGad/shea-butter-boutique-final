export const About = () => {
  return (
    <section id="about" className="py-24 bg-warm-gradient">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">Our Story</h2>
            <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
              <p>
                At Pure Shea, we believe in the transformative power of nature's finest ingredients. 
                Our journey began with a simple mission: to bring the authentic benefits of raw shea butter 
                and natural extracts to people who value quality and purity.
              </p>
              <p>
                Every product we offer is carefully sourced from trusted suppliers who share our commitment 
                to sustainability and ethical practices. We work directly with communities that have perfected 
                the art of extracting and processing shea butter for generations.
              </p>
              <p>
                Our dedication to quality means that every jar of shea butter and every bottle of extract 
                maintains its natural properties and beneficial nutrients. No refinement, no additives—just 
                pure, natural goodness the way nature intended.
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mt-16">
            <div className="text-center p-6 rounded-lg bg-card border border-border animate-slide-in">
              <div className="text-4xl font-bold text-primary mb-2">100%</div>
              <div className="text-foreground font-semibold">Natural</div>
            </div>
            <div className="text-center p-6 rounded-lg bg-card border border-border animate-slide-in" style={{ animationDelay: "0.1s" }}>
              <div className="text-4xl font-bold text-primary mb-2">Organic</div>
              <div className="text-foreground font-semibold">Sourcing</div>
            </div>
            <div className="text-center p-6 rounded-lg bg-card border border-border animate-slide-in" style={{ animationDelay: "0.2s" }}>
              <div className="text-4xl font-bold text-primary mb-2">Premium</div>
              <div className="text-foreground font-semibold">Quality</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
