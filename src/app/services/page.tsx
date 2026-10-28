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
} from "lucide-react";
import PageHero from "@/components/ui/PageHero";
import SectionHeading from "@/components/ui/SectionHeading";

export const metadata: Metadata = {
  title: "Car & Bike Rental Services in Kanpur | KanpurCabs",
  description:
    "Explore our complete range of vehicle rentals in Kanpur organized by Cars (Local hourly, Outstation, Corporate, Tours) and Bikes (Self-drive Scooters, Commuters, Cruisers).",
};

const carServices = [
  {
    id: "local-car",
    title: "Local Hourly Car Rental",
    badge: "Chauffeur Included",
    description:
      "Flexible 4h/40km, 8h/80km, and 12h/120km packages with professional driver for city errands, shopping in Hazratganj or Mall Road, family events, and medical visits.",
    features: ["Dedicated professional chauffeur", "Doorstep pickup in Kanpur", "Clean, AC hatchbacks, sedans & SUVs"],
    icon: MapPin,
    href: "/services/local-car-rental",
    bookHref: "/booking?serviceType=Local+Rental",
    color: "bg-blue-100 text-blue-700",
  },
  {
    id: "outstation-car",
    title: "Outstation Cabs",
    badge: "One-Way & Round Trips",
    description:
      "Intercity cab services connecting Kanpur to Lucknow, Ayodhya, Agra, Prayagraj, Varanasi, Delhi, and Noida. Pay only for one-way drops or book round-trips.",
    features: ["Fixed transparent rates per km", "Expressway toll & fuel guidance", "Punctual highway-tested drivers"],
    icon: Car,
    href: "/services/outstation-cab",
    bookHref: "/booking?serviceType=Outstation",
    color: "bg-emerald-100 text-emerald-700",
  },
  {
    id: "tours-car",
    title: "Kanpur Sightseeing & Tours",
    badge: "Curated Packages",
    description:
      "Custom day trips and pilgrimage tours covering Bithoor Brahmavart Ghat, JK Temple, Allen Forest Zoo, Moti Jheel, Blue World, and Ayodhya Ram Mandir.",
    features: ["Customizable itinerary", "Comfortable family vehicles", "Knowledgeable local chauffeurs"],
    icon: Compass,
    href: "/tours",
    bookHref: "/booking?serviceType=Sightseeing+Tour",
    color: "bg-purple-100 text-purple-700",
  },
  {
    id: "corporate-car",
    title: "Corporate Car Rental",
    badge: "B2B & Monthly Retainers",
    description:
      "Dedicated corporate mobility solutions for Kanpur businesses, factories, visiting executives, client airport drops, and monthly employee transit.",
    features: ["100% GST compliant invoicing", "Priority vehicle dispatch", "Dedicated account manager"],
    icon: Briefcase,
    href: "/services/corporate-car-rental",
    bookHref: "/booking?serviceType=Corporate",
    color: "bg-slate-100 text-slate-800",
  },
];

