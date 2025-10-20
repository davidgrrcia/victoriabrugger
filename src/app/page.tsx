import { ClosingSection } from "@/components/closing-section";
import { Footer } from "@/components/footer";
import { HeroSection } from "@/components/hero-section";
import { OfferingSection } from "@/components/offering-section";
import { PricingSection } from "@/components/pricing-section";
import { TestimonialSection } from "@/components/testimonial-section";

export default function Home() {
  // Pre-sale end date (10 days from October 21, 2025)
  const presaleEndDate = new Date("2025-10-31T23:59:59");

  return (
    <div className="min-h-screen bg-white text-gray-900 overflow-hidden">
      <HeroSection endDate={presaleEndDate} />
      <OfferingSection />
      <TestimonialSection />
      <PricingSection />
      <ClosingSection />
      <Footer />
    </div>
  );
}
