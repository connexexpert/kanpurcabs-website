import { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  MapPin,
  Briefcase,
  Bike,
  Compass,
  Car,
} from "lucide-react";
import PageHero from "@/components/ui/PageHero";
import SectionHeading from "@/components/ui/SectionHeading";

export const metadata: Metadata = {
  title: "Our Services | KanpurCabs - Car & Bike Rentals in Kanpur",
  description:
    "Explore our range of vehicle rental services in Kanpur including local hourly car rentals, self-drive bike & scooter hire, outstation cabs, and local sightseeing tours.",
};

const services = [
  {
    id: "local",
    title: "Local Car Rental",
    description:
      "Flexible hourly car rental with dedicated chauffeur for city travel, shopping, family functions, and business meetings in Kanpur.",
    icon: MapPin,
    href: "/services/local-car-rental",
    color: "bg-blue-100 text-blue-700",
  },
  {
    id: "bike",
    title: "Bike & Scooter Rental",
    description:
      "Affordable self-drive two-wheeler hire. Scooters (Activa/Jupiter), commuter bikes, and Royal Enfield cruisers with free helmet & insurance.",
    icon: Bike,
    href: "/services/bike-rental",
    color: "bg-orange-100 text-orange-700",
  },
  {
    id: "outstation",
    title: "Outstation Cabs",
    description:
      "Reliable one-way and round-trip cabs from Kanpur to Lucknow, Agra, Ayodhya, Prayagraj, Varanasi, Delhi, and other major cities.",
    icon: Car,
    href: "/services/outstation-cab",
    color: "bg-emerald-100 text-emerald-700",
  },
  {
    id: "sightseeing",
    title: "Kanpur Sightseeing & Tours",
    description:
      "Curated day tours covering Bithoor, JK Temple, Allen Forest Zoo, Moti Jheel, and sacred Ganga Ghats with experienced local drivers.",
    icon: Compass,
    href: "/tours",
    color: "bg-purple-100 text-purple-700",
  },
  {
    id: "corporate",
    title: "Corporate Business Travel",
    description:
      "Reliable B2B mobility for companies, employee transit, executive meetings, and monthly retainers with GST compliant billing.",
    icon: Briefcase,
    href: "/services/corporate-car-rental",
    color: "bg-slate-100 text-slate-800",
  },
];

export default function ServicesPage() {
  return (
    <main>
      <PageHero
        title="Our Rental Services"
        subtitle="Professional Car & Two-Wheeler Mobility Solutions in Kanpur"
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Services", href: "/services" },
        ]}
      />

      <section className="py-16 md:py-24 container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <SectionHeading
            title="Core Mobility Services"
            subtitle="Tailored transportation for personal, tourist, and business travel"
          />
          <p className="mt-4 text-slate-600 text-lg">
            Whether you need a quick two-wheeler to zip through Kanpur traffic, a chauffeured sedan for family shopping, or a comfortable SUV for outstation trips across Uttar Pradesh, KanpurCabs delivers safe, punctual, and transparent service.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <div
                key={service.id}
                className="bg-white border border-slate-200 rounded-2xl p-8 hover:shadow-xl transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  <div
                    className={`w-14 h-14 rounded-xl ${service.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}
                  >
                    <Icon className="w-7 h-7" />
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900 mb-3">
                    {service.title}
                  </h3>
                  <p className="text-slate-600 leading-relaxed mb-6">
                    {service.description}
                  </p>
                </div>
                <div>
                  <Link
                    href={service.href}
                    className="inline-flex items-center text-primary-800 font-bold hover:text-accent-500 transition-colors"
                  >
                    <span>View Details & Rates</span>
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </main>
  );
}
