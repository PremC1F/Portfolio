"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { projects } from "@/data/projects";
import { Button } from "@/components/ui/button";
import { ProjectCategory } from "@/data/types";
import { Github, ExternalLink, Star } from "lucide-react";
import { MarioBackground } from "@/components/mario-background";

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.5 },
};

const categories: (ProjectCategory | "All")[] = [
  "All",
  "RAG Systems",
  "MLOps",
  "Computer Vision",
  "NLP",
];

// Mario world colors for categories
const categoryColors: Record<ProjectCategory | "All", string> = {
  "All": "#E8A838",
  "RAG Systems": "#F08030",
  "MLOps": "#32CD32",
  "Computer Vision": "#4A90E2",
  "NLP": "#FF6B6B",
  "Multi-Agent": "#9370DB",
};

export function ProjectsMario() {
  const [activeCategory, setActiveCategory] = useState<
    ProjectCategory | "All"
  >("All");

  const filteredProjects =
    activeCategory === "All"
      ? projects
      : projects.filter((project) => project.category === activeCategory);

  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      <MarioBackground variant="nightsky" interactive={false} />

      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div {...fadeInUp}>
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-center bg-gradient-to-r from-red-600 via-yellow-500 to-blue-600 bg-clip-text text-transparent">
            🎮 Project Worlds 🎮
          </h2>
          <p className="text-gray-600 dark:text-gray-400 text-center mb-12 max-w-2xl mx-auto font-semibold">
            Explore different levels of my technical journey!
          </p>
        </motion.div>

        {/* Filter buttons - Mario themed */}
        <motion.div
          {...fadeInUp}
          transition={{ delay: 0.1, duration: 0.5 }}
          className="flex flex-wrap justify-center gap-3 mb-12"
        >
          {categories.map((category) => (
            <Button
              key={category}
              variant={activeCategory === category ? "default" : "outline"}
              onClick={() => setActiveCategory(category)}
              className={`text-sm font-bold uppercase tracking-wide transition-all ${
                activeCategory === category
                  ? "mario-button scale-110"
                  : "hover:scale-105 mario-card"
              }`}
              style={{
                backgroundColor:
                  activeCategory === category
                    ? categoryColors[category]
                    : "transparent",
                borderColor: categoryColors[category],
                color:
                  activeCategory === category
                    ? "white"
                    : categoryColors[category],
              }}
            >
              {category}
            </Button>
          ))}
        </motion.div>

        {/* Projects horizontal scroll - Mario Level Cards */}
        <div className="relative">
          <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-gray-950 to-transparent z-10 pointer-events-none"></div>
          <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-gray-950 to-transparent z-10 pointer-events-none"></div>

          <div className="flex gap-6 overflow-x-auto scroll-smooth snap-x snap-mandatory pb-6 px-4 scrollbar-hide" style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                {...fadeInUp}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                className="flex-shrink-0 w-[340px] snap-center"
              >
                <div className="mario-card p-6 h-full flex flex-col">
                {/* Level Header */}
                <div className="flex items-center justify-between mb-4">
                  <div
                    className="px-3 py-1 rounded text-xs font-bold text-white"
                    style={{ backgroundColor: categoryColors[project.category] }}
                  >
                    {project.category}
                  </div>
                  <div className="flex gap-1">
                    {[1, 2, 3].map((i) => (
                      <Star
                        key={i}
                        className="w-4 h-4"
                        style={{ color: '#E8A838', fill: i <= (index === 0 ? 3 : 2) ? '#E8A838' : 'none' }}
                      />
                    ))}
                  </div>
                </div>

                {/* Project Title */}
                <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-3">
                  {project.title}
                </h3>

                {/* Description */}
                <p className="text-sm text-gray-700 dark:text-gray-300 mb-4 flex-grow">
                  {project.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.slice(0, 4).map((tag, idx) => (
                    <span
                      key={idx}
                      className="px-2 py-1 rounded text-xs font-bold"
                      style={{
                        backgroundColor: `${categoryColors[project.category]}20`,
                        color: categoryColors[project.category],
                        border: `2px solid ${categoryColors[project.category]}`,
                      }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Action Buttons */}
                <div className="flex gap-2 pt-4" style={{ borderTop: '2px solid #E8A838' }}>
                  {project.github && project.github !== '#' && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 flex items-center justify-center gap-2 px-3 py-2 rounded text-xs font-bold text-white hover:scale-105 transition-transform"
                      style={{ backgroundColor: '#24292e' }}
                    >
                      <Github className="w-4 h-4" />
                      Code
                    </a>
                  )}
                  {project.demo && project.demo !== '#' && (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 flex items-center justify-center gap-2 px-3 py-2 rounded text-xs font-bold text-white hover:scale-105 transition-transform"
                      style={{ backgroundColor: categoryColors[project.category] }}
                    >
                      <ExternalLink className="w-4 h-4" />
                      Demo
                    </a>
                  )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        <style jsx global>{`
          .scrollbar-hide::-webkit-scrollbar {
            display: none;
          }
        `}</style>

        {/* Mario Tip */}
        <motion.div
          {...fadeInUp}
          transition={{ delay: 0.5 }}
          className="mt-12 text-center"
        >
          <div className="inline-block mario-card p-6 max-w-md">
            <div className="flex items-center gap-3 mb-2">
              <div className="text-2xl">🍄</div>
              <div className="font-bold text-lg" style={{ color: '#E8A838' }}>
                POWER-UP TIP
              </div>
            </div>
            <p className="text-sm text-gray-700 dark:text-gray-300 font-semibold">
              Each project level shows its category, star rating, and key technologies.
              Three stars means it's a flagship project! 🌟
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
