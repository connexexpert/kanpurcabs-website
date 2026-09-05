import { Metadata } from "next";
import Link from "next/link";
import { Shield, ThumbsUp, CreditCard, CheckCircle2 } from "lucide-react";
import PageHero from "@/components/ui/PageHero";
import SectionHeading from "@/components/ui/SectionHeading";
import { SITE_CONFIG } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Outstation Cabs from Kanpur | One Way & Round Trip",
  description:
    "Book outstation cabs from Kanpur. Reliable one-way drops and round-trip taxi services to Lucknow, Delhi, Agra, Varanasi and more.",
};

const popularRoutes = [
  {
    dest: "Lucknow",
    dist: "90 km",
    time: "2 hrs",
    sedan: "₹1,500",
    suv: "₹2,200",
  },
  {
    dest: "Agra",
    dist: "280 km",
    time: "4.5 hrs",
    sedan: "₹4,500",
    suv: "₹6,000",
  },
  {
    dest: "Delhi",
    dist: "500 km",
    time: "7.5 hrs",
    sedan: "₹7,500",
    suv: "₹10,500",
  },
  {
    dest: "Varanasi",
    dist: "330 km",
    time: "6 hrs",
    sedan: "₹5,000",
    suv: "₹7,200",
  },
  {
    dest: "Prayagraj",
    dist: "210 km",
    time: "4 hrs",
    sedan: "₹3,200",
    suv: "₹4,800",
  },
  {
    dest: "Ayodhya",
    dist: "230 km",
    time: "4.5 hrs",
    sedan: "₹3,500",
    suv: "₹5,000",
  },
];

const faqs = [
  {
    q: "What is the difference between One-Way and Round-Trip?",
    a: "One-Way charges you only for the drop to your destination. Round-Trip charges per km for the total distance covered from origin to destination and back to origin, subject to a minimum of 250km per day.",
  },
  {
    q: "Who pays the toll and parking charges?",
    a: "Toll taxes, parking fees, and state entry taxes are extra and to be paid directly by the customer as per actual receipts.",
  },
  {
    q: "Are driver night charges extra?",
    a: "Yes, a night allowance of ₹250-₹300 is applicable if the driver drives between 10 PM and 6 AM.",
  },
  {
    q: "Do you provide outstation cabs for multiple days?",
    a: "Yes, you can book multi-day round-trip tours. The billing is calculated per km with a minimum charge of 250 kms per calendar day.",
  },
];

