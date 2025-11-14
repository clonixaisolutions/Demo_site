// src/components/GetStarted.tsx
import React from "react";
import { Phone, Mail, MapPin, Clock } from "lucide-react";

export default function GetStarted() {
  return (
    <section
      id="get-started"
      className="py-20"
      style={{
        backgroundImage:
          "radial-gradient(circle at 1px 1px, rgba(59,130,246,0.03) 1px, transparent 1px)",
        backgroundSize: "40px 40px",
        backgroundColor: "#f7fbff",
      }}
    >
      <div className="max-w-7xl mx-auto px-4">
        
        {/* Header */}
        <div className="text-center mb-10">
          <p className="text-primary font-semibold tracking-wide">GET STARTED</p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-slate-900 mt-3">
            Schedule Your Free Claim Review
          </h2>
          <p className="text-lg text-slate-600 max-w-3xl mx-auto mt-4">
            Fill out the form below and one of our expert adjusters will contact you within 24 hours.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
          
          {/* LEFT COLUMN — LeadConnector Form */}
          <div className="bg-white border border-slate-100 rounded-2xl shadow-sm p-6">
            <div className="w-full min-h-[700px]">
              <iframe
                src="https://api.leadconnectorhq.com/widget/form/O9a3JVrpWiXvGVGPgPJn"
                style={{
                  width: "100%",
                  height: "100%",
                  border: "none",
                  borderRadius: "8px",
                  minHeight: "700px",
                }}
                id="inline-O9a3JVrpWiXvGVGPgPJn"
                data-layout='{"id":"INLINE"}'
                data-trigger-type="alwaysShow"
                data-activation-type="alwaysActivated"
                data-deactivation-type="neverDeactivate"
                data-form-name="Marketing Agency Request"
                data-height="644"
                data-layout-iframe-id="inline-O9a3JVrpWiXvGVGPgPJn"
                data-form-id="O9a3JVrpWiXvGVGPgPJn"
                title="Marketing Agency Request"
              ></iframe>

              <script src="https://link.msgsndr.com/js/form_embed.js"></script>
            </div>
          </div>

          {/* RIGHT COLUMN — Contact Info */}
          <div className="space-y-6">

            {/* CONTACT CARD */}
            <div className="rounded-2xl overflow-hidden shadow-lg bg-blue-800 text-white p-8">
              <h3 className="text-2xl font-bold mb-6">Contact Information</h3>

              <div className="space-y-5">

                {/* Phone */}
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 rounded-lg bg-blue-700/70 grid place-items-center">
                    <Phone className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <div className="text-sm font-semibold">Phone</div>
                    <div className="text-lg font-medium">(817) 565-5122</div>
                    <div className="text-xs text-blue-100">24/7 Emergency Line</div>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 rounded-lg bg-blue-700/70 grid place-items-center">
                    <Mail className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <div className="text-sm font-semibold">Email</div>
                    <div className="text-lg font-medium">info@vecsclaims.com</div>
                    <div className="text-xs text-blue-100">We respond within 24 hours</div>
                  </div>
                </div>

                {/* Location (UPDATED) */}
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 rounded-lg bg-blue-700/70 grid place-items-center">
                    <MapPin className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <div className="text-sm font-semibold">Service Area</div>
                    <div className="text-lg font-medium">Servicing the Dallas Fort Worth Metroplex</div>
                  </div>
                </div>

                {/* Business Hours (UPDATED) */}
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 rounded-lg bg-blue-700/70 grid place-items-center">
                    <Clock className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <div className="text-sm font-semibold">Business Hours</div>
                    <div className="text-xs text-blue-100">
                      Mon – Fri: 8:00 am – 4:00 pm<br />
                      Sat – Sun: Closed
                    </div>
                  </div>
                </div>

              </div>
            </div>

            {/* Why Contact Us */}
            <div className="bg-white border border-slate-100 rounded-2xl shadow-sm p-6">
              <h4 className="text-lg font-semibold text-slate-900 mb-4">Why Contact Us?</h4>
              <ul className="list-disc list-inside text-slate-600 space-y-3">
                <li>Free, no-obligation claim review</li>
                <li>Same-day response to inquiries</li>
                <li>No upfront costs or fees</li>
                <li>Licensed and insured professionals</li>
                <li>Serving the Dallas Fort Worth Metroplex</li>
              </ul>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
