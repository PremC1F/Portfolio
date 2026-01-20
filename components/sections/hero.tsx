"use client";

import { usePortfolioMode } from "@/components/providers/portfolio-mode-provider";
import { HeroProfessional } from "./hero-professional";
import { HeroMario } from "./hero-mario";

export function HeroSection() {
  const { mode } = usePortfolioMode();

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.scrollY - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  return mode === "professional" ? (
    <HeroProfessional scrollToSection={scrollToSection} />
  ) : (
    <HeroMario scrollToSection={scrollToSection} />
  );
}
