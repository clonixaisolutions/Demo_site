// src/components/Services.tsx
import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Flame,
  Droplets,
  Wind,
  Zap,
  Home as HomeIcon,
  Briefcase,
} from "lucide-react";

import ResidentialImg from "@/assets/residentials.jpg";
import CommercialImg from "@/assets/commerical.jpg";

const services = [
  {
    icon: Flame,
    title: "Fire Damage",
    description:
      "Comprehensive assessment and claim management for fire-related property damage.",
  },
  {
    icon: Droplets,
    title: "Water Damage",
    description:
      "Expert handling of flooding, burst pipes, and water intrusion claims.",
  },
  {
    icon: Wind,
    title: "Hurricane Damage",
    description:
      "Specialized support for wind and storm damage insurance claims.",
  },
  {
    icon: Zap,
    title: "Electrical Damage",
    description:
      "Professional representation for electrical system damage claims.",
  },
  {
    icon: HomeIcon,
    title: "Residential Claims",
    description:
      "Dedicated service for homeowners and residential property damage.",
  },
  {
    icon: Briefcase,
    title: "Commercial Claims",
    description:
      "Expert assistance for business and commercial property claims.",
  },
];

const propertyTypes = [
  {
    title: "Residential Properties",
    subtitle: "Expert handling of homeowner claims with personalized service",
    image: ResidentialImg,
  },
  {
    title: "Commercial Properties",
    subtitle:
      "Minimize business disruption with fast, professional claim resolution",
    image: CommercialImg,
  },
];

const Services: React.FC = () => {
  return (
    <section
      id="services"
      className="relative py-20 overflow-hidden"
      style={{
        // soft wine-tinted background
        backgroundColor: "hsl(344,25%,96%)",
        // dot pattern using primary hue
        backgroundImage: `
          radial-gradient(circle at 6px 6px, hsla(344,66%,29%,0.10) 1.8px, transparent 2px),
          radial-gradient(circle at 18px 18px, hsla(344,66%,29%,0.10) 1.8px, transparent 2px)
        `,
        backgroundRepeat: "repeat",
        backgroundSize: "24px 24px",
        WebkitBackdropFilter: "blur(0.4px)",
        backdropFilter: "blur(0.4px)",
      }}
    >
      {/* Soft translucent overlay to keep pattern subtle */}
      <div className="absolute inset-0 bg-background/70 pointer-events-none" />

      <div className="relative container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Heading */}
          <div className="text-center mb-12">
            <p className="text-primary font-semibold mb-2">Our Services</p>
            <h2 className="text-3xl md:text-5xl font-bold mb-4 text-foreground">
              Comprehensive Insurance Claim Services
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              We handle all types of property damage claims with expertise and dedication
            </p>
          </div>

          {/* Service cards */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <Card
                  key={index}
                  className="
                    border border-primary/15 
                    hover:border-primary/50 
                    transition-all duration-300 
                    hover:shadow-xl hover:-translate-y-1 
                    bg-background/90 backdrop-blur-sm
                  "
                >
                  <CardHeader>
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                      <Icon className="w-6 h-6 text-primary" />
                    </div>
                    <CardTitle className="text-xl text-foreground">
                      {service.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">
                      {service.description}
                    </p>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          {/* Residential + Commercial feature cards */}
          <div className="grid md:grid-cols-2 gap-6">
            {propertyTypes.map((item, i) => (
              <div
                key={i}
                className="
                  group relative rounded-2xl overflow-hidden shadow-xl cursor-pointer
                  transition-transform duration-300 hover:-translate-y-1
                "
              >
                {/* Background image with zoom */}
                <div
                  className="w-full h-64 bg-cover bg-center transition-transform duration-700 ease-out group-hover:scale-110"
                  style={{ backgroundImage: `url(${item.image})` }}
                />

                {/* Wine-tinted overlay */}
                <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-primary/55 to-primary/80" />

                {/* Text */}
                <div className="absolute bottom-6 left-6 right-6 text-primary-foreground">
                  <h3 className="text-2xl font-extrabold drop-shadow-sm">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-sm drop-shadow-sm">
                    {item.subtitle}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
