import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";
import { useState } from "react";

export const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsOpen(false);
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <h1 className="flex items-center">
            <img
              src="/src/assets/lr_gh.png"
              alt="Logo"
              className="h-10 w-auto object-contain"
            />
          </h1>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <button
              onClick={() => scrollToSection("home")}
              className="text-foreground hover:text-primary transition-colors"
            >
              Home
            </button>
            <button
              onClick={() => scrollToSection("products")}
              className="text-foreground hover:text-primary transition-colors"
            >
              Products
            </button>
            <button
              onClick={() => scrollToSection("benefits")}
              className="text-foreground hover:text-primary transition-colors"
            >
              Benefits
            </button>
            <button
              onClick={() => scrollToSection("about")}
              className="text-foreground hover:text-primary transition-colors"
            >
              About
            </button>
            <Button
              onClick={() => scrollToSection("contact")}
              variant="default"
            >
              Contact Us
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
            <Menu className="h-6 w-6 text-foreground" />
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden mt-4 pb-4 flex flex-col gap-4 animate-fade-in">
            <button
              onClick={() => scrollToSection("home")}
              className="text-foreground hover:text-primary transition-colors text-left"
            >
              Home
            </button>
            <button
              onClick={() => scrollToSection("products")}
              className="text-foreground hover:text-primary transition-colors text-left"
            >
              Products
            </button>
            <button
              onClick={() => scrollToSection("benefits")}
              className="text-foreground hover:text-primary transition-colors text-left"
            >
              Benefits
            </button>
            <button
              onClick={() => scrollToSection("about")}
              className="text-foreground hover:text-primary transition-colors text-left"
            >
              About
            </button>
            <Button
              onClick={() => scrollToSection("contact")}
              variant="default"
              className="w-full"
            >
              Contact Us
            </Button>
          </div>
        )}
      </div>
    </nav>
  );
};
