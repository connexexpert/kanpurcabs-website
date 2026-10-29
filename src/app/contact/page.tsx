"use client";

import { useState } from "react";
import PageHero from "@/components/ui/PageHero";
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  MessageSquare,
  Send,
  Loader2,
  CheckCircle2,
  AlertCircle,
  PhoneCall,
  ShieldCheck,
  Building2,
  Navigation,
} from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import { SITE_CONFIG, getPhoneLink, getWhatsAppLink } from "@/lib/utils";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    subject: "Local Hourly Driver",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setErrorMsg("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();
      if (res.ok && data.success) {
        setSubmitted(true);
      } else {
        setErrorMsg(data.message || "Failed to send message. Please call us directly.");
      }
    } catch (err: any) {
      setErrorMsg("Network error. Please call our 24/7 support line directly.");
    } finally {
      setLoading(false);
    }
  };

  const hubs = [
    {
      name: "Civil Lines Dispatch Desk & Office",
      address: "Opp. Landmark Hotel, Mall Road / Civil Lines, Kanpur 208001",
      phone: SITE_CONFIG.phone,
    },
    {
      name: "Kakadeo Driver Hub",
      address: "Dev Nagar Chauraha, Near Coaching Hub, Kakadeo, Kanpur 208025",
      phone: SITE_CONFIG.phone,
    },
    {
      name: "Swaroop Nagar Hub",
      address: "Near Rave 3 & Moti Jheel Metro, Swaroop Nagar, Kanpur 208002",
      phone: SITE_CONFIG.phone,
    },
    {
      name: "Kalyanpur / IIT Hub",
      address: "Main GT Road, Near IIT Kanpur Gate, Kalyanpur, Kanpur 208016",
      phone: SITE_CONFIG.phone,
    },
  ];

  return (
    <div className="min-h-screen bg-slate-50 pb-16">
      <PageHero
        title="Contact KanpurDrivers"
        subtitle="24/7 Verified Chauffeur & Bike Rider Dispatch Across Kanpur"
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Contact Us" }]}
      />

      <div className="container mx-auto px-4 mt-12 space-y-12">
        {/* Top Direct Action Strip */}
        <div className="bg-gradient-to-r from-primary-950 via-primary-900 to-slate-900 text-white rounded-3xl p-6 sm:p-8 shadow-xl flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-1 text-center md:text-left">
            <span className="text-accent-400 font-bold uppercase tracking-wider text-xs">
              Need a Verified Driver Right Now?
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
              Speak Directly with Our Kanpur Dispatch Desk
            </h2>
            <p className="text-slate-300 text-xs sm:text-sm">
              Average driver doorstep arrival time: 45 to 60 minutes across all Kanpur sectors.
            </p>
          </div>
          <div className="flex flex-wrap items-center justify-center gap-3 w-full md:w-auto">
            <a
              href={getPhoneLink(SITE_CONFIG.phone)}
              className="inline-flex items-center gap-2 bg-accent-500 hover:bg-accent-600 text-white font-bold px-6 py-3.5 rounded-xl transition-all shadow-md text-xs sm:text-sm"
            >
              <PhoneCall className="w-4 h-4" />
              <span>Call {SITE_CONFIG.phone}</span>
            </a>
            <a
              href={getWhatsAppLink(
                SITE_CONFIG.whatsapp,
                "Hello KanpurDrivers, I want to hire a driver for my car in Kanpur."
              )}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white font-bold px-6 py-3.5 rounded-xl transition-all shadow-md text-xs sm:text-sm"
            >
              <MessageSquare className="w-4 h-4" />
              <span>Chat on WhatsApp</span>
            </a>
          </div>
        </div>

        {/* Main Grid: Form & Info */}
        <div className="grid lg:grid-cols-12 gap-8 items-start">
          {/* Interactive Contact Form (7 cols) */}
          <div className="lg:col-span-7 bg-white p-7 sm:p-10 rounded-3xl shadow-sm border border-slate-200">
            <div className="mb-6">
              <span className="text-accent-600 font-bold uppercase tracking-wider text-xs">
                Driver Inquiry & Requests
              </span>
              <h3 className="text-2xl font-bold text-slate-900 mt-1">
                Send Us Your Requirements
              </h3>
              <p className="text-slate-500 text-xs sm:text-sm mt-1">
                Fill in your details below. Our Kanpur coordinator will call you back within 10 minutes.
              </p>
            </div>

            {submitted ? (
              <div className="bg-emerald-50 border border-emerald-200 rounded-2xl p-8 text-center space-y-4">
                <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h4 className="text-xl font-bold text-emerald-900">
                  Message Sent Successfully!
                </h4>
                <p className="text-slate-600 text-xs sm:text-sm max-w-md mx-auto">
                  Thank you for reaching out, <strong>{formData.name}</strong>. A KanpurDrivers coordinator will call you at <strong>{formData.phone}</strong> shortly.
                </p>
                <button
                  onClick={() => {
                    setSubmitted(false);
                    setFormData({
                      name: "",
                      phone: "",
                      email: "",
                      subject: "Local Hourly Driver",
                      message: "",
                    });
                  }}
                  className="mt-4 px-6 py-2.5 bg-primary-900 text-white text-xs font-bold rounded-xl hover:bg-primary-950 transition-colors"
                >
                  Send Another Inquiry
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                {errorMsg && (
                  <div className="bg-red-50 border border-red-200 rounded-xl p-3.5 text-red-700 text-xs flex items-center gap-2">
                    <AlertCircle className="w-4 h-4 flex-shrink-0" />
                    <span>{errorMsg}</span>
                  </div>
                )}

                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                      Your Full Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="e.g. Rahul Sharma"
                      className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-primary-900 text-xs sm:text-sm bg-slate-50 focus:bg-white transition-all"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      required
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="10-digit mobile number"
                      pattern="[6-9][0-9]{9}"
                      title="Enter a valid 10-digit Indian phone number"
                      className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-primary-900 text-xs sm:text-sm bg-slate-50 focus:bg-white transition-all"
                    />
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                      Email Address (Optional)
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="you@example.com"
                      className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-primary-900 text-xs sm:text-sm bg-slate-50 focus:bg-white transition-all"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                      Service Requirement *
                    </label>
                    <select
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-primary-900 text-xs sm:text-sm bg-slate-50 focus:bg-white transition-all"
                    >
                      <option value="Local Hourly Driver">Local Hourly Car Driver (4h/8h/12h)</option>
                      <option value="Outstation Driver">Outstation Highway Driver</option>
                      <option value="Monthly Permanent Driver">Monthly Permanent Chauffeur</option>
                      <option value="Bike Rider on Demand">Two-Wheeler & Bike Rider</option>
                      <option value="Night Party Safe Drop">Night Safe Drop Home</option>
                      <option value="Corporate Retainer">Corporate Fleet Driver Staffing</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                    Your Vehicle & Location Details *
                  </label>
                  <textarea
                    name="message"
                    required
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell us vehicle model (manual or automatic), pickup area in Kanpur, date, and duty hours..."
                    className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-primary-900 text-xs sm:text-sm bg-slate-50 focus:bg-white transition-all resize-none"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 bg-primary-900 hover:bg-primary-950 text-white font-bold rounded-xl transition-all shadow-md hover:shadow-lg disabled:opacity-70 text-xs sm:text-sm"
                >
                  {loading ? (
                    <>
                      <Loader2 className="w-4 h-4 animate-spin" />
                      <span>Sending Request...</span>
                    </>
                  ) : (
                    <>
                      <Send className="w-4 h-4" />
                      <span>Submit Driver Request</span>
                    </>
                  )}
                </button>
              </form>
            )}
          </div>

          {/* Contact Information & Channels (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            {/* Phone Card */}
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-200 flex items-start gap-4">
              <div className="w-12 h-12 bg-blue-50 rounded-2xl flex items-center justify-center flex-shrink-0 text-primary-900">
                <Phone className="w-6 h-6" />
              </div>
              <div className="space-y-1">
                <h4 className="font-bold text-slate-900 text-base">24/7 Dispatch Desk</h4>
                <p className="text-slate-500 text-xs">Instant driver assignment & live coordination</p>
                <div className="pt-1">
                  <a
                    href={getPhoneLink(SITE_CONFIG.phone)}
                    className="font-extrabold text-primary-900 hover:text-accent-600 transition-colors text-base block"
                  >
                    {SITE_CONFIG.phone}
                  </a>
                </div>
              </div>
            </div>

            {/* Email Card */}
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-200 flex items-start gap-4">
              <div className="w-12 h-12 bg-orange-50 rounded-2xl flex items-center justify-center flex-shrink-0 text-accent-600">
                <Mail className="w-6 h-6" />
              </div>
              <div className="space-y-1">
                <h4 className="font-bold text-slate-900 text-base">Email Inquiries</h4>
                <p className="text-slate-500 text-xs">Monthly contracts & corporate billing</p>
                <div className="pt-1">
                  <a
                    href={`mailto:${SITE_CONFIG.email}`}
                    className="font-bold text-slate-800 hover:text-primary-900 transition-colors text-sm"
                  >
                    {SITE_CONFIG.email}
                  </a>
                </div>
              </div>
            </div>

            {/* Office Address Card */}
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-200 flex items-start gap-4">
              <div className="w-12 h-12 bg-emerald-50 rounded-2xl flex items-center justify-center flex-shrink-0 text-emerald-700">
                <MapPin className="w-6 h-6" />
              </div>
              <div className="space-y-1">
                <h4 className="font-bold text-slate-900 text-base">Main Dispatch Office</h4>
                <p className="text-slate-600 text-xs leading-relaxed">
                  {SITE_CONFIG.address}
                </p>
                <p className="text-[11px] text-slate-400 font-medium pt-1">
                  Working Hours: 24 Hours / 7 Days a Week
                </p>
              </div>
            </div>

            {/* Hubs Card */}
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-200">
              <h4 className="font-bold text-slate-900 text-sm mb-3 flex items-center gap-2">
                <Building2 className="w-4 h-4 text-primary-900" /> Kanpur Driver Dispatch Hubs
              </h4>
              <div className="space-y-3">
                {hubs.map((hub, idx) => (
                  <div key={idx} className="p-3 bg-slate-50 rounded-xl border border-slate-100 text-xs">
                    <span className="font-bold text-slate-900 block">{hub.name}</span>
                    <span className="text-slate-500 text-[11px] block mt-0.5">{hub.address}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
