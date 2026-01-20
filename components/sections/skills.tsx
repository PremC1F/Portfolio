"use client";

import { usePortfolioMode } from "@/components/providers/portfolio-mode-provider";
import { SkillsProfessional } from "./skills-professional";
import { SkillsMario } from "./skills-mario";

export function SkillsSection() {
  const { mode } = usePortfolioMode();
  return mode === "professional" ? <SkillsProfessional /> : <SkillsMario />;
}
