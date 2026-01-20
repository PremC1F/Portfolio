"use client";

import { usePortfolioMode } from "@/components/providers/portfolio-mode-provider";
import { ProjectsProfessional } from "./projects-professional";
import { ProjectsMario } from "./projects-mario";

export function ProjectsSection() {
  const { mode } = usePortfolioMode();
  return mode === "professional" ? <ProjectsProfessional /> : <ProjectsMario />;
}
