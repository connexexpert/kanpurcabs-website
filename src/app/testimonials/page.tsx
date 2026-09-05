import { Metadata } from "next";
import PageHero from "@/components/ui/PageHero";
import { Star, Quote } from "lucide-react";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Customer Reviews | KanpurCabs",
  description:
    "Read what our customers have to say about their car rental experience with KanpurCabs.",
};

const TESTIMONIALS = [
  {
    name: "Amit Sharma",
    location: "Kanpur",
    rating: 5,
    text: "Excellent service! I booked an Innova for a family trip to Lucknow. The car was very clean, and the driver was polite and arrived exactly on time. Highly recommend KanpurCabs.",
  },
  {
    name: "Priya Gupta",
    location: "Delhi",
    rating: 5,
    text: "Used their service for Kanpur airport drop. Very reliable. The driver helped with the luggage and drove safely. Pricing is also very reasonable compared to others.",
  },
  {
    name: "Rahul Verma",
    location: "Kanpur",
    rating: 4,
    text: "Good experience overall. Booked a Dzire for local usage. The AC was working perfectly which is a must in summers. Driver knew all the local routes.",
  },
  {
    name: "Neha Singh",
    location: "Mumbai",
    rating: 5,
    text: "Booked a tempo traveller for a family wedding in Kanpur. Managing transport for 12 people was seamless thanks to their professional service.",
  },
  {
    name: "Vikram Yadav",
    location: "Kanpur",
    rating: 5,
    text: "I regularly use KanpurCabs for my business travels to nearby cities. They have never disappointed. Invoicing is clear with no hidden charges.",
  },
  {
    name: "Ritu Agarwal",
    location: "Lucknow",
    rating: 4,
    text: "Very prompt customer service. I had to change my booking time at the last minute and they accommodated it without any hassle.",
  },
  {
    name: "Sanjay Mishra",
    location: "Kanpur",
    rating: 5,
    text: "Hired a luxury car for my daughter's wedding. The car was beautifully decorated and immaculate. Added a special touch to our event.",
  },
  {
    name: "Aditya Tiwari",
    location: "Varanasi",
    rating: 5,
    text: "Took a round trip from Kanpur to Ayodhya. The driver was very knowledgeable and doubled up as a guide for some places. Great journey!",
  },
];

export default function TestimonialsPage() {
  return (
    <div className="min-h-screen bg-slate-50 pb-16">
      <PageHero
        title="Customer Reviews"
        subtitle="Don't just take our word for it. Here's what our travelers have to say."
        breadcrumbs={[{ label: "Reviews" }]}
      />

      <div className="container mx-auto px-4 mt-12">
        {/* Rating Summary */}
        <div className="max-w-3xl mx-auto bg-white rounded-2xl shadow-sm border border-slate-100 p-8 mb-12 text-center">
          <div className="flex justify-center items-center gap-2 text-yellow-400 mb-2">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-8 h-8 fill-current" />
            ))}
          </div>
          <div className="text-4xl font-bold text-slate-900 mb-2">
            4.8 / 5.0
          </div>
          <p className="text-slate-600 font-medium">
            Based on 500+ reviews from verified customers
          </p>
        </div>

        {/* Reviews Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {TESTIMONIALS.map((review, i) => (
            <div
              key={i}
              className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 flex flex-col h-full relative overflow-hidden group hover:border-blue-200 transition-colors"
            >
              <Quote className="absolute top-4 right-4 w-12 h-12 text-slate-50 opacity-50 group-hover:text-blue-50 transition-colors z-0" />
              <div className="relative z-10 flex-grow">
                <div className="flex text-yellow-400 mb-4">
                  {[...Array(review.rating)].map((_, j) => (
                    <Star key={j} className="w-4 h-4 fill-current" />
                  ))}
                  {[...Array(5 - review.rating)].map((_, j) => (
                    <Star key={j} className="w-4 h-4 text-slate-200" />
                  ))}
                </div>
                <p className="text-slate-600 text-sm leading-relaxed mb-6">
                  "{review.text}"
                </p>
              </div>
              <div className="relative z-10 flex items-center mt-auto border-t border-slate-50 pt-4">
                <div className="w-10 h-10 bg-blue-100 text-blue-800 rounded-full flex items-center justify-center font-bold mr-3">
                  {review.name.charAt(0)}
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 text-sm">
                    {review.name}
                  </h4>
                  <p className="text-xs text-slate-500">{review.location}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-16 text-center">
          <h2 className="text-2xl font-bold text-slate-900 mb-4">
            Had a great trip with us?
          </h2>
          <Link
            href="/contact"
            className="inline-block px-8 py-3 bg-blue-800 text-white font-bold rounded-xl hover:bg-blue-900 transition-colors"
          >
            Share Your Experience
          </Link>
        </div>
      </div>
    </div>
  );
}
