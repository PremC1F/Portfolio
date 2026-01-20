"use client";

import { usePortfolioMode } from "@/components/providers/portfolio-mode-provider";
import { ContactProfessional } from "./contact-professional";
import { ContactMario } from "./contact-mario";

export function ContactSection() {
  const { mode } = usePortfolioMode();
  return mode === "professional" ? <ContactProfessional /> : <ContactMario />;
}
