import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { Clock, Map, Check, X } from 'lucide-react';
import PageHero from '@/components/ui/PageHero';

// Sample tour data map
const tourData: Record<string, any> = {
  'kanpur-half-day': {
    name: 'Kanpur Half-Day City Tour',
    duration: '4 Hours',
    price: { hatchback: '1,500', sedan: '1,800', suv: '2,500' },
    desc: 'Perfect for business travelers or those short on time. Experience the best of Kanpur in just half a day.',
    itinerary: [
      { time: '09:00 AM', title: 'Pickup', desc: 'From your hotel/home in Kanpur.' },
      { time: '09:30 AM', title: 'JK Temple', desc: 'Visit the beautiful white marble temple.' },
      { time: '11:00 AM', title: 'Moti Jheel', desc: 'Stroll around the scenic lake and park.' },
      { time: '12:30 PM', title: 'Shopping', desc: 'Quick stop at Naveen Market or Z Square.' },
      { time: '01:00 PM', title: 'Drop', desc: 'Back to your location.' }
    ]
  },
  'ayodhya-prayagraj': {
    name: 'Ayodhya-Prayagraj Pilgrimage',
    duration: '2 Days / 1 Night',
    price: { sedan: '6,500', suv: '9,000', tempo: '15,000' },
    desc: 'A deeply spiritual journey covering the Ram Janmabhoomi in Ayodhya and the sacred Triveni Sangam in Prayagraj.',
    itinerary: [
      { time: 'Day 1 Morning', title: 'Kanpur to Ayodhya', desc: 'Early morning drive to Ayodhya (approx 4.5 hrs).' },
      { time: 'Day 1 Afternoon', title: 'Ayodhya Darshan', desc: 'Visit Ram Mandir, Hanuman Garhi, and Kanak Bhawan.' },
      { time: 'Day 2 Morning', title: 'Ayodhya to Prayagraj', desc: 'Drive to Prayagraj (approx 4 hrs).' },
      { time: 'Day 2 Afternoon', title: 'Sangam & Temples', desc: 'Holy dip at Triveni Sangam, visit Anand Bhavan.' },
      { time: 'Day 2 Evening', title: 'Return', desc: 'Drive back to Kanpur.' }
    ]
  }
  // Others omitted for brevity, would be populated in real app
};

export function generateStaticParams() {
  return [
    { slug: 'kanpur-half-day' },
    { slug: 'kanpur-full-day' },
    { slug: 'bithoor-pilgrimage' },
    { slug: 'kanpur-religious' },
    { slug: 'kanpur-lucknow' },
    { slug: 'ayodhya-prayagraj' }
  ];
}

export default async function TourDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  // Fallback to half-day data if slug not fully defined in mock map
  const tour = tourData[slug] || { ...tourData['kanpur-half-day'], name: slug.replace(/-/g, ' ').toUpperCase() };

  return (
    <main>
      <PageHero 
        title={tour.name} 
        subtitle="Exclusive Tour Package"
        breadcrumbs={[{ label: 'Home', href: '/' }, { label: 'Tours', href: '/tours' }, { label: tour.name, href: `/tours/${slug}` }]}
      />
      
      <div className="container mx-auto px-4 py-12 flex flex-col lg:flex-row gap-12">
        <div className="lg:w-2/3">
          <div className="flex gap-4 mb-6">
            <span className="bg-orange-100 text-orange-800 px-3 py-1 rounded-full text-sm font-medium flex items-center gap-1.5"><Clock className="w-4 h-4"/> {tour.duration}</span>
            <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium flex items-center gap-1.5"><Map className="w-4 h-4"/> Custom Route</span>
          </div>
          
          <p className="text-lg text-slate-600 mb-10">{tour.desc}</p>
          
          <h3 className="text-2xl font-bold text-slate-900 mb-6 border-b pb-2">Tour Itinerary</h3>
          <div className="relative border-l-2 border-orange-200 ml-4 mb-12 space-y-8">
            {tour.itinerary.map((item: any, i: number) => (
              <div key={i} className="pl-6 relative">
                <div className="absolute w-4 h-4 bg-orange-500 rounded-full -left-[9px] top-1 border-2 border-white"></div>
                <span className="text-sm font-bold text-orange-600 block mb-1">{item.time}</span>
                <h4 className="font-bold text-slate-900 text-lg mb-1">{item.title}</h4>
                <p className="text-slate-600 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div>
              <h3 className="text-xl font-bold text-slate-900 mb-4 flex items-center gap-2"><Check className="text-green-500" /> Inclusions</h3>
              <ul className="space-y-2 text-sm text-slate-600">
                <li>• Private AC Vehicle with Driver</li>
                <li>• Fuel and Driver Allowance</li>
                <li>• Pickup & Drop within city limits</li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-bold text-slate-900 mb-4 flex items-center gap-2"><X className="text-red-500" /> Exclusions</h3>
              <ul className="space-y-2 text-sm text-slate-600">
                <li>• Monument/Temple Entry Fees</li>
                <li>• Meals and Beverages</li>
                <li>• Tolls and Parking charges</li>
              </ul>
            </div>
          </div>
        </div>
        
        <aside className="lg:w-1/3" id="book">
          <div className="bg-white rounded-2xl shadow-xl border border-slate-100 p-6 sticky top-24">
            <h3 className="text-2xl font-bold text-slate-900 mb-6">Book This Tour</h3>
            <form className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">Tour Package</label>
                <input type="text" className="w-full border border-slate-300 rounded-md p-2 bg-slate-50 text-slate-500" value={tour.name} readOnly />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">Date</label>
                <input type="date" className="w-full border border-slate-300 rounded-md p-2 focus:ring-2 focus:ring-orange-500 outline-none" />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">Name</label>
                <input type="text" className="w-full border border-slate-300 rounded-md p-2 focus:ring-2 focus:ring-orange-500 outline-none" />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">Phone</label>
                <input type="tel" className="w-full border border-slate-300 rounded-md p-2 focus:ring-2 focus:ring-orange-500 outline-none" />
              </div>
              <button type="button" className="w-full bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 rounded-md transition-colors mt-4">
                Enquire Now
              </button>
            </form>
          </div>
        </aside>
      </div>
    </main>
  );
}
