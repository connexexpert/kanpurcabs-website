import { Metadata } from "next";
import PageHero from "@/components/ui/PageHero";
import SectionHeading from "@/components/ui/SectionHeading";
import { Users, Shield, Target, Award, MapPin } from "lucide-react";

export const metadata: Metadata = {
  title: "About Us | KanpurCabs",
  description:
    "Learn more about KanpurCabs, your reliable car rental service in Kanpur with over 10 years of experience.",
};

const stats = [
  { label: "Years Experience", value: "10+" },
  { label: "Happy Customers", value: "5000+" },
  { label: "Completed Trips", value: "15000+" },
  { label: "Vehicles in Fleet", value: "50+" },
];

const values = [
  {
    icon: Shield,
    title: "Safety First",
    description:
      "All our vehicles are regularly maintained and sanitized. Our drivers are professionally trained and background-checked.",
  },
  {
    icon: Users,
    title: "Customer Focus",
    description:
      "We believe in putting our customers first, offering 24/7 support and flexible booking options.",
  },
  {
    icon: Target,
    title: "Transparency",
    description:
      "No hidden charges. What you see is what you pay. We provide clear breakdowns of all costs.",
  },
  {
    icon: Award,
    title: "Reliability",
    description:
      "On-time pickups and well-maintained cars ensure you reach your destination without hassle.",
  },
  {
    icon: MapPin,
    title: "Local Expertise",
    description:
      "Our drivers know Kanpur and Uttar Pradesh routes inside out, ensuring smooth journeys.",
  },
];

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      <PageHero
        title="About KanpurCabs"
        subtitle="Your Trusted Travel Partner in Uttar Pradesh Since 2015"
        breadcrumbs={[{ label: "About Us" }]}
      />

      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <SectionHeading title="Our Story" className="mb-6" />
              <div className="prose text-slate-600 max-w-none space-y-4">
                <p>
                  Founded in 2015, KanpurCabs started with a simple mission: to
                  provide safe, reliable, and affordable car rental services in
                  Kanpur and throughout Uttar Pradesh.
                </p>
                <p>
                  What began as a modest operation with just 5 cars has now
                  grown into a comprehensive fleet of over 50 vehicles, ranging
                  from economical hatchbacks to luxurious sedans and spacious
                  SUVs.
                </p>
                <p>
                  Over the past decade, we have proudly served thousands of
                  customers, facilitating everything from daily local commutes
                  and airport transfers to outstation tours and corporate
                  travel. Our commitment to excellence and customer satisfaction
                  has made us one of the most trusted names in Kanpur's
                  transportation sector.
                </p>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {stats.map((stat, index) => (
                <div
                  key={index}
                  className="bg-slate-50 p-6 rounded-2xl text-center border border-slate-100"
                >
                  <div className="text-3xl font-bold text-blue-800 mb-2">
                    {stat.value}
                  </div>
                  <div className="text-sm text-slate-600 font-medium">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-slate-50">
        <div className="container mx-auto px-4">
          <SectionHeading
            title="Our Core Values"
            subtitle="The principles that guide our service and shape your experience"
            className="mb-12"
          />
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100"
              >
                <div className="w-12 h-12 bg-blue-100 text-blue-800 rounded-xl flex items-center justify-center mb-4">
                  <value.icon className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">
                  {value.title}
                </h3>
                <p className="text-slate-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-blue-900 text-white text-center">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Book Your Ride?
          </h2>
          <p className="text-blue-200 mb-8 max-w-2xl mx-auto text-lg">
            Experience the comfort and reliability of KanpurCabs. Book your next
            journey with us today.
          </p>
          <a
            href="/cars"
            className="inline-flex items-center justify-center px-8 py-4 text-base font-bold text-blue-900 bg-white rounded-full hover:bg-slate-50 transition-colors"
          >
            Explore Our Fleet
          </a>
        </div>
      </section>
    </div>
  );
}
