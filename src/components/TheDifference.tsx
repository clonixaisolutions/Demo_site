// src/components/TheDifference.tsx
import React from "react";
import { Check, X } from "lucide-react";
import LeftHero from "@/assets/client.png";

const features = [
  "Works for Your Best Interest",
  "Expert Policy Interpretation",
  "Comprehensive Damage Assessment",
  "Professional Negotiation",
  "Handles All Paperwork",
  "Maximizes Settlement Amount",
  "Reduces Claim Stress",
  "Faster Claim Resolution",
];

export default function TheDifference() {
  // Smooth scroll function
  const scrollToGetStarted = () => {
    const el = document.getElementById("get-started");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="difference"
      className="relative py-20 overflow-hidden"
      style={{
        // soft wine-tinted base
        backgroundColor: "hsl(344,25%,96%)",
        // subtle radial wine pattern instead of blue
        backgroundImage: `
          radial-gradient(120% 40% at 50% 0%, hsla(344,66%,29%,0.10) 0%, hsla(344,66%,29%,0.10) 1.5px, transparent 3px),
          radial-gradient(120% 40% at 50% 100%, hsla(344,66%,29%,0.08) 0%, hsla(344,66%,29%,0.08) 1.5px, transparent 3px)
        `,
        backgroundRepeat: "repeat-y, repeat-y",
        backgroundSize: "100% 72px, 100% 72px",
        backgroundPosition: "0 0, 0 36px",
        filter: "blur(0.2px)",
      }}
    >
      {/* Soft overlay */}
      <div className="absolute inset-0 pointer-events-none bg-background/80" />

      <div className="max-w-7xl mx-auto px-4 relative">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          {/* LEFT IMAGE */}
          <div className="flex justify-center lg:justify-start">
            <div className="relative w-full max-w-xl rounded-2xl overflow-hidden shadow-lg bg-background">
              <img
                src={LeftHero}
                alt="Client"
                className="w-full object-cover rounded-2xl max-h-[520px]"
              />

              {/* Stat pill */}
              <div className="absolute left-4 bottom-4 hidden sm:flex items-center gap-4 bg-background/90 backdrop-blur-sm rounded-xl shadow-md px-4 py-3 max-w-xs">
                <div className="text-3xl font-extrabold text-primary leading-none">
                  747%
                </div>
                <div>
                  <div className="text-xs font-semibold text-foreground/80">
                    Average Settlement Increase
                  </div>
                  <div className="text-[11px] text-muted-foreground">
                    Compared to initial insurance offers
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT CONTENT */}
          <div className="flex flex-col justify-center w-full">
            <div className="mb-6">
              <p className="text-primary font-semibold tracking-wide">
                THE DIFFERENCE
              </p>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-foreground leading-tight mt-3">
                With Us vs. Going It Alone
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mt-4">
                Insurance companies have teams of adjusters working to minimize
                your claim. Shouldn&apos;t you have an expert working for you?
              </p>
            </div>

            <div className="bg-background border border-border rounded-2xl shadow-sm overflow-hidden">
              <div className="grid grid-cols-3 border-b border-border px-6 py-4 items-center">
                <div className="text-sm font-semibold text-foreground/80">
                  Feature
                </div>
                <div className="text-center text-sm font-semibold text-primary">
                  With Us
                </div>
                <div className="text-center text-sm font-semibold text-muted-foreground">
                  DIY
                </div>
              </div>

              <div className="p-6">
                <div className="grid gap-y-3">
                  {features.map((feature, index) => (
                    <div
                      key={index}
                      className="
                        grid grid-cols-3 items-center gap-4 
                        px-4 py-4 rounded-lg border border-border bg-background 
                        hover:-translate-y-0.5 hover:shadow-md 
                        hover:bg-primary/5 transition
                      "
                    >
                      <div className="text-sm text-foreground font-medium">
                        {feature}
                      </div>

                      <div className="flex justify-center">
                        <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center shadow-sm">
                          <Check className="w-5 h-5 text-primary" />
                        </div>
                      </div>

                      <div className="flex justify-center">
                        <div className="w-10 h-10 rounded-full bg-red-50 flex items-center justify-center shadow-sm">
                          <X className="w-5 h-5 text-red-500" />
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                {/* CTA Buttons */}
                <div className="mt-6 flex flex-col sm:flex-row gap-4">
                  {/* Smooth scroll to Get Started */}
                  <button
                    onClick={scrollToGetStarted}
                    className="
                      px-10 py-4 rounded-full 
                      bg-primary text-primary-foreground 
                      font-medium text-sm shadow 
                      hover:bg-primary/90 
                      transition text-center
                    "
                  >
                    Get Expert Help Now
                  </button>

                  {/* Smooth scroll to testimonials */}
                  <a
                    href="#testimonials"
                    className="
                      px-10 py-4 rounded-full 
                      border-2 border-primary text-primary 
                      font-medium text-sm 
                      hover:bg-primary/5 
                      transition text-center
                    "
                  >
                    Read Success Stories
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
