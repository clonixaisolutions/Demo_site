// src/components/Footer.tsx
import { Phone, Mail, MapPin } from "lucide-react";
import Logo from "@/assets/logo.png"; // <-- IMPORT LOGO

const Footer = () => {
  return (
    <footer className="bg-primary-dark text-primary-foreground py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center space-x-3 mb-4">
              <img
                src={Logo}
                alt="Adjuster Texas Logo"
                className="w-12 h-12 object-contain rounded-full bg-primary-foreground p-1 shadow-md"
              />
              <span className="font-bold text-xl">Adjuster Texas</span>
            </div>

            <p className="text-primary-foreground/80 text-sm leading-relaxed">
              Licensed public insurance adjusters fighting for your rights and
              maximum settlements.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-bold mb-4 text-primary-foreground">
              Quick Links
            </h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a
                  href="#home"
                  className="text-primary-foreground/75 hover:text-primary-foreground hover:underline underline-offset-4"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#about"
                  className="text-primary-foreground/75 hover:text-primary-foreground hover:underline underline-offset-4"
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href="#services"
                  className="text-primary-foreground/75 hover:text-primary-foreground hover:underline underline-offset-4"
                >
                  Services
                </a>
              </li>
              <li>
                <a
                  href="#testimonials"
                  className="text-primary-foreground/75 hover:text-primary-foreground hover:underline underline-offset-4"
                >
                  Testimonials
                </a>
              </li>
              <li>
                <a
                  href="#faq"
                  className="text-primary-foreground/75 hover:text-primary-foreground hover:underline underline-offset-4"
                >
                  FAQ
                </a>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-bold mb-4 text-primary-foreground">
              Our Services
            </h3>
            <ul className="space-y-2 text-sm text-primary-foreground/80">
              <li>Fire Damage Claims</li>
              <li>Water Damage Claims</li>
              <li>Hurricane Damage</li>
              <li>Residential Claims</li>
              <li>Commercial Claims</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-bold mb-4 text-primary-foreground">
              Contact Us
            </h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start space-x-2">
                <Phone className="w-4 h-4 mt-1 flex-shrink-0 text-primary-foreground/70" />
                <a
                  href="tel:9037334664"
                  className="text-primary-foreground/80 hover:text-primary-foreground"
                >
                  (903) 733-4664
                </a>
              </li>

              <li className="flex items-start space-x-2">
                <Mail className="w-4 h-4 mt-1 flex-shrink-0 text-primary-foreground/70" />
                <a
                  href="mailto:info@adjustertexas.com"
                  className="text-primary-foreground/80 hover:text-primary-foreground"
                >
                  info@adjustertexas.com
                </a>
              </li>

              <li className="flex items-start space-x-2">
                <MapPin className="w-4 h-4 mt-1 flex-shrink-0 text-primary-foreground/70" />
                <span className="text-primary-foreground/80">
                  Serving property owners across Texas
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-primary-foreground/20 pt-8 text-center text-sm text-primary-foreground/60">
          <p>
            &copy; {new Date().getFullYear()} Adjuster Texas. All rights
            reserved. Licensed Public Adjusters.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

