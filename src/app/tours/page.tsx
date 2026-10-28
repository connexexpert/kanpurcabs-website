import { Metadata } from 'next';
import Link from 'next/link';
import { Clock, MapPin, IndianRupee, ArrowRight } from 'lucide-react';
import PageHero from '@/components/ui/PageHero';
import SectionHeading from '@/components/ui/SectionHeading';

export const metadata: Metadata = {
  title: 'Tour Packages in Kanpur | Sightseeing & Pilgrimage Tours',
  description: 'Explore Kanpur with our curated sightseeing tours. City tours, Bithoor pilgrimage, and weekend getaways to Ayodhya and Lucknow.',
};

const tours = [
  {
    id: 'kanpur-half-day',
    name: 'Kanpur Half-Day City Tour',
    duration: '4 Hours',
    price: '1,500',
    highlights: 'JK Temple, Allen Zoo, Moti Jheel',
    imageUrl: 'https://images.unsplash.com/photo-1596176530529-78163a4f7af2?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 'kanpur-full-day',
    name: 'Kanpur Full-Day City Tour',
    duration: '8 Hours',
    price: '2,500',
    highlights: 'Zoo, Temples, Ganga Barrage, Blue World',
    imageUrl: 'https://images.unsplash.com/photo-1609137144813-7d9921338f24?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 'bithoor-pilgrimage',
    name: 'Bithoor Pilgrimage Tour',
    duration: '5 Hours',
    price: '1,800',
    highlights: 'Brahmavart Ghat, Valmiki Ashram, Ganga Aarti',
    imageUrl: 'https://images.unsplash.com/photo-1561361513-2d000a50f0dc?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 'kanpur-religious',
    name: 'Kanpur Religious Tour',
    duration: '6 Hours',
    price: '2,000',
    highlights: 'ISKCON, JK Temple, Panki Hanuman Mandir',
    imageUrl: 'https://images.unsplash.com/photo-1596176530529-78163a4f7af2?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 'kanpur-lucknow',
    name: 'Kanpur-Lucknow Heritage Weekend',
    duration: '2 Days',
    price: '5,500',
    highlights: 'Bara Imambara, Rumi Darwaza, Hazratganj',
    imageUrl: 'https://images.unsplash.com/photo-1587474260584-136574528ed5?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 'ayodhya-prayagraj',
    name: 'Ayodhya-Prayagraj Pilgrimage',
    duration: '2 Days',
    price: '6,500',
    highlights: 'Ram Mandir, Triveni Sangam, Hanuman Garhi',
    imageUrl: 'https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&w=800&q=80',
  },
];

export default function ToursPage() {
  return (
    <main className="min-h-screen bg-slate-50">
      <PageHero 
        title="Kanpur Tour & Sightseeing Packages" 
        subtitle="Discover the heritage, culture, and spirituality of Uttar Pradesh"
        breadcrumbs={[{ label: 'Home', href: '/' }, { label: 'Tours', href: '/tours' }]}
      />
      
      <section className="py-16 md:py-24 container mx-auto px-4">
        <SectionHeading title="Curated Tour Experiences" subtitle="Choose from our most popular itineraries" />
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
          {tours.map((tour) => (
            <div key={tour.id} className="bg-white rounded-2xl shadow-sm hover:shadow-xl transition-all border border-slate-200 overflow-hidden flex flex-col group">
              <div className="h-52 relative overflow-hidden bg-slate-100">
                <img
                  src={tour.imageUrl}
                  alt={tour.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                <h3 className="text-white text-xl font-bold absolute bottom-3 left-4 right-4 drop-shadow-md">
                  {tour.name}
                </h3>
              </div>
              
              <div className="p-6 flex-grow flex flex-col justify-between">
                <div>
                  <div className="flex justify-between items-center mb-4 text-slate-600 text-sm border-b border-slate-100 pb-3">
                    <span className="flex items-center gap-1.5 font-medium text-slate-700">
                      <Clock className="w-4 h-4 text-accent-500" /> {tour.duration}
                    </span>
                    <span className="flex items-center font-extrabold text-primary-900 text-lg">
                      <IndianRupee className="w-4 h-4" /> {tour.price}
                    </span>
                  </div>
                  
                  <p className="text-slate-600 text-sm mb-6 flex items-start gap-2">
                    <MapPin className="w-4 h-4 text-primary-800 flex-shrink-0 mt-0.5" /> 
                    <span>{tour.highlights}</span>
                  </p>
                </div>
                
                <div className="grid grid-cols-2 gap-3 mt-auto pt-3 border-t border-slate-100">
                  <Link
                    href={`/tours/${tour.id}`}
                    className="text-center border border-slate-300 hover:border-primary-900 text-slate-700 font-bold py-2.5 rounded-xl transition-colors text-xs"
                  >
                    Itinerary
                  </Link>
                  <Link
                    href={`/booking?serviceType=Sightseeing+Tour&destination=${encodeURIComponent(tour.name)}`}
                    className="text-center bg-primary-900 hover:bg-primary-950 text-white font-bold py-2.5 rounded-xl transition-colors text-xs shadow-sm"
                  >
                    Book Tour
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
      
      <section className="bg-primary-900 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-3">Want a Custom Tour Itinerary?</h2>
          <p className="text-slate-300 max-w-2xl mx-auto mb-8 text-sm sm:text-base">
            Tell us where you want to travel, and we will customize a bespoke itinerary with chauffeured car and transparent upfront billing.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 bg-accent-500 hover:bg-accent-600 text-white font-bold py-3.5 px-8 rounded-xl transition-all shadow-md hover:shadow-lg"
          >
            <span>Request Custom Tour</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </main>
  );
}
