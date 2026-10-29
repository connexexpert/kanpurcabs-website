import { Metadata } from "next";
import Link from "next/link";
import {
  Bike,
  ShieldCheck,
  Clock,
  MapPin,
  CheckCircle2,
  Sparkles,
  PhoneCall,
  FileCheck,
  CreditCard,
  Headphones,
  ArrowRight,
} from "lucide-react";
import PageHero from "@/components/ui/PageHero";
import { SITE_CONFIG, getPhoneLink, getWhatsAppLink } from "@/lib/utils";

export const metadata: Metadata = {
  title: "On-Demand Two-Wheeler & Bike Riders in Kanpur | For Scooters & Bikes | KanpurDrivers",
  description:
    "Hire verified, professional riders for your personal scooter or motorcycle in Kanpur. On-demand city errands, document delivery, and safe recovery rider from ₹199.",
};

const RIDER_PLANS = [
  {
    name: "2 Hours Quick Task Rider",
    hours: "2 Hours Duty",
    rate: "₹199",
    ot: "₹50 / hr",
    desc: "Perfect for bank errands, picking up medicines, or urgent document delivery.",
    badge: "Quick Dispatch",
    popular: false,
  },
  {
    name: "4 Hours Half-Day Rider",
    hours: "4 Hours Duty",
    rate: "₹349",
    ot: "₹50 / hr",
    desc: "Most chosen for multiple market errands, client drop-offs & multi-stop shopping.",
    badge: "Most Popular",
    popular: true,
  },
  {
    name: "8 Hours Full-Day Rider",
    hours: "8 Hours Duty",
    rate: "₹599",
    ot: "₹60 / hr",
    desc: "Dedicated personal pilot for real estate field visits, survey runs, or all-day errands.",
    badge: "Best Value",
    popular: false,
  },
];

const RIDER_SPECIALIZATIONS = [
  {
    title: "Scooter & Moped Pilots (Gearless)",
    desc: "Smooth throttle handling of Honda Activa 6G, TVS Jupiter, Suzuki Access, and Maestro for quick maneuvering through crowded Kanpur lanes.",
    vehicles: "Activa 6G, TVS Jupiter, Access 125, Ntorq",
    rate: "From ₹199",
    imageUrl: "https://images.unsplash.com/photo-1568772585407-9361f9bf3a87?auto=format&fit=crop&w=800&q=80",
  },
  {
    title: "Commuter Motorcycle Riders",
    desc: "Expert riders for high-mileage commuter bikes. Clean clutch control, traffic discipline, and punctual transit across town.",
    vehicles: "Hero Splendor Plus, Honda Shine, Bajaj Platina",
    rate: "From ₹199",
    imageUrl: "https://images.unsplash.com/photo-1609630875171-b1321377ee65?auto=format&fit=crop&w=800&q=80",
  },
  {
    title: "Sports & Cruiser Pilots",
    desc: "Certified riders for performance bikes and heavy cruisers. Confident clutch handling and heavy chassis balance.",
    vehicles: "Royal Enfield Classic 350, Pulsar 150, Apache RTR",
    rate: "From ₹199",
    imageUrl: "https://images.unsplash.com/photo-1558981420-87aa9dad1c89?auto=format&fit=crop&w=800&q=80",
  },
];

