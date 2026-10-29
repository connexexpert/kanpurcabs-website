import { Metadata } from "next";
import Link from "next/link";
import { MapPin, Clock, CheckCircle2, ShieldCheck, Moon, Sparkles, PhoneCall } from "lucide-react";
import PageHero from "@/components/ui/PageHero";
import SectionHeading from "@/components/ui/SectionHeading";
import { SITE_CONFIG, getPhoneLink, getWhatsAppLink } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Local Hourly Car Driver in Kanpur | In Your Own Car | KanpurDrivers",
  description:
    "Hire verified, professional car drivers on hourly basis in Kanpur (4h, 8h, 12h duty). Enjoy stress-free travel in your personal car with zero traffic and parking worries.",
};

const packages = [
  {
    id: "4hr",
    name: "4 Hours Local Duty",
    description: "Ideal for quick market errands, doctor visits & short meetings.",
    rate: "₹400",
    ot: "₹80/hr",
    features: ["Manual & Automatic cars", "Doorstep pickup in Kanpur", "45-min arrival time"],
  },
  {
    id: "8hr",
    name: "8 Hours Full Day Duty",
    description: "Most popular for wedding shopping, multiple client visits & full-day city travel.",
    rate: "₹700",
    ot: "₹80/hr",
    features: ["Continuous 8-hour chauffeur availability", "Multiple stops allowed", "Uniformed police-verified driver"],
    popular: true,
  },
  {
    id: "12hr",
    name: "12 Hours Extended Duty",
    description: "Best for wedding functions, family events, and long-day executive transit.",
    rate: "₹950",
    ot: "₹100/hr",
    features: ["Full 12-hour duty coverage", "Trained in luxury & automatic vehicles", "Zero surge pricing guarantee"],
  },
];

const steps = [
  {
    title: "1. Select Duration",
    desc: "Choose between 4h (₹400), 8h (₹700), or 12h (₹950) duty packages for your personal car.",
  },
  {
    title: "2. Driver Reaches Doorstep",
    desc: "Our police-verified chauffeur arrives at your Kanpur address in uniform with original credentials.",
  },
  {
    title: "3. Travel Freely",
    desc: "Relax in your personal vehicle. Let our driver handle Kanpur traffic, congested lanes, and parking.",
  },
];

const areas = [
  "Swaroop Nagar",
  "Kakadeo",
  "Kidwai Nagar",
  "Civil Lines",
  "Gumti No. 5",
  "Kalyanpur",
  "Jajmau",
  "Mall Road",
  "Shyam Nagar",
  "Indira Nagar",
  "Govind Nagar",
  "Ashok Nagar",
  "Lajpat Nagar",
  "Panki",
];

