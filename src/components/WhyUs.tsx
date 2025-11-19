// src/components/WhyUs.tsx
import { Card, CardContent } from "@/components/ui/card";
import {
  DollarSign,
  Shield,
  Clock,
  ClipboardList,
  Headphones,
  CheckCircle,
} from "lucide-react";

const reasons = [
  {
    icon: DollarSign,
    title: "No Upfront Costs",
    description:
      "We only get paid when you do. Our fee is a percentage of your settlement, so we're motivated to maximize your claim.",
  },
  {
    icon: Shield,
    title: "Licensed & Insured",
    description:
      "Fully licensed public adjusters with comprehensive insurance protection and industry certifications.",
  },
  {
    icon: Clock,
    title: "Fast Response Time",
    description:
      "We respond quickly to assess damage and begin your claim process, preventing further losses.",
  },
  {
    icon: ClipboardList,
    title: "Thorough Documentation",
    description:
      "Detailed damage assessment, loss calculation, and comprehensive documentation to support your claim.",
  },
  {
    icon: Headphones,
    title: "Dedicated Support",
    description:
      "Direct access to your adjuster throughout the entire process. We handle all insurance company communications.",
  },
  {
    icon: CheckCircle,
    title: "Proven Track Record",
    description:
      "Thousands of successful claims with an average settlement increase of 747% compared to initial offers.",
  },
];

const WhyUs = () => {
  return (
    <section
      id="why-us"
      className="py-20"
      style={{
        backgroundImage:
          "radial-gradient(circle at 1px 1px, hsla(344,66%,29%,0.08) 1px, transparent 1px)",
        backgroundSize: "26px 26px",
        backgroundColor: "hsl(344,25%,96%)",
      }}
    >
      <div className="container mx-auto px-4">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center mb-14">
            <p className="text-primary font-semibold tracking-wide mb-2">
              WHY US
            </p>

            <h2 className="text-3xl md:text-5xl font-extrabold text-foreground mb-4">
              Experience Allyourclaimsneeds Company
            </h2>

            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              We fight for your rights and work tirelessly to ensure you
              receive the maximum settlement you deserve.
            </p>
          </div>

          {/* 6 Feature Cards */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {reasons.map((reason, i) => {
              const Icon = reason.icon;
              return (
                <Card
                  key={i}
                  className="
                    group rounded-2xl 
                    border border-border 
                    bg-background 
                    shadow-sm 
                    hover:shadow-md hover:-translate-y-1 
                    transition-all duration-200
                  "
                >
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      {/* ICON with hover effect */}
                      <div
                        className="
                          w-14 h-14 rounded-lg flex items-center justify-center flex-shrink-0 
                          bg-primary/10 text-primary 
                          transition-all duration-300 
                          group-hover:bg-primary group-hover:text-primary-foreground
                        "
                      >
                        <Icon className="w-7 h-7 transition-colors duration-300" />
                      </div>

                      {/* Text */}
                      <div>
                        <h3 className="text-xl font-bold mb-2 text-foreground">
                          {reason.title}
                        </h3>
                        <p className="text-muted-foreground">
                          {reason.description}
                        </p>
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
