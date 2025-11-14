import { Shield, Award, Users, Clock, DollarSign, FileCheck } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const features = [
  {
    icon: Shield,
    title: "Licensed & Insured",
    description: "Fully licensed public adjusters in all Florida counties",
  },
  {
    icon: Award,
    title: "Industry Certified",
    description: "Certified by national adjusting associations",
  },
  {
    icon: Users,
    title: "5,000+ Clients Served",
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
    <section className="py-20 bg-muted">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <Card
                key={index}
                className="border-none shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              >
                <CardContent className="p-6">
                  <div className="flex flex-col items-center text-center">
                    <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                      <Icon className="w-8 h-8 text-primary" />
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
