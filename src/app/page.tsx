import HeroSection from "@/components/home/HeroSection";
import StatsCounter from "@/components/home/StatsCounter";
import ServicesGrid from "@/components/home/ServicesGrid";
import FleetShowcase from "@/components/home/FleetShowcase";
import PricingSection from "@/components/home/PricingSection";
import WhyChooseUs from "@/components/home/WhyChooseUs";
import PopularRoutes from "@/components/home/PopularRoutes";
import TourPackages from "@/components/home/TourPackages";
import HowItWorks from "@/components/home/HowItWorks";
import TestimonialsCarousel from "@/components/home/TestimonialsCarousel";
import FAQSection from "@/components/home/FAQSection";
import CTABanner from "@/components/home/CTABanner";

export const metadata = {
  title: "KanpurCabs - Reliable Car & Bike Rentals in Kanpur",
  description:
    "Book affordable car and bike rentals, outstation cabs, and local sightseeing tours in Kanpur with transparent pricing, verified drivers, and 24/7 service.",
};

export default function HomePage() {
  return (
    <main className="flex min-h-screen flex-col">
      <HeroSection />
      <StatsCounter />
      <ServicesGrid />
      <FleetShowcase />
      <PricingSection />
      <WhyChooseUs />
      <PopularRoutes />
      <TourPackages />
      <HowItWorks />
      <TestimonialsCarousel />
      <FAQSection />
      <CTABanner />
    </main>
  );
}
