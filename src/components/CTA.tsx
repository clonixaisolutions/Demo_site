import { Button } from "@/components/ui/button";
import { Phone } from "lucide-react";

const CTA = () => {

  // Smooth scroll handler (same logic as Navbar)
  const scrollToGetStarted = () => {
    const el = document.getElementById("get-started");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="py-20 bg-primary">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-5xl font-bold text-primary-foreground mb-6">
            Ready to Get the Settlement You Deserve?
          </h2>
          <p className="text-lg md:text-xl text-primary-foreground/90 mb-8 max-w-2xl mx-auto">
            Contact us today for a free consultation. No upfront fees, no obligations.
            Let's discuss your claim and how we can help.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">

            {/* Smooth Scroll CTA */}
            <Button
              size="lg"
              variant="secondary"
              className="text-lg px-8 py-6 font-semibold"
              onClick={scrollToGetStarted}
            >
              Schedule Free Consultation
            </Button>

            {/* Phone Button */}
            <Button
              size="lg"
              className="
                text-lg px-8 py-6 font-semibold 
                bg-blue-600 text-white 
                hover:bg-blue-700 
                border-none
              "
              asChild
            >
              <a href="tel:817-565-5122" className="flex items-center">
                <Phone className="w-5 h-5 mr-2 text-white" />
                (817) 565-5122
              </a>
            </Button>

          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
