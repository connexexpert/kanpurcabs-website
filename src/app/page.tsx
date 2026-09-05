import HeroSection from "@/components/home/HeroSection";
import StatsCounter from "@/components/home/StatsCounter";
import ServicesGrid from "@/components/home/ServicesGrid";
import FleetShowcase from "@/components/home/FleetShowcase";
import WhyChooseUs from "@/components/home/WhyChooseUs";
import PopularRoutes from "@/components/home/PopularRoutes";
import TourPackages from "@/components/home/TourPackages";
import HowItWorks from "@/components/home/HowItWorks";
import TestimonialsCarousel from "@/components/home/TestimonialsCarousel";
import FAQSection from "@/components/home/FAQSection";
import CTABanner from "@/components/home/CTABanner";

export const metadata = {
  title: "KanpurCabs - Reliable Car Rental & Tourism Services in Kanpur",
  description:
    "Book affordable cabs for local travel, outstation trips, airport transfers, and sightseeing tours across Kanpur and Uttar Pradesh with KanpurCabs.",
};

export default function HomePage() {
  return (
    <main className="flex min-h-screen flex-col">
      <HeroSection />
      <StatsCounter />
      <ServicesGrid />
      <FleetShowcase />
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