export default function BikeRiderServicePage() {
  return (
    <main>
      <PageHero
        title="On-Demand Two-Wheeler & Bike Riders"
        subtitle="Hire verified, licensed riders to pilot your personal scooter or motorcycle across Kanpur — Doorstep arrival in 30-45 minutes"
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Services", href: "/services" },
          { label: "Bike Riders", href: "/services/bike-rental" },
        ]}
      />

      {/* Trust banner */}
      <section className="bg-accent-600 text-white py-3.5 border-b border-accent-700">
        <div className="container mx-auto px-4 flex flex-wrap justify-center items-center gap-6 sm:gap-12 text-xs sm:text-sm font-semibold">
          <span className="flex items-center gap-1.5">
            <ShieldCheck className="w-4 h-4" /> 100% Commercial DL & Police Verified
          </span>
          <span className="flex items-center gap-1.5">
            <Clock className="w-4 h-4" /> 30-45 Mins Fast Arrival in Kanpur
          </span>
          <span className="flex items-center gap-1.5">
            <Sparkles className="w-4 h-4" /> Helmet & Road Safety Compliant
          </span>
        </div>
      </section>

      {/* Intro & Packages */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <span className="text-accent-600 font-bold uppercase tracking-wider text-xs">
              Fast, Flexible & Affordable
            </span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mt-1 mb-4">
              Need Someone to Ride Your Two-Wheeler?
            </h2>
            <p className="text-slate-600 text-base leading-relaxed">
              Whether you are feeling too tired after work, had an eye exam, or need an urgent parcel delivered across the city, KanpurDrivers provides background-verified two-wheeler pilots for your personal scooter or bike.
            </p>
          </div>

          {/* Pricing Grid */}
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto mb-16">
            {RIDER_PLANS.map((plan, i) => (
              <div
                key={i}
                className={`rounded-2xl p-6 border flex flex-col transition-all ${
                  plan.popular
                    ? "bg-slate-900 text-white border-slate-900 shadow-xl relative"
                    : "bg-white text-slate-900 border-slate-200 shadow-sm"
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-3 right-6 bg-accent-500 text-white text-[11px] font-bold px-3 py-1 rounded-full shadow">
                    {plan.badge}
                  </div>
                )}

                <h3 className="text-xl font-bold mb-1">{plan.name}</h3>
                <span className={`text-xs block mb-4 ${plan.popular ? "text-slate-400" : "text-slate-500"}`}>
                  {plan.hours}
                </span>

                <div className="mb-6 pb-6 border-b border-slate-200/20">
                  <span className="text-xs uppercase tracking-wider block opacity-75">Rider Duty Fee</span>
                  <div className="text-3xl font-extrabold mt-1">{plan.rate}</div>
                  <span className={`text-xs mt-1 block ${plan.popular ? "text-accent-300" : "text-slate-500"}`}>
                    Overtime: {plan.ot}
                  </span>
                </div>

                <p className={`text-xs mb-6 flex-grow leading-relaxed ${plan.popular ? "text-slate-300" : "text-slate-600"}`}>
                  {plan.desc}
                </p>

                <Link
                  href={`/booking?serviceType=Two-Wheeler+%26+Bike+Rider&package=${encodeURIComponent(plan.name)}`}
                  className={`w-full py-3 rounded-xl font-bold text-xs text-center transition-colors ${
                    plan.popular
                      ? "bg-accent-500 hover:bg-accent-600 text-white shadow"
                      : "bg-slate-900 hover:bg-black text-white"
                  }`}
                >
                  Hire Rider for {plan.rate}
                </Link>
              </div>
            ))}
          </div>

          {/* Vehicle Specializations */}
          <div className="max-w-5xl mx-auto">
            <h3 className="text-2xl font-bold text-slate-900 mb-6 text-center">
              Our Riders Specialize in All Two-Wheelers
            </h3>
            <div className="grid md:grid-cols-3 gap-6">
              {RIDER_SPECIALIZATIONS.map((spec, idx) => (
                <div key={idx} className="bg-slate-50 rounded-2xl border border-slate-200 overflow-hidden shadow-sm flex flex-col">
                  <div className="h-44 bg-slate-200 relative overflow-hidden">
                    <img
                      src={spec.imageUrl}
                      alt={spec.title}
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                    <div className="absolute top-3 left-3 bg-black/60 backdrop-blur-sm text-white text-[11px] font-bold px-2.5 py-1 rounded-md">
                      {spec.rate}
                    </div>
                  </div>
                  <div className="p-5 flex flex-col flex-grow">
                    <h4 className="font-bold text-slate-900 text-base mb-1.5">{spec.title}</h4>
                    <p className="text-xs text-slate-600 leading-relaxed mb-4 flex-grow">{spec.desc}</p>
                    <div className="text-[11px] text-slate-500 bg-white p-2.5 rounded-lg border border-slate-200 mb-4">
                      <strong>Compatible:</strong> {spec.vehicles}
                    </div>
                    <Link
                      href="/booking?serviceType=Two-Wheeler+%26+Bike+Rider"
                      className="text-xs font-bold text-accent-600 hover:text-accent-700 inline-flex items-center gap-1"
                    >
                      Book Pilot for This Vehicle <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Safety & DL Policy */}
      <section className="py-16 bg-slate-50 border-t border-slate-200">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="bg-white rounded-2xl p-8 border border-slate-200 shadow-sm text-center">
            <ShieldCheck className="w-12 h-12 text-emerald-600 mx-auto mb-4" />
            <h3 className="text-2xl font-bold text-slate-900 mb-2">100% Safety & Verification Policy</h3>
            <p className="text-slate-600 text-sm max-w-2xl mx-auto leading-relaxed mb-6">
              Every two-wheeler rider holds an active, valid commercial driving license, carries an ISI-sanitized helmet, and is strictly trained in city traffic laws, defensive riding, and polite communication.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a
                href={getPhoneLink(SITE_CONFIG.phone)}
                className="bg-primary-900 hover:bg-primary-950 text-white font-bold px-6 py-3 rounded-xl text-xs transition-colors inline-flex items-center gap-2"
              >
                <PhoneCall className="w-4 h-4" /> Call Rider Dispatch: {SITE_CONFIG.phone}
              </a>
              <Link
                href="/booking?serviceType=Two-Wheeler+%26+Bike+Rider"
                className="bg-accent-500 hover:bg-accent-600 text-white font-bold px-6 py-3 rounded-xl text-xs transition-colors"
              >
                Book Rider Online
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