export default function OutstationCabPage() {
  return (
    <main>
      <PageHero
        title="Outstation Cabs from Kanpur"
        subtitle="Safe, comfortable and affordable intercity travel"
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Services", href: "/services" },
          { label: "Outstation", href: "/services/outstation-cab" },
        ]}
      />

      <div className="container mx-auto px-4 py-12 lg:py-20 flex flex-col lg:flex-row gap-12">
        <div className="lg:w-2/3">
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">
              Intercity Travel Made Easy
            </h2>
            <p className="text-slate-600 text-lg mb-6 leading-relaxed">
              Planning a weekend getaway, a pilgrimage, or a business trip
              outside Kanpur? Our outstation taxi service offers the most
              convenient way to travel. With well-maintained vehicles,
              experienced highway drivers, and transparent billing, your journey
              is guaranteed to be smooth and comfortable.
            </p>

            <div className="grid md:grid-cols-2 gap-6 mt-8">
              <div className="bg-slate-50 border border-slate-200 p-6 rounded-xl">
                <h3 className="text-xl font-bold text-blue-800 mb-3">
                  One-Way Drops
                </h3>
                <p className="text-slate-600 mb-4 text-sm">
                  Pay only for the distance you travel. No need to pay for the
                  return journey. Ideal for airport drops or permanent
                  relocations.
                </p>
                <ul className="text-sm text-slate-700 space-y-2">
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-green-500" />{" "}
                    Transparent fixed pricing
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-green-500" />{" "}
                    Door-to-door pickup & drop
                  </li>
                </ul>
              </div>
              <div className="bg-slate-50 border border-slate-200 p-6 rounded-xl">
                <h3 className="text-xl font-bold text-orange-600 mb-3">
                  Round-Trip Cabs
                </h3>
                <p className="text-slate-600 mb-4 text-sm">
                  Keep the cab with you for the entire duration of your trip.
                  Perfect for holidays, weddings, and multi-city tours.
                </p>
                <ul className="text-sm text-slate-700 space-y-2">
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-green-500" /> Per Km
                    billing model
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-green-500" /> Min
                    250km / day charge
                  </li>
                </ul>
              </div>
            </div>
          </section>

          <section className="mb-16">
            <SectionHeading
              title="Popular Outstation Routes"
              subtitle="Starting rates for popular destinations"
              align="left"
            />
            <div className="overflow-x-auto mt-8">
              <table className="w-full text-left border-collapse border border-slate-200 rounded-lg overflow-hidden">
                <thead className="bg-slate-50">
                  <tr>
                    <th className="p-4 border border-slate-200 font-semibold text-slate-700">
                      Destination
                    </th>
                    <th className="p-4 border border-slate-200 font-semibold text-slate-700 hidden sm:table-cell">
                      Distance / Time
                    </th>
                    <th className="p-4 border border-slate-200 font-semibold text-slate-700">
                      Sedan (One Way)
                    </th>
                    <th className="p-4 border border-slate-200 font-semibold text-slate-700">
                      SUV (One Way)
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {popularRoutes.map((route, idx) => (
                    <tr key={idx} className="hover:bg-slate-50">
                      <td className="p-4 border border-slate-200 font-bold text-blue-700">
                        Kanpur to {route.dest}
                      </td>
                      <td className="p-4 border border-slate-200 hidden sm:table-cell text-slate-600">
                        {route.dist}{" "}
                        <span className="text-slate-400 text-xs block">
                          {route.time}
                        </span>
                      </td>
                      <td className="p-4 border border-slate-200 text-slate-800 font-medium">
                        {route.sedan}
                      </td>
                      <td className="p-4 border border-slate-200 text-slate-800 font-medium">
                        {route.suv}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
              <p className="text-xs text-slate-500 mt-2">
                * Prices are indicative one-way fares. Tolls and taxes extra.
              </p>
            </div>

            <div className="mt-6">
              <Link
                href="/outstation"
                className="text-blue-700 font-bold hover:underline"
              >
                View all outstation routes &rarr;
              </Link>
            </div>
          </section>

          <section className="mb-16">
            <h2 className="text-2xl font-bold text-slate-900 mb-8">
              Why Choose Us for Outstation?
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center p-6 bg-white border border-slate-100 rounded-xl shadow-sm">
                <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Shield className="w-6 h-6" />
                </div>
                <h4 className="font-bold text-slate-900 mb-2">
                  Verified Drivers
                </h4>
                <p className="text-sm text-slate-600">
                  Experienced drivers familiar with national highways and
                  routes.
                </p>
              </div>
              <div className="text-center p-6 bg-white border border-slate-100 rounded-xl shadow-sm">
                <div className="w-12 h-12 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <ThumbsUp className="w-6 h-6" />
                </div>
                <h4 className="font-bold text-slate-900 mb-2">Clean Cars</h4>
                <p className="text-sm text-slate-600">
                  Well-maintained, AC vehicles sanitized before every long trip.
                </p>
              </div>
              <div className="text-center p-6 bg-white border border-slate-100 rounded-xl shadow-sm">
                <div className="w-12 h-12 bg-orange-100 text-orange-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <CreditCard className="w-6 h-6" />
                </div>
                <h4 className="font-bold text-slate-900 mb-2">Clear Billing</h4>
                <p className="text-sm text-slate-600">
                  No hidden charges. Transparent quotes with per km rates
                  clearly stated.
                </p>
              </div>
            </div>
          </section>

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
              Book Outstation Cab
            </h3>
            <p className="text-slate-500 text-sm mb-6">
              Get an instant quote for your outstation journey.
            </p>

            <form className="space-y-4">
              <div className="flex gap-4 mb-4">
                <label className="flex items-center gap-2 text-sm text-slate-700 cursor-pointer">
                  <input
                    type="radio"
                    name="tripType"
                    className="w-4 h-4 text-blue-600"
                    defaultChecked
                  />
                  One Way
                </label>
                <label className="flex items-center gap-2 text-sm text-slate-700 cursor-pointer">
                  <input
                    type="radio"
                    name="tripType"
                    className="w-4 h-4 text-blue-600"
                  />
                  Round Trip
                </label>
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">
                  Pickup City
                </label>
                <input
                  type="text"
                  className="w-full border border-slate-300 rounded-md p-2.5 focus:ring-2 focus:ring-blue-600 outline-none"
                  defaultValue="Kanpur"
                  readOnly
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">
                  Drop City
                </label>
                <input
                  type="text"
                  className="w-full border border-slate-300 rounded-md p-2.5 focus:ring-2 focus:ring-blue-600 outline-none"
                  placeholder="e.g. Lucknow, Delhi"
                />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1">
                    Pickup Date
                  </label>
                  <input
                    type="date"
                    className="w-full border border-slate-300 rounded-md p-2.5 focus:ring-2 focus:ring-blue-600 outline-none"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1">
                    Time
                  </label>
                  <input
                    type="time"
                    className="w-full border border-slate-300 rounded-md p-2.5 focus:ring-2 focus:ring-blue-600 outline-none"
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">
                  Phone Number
                </label>
                <input
                  type="tel"
                  className="w-full border border-slate-300 rounded-md p-2.5 focus:ring-2 focus:ring-blue-600 outline-none"
                  placeholder="10-digit mobile"
                />
              </div>

              <button
                type="button"
                className="w-full bg-blue-700 hover:bg-blue-800 text-white font-bold py-3 px-4 rounded-md transition-colors mt-4"
              >
                Get Quote
              </button>
            </form>
          </div>
        </aside>
      </div>
    </main>
  );
}
