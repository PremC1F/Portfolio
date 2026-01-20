"use client";

import { usePortfolioMode } from "@/components/providers/portfolio-mode-provider";
import { EducationProfessional } from "./education-professional";
import { EducationMario } from "./education-mario";

export function EducationSection() {
  const { mode } = usePortfolioMode();
  return mode === "professional" ? <EducationProfessional /> : <EducationMario />;
}
