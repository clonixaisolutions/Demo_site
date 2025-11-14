import { Shield, Award, Users, Clock, DollarSign, FileCheck } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const features = [
  {
    icon: Shield,
    title: "Licensed & Insured",
    description: "Fully licensed public adjusters in the Dallas Fort Worth Metroplex",
  },
  {
    icon: Award,
    title: "Industry Certified",
    description: "Certified by national adjusting associations",
  },
  {
    icon: Users,
    title: "200+ Clients Served",
    description: "Trusted by thousands of property owners",
  },
  {
    icon: Clock,
    title: "24/7 Emergency Response",
    description: "Available when disaster strikes",
  },
  {
    icon: DollarSign,
    title: "$50M+ Recovered",
    description: "Proven track record of success",
  },
  {
    icon: FileCheck,
    title: "No Win, No Fee",
    description: "Only paid when you receive settlement",
  },
];

const Features = () => {
  return (
    <section
      className="py-20 relative"
      style={{
        // base background color
        backgroundColor: "#f7fbff",
        // Diagonal stripes pattern (light)
        backgroundImage: `
          repeating-linear-gradient(
            135deg,
            rgba(59,130,246,0.05) 0px,
            rgba(59,130,246,0.05) 12px,
            rgba(255,255,255,0.0) 12px,
            rgba(255,255,255,0.0) 24px
          )
        `,
        // adjust tile size / alignment if needed
        backgroundSize: "24px 24px",
        // optional subtle overlay to soften the pattern
        // backgroundBlendMode: "overlay",
      }}
    >
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <Card
                key={index}
                className="
                  group border-none shadow-md
                  hover:shadow-xl hover:-translate-y-1
                  transition-all duration-300
                "
              >
                <CardContent className="p-6">
                  <div className="flex flex-col items-center text-center">

                    {/* ICON WITH HOVER EFFECT ADDED */}
                    <div
                      className="
                        w-16 h-16 rounded-full flex items-center justify-center mb-4
                        bg-primary/10 text-primary
                        transition-all duration-300
                        group-hover:bg-primary group-hover:text-white
                      "
                    >
                      <Icon className="w-8 h-8 transition-colors duration-300" />
                    </div>

                    <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                    <p className="text-muted-foreground">{feature.description}</p>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Features;
