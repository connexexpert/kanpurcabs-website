import { Metadata } from "next";
import { Briefcase, FileText, Users, Building } from "lucide-react";
import PageHero from "@/components/ui/PageHero";

export const metadata: Metadata = {
  title: "Corporate Car Rental Kanpur | B2B Fleet Services",
  description:
    "Business and corporate car rental services in Kanpur. Monthly retainers, employee transport, and executive travel with GST billing.",
};

export default function CorporateCarRentalPage() {
  return (
    <main>
      <PageHero
        title="Corporate Car Rental"
        subtitle="Professional B2B transportation solutions"
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Services", href: "/services" },
          { label: "Corporate Rental", href: "/services/corporate-car-rental" },
        ]}
      />

      <div className="container mx-auto px-4 py-12 lg:py-20 flex flex-col lg:flex-row gap-12">
        <div className="lg:w-2/3">
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">
              Elevate Your Business Travel
            </h2>
            <p className="text-slate-600 text-lg mb-6 leading-relaxed">
              KanpurCabs provides specialized mobility solutions for businesses,
              MSMEs, and large corporations operating in and around Kanpur. We
              ensure your executives, employees, and clients travel in comfort
              and arrive on time.
            </p>

            <div className="grid md:grid-cols-2 gap-6 mt-8">
              <div className="flex gap-4">
                <Users className="w-8 h-8 text-blue-600 flex-shrink-0" />
                <div>
                  <h3 className="font-bold text-lg text-slate-900">
                    Employee Transport
                  </h3>
                  <p className="text-sm text-slate-600 mt-1">
                    Daily pick & drop services, shift-based transport, and event
                    logistics for your team.
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <Briefcase className="w-8 h-8 text-blue-600 flex-shrink-0" />
                <div>
                  <h3 className="font-bold text-lg text-slate-900">
                    Executive Travel
                  </h3>
                  <p className="text-sm text-slate-600 mt-1">
                    Premium sedans and SUVs for VIPs, board members, and
                    visiting clients.
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <FileText className="w-8 h-8 text-blue-600 flex-shrink-0" />
                <div>
                  <h3 className="font-bold text-lg text-slate-900">
                    Monthly Retainers
                  </h3>
                  <p className="text-sm text-slate-600 mt-1">
                    Hire vehicles on a monthly contract basis with dedicated
                    drivers.
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <Building className="w-8 h-8 text-blue-600 flex-shrink-0" />
                <div>
                  <h3 className="font-bold text-lg text-slate-900">
                    GST Compliance
                  </h3>
                  <p className="text-sm text-slate-600 mt-1">
                    Proper GST invoicing for seamless input tax credit claims.
                  </p>
                </div>
              </div>
            </div>
          </section>
        </div>

        {/* Sidebar */}
        <aside className="lg:w-1/3">
          <div className="bg-slate-50 border border-slate-200 rounded-2xl p-6 sticky top-24">
            <h3 className="text-2xl font-bold text-slate-900 mb-6">
              Corporate Enquiry
            </h3>

            <form className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">
                  Company Name
                </label>
                <input
                  type="text"
                  className="w-full border border-slate-300 rounded-md p-2 focus:ring-2 focus:ring-blue-600 outline-none"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">
                  Contact Person
                </label>
                <input
                  type="text"
                  className="w-full border border-slate-300 rounded-md p-2 focus:ring-2 focus:ring-blue-600 outline-none"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">
                  Email / Phone
                </label>
                <input
                  type="text"
                  className="w-full border border-slate-300 rounded-md p-2 focus:ring-2 focus:ring-blue-600 outline-none"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">
                  Requirement Details
                </label>
                <textarea
                  rows={3}
                  className="w-full border border-slate-300 rounded-md p-2 focus:ring-2 focus:ring-blue-600 outline-none"
                  placeholder="E.g., Need 2 Innovas for monthly rental"
                ></textarea>
              </div>

              <button
                type="button"
                className="w-full bg-slate-900 hover:bg-slate-800 text-white font-bold py-3 px-4 rounded-md transition-colors mt-4"
              >
                Submit Enquiry
              </button>
            </form>
          </div>
        </aside>
      </div>
    </main>
  );
}
