import { Metadata } from "next";
import Link from "next/link";
import { MapPin, Clock, CheckCircle2 } from "lucide-react";
import PageHero from "@/components/ui/PageHero";
import SectionHeading from "@/components/ui/SectionHeading";
import { SITE_CONFIG } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Local Car Rental in Kanpur | Hourly Cab Booking | KanpurCabs",
  description:
    "Book local car rental in Kanpur on hourly basis. 4hr/40km, 8hr/80km packages available. Professional drivers for city travel, shopping & meetings.",
};

const packages = [
  {
    id: "4hr",
    name: "4 Hours / 40 Kms",
    description: "Perfect for quick errands or short meetings.",
    prices: { hatchback: "₹800", sedan: "₹950", suv: "₹1,300" },
  },
  {
    id: "8hr",
    name: "8 Hours / 80 Kms",
    description: "Ideal for full day shopping or extensive meetings.",
    prices: { hatchback: "₹1,500", sedan: "₹1,800", suv: "₹2,500" },
  },
  {
    id: "12hr",
    name: "12 Hours / 120 Kms",
    description: "Best for all day usage and events.",
    prices: { hatchback: "₹2,200", sedan: "₹2,600", suv: "₹3,600" },
  },
];

const steps = [
  {
    title: "Choose Package",
    desc: "Select from 4hr, 8hr, or 12hr packages based on your need.",
  },
  {
    title: "Select Vehicle",
    desc: "Pick a Hatchback, Sedan, or SUV that fits your group.",
  },
  {
    title: "Travel Freely",
    desc: "Enjoy unlimited stops within city limits for the booked duration.",
  },
];

const areas = [
  "Swaroop Nagar",
  "Kakadeo",
  "Kidwai Nagar",
  "Civil Lines",
  "Gumti No.5",
  "Kalyanpur",
  "Jajmau",
  "Mall Road",
  "Shyam Nagar",
  "Indira Nagar",
];
const destinations = [
  "Z Square Mall",
  "JK Temple",
  "Allen Forest Zoo",
  "Moti Jheel",
  "Blue World Theme Park",
  "Kanpur Memorial Church",
];

const faqs = [
  {
    q: "What happens if I exceed the package km or time?",
    a: "Extra charges apply per km and per hour based on the vehicle type.",
  },
  {
    q: "Are parking and toll charges included?",
    a: "No, parking and local toll charges (if any) are to be paid by the customer.",
  },
  {
    q: "Can I go outside Kanpur city limits on this package?",
    a: "Local packages are strictly for within city limits. For outstation, please check our outstation services.",
  },
  {
    q: "Is fuel included in the price?",
    a: "Yes, our local rental packages are inclusive of fuel and driver charges.",
  },
  {
    q: "How early should I book?",
    a: "We recommend booking at least 2 hours in advance to ensure vehicle availability.",
  },
];

