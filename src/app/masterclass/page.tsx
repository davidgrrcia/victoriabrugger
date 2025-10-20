import { Footer } from "@/components/home/footer";
import { ClosingSection } from "@/components/masterclass/closing-section";
import { HeroSection } from "@/components/masterclass/hero-section";
import { OfferingSection } from "@/components/masterclass/offering-section";
import { PricingSection } from "@/components/masterclass/pricing-section";
import { TestimonialSection } from "@/components/masterclass/testimonial-section";

export default function MasterclassPage() {
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
