import { Metadata } from 'next';
import Link from 'next/link';
import { MapPin, Clock, Navigation } from 'lucide-react';
import PageHero from '@/components/ui/PageHero';
import SectionHeading from '@/components/ui/SectionHeading';

export const metadata: Metadata = {
  title: 'Outstation Cabs from Kanpur | One-Way & Round Trip',
  description: 'Book outstation cabs from Kanpur to Lucknow, Agra, Delhi, Varanasi. Affordable taxi fares for one-way drops and round-trip journeys.',
};

const routes = [
  { slug: 'lucknow', name: 'Lucknow', dist: '90 km', time: '2 hrs', price: '1,500', bg: 'bg-indigo-600' },
  { slug: 'agra', name: 'Agra', dist: '280 km', time: '4.5 hrs', price: '4,500', bg: 'bg-rose-600' },
  { slug: 'varanasi', name: 'Varanasi', dist: '330 km', time: '6 hrs', price: '5,000', bg: 'bg-orange-600' },
  { slug: 'delhi', name: 'Delhi', dist: '500 km', time: '7.5 hrs', price: '7,500', bg: 'bg-blue-600' },
  { slug: 'prayagraj', name: 'Prayagraj', dist: '210 km', time: '4 hrs', price: '3,200', bg: 'bg-cyan-600' },
  { slug: 'ayodhya', name: 'Ayodhya', dist: '230 km', time: '4.5 hrs', price: '3,500', bg: 'bg-amber-600' },
  { slug: 'jaipur', name: 'Jaipur', dist: '520 km', time: '9 hrs', price: '8,000', bg: 'bg-pink-600' },
  { slug: 'mathura', name: 'Mathura', dist: '340 km', time: '5.5 hrs', price: '5,500', bg: 'bg-purple-600' },
  { slug: 'chitrakoot', name: 'Chitrakoot', dist: '220 km', time: '5 hrs', price: '3,800', bg: 'bg-emerald-600' },
  { slug: 'khajuraho', name: 'Khajuraho', dist: '230 km', time: '5.5 hrs', price: '4,200', bg: 'bg-teal-600' }
];

export default function OutstationRoutesPage() {
  return (
    <main>
      <PageHero 
        title="Popular Outstation Routes" 
        subtitle="Explore intercity travel from Kanpur"
        breadcrumbs={[{ label: 'Home', href: '/' }, { label: 'Outstation', href: '/outstation' }]}
      />
      
      <section className="py-16 md:py-24 container mx-auto px-4">
        <SectionHeading title="Where do you want to go?" subtitle="Top destinations connected via highway from Kanpur" />
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mt-12">
          {routes.map((route) => (
            <Link key={route.slug} href={`/outstation/${route.slug}`} className="group block">
              <div className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden hover:shadow-lg transition-all hover:-translate-y-1">
                <div className={`h-32 ${route.bg} flex items-center justify-center relative overflow-hidden`}>
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors"></div>
                  <h3 className="text-white text-2xl font-bold relative z-10">Kanpur to {route.name}</h3>
                </div>
                <div className="p-5">
                  <div className="flex justify-between text-sm text-slate-600 border-b border-slate-100 pb-3 mb-3">
                    <span className="flex items-center gap-1"><Navigation className="w-3.5 h-3.5" /> {route.dist}</span>
                    <span className="flex items-center gap-1"><Clock className="w-3.5 h-3.5" /> {route.time}</span>
                  </div>
                  <div className="flex items-end justify-between">
                    <div>
                      <p className="text-xs text-slate-500 mb-0.5">Starts from</p>
                      <p className="font-bold text-lg text-slate-900">₹{route.price}</p>
                    </div>
                    <span className="text-blue-600 text-sm font-medium group-hover:underline">View Route</span>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}
