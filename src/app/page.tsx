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
  title: "KanpurDrivers - Hire Verified Drivers for Your Car & Bike in Kanpur",
  description:
    "Hire background-verified, professional drivers and riders for your personal car or two-wheeler in Kanpur. Local hourly, outstation highway, and monthly chauffeurs. Punctual, 24/7 service.",
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
