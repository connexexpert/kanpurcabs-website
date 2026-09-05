import { Metadata } from 'next';
import { Clock, Navigation, CheckCircle2, Info } from 'lucide-react';
import PageHero from '@/components/ui/PageHero';
import SectionHeading from '@/components/ui/SectionHeading';

// Hardcode some sample data
const routeData: Record<string, any> = {
  'lucknow': { name: 'Lucknow', dist: '90 km', time: '2 hrs', sedan: '1,500', suv: '2,200', desc: 'Travel to the City of Nawabs comfortably via the NH27 / Lucknow-Kanpur Expressway. Perfect for airport drops to LKO or business meetings in Gomti Nagar.' },
  'agra': { name: 'Agra', dist: '280 km', time: '4.5 hrs', sedan: '4,500', suv: '6,000', desc: 'Take a smooth ride to the city of the Taj Mahal via the Agra-Lucknow Expressway. Ideal for weekend getaways.' }
};

export function generateStaticParams() {
  return ['lucknow', 'agra', 'varanasi', 'delhi', 'prayagraj', 'ayodhya', 'jaipur', 'mathura', 'chitrakoot', 'khajuraho'].map(slug => ({ slug }));
}

export default async function OutstationRouteDetail({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const routeName = slug.charAt(0).toUpperCase() + slug.slice(1);
  const route = routeData[slug] || { name: routeName, dist: 'TBD', time: 'TBD', sedan: 'Call', suv: 'Call', desc: `Book a reliable cab from Kanpur to ${routeName}. Enjoy a comfortable journey with our experienced drivers.` };

  return (
    <main>
      <PageHero 
        title={`Kanpur to ${route.name} Cab`} 
        subtitle={`Distance: ${route.dist} | Approx Time: ${route.time}`}
        breadcrumbs={[{ label: 'Home', href: '/' }, { label: 'Outstation', href: '/outstation' }, { label: route.name, href: `/outstation/${slug}` }]}
      />
      
      <div className="container mx-auto px-4 py-12 flex flex-col lg:flex-row gap-12">
        <div className="lg:w-2/3">
          <p className="text-lg text-slate-700 leading-relaxed mb-10">{route.desc}</p>
          
          <h3 className="text-2xl font-bold text-slate-900 mb-6">Fare Estimate</h3>
          <div className="overflow-x-auto mb-10">
            <table className="w-full text-left border-collapse border border-slate-200">
              <thead className="bg-slate-50">
                <tr>
                  <th className="p-4 border border-slate-200 font-semibold">Vehicle Type</th>
                  <th className="p-4 border border-slate-200 font-semibold">One-Way Drop</th>
                  <th className="p-4 border border-slate-200 font-semibold">Round Trip (Per Km)</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="p-4 border border-slate-200">Sedan (Dzire/Etios)</td>
                  <td className="p-4 border border-slate-200">₹{route.sedan}</td>
                  <td className="p-4 border border-slate-200">₹11 / km</td>
                </tr>
                <tr>
                  <td className="p-4 border border-slate-200">SUV (Innova/Ertiga)</td>
                  <td className="p-4 border border-slate-200">₹{route.suv}</td>
                  <td className="p-4 border border-slate-200">₹15 / km</td>
                </tr>
              </tbody>
            </table>
            <p className="text-sm text-slate-500 mt-2 flex items-center gap-1"><Info className="w-4 h-4"/> Tolls and state taxes extra. Min 250km/day for round trip.</p>
          </div>
          
          <h3 className="text-xl font-bold text-slate-900 mb-4">Travel Tips</h3>
          <ul className="space-y-2 mb-12 text-slate-600">
            <li className="flex gap-2"><CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0" /> Start early morning to avoid city traffic while exiting Kanpur.</li>
            <li className="flex gap-2"><CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0" /> Ensure you carry original ID proof if crossing state borders.</li>
          </ul>
        </div>
        
        <aside className="lg:w-1/3">
          <div className="bg-white rounded-2xl shadow-xl border border-slate-100 p-6 sticky top-24">
            <h3 className="text-2xl font-bold text-slate-900 mb-6">Book to {route.name}</h3>
            <form className="space-y-4">
              <div className="flex gap-4 mb-4">
                <label className="flex items-center gap-2 text-sm text-slate-700"><input type="radio" name="trip" defaultChecked /> One Way</label>
                <label className="flex items-center gap-2 text-sm text-slate-700"><input type="radio" name="trip" /> Round Trip</label>
              </div>
              <input type="date" className="w-full border border-slate-300 rounded-md p-2" />
              <input type="tel" placeholder="Phone Number" className="w-full border border-slate-300 rounded-md p-2" />
              <button type="button" className="w-full bg-blue-700 text-white font-bold py-3 rounded-md">Request Cab</button>
            </form>
          </div>
        </aside>
      </div>
    </main>
  );
}
