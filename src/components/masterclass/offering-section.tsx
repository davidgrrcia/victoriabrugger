import { OfferingItem } from "./offering-item";

export function OfferingSection() {
  return (
    <section className="relative py-32 px-6 md:px-12 bg-white">
      <div className="max-w-4xl mx-auto">
        {/* Clear headline with brand voice */}
        <div className="mb-20 space-y-6 text-center">
          <p className="text-neutral-500 text-xs uppercase tracking-[0.3em] font-mono">
            What You Get
          </p>
          <h2 className="text-4xl md:text-5xl font-serif font-light text-neutral-900 tracking-[-0.01em] leading-[1.2]">
            From Invisible to{" "}
            <span className="text-amber-700 italic font-extralight">
              Inevitable
            </span>
          </h2>
          <p className="text-neutral-600 text-lg font-light max-w-2xl mx-auto leading-[1.8]">
            Six modules that teach you to monetize your unique voice without
            selling out. Real frameworks, not theory.
          </p>
        </div>

        <div className="space-y-10 text-neutral-700">
          <OfferingItem
            title="Module 1: The Architecture of Myth"
            description="Build a brand that feels like destiny. The exact frameworks I used to turn philosophical writing into consistent $10K months while staying true to my voice."
          />
          <OfferingItem
            title="Module 2: Content That Creates Believers"
            description="Master the alchemy of creating posts that don't just get views—they create devoted followers. Your audience will feel like they discovered a secret."
          />
          <OfferingItem
            title="Module 3: Pricing Like a Deity"
            description="Learn to charge premium prices without compromise. Build offers that feel like initiations. Your people will thank you for the transformation."
          />
          <OfferingItem
            title="Module 4: The Cinematic Presence"
            description="Develop visual and written language so distinct your audience recognizes you instantly. Become unforgettable."
          />
          <OfferingItem
            title="Module 5: The Monetization System"
            description="Step-by-step breakdown of my exact sales process. From DMs to $5K close rates. No sleazy tactics—just authentic persuasion."
          />
          <OfferingItem
            title="Module 6: Scaling Without Selling Out"
            description="How to grow revenue while maintaining mystique. Build a sustainable brand that compounds over time."
          />
        </div>

        {/* Pre-sale bonus - clear value */}
        <div className="mt-24 p-10 border-2 border-amber-700/20 bg-amber-50/30 rounded-sm">
          <div className="space-y-6">
            <div className="flex items-center gap-4">
              <div className="w-1 h-16 bg-amber-700" />
              <div>
                <p className="text-xs text-amber-800 uppercase tracking-[0.3em] font-mono mb-1">
                  Pre-Sale Bonus
                </p>
                <h3 className="text-3xl font-serif font-light text-neutral-900">
                  First 10 Get Extra Access
                </h3>
                <p className="text-neutral-600 text-sm mt-2">
                  Worth $1,500+ — yours free
                </p>
              </div>
            </div>
            <ul className="space-y-5 text-neutral-700 text-base">
              <li className="flex items-start gap-4 border-l-2 border-amber-600/20 pl-6">
                <span className="text-amber-700 mt-1 font-mono text-sm font-medium">
                  01
                </span>
                <div>
                  <p className="font-medium text-neutral-900 mb-1">
                    30-Day Private Telegram Access
                  </p>
                  <p className="text-neutral-600 text-sm">
                    Direct access to me for questions, feedback, and strategy
                    sessions
                  </p>
                </div>
              </li>
              <li className="flex items-start gap-4 border-l-2 border-amber-600/20 pl-6">
                <span className="text-amber-700 mt-1 font-mono text-sm font-medium">
                  02
                </span>
                <div>
                  <p className="font-medium text-neutral-900 mb-1">
                    Personal Brand Audit ($500 value)
                  </p>
                  <p className="text-neutral-600 text-sm">
                    I&rsquo;ll dissect your current brand and show you exactly
                    what to fix
                  </p>
                </div>
              </li>
              <li className="flex items-start gap-4 border-l-2 border-amber-600/20 pl-6">
                <span className="text-amber-700 mt-1 font-mono text-sm font-medium">
                  03
                </span>
                <div>
                  <p className="font-medium text-neutral-900 mb-1">
                    Lifetime Early Access
                  </p>
                  <p className="text-neutral-600 text-sm">
                    First look at all future courses and content before public
                    release
                  </p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
