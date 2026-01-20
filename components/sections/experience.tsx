"use client";

import { usePortfolioMode } from "@/components/providers/portfolio-mode-provider";
import { ExperienceProfessional } from "./experience-professional";
import { ExperienceMario } from "./experience-mario";

export function ExperienceSection() {
  const { mode } = usePortfolioMode();
  return mode === "professional" ? <ExperienceProfessional /> : <ExperienceMario />;
}
