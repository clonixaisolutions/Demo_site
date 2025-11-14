import { Button } from "@/components/ui/button";
import { Phone } from "lucide-react";

const CTA = () => {
  return (
    <section className="py-20 bg-primary">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-5xl font-bold text-primary-foreground mb-6">
            Ready to Get the Settlement You Deserve?
          </h2>
          <p className="text-lg md:text-xl text-primary-foreground/90 mb-8 max-w-2xl mx-auto">
            Contact us today for a free consultation. No upfront fees, no obligations. Let's discuss your claim and how we can help.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              variant="secondary"
              className="text-lg px-8 py-6"
            >
              Schedule Free Consultation
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="text-lg px-8 py-6 border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary"
              asChild
            >
              <a href="tel:817-565-5122" className="flex items-center">
                <Phone className="w-5 h-5 mr-2" />
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
