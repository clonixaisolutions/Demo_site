import { Button } from "@/components/ui/button";
import { Phone } from "lucide-react";
import { useEffect, useState } from "react";
import Logo from "@/assets/logo.png"; // add your logo here: src/assets/logo.png

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: "smooth" });
    setIsOpen(false);
  };

  useEffect(() => {
    const onScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Top vs scrolled nav background / text
  const navBgClass = isScrolled
    ? "bg-background/95 text-foreground shadow-md border-b border-border"
    : "bg-transparent text-primary-foreground";

  const linkBase =
    "transition-colors px-2 py-1 font-medium text-sm rounded-sm focus:outline-none";

  const linkClass = isScrolled
    ? `${linkBase} text-foreground/80 hover:text-primary`
    : `${linkBase} text-primary-foreground/90 hover:text-primary-foreground`;

  const phoneClass = isScrolled
    ? "flex items-center text-foreground/80 hover:text-primary transition-colors"
    : "flex items-center text-primary-foreground hover:text-primary-foreground/90 transition-colors";

  const buttonClassWhenScrolled = isScrolled
    ? ""
    : "bg-primary-foreground text-primary hover:bg-primary-foreground/90";

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${navBgClass} backdrop-blur-sm`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <img
              src={Logo}
              alt="Allyourclaimsneeds Logo"
              className="w-10 h-10 object-contain rounded-full bg-background p-1 shadow-sm"
            />
            <span
              className={`font-bold text-lg tracking-tight ${
                isScrolled ? "text-foreground" : "text-primary-foreground"
              }`}
            >
              Allyourclaimsneeds
            </span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <button onClick={() => scrollToSection("home")} className={linkClass}>
              Home
            </button>
            <button onClick={() => scrollToSection("about")} className={linkClass}>
              About
            </button>
            <button onClick={() => scrollToSection("services")} className={linkClass}>
              Services
            </button>
            <button onClick={() => scrollToSection("why-us")} className={linkClass}>
              Why Us
            </button>
            <button
              onClick={() => scrollToSection("testimonials")}
              className={linkClass}
            >
              Testimonials
            </button>
            <button onClick={() => scrollToSection("faq")} className={linkClass}>
              FAQ
            </button>
          </div>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center space-x-4">
            <a
              href="tel:7863177672"
              className={phoneClass}
            >
              <Phone className="w-4 h-4 mr-2" />
              (786) 317-7672
            </a>

            <Button
              variant="secondary"
              size="lg"
              className={`px-4 py-2 rounded-md transition-all duration-200 ${buttonClassWhenScrolled}`}
              onClick={() => scrollToSection("get-started")}
            >
              Free Consultation
            </Button>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className={`md:hidden ${
              isScrolled ? "text-foreground" : "text-primary-foreground"
            }`}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2">
              {isOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div
            className={`md:hidden pb-4 ${
              isScrolled
                ? "bg-background/95 text-foreground border-t border-border"
                : "bg-primary/90 text-primary-foreground"
            }`}
          >
            <div className="flex flex-col space-y-4 py-4">
              <button onClick={() => scrollToSection("home")}>Home</button>
              <button onClick={() => scrollToSection("about")}>About</button>
              <button onClick={() => scrollToSection("services")}>Services</button>
              <button onClick={() => scrollToSection("why-us")}>Why Us</button>
              <button onClick={() => scrollToSection("testimonials")}>
                Testimonials
              </button>
              <button onClick={() => scrollToSection("faq")}>FAQ</button>

              <a
                href="tel:7863177672"
                className="flex items-center"
              >
                <Phone className="w-4 h-4 mr-2" /> (786) 317-7672
              </a>

              <Button
                variant="secondary"
                size="lg"
                className="w-full"
                onClick={() => scrollToSection("get-started")}
              >
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
