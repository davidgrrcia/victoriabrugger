"use client";

import { useState } from "react";

const stages = [
  {
    id: "awakening",
    title: "THE AWAKENING",
    subtitle: "El Despertar",
    description:
      "You feel it, don't you? That restlessness. That knowing that you're meant for more. Society told you to be small, quiet, agreeable. But the wolf inside you is stirring.",
    icon: "🌙",
    color: "from-blue-600 to-blue-400",
  },
  {
    id: "untaming",
    title: "THE UNTAMING",
    subtitle: "La Liberación",
    description:
      "This is where you shed the domestication. The polite smiles. The dimming of your light. You remember your teeth, your claws, your howl. You remember you were born to hunt, not to be prey.",
    icon: "⚡",
    color: "from-red-600 to-red-400",
  },
  {
    id: "becoming",
    title: "THE BECOMING",
    subtitle: "La Transformación",
    description:
      "You build your empire on your own terms. Financially free. Sexually sovereign. Intellectually unstoppable. You're seductive without selling your soul. Powerful without becoming hard. You're the woman who left the cage.",
    icon: "🔥",
    color: "from-purple-600 to-red-500",
  },
  {
    id: "pack",
    title: "THE PACK",
    subtitle: "La Manada",
    description:
      "You don't run alone anymore. You've found your pack—wild women who refused to be tamed. Together, you're unstoppable. You lead, you follow, you hunt as one. This is belonging without compromise.",
    icon: "🐺",
    color: "from-red-600 to-blue-500",
  },
];

export function TransformationJourney() {
  const [activeStage, setActiveStage] = useState(0);

  return (
    <section className="relative py-32 px-6 bg-black overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-600/30 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-red-600/30 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-20 space-y-6">
          <div className="inline-block">
            <p className="text-xs text-red-500 font-mono tracking-[0.4em] uppercase mb-4">
              Your Journey
            </p>
            <div className="h-px w-48 bg-gradient-to-r from-transparent via-red-600 to-transparent mx-auto" />
          </div>

          <h2 className="text-5xl md:text-6xl font-bold text-white tracking-tight">
            THE PATH OF
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-purple-500">
              TRANSFORMATION
            </span>
          </h2>

          <p className="text-xl text-gray-400 max-w-2xl mx-auto font-light">
            This isn't a course. It's a metamorphosis.
          </p>
        </div>

        {/* Journey stages */}
        <div className="grid md:grid-cols-2 gap-12 mb-20">
          {stages.map((stage, index) => (
            <div
              key={stage.id}
              className={`group cursor-pointer transition-all duration-500 ${
                activeStage === index
                  ? "scale-105"
                  : "opacity-60 hover:opacity-100"
              }`}
              onClick={() => setActiveStage(index)}
              onKeyUp={(e) => {
                if (e.key === "Enter" || e.key === " ") {
                  setActiveStage(index);
                }
              }}
              role="button"
              tabIndex={0}
            >
              <div
                className={`relative p-8 border-2 ${
                  activeStage === index
                    ? "border-red-600 bg-gray-900/80"
                    : "border-gray-800 bg-gray-900/30"
                } backdrop-blur-sm transition-all duration-500`}
              >
                {/* Stage number */}
                <div className="absolute -top-6 -left-6 w-12 h-12 bg-black border-2 border-red-600 flex items-center justify-center">
                  <span className="text-red-500 font-mono font-bold">
                    0{index + 1}
                  </span>
                </div>

                {/* Icon */}
                <div className="text-5xl mb-6">{stage.icon}</div>

                {/* Title */}
                <div className="mb-4">
                  <h3
                    className={`text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r ${stage.color} mb-2`}
                  >
                    {stage.title}
                  </h3>
                  <p className="text-gray-500 text-sm font-mono tracking-wide">
                    {stage.subtitle}
                  </p>
                </div>

                {/* Description */}
                <p className="text-gray-300 text-sm leading-relaxed">
                  {stage.description}
                </p>

                {/* Decorative line */}
                <div
                  className={`mt-6 h-1 w-0 group-hover:w-full transition-all duration-1000 bg-gradient-to-r ${stage.color}`}
                />
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center">
          <div className="inline-block p-8 border border-gray-800 bg-gray-900/50 backdrop-blur-sm max-w-3xl">
            <p className="text-2xl text-white font-light mb-4">
              Ready to begin your transformation?
            </p>
            <p className="text-gray-400 text-sm">
              The pack is waiting. But only for those brave enough to answer the
              call.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
