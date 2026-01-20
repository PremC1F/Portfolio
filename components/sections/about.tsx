"use client";

import { usePortfolioMode } from "@/components/providers/portfolio-mode-provider";
import { AboutProfessional } from "./about-professional";
import { AboutMario } from "./about-mario";

export function AboutSection() {
  const { mode } = usePortfolioMode();
  
  return mode === "professional" ? <AboutProfessional /> : <AboutMario />;
}