const bikeServices = [
  {
    id: "scooters",
    title: "City Scooter Rental (Self-Drive)",
    badge: "Most Popular in City",
    description:
      "Lightweight, automatic scooties like Honda Activa 6G and TVS Jupiter 125. Perfect for navigating congested city streets, coaching classes, and quick errands.",
    features: ["Automatic gearless driving", "50+ km/l fuel efficiency", "Free sanitized ISI helmet"],
    icon: Bike,
    href: "/bikes?category=Scooter",
    bookHref: "/booking?serviceType=Bike+Rental&vehicle=Honda+Activa+6G",
    color: "bg-orange-100 text-orange-700",
  },
  {
    id: "commuter-bikes",
    title: "Daily Commuter Motorcycles",
    badge: "Maximum Mileage",
    description:
      "Ultra-economical bikes like Hero Splendor Plus and Honda Shine 125 for daily office commutes, site visits, and long city runs with up to 68 km/l mileage.",
    features: ["Starting at just ₹399/day", "Low maintenance & smooth ride", "Easy Aadhaar & DL verification"],
    icon: Bike,
    href: "/bikes?category=Commuter",
    bookHref: "/booking?serviceType=Bike+Rental&vehicle=Hero+Splendor+Plus",
    color: "bg-amber-100 text-amber-700",
  },
  {
    id: "cruisers",
    title: "Cruisers & Sports Highway Rides",
    badge: "Weekend & Highway",
    description:
      "Iconic Royal Enfield Classic 350 and Bajaj Pulsar 150 for leisure rides along Ganga Barrage, weekend highway tours, and photography road trips.",
    features: ["Thumping Royal Enfield engine", "Comfortable upright riding posture", "Clean paperwork & insurance"],
    icon: Bike,
    href: "/bikes?category=Cruiser",
    bookHref: "/booking?serviceType=Bike+Rental&vehicle=Royal+Enfield+Classic+350",
    color: "bg-red-100 text-red-700",
  },
  {
    id: "student-packages",
    title: "Student & Coaching Packages",
    badge: "Kakadeo & IIT Hubs",
    description:
      "Special discounted hourly, daily, and weekly two-wheeler rental passes for students attending Kakadeo coaching institutes, IIT Kanpur, or university exams.",
    features: ["Flexible pickup hubs across Kanpur", "Zero surge pricing during exam season", "Instant digital paperwork"],
    icon: Clock,
    href: "/services/bike-rental",
    bookHref: "/booking?serviceType=Bike+Rental",
    color: "bg-cyan-100 text-cyan-700",
  },
];

