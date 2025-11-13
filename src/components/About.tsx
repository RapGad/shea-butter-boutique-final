export const About = () => {
  return (
    <section id="about" className="py-24 bg-warm-gradient">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">Our Story</h2>
            <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
              <p>
                We specialize in premium raw shea extract, providing the highest concentration and purity 
                for professional formulations. Our journey began with a simple mission: to deliver pure, 
                unrefined raw extract that honors traditional extraction methods and modern quality standards.
              </p>
              <p>
                Working directly with local communities in West Africa, we ensure that every batch maintains 
                its natural integrity while supporting sustainable practices and fair trade. Our commitment to 
                quality means you receive only the most concentrated, professional-grade raw extract available.
              </p>
              <p>
                Every container delivers the pure essence of nature's most powerful skincare ingredient.
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
