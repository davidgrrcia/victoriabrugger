"use client";

import { Button } from "@/components/ui/button";
import { useState } from "react";

interface Tier {
  id: string;
  name: string;
  subtitle: string;
  price: number;
  features: string[];
  description: string;
  color: "red" | "blue" | "purple";
  recommended?: boolean;
}

const tiers: Tier[] = [
  {
    id: "lone-wolf",
    name: "LONE WOLF",
    subtitle: "El Despertar",
    price: 497,
    color: "blue",
    description:
      "For those who need to find their voice first. Walk alone until you're ready to run with the pack.",
    features: [
      "Core transformation modules",
      "Self-paced digital content",
      "Community forum access",
      "Monthly live Q&A sessions",
      "Lifetime content updates",
    ],
  },
  {
    id: "pack-runner",
    name: "PACK RUNNER",
    subtitle: "La Transformación",
    price: 997,
    color: "red",
    recommended: true,
    description:
      "For those ready to run with other wild women. Build your empire alongside your pack.",
    features: [
      "Everything in Lone Wolf",
      "Private pack community (Telegram)",
      "Weekly live masterclasses",
      "1-on-1 brand audit with Victoria",
      "Done-for-you content templates",
      "Direct access for 90 days",
      "Priority support",
    ],
  },
  {
    id: "alpha",
    name: "ALPHA",
    subtitle: "El Otro Yo",
    price: 2997,
    color: "purple",
    description:
      "For those who will lead the pack. Become the woman others follow into the unknown.",
    features: [
      "Everything in Pack Runner",
      "3 months 1-on-1 mentorship",
      "Personal brand strategy session",
      "Monthly strategy calls",
      "VIP retreat invitation",
      "Lifetime direct access",
      "Featured in pack spotlight",
      "Early access to all future offerings",
    ],
  },
];

export function PackTiers() {
  const [selectedTier, setSelectedTier] = useState<string | null>(
    "pack-runner"
  );

  const getColorClasses = (
    color: "red" | "blue" | "purple",
    type: "border" | "bg" | "text" | "glow"
  ) => {
    const colors = {
      red: {
        border: "border-red-600",
        bg: "bg-red-600",
        text: "text-red-500",
        glow: "shadow-red-600/50",
      },
      blue: {
        border: "border-blue-500",
        bg: "bg-blue-500",
        text: "text-blue-400",
        glow: "shadow-blue-500/50",
      },
      purple: {
        border: "border-purple-500",
        bg: "bg-purple-500",
        text: "text-purple-400",
        glow: "shadow-purple-500/50",
      },
    };
    return colors[color][type];
  };

  return (
    <section className="relative py-32 px-6 bg-black">
      <div className="max-w-7xl mx-auto">
        {/* Section header */}
        <div className="text-center mb-20 space-y-6">
          <div className="inline-block">
            <p className="text-xs text-red-500 font-mono tracking-[0.4em] uppercase mb-4">
              Choose Your Path
            </p>
            <div className="h-px w-48 bg-gradient-to-r from-transparent via-red-600 to-transparent mx-auto" />
          </div>

          <h2 className="text-5xl md:text-6xl font-bold text-white tracking-tight">
            FIND YOUR
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-blue-500">
              PACK POSITION
            </span>
          </h2>

          <p className="text-xl text-gray-400 max-w-2xl mx-auto font-light">
            Every wolf has her role. Every transformation has its price.
            <br />
            <span className="text-white">
              Which path calls to your wild heart?
            </span>
          </p>
        </div>

        {/* Tiers grid */}
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {tiers.map((tier) => (
            <div
              key={tier.id}
              className={`relative group ${
                tier.recommended ? "md:scale-105" : ""
              }`}
            >
              {/* Recommended badge */}
              {tier.recommended && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 z-20">
                  <div className="px-6 py-2 bg-red-600 text-white text-xs font-mono tracking-[0.2em] uppercase">
                    MOST CHOSEN
                  </div>
                </div>
              )}

              {/* Card */}
              <div
                className={`relative h-full border-2 ${getColorClasses(tier.color, "border")} bg-gray-900/50 backdrop-blur-sm p-8 transition-all duration-500 ${
                  selectedTier === tier.id
                    ? `shadow-2xl ${getColorClasses(tier.color, "glow")}`
                    : "hover:shadow-xl"
                }`}
                onMouseEnter={() => setSelectedTier(tier.id)}
              >
                {/* Tier name */}
                <div className="mb-8 space-y-2">
                  <h3
                    className={`text-3xl font-bold ${getColorClasses(tier.color, "text")} tracking-tight`}
                  >
                    {tier.name}
                  </h3>
                  <p className="text-gray-500 text-sm font-mono tracking-wide">
                    {tier.subtitle}
                  </p>
                </div>

                {/* Price */}
                <div className="mb-6">
                  <div className="flex items-baseline gap-2">
                    <span className="text-5xl font-bold text-white">
                      ${tier.price}
                    </span>
                  </div>
                  <p className="text-gray-500 text-xs mt-2 font-mono">
                    ONE-TIME INVESTMENT
                  </p>
                </div>

                {/* Description */}
                <p className="text-gray-400 text-sm leading-relaxed mb-8 min-h-[60px]">
                  {tier.description}
                </p>

                {/* Features */}
                <div className="space-y-3 mb-8">
                  {tier.features.map((feature, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <div
                        className={`w-1 h-1 ${getColorClasses(tier.color, "bg")} rounded-full mt-2 flex-shrink-0`}
                      />
                      <p className="text-gray-300 text-sm">{feature}</p>
                    </div>
                  ))}
                </div>

                {/* CTA Button */}
                <Button
                  type="button"
                  onClick={() => {
                    // TODO: Implement checkout
                    window.location.href = `#checkout-${tier.id}`;
                  }}
                  className={`w-full py-6 ${getColorClasses(tier.color, "bg")} text-white font-mono text-sm tracking-[0.2em] uppercase hover:opacity-90 transition-all duration-300 ${
                    tier.recommended ? "shadow-lg shadow-red-600/30" : ""
                  }`}
                >
                  CLAIM YOUR SPOT
                </Button>

                {/* Decorative corner */}
                <div
                  className={`absolute top-0 right-0 w-16 h-16 border-t-2 border-r-2 ${getColorClasses(tier.color, "border")} opacity-30`}
                />
                <div
                  className={`absolute bottom-0 left-0 w-16 h-16 border-b-2 border-l-2 ${getColorClasses(tier.color, "border")} opacity-30`}
                />
              </div>
            </div>
          ))}
        </div>

        {/* Bottom message */}
        <div className="text-center mt-20 space-y-6">
          <div className="inline-block p-6 border border-gray-800 bg-gray-900/30 backdrop-blur-sm max-w-2xl">
            <p className="text-gray-400 text-sm leading-relaxed">
              <span className="text-red-400 font-medium">
                Not sure which tier?
              </span>
              <br />
              Start with what feels right. You can always upgrade when you're
              ready to run faster with the pack.
            </p>
          </div>

          <div className="flex items-center justify-center gap-2 text-xs text-gray-600 font-mono">
            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
            <span>7 SPOTS LEFT TODAY</span>
          </div>
        </div>
      </div>
    </section>
  );
}
