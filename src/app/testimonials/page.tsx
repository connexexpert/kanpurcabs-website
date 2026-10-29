import { Metadata } from "next";
import PageHero from "@/components/ui/PageHero";
import { Star, Quote, ShieldCheck } from "lucide-react";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Customer Reviews | KanpurDrivers",
  description:
    "Read what vehicle owners have to say about hiring verified drivers and riders with KanpurDrivers.",
};

const TESTIMONIALS = [
  {
    name: "Dr. Sanjeev Agarwal",
    location: "Civil Lines, Kanpur",
    service: "Monthly Permanent Chauffeur (Honda City)",
    rating: 5,
    text: "I hired a monthly chauffeur for my personal Honda City through KanpurDrivers. The driver is punctual, police-verified, and handles city traffic with immense patience. Excellent service for busy professionals.",
  },
  {
    name: "Ananya Tripathi",
    location: "Kakadeo, Kanpur",
    service: "Outstation Highway Driver (Innova Crysta)",
    rating: 5,
    text: "Booked an outstation driver for our family road trip from Kanpur to Ayodhya and Lucknow. The driver drove our Innova with utmost safety, navigated toll plazas smoothly, and was very respectful to my elderly parents.",
  },
  {
    name: "Mohit Kapoor",
    location: "Swaroop Nagar, Kanpur",
    service: "Local 8-Hour Driver (Maruti Dzire)",
    rating: 5,
    text: "Booked an 8-hour local package for a full day of wedding shopping and guest pickups. Zero parking headache in crowded Kanpur bazaars. Highly recommend their transparent hourly tariffs.",
  },
  {
    name: "Rohit Nigam",
    location: "Gumti No. 5, Kanpur",
    service: "Two-Wheeler On-Demand Rider (Activa 6G)",
    rating: 5,
    text: "Needed urgent legal documents delivered across town while I was tied up in meetings. Booked a 2-hour bike rider for my Activa. He picked up and delivered everything safely within 45 minutes.",
  },
  {
    name: "Shalini Saxena",
    location: "Mall Road, Kanpur",
    service: "Late Night Safe Drop (Creta Automatic)",
    rating: 5,
    text: "The night safe drop driver arrived within 40 minutes after our family dinner party. Drove our automatic car safely back to our residence. Clean uniform, polite, and completely dependable.",
  },
  {
    name: "Vikram Yadav",
    location: "Kidwai Nagar, Kanpur",
    service: "Outstation Driver (Delhi Highway Road Trip)",
    rating: 5,
    text: "I regularly use KanpurDrivers for highway trips to Delhi in my XUV700. Drivers are highly experienced on the Yamuna Expressway and make long journeys effortless.",
  },
];

export default function TestimonialsPage() {
  return (
    <div className="min-h-screen bg-slate-50 pb-16">
      <PageHero
        title="Customer Reviews"
        subtitle="Real stories from vehicle owners who trust KanpurDrivers for safe and reliable travel."
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Testimonials" }]}
      />

      <div className="container mx-auto px-4 mt-12 max-w-6xl">
        {/* Rating Overview */}
        <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-200 text-center max-w-xl mx-auto mb-12">
          <div className="text-5xl font-extrabold text-slate-900 mb-2">4.9</div>
          <div className="flex justify-center gap-1 mb-2">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                className="w-6 h-6 fill-accent-400 text-accent-400"
              />
            ))}
          </div>
          <p className="text-slate-500 text-xs sm:text-sm">
            Based on 95,000+ verified customer trips in Kanpur
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {TESTIMONIALS.map((t, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-2xl shadow-sm border border-slate-200 flex flex-col justify-between hover:shadow-md transition-shadow"
            >
              <div>
                <Quote className="w-8 h-8 text-primary-200 mb-4" />
                <div className="flex gap-1 mb-3">
                  {[...Array(t.rating)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-4 h-4 fill-accent-400 text-accent-400"
                    />
                  ))}
                </div>
                <p className="text-slate-600 text-xs sm:text-sm leading-relaxed mb-6 italic">
                  &ldquo;{t.text}&rdquo;
                </p>
              </div>

              <div className="border-t border-slate-100 pt-4">
                <p className="font-bold text-slate-900 text-sm">{t.name}</p>
                <p className="text-xs text-slate-500">{t.location}</p>
                <p className="text-[11px] text-primary-900 font-semibold mt-1 flex items-center gap-1">
                  <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
                  {t.service}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="bg-primary-950 text-white rounded-2xl p-8 text-center max-w-2xl mx-auto border border-primary-900">
          <h3 className="text-xl font-bold mb-2">
            Experience Safe & Verified Driver Service
          </h3>
          <p className="text-slate-300 text-xs sm:text-sm mb-6">
            Book a chauffeur for your personal car or a rider for your two-wheeler today.
          </p>
          <Link
            href="/booking"
            className="inline-flex px-6 py-3 bg-accent-500 hover:bg-accent-600 text-white font-bold rounded-xl text-xs transition-colors shadow"
          >
            Hire a Driver Online
          </Link>
        </div>
      </div>
    </div>
  );
}
