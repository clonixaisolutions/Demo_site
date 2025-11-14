import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Flame, Droplets, Wind, Zap, Home, Briefcase } from "lucide-react";

const services = [
  {
    icon: Flame,
    title: "Fire Damage",
    description: "Comprehensive assessment and claim management for fire-related property damage.",
  },
  {
    icon: Droplets,
    title: "Water Damage",
    description: "Expert handling of flooding, burst pipes, and water intrusion claims.",
  },
  {
    icon: Wind,
    title: "Hurricane Damage",
    description: "Specialized support for wind and storm damage insurance claims.",
  },
  {
    icon: Zap,
    title: "Electrical Damage",
    description: "Professional representation for electrical system damage claims.",
  },
  {
    icon: Home,
    title: "Residential Claims",
    description: "Dedicated service for homeowners and residential property damage.",
  },
  {
    icon: Briefcase,
    title: "Commercial Claims",
    description: "Expert assistance for business and commercial property claims.",
  },
];

const Services = () => {
  return (
    <section id="services" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-primary font-semibold mb-2">Our Services</p>
            <h2 className="text-3xl md:text-5xl font-bold mb-4">
              Comprehensive Insurance Claim Services
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              We handle all types of property damage claims with expertise and dedication
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <Card
                  key={index}
                  className="border-2 hover:border-primary transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
                >
                  <CardHeader>
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                      <Icon className="w-6 h-6 text-primary" />
                    </div>
                    <CardTitle className="text-xl">{service.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">{service.description}</p>
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

export default Services;
