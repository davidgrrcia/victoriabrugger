"use client";

import { IncludedItem } from "./included-item";

export function PricingSection() {
  return (
    <section className="relative py-24 px-6 md:px-12 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-2xl mx-auto text-center">
        <h2 className="text-5xl md:text-6xl font-serif font-semibold mb-8 text-gray-900 tracking-[-0.02em]">
          The{" "}
          <span className="text-amber-600 italic font-light">Investment</span>
        </h2>

        <div className="mb-12">
          <div className="inline-block">
            <p className="text-gray-500 line-through text-2xl mb-2">$999</p>
            <p className="text-6xl md:text-7xl font-serif text-amber-600 mb-4">
              $777
            </p>
            <p className="text-gray-600 text-sm uppercase tracking-widest">
              Pre-Sale Price • Only First 10 Spots
            </p>
          </div>
        </div>

        <div className="space-y-4 mb-12 text-gray-700 text-left max-w-md mx-auto">
          <IncludedItem text="6 cinematic video modules" />
          <IncludedItem text="Notion workspace with frameworks" />
          <IncludedItem text="Content templates & scripts" />
          <IncludedItem text="Private community access" />
          <IncludedItem text="Lifetime updates" />
        </div>

        {/* CTA Button */}
        <button
          type="button"
          onClick={() => {
            // TODO: Replace with actual Stripe/Gumroad/Hotmart checkout link
            window.location.href = "#checkout";
          }}
          className="group relative px-12 py-5 bg-amber-600 text-white font-medium text-lg rounded-sm hover:bg-amber-700 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-amber-600/20"
        >
          <span className="relative z-10">Enter the Transformation</span>
          <div className="absolute inset-0 bg-gradient-to-r from-amber-500 to-amber-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-sm" />
        </button>

        <p className="text-xs text-gray-500 mt-6">
          Secure payment via [Stripe/Gumroad] • Instant access
        </p>

        {/* Spots remaining */}
        <div className="mt-12 pt-8 border-t border-gray-200">
          <p className="text-amber-700 text-sm uppercase tracking-widest mb-2">
            Only 3 Pre-Sale Spots Remaining
          </p>
          <div className="flex gap-2 justify-center">
            {[...Array(10)].map((_, i) => (
              <div
                key={i}
                className={`w-8 h-2 rounded-full ${
                  i < 7 ? "bg-gray-300" : "bg-amber-600"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