export default function ServicesPage() {
  return (
    <main className="min-h-screen bg-slate-50">
      <PageHero
        title="Our Vehicle Rental Services"
        subtitle="Organized Car & Bike Mobility Solutions in Kanpur"
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Services", href: "/services" },
        ]}
      />

      {/* Navigation Jump Bar */}
      <div className="bg-white border-b border-slate-200 py-4 sticky top-[72px] z-30 shadow-sm">
        <div className="container mx-auto px-4 flex flex-wrap justify-between items-center gap-4">
          <div className="flex items-center gap-2 text-sm font-semibold text-slate-700">
            <span>Browse by Category:</span>
            <a href="#car-services" className="bg-blue-50 text-blue-800 hover:bg-blue-100 px-3 py-1 rounded-full transition-colors">
              Car Services
            </a>
            <a href="#bike-services" className="bg-orange-50 text-accent-700 hover:bg-orange-100 px-3 py-1 rounded-full transition-colors">
              Bike Services
            </a>
          </div>
          <Link
            href="/pricing"
            className="text-xs font-bold text-primary-900 hover:text-accent-600 inline-flex items-center gap-1"
          >
            <span>View Complete Price Chart</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>
      </div>

      <div className="container mx-auto px-4 py-16 space-y-20">
        
        {/* Category 1: Car Rental Services */}
        <section id="car-services" className="scroll-mt-32">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 pb-4 border-b border-slate-200 gap-4">
            <div>
              <span className="text-blue-800 font-bold uppercase tracking-wider text-xs block mb-1">
                Category 1: Chauffeured Fleet
              </span>
              <h2 className="text-3xl font-extrabold text-slate-900">
                Car Rental Services in Kanpur
              </h2>
              <p className="text-slate-600 text-sm sm:text-base mt-1">
                Punctual, chauffeured hatchbacks, sedans, SUVs, and luxury passenger vehicles.
              </p>
            </div>
            <Link
              href="/cars"
              className="inline-flex items-center gap-2 bg-primary-900 hover:bg-primary-950 text-white font-bold text-xs sm:text-sm px-5 py-2.5 rounded-xl transition-colors shadow-sm self-start md:self-auto"
            >
              <span>View All 8 Car Models</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {carServices.map((service) => {
              const Icon = service.icon;
              return (
                <div
                  key={service.id}
                  className="bg-white border border-slate-200 rounded-2xl p-7 hover:shadow-xl transition-all duration-300 flex flex-col justify-between group"
                >
                  <div>
                    <div className="flex justify-between items-start mb-5">
                      <div className={`w-14 h-14 rounded-xl ${service.color} flex items-center justify-center group-hover:scale-105 transition-transform`}>
                        <Icon className="w-7 h-7" />
                      </div>
                      <span className="text-[11px] font-bold bg-slate-100 text-slate-700 px-3 py-1 rounded-full border border-slate-200">
                        {service.badge}
                      </span>
                    </div>
                    <h3 className="text-xl font-bold text-slate-900 mb-2">
                      {service.title}
                    </h3>
                    <p className="text-slate-600 text-sm leading-relaxed mb-5">
                      {service.description}
                    </p>
                    <div className="space-y-2 mb-6 bg-slate-50 p-4 rounded-xl">
                      {service.features.map((feat, i) => (
                        <div key={i} className="flex items-center gap-2 text-xs text-slate-700 font-medium">
                          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0" />
                          <span>{feat}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="flex gap-3 pt-3 border-t border-slate-100">
                    <Link
                      href={service.href}
                      className="flex-1 text-center py-2.5 border border-slate-300 hover:border-primary-900 text-slate-700 font-bold rounded-xl text-xs transition-colors"
                    >
                      View Details
                    </Link>
                    <Link
                      href={service.bookHref}
                      className="flex-1 text-center py-2.5 bg-primary-900 hover:bg-primary-950 text-white font-bold rounded-xl text-xs transition-colors shadow-sm"
                    >
                      Book Cab
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* Category 2: Bike & Scooter Rental Services */}
        <section id="bike-services" className="scroll-mt-32">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 pb-4 border-b border-slate-200 gap-4">
            <div>
              <span className="text-accent-600 font-bold uppercase tracking-wider text-xs block mb-1">
                Category 2: Self-Drive Fleet
              </span>
              <h2 className="text-3xl font-extrabold text-slate-900">
                Bike & Scooter Rental Services in Kanpur
              </h2>
              <p className="text-slate-600 text-sm sm:text-base mt-1">
                Economical, traffic-beating two-wheelers with complimentary sanitized helmet and quick verification.
              </p>
            </div>
            <Link
              href="/bikes"
              className="inline-flex items-center gap-2 bg-accent-500 hover:bg-accent-600 text-white font-bold text-xs sm:text-sm px-5 py-2.5 rounded-xl transition-colors shadow-sm self-start md:self-auto"
            >
              <span>View All 8 Bike Models</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {bikeServices.map((service) => {
              const Icon = service.icon;
              return (
                <div
                  key={service.id}
                  className="bg-white border border-slate-200 rounded-2xl p-7 hover:shadow-xl transition-all duration-300 flex flex-col justify-between group"
                >
                  <div>
                    <div className="flex justify-between items-start mb-5">
                      <div className={`w-14 h-14 rounded-xl ${service.color} flex items-center justify-center group-hover:scale-105 transition-transform`}>
                        <Icon className="w-7 h-7" />
                      </div>
                      <span className="text-[11px] font-bold bg-orange-50 text-accent-700 px-3 py-1 rounded-full border border-orange-200">
                        {service.badge}
                      </span>
                    </div>
                    <h3 className="text-xl font-bold text-slate-900 mb-2">
                      {service.title}
                    </h3>
                    <p className="text-slate-600 text-sm leading-relaxed mb-5">
                      {service.description}
                    </p>
                    <div className="space-y-2 mb-6 bg-orange-50/50 p-4 rounded-xl border border-orange-100">
                      {service.features.map((feat, i) => (
                        <div key={i} className="flex items-center gap-2 text-xs text-slate-700 font-medium">
                          <CheckCircle2 className="w-3.5 h-3.5 text-orange-600 flex-shrink-0" />
                          <span>{feat}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="flex gap-3 pt-3 border-t border-slate-100">
                    <Link
                      href={service.href}
                      className="flex-1 text-center py-2.5 border border-slate-300 hover:border-accent-600 text-slate-700 font-bold rounded-xl text-xs transition-colors"
                    >
                      View Models
                    </Link>
                    <Link
                      href={service.bookHref}
                      className="flex-1 text-center py-2.5 bg-accent-500 hover:bg-accent-600 text-white font-bold rounded-xl text-xs transition-colors shadow-sm"
                    >
                      Book Bike
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

      </div>
    </main>
  );
}
