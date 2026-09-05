import { Metadata } from "next";
import { Plane, Clock, ShieldCheck, MapPin } from "lucide-react";
import PageHero from "@/components/ui/PageHero";
import SectionHeading from "@/components/ui/SectionHeading";
import { SITE_CONFIG } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Airport Transfer Kanpur | Cab to Kanpur & Lucknow Airport",
  description:
    "Book reliable airport transfers from Kanpur. Pick up and drop services to Kanpur Airport (KNU) and Lucknow Airport (LKO) with meet & greet service.",
};

export default function AirportTransferPage() {
  return (
    <main>
      <PageHero
        title="Airport Transfer"
        subtitle="Punctual & reliable airport pickup and drop services"
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Services", href: "/services" },
          { label: "Airport Transfer", href: "/services/airport-transfer" },
        ]}
      />

      <div className="container mx-auto px-4 py-12 lg:py-20 flex flex-col lg:flex-row gap-12">
        <div className="lg:w-2/3">
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">
              Never Miss a Flight
            </h2>
            <p className="text-slate-600 text-lg mb-6 leading-relaxed">
              We understand the importance of timely airport transfers. Our
              dedicated airport taxi service ensures you reach Kanpur Airport
              (Chakeri - KNU) or Chaudhary Charan Singh International Airport,
              Lucknow (LKO) with plenty of time to spare.
            </p>

            <div className="bg-blue-50 border border-blue-100 rounded-xl p-6 mb-8 flex items-start gap-4">
              <Plane className="w-8 h-8 text-blue-700 flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-bold text-lg text-slate-900">
                  Covering Major Airports
                </h3>
                <p className="text-slate-600 mt-1">
                  <strong>Kanpur Airport (KNU):</strong> Located in Chakeri,
                  offering select domestic flights.
                  <br />
                  <strong>Lucknow Airport (LKO):</strong> The nearest major
                  international airport, ~90km away.
                </p>
              </div>
            </div>
          </section>

          <section className="mb-16">
            <SectionHeading
              title="Indicative Pricing"
              subtitle="Transparent rates for airport transfers"
              align="left"
            />
            <div className="overflow-x-auto mt-8">
              <table className="w-full text-left border-collapse border border-slate-200 rounded-lg overflow-hidden">
                <thead className="bg-slate-50">
                  <tr>
                    <th className="p-4 border border-slate-200 font-semibold text-slate-700">
                      Route
                    </th>
                    <th className="p-4 border border-slate-200 font-semibold text-slate-700">
                      Sedan
                    </th>
                    <th className="p-4 border border-slate-200 font-semibold text-slate-700">
                      SUV
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="hover:bg-slate-50">
                    <td className="p-4 border border-slate-200 font-medium">
                      Kanpur City to Kanpur Airport
                    </td>
                    <td className="p-4 border border-slate-200">₹600 - ₹800</td>
                    <td className="p-4 border border-slate-200">
                      ₹900 - ₹1,200
                    </td>
                  </tr>
                  <tr className="hover:bg-slate-50">
                    <td className="p-4 border border-slate-200 font-medium">
                      Kanpur City to Lucknow Airport
                    </td>
                    <td className="p-4 border border-slate-200">
                      ₹1,400 - ₹1,600
                    </td>
                    <td className="p-4 border border-slate-200">
                      ₹2,000 - ₹2,400
                    </td>
                  </tr>
                </tbody>
              </table>
              <p className="text-xs text-slate-500 mt-2">
                * Prices vary based on exact pickup location in Kanpur.
              </p>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-slate-900 mb-6">
              Premium Airport Services
            </h2>
            <div className="grid sm:grid-cols-2 gap-6">
              <div className="flex gap-4">
                <Clock className="w-6 h-6 text-orange-500 flex-shrink-0" />
                <div>
                  <h4 className="font-bold text-slate-900">Flight Tracking</h4>
                  <p className="text-sm text-slate-600 mt-1">
                    We track your flight status to adjust pickup times in case
                    of early arrivals or delays, ensuring the driver is there
                    when you land.
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <ShieldCheck className="w-6 h-6 text-green-500 flex-shrink-0" />
                <div>
                  <h4 className="font-bold text-slate-900">Meet & Greet</h4>
                  <p className="text-sm text-slate-600 mt-1">
                    Our driver will wait at the arrivals gate with a placard
                    bearing your name for easy identification and help with
                    luggage.
                  </p>
                </div>
              </div>
            </div>
          </section>

          <div className="bg-slate-100 p-6 rounded-xl">
            <h3 className="font-bold text-slate-900 mb-2">
              Looking for Railway Transfers?
            </h3>
            <p className="text-slate-600 text-sm mb-4">
              We also provide 24/7 drop and pickup services to Kanpur Central,
              Govindpuri, and Anwarganj railway stations.
            </p>
            <a
              href="/services/railway-station-transfer"
              className="text-blue-700 font-semibold hover:underline text-sm"
            >
              View Railway Station Transfers &rarr;
            </a>
          </div>
        </div>

        {/* Sidebar */}
        <aside className="lg:w-1/3">
          <div className="bg-white rounded-2xl shadow-xl border border-slate-100 p-6 sticky top-24">
            <h3 className="text-2xl font-bold text-slate-900 mb-6">
              Book Airport Taxi
            </h3>

            <form className="space-y-4">
              <div className="flex gap-4 mb-4">
                <label className="flex items-center gap-2 text-sm text-slate-700 cursor-pointer">
                  <input
                    type="radio"
                    name="dir"
                    className="w-4 h-4 text-blue-600"
                    defaultChecked
                  />{" "}
                  To Airport
                </label>
                <label className="flex items-center gap-2 text-sm text-slate-700 cursor-pointer">
                  <input
                    type="radio"
                    name="dir"
                    className="w-4 h-4 text-blue-600"
                  />{" "}
                  From Airport
                </label>
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">
                  Select Airport
                </label>
                <select className="w-full border border-slate-300 rounded-md p-2.5 focus:ring-2 focus:ring-blue-600 outline-none bg-white">
                  <option>Kanpur Airport (KNU)</option>
                  <option>Lucknow Airport (LKO)</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">
                  Pickup/Drop Area in Kanpur
                </label>
                <input
                  type="text"
                  className="w-full border border-slate-300 rounded-md p-2.5 focus:ring-2 focus:ring-blue-600 outline-none"
                  placeholder="e.g. Swaroop Nagar"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">
                  Date & Time
                </label>
                <input
                  type="datetime-local"
                  className="w-full border border-slate-300 rounded-md p-2.5 focus:ring-2 focus:ring-blue-600 outline-none"
                />
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
                Confirm Booking
              </button>
            </form>
          </div>
        </aside>
      </div>
    </main>
  );
}
