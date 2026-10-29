import { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  MapPin,
  Briefcase,
  Bike,
  Compass,
  Car,
  ShieldCheck,
  Clock,
  Sparkles,
  CheckCircle2,
  Moon,
  UserCheck,
} from "lucide-react";
import PageHero from "@/components/ui/PageHero";
import SectionHeading from "@/components/ui/SectionHeading";

export const metadata: Metadata = {
  title: "Professional Driver & Rider Services in Kanpur | KanpurDrivers",
  description:
    "Explore our full range of driver hire services in Kanpur: Local Hourly Car Drivers, Outstation Highway Chauffeurs, Monthly Permanent Drivers, and On-Demand Two-Wheeler Riders.",
};

const carServices = [
  {
    id: "local-car-driver",
    title: "Local Hourly Car Driver",
    badge: "In Your Own Car",
    description:
      "Flexible 4h (₹400), 8h (₹700), and 12h (₹950) duty packages with a professional chauffeur for city errands, shopping on Mall Road, doctor visits, and family events across Kanpur.",
    features: [
      "Manual & Automatic cars expert",
      "Doorstep arrival in 45-60 mins",
      "Zero fuel/km charges (Your car)",
    ],
    icon: MapPin,
    href: "/services/local-car-rental",
    bookHref: "/booking?serviceType=Local+Hourly+Car+Driver",
    color: "bg-blue-100 text-blue-700",
  },
  {
    id: "outstation-driver",
    title: "Outstation Highway Driver",
    badge: "Expressway Certified",
    description:
      "Experienced highway chauffeurs for same-day and multi-day road trips from Kanpur to Lucknow, Ayodhya, Delhi, Agra, Varanasi, and Prayagraj in your personal vehicle.",
    features: [
      "Same-day ₹1,000 / day + ₹250 food DA",
      "Overnight stay ₹1,200 / day + ₹400 DA",
      "Yamuna & Purvanchal expressway expertise",
    ],
    icon: Compass,
    href: "/services/outstation-cab",
    bookHref: "/booking?serviceType=Outstation+Trip+Driver",
    color: "bg-emerald-100 text-emerald-700",
  },
  {
    id: "monthly-chauffeur",
    title: "Monthly Permanent Chauffeur",
    badge: "Replacement Guarantee",
    description:
      "Dedicated, police-verified personal chauffeurs on 26-day monthly contracts for families, business owners, doctors, and senior citizens in Kanpur.",
    features: [
      "8h (₹15k), 10h (₹18k), 12h (₹21k) plans",
      "Guaranteed backup if driver is on leave",
      "Uniformed, courteous & background checked",
    ],
    icon: UserCheck,
    href: "/services/corporate-car-rental",
    bookHref: "/booking?serviceType=Monthly+Personal+Chauffeur",
    color: "bg-purple-100 text-purple-700",
  },
  {
    id: "night-safe-drop",
    title: "Late Night Party & Safe Drop",
    badge: "24/7 Available",
    description:
      "Attending a wedding, celebration, or late-night corporate dinner? Our verified driver arrives at your venue and drives you and your car safely back home.",
    features: [
      "Doorstep arrival at hotels & banquet halls",
      "Zero alcohol tolerance & trusted safety",
      "Flat transparent night tariffs",
    ],
    icon: Moon,
    href: "/booking?serviceType=Night+Party+%26+Safe+Drop+Driver",
    bookHref: "/booking?serviceType=Night+Party+%26+Safe+Drop+Driver",
    color: "bg-slate-100 text-slate-800",
  },
  {
    id: "corporate-retainer",
    title: "Corporate Fleet Driver Retainers",
    badge: "B2B & GST Billing",
    description:
      "Specialized chauffeur solutions for Kanpur businesses, factories, visiting VIPs, director personal cars, and executive transport with full GST tax invoicing.",
    features: [
      "100% GST compliant invoicing",
      "Priority driver allocation",
      "Dedicated account manager",
    ],
    icon: Briefcase,
    href: "/services/corporate-car-rental",
    bookHref: "/booking?serviceType=Corporate+Fleet+Driver+Retainer",
    color: "bg-amber-100 text-amber-700",
  },
];

const bikeServices = [
  {
    id: "bike-rider-errand",
    title: "City Scooter & Bike Rider",
    badge: "Starts @ ₹199",
    description:
      "Hire a verified rider to navigate your scooter or motorcycle for urgent city errands, bank tasks, picking up medicines, or shopping in congested Kanpur bazaars.",
    features: [
      "2h (₹199), 4h (₹349), 8h (₹599) packages",
      "Automatic scooties & manual motorbikes",
      "Prompt arrival in 30-45 mins",
    ],
    icon: Bike,
    href: "/services/bike-rental",
    bookHref: "/booking?serviceType=Two-Wheeler+%26+Bike+Rider",
    color: "bg-orange-100 text-orange-700",
  },
  {
    id: "safe-recovery-rider",
    title: "Safe Home Recovery Rider",
    badge: "Pillion Support",
    description:
      "Feeling exhausted after a long shift, unwell, or had an outpatient medical procedure? Our verified rider will ride your two-wheeler safely to your home with you as pillion.",
    features: [
      "100% verified commercial DL",
      "Careful driving & traffic navigation",
      "Reliable 24/7 Kanpur dispatch",
    ],
    icon: ShieldCheck,
    href: "/services/bike-rental",
    bookHref: "/booking?serviceType=Two-Wheeler+%26+Bike+Rider",
    color: "bg-emerald-100 text-emerald-700",
  },
  {
    id: "parcel-pilot",
    title: "Urgent Document & Parcel Pilot",
    badge: "Time-Sensitive Deliveries",
    description:
      "Need important legal papers, keys, or lab reports picked up or delivered across Kanpur without leaving your home or office? Hire a dedicated two-wheeler pilot.",
    features: [
      "Fast point-to-point courier transit",
      "Live phone & WhatsApp updates",
      "Doorstep delivery confirmation",
    ],
    icon: Clock,
    href: "/services/bike-rental",
    bookHref: "/booking?serviceType=Two-Wheeler+%26+Bike+Rider",
    color: "bg-blue-100 text-blue-700",
  },
];

