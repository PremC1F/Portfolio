"use client";

import { usePortfolioMode } from "@/components/providers/portfolio-mode-provider";
import { ResumeProfessional } from "./resume-professional";
import { ResumeMario } from "./resume-mario";

export function ResumeSection() {
  const { mode } = usePortfolioMode();
  return mode === "professional" ? <ResumeProfessional /> : <ResumeMario />;
}
