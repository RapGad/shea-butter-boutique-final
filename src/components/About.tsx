import farmers from "@/assets/farmers.jpeg";
import agricProduct from "@/assets/agric-product.jpeg";
import logistics from "@/assets/logistics.jpeg";
import distribution from '@/assets/distribution.jpeg'
import qualityControls from '@/assets/quality-control.jpeg'
import operations from '@/assets/operations.jpeg'
import team from '@/assets/team.jpg'
import absa from '@/assets/absa.png'
import { SEO } from "./SEO";

// You'll need to add this image


export const About = () => {


  const images =[
    {id: 1,image: '/favicon.ico'},
    {id: 2,image: '/favicon.ico'},
    {id: 3,image: '/favicon.ico'},
    {id: 4,image: '/favicon.ico'},
    {id: 5,image: '/favicon.ico'},
    {id: 6,image: '/favicon.ico'}
  ]
  return (
    <>
      <SEO 
        title="About Us - LAMORADOGH | Agricultural Trading Experts" 
        description="Learn about LAMORADOGH's mission to connect Ghanaian farmers with global markets. Experts in sourcing cassava, cashew, shea, and more."
        canonicalUrl="https://www.lamoradogh.com/about"
      />
    <section id="about" className="py-32 bg-warm-gradient relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-primary rounded-full blur-3xl animate-float-slow"></div>
        <div className="absolute top-1/3 right-1/3 w-64 h-64 bg-primary rounded-full blur-3xl animate-float-slower"></div>
      </div>
      
      <div className="container mx-auto px-4 md:px-8 lg:px-12 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-20 animate-scale-bounce">
            <h2 className="flex items-center justify-center gap-2 text-3xl sm:text-4xl md:text-7xl font-bold mb-10 text-foreground animate-fade-in-up">
              About <span className="text-primary">LAMORADOGH</span> 
              <img
                src="/favicon.ico"
                alt="Logo"
                className="h-11 w-auto object-contain"
              />
            </h2>

                        <div className="space-y-10 text-lg md:text-xl text-muted-foreground leading-relaxed">
              <p className="animate-fade-in-up text-center" style={{ animationDelay: "0.2s" }}>
                <span className="text-foreground font-bold text-2xl md:text-3xl">LAMORADOGH</span> is your trusted agricultural commodity business, 
                connecting <span className="text-foreground font-semibold">traders, farmers, and businesses</span> seeking reliable commodity trading solutions across <span className="text-foreground font-semibold">Ghana</span>.
              </p>
              <div className="h-1 w-40 bg-gradient-to-r from-transparent via-primary to-transparent mx-auto animate-scale-bounce" style={{ animationDelay: "0.3s" }}></div>
              <p className="animate-fade-in-up text-center" style={{ animationDelay: "0.4s" }}>
                Our comprehensive services include <span className="text-foreground font-bold">Quality Commodity Sourcing from VERIFIED suppliers</span>, 
                Trading, <span className="text-foreground font-bold">Bulk Distribution</span>, <span className="text-primary font-bold">COMPETITIVE pricing</span>, and market access—all designed 
                to support the supply chain of essential <span className="text-foreground font-semibold">agricultural goods</span>, bridging the gap between our farmers and buyers.
              </p>
              <div className="h-1 w-40 bg-gradient-to-r from-transparent via-primary to-transparent mx-auto animate-scale-bounce" style={{ animationDelay: "0.5s" }}></div>
              <p className="animate-fade-in-up text-center text-xl md:text-3xl" style={{ animationDelay: "0.6s" }}>
                We ensure availability in the expected quantity, delivering <span className="text-primary font-bold text-4xl animate-pulse-glow">HIGH Grade</span> produce 
                for industrial usage. With LAMORADOGH, trade is <span className="text-primary font-bold text-2xl md:text-3xl">SIMPLIFIED</span>, 
                <span className="text-primary font-bold text-2xl md:text-3xl"> EFFICIENT</span>, and easily <span className="text-primary font-bold text-2xl md:text-3xl">SCALABLE</span>.
              </p>
            </div>
            


            {/* Main Image Gallery */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16 mt-20">
              {[
                {name: "Quality agricultural products", image: agricProduct}, 
                {name: "Distribution and logistics", image: logistics}
              ].map((item,index) => (
                <div key={index} className="relative group animate-fade-in-up" style={{ animationDelay: `${0.2 + index * 0.1}s` }}>
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-72 object-cover rounded-2xl shadow-lg group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-primary/20 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
              ))}
            </div>


          </div>

          {/* Our Process Section */}
          <div className="mb-24 animate-fade-in-up" style={{ animationDelay: "0.7s" }}>
            <h3 className="text-2xl md:text-4xl font-bold text-center mb-12 text-foreground">
              Our <span className="text-primary">Process</span>
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              {[
                { step: "01", title: "Sourcing", desc: "Verified suppliers" },
                { step: "02", title: "Quality Check", desc: "High grade standards" },
                { step: "03", title: "Distribution", desc: "Efficient logistics" },
                { step: "04", title: "Delivery", desc: "On-time completion" }
              ].map((process, index) => (
                <div key={index} className="text-center p-8 rounded-3xl bg-card border-2 border-border hover:border-primary/50 hover:scale-105 transition-all duration-500 group">
                  <div className="text-4xl font-bold text-primary mb-4 animate-pulse-glow">{process.step}</div>
                  <h4 className="text-xl font-semibold text-foreground mb-2 group-hover:text-primary transition-colors duration-300">{process.title}</h4>
                  <p className="text-muted-foreground group-hover:text-foreground transition-colors duration-300">{process.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Social Media Video Section */}
          <div className="mb-24 animate-fade-in-up" style={{ animationDelay: "0.8s" }}>
            <h3 className="text-2xl md:text-4xl font-bold text-center mb-8 text-foreground">
              See Us in <span className="text-primary">Action</span>
            </h3>
            <div className="max-w-4xl mx-auto">
              <div className="relative group cursor-pointer" onClick={() => window.open('https://your-social-media-url.com', '_blank')}>
                <div className="relative rounded-2xl overflow-hidden shadow-2xl bg-card border-2 border-border group-hover:border-primary/50 transition-all duration-500">
                  <div className="aspect-video bg-gradient-to-br from-primary/20 to-primary/10 flex items-center justify-center">
                    <div className="text-center">
                      <div className="text-6xl mb-4 text-primary group-hover:scale-110 transition-transform duration-300">▶</div>
                      <p className="text-xl font-semibold text-foreground">Watch our story on Social Media</p>
                      <p className="text-muted-foreground mt-2">Click to view on our social platform</p>
                    </div>
                  </div>
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="bg-primary/90 text-white rounded-full p-6 transform scale-75 group-hover:scale-100 transition-transform duration-300">
                      <span className="text-2xl font-bold">View on Social Media</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Additional Images Section */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            <div className="relative group animate-fade-in-up" style={{ animationDelay: "0.9s" }}>
              <img
                src={team}
                alt="Team collaboration"
                className="w-full h-80 object-cover rounded-2xl shadow-lg group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-foreground/80 to-transparent p-6 rounded-b-2xl">
                <p className="text-white font-semibold text-lg">Our Dedicated Team</p>
              </div>
            </div>
            <div className="relative group animate-fade-in-up" style={{ animationDelay: "1.0s" }}>
              <img
                src={absa}
                alt="Successful partnerships"
                className="w-full h-80 object-cover rounded-2xl shadow-lg group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-foreground/80 to-transparent p-6 rounded-b-2xl">
                <p className="text-white font-semibold text-lg">Successful Partnerships</p>
              </div>
            </div>
          </div>

          {/* More Logo Placeholders */}
          <div className="mb-24 animate-fade-in-up" style={{ animationDelay: "1.1s" }}>
            <h3 className="text-2xl md:text-3xl font-bold text-center mb-8 text-foreground">
              Partner <span className="text-primary">Associations</span>
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
              {[{image: absa}].map((item,index) => (
                <div key={index} className="bg-card rounded-2xl p-8 border-2 border-border hover:border-primary/50 hover:scale-105 transition-all duration-500 group">
                    <img src={item.image} className="text-sm font-bold text-primary text-center"/>

                </div>
              ))}
            </div>
          </div>

          {/* Team Images Section */}
          <div className="mb-24 animate-fade-in-up" style={{ animationDelay: "1.2s" }}>
            <h3 className="text-2xl md:text-4xl font-bold text-center mb-12 text-foreground">
              Our <span className="text-primary">Operations</span>
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {name: "Field Operations", image: operations},
                {name: "Quality Control",image: qualityControls}, 
                {name: "Distribution Network",image: distribution}
              ].map((item, index) => (
                <div key={index} className="text-center group">
                  <div className="relative mb-6">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-full h-64 object-cover rounded-2xl shadow-lg group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-primary/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>
                  <h4 className="text-xl font-semibold text-foreground group-hover:text-primary transition-colors duration-300">{item.name}</h4>
                </div>
              ))}
            </div>
          </div>


          {/* Original Three Cards */}
          <div className="grid md:grid-cols-3 gap-10 mt-24">
            <div className="text-center p-10 rounded-3xl bg-card border-2 border-border animate-slide-in-left hover:shadow-2xl hover:-translate-y-6 hover:border-primary/50 hover:rotate-2 transition-all duration-700 group cursor-pointer">
              <div className="text-6xl md:text-6xl font-bold text-primary mb-6 animate-pulse-glow group-hover:scale-125 transition-transform duration-500">VERIFIED</div>
              <div className="text-xl md:text-2xl text-foreground font-semibold mb-2 group-hover:text-primary transition-colors duration-300">Suppliers Network</div>
              <p className="text-base text-muted-foreground mt-3 group-hover:text-foreground transition-colors duration-300">Thoroughly vetted and certified</p>
            </div>
            <div className="text-center p-10 rounded-3xl bg-card border-2 border-border animate-bounce-in hover:shadow-2xl hover:-translate-y-6 hover:border-primary/50 hover:scale-105 transition-all duration-700 group cursor-pointer" style={{ animationDelay: "0.1s" }}>
              <div className="text-6xl md:text-6xl font-bold text-primary mb-6 animate-pulse-glow group-hover:scale-125 transition-transform duration-500">HIGH</div>
              <div className="text-xl md:text-2xl text-foreground font-semibold mb-2 group-hover:text-primary transition-colors duration-300">Grade Quality</div>
              <p className="text-base text-muted-foreground mt-3 group-hover:text-foreground transition-colors duration-300">Industrial-grade excellence</p>
            </div>
            <div className="text-center p-10 rounded-3xl bg-card border-2 border-border animate-slide-in-right hover:shadow-2xl hover:-translate-y-6 hover:border-primary/50 hover:-rotate-2 transition-all duration-700 group cursor-pointer" style={{ animationDelay: "0.2s" }}>
              <div className="text-6xl md:text-6xl font-bold text-primary mb-6 animate-pulse-glow group-hover:scale-125 transition-transform duration-500">24/7</div>
              <div className="text-xl md:text-2xl text-foreground font-semibold mb-2 group-hover:text-primary transition-colors duration-300">Support</div>
              <p className="text-base text-muted-foreground mt-3 group-hover:text-foreground transition-colors duration-300">Always here to assist you</p>
            </div>
          </div>
        </div>
      </div>
    </section>
    </>
  );
};
