"use client";

import { Logo } from "@/components/shared/logo";
import { Button } from "@/components/ui/button";
import { useState } from "react";

type Stage = "awakening" | "journey" | "manifesto" | "choose-pack" | "final";

interface StageNavigationProps {
  currentStage: Stage;
  answers: Record<string, string>;
  onStageChange: (stage: Stage) => void;
}

export function StageNavigation({
  currentStage,
  answers,
  onStageChange,
}: StageNavigationProps) {
  const [isTransitioning, setIsTransitioning] = useState(false);

  const goToNextStage = () => {
    setIsTransitioning(true);
    setTimeout(() => {
      const stages: Stage[] = [
        "awakening",
        "journey",
        "manifesto",
        "choose-pack",
        "final",
      ];
      const currentIndex = stages.indexOf(currentStage);
      if (currentIndex < stages.length - 1) {
        onStageChange(stages[currentIndex + 1]);
      }
      setIsTransitioning(false);
    }, 500);
  };

  const getStageProgress = () => {
    const stages: Stage[] = [
      "awakening",
      "journey",
      "manifesto",
      "choose-pack",
      "final",
    ];
    return {
      current: stages.indexOf(currentStage) + 1,
      total: stages.length,
    };
  };

  const progress = getStageProgress();

  return (
    <>
      {/* Transition overlay */}
      {isTransitioning && (
        <div className="fixed inset-0 bg-black z-[100] animate-in fade-in duration-500" />
      )}

      {/* Logo - Top Left */}
      <div className="fixed top-8 left-8 z-50">
        <Logo variant="minimal" />
      </div>

      {/* Progress indicator */}
      <div className="fixed top-8 right-8 z-50">
        <div className="flex items-center gap-2">
          {Array.from({ length: progress.total }).map((_, i) => (
            <div
              key={i}
              className={`h-1 transition-all duration-500 rounded-full ${
                i < progress.current
                  ? "w-12 bg-red-600"
                  : i === progress.current
                    ? "w-12 bg-red-600/50"
                    : "w-8 bg-gray-800"
              }`}
            />
          ))}
        </div>
        <p className="text-gray-600 text-xs font-mono mt-2 text-right">
          {progress.current} / {progress.total}
        </p>
      </div>

      {/* Stage: Awakening */}
      {currentStage === "awakening" && (
        <div className="fixed inset-0 flex items-center justify-center bg-black animate-in fade-in duration-1000">
          <div className="absolute inset-0 opacity-20">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-br from-blue-900/30 to-blue-600/10 rounded-full blur-3xl animate-pulse" />
          </div>

          <div className="relative z-10 max-w-4xl mx-auto px-6 text-center space-y-16">
            <div className="space-y-8">
              <p className="text-xs text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400 font-black tracking-[0.5em] uppercase">
                STAGE 01 › EL DESPERTAR
              </p>

              <h1 className="text-7xl md:text-9xl font-black text-white tracking-tighter leading-[0.85] uppercase">
                THE
                <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 via-pink-500 to-red-500">
                  AWAKENING
                </span>
              </h1>

              <div className="text-6xl my-12">🌙</div>

              <p className="text-xl text-gray-300 font-medium leading-relaxed max-w-3xl mx-auto">
                You feel it, don't you? That restlessness. That knowing that
                you're meant for more.
              </p>

              <p className="text-lg text-gray-400 leading-relaxed max-w-2xl mx-auto">
                Society told you to be small, quiet, agreeable.
                <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-red-400 font-bold">
                  But the she-wolf inside you is stirring.
                </span>
              </p>
            </div>

            <Button
              onClick={goToNextStage}
              className="group px-16 py-8 bg-gradient-to-r from-purple-600 via-pink-600 to-red-600 hover:from-purple-700 hover:via-pink-700 hover:to-red-700 text-white text-lg font-bold tracking-wide uppercase transition-all duration-500 rounded-full shadow-lg shadow-purple-600/30 hover:shadow-pink-600/50"
              type="button"
            >
              <span>Continue →</span>
            </Button>
          </div>
        </div>
      )}

      {/* Stage: Journey (4 Transformations) */}
      {currentStage === "journey" && (
        <div className="fixed inset-0 flex items-center justify-center bg-black animate-in fade-in duration-1000">
          <div className="absolute inset-0 opacity-20">
            <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-red-600/20 rounded-full blur-3xl animate-pulse" />
            <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-600/20 rounded-full blur-3xl animate-pulse delay-1000" />
          </div>

          <div className="relative z-10 max-w-5xl mx-auto px-6 text-center space-y-16">
            <div className="space-y-6">
              <p className="text-xs text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-red-400 font-black tracking-[0.5em] uppercase">
                STAGE 02 › LA TRANSFORMACIÓN
              </p>

              <h2 className="text-6xl md:text-7xl font-black text-white tracking-tighter leading-[0.9] uppercase">
                YOUR PATH OF
                <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 via-pink-500 to-red-500">
                  TRANSFORMATION
                </span>
              </h2>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
              {[
                { icon: "🌙", title: "AWAKENING", subtitle: "El Despertar" },
                { icon: "⚡", title: "UNTAMING", subtitle: "La Liberación" },
                {
                  icon: "🔥",
                  title: "BECOMING",
                  subtitle: "La Transformación",
                },
                { icon: "🐺", title: "THE PACK", subtitle: "La Manada" },
              ].map((stage, i) => (
                <div
                  key={i}
                  className="p-6 border-2 border-gray-800 bg-gray-900/30 backdrop-blur-sm hover:border-red-600 transition-all duration-500 rounded-3xl"
                >
                  <div className="text-5xl mb-4">{stage.icon}</div>
                  <h3 className="text-white font-black text-sm mb-2 tracking-wide uppercase">
                    {stage.title}
                  </h3>
                  <p className="text-gray-500 text-xs font-bold uppercase tracking-wider">
                    {stage.subtitle}
                  </p>
                </div>
              ))}
            </div>

            <p className="text-gray-400 text-lg max-w-2xl mx-auto font-medium">
              This isn't a course. It's a metamorphosis.
              <br />
              <span className="text-white font-bold">
                Each stage unlocks the next level of your power.
              </span>
            </p>

            <Button
              onClick={goToNextStage}
              className="px-16 py-8 bg-red-600 hover:bg-red-700 text-white text-lg font-bold tracking-wide uppercase transition-all duration-500 rounded-full shadow-lg shadow-red-600/30 hover:shadow-red-600/50"
              type="button"
            >
              <span>I'm Ready →</span>
            </Button>
          </div>
        </div>
      )}

      {/* Stage: Manifesto */}
      {currentStage === "manifesto" && (
        <div className="fixed inset-0 flex items-center justify-center bg-gradient-to-b from-black via-gray-900 to-black animate-in fade-in duration-1000">
          <div className="relative z-10 max-w-3xl mx-auto px-6 space-y-12 overflow-y-auto max-h-screen py-20">
            <div className="text-center space-y-6">
              <p className="text-xs text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400 font-black tracking-[0.5em] uppercase">
                STAGE 03 › WHO THIS IS FOR
              </p>

              <h2 className="text-6xl md:text-7xl font-black text-white tracking-tighter leading-[0.9] uppercase">
                ARE YOU A
                <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 via-pink-500 to-red-500">
                  SHE-WOLF?
                </span>
              </h2>
            </div>

            <div className="space-y-6">
              {[
                "For the woman who moved to another country alone. Who learned she didn't need anyone's permission. Who realized she could build her own empire.",
                "For the woman who refused to choose between intelligence and sensuality. Who knows she can be seductive without selling her body. Who refuses to follow stereotypes written by fear.",
                "For the woman who has a wolf inside. Society tried to domesticate her, tame her, make her small. But she remembers. And she's ready to run wild again.",
                "For the woman who craves financial freedom. Who wants to build something that's truly hers. Who's done compromising her power for comfort.",
              ].map((text, i) => (
                <div
                  key={i}
                  className="p-6 border-l-4 border-red-600 bg-gray-900/50 backdrop-blur-sm rounded-2xl"
                >
                  <p className="text-gray-300 leading-relaxed font-medium">
                    {text}
                  </p>
                </div>
              ))}
            </div>

            <div className="text-center pt-8">
              <p className="text-red-400 font-bold text-lg mb-4 uppercase tracking-wide">
                If this resonates...
              </p>
              <p className="text-gray-400 mb-8 font-medium">
                You're already part of the pack. You just need to claim it.
              </p>

              <Button
                onClick={goToNextStage}
                className="px-16 py-8 bg-red-600 hover:bg-red-700 text-white text-lg font-bold tracking-wide uppercase transition-all duration-500 rounded-full shadow-lg shadow-red-600/30 hover:shadow-red-600/50"
                type="button"
              >
                <span>Choose My Path →</span>
              </Button>
            </div>
          </div>
        </div>
      )}

      {/* Stage: Choose Pack (Pricing) */}
      {currentStage === "choose-pack" && (
        <div className="fixed inset-0 flex items-center justify-center bg-black animate-in fade-in duration-1000 overflow-y-auto">
          <div className="relative z-10 w-full max-w-7xl mx-auto px-6 py-20">
            <div className="text-center mb-12 space-y-6">
              <p className="text-xs text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400 font-black tracking-[0.5em] uppercase">
                STAGE 04 › CHOOSE YOUR POWER
              </p>

              <h2 className="text-6xl md:text-7xl font-black text-white tracking-tighter leading-[0.9] uppercase">
                CLAIM YOUR
                <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 via-pink-500 to-red-500">
                  PACK POSITION
                </span>
              </h2>

              <p className="text-lg text-gray-400 font-bold uppercase tracking-wide">
                Every she-wolf has her role › Which path calls to you?
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto mb-12">
              {[
                {
                  name: "WILD WOMAN",
                  subtitle: "El Despertar",
                  price: 497,
                  color: "purple",
                  features: [
                    "Core transformation modules",
                    "Self-paced digital content",
                    "Sisterhood forum access",
                    "Monthly live gatherings",
                    "Lifetime updates",
                  ],
                },
                {
                  name: "UNTAMED",
                  subtitle: "La Transformación",
                  price: 997,
                  color: "pink",
                  recommended: true,
                  features: [
                    "Everything in Wild Woman",
                    "Private she-wolf community",
                    "Weekly live masterclasses",
                    "Personal brand audit",
                    "90 days direct access to Victoria",
                  ],
                },
                {
                  name: "SOVEREIGN",
                  subtitle: "El Otro Yo",
                  price: 2997,
                  color: "red",
                  features: [
                    "Everything in Untamed",
                    "3 months 1-on-1 with Victoria",
                    "Personal empire strategy",
                    "VIP she-wolf retreat",
                    "Lifetime inner circle access",
                  ],
                },
              ].map((tier, i) => (
                <div
                  key={i}
                  className={`relative p-8 border-2 ${
                    tier.color === "purple"
                      ? "border-purple-500"
                      : tier.color === "pink"
                        ? "border-pink-500"
                        : "border-red-600"
                  } ${
                    tier.recommended
                      ? "bg-gradient-to-br from-pink-900/20 to-black md:scale-105"
                      : "bg-gray-900/50"
                  } backdrop-blur-sm transition-all duration-500 hover:scale-105 rounded-3xl`}
                >
                  {tier.recommended && (
                    <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-6 py-2 bg-gradient-to-r from-pink-600 to-red-600 text-white text-xs font-black tracking-[0.3em] uppercase rounded-full">
                      › MOST POWERFUL ‹
                    </div>
                  )}

                  <div className="space-y-6">
                    <div>
                      <h3
                        className={`text-3xl font-black uppercase tracking-tighter ${
                          tier.color === "purple"
                            ? "text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400"
                            : tier.color === "pink"
                              ? "text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-red-400"
                              : "text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-pink-500"
                        }`}
                      >
                        {tier.name}
                      </h3>
                      <p className="text-gray-500 text-xs font-bold mt-2 uppercase tracking-wider">
                        {tier.subtitle}
                      </p>
                    </div>

                    <div>
                      <div className="text-5xl font-black text-white tracking-tight">
                        ${tier.price}
                      </div>
                      <p className="text-gray-500 text-xs mt-2 font-bold uppercase tracking-wider">
                        ONE-TIME INVESTMENT
                      </p>
                    </div>

                    <div className="space-y-3">
                      {tier.features.map((feature, j) => (
                        <div key={j} className="flex items-start gap-3">
                          <div
                            className={`w-1 h-1 ${
                              tier.color === "purple"
                                ? "bg-purple-500"
                                : tier.color === "pink"
                                  ? "bg-pink-500"
                                  : "bg-red-600"
                            } rounded-full mt-2 flex-shrink-0`}
                          />
                          <p className="text-gray-300 text-sm">{feature}</p>
                        </div>
                      ))}
                    </div>

                    <Button
                      onClick={() => {
                        // TODO: Implement checkout
                        window.location.href = `#checkout-${tier.name.toLowerCase()}`;
                      }}
                      className={`w-full py-6 ${
                        tier.color === "purple"
                          ? "bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 shadow-lg shadow-purple-500/30 hover:shadow-purple-500/50"
                          : tier.color === "pink"
                            ? "bg-gradient-to-r from-pink-600 to-red-600 hover:from-pink-700 hover:to-red-700 shadow-lg shadow-pink-500/30 hover:shadow-pink-500/50"
                            : "bg-gradient-to-r from-red-600 to-pink-600 hover:from-red-700 hover:to-pink-700 shadow-lg shadow-red-600/30 hover:shadow-red-600/50"
                      } text-white font-black text-sm tracking-[0.3em] uppercase transition-all duration-300 rounded-full`}
                      type="button"
                    >
                      › CLAIM YOUR POWER ‹
                    </Button>
                  </div>
                </div>
              ))}
            </div>

            <div className="text-center">
              <Button
                onClick={goToNextStage}
                className="px-12 py-6 bg-transparent border-2 border-gray-800 text-gray-400 hover:border-red-600 hover:text-white font-mono text-sm tracking-[0.2em] uppercase transition-all duration-500 rounded-full"
                type="button"
              >
                <span>See Final Message →</span>
              </Button>
            </div>
          </div>
        </div>
      )}

      {/* Stage: Final Choice */}
      {currentStage === "final" && (
        <div className="fixed inset-0 flex items-center justify-center bg-black animate-in fade-in duration-1000">
          <div className="absolute inset-0">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-red-600/20 rounded-full blur-3xl animate-pulse" />
          </div>

          <div className="relative z-10 max-w-4xl mx-auto px-6 text-center space-y-16">
            <div className="space-y-8">
              <h2 className="text-7xl md:text-8xl font-black text-white tracking-tighter leading-[0.85] uppercase">
                YOUR PACK
                <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 via-pink-500 to-red-500">
                  IS WAITING
                </span>
              </h2>

              <div className="flex gap-2 justify-center">
                <div className="h-1 w-32 bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 rounded-full" />
                <div className="h-1 w-16 bg-gradient-to-r from-pink-500 to-red-500 rounded-full opacity-60" />
                <div className="h-1 w-8 bg-red-500 rounded-full opacity-30" />
              </div>

              <p className="text-xl text-gray-300 font-medium leading-relaxed">
                You've made it this far because your she-wolf knows.
                <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-400 to-red-400 font-bold text-2xl">
                  It's time to stop hiding her.
                </span>
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 max-w-2xl mx-auto">
              <div className="p-8 border-2 border-gray-800 bg-gray-900/30 rounded-3xl">
                <div className="text-5xl mb-4">😴</div>
                <h3 className="text-2xl text-gray-400 font-black mb-4 uppercase tracking-tight">
                  Stay Domesticated
                </h3>
                <p className="text-gray-500 text-sm font-medium">
                  Keep playing it safe. Keep making yourself smaller. Keep
                  wondering "what if?"
                </p>
              </div>

              <div className="p-8 border-2 border-red-600 bg-gradient-to-br from-red-900/20 to-black group hover:scale-105 transition-all duration-500 rounded-3xl">
                <div className="text-5xl mb-4">🐺</div>
                <h3 className="text-2xl text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400 font-black mb-4 uppercase tracking-tight">
                  Run With She-Wolves
                </h3>
                <p className="text-gray-300 text-sm font-medium">
                  Reclaim your wild feminine power. Build your empire. Become
                  the woman you were always meant to be.
                </p>
              </div>
            </div>

            <div className="space-y-6">
              <Button
                onClick={() => onStageChange("choose-pack")}
                className="px-16 py-8 bg-gradient-to-r from-purple-600 via-pink-600 to-red-600 hover:from-purple-700 hover:via-pink-700 hover:to-red-700 text-white text-xl font-black tracking-[0.2em] uppercase transition-all duration-500 hover:shadow-2xl hover:shadow-pink-600/50 rounded-full"
                type="button"
              >
                <span>› CLAIM YOUR POWER ‹</span>
              </Button>

              <p className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400 text-xs font-bold uppercase tracking-wider">
                "A she-wolf doesn't beg for permission."
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