export default function ServicesPage() {
  return (
    <main>
      <PageHero
        title="Our Driver & Rider Services"
        subtitle="Hire verified, professional chauffeurs for your car and on-demand riders for your two-wheeler in Kanpur"
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Services", href: "/services" },
        ]}
      />

      {/* Trust Banner */}
      <section className="bg-primary-900 text-white py-4 border-b border-primary-800">
        <div className="container mx-auto px-4 flex flex-wrap justify-center items-center gap-6 sm:gap-12 text-xs sm:text-sm">
          <span className="flex items-center gap-1.5 font-medium">
            <ShieldCheck className="w-4 h-4 text-accent-400" /> 100% Police & DL Verified
          </span>
          <span className="flex items-center gap-1.5 font-medium">
            <Clock className="w-4 h-4 text-accent-400" /> 45-Min Doorstep Arrival
          </span>
          <span className="flex items-center gap-1.5 font-medium">
            <Sparkles className="w-4 h-4 text-accent-400" /> Manual & Automatic Experts
          </span>
        </div>
      </section>

      {/* SECTION 1: CAR DRIVER SERVICES */}
      <section className="py-16 bg-white" id="car-driver-services">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mb-12">
            <span className="text-primary-800 font-bold uppercase tracking-wider text-xs">
              Category 1: Personal Car Chauffeurs
            </span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mt-1 mb-3">
              Car Driver Services (In Your Personal Car)
            </h2>
            <p className="text-slate-600 text-base">
              Avoid traffic fatigue and parking hassles. Our experienced chauffeurs drive your manual or automatic car safely across Kanpur or on outstation highways.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {carServices.map((service) => {
              const Icon = service.icon;
              return (
                <div
                  key={service.id}
                  className="bg-white rounded-2xl border border-slate-200 p-6 flex flex-col shadow-sm hover:shadow-md transition-shadow"
                >
                  <div className="flex items-start justify-between mb-4">
                    <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${service.color}`}>
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="text-[11px] font-bold bg-slate-100 text-slate-700 px-2.5 py-1 rounded-full border border-slate-200">
                      {service.badge}
                    </span>
                  </div>

                  <h3 className="font-bold text-lg text-slate-900 mb-2">{service.title}</h3>
                  <p className="text-xs sm:text-sm text-slate-600 mb-5 leading-relaxed flex-grow">
                    {service.description}
                  </p>

                  <ul className="space-y-2 mb-6 border-t border-slate-100 pt-4">
                    {service.features.map((feat, idx) => (
                      <li key={idx} className="text-xs text-slate-600 flex items-center gap-2">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="flex items-center gap-3 pt-3 border-t border-slate-100">
                    <Link
                      href={service.href}
                      className="text-xs font-bold text-slate-700 hover:text-primary-900 py-2 flex items-center gap-1"
                    >
                      Details <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                    <Link
                      href={service.bookHref}
                      className="ml-auto px-4 py-2 bg-primary-900 hover:bg-primary-950 text-white rounded-lg text-xs font-bold transition-colors"
                    >
                      Hire Driver
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* SECTION 2: BIKE RIDER SERVICES */}
      <section className="py-16 bg-slate-50 border-t border-slate-200" id="bike-rider-services">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mb-12">
            <span className="text-accent-600 font-bold uppercase tracking-wider text-xs">
              Category 2: On-Demand Two-Wheeler Riders
            </span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mt-1 mb-3">
              Two-Wheeler & Bike Rider Services
            </h2>
            <p className="text-slate-600 text-base">
              Need a verified pilot for your scooter or motorbike? Hire trained riders for quick city errands, urgent deliveries, or safe recovery home.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {bikeServices.map((service) => {
              const Icon = service.icon;
              return (
                <div
                  key={service.id}
                  className="bg-white rounded-2xl border border-slate-200 p-6 flex flex-col shadow-sm hover:shadow-md transition-shadow"
                >
                  <div className="flex items-start justify-between mb-4">
                    <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${service.color}`}>
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="text-[11px] font-bold bg-orange-50 text-orange-700 px-2.5 py-1 rounded-full border border-orange-200">
                      {service.badge}
                    </span>
                  </div>

                  <h3 className="font-bold text-lg text-slate-900 mb-2">{service.title}</h3>
                  <p className="text-xs sm:text-sm text-slate-600 mb-5 leading-relaxed flex-grow">
                    {service.description}
                  </p>

                  <ul className="space-y-2 mb-6 border-t border-slate-100 pt-4">
                    {service.features.map((feat, idx) => (
                      <li key={idx} className="text-xs text-slate-600 flex items-center gap-2">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="flex items-center gap-3 pt-3 border-t border-slate-100">
                    <Link
                      href={service.href}
                      className="text-xs font-bold text-slate-700 hover:text-accent-600 py-2 flex items-center gap-1"
                    >
                      Details <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                    <Link
                      href={service.bookHref}
                      className="ml-auto px-4 py-2 bg-accent-500 hover:bg-accent-600 text-white rounded-lg text-xs font-bold transition-colors"
                    >
                      Hire Rider
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </main>
  );
}
