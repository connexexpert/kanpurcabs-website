import { Metadata } from 'next';
import Link from 'next/link';
import { Clock, MapPin, IndianRupee, ArrowRight, ShieldCheck } from 'lucide-react';
import PageHero from '@/components/ui/PageHero';
import SectionHeading from '@/components/ui/SectionHeading';

export const metadata: Metadata = {
  title: 'Sightseeing & Pilgrimage Chauffeurs in Kanpur | In Your Personal Car | KanpurDrivers',
  description: 'Hire experienced local and pilgrimage chauffeurs for your personal car in Kanpur. Half-day, full-day city tours, Bithoor and Ayodhya pilgrimages.',
};

const tours = [
  {
    id: 'kanpur-half-day',
    name: 'Kanpur Half-Day City Tour Chauffeur',
    duration: '4 Hours Duty',
    price: '400',
    highlights: 'JK Temple, Allen Forest Zoo, Moti Jheel',
    imageUrl: 'https://images.unsplash.com/photo-1596176530529-78163a4f7af2?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 'kanpur-full-day',
    name: 'Kanpur Full-Day City Tour Chauffeur',
    duration: '8 Hours Duty',
    price: '700',
    highlights: 'Zoo, Temples, Ganga Barrage, Nana Rao Park',
    imageUrl: 'https://images.unsplash.com/photo-1609137144813-7d9921338f24?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 'bithoor-pilgrimage',
    name: 'Bithoor Holy Pilgrimage Chauffeur',
    duration: '5 Hours Duty',
    price: '500',
    highlights: 'Brahmavart Ghat, Valmiki Ashram, Ganga Aarti',
    imageUrl: 'https://images.unsplash.com/photo-1561361513-2d000a50f0dc?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 'kanpur-religious',
    name: 'Kanpur Sacred Temples Chauffeur',
    duration: '6 Hours Duty',
    price: '550',
    highlights: 'ISKCON, JK Temple, Panki Hanuman Mandir',
    imageUrl: 'https://images.unsplash.com/photo-1596176530529-78163a4f7af2?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 'ayodhya-prayagraj',
    name: 'Ayodhya & Prayagraj Pilgrimage Chauffeur',
    duration: '2 Days Outstation',
    price: '2,400',
    highlights: 'Shri Ram Mandir, Triveni Sangam Snan, Hanuman Garhi',
    imageUrl: 'https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&w=800&q=80',
  },
];

export default function ToursPage() {
  return (
    <main className="bg-slate-50 min-h-screen pb-16">
      <PageHero 
        title="Sightseeing & Pilgrimage Chauffeurs" 
        subtitle="Enjoy spiritual and heritage journeys in your personal car with our knowledgeable chauffeurs"
        breadcrumbs={[{ label: 'Home', href: '/' }, { label: 'Sightseeing Chauffeurs', href: '/tours' }]}
      />
      
      <section className="py-16 md:py-20 container mx-auto px-4 max-w-7xl">
        <SectionHeading 
          title="Curated Sightseeing & Pilgrimage Driver Duties" 
          subtitle="Sit back with your family in your personal vehicle. Our chauffeurs take care of congested parking and optimal routes." 
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
          {tours.map((tour) => (
            <div key={tour.id} className="bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden hover:shadow-md transition-all flex flex-col">
              <div className="h-48 overflow-hidden relative group">
                <img 
                  src={tour.imageUrl} 
                  alt={tour.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  loading="lazy"
                />
                <div className="absolute top-3 left-3 bg-primary-950/80 backdrop-blur-md text-white text-xs px-2.5 py-1 rounded-md font-semibold">
                  {tour.duration}
                </div>
              </div>
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="font-bold text-lg text-slate-900 mb-2">{tour.name}</h3>
                <p className="text-xs text-slate-600 mb-4 flex-grow leading-relaxed">
                  <strong>Highlights:</strong> {tour.highlights}
                </p>
                <div className="flex items-center justify-between border-t border-slate-100 pt-4 mt-auto">
                  <div>
                    <span className="text-[10px] text-slate-400 block uppercase">Driver Duty Fee</span>
                    <span className="font-extrabold text-base text-primary-900">₹{tour.price}</span>
                  </div>
                  <Link 
                    href={`/booking?serviceType=Local+Hourly+Car+Driver&package=${encodeURIComponent(tour.name)}`}
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-white bg-primary-900 hover:bg-primary-950 px-4 py-2 rounded-xl transition-colors"
                  >
                    Hire Chauffeur <ArrowRight className="w-3.5 h-3.5" />
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
