import { Metadata } from "next";
import { Train, Clock } from "lucide-react";
import PageHero from "@/components/ui/PageHero";
import SectionHeading from "@/components/ui/SectionHeading";

export const metadata: Metadata = {
  title: "Railway Station Transfer Kanpur | Cab to Kanpur Central",
  description:
    "Book cabs to Kanpur Central, Govindpuri, and Anwarganj railway stations. 24/7 reliable pickup and drop services.",
};

export default function RailwayTransferPage() {
  return (
    <main>
      <PageHero
        title="Railway Station Transfers"
        subtitle="Comfortable rides to and from Kanpur railway stations"
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Services", href: "/services" },
          {
            label: "Railway Transfer",
            href: "/services/railway-station-transfer",
          },
        ]}
      />

      <div className="container mx-auto px-4 py-12 lg:py-20 flex flex-col lg:flex-row gap-12">
        <div className="lg:w-2/3">
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">
              Hassle-Free Station Drops
            </h2>
            <p className="text-slate-600 text-lg mb-6 leading-relaxed">
              Navigating station traffic with heavy luggage can be stressful.
              Let our professional drivers handle it. We provide reliable 24/7
              taxi services covering all major railway stations in Kanpur.
            </p>

            <div className="grid sm:grid-cols-3 gap-4 mb-8">
              <div className="bg-orange-50 border border-orange-100 p-4 rounded-lg text-center">
                <Train className="w-8 h-8 text-orange-600 mx-auto mb-2" />
                <h4 className="font-bold text-slate-900">Kanpur Central</h4>
                <p className="text-xs text-slate-500">CNB</p>
              </div>
              <div className="bg-orange-50 border border-orange-100 p-4 rounded-lg text-center">
                <Train className="w-8 h-8 text-orange-600 mx-auto mb-2" />
                <h4 className="font-bold text-slate-900">Govindpuri</h4>
                <p className="text-xs text-slate-500">GOY</p>
              </div>
              <div className="bg-orange-50 border border-orange-100 p-4 rounded-lg text-center">
                <Train className="w-8 h-8 text-orange-600 mx-auto mb-2" />
                <h4 className="font-bold text-slate-900">Anwarganj</h4>
                <p className="text-xs text-slate-500">CPA</p>
              </div>
            </div>
          </section>

          <section className="mb-12">
            <SectionHeading
              title="Service Areas"
              subtitle="We cover all major localities"
              align="left"
            />
            <p className="text-slate-600 mt-4">
              We provide pickup and drop services from all major areas including
              Kakadeo, Swaroop Nagar, Civil Lines, Kidwai Nagar, Shyam Nagar,
              Yashoda Nagar, Kalyanpur, and Jajmau. Rates start from as low as
              ₹300 depending on distance.
            </p>
          </section>
        </div>

        {/* Sidebar */}
        <aside className="lg:w-1/3">
          <div className="bg-white rounded-2xl shadow-xl border border-slate-100 p-6 sticky top-24">
            <h3 className="text-2xl font-bold text-slate-900 mb-6">
              Book Station Cab
            </h3>

            <form className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">
                  Select Station
                </label>
                <select className="w-full border border-slate-300 rounded-md p-2.5 focus:ring-2 focus:ring-blue-600 outline-none bg-white">
                  <option>Kanpur Central (CNB)</option>
                  <option>Govindpuri (GOY)</option>
                  <option>Anwarganj (CPA)</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">
                  Pickup/Drop Location
                </label>
                <input
                  type="text"
                  className="w-full border border-slate-300 rounded-md p-2.5 focus:ring-2 focus:ring-blue-600 outline-none"
                  placeholder="Your address or area"
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
                Request Cab
              </button>
            </form>
          </div>
        </aside>
      </div>
    </main>
  );
}
