import { Metadata } from 'next';
import Link from 'next/link';
import { Clock, MapPin, IndianRupee } from 'lucide-react';
import PageHero from '@/components/ui/PageHero';
import SectionHeading from '@/components/ui/SectionHeading';

export const metadata: Metadata = {
  title: 'Tour Packages in Kanpur | Sightseeing & Pilgrimage Tours',
  description: 'Explore Kanpur with our curated sightseeing tours. City tours, Bithoor pilgrimage, and weekend getaways to Ayodhya and Lucknow.',
};

const tours = [
  { id: 'kanpur-half-day', name: 'Kanpur Half-Day City Tour', duration: '4 Hours', price: '1,500', highlights: 'JK Temple, Allen Zoo, Moti Jheel', image: 'bg-gradient-to-br from-blue-400 to-indigo-600' },
  { id: 'kanpur-full-day', name: 'Kanpur Full-Day City Tour', duration: '8 Hours', price: '2,500', highlights: 'Zoo, Temples, Ganga Barrage, Blue World', image: 'bg-gradient-to-br from-emerald-400 to-teal-600' },
  { id: 'bithoor-pilgrimage', name: 'Bithoor Pilgrimage Tour', duration: '5 Hours', price: '1,800', highlights: 'Brahmavart Ghat, Valmiki Ashram', image: 'bg-gradient-to-br from-orange-400 to-red-500' },
  { id: 'kanpur-religious', name: 'Kanpur Religious Tour', duration: '6 Hours', price: '2,000', highlights: 'ISKCON, JK Temple, Panki Hanuman Mandir', image: 'bg-gradient-to-br from-yellow-400 to-orange-500' },
  { id: 'kanpur-lucknow', name: 'Kanpur-Lucknow Weekend', duration: '2 Days', price: '5,500', highlights: 'Bara Imambara, Rumi Darwaza, Hazratganj', image: 'bg-gradient-to-br from-purple-400 to-pink-600' },
  { id: 'ayodhya-prayagraj', name: 'Ayodhya-Prayagraj Pilgrimage', duration: '2 Days', price: '6,500', highlights: 'Ram Mandir, Triveni Sangam', image: 'bg-gradient-to-br from-amber-500 to-orange-700' }
];

export default function ToursPage() {
  return (
    <main>
      <PageHero 
        title="Kanpur Tour & Sightseeing Packages" 
        subtitle="Discover the heritage, culture, and spirituality of Uttar Pradesh"
        breadcrumbs={[{ label: 'Home', href: '/' }, { label: 'Tours', href: '/tours' }]}
      />
      
      <section className="py-16 md:py-24 container mx-auto px-4">
        <SectionHeading title="Curated Tour Experiences" subtitle="Choose from our most popular itineraries" />
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
          {tours.map((tour) => (
            <div key={tour.id} className="bg-white rounded-xl shadow-lg border border-slate-100 overflow-hidden flex flex-col group">
              <div className={`h-48 ${tour.image} relative p-6 flex items-end`}>
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors"></div>
                <h3 className="text-white text-2xl font-bold relative z-10 drop-shadow-md">{tour.name}</h3>
              </div>
              
              <div className="p-6 flex-grow flex flex-col">
                <div className="flex justify-between items-center mb-4 text-slate-600 text-sm border-b border-slate-100 pb-4">
                  <span className="flex items-center gap-1.5"><Clock className="w-4 h-4 text-orange-500" /> {tour.duration}</span>
                  <span className="flex items-center gap-1 font-bold text-slate-900 text-lg">
                    <IndianRupee className="w-4 h-4" /> {tour.price}
                  </span>
                </div>
                
                <p className="text-slate-600 text-sm mb-6 flex-grow flex items-start gap-2">
                  <MapPin className="w-4 h-4 text-blue-500 flex-shrink-0 mt-0.5" /> 
                  {tour.highlights}
                </p>
                
                <div className="grid grid-cols-2 gap-3 mt-auto">
                  <Link href={`/tours/${tour.id}`} className="text-center border border-blue-700 text-blue-700 hover:bg-blue-50 font-medium py-2 rounded-md transition-colors">
                    View Details
                  </Link>
                  <Link href={`/tours/${tour.id}#book`} className="text-center bg-blue-700 hover:bg-blue-800 text-white font-medium py-2 rounded-md transition-colors">
                    Book Now
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
      
      <section className="bg-orange-50 py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-slate-900 mb-4">Want a Custom Itinerary?</h2>
          <p className="text-slate-600 max-w-2xl mx-auto mb-8">Tell us what you want to see, and we will create a personalized tour package just for you, complete with vehicle and driver.</p>
          <Link href="/contact" className="inline-block bg-orange-600 hover:bg-orange-700 text-white font-bold py-3 px-8 rounded-full transition-colors">
            Request Custom Tour
          </Link>
        </div>
      </section>
    </main>
  );
}
