// src/components/GetStarted.tsx
import React, { useState } from "react";
import { Phone, Mail, MapPin, Clock } from "lucide-react";

type FormState = {
  firstName: string;
  phone: string;
  email: string;
  propertyType: string;
  damageDetails: string;
};

export default function GetStarted() {
  const [form, setForm] = useState<FormState>({
    firstName: "",
    phone: "",
    email: "",
    propertyType: "",
    damageDetails: "",
  });

  const [errors, setErrors] = useState<Partial<FormState>>({});
  const [submitting, setSubmitting] = useState(false);
  const [success, setSuccess] = useState<string | null>(null);

  const validate = (): boolean => {
    const next: Partial<FormState> = {};

    if (!form.firstName.trim()) next.firstName = "First name is required.";
    if (!form.phone.trim()) next.phone = "Phone number is required.";
    else if (!/^[0-9()+\-.\s]{7,20}$/.test(form.phone.trim()))
      next.phone = "Enter a valid phone number.";

    if (!form.email.trim()) next.email = "Email is required.";
    else if (
      !/^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/.test(
        form.email.trim()
      )
    )
      next.email = "Enter a valid email address.";

    if (!form.propertyType.trim())
      next.propertyType = "Please select a property type.";

    if (!form.damageDetails.trim())
      next.damageDetails = "Tell us briefly about the damage.";

    setErrors(next);
    return Object.keys(next).length === 0;
  };

  const onChange =
    (key: keyof FormState) =>
    (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
      setForm((s) => ({ ...s, [key]: e.target.value }));
      setErrors((prev) => ({ ...prev, [key]: undefined }));
      setSuccess(null);
    };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setSubmitting(true);
    setSuccess(null);

    try {
      // Replace this with your actual submit logic (API call)
      // Simulate network delay:
      await new Promise((res) => setTimeout(res, 900));

      setSuccess("Thanks! Your free claim review request has been submitted.");
      setForm({
        firstName: "",
        phone: "",
        email: "",
        propertyType: "",
        damageDetails: "",
      });
      setErrors({});
    } catch (err) {
      setSuccess("Something went wrong — please try again later.");
    } finally {
      setSubmitting(false);
    }
  };

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
          {/* LEFT COLUMN — Custom Form */}
          <div className="bg-white border border-slate-100 rounded-2xl shadow-sm p-6">
            <div className="max-w-xl mx-auto">
              <h3 className="text-2xl font-bold text-slate-900 mb-4">Request Your Free Claim Review</h3>
              <p className="text-sm text-slate-600 mb-6">
                Provide a few details about your property and the damage — we’ll review it and reach out with next steps.
              </p>

              <form onSubmit={handleSubmit} noValidate>
                {/* First Name */}
                <label className="block mb-4">
                  <span className="text-sm font-medium text-slate-700">First Name</span>
                  <input
                    type="text"
                    value={form.firstName}
                    onChange={onChange("firstName")}
                    className={`mt-2 block w-full rounded-lg border px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary/60 ${
                      errors.firstName ? "border-red-400" : "border-slate-200"
                    }`}
                    placeholder="John"
                    aria-invalid={!!errors.firstName}
                    aria-describedby={errors.firstName ? "firstName-error" : undefined}
                  />
                  {errors.firstName && (
                    <p id="firstName-error" className="text-xs text-red-500 mt-1">{errors.firstName}</p>
                  )}
                </label>

                {/* Phone */}
                <label className="block mb-4">
                  <span className="flex items-center justify-between text-sm font-medium text-slate-700">
                    <span>Phone <span className="text-xs text-slate-400 ml-1">(Required)</span></span>
                  </span>
                  <input
                    type="tel"
                    value={form.phone}
                    onChange={onChange("phone")}
                    className={`mt-2 block w-full rounded-lg border px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary/60 ${
                      errors.phone ? "border-red-400" : "border-slate-200"
                    }`}
                    placeholder="(123) 456-7899"
                    aria-invalid={!!errors.phone}
                    aria-describedby={errors.phone ? "phone-error" : undefined}
                  />
                  {errors.phone && (
                    <p id="phone-error" className="text-xs text-red-500 mt-1">{errors.phone}</p>
                  )}
                </label>

                {/* Email */}
                <label className="block mb-4">
                  <span className="text-sm font-medium text-slate-700">Email <span className="text-xs text-slate-400 ml-1">(Required)</span></span>
                  <input
                    type="email"
                    value={form.email}
                    onChange={onChange("email")}
                    className={`mt-2 block w-full rounded-lg border px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary/60 ${
                      errors.email ? "border-red-400" : "border-slate-200"
                    }`}
                    placeholder="you@example.com"
                    aria-invalid={!!errors.email}
                    aria-describedby={errors.email ? "email-error" : undefined}
                  />
                  {errors.email && (
                    <p id="email-error" className="text-xs text-red-500 mt-1">{errors.email}</p>
                  )}
                </label>

                {/* Property Type */}
                <label className="block mb-4">
                  <span className="text-sm font-medium text-slate-700">Property Type</span>
                  <select
                    value={form.propertyType}
                    onChange={onChange("propertyType")}
                    className={`mt-2 block w-full rounded-lg border px-4 py-3 text-sm bg-white focus:outline-none focus:ring-2 focus:ring-primary/60 ${
                      errors.propertyType ? "border-red-400" : "border-slate-200"
                    }`}
                    aria-invalid={!!errors.propertyType}
                    aria-describedby={errors.propertyType ? "propType-error" : undefined}
                  >
                    <option value="">Select property type</option>
                    <option value="residential">Residential</option>
                    <option value="commercial">Commercial</option>
                    <option value="rental">Rental / Investment</option>
                    <option value="other">Other</option>
                  </select>
                  {errors.propertyType && (
                    <p id="propType-error" className="text-xs text-red-500 mt-1">{errors.propertyType}</p>
                  )}
                </label>

                {/* Damage Details */}
                <label className="block mb-6">
                  <span className="text-sm font-medium text-slate-700">Tell us about your damage</span>
                  <textarea
                    value={form.damageDetails}
                    onChange={onChange("damageDetails")}
                    rows={5}
                    className={`mt-2 block w-full rounded-lg border px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary/60 ${
                      errors.damageDetails ? "border-red-400" : "border-slate-200"
                    }`}
                    placeholder="Describe the damage, when it happened, and any immediate concerns..."
                    aria-invalid={!!errors.damageDetails}
                    aria-describedby={errors.damageDetails ? "damage-error" : undefined}
                  />
                  {errors.damageDetails && (
                    <p id="damage-error" className="text-xs text-red-500 mt-1">{errors.damageDetails}</p>
                  )}
                </label>

                {/* CTA */}
                <div className="flex items-center space-x-4">
                  <button
                    type="submit"
                    disabled={submitting}
                    className="inline-flex items-center justify-center rounded-lg bg-primary px-6 py-3 text-white font-semibold shadow hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-primary/70 disabled:opacity-60"
                  >
                    {submitting ? "Submitting..." : "Submit Free Claim Review"}
                  </button>

                  <div className="text-sm text-slate-500">
                    <div>No upfront cost</div>
                    <div className="text-xs text-slate-400">We respect your privacy.</div>
                  </div>
                </div>

                {/* Success message */}
                {success && (
                  <p className="mt-4 text-sm text-green-600" role="status">
                    {success}
                  </p>
                )}
              </form>
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
                    <div className="text-lg font-medium">(123) 456-7899</div>
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
                    <div className="text-lg font-medium">info@abc.com</div>
                    <div className="text-xs text-blue-100">We respond within 24 hours</div>
                  </div>
                </div>

                {/* Location */}
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 rounded-lg bg-blue-700/70 grid place-items-center">
                    <MapPin className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <div className="text-sm font-semibold">Service Area</div>
                    <div className="text-lg font-medium">Servicing the Texas</div>
                  </div>
                </div>

                {/* Business Hours */}
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 rounded-lg bg-blue-700/70 grid place-items-center">
                    <Clock className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <div className="text-sm font-semibold">Business Hours</div>
                    <div className="text-xs text-blue-100">
                      Mon – Fri: 8:00 am – 4:00 pm
                      <br />
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
                <li>Serving the Texas</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