export default function LocalCarRentalPage() {
  return (
    <main>
      <PageHero
        title="Local Car Rental in Kanpur"
        subtitle="Flexible hourly cab packages for your city travel needs"
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Services", href: "/services" },
          { label: "Local Rental", href: "/services/local-car-rental" },
        ]}
      />

      <div className="container mx-auto px-4 py-12 lg:py-20 flex flex-col lg:flex-row gap-12">
        <div className="lg:w-2/3">
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">
              Reliable City Travel with Professional Drivers
            </h2>
            <p className="text-slate-600 text-lg mb-6 leading-relaxed">
              Navigate Kanpur with ease using our local car rental services.
              Whether you have multiple business meetings, plan a day of
              shopping at Z Square Mall, or want to visit family across town,
              our hourly rental packages give you the freedom to travel at your
              own pace without the hassle of booking multiple rides.
            </p>
          </section>

          <section className="mb-16">
            <SectionHeading
              title="Local Rental Packages"
              subtitle="Choose the right package for your needs"
              align="left"
            />
            <div className="overflow-x-auto mt-8">
              <table className="w-full text-left border-collapse border border-slate-200 rounded-lg overflow-hidden">
                <thead className="bg-slate-50">
                  <tr>
                    <th className="p-4 border border-slate-200 font-semibold text-slate-700">
                      Package
                    </th>
                    <th className="p-4 border border-slate-200 font-semibold text-slate-700">
                      Hatchback (Mini)
                    </th>
                    <th className="p-4 border border-slate-200 font-semibold text-slate-700">
                      Sedan (Dzire/Etios)
                    </th>
                    <th className="p-4 border border-slate-200 font-semibold text-slate-700">
                      SUV (Innova/Ertiga)
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {packages.map((pkg) => (
                    <tr key={pkg.id} className="hover:bg-slate-50">
                      <td className="p-4 border border-slate-200 font-medium text-slate-900">
                        {pkg.name}
                        <span className="block text-sm font-normal text-slate-500 mt-1">
                          {pkg.description}
                        </span>
                      </td>
                      <td className="p-4 border border-slate-200">
                        {pkg.prices.hatchback}
                      </td>
                      <td className="p-4 border border-slate-200">
                        {pkg.prices.sedan}
                      </td>
                      <td className="p-4 border border-slate-200">
                        {pkg.prices.suv}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          <section className="mb-16">
            <h2 className="text-2xl font-bold text-slate-900 mb-8">
              How It Works
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {steps.map((step, idx) => (
                <div key={idx} className="bg-blue-50 p-6 rounded-xl relative">
                  <div className="w-8 h-8 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold absolute -top-4 -left-4 border-4 border-white shadow-sm">
                    {idx + 1}
                  </div>
                  <h3 className="font-bold text-slate-900 mb-2 mt-2">
                    {step.title}
                  </h3>
                  <p className="text-slate-600 text-sm">{step.desc}</p>
                </div>
              ))}
            </div>
          </section>

          <div className="grid md:grid-cols-2 gap-8 mb-16">
            <section>
              <h3 className="text-xl font-bold text-slate-900 mb-4 flex items-center gap-2">
                <MapPin className="text-blue-600 w-5 h-5" /> Areas We Serve
              </h3>
              <ul className="space-y-2">
                {areas.map((area, idx) => (
                  <li
                    key={idx}
                    className="flex items-center gap-2 text-slate-600"
                  >
                    <CheckCircle2 className="w-4 h-4 text-green-500" /> {area}
                  </li>
                ))}
              </ul>
            </section>
            <section>
              <h3 className="text-xl font-bold text-slate-900 mb-4 flex items-center gap-2">
                <Clock className="text-blue-600 w-5 h-5" /> Popular Destinations
              </h3>
              <ul className="space-y-2">
                {destinations.map((dest, idx) => (
                  <li
                    key={idx}
                    className="flex items-center gap-2 text-slate-600"
                  >
                    <CheckCircle2 className="w-4 h-4 text-green-500" /> {dest}
                  </li>
                ))}
              </ul>
            </section>
          </div>

          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-6">
              Frequently Asked Questions
            </h2>
            <div className="space-y-4">
              {faqs.map((faq, idx) => (
                <div
                  key={idx}
                  className="border border-slate-200 rounded-lg p-5"
                >
                  <h4 className="font-bold text-slate-900 mb-2">{faq.q}</h4>
                  <p className="text-slate-600">{faq.a}</p>
                </div>
              ))}
            </div>
          </section>
        </div>

        {/* Sidebar */}
        <aside className="lg:w-1/3">
          <div className="bg-white rounded-2xl shadow-xl border border-slate-100 p-6 sticky top-24">
            <h3 className="text-2xl font-bold text-slate-900 mb-2">
              Book Local Cab
            </h3>
            <p className="text-slate-500 text-sm mb-6">
              Fill the form below and we will contact you immediately.
            </p>

            <form className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">
                  Name
                </label>
                <input
                  type="text"
                  className="w-full border border-slate-300 rounded-md p-2.5 focus:ring-2 focus:ring-blue-600 focus:border-transparent outline-none"
                  placeholder="Your Name"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">
                  Phone Number
                </label>
                <input
                  type="tel"
                  className="w-full border border-slate-300 rounded-md p-2.5 focus:ring-2 focus:ring-blue-600 focus:border-transparent outline-none"
                  placeholder="10-digit mobile"
                />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1">
                    Date
                  </label>
                  <input
                    type="date"
                    className="w-full border border-slate-300 rounded-md p-2.5 focus:ring-2 focus:ring-blue-600 focus:border-transparent outline-none"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1">
                    Time
                  </label>
                  <input
                    type="time"
                    className="w-full border border-slate-300 rounded-md p-2.5 focus:ring-2 focus:ring-blue-600 focus:border-transparent outline-none"
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">
                  Package
                </label>
                <select className="w-full border border-slate-300 rounded-md p-2.5 focus:ring-2 focus:ring-blue-600 focus:border-transparent outline-none bg-white">
                  <option>4 Hours / 40 Kms</option>
                  <option>8 Hours / 80 Kms</option>
                  <option>12 Hours / 120 Kms</option>
                </select>
              </div>
              <button
                type="button"
                className="w-full bg-blue-700 hover:bg-blue-800 text-white font-bold py-3 px-4 rounded-md transition-colors mt-4"
              >
                Request Callback
              </button>
            </form>

            <div className="mt-6 pt-6 border-t border-slate-200 text-center">
              <p className="text-slate-500 text-sm mb-2">
                Or call us directly at
              </p>
              <a
                href="tel:+919876543210"
                className="text-xl font-bold text-blue-700"
              >
                {SITE_CONFIG?.phone || "+91 98765 43210"}
              </a>
            </div>
          </div>
        </aside>
      </div>

      {/* CTA Banner */}
      <section className="bg-blue-900 text-white py-12">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Need a Custom Local Plan?</h2>
          <p className="text-blue-100 text-lg mb-8 max-w-2xl mx-auto">
            Contact us for monthly retainers, regular pickup/drops, or custom
            hourly requirements.
          </p>
          <Link
            href="/contact"
            className="inline-block bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 px-8 rounded-full transition-colors"
          >
            Contact Us Today
          </Link>
        </div>
      </section>
    </main>
  );
}
