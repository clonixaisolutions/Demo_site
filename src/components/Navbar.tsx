import { Button } from "@/components/ui/button";
import { Phone } from "lucide-react";
import { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: "smooth" });
    setIsOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-primary/95 backdrop-blur-sm shadow-md">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex items-center">
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-primary-foreground rounded-full flex items-center justify-center">
                <span className="text-primary font-bold text-xl">V</span>
              </div>
              <span className="text-primary-foreground font-bold text-xl">Value Equity</span>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <button
              onClick={() => scrollToSection("home")}
              className="text-primary-foreground hover:text-primary-foreground/80 transition-colors"
            >
              Home
            </button>
            <button
              onClick={() => scrollToSection("about")}
              className="text-primary-foreground hover:text-primary-foreground/80 transition-colors"
            >
              About
            </button>
            <button
              onClick={() => scrollToSection("services")}
              className="text-primary-foreground hover:text-primary-foreground/80 transition-colors"
            >
              Services
            </button>
            <button
              onClick={() => scrollToSection("why-us")}
              className="text-primary-foreground hover:text-primary-foreground/80 transition-colors"
            >
              Why Us
            </button>
            <button
              onClick={() => scrollToSection("testimonials")}
              className="text-primary-foreground hover:text-primary-foreground/80 transition-colors"
            >
              Testimonials
            </button>
            <button
              onClick={() => scrollToSection("faq")}
              className="text-primary-foreground hover:text-primary-foreground/80 transition-colors"
            >
              FAQ
            </button>
          </div>

          {/* CTA Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <a href="tel:817-565-5122" className="flex items-center text-primary-foreground hover:text-primary-foreground/80 transition-colors">
              <Phone className="w-4 h-4 mr-2" />
              (817) 565-5122
            </a>
            <Button variant="secondary" size="lg">
              Free Consultation
            </Button>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-primary-foreground"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {isOpen ? (
                <path d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden pb-4 animate-fade-in">
            <div className="flex flex-col space-y-4">
              <button
                onClick={() => scrollToSection("home")}
                className="text-primary-foreground hover:text-primary-foreground/80 transition-colors text-left"
              >
                Home
              </button>
              <button
                onClick={() => scrollToSection("about")}
                className="text-primary-foreground hover:text-primary-foreground/80 transition-colors text-left"
              >
                About
              </button>
              <button
                onClick={() => scrollToSection("services")}
                className="text-primary-foreground hover:text-primary-foreground/80 transition-colors text-left"
              >
                Services
              </button>
              <button
                onClick={() => scrollToSection("why-us")}
                className="text-primary-foreground hover:text-primary-foreground/80 transition-colors text-left"
              >
                Why Us
              </button>
              <button
                onClick={() => scrollToSection("testimonials")}
                className="text-primary-foreground hover:text-primary-foreground/80 transition-colors text-left"
              >
                Testimonials
              </button>
              <button
                onClick={() => scrollToSection("faq")}
                className="text-primary-foreground hover:text-primary-foreground/80 transition-colors text-left"
              >
                FAQ
              </button>
              <a href="tel:817-565-5122" className="flex items-center text-primary-foreground">
                <Phone className="w-4 h-4 mr-2" />
                (817) 565-5122
              </a>
              <Button variant="secondary" size="lg" className="w-full">
                Free Consultation
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
