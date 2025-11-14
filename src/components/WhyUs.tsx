import { Card, CardContent } from "@/components/ui/card";
import { Users, Target, Heart, TrendingUp } from "lucide-react";

const reasons = [
  {
    icon: Users,
    title: "Client-First Approach",
    description: "We work exclusively for you, not the insurance company. Your interests are our only priority.",
  },
  {
    icon: Target,
    title: "Proven Results",
    description: "Our track record speaks for itself with over $50M recovered for clients and a 98% success rate.",
  },
  {
    icon: Heart,
    title: "Compassionate Support",
    description: "We understand the stress of property damage and provide caring, personalized service throughout.",
  },
  {
    icon: TrendingUp,
    title: "Maximized Settlements",
    description: "On average, our clients receive 3x more than those who negotiate without professional representation.",
  },
];

const WhyUs = () => {
  return (
    <section id="why-us" className="py-20 bg-muted">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-primary font-semibold mb-2">Why Choose Us</p>
            <h2 className="text-3xl md:text-5xl font-bold mb-4">
              The Value Equity Difference
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Experience the advantage of working with dedicated public adjusters who fight for your rights
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {reasons.map((reason, index) => {
              const Icon = reason.icon;
              return (
                <Card key={index} className="border-none shadow-md">
                  <CardContent className="p-8">
                    <div className="flex items-start space-x-4">
                      <div className="w-14 h-14 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                        <Icon className="w-7 h-7 text-primary" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold mb-2">{reason.title}</h3>
                        <p className="text-muted-foreground">{reason.description}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyUs;
