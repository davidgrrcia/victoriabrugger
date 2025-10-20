"use client";

import { IncludedItem } from "@/components/shared/included-item";

export function PricingSection() {
  return (
    <section className="relative py-32 px-6 md:px-12 bg-white">
      <div className="max-w-3xl mx-auto">
        {/* Clear headline */}
        <div className="text-center mb-16">
          <p className="text-neutral-500 text-xs uppercase tracking-[0.3em] font-mono mb-4">
            Limited Pre-Sale Offer
          </p>
          <h2 className="text-4xl md:text-5xl font-serif font-light text-neutral-900 tracking-[-0.02em] mb-4">
            Your{" "}
            <span className="text-amber-700 italic font-extralight">
              Investment
            </span>
          </h2>
          <p className="text-neutral-600 text-lg">
            Join the first 10 and save $222 + get $1,500 in bonuses
          </p>
        </div>

        {/* Pricing card - prominent */}
        <div className="bg-gradient-to-br from-amber-50 to-white border-2 border-amber-700/30 rounded-sm p-10 md:p-12 mb-12 shadow-xl">
          <div className="text-center mb-10">
            <p className="text-neutral-500 text-sm mb-2">Regular Price</p>
            <p className="text-neutral-400 line-through text-3xl mb-4 font-serif">
              $999
            </p>
            <p className="text-7xl md:text-8xl font-serif font-light text-amber-700 mb-4">
              $777
            </p>
            <p className="text-neutral-700 font-medium text-lg">
              Pre-Sale Price — First 10 Only
            </p>
            <p className="text-neutral-500 text-sm mt-2">
              Save $222 + Get $1,500 in Exclusive Bonuses
            </p>
          </div>

          {/* What's included - very clear */}
          <div className="space-y-5 mb-10 max-w-lg mx-auto">
            <div className="border-t border-neutral-200 pt-6">
              <p className="text-neutral-700 font-medium mb-4 text-center">
                Everything You Get:
              </p>
            </div>
            <IncludedItem text="6 cinematic video modules (lifetime access)" />
            <IncludedItem text="Complete Notion workspace with all frameworks" />
            <IncludedItem text="50+ content templates & scripts you can copy" />
            <IncludedItem text="Private community of creators" />
            <IncludedItem text="All future updates & new modules free" />
            <div className="border-t border-amber-700/20 pt-5 mt-6">
              <p className="text-amber-800 font-medium mb-3 text-center text-sm uppercase tracking-wide">
                Pre-Sale Bonuses ($1,500 value):
              </p>
              <IncludedItem text="30-day private Telegram access to Victoria" />
              <IncludedItem text="Personal brand audit ($500 value)" />
              <IncludedItem text="Lifetime early access to all new content" />
            </div>
          </div>

          {/* CTA Button - very prominent */}
          <button
            type="button"
            onClick={() => {
              // TODO: Replace with actual Stripe/Gumroad/Hotmart checkout link
              window.location.href = "#checkout";
            }}
            className="w-full group relative px-12 py-6 bg-amber-700 text-white font-semibold text-xl rounded-sm hover:bg-amber-800 transition-all duration-300 hover:scale-[1.02] hover:shadow-2xl hover:shadow-amber-700/30"
          >
            <span className="relative z-10">
              Claim Your Spot — $777 Pre-Sale
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-amber-600 to-amber-800 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-sm" />
          </button>

          <div className="text-center mt-6 space-y-2">
            <p className="text-sm text-neutral-600">
              ✓ Instant access after payment
            </p>
            <p className="text-xs text-neutral-500">
              Secure checkout powered by Stripe
            </p>
          </div>
        </div>

        {/* Urgency - spots remaining */}
        <div className="text-center pt-8 border-t border-neutral-200">
          <p className="text-amber-800 font-medium text-base mb-4">
            ⚠️ Only 3 Pre-Sale Spots Remaining at This Price
          </p>
          <div className="flex gap-2 justify-center mb-4">
            {[...Array(10)].map((_, i) => (
              <div
                key={i}
                className={`w-10 h-3 rounded-sm ${
                  i < 7 ? "bg-neutral-200" : "bg-amber-700"
                }`}
              />
            ))}
          </div>
          <p className="text-neutral-600 text-sm">
            Price increases to $999 after first 10 members
          </p>
        </div>
      </div>
    </section>
  );
}
