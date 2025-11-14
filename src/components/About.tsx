export const About = () => {
  return (
    <section id="about" className="py-24 bg-warm-gradient relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-primary rounded-full blur-3xl animate-float-slow"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16 animate-scale-bounce">
            <h2 className="text-5xl md:text-6xl font-bold mb-8 text-foreground animate-fade-in-up">About LAMORADO</h2>
            <div className="space-y-8 text-lg md:text-xl text-muted-foreground leading-relaxed">
              <p className="animate-fade-in-up text-center" style={{ animationDelay: "0.2s" }}>
                <span className="text-foreground font-bold text-2xl">LAMORADO</span> is your trusted agricultural commodity business, 
                connecting <span className="text-foreground font-semibold">traders, farmers, and businesses</span> seeking reliable commodity trading solutions across <span className="text-foreground font-semibold">Ghana</span>.
              </p>
              <div className="h-1 w-32 bg-gradient-to-r from-transparent via-primary to-transparent mx-auto animate-scale-bounce" style={{ animationDelay: "0.3s" }}></div>
              <p className="animate-fade-in-up text-center" style={{ animationDelay: "0.4s" }}>
                Our comprehensive services include <span className="text-foreground font-bold">Quality Commodity Sourcing from VERIFIED suppliers</span>, 
                Trading, <span className="text-foreground font-bold">Bulk Distribution</span>, <span className="text-primary font-bold">COMPETITIVE pricing</span>, and market access—all designed 
                to support the supply chain of essential <span className="text-foreground font-semibold">agricultural goods</span>, bridging the gap between our farmers and buyers.
              </p>
              <div className="h-1 w-32 bg-gradient-to-r from-transparent via-primary to-transparent mx-auto animate-scale-bounce" style={{ animationDelay: "0.5s" }}></div>
              <p className="animate-fade-in-up text-center text-xl md:text-2xl" style={{ animationDelay: "0.6s" }}>
                We ensure availability in the expected quantity, delivering <span className="text-primary font-bold text-3xl animate-pulse-glow">HIGH Grade</span> produce 
                for industrial usage. With LAMORADO, trade is <span className="text-primary font-bold text-2xl">SIMPLIFIED</span>, 
                <span className="text-primary font-bold text-2xl"> EFFICIENT</span>, and easily <span className="text-primary font-bold text-2xl">SCALABLE</span>.
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mt-20">
            <div className="text-center p-8 rounded-2xl bg-card border-2 border-border animate-slide-in-left hover:shadow-2xl hover:-translate-y-4 hover:border-primary/50 hover:rotate-2 transition-all duration-700 group cursor-pointer">
              <div className="text-6xl font-bold text-primary mb-4 animate-pulse-glow group-hover:scale-125 transition-transform duration-500">VERIFIED</div>
              <div className="text-xl text-foreground font-semibold group-hover:text-primary transition-colors duration-300">Suppliers Network</div>
              <p className="text-sm text-muted-foreground mt-2 group-hover:text-foreground transition-colors duration-300">Thoroughly vetted and certified</p>
            </div>
            <div className="text-center p-8 rounded-2xl bg-card border-2 border-border animate-bounce-in hover:shadow-2xl hover:-translate-y-4 hover:border-primary/50 hover:scale-105 transition-all duration-700 group cursor-pointer" style={{ animationDelay: "0.1s" }}>
              <div className="text-6xl font-bold text-primary mb-4 animate-pulse-glow group-hover:scale-125 transition-transform duration-500">HIGH</div>
              <div className="text-xl text-foreground font-semibold group-hover:text-primary transition-colors duration-300">Grade Quality</div>
              <p className="text-sm text-muted-foreground mt-2 group-hover:text-foreground transition-colors duration-300">Industrial-grade excellence</p>
            </div>
            <div className="text-center p-8 rounded-2xl bg-card border-2 border-border animate-slide-in-right hover:shadow-2xl hover:-translate-y-4 hover:border-primary/50 hover:-rotate-2 transition-all duration-700 group cursor-pointer" style={{ animationDelay: "0.2s" }}>
              <div className="text-6xl font-bold text-primary mb-4 animate-pulse-glow group-hover:scale-125 transition-transform duration-500">24/7</div>
              <div className="text-xl text-foreground font-semibold group-hover:text-primary transition-colors duration-300">Support</div>
              <p className="text-sm text-muted-foreground mt-2 group-hover:text-foreground transition-colors duration-300">Always here to assist you</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
