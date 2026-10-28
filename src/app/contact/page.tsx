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
    subject: "General Inquiry",
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
    { name: "Civil Lines Main Office & Hub", address: "Opp. Landmark Hotel, Mall Road / Civil Lines, Kanpur 208001", phone: SITE_CONFIG.phone },
    { name: "Kakadeo Student Hub", address: "Coaching Nagar, Near Dev Nagar Chauraha, Kakadeo, Kanpur 208025", phone: "+91 98765 43210" },
    { name: "Swaroop Nagar Hub", address: "Near Motijheel Metro Station, Swaroop Nagar, Kanpur 208002", phone: SITE_CONFIG.phone },
    { name: "IIT Kanpur Gate Hub", address: "Main Gate, Kalyanpur, GT Road, Kanpur 208016", phone: "+91 98765 43210" },
  ];

  return (
    <div className="min-h-screen bg-slate-50 pb-16">
      <PageHero
        title="Contact KanpurCabs"
        subtitle="24/7 Car & Bike Rental Support, Reservations, and Corporate Inquiries in Kanpur"
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Contact Us" }]}
      />

      <div className="container mx-auto px-4 mt-12 space-y-12">
        {/* Top Direct Action Strip */}
        <div className="bg-gradient-to-r from-primary-950 via-primary-900 to-slate-900 text-white rounded-3xl p-6 sm:p-8 shadow-xl flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-1 text-center md:text-left">
            <span className="text-accent-400 font-bold uppercase tracking-wider text-xs">
              Immediate Assistance Required?
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
              Speak Directly with Our Kanpur Dispatch Team
            </h2>
            <p className="text-slate-300 text-xs sm:text-sm">
              Average response time: under 2 minutes. Available 24 hours a day, 7 days a week.
            </p>
          </div>
          <div className="flex flex-wrap items-center justify-center gap-3 w-full md:w-auto">
            <a
              href={getPhoneLink(SITE_CONFIG.phone)}
              className="inline-flex items-center gap-2 bg-accent-500 hover:bg-accent-600 text-white font-bold px-6 py-3.5 rounded-xl transition-all shadow-md hover:shadow-lg text-sm"
            >
              <PhoneCall className="w-4 h-4" />
              <span>Call {SITE_CONFIG.phone}</span>
            </a>
            <a
              href={getWhatsAppLink("Hello KanpurCabs, I want to inquire about vehicle booking in Kanpur.")}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white font-bold px-6 py-3.5 rounded-xl transition-all shadow-md hover:shadow-lg text-sm"
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
                Online Inquiry
              </span>
              <h3 className="text-2xl font-bold text-slate-900 mt-1">
                Send Us a Message
              </h3>
              <p className="text-slate-500 text-sm mt-1">
                Fill in your details below. Our customer team will review and reply within 15 minutes.
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
                <p className="text-slate-600 text-sm max-w-md mx-auto">
                  Thank you for reaching out, <strong>{formData.name}</strong>. A KanpurCabs representative will call you at <strong>{formData.phone}</strong> shortly.
                </p>
                <button
                  onClick={() => {
                    setSubmitted(false);
                    setFormData({ name: "", phone: "", email: "", subject: "General Inquiry", message: "" });
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
                      className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-primary-900 text-sm bg-slate-50 focus:bg-white transition-all"
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
                      className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-primary-900 text-sm bg-slate-50 focus:bg-white transition-all"
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
                      className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-primary-900 text-sm bg-slate-50 focus:bg-white transition-all"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                      Inquiry Category *
                    </label>
                    <select
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-primary-900 text-sm bg-slate-50 focus:bg-white transition-all"
                    >
                      <option value="General Inquiry">General Inquiry</option>
                      <option value="Car Rental Booking">Car Rental Booking</option>
                      <option value="Bike & Scooter Rental">Bike & Scooter Rental</option>
                      <option value="Outstation Cab Trip">Outstation Cab Trip</option>
                      <option value="Kanpur Sightseeing Tour">Kanpur Sightseeing Tour</option>
                      <option value="Corporate Monthly Retainer">Corporate Monthly Retainer</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                    Your Requirements / Message *
                  </label>
                  <textarea
                    name="message"
                    required
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell us travel dates, pickup location in Kanpur, vehicle preference, or specific requests..."
                    className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-primary-900 text-sm bg-slate-50 focus:bg-white transition-all resize-none"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 bg-primary-900 hover:bg-primary-950 text-white font-bold rounded-xl transition-all shadow-md hover:shadow-lg disabled:opacity-70 text-sm"
                >
                  {loading ? (
                    <>
                      <Loader2 className="w-4 h-4 animate-spin" />
                      <span>Sending Message...</span>
                    </>
                  ) : (
                    <>
                      <Send className="w-4 h-4" />
                      <span>Submit Inquiry</span>
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
                <h4 className="font-bold text-slate-900 text-base">24/7 Phone Support</h4>
                <p className="text-slate-500 text-xs">Instant booking confirmation and driver tracking</p>
                <div className="pt-1">
                  <a
                    href={getPhoneLink(SITE_CONFIG.phone)}
                    className="font-extrabold text-primary-900 hover:text-accent-600 transition-colors text-base block"
                  >
                    {SITE_CONFIG.phone}
                  </a>
                  <a
                    href="tel:+919876501234"
                    className="font-bold text-slate-700 hover:text-accent-600 transition-colors text-sm block"
                  >
                    +91 98765 01234 (Alternate)
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
                <p className="text-slate-500 text-xs">For corporate tie-ups, invoices, and quotations</p>
                <div className="pt-1">
                  <a
                    href={`mailto:${SITE_CONFIG.email}`}
                    className="font-bold text-primary-900 hover:text-accent-600 transition-colors text-sm block"
                  >
                    {SITE_CONFIG.email}
                  </a>
                  <a
                    href="mailto:bookings@kanpurcabs.com"
                    className="font-medium text-slate-600 hover:text-accent-600 transition-colors text-xs block"
                  >
                    bookings@kanpurcabs.com
                  </a>
                </div>
              </div>
            </div>

            {/* Office & Hub Address */}
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-200 flex items-start gap-4">
              <div className="w-12 h-12 bg-emerald-50 rounded-2xl flex items-center justify-center flex-shrink-0 text-emerald-700">
                <Building2 className="w-6 h-6" />
              </div>
              <div className="space-y-1">
                <h4 className="font-bold text-slate-900 text-base">Registered Head Office</h4>
                <p className="text-slate-600 text-sm leading-relaxed">
                  123, Civil Lines, Near Mall Road, Opp. Landmark Chauraha, Kanpur, Uttar Pradesh 208001
                </p>
                <div className="pt-2 text-xs text-slate-500 flex items-center gap-1.5 font-medium">
                  <Clock className="w-3.5 h-3.5 text-accent-500" />
                  <span>24/7 Dispatch Desk • Walk-in: 8:00 AM – 9:00 PM</span>
                </div>
              </div>
            </div>

            {/* Trust badge card */}
            <div className="bg-slate-100 rounded-2xl p-5 border border-slate-200 text-xs text-slate-700 space-y-2">
              <div className="flex items-center gap-2 font-bold text-slate-900 text-sm">
                <ShieldCheck className="w-4 h-4 text-emerald-600" />
                <span>Punctuality & Safety Guarantee</span>
              </div>
              <p className="leading-relaxed">
                All vehicles are commercial RTO registered, fully insured, sanitized before dispatch, and driven by background-verified professional chauffeurs.
              </p>
            </div>

          </div>
        </div>

        {/* Real Interactive Google Map for Kanpur Civil Lines */}
        <div className="bg-white rounded-3xl p-6 sm:p-8 shadow-sm border border-slate-200">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-6 gap-2">
            <div>
              <span className="text-accent-600 font-bold uppercase tracking-wider text-xs">
                City Locations
              </span>
              <h3 className="text-2xl font-bold text-slate-900">
                Kanpur Operations & Pickup Hubs
              </h3>
            </div>
            <span className="text-xs text-slate-500 font-medium flex items-center gap-1">
              <MapPin className="w-4 h-4 text-primary-900" />
              Central Kanpur Coverage (Civil Lines, Kakadeo, Swaroop Nagar, Kalyanpur)
            </span>
          </div>

          {/* Interactive Google Map iframe */}
          <div className="rounded-2xl overflow-hidden border border-slate-200 h-[380px] w-full shadow-inner relative">
            <iframe
              title="KanpurCabs Head Office Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14288.750596325992!2d80.3411444!3d26.4719273!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x399c4786358c8ecb%3A0xf69c27b03b41bf63!2sCivil%20Lines%2C%20Kanpur%2C%20Uttar%20Pradesh%20208001!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen={false}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="w-full h-full"
            />
          </div>

          {/* Pickup Hubs List Below Map */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-6">
            {hubs.map((hub, idx) => (
              <div key={idx} className="bg-slate-50 p-4 rounded-xl border border-slate-200 text-xs">
                <div className="font-bold text-slate-900 mb-1 flex items-center gap-1.5">
                  <Navigation className="w-3.5 h-3.5 text-accent-600 flex-shrink-0" />
                  <span>{hub.name}</span>
                </div>
                <p className="text-slate-600 mb-2 leading-relaxed">{hub.address}</p>
                <a href={getPhoneLink(hub.phone)} className="text-primary-900 font-bold hover:underline">
                  {hub.phone}
                </a>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}
