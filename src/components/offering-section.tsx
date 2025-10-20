import { OfferingItem } from "./offering-item";

export function OfferingSection() {
  return (
    <section className="relative py-24 px-6 md:px-12 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-5xl md:text-6xl font-serif font-semibold text-center mb-16 text-gray-900 tracking-[-0.02em]">
          What You&rsquo;re{" "}
          <span className="text-amber-600 italic font-light">Becoming</span>
        </h2>

        <div className="space-y-8 text-gray-700">
          <OfferingItem
            title="The Architecture of Myth"
            description="Learn how to build a brand that feels like destiny, not marketing. You'll discover the frameworks I used to turn philosophical writing into $10K months."
          />
          <OfferingItem
            title="The Content Alchemy System"
            description="Master the art of creating content that doesn't just get views—it creates believers. Every post becomes evidence of transformation."
          />
          <OfferingItem
            title="Monetization Without Compromise"
            description="Price like a deity. Sell like a poet. Build offers that feel like initiations, not transactions."
          />
          <OfferingItem
            title="The Cinematic Presence Protocol"
            description="Develop a visual and written language so distinct that your audience recognizes you before they see your name."
          />
        </div>

        {/* Pre-sale bonus */}
        <div className="mt-16 p-8 border border-amber-600/30 bg-amber-50 rounded-lg">
          <p className="text-sm text-amber-700 uppercase tracking-widest mb-3">
            Pre-Sale Exclusive
          </p>
          <h3 className="text-2xl font-serif mb-4 text-gray-900">
            First 10 Members Receive
          </h3>
          <ul className="space-y-3 text-gray-700">
            <li className="flex items-start gap-3">
              <span className="text-amber-600 mt-1">→</span>
              <span>
                Private Telegram access for direct questions (30 days)
              </span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-amber-600 mt-1">→</span>
              <span>Personalized brand audit (worth $500)</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-amber-600 mt-1">→</span>
              <span>Early access to future course releases</span>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
