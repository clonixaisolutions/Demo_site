import { Button } from "@/components/ui/button";
import { CheckCircle2, Shield, TrendingUp } from "lucide-react";
import heroImage from "@/assets/hero-inspection.jpg";

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center bg-primary pt-20">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 overflow-hidden">
        <img
          src={heroImage}
          alt="Professional property inspection"
          className="w-full h-full object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary via-primary/95 to-primary/80" />
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold text-primary-foreground mb-6 animate-fade-in">
            Maximize Your Insurance Settlement With Expert Public Adjusters
          </h1>
          <p className="text-lg md:text-xl text-primary-foreground/90 mb-8 max-w-3xl mx-auto animate-fade-in">
            Don't settle for less. Our experienced team fights for your rights and ensures you receive the full compensation you deserve for property damage claims.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12 animate-fade-in">
            <Button size="lg" variant="secondary" className="text-lg px-8 py-6">
              Start Your Free Claim Review
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="text-lg px-8 py-6 border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary"
            >
              Learn How We Help
            </Button>
          </div>

          {/* Trust Badges */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl mx-auto animate-fade-in">
            <div className="flex items-center justify-center space-x-3 text-primary-foreground">
              <CheckCircle2 className="w-6 h-6" />
              <span className="text-sm md:text-base">No Upfront Fees</span>
            </div>
            <div className="flex items-center justify-center space-x-3 text-primary-foreground">
              <Shield className="w-6 h-6" />
              <span className="text-sm md:text-base">Licensed & Insured</span>
            </div>
            <div className="flex items-center justify-center space-x-3 text-primary-foreground">
              <TrendingUp className="w-6 h-6" />
              <span className="text-sm md:text-base">Proven Results</span>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary-foreground rounded-full flex justify-center">
          <div className="w-1 h-3 bg-primary-foreground rounded-full mt-2 animate-pulse" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
