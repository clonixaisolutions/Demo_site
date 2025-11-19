import { Button } from "@/components/ui/button";
import { CheckCircle2, Shield, TrendingUp } from "lucide-react";
import heroImage from "@/assets/hero-inspection.jpg";

const Hero = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center pt-20 bg-primary"
    >
      {/* Background Image + stronger brand overlay */}
      <div className="absolute inset-0 overflow-hidden">
        <img
          src={heroImage}
          alt="Professional property inspection"
          className="w-full h-full object-cover opacity-50"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/85 via-primary/75 to-primary/60" />
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl lg:text-7xl font-extrabold text-primary-foreground mb-6 drop-shadow-lg">
            Maximize Your Insurance Settlement With Experts You Can Trust
          </h1>

          <p className="text-lg md:text-xl text-primary-foreground/90 max-w-3xl mx-auto mb-10 leading-relaxed">
            Our experienced public adjusters fight on your behalf to ensure you
            receive the highest possible settlement for your property damage claim.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            {/* Primary CTA */}
            <Button
              asChild
              size="lg"
              variant="secondary"
              className="text-lg px-8 py-6 shadow-lg hover:scale-[1.03] transition"
            >
              <a href="#get-started">Start Your Free Claim Review</a>
            </Button>

            {/* Glass Button with brand hover */}
            <Button
              size="lg"
              className="
                text-lg px-8 py-6 font-semibold
                border-2 border-primary-foreground/70
                bg-primary-foreground/10 backdrop-blur-sm
                text-primary-foreground
                hover:bg-primary-foreground hover:text-primary
                hover:scale-[1.03] transition shadow
              "
            >
              Learn How We Help
            </Button>
          </div>

          {/* Trust Badges */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-3xl mx-auto text-primary-foreground/95">
            <div className="flex items-center justify-center gap-3">
              <CheckCircle2 className="w-6 h-6" />
              <span className="font-medium">No Upfront Fees</span>
            </div>
            <div className="flex items-center justify-center gap-3">
              <Shield className="w-6 h-6" />
              <span className="font-medium">Licensed & Insured</span>
            </div>
            <div className="flex items-center justify-center gap-3">
              <TrendingUp className="w-6 h-6" />
              <span className="font-medium">Proven Results</span>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary-foreground rounded-full flex justify-center">
          <div className="w-1 h-3 bg-primary-foreground rounded-full mt-2 animate-pulse" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
