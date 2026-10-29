import { Metadata } from 'next';
import Link from 'next/link';
import { Clock, Navigation, CheckCircle2, Info, ShieldCheck, ArrowRight, Phone } from 'lucide-react';
import PageHero from '@/components/ui/PageHero';
import { SITE_CONFIG, getPhoneLink } from '@/lib/utils';

const routeData: Record<string, any> = {
  lucknow: {
    name: 'Lucknow',
    dist: '90 km',
    time: '2 hrs',
    sameday: '1,000',
    stay: '1,200',
    desc: 'Travel to the City of Nawabs comfortably in your personal car via the NH27 / Lucknow-Kanpur Expressway. Avoid traffic stress with our experienced highway chauffeur.',
  },
  agra: {
    name: 'Agra',
    dist: '280 km',
    time: '4.5 hrs',
    sameday: '1,000',
    stay: '1,200',
    desc: 'Take a smooth drive to Agra via the Agra-Lucknow Expressway. Ideal for weekend getaways and family outings in your personal vehicle.',
  },
  ayodhya: {
    name: 'Ayodhya',
    dist: '230 km',
    time: '4.5 hrs',
    sameday: '1,000',
    stay: '1,200',
    desc: 'Visit Shri Ram Mandir Darshan comfortably with family in your own vehicle. Our chauffeurs know pilgrimage parking and darshan routes.',
  },
  prayagraj: {
    name: 'Prayagraj',
    dist: '210 km',
    time: '4 hrs',
    sameday: '1,000',
    stay: '1,200',
    desc: 'Smooth highway drive to Prayagraj Triveni Sangam Snan and temples in your personal car. Courteous, experienced highway driver.',
  },
  varanasi: {
    name: 'Varanasi',
    dist: '330 km',
    time: '6 hrs',
    sameday: '1,000',
    stay: '1,200',
    desc: 'Comfortable journey to Kashi Vishwanath temple in your personal car. Overnight stay driver ensures complete flexibility.',
  },
  delhi: {
    name: 'Delhi',
    dist: '500 km',
    time: '7.5 hrs',
    sameday: '1,000',
    stay: '1,200',
    desc: 'Cruising via the Yamuna Expressway in your personal sedan or SUV. Relax and avoid 8 hours of continuous driving strain.',
  },
};

export function generateStaticParams() {
  return [
    'lucknow',
    'agra',
    'varanasi',
    'delhi',
    'prayagraj',
    'ayodhya',
    'jaipur',
    'mathura',
    'chitrakoot',
    'khajuraho',
  ].map((slug) => ({ slug }));
}