export default function LocalCarDriverPage() {
  return (
    <main>
      <PageHero
        title="Local Hourly Car Driver Service"
        subtitle="Hire verified, experienced chauffeurs for your personal car across Kanpur — Doorstep arrival in 45 minutes"
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Services", href: "/services" },
          { label: "Local Car Driver", href: "/services/local-car-rental" },
        ]}
      />

      {/* Overview Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <span className="text-primary-800 font-bold uppercase tracking-wider text-xs">
              Personal Chauffeur on Demand
            </span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mt-1 mb-4">
              Stress-Free City Driving in Your Personal Car
            </h2>
            <p className="text-slate-600 text-base leading-relaxed">
              Navigating Kanpur&apos;s congested roads, one-way diversions, and cramped parking spots can be exhausting. With KanpurDrivers, you can hire a polite, police-verified chauffeur on an hourly basis. You provide your personal car; we provide the professional steering hand.
            </p>
          </div>

          {/* Pricing Cards */}
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto mb-16">
            {packages.map((pkg) => (
              <div
                key={pkg.id}
                className={`rounded-2xl p-6 flex flex-col border transition-all ${
                  pkg.popular
                    ? "bg-primary-950 text-white border-primary-900 shadow-xl relative"
                    : "bg-white text-slate-900 border-slate-200 shadow-sm hover:shadow-md"
                }`}
              >
                {pkg.popular && (
                  <div className="absolute -top-3 right-6 bg-accent-500 text-white text-[11px] font-bold px-3 py-1 rounded-full shadow">
                    Most Popular
                  </div>
                )}

                <h3 className="text-xl font-bold mb-1">{pkg.name}</h3>
                <p className={`text-xs mb-6 ${pkg.popular ? "text-slate-300" : "text-slate-500"}`}>
                  {pkg.description}
                </p>

                <div className="mb-6 pb-6 border-b border-slate-100/20">
                  <span className="text-xs uppercase tracking-wider block opacity-75">Driver Duty Fee</span>
                  <div className="text-3xl font-extrabold mt-1">{pkg.rate}</div>
                  <span className={`text-xs mt-1 block ${pkg.popular ? "text-accent-300" : "text-slate-500"}`}>
                    Overtime: {pkg.ot}
                  </span>
                </div>

                <ul className="space-y-3 mb-8 flex-grow">
                  {pkg.features.map((feat, i) => (
                    <li key={i} className="text-xs flex items-center gap-2">
                      <CheckCircle2
                        className={`w-4 h-4 flex-shrink-0 ${
                          pkg.popular ? "text-accent-400" : "text-emerald-600"
                        }`}
                      />
                      <span className={pkg.popular ? "text-slate-200" : "text-slate-600"}>{feat}</span>
                    </li>
                  ))}
                </ul>

                <Link
                  href={`/booking?serviceType=Local+Hourly+Car+Driver&package=${pkg.id}`}
                  className={`w-full py-3 rounded-xl font-bold text-xs text-center transition-colors ${
                    pkg.popular
                      ? "bg-accent-500 hover:bg-accent-600 text-white shadow-md"
                      : "bg-primary-900 hover:bg-primary-950 text-white"
                  }`}
                >
                  Hire Driver for {pkg.rate}
                </Link>
              </div>
            ))}
          </div>

          {/* Night Duty & Terms Strip */}
          <div className="bg-slate-50 border border-slate-200 rounded-2xl p-6 max-w-5xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-700">
            <div className="flex items-center gap-2">
              <Moon className="w-5 h-5 text-primary-800 flex-shrink-0" />
              <span>
                <strong>Night Duty Charge:</strong> ₹200 flat allowance for duty between 10:00 PM and 06:00 AM.
              </span>
            </div>
            <div className="flex items-center gap-2">
              <ShieldCheck className="w-5 h-5 text-emerald-600 flex-shrink-0" />
              <span>
                <strong>Zero Fuel Fees:</strong> Customer provides the vehicle and fuel.
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="py-16 bg-slate-50 border-t border-slate-200">
        <div className="container mx-auto px-4 max-w-4xl">
          <SectionHeading
            title="How to Book a Local Driver in Kanpur"
            subtitle="Follow these 3 easy steps to have a verified chauffeur at your doorstep"
          />

          <div className="grid md:grid-cols-3 gap-8 mt-10">
            {steps.map((step, idx) => (
              <div key={idx} className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm text-center">
                <div className="w-12 h-12 bg-primary-100 text-primary-800 rounded-full flex items-center justify-center font-bold text-lg mx-auto mb-4">
                  {idx + 1}
                </div>
                <h3 className="font-bold text-slate-900 mb-2 text-base">{step.title}</h3>
                <p className="text-xs text-slate-600 leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Areas Covered */}
      <section className="py-16 bg-white border-t border-slate-200">
        <div className="container mx-auto px-4 max-w-4xl">
          <SectionHeading
            title="Doorstep Driver Dispatch Across Kanpur"
            subtitle="Our vetted drivers are stationed across all major sectors of Kanpur for 45-minute arrival"
          />

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3 mt-8">
            {areas.map((area, idx) => (
              <div
                key={idx}
                className="p-3 bg-slate-50 border border-slate-200 rounded-xl text-center text-xs font-semibold text-slate-700 flex items-center justify-center gap-1.5"
              >
                <MapPin className="w-3.5 h-3.5 text-primary-800" />
                {area}
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              href="/booking?serviceType=Local+Hourly+Car+Driver"
              className="inline-flex items-center gap-2 bg-primary-900 hover:bg-primary-950 text-white px-8 py-3.5 rounded-xl font-bold text-sm shadow transition-colors"
            >
              Hire Local Hourly Driver Now
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
