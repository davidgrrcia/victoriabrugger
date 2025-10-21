"use client";

import { EntranceGate } from "@/components/masterclass/entrance-gate";
import { StageNavigation } from "@/components/masterclass/stage-navigation";
import { useState } from "react";

type Stage =
  | "entrance"
  | "awakening"
  | "journey"
  | "manifesto"
  | "choose-pack"
  | "final";

export default function MasterclassPage() {
  const [currentStage, setCurrentStage] = useState<Stage>("entrance");
  const [answers, setAnswers] = useState<Record<string, string>>({});

  const handleEntranceComplete = (userAnswers: Record<string, string>) => {
    setAnswers(userAnswers);
    setCurrentStage("awakening");
  };

  const goToStage = (stage: Stage) => {
    setCurrentStage(stage);
  };

  return (
    <div className="fixed inset-0 bg-black text-white overflow-hidden">
      {/* Entrance Gate */}
      {currentStage === "entrance" && (
        <EntranceGate onComplete={handleEntranceComplete} />
      )}

      {/* Main Journey - Stage-based navigation */}
      {currentStage !== "entrance" && (
        <StageNavigation
          currentStage={currentStage}
          answers={answers}
          onStageChange={goToStage}
        />
      )}
    </div>
  );
}
