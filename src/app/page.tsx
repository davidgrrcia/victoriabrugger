import { Footer } from "@/components/home/footer";
import { HeroHome } from "@/components/home/hero-home";
import { OfferingsDirectory } from "@/components/home/offerings-directory";

export default function Home() {
  return (
    <div className="min-h-screen bg-white text-gray-900 overflow-hidden">
      <HeroHome />
      <OfferingsDirectory />
      <Footer />
    </div>
  );
}
