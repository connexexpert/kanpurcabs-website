import { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  MapPin,
  Briefcase,
  Plane,
  Train,
  Heart,
  Car,
} from "lucide-react";
import PageHero from "@/components/ui/PageHero";
import SectionHeading from "@/components/ui/SectionHeading";

export const metadata: Metadata = {
  title: "Our Services | KanpurCabs - Car Rental & Tourism in Kanpur",
  description:
    "Explore our wide range of car rental services in Kanpur including local travel, outstation cabs, airport transfers, corporate rental, and wedding cars.",
};

const services = [
  {
    id: "local",
    title: "Local Car Rental",
    description:
      "Hourly car rental with professional driver for city travel, shopping, and meetings within Kanpur.",
    icon: MapPin,
    href: "/services/local-car-rental",
    color: "bg-blue-100 text-blue-700",
  },
  {
    id: "outstation",
    title: "Outstation Cabs",
    description:
      "Reliable one-way and round-trip cabs from Kanpur to Lucknow, Agra, Delhi, and other cities.",
    icon: Car,
    href: "/services/outstation-cab",
    color: "bg-green-100 text-green-700",
  },
  {
    id: "airport",
    title: "Airport Transfer",
    description:
      "Punctual pickup and drop-off services for Kanpur Airport (Chakeri) and Lucknow Airport.",
    icon: Plane,
    href: "/services/airport-transfer",
    color: "bg-purple-100 text-purple-700",
  },
  {
    id: "railway",
    title: "Railway Transfer",
    description:
      "Hassle-free transfers to and from Kanpur Central, Anwarganj, and Govindpuri stations.",
    icon: Train,
    href: "/services/railway-station-transfer",
    color: "bg-orange-100 text-orange-700",
  },
  {
    id: "corporate",
    title: "Corporate Car Rental",
    description:
      "Tailored transportation solutions for businesses, employee transit, and executive travel.",
    icon: Briefcase,
    href: "/services/corporate-car-rental",
    color: "bg-gray-100 text-gray-700",
  },
  {
    id: "wedding",
    title: "Wedding Car Rental",
    description:
      "Luxury cars and spacious vehicles for weddings, baraat, and guest transportation.",
    icon: Heart,
    href: "/services/wedding-car-rental",
    color: "bg-pink-100 text-pink-700",
  },
];

export default function ServicesPage() {
  return (
    <main>
      <PageHero
        title="Our Services"
        subtitle="Comprehensive Car Rental Solutions in Kanpur"
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Services", href: "/services" },
        ]}
      />

      <section className="py-16 md:py-24 container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <SectionHeading
            title="What We Offer"
            subtitle="Premium transportation services for every need"
          />
          <p className="mt-4 text-slate-600 text-lg">
            Whether you need a quick ride across town, a comfortable journey to
            another city, or luxury transport for a special occasion, KanpurCabs
            has you covered with our well-maintained fleet and professional
            drivers.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <div
                key={service.id}
                className="bg-white rounded-xl shadow-md border border-slate-100 p-8 hover:shadow-lg transition-shadow group"
              >
                <div
                  className={`w-14 h-14 rounded-full flex items-center justify-center mb-6 ${service.color}`}
                >
                  <Icon className="w-7 h-7" />
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-3 group-hover:text-blue-700 transition-colors">
                  {service.title}
                </h3>
                <p className="text-slate-600 mb-6 line-clamp-3">
                  {service.description}
                </p>
                <Link
                  href={service.href}
                  className="inline-flex items-center text-blue-700 font-semibold hover:text-blue-800"
                >
                  View Details{" "}
                  <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            );
          })}
        </div>
      </section>
    </main>
  );
}
