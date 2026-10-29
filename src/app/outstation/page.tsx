import { Metadata } from 'next';
import Link from 'next/link';
import { MapPin, Clock, Navigation, ShieldCheck, ArrowRight } from 'lucide-react';
import PageHero from '@/components/ui/PageHero';
import SectionHeading from '@/components/ui/SectionHeading';

export const metadata: Metadata = {
  title: 'Outstation Highway Drivers from Kanpur | In Your Own Car | KanpurDrivers',
  description: 'Hire verified highway drivers from Kanpur to Lucknow, Agra, Delhi, Varanasi, Ayodhya. Fixed daily driver tariffs from ₹1,000/day for your personal vehicle.',
};

const routes = [
  { slug: 'lucknow', name: 'Lucknow', dist: '90 km', time: '2 hrs', price: '1,000 / day', bg: 'bg-primary-950', duty: 'Same-Day Return' },
  { slug: 'ayodhya', name: 'Ayodhya', dist: '230 km', time: '4.5 hrs', price: '1,000 / day', bg: 'bg-amber-900', duty: 'Same-Day Return' },
  { slug: 'prayagraj', name: 'Prayagraj', dist: '210 km', time: '4 hrs', price: '1,000 / day', bg: 'bg-blue-900', duty: 'Same-Day Return' },
  { slug: 'agra', name: 'Agra', dist: '280 km', time: '4.5 hrs', price: '1,000 / day', bg: 'bg-rose-900', duty: 'Same-Day Return' },
  { slug: 'varanasi', name: 'Varanasi', dist: '330 km', time: '6 hrs', price: '1,200 / day', bg: 'bg-orange-950', duty: 'Overnight Stay' },
  { slug: 'delhi', name: 'Delhi', dist: '500 km', time: '7.5 hrs', price: '1,200 / day', bg: 'bg-slate-900', duty: 'Overnight Stay' },
  { slug: 'mathura', name: 'Mathura', dist: '340 km', time: '5.5 hrs', price: '1,200 / day', bg: 'bg-purple-950', duty: 'Overnight Stay' },
  { slug: 'chitrakoot', name: 'Chitrakoot', dist: '220 km', time: '5 hrs', price: '1,000 / day', bg: 'bg-emerald-950', duty: 'Same-Day Return' },
  { slug: 'khajuraho', name: 'Khajuraho', dist: '230 km', time: '5.5 hrs', price: '1,200 / day', bg: 'bg-teal-950', duty: 'Overnight Stay' },
  { slug: 'jaipur', name: 'Jaipur', dist: '520 km', time: '9 hrs', price: '1,200 / day', bg: 'bg-pink-950', duty: 'Overnight Stay' }
];

export default function OutstationRoutesPage() {
  return (
    <main className="bg-slate-50 min-h-screen pb-16">
      <PageHero 
        title="Outstation Highway Driver Routes" 
        subtitle="Hire experienced expressway chauffeurs to drive your personal car safely across Uttar Pradesh and neighboring states"
        breadcrumbs={[{ label: 'Home', href: '/' }, { label: 'Outstation Drivers', href: '/outstation' }]}
      />
      
      <section className="py-16 md:py-20 container mx-auto px-4 max-w-7xl">
        <SectionHeading 
          title="Intercity Highway Driver Destinations" 
          subtitle="Fixed daily driver tariffs for popular routes from Kanpur in your own car" 
        />
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mt-12">
          {routes.map((route) => (
            <div key={route.slug} className="bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden hover:shadow-md transition-all flex flex-col">
              <div className={`h-28 ${route.bg} p-5 flex flex-col justify-between relative text-white`}>
                <div className="flex justify-between items-center text-xs">
                  <span className="text-accent-400 font-semibold">{route.duty}</span>
                  <span className="bg-white/15 px-2 py-0.5 rounded text-[10px]">Expressway</span>
                </div>
                <h3 className="text-xl font-bold">Kanpur &rarr; {route.name}</h3>
              </div>
              <div className="p-5 flex flex-col flex-grow">
                <div className="flex justify-between text-xs text-slate-600 border-b border-slate-100 pb-3 mb-3">
                  <span className="flex items-center gap-1"><Navigation className="w-3.5 h-3.5 text-primary-800" /> {route.dist}</span>
                  <span className="flex items-center gap-1"><Clock className="w-3.5 h-3.5 text-primary-800" /> {route.time}</span>
                </div>
                <div className="flex items-end justify-between mt-auto pt-2">
                  <div>
                    <p className="text-[10px] text-slate-400 uppercase">Driver Tariff</p>
                    <p className="font-extrabold text-base text-primary-950">₹{route.price}</p>
                  </div>
                  <Link
                    href={`/booking?serviceType=Outstation+Trip+Driver&dropLocation=${encodeURIComponent(route.name)}`}
                    className="text-primary-800 text-xs font-bold hover:underline inline-flex items-center gap-1"
                  >
                    Hire Driver <ArrowRight className="w-3 h-3" />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
