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
        backgroundColor: "#f7fbff",
        backgroundImage: `
          radial-gradient(120% 40% at 50% 0%, rgba(59,130,246,0.10) 0%, rgba(59,130,246,0.10) 1.5px, transparent 3px),
          radial-gradient(120% 40% at 50% 100%, rgba(59,130,246,0.08) 0%, rgba(59,130,246,0.08) 1.5px, transparent 3px)
        `,
        backgroundRepeat: "repeat-y, repeat-y",
        backgroundSize: "100% 72px, 100% 72px",
        backgroundPosition: "0 0, 0 36px",
        filter: "blur(0.2px)",
      }}
    >
      {/* Soft overlay */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ background: "rgba(255,255,255,0.02)" }}
      />

      <div className="max-w-7xl mx-auto px-4 relative">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">

          {/* LEFT IMAGE */}
          <div className="flex justify-center lg:justify-start">
            <div className="relative w-full max-w-xl rounded-2xl overflow-hidden shadow-lg">
              <img
                src={LeftHero}
                alt="Client"
                className="w-full object-cover rounded-2xl max-h-[520px]"
              />

              {/* Stat pill relocated */}
              <div className="absolute left-4 bottom-4 hidden sm:flex items-center gap-4 bg-white/90 backdrop-blur-sm rounded-xl shadow-md px-4 py-3 max-w-xs">
                <div className="text-3xl font-extrabold text-blue-700 leading-none">747%</div>
                <div>
                  <div className="text-xs font-semibold text-slate-700">Average Settlement Increase</div>
                  <div className="text-[11px] text-slate-500">Compared to initial insurance offers</div>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT CONTENT */}
          <div className="flex flex-col justify-center w-full">
            <div className="mb-6">
              <p className="text-primary font-semibold tracking-wide">THE DIFFERENCE</p>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-slate-900 leading-tight mt-3">
                With ABC vs. Going It Alone
              </h2>
              <p className="text-lg text-slate-600 max-w-2xl mt-4">
                Insurance companies have teams of adjusters working to minimize your claim.
                Shouldn't you have an expert working for you?
              </p>
            </div>

            <div className="bg-white border border-slate-100 rounded-2xl shadow-sm overflow-hidden">
              <div className="grid grid-cols-3 border-b border-slate-100 px-6 py-4 items-center">
                <div className="text-sm font-semibold text-slate-800">Feature</div>
                <div className="text-center text-sm font-semibold text-blue-700">With Us</div>
                <div className="text-center text-sm font-semibold text-slate-600">DIY</div>
              </div>

              <div className="p-6">
                <div className="grid gap-y-3">
                  {features.map((feature, index) => (
                    <div
                      key={index}
                      className="grid grid-cols-3 items-center gap-4 px-4 py-4 rounded-lg border border-slate-200 bg-white hover:-translate-y-0.5 hover:shadow-md hover:bg-blue-50 transition"
                    >
                      <div className="text-sm text-slate-900 font-medium">{feature}</div>

                      <div className="flex justify-center">
                        <div className="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center shadow-sm">
                          <Check className="w-5 h-5 text-blue-600" />
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

                  {/* UPDATED — Smooth Scroll to Get Started */}
                  <button
                    onClick={scrollToGetStarted}
                    className="px-10 py-4 rounded-full bg-blue-700 text-white font-medium text-sm shadow hover:bg-blue-800 transition text-center"
                  >
                    Get Expert Help Now
                  </button>

                  {/* Smooth scroll to testimonials */}
                  <a
                    href="#testimonials"
                    className="px-10 py-4 rounded-full border-2 border-blue-700 text-blue-700 font-medium text-sm hover:bg-blue-50 transition text-center"
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