export default async function OutstationRouteDetail({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const routeName = slug.charAt(0).toUpperCase() + slug.slice(1);
  const route =
    routeData[slug] || {
      name: routeName,
      dist: 'Highway Route',
      time: '3-6 hrs',
      sameday: '1,000',
      stay: '1,200',
      desc: `Hire a reliable, police-verified highway driver from Kanpur to ${routeName} to drive your personal car safely.`,
    };

  return (
    <main className="bg-slate-50 min-h-screen pb-16">
      <PageHero
        title={`Kanpur to ${route.name} Highway Driver`}
        subtitle={`Distance: ${route.dist} | Approx Time: ${route.time} | In Your Personal Car`}
        breadcrumbs={[
          { label: 'Home', href: '/' },
          { label: 'Outstation', href: '/outstation' },
          { label: route.name, href: `/outstation/${slug}` },
        ]}
      />

      <div className="container mx-auto px-4 py-12 flex flex-col lg:flex-row gap-12 max-w-6xl">
        <div className="lg:w-2/3">
          <p className="text-base text-slate-700 leading-relaxed mb-8">{route.desc}</p>

          <h3 className="text-xl font-bold text-slate-900 mb-4">
            Driver Tariff for Kanpur to {route.name}
          </h3>
          <div className="overflow-x-auto mb-8 bg-white rounded-2xl border border-slate-200 shadow-sm">
            <table className="w-full text-left border-collapse text-xs sm:text-sm">
              <thead className="bg-slate-100 text-slate-700 font-bold border-b border-slate-200">
                <tr>
                  <th className="p-3.5 sm:p-4">Trip Plan</th>
                  <th className="p-3.5 sm:p-4">Duty Window</th>
                  <th className="p-3.5 sm:p-4">Driver Daily Fee</th>
                  <th className="p-3.5 sm:p-4">Food & Stay Allowance</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200 text-slate-700">
                <tr>
                  <td className="p-3.5 sm:p-4 font-bold text-slate-900">Same-Day Return</td>
                  <td className="p-3.5 sm:p-4 text-xs">Up to 12 Hours duty</td>
                  <td className="p-3.5 sm:p-4 font-extrabold text-primary-900">₹{route.sameday} / day</td>
                  <td className="p-3.5 sm:p-4 text-xs text-slate-600">₹250 Food DA</td>
                </tr>
                <tr>
                  <td className="p-3.5 sm:p-4 font-bold text-slate-900">Multi-Day / Overnight Stay</td>
                  <td className="p-3.5 sm:p-4 text-xs">24 Hours Calendar Day</td>
                  <td className="p-3.5 sm:p-4 font-extrabold text-primary-900">₹{route.stay} / day</td>
                  <td className="p-3.5 sm:p-4 text-xs text-accent-600 font-semibold">₹400 Night Stay & Food DA</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="bg-slate-100 p-4 rounded-xl text-xs text-slate-600 flex items-center gap-2 mb-10 border border-slate-200">
            <Info className="w-4 h-4 text-primary-800 flex-shrink-0" />
            <span>
              <strong>Customer Vehicle Policy:</strong> All driving is performed in your personal vehicle. Fuel, tolls, state taxes, and parking are directly settled by the customer.
            </span>
          </div>

          <h3 className="text-lg font-bold text-slate-900 mb-3">Highway Travel Guidance</h3>
          <ul className="space-y-2 mb-12 text-xs sm:text-sm text-slate-600">
            <li className="flex gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
              Our driver reports to your Kanpur doorstep in uniform 15 minutes before your scheduled departure.
            </li>
            <li className="flex gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
              All highway drivers are strictly vetted for expressway speed adherence and night driving vision.
            </li>
          </ul>
        </div>

        <aside className="lg:w-1/3">
          <div className="bg-white rounded-2xl shadow-sm border border-slate-200 p-6 sticky top-24">
            <h3 className="text-xl font-bold text-slate-900 mb-2">Hire Driver to {route.name}</h3>
            <p className="text-xs text-slate-500 mb-6">
              Experienced highway chauffeur dispatched to your Kanpur location.
            </p>

            <div className="space-y-4 mb-6">
              <div className="p-3 bg-slate-50 rounded-xl border border-slate-100 text-xs">
                <span className="text-slate-400 block text-[10px]">Route Distance</span>
                <strong className="text-slate-900">{route.dist} ({route.time})</strong>
              </div>
              <div className="p-3 bg-slate-50 rounded-xl border border-slate-100 text-xs">
                <span className="text-slate-400 block text-[10px]">Driver Tariff</span>
                <strong className="text-primary-900 text-base">From ₹1,000 / day</strong>
              </div>
            </div>

            <Link
              href={`/booking?serviceType=Outstation+Trip+Driver&dropLocation=${encodeURIComponent(route.name)}`}
              className="w-full py-3 bg-primary-900 hover:bg-primary-950 text-white font-bold rounded-xl text-center block text-xs transition-colors shadow mb-3"
            >
              Hire Driver for This Route
            </Link>

            <a
              href={getPhoneLink(SITE_CONFIG.phone)}
              className="w-full py-2.5 border border-slate-200 text-slate-800 hover:bg-slate-50 font-bold rounded-xl text-center flex items-center justify-center gap-1.5 text-xs transition-colors"
            >
              <Phone className="w-3.5 h-3.5 text-primary-800" />
              Call Dispatch: {SITE_CONFIG.phone}
            </a>
          </div>
        </aside>
      </div>
    </main>
  );
}
