export const Footer = () => {
  return (
    <footer className="bg-foreground text-background py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-2xl flex items-center font-bold mb-4 text-primary">            <img
              src="/favicon.ico"
              alt="Logo"
              className="h-10 w-auto object-contain"
            />
            <span className="text-primary">LAMORADO</span>
            </h3>
            
            <p className="text-background/80">
              Your trusted agricultural commodity trading partner across Ghana. Sourcing, trading, and distributing HIGH Grade farm-produced goods.
            </p>
          </div>
          
          <div>
            <h4 className="font-bold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-background/80">
              <li><a href="#home" className="hover:text-primary transition-colors">Home</a></li>
              <li><a href="#products" className="hover:text-primary transition-colors">Products</a></li>
              <li><a href="#benefits" className="hover:text-primary transition-colors">Benefits</a></li>
              <li><a href="#about" className="hover:text-primary transition-colors">About</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-bold mb-4">Connect</h4>
            <ul className="space-y-2 text-background/80">
              <li><a href="#contact" className="hover:text-primary transition-colors">Contact Us</a></li>
              <li><a href="mailto:enquiries@lamorado.com" className="hover:text-primary transition-colors">enquiries@lamorado.com</a></li>
              <li><a href="tel:+233535126757" className="hover:text-primary transition-colors">+233 535126757</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-background/20 pt-8 text-center text-background/60">
          <p>&copy; {new Date().getFullYear()} LAMORADO. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};
