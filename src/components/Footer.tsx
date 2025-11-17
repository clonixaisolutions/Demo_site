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
                alt="Value Equity Logo" 
                className="w-12 h-12 object-contain rounded-full bg-white p-1 shadow-md"
              />
              <span className="font-bold text-xl">ABC Company</span>
            </div>

            <p className="text-primary-foreground/80 text-sm">
              Licensed public insurance adjusters fighting for your rights and maximum settlements.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="#home" className="text-primary-foreground/80 hover:text-primary-foreground">Home</a></li>
              <li><a href="#about" className="text-primary-foreground/80 hover:text-primary-foreground">About</a></li>
              <li><a href="#services" className="text-primary-foreground/80 hover:text-primary-foreground">Services</a></li>
              <li><a href="#testimonials" className="text-primary-foreground/80 hover:text-primary-foreground">Testimonials</a></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-bold mb-4">Our Services</h3>
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
            <h3 className="font-bold mb-4">Contact Us</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start space-x-2">
                <Phone className="w-4 h-4 mt-1 flex-shrink-0" />
                <a href="tel:817-565-5122" className="text-primary-foreground/80 hover:text-primary-foreground">
                  (123) 456-7899
                </a>
              </li>
              <li className="flex items-start space-x-2">
                <Mail className="w-4 h-4 mt-1 flex-shrink-0" />
                <a href="mailto:info@vesclaims.com" className="text-primary-foreground/80 hover:text-primary-foreground">
                  info@abc.com
                </a>
              </li>
              <li className="flex items-start space-x-2">
                <MapPin className="w-4 h-4 mt-1 flex-shrink-0" />
                <span className="text-primary-foreground/80">
                Servicing Texas
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-primary-foreground/20 pt-8 text-center text-sm text-primary-foreground/60">
          <p>
            &copy; {new Date().getFullYear()} ABC Company. All rights reserved. Licensed Public Adjusters.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
