// src/components/About.tsx
import { CheckCircle } from "lucide-react";
import teamImage from "@/assets/team-meeting.jpg";

const About = () => {
  const points = [
    "Expert policy interpretation and claim documentation",
    "Thorough damage assessment and loss calculation",
    "Professional negotiation with insurance companies",
    "Faster claim resolution and higher settlements",
  ];

  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Heading */}
          <div className="text-center mb-12">
            <p className="text-primary font-semibold mb-2 tracking-wide uppercase">
              Adjuster Texas
            </p>
            <h2 className="text-3xl md:text-5xl font-bold mb-4 text-foreground">
              Your Trusted Partner in Insurance Claim Resolution
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* LEFT TEXT */}
            <div>
              <p className="text-lg text-muted-foreground mb-6">
                At Adjuster Texas, we understand that dealing with property damage and
                insurance companies can be overwhelming. That&apos;s why we&apos;re
                here to level the playing field.
              </p>

              <p className="text-lg text-muted-foreground mb-8">
                As licensed public insurance adjusters, we work exclusively for you,
                not the insurance company. Our mission is to ensure you receive every
                dollar you&apos;re entitled to while you focus on recovery.
              </p>

              {/* ALWAYS-HIGHLIGHTED KEY POINTS + minimal hover */}
              <div className="space-y-5">
                <h3 className="text-xl font-bold mb-4 text-foreground">
                  Why Choose Public Adjusters?
                </h3>

                {points.map((text, i) => (
                  <div
                    key={i}
                    className="
                      group flex items-start gap-4 p-4
                      bg-primary/5 border border-primary/15
                      rounded-xl relative shadow-sm
                      transition-all duration-300
                      hover:bg-primary/10 hover:-translate-y-1 hover:shadow-md
                      border-l-4 border-primary group-hover:border-primary/80
                    "
                  >
                    {/* Icon Container with glow */}
                    <div className="relative flex-shrink-0">
                      {/* subtle glow behind icon, intensifies on hover */}
                      <div
                        className="
                          absolute inset-0 rounded-full -z-10
                          bg-primary/30 opacity-80 blur-md
                          transition-all duration-300
                          group-hover:opacity-100 group-hover:scale-[1.05]
                        "
                        style={{ transformOrigin: "center" }}
                      />
                      <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center shadow-md transition-transform duration-300 group-hover:scale-[1.06]">
                        <CheckCircle className="w-6 h-6 text-primary-foreground" />
                      </div>
                    </div>

                    <p className="text-foreground/90 font-medium leading-relaxed">
                      {text}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* RIGHT IMAGE */}
            <div className="relative">
              <img
                src={teamImage}
                alt="Company team"
                className="
                  rounded-xl shadow-xl w-full
                  transition-transform duration-300 hover:scale-[1.02]
                "
              />
              {/* subtle wine-tinted overlay border/glow */}
              <div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-primary/15" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
