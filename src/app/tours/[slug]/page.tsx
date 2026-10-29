import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { Clock, Map, Check, X, ShieldCheck, ArrowRight, Phone } from 'lucide-react';
import PageHero from '@/components/ui/PageHero';
import { SITE_CONFIG, getPhoneLink } from '@/lib/utils';

const tourData: Record<string, any> = {
  'kanpur-half-day': {
    name: 'Kanpur Half-Day City Sightseeing Chauffeur',
    duration: '4 Hours Duty',
    driverFee: '₹400',
    desc: 'Hire a knowledgeable chauffeur to drive your personal car for a relaxing half-day city tour covering top Kanpur landmarks.',
    itinerary: [
      { time: '09:00 AM', title: 'Pickup at Your Doorstep', desc: 'Driver reports in uniform at your Kanpur residence.' },
      { time: '09:30 AM', title: 'JK Temple (Radha Krishna)', desc: 'Explore the serene white marble architecture.' },
      { time: '11:00 AM', title: 'Allen Forest Zoo & Moti Jheel', desc: 'Lush greenery, scenic lake and park walk.' },
      { time: '12:30 PM', title: 'Shopping at Naveen Market / Mall Road', desc: 'Hassle-free parking while our chauffeur manages your car.' },
      { time: '01:00 PM', title: 'Drop Back Home', desc: 'Safe return in your personal car.' },
    ],
  },
  'kanpur-full-day': {
    name: 'Kanpur Full-Day City Sightseeing Chauffeur',
    duration: '8 Hours Duty',
    driverFee: '₹700',
    desc: 'Comprehensive full-day personal chauffeur duty for temples, Ganga Barrage, shopping bazaars, and family parks.',
    itinerary: [
      { time: '09:00 AM', title: 'Doorstep Pickup', desc: 'Driver reports at your Kanpur location.' },
      { time: '10:00 AM', title: 'Allen Forest Zoo & Nana Rao Park', desc: 'Morning nature and historical walk.' },
      { time: '01:00 PM', title: 'Lunch & Naveen Market', desc: 'Traditional Kanpur delicacies and bazaar shopping.' },
      { time: '03:30 PM', title: 'Ganga Barrage & Atal Ghat', desc: 'Scenic sunset view of Mother Ganga.' },
      { time: '05:00 PM', title: 'Drop at Residence', desc: 'Complete duty conclusion.' },
    ],
  },
  'bithoor-pilgrimage': {
    name: 'Bithoor Holy Pilgrimage Chauffeur',
    duration: '5 Hours Duty',
    driverFee: '₹500',
    desc: 'Spiritual journey to sacred Bithoor. Our driver knows all ghat access points, parking zones, and temple darshan timings.',
    itinerary: [
      { time: '07:00 AM', title: 'Departure from Kanpur', desc: 'Smooth drive along Ganga Barrage road in your car.' },
      { time: '08:00 AM', title: 'Brahmavart Ghat & Holy Snan', desc: 'Sacred riverbanks of River Ganga.' },
      { time: '09:30 AM', title: 'Valmiki Ashram & Sita Rasoi', desc: 'Historic epic heritage sites.' },
      { time: '11:30 AM', title: 'Dhruva Teela & Temples', desc: 'Spiritual darshan and temple prayers.' },
      { time: '12:00 PM', title: 'Safe Return to Kanpur', desc: 'Drop at your doorstep.' },
    ],
  },
  'ayodhya-prayagraj': {
    name: 'Ayodhya-Prayagraj Pilgrimage Highway Driver',
    duration: '2 Days / 1 Night',
    driverFee: '₹2,400',
    desc: 'A deeply spiritual pilgrimage covering Shri Ram Janmabhoomi in Ayodhya and sacred Triveni Sangam in Prayagraj in your own car.',
    itinerary: [
      { time: 'Day 1 Morning', title: 'Kanpur to Ayodhya', desc: 'Highway drive to Ayodhya (approx 4.5 hrs).' },
      { time: 'Day 1 Afternoon', title: 'Ayodhya Darshan', desc: 'Ram Mandir, Hanuman Garhi, and Kanak Bhawan.' },
      { time: 'Day 2 Morning', title: 'Ayodhya to Prayagraj', desc: 'Drive to Prayagraj (approx 4 hrs).' },
      { time: 'Day 2 Afternoon', title: 'Sangam Snan & Temples', desc: 'Holy dip at Triveni Sangam, Alopi Devi Mandir.' },
      { time: 'Day 2 Evening', title: 'Return to Kanpur', desc: 'Safe return in your personal vehicle.' },
    ],
  },
};

