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

  const navBgClass = isScrolled
    ? "bg-white/95 text-slate-900 shadow-md"
    : "bg-transparent text-white";

  const linkBase =
    "transition-colors px-2 py-1 font-medium text-sm rounded-sm focus:outline-none";

  const linkClass = isScrolled
    ? `${linkBase} text-slate-800 hover:text-slate-900`
    : `${linkBase} text-white/95 hover:text-white`;

  const phoneClass = isScrolled
    ? "flex items-center text-slate-800 hover:text-slate-900 transition-colors"
    : "flex items-center text-white hover:text-white/90 transition-colors";

  const buttonClassWhenScrolled = isScrolled
    ? ""
    : "bg-white text-primary hover:bg-white/95";

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${navBgClass} backdrop-blur-sm`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <img src={Logo} alt="Valor Equity Logo" className="w-10 h-10 object-contain" />
            <span
              className={`font-bold text-lg ${
                isScrolled ? "text-slate-900" : "text-white"
              }`}
            >
              
            </span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <button onClick={() => scrollToSection("home")} className={linkClass}>Home</button>
            <button onClick={() => scrollToSection("about")} className={linkClass}>About</button>
            <button onClick={() => scrollToSection("services")} className={linkClass}>Services</button>
            <button onClick={() => scrollToSection("why-us")} className={linkClass}>Why Us</button>
            <button onClick={() => scrollToSection("testimonials")} className={linkClass}>Testimonials</button>
            <button onClick={() => scrollToSection("faq")} className={linkClass}>FAQ</button>
          </div>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center space-x-4">
            <a href="tel:817-565-5122" className={phoneClass}>
              <Phone className="w-4 h-4 mr-2" />
              (817) 565-5122
            </a>

            {/* UPDATED BUTTON — smooth scroll to get-started */}
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
            className={`md:hidden ${isScrolled ? "text-slate-900" : "text-white"}`}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2">
              {isOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div
            className={`md:hidden pb-4 ${
              isScrolled ? "bg-white/95 text-slate-900" : "bg-primary/80 text-white"
            }`}
          >
            <div className="flex flex-col space-y-4 py-4">
              <button onClick={() => scrollToSection("home")}>Home</button>
              <button onClick={() => scrollToSection("about")}>About</button>
              <button onClick={() => scrollToSection("services")}>Services</button>
              <button onClick={() => scrollToSection("why-us")}>Why Us</button>
              <button onClick={() => scrollToSection("testimonials")}>Testimonials</button>
              <button onClick={() => scrollToSection("faq")}>FAQ</button>

              <a href="tel:817-565-5122" className="flex items-center">
                <Phone className="w-4 h-4 mr-2" /> (817) 565-5122
              </a>

              {/* UPDATED MOBILE BUTTON — smooth scroll */}
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
