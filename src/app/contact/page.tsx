import { Metadata } from "next";
import PageHero from "@/components/ui/PageHero";
import { MapPin, Phone, Mail, Clock, MessageSquare } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";

export const metadata: Metadata = {
  title: "Contact Us | KanpurCabs",
  description:
    "Get in touch with KanpurCabs for car rental inquiries, bookings, and support.",
};

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-slate-50 pb-16">
      <PageHero
        title="Contact Us"
        subtitle="We're here to help! Reach out to us for any queries or bookings."
        breadcrumbs={[{ label: "Contact" }]}
      />

      <div className="container mx-auto px-4 mt-12">
        <div className="grid lg:grid-cols-5 gap-12">
          {/* Contact Form */}
          <div className="lg:col-span-3 bg-white p-8 rounded-2xl shadow-sm border border-slate-100">
            <SectionHeading title="Send us a Message" className="mb-6" />
            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">
                    Full Name
                  </label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-800"
                    placeholder="John Doe"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-800"
                    placeholder="+91 98765 43210"
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-800"
                  placeholder="john@example.com"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">
                  Subject
                </label>
                <select className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-800 bg-white">
                  <option>General Inquiry</option>
                  <option>New Booking</option>
                  <option>Modify/Cancel Booking</option>
                  <option>Feedback/Complaint</option>
                  <option>Corporate Tie-up</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">
                  Message
                </label>
                <textarea
                  rows={5}
                  className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-800 resize-none"
                  placeholder="How can we help you?"
                ></textarea>
              </div>
              <button
                type="button"
                className="px-8 py-3 bg-blue-800 hover:bg-blue-900 text-white font-bold rounded-xl transition-colors"
              >
                Send Message
              </button>
            </form>
          </div>

          {/* Contact Info */}
          <div className="lg:col-span-2 space-y-6">
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 flex items-start space-x-4">
              <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center flex-shrink-0 text-blue-800">
                <MapPin className="w-6 h-6" />
              </div>
              <div>
                <h3 className="font-bold text-slate-900 text-lg mb-1">
                  Our Office
                </h3>
                <p className="text-slate-600">
                  123, Civil Lines, Near Mall Road, Kanpur, Uttar Pradesh 208001
                </p>
              </div>
            </div>

            <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 flex items-start space-x-4">
              <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center flex-shrink-0 text-blue-800">
                <Phone className="w-6 h-6" />
              </div>
              <div>
                <h3 className="font-bold text-slate-900 text-lg mb-1">
                  Phone & WhatsApp
                </h3>
                <p className="text-slate-600">+91 98765 43210</p>
                <p className="text-slate-600">+91 98765 01234</p>
              </div>
            </div>

            <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 flex items-start space-x-4">
              <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center flex-shrink-0 text-blue-800">
                <Mail className="w-6 h-6" />
              </div>
              <div>
                <h3 className="font-bold text-slate-900 text-lg mb-1">Email</h3>
                <p className="text-slate-600">info@kanpurcabs.com</p>
                <p className="text-slate-600">bookings@kanpurcabs.com</p>
              </div>
            </div>

            <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 flex items-start space-x-4">
              <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center flex-shrink-0 text-blue-800">
                <Clock className="w-6 h-6" />
              </div>
              <div>
                <h3 className="font-bold text-slate-900 text-lg mb-1">
                  Working Hours
                </h3>
                <p className="text-slate-600">24/7 Available for Bookings</p>
                <p className="text-slate-600">Office: Mon-Sat, 9AM to 8PM</p>
              </div>
            </div>
          </div>
        </div>

        {/* Map Placeholder */}
        <div className="mt-12 bg-slate-200 rounded-2xl h-96 flex flex-col items-center justify-center border border-slate-300">
          <MapPin className="w-12 h-12 text-slate-400 mb-2" />
          <span className="text-slate-500 font-medium">
            Interactive Map Coming Soon
          </span>
        </div>

        {/* Quick FAQs */}
        <div className="mt-16 bg-white p-8 rounded-2xl shadow-sm border border-slate-100">
          <SectionHeading title="Frequently Asked Questions" className="mb-8" />
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <h4 className="font-bold text-slate-900 mb-2 flex items-center">
                <MessageSquare className="w-4 h-4 mr-2 text-blue-800" /> How
                early should I book?
              </h4>
              <p className="text-slate-600 text-sm">
                We recommend booking at least 24 hours in advance for local
                trips and 48 hours for outstation journeys.
              </p>
            </div>
            <div>
              <h4 className="font-bold text-slate-900 mb-2 flex items-center">
                <MessageSquare className="w-4 h-4 mr-2 text-blue-800" /> Is
                advance payment required?
              </h4>
              <p className="text-slate-600 text-sm">
                A token advance of 20% is required to confirm the booking. The
                rest can be paid to the driver.
              </p>
            </div>
            <div>
              <h4 className="font-bold text-slate-900 mb-2 flex items-center">
                <MessageSquare className="w-4 h-4 mr-2 text-blue-800" /> What if
                I need to cancel?
              </h4>
              <p className="text-slate-600 text-sm">
                Cancellations made 24 hours before the trip are fully
                refundable. Late cancellations may incur a small fee.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
