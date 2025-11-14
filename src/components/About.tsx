import { CheckCircle } from "lucide-react";
import teamImage from "@/assets/team-meeting.jpg";

const About = () => {
  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-primary font-semibold mb-2">About Value Equity</p>
            <h2 className="text-3xl md:text-5xl font-bold mb-4">
              Your Trusted Partner in Insurance Claim Resolution
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-lg text-muted-foreground mb-6">
                At Value Equity, we understand that dealing with property damage and insurance companies can be overwhelming. That's why we're here to level the playing field.
              </p>
              <p className="text-lg text-muted-foreground mb-8">
                As licensed public insurance adjusters, we work exclusively for you—not the insurance company. Our mission is to ensure you receive every dollar you're entitled to under your policy, while you focus on getting your life back to normal.
              </p>

              <div className="space-y-4">
                <h3 className="text-xl font-bold mb-4">Why Choose Public Adjusters?</h3>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                  <p className="text-muted-foreground">Expert policy interpretation and claim documentation</p>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                  <p className="text-muted-foreground">Thorough damage assessment and loss calculation</p>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                  <p className="text-muted-foreground">Professional negotiation with insurance companies</p>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                  <p className="text-muted-foreground">Faster claim resolution and higher settlements</p>
                </div>
              </div>
            </div>

            <div className="relative">
              <img
                src={teamImage}
                alt="Value Equity professional team"
                className="rounded-lg shadow-xl w-full"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
