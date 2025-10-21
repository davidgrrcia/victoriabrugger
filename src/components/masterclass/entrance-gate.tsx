"use client";

import { Logo } from "@/components/shared/logo";
import { Button } from "@/components/ui/button";
import { useState } from "react";

interface EntranceGateProps {
  onComplete: (answers: Record<string, string>) => void;
}

export function EntranceGate({ onComplete }: EntranceGateProps) {
  const [stage, setStage] = useState<
    "initial" | "question1" | "question2" | "question3" | "unlocking"
  >("initial");
  const [answers, setAnswers] = useState<Record<string, string>>({});

  const handleAnswer = ({
    question,
    answer,
  }: {
    question: string;
    answer: string;
  }) => {
    setAnswers((prev) => ({ ...prev, [question]: answer }));

    if (stage === "initial") {
      setStage("question1");
    } else if (stage === "question1") {
      setStage("question2");
    } else if (stage === "question2") {
      setStage("question3");
    } else if (stage === "question3") {
      setStage("unlocking");
      setTimeout(() => {
        onComplete(answers);
      }, 2000);
    }
  };

  if (stage === "unlocking") {
    return (
      <div className="fixed inset-0 bg-black flex items-center justify-center z-50">
        <div className="text-center space-y-8 animate-pulse">
          <div className="w-32 h-32 mx-auto relative">
            <div className="absolute inset-0 border-4 border-red-600/30 rounded-full animate-ping" />
            <div className="absolute inset-0 border-4 border-red-600 rounded-full" />
          </div>
          <p className="text-white font-black text-sm tracking-[0.4em] uppercase">
            › Accessing your path ‹
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="fixed inset-0 bg-black flex items-center justify-center z-50 overflow-hidden">
      {/* Logo - Top Left */}
      <div className="fixed top-8 left-8 z-50">
        <Logo variant="minimal" />
      </div>

      {/* Animated background elements */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-red-600/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-600/20 rounded-full blur-3xl animate-pulse delay-1000" />
      </div>

      <div className="relative z-10 max-w-2xl mx-auto px-6 text-center space-y-12">
        {stage === "initial" && (
          <div className="space-y-12 animate-in fade-in duration-1000">
            <div className="space-y-6">
              <h1 className="text-8xl md:text-9xl font-black text-white tracking-tighter uppercase">
                STOP
              </h1>
              <div className="flex gap-2 justify-center">
                <div className="h-1 w-32 bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 rounded-full" />
                <div className="h-1 w-16 bg-gradient-to-r from-pink-500 to-red-500 rounded-full opacity-60" />
                <div className="h-1 w-8 bg-red-500 rounded-full opacity-30" />
              </div>
            </div>

            <div className="space-y-8">
              <p className="text-2xl md:text-3xl text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-400 to-red-400 font-bold leading-relaxed uppercase tracking-wide">
                This isn't for everyone
              </p>

              <p className="text-base text-gray-300 max-w-lg mx-auto leading-relaxed font-medium">
                Before you enter, I need to know:
                <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-red-400 font-bold text-lg">
                  Are you ready to meet your she-wolf?
                </span>
              </p>
            </div>

            <div className="pt-8">
              <Button
                onClick={() =>
                  handleAnswer({ question: "ready", answer: "yes" })
                }
                className="group relative px-12 py-6 bg-transparent border-2 border-red-600 text-red-500 font-mono text-sm tracking-[0.2em] uppercase hover:bg-red-600 hover:text-white transition-all duration-500 rounded-full"
                type="button"
              >
                <span className="relative z-10">I'm Ready</span>
                <div className="absolute inset-0 bg-red-600 scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left rounded-full" />
              </Button>
            </div>
          </div>
        )}

        {stage === "question1" && (
          <div className="space-y-12 animate-in fade-in duration-1000">
            <div className="space-y-4">
              <p className="text-xs text-gray-500 font-black tracking-[0.5em] uppercase">
                QUESTION 1 › 3
              </p>
              <h2 className="text-4xl md:text-5xl text-white font-black leading-tight uppercase tracking-tight">
                What are you running from?
              </h2>
            </div>

            <div className="grid gap-4 max-w-md mx-auto">
              {[
                {
                  id: "mediocrity",
                  label: "A mediocre life that feels like slow death",
                },
                {
                  id: "dependence",
                  label: "Depending on someone else for freedom",
                },
                { id: "silence", label: "Silencing my voice to fit in" },
                { id: "cage", label: "The cage society built for me" },
              ].map((option) => (
                <button
                  key={option.id}
                  type="button"
                  onClick={() =>
                    handleAnswer({
                      question: "running_from",
                      answer: option.id,
                    })
                  }
                  className="group relative px-8 py-4 bg-gray-900/50 border border-gray-800 text-gray-300 text-left hover:border-red-600 hover:bg-gray-900 transition-all duration-300 rounded-2xl"
                >
                  <span className="relative z-10 text-sm font-medium">
                    {option.label}
                  </span>
                  <div className="absolute left-0 top-0 bottom-0 w-1 bg-red-600 scale-y-0 group-hover:scale-y-100 transition-transform duration-300 origin-top rounded-l-2xl" />
                </button>
              ))}
            </div>
          </div>
        )}

        {stage === "question2" && (
          <div className="space-y-12 animate-in fade-in duration-1000">
            <div className="space-y-4">
              <p className="text-xs text-gray-500 font-black tracking-[0.5em] uppercase">
                QUESTION 2 › 3
              </p>
              <h2 className="text-4xl md:text-5xl text-white font-black leading-tight uppercase tracking-tight">
                What transformation calls to you?
              </h2>
            </div>

            <div className="grid gap-4 max-w-md mx-auto">
              {[
                {
                  id: "financial",
                  label: "Financial freedom, no more compromises",
                },
                {
                  id: "authentic",
                  label: "Living authentically, unapologetically",
                },
                { id: "powerful", label: "Reclaiming my power and voice" },
                { id: "pack", label: "Finding my pack of wild women" },
              ].map((option) => (
                <button
                  key={option.id}
                  type="button"
                  onClick={() =>
                    handleAnswer({
                      question: "transformation",
                      answer: option.id,
                    })
                  }
                  className="group relative px-8 py-4 bg-gray-900/50 border border-gray-800 text-gray-300 text-left hover:border-blue-500 hover:bg-gray-900 transition-all duration-300 rounded-2xl"
                >
                  <span className="relative z-10 text-sm font-medium">
                    {option.label}
                  </span>
                  <div className="absolute left-0 top-0 bottom-0 w-1 bg-blue-500 scale-y-0 group-hover:scale-y-100 transition-transform duration-300 origin-top rounded-l-2xl" />
                </button>
              ))}
            </div>
          </div>
        )}

        {stage === "question3" && (
          <div className="space-y-12 animate-in fade-in duration-1000">
            <div className="space-y-4">
              <p className="text-xs text-gray-500 font-black tracking-[0.5em] uppercase">
                QUESTION 3 › 3
              </p>
              <h2 className="text-4xl md:text-5xl text-white font-black leading-tight uppercase tracking-tight">
                Are you willing to pay the price?
              </h2>
              <p className="text-gray-400 text-sm font-bold uppercase tracking-wide">
                (The price is becoming who you were meant to be)
              </p>
            </div>

            <div className="grid gap-4 max-w-md mx-auto">
              {[
                { id: "yes_all", label: "Yes. Whatever it takes." },
                { id: "yes_scared", label: "Yes, even though I'm terrified." },
                { id: "yes_now", label: "Yes. I'm done waiting." },
              ].map((option) => (
                <button
                  key={option.id}
                  type="button"
                  onClick={() =>
                    handleAnswer({ question: "commitment", answer: option.id })
                  }
                  className="group relative px-8 py-4 bg-gray-900/50 border border-gray-800 text-gray-300 text-left hover:border-red-600 hover:bg-gray-900 transition-all duration-300 rounded-2xl"
                >
                  <span className="relative z-10 text-sm font-medium">
                    {option.label}
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-red-600/10 to-blue-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl" />
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Progress indicator */}
        {stage !== "initial" && stage !== "unlocking" && (
          <div className="flex gap-2 justify-center pt-8">
            {[1, 2, 3].map((step) => (
              <div
                key={step}
                className={`h-1 w-16 transition-all duration-500 ${
                  (stage === "question1" && step === 1) ||
                  (stage === "question2" && step === 2) ||
                  (stage === "question3" && step === 3)
                    ? "bg-red-600"
                    : step <
                        (stage === "question1"
                          ? 1
                          : stage === "question2"
                            ? 2
                            : 3)
                      ? "bg-gray-600"
                      : "bg-gray-800"
                }`}
              />
            ))}
          </div>
        )}
      </div>

      {/* Skip button for returning users */}
      {stage !== "unlocking" && (
        <button
          type="button"
          onClick={() => onComplete(answers)}
          className="fixed bottom-8 right-8 text-gray-600 hover:text-gray-400 text-xs font-mono tracking-wide transition-colors z-50"
        >
          Skip intro →
        </button>
      )}
    </div>
  );
}
