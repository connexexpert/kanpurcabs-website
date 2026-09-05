import { Metadata } from 'next';
import { Heart, Sparkles, Image as ImageIcon } from 'lucide-react';
import PageHero from '@/components/ui/PageHero';

export const metadata: Metadata = {
  title: 'Wedding Car Rental Kanpur | Luxury Cars for Baraat',
  description: 'Book luxury cars for weddings in Kanpur. Decorated cars, Baraat transport, and guest transportation services.',
};

export default function WeddingCarRentalPage() {
  return (
    <main>
      <PageHero 
        title="Wedding Car Rental" 
        subtitle="Make your special day elegant and memorable"
        breadcrumbs={[{ label: 'Home', href: '/' }, { label: 'Services', href: '/services' }, { label: 'Wedding Rental', href: '/services/wedding-car-rental' }]}
      />
      
      <div className="container mx-auto px-4 py-12 lg:py-20 flex flex-col lg:flex-row gap-12">
        <div className="lg:w-2/3">
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-slate-900 mb-4 flex items-center gap-3">
              <Heart className="text-pink-600 w-8 h-8" /> Arrive in Style
            </h2>
            <p className="text-slate-600 text-lg mb-6 leading-relaxed">
              Your wedding is one of the most important days of your life. Make a grand entrance with our premium wedding car rental services in Kanpur. From luxury sedans for the bride and groom to spacious Tempo Travellers for the Baraat and guests, we provide flawless logistics for your big day.
            </p>
            
            <div className="grid sm:grid-cols-2 gap-6 mt-8">
              <div className="border border-pink-100 bg-pink-50 rounded-xl p-6">
                <Sparkles className="w-8 h-8 text-pink-600 mb-3" />
                <h3 className="font-bold text-lg text-slate-900 mb-2">Decorated Cars</h3>
                <p className="text-sm text-slate-600">We offer floral decoration services for the main wedding car, customized to match your wedding theme.</p>
              </div>
              <div className="border border-pink-100 bg-pink-50 rounded-xl p-6">
                <ImageIcon className="w-8 h-8 text-pink-600 mb-3" />
                <h3 className="font-bold text-lg text-slate-900 mb-2">Guest Transport</h3>
                <p className="text-sm text-slate-600">Mini-buses and SUVs to transport guests between the hotel, station, and wedding venue.</p>
              </div>
            </div>
          </section>
        </div>

        {/* Sidebar */}
        <aside className="lg:w-1/3">
          <div className="bg-white rounded-2xl shadow-xl border border-pink-100 p-6 sticky top-24">
            <h3 className="text-2xl font-bold text-slate-900 mb-6">Plan Wedding Transport</h3>
            
            <form className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">Wedding Date</label>
                <input type="date" className="w-full border border-slate-300 rounded-md p-2.5 focus:ring-2 focus:ring-pink-600 outline-none" />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">Vehicle Needed For</label>
                <select className="w-full border border-slate-300 rounded-md p-2.5 focus:ring-2 focus:ring-pink-600 outline-none bg-white">
                  <option>Bride/Groom (Luxury Car)</option>
                  <option>Guests (SUV/Tempo Traveller)</option>
                  <option>Both</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">Name</label>
                <input type="text" className="w-full border border-slate-300 rounded-md p-2.5 focus:ring-2 focus:ring-pink-600 outline-none" />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">Phone</label>
                <input type="tel" className="w-full border border-slate-300 rounded-md p-2.5 focus:ring-2 focus:ring-pink-600 outline-none" />
              </div>
              
              <button type="button" className="w-full bg-pink-600 hover:bg-pink-700 text-white font-bold py-3 px-4 rounded-md transition-colors mt-4">
                Get Wedding Quote
              </button>
            </form>
          </div>
        </aside>
      </div>
    </main>
  );
}