export function generateStaticParams() {
  return [
    { slug: 'kanpur-half-day' },
    { slug: 'kanpur-full-day' },
    { slug: 'bithoor-pilgrimage' },
    { slug: 'kanpur-religious' },
    { slug: 'kanpur-lucknow' },
    { slug: 'ayodhya-prayagraj' },
  ];
}

export default async function TourDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const tour =
    tourData[slug] || {
      ...tourData['kanpur-half-day'],
      name: slug.replace(/-/g, ' ').toUpperCase() + ' CHAUFFEUR',
      driverFee: '₹400',
    };

  return (
    <main className="bg-slate-50 min-h-screen pb-16">
      <PageHero
        title={tour.name}
        subtitle="Professional chauffeur for your personal vehicle"
        breadcrumbs={[
          { label: 'Home', href: '/' },
          { label: 'Sightseeing Chauffeurs', href: '/tours' },
          { label: tour.name, href: `/tours/${slug}` },
        ]}
      />

      <div className="container mx-auto px-4 py-12 flex flex-col lg:flex-row gap-12 max-w-6xl">
        <div className="lg:w-2/3">
          <div className="flex gap-4 mb-6">
            <span className="bg-blue-100 text-primary-900 px-3 py-1 rounded-full text-xs font-bold flex items-center gap-1.5">
              <Clock className="w-3.5 h-3.5" /> {tour.duration}
            </span>
            <span className="bg-emerald-100 text-emerald-800 px-3 py-1 rounded-full text-xs font-bold flex items-center gap-1.5">
              <ShieldCheck className="w-3.5 h-3.5" /> Police Verified Driver
            </span>
          </div>

          <p className="text-base text-slate-700 leading-relaxed mb-8">{tour.desc}</p>

          <h3 className="text-xl font-bold text-slate-900 mb-6 border-b border-slate-200 pb-2">
            Suggested Tour Schedule
          </h3>
          <div className="relative border-l-2 border-primary-200 ml-4 mb-12 space-y-8">
            {tour.itinerary.map((item: any, i: number) => (
              <div key={i} className="pl-6 relative">
                <div className="absolute w-3.5 h-3.5 bg-primary-800 rounded-full -left-[8px] top-1 border-2 border-white" />
                <span className="text-xs font-bold text-accent-600 block mb-0.5">{item.time}</span>
                <h4 className="font-bold text-slate-900 text-base mb-1">{item.title}</h4>
                <p className="text-slate-600 text-xs">{item.desc}</p>
              </div>
            ))}
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="bg-white p-5 rounded-2xl border border-slate-200">
              <h4 className="text-base font-bold text-slate-900 mb-3 flex items-center gap-2">
                <Check className="text-emerald-600 w-4 h-4" /> Service Inclusions
              </h4>
              <ul className="space-y-2 text-xs text-slate-600">
                <li>• Experienced chauffeur for your personal car</li>
                <li>• Police and identity verification</li>
                <li>• Doorstep reporting across Kanpur</li>
              </ul>
            </div>
            <div className="bg-white p-5 rounded-2xl border border-slate-200">
              <h4 className="text-base font-bold text-slate-900 mb-3 flex items-center gap-2">
                <X className="text-slate-400 w-4 h-4" /> Customer Direct Expenses
              </h4>
              <ul className="space-y-2 text-xs text-slate-600">
                <li>• Personal vehicle and fuel provided by customer</li>
                <li>• Monument/temple entry tickets & parking receipts</li>
                <li>• Actual toll plaza taxes</li>
              </ul>
            </div>
          </div>
        </div>

        <aside className="lg:w-1/3">
          <div className="bg-white rounded-2xl shadow-sm border border-slate-200 p-6 sticky top-24">
            <span className="text-[10px] text-slate-400 uppercase tracking-wider block mb-1">
              Driver Tariff
            </span>
            <div className="text-3xl font-extrabold text-primary-900 mb-1">{tour.driverFee}</div>
            <span className="text-xs text-slate-500 block mb-6">{tour.duration}</span>

            <Link
              href={`/booking?serviceType=Local+Hourly+Car+Driver&package=${encodeURIComponent(tour.name)}`}
              className="w-full py-3 bg-primary-900 hover:bg-primary-950 text-white font-bold rounded-xl text-center block text-xs transition-colors shadow mb-3"
            >
              Hire Chauffeur for This Tour
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
