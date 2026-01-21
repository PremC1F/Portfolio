"use client";

import { Navigation } from "@/components/navigation";
import { HeroSection } from "@/components/sections/hero";
import { AboutSection } from "@/components/sections/about";
import { ExperienceSection } from "@/components/sections/experience";
import { ProjectsSection } from "@/components/sections/projects";
import { SkillsSection } from "@/components/sections/skills";
import { EducationSection } from "@/components/sections/education";
import { ResumeSection } from "@/components/sections/resume";
import { ContactSection } from "@/components/sections/contact";
import { Footer } from "@/components/footer";
import { ModeToggle } from "@/components/mode-toggle";
import { MarioScrollIndicator } from "@/components/MarioScrollIndicator";
import { usePortfolioMode } from "@/components/providers/portfolio-mode-provider";

export default function Home() {
  const { mode } = usePortfolioMode();

  return (
    <div className="min-h-screen text-gray-900 dark:text-white">
      <Navigation />
      <main>
        <HeroSection />
        <AboutSection />
        <ExperienceSection />
        <ProjectsSection />
        <SkillsSection />
        <EducationSection />
        <ResumeSection />
        <ContactSection />
      </main>
      <Footer />
      <ModeToggle />
      {mode === "mario" && <MarioScrollIndicator />}
    </div>
  );
}
