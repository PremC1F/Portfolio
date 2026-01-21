"use client";

import { motion } from "framer-motion";
import { projects } from "@/data/projects";
import { Project } from "@/data/types";
import { useState, useRef } from "react";
import { Github, ExternalLink, ChevronRight } from "lucide-react";
import Image from "next/image";

const fadeIn = {
  initial: { opacity: 0, y: 8 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.25 },
};

interface FlippableCardProps {
  project: typeof projects[0];
  index: number;
}

function FlippableProjectCard({ project, index }: FlippableCardProps) {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <div
      className="flex-shrink-0 w-[400px] h-[500px] snap-center"
      style={{ perspective: "1000px" }}
    >
      <div
        className="relative w-full h-full cursor-pointer transition-transform duration-300 ease-in-out"
        style={{
          transformStyle: "preserve-3d",
          transform: isFlipped ? "rotateY(180deg)" : "rotateY(0deg)",
        }}
        onClick={() => setIsFlipped(!isFlipped)}
      >
        <div
          className="absolute inset-0 w-full h-full bg-white dark:bg-gray-900/50 border border-gray-200 dark:border-gray-800 rounded-2xl overflow-hidden shadow-sm"
          style={{ backfaceVisibility: "hidden" }}
        >
          <div className="relative h-[220px] bg-gray-100 dark:bg-gray-800 overflow-hidden">
            {project.image && (
              <Image
                src={project.image}
                alt={project.title}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 380px"
              />
            )}
          </div>

          <div className="p-7 flex flex-col h-[280px]">
            <div className="flex-1 space-y-4">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white line-clamp-2">
                {project.title}
              </h3>
              <p className="text-base text-gray-700 dark:text-gray-300 line-clamp-3 leading-relaxed">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2">
                {project.tags.slice(0, 4).map((tag: string) => (
                  <span
                    key={tag}
                    className="px-3 py-1 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 text-sm rounded-md"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
            <div className="flex items-center justify-between pt-4 border-t border-gray-200 dark:border-gray-800">
              <span className="text-sm text-gray-500 dark:text-gray-400">Click to view details</span>
            </div>
          </div>
        </div>

        <div
          className="absolute inset-0 w-full h-full bg-gray-900 dark:bg-black border border-gray-800 dark:border-gray-700 rounded-2xl overflow-hidden shadow-sm"
          style={{
            backfaceVisibility: "hidden",
            transform: "rotateY(180deg)",
          }}
        >
          <div className="p-7 flex flex-col h-full text-white space-y-4">
            <div className="flex items-start justify-between">
              <h3 className="text-xl font-semibold flex-1">{project.title}</h3>
              {project.github && project.github !== "#" && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={(e) => e.stopPropagation()}
                  className="flex items-center gap-1 text-xs text-gray-300 hover:text-white transition-colors"
                >
                  <Github className="w-4 h-4" />
                </a>
              )}
            </div>
            <p className="text-base leading-relaxed text-gray-300">
              {project.description}
            </p>
            {project.details && project.details.length > 0 && (
              <div className="flex-1 overflow-y-auto">
                <ul className="space-y-2 text-sm text-gray-400 leading-relaxed">
                  {project.details.slice(0, 4).map((detail: string, i: number) => (
                    <li key={i} className="flex items-start gap-2">
                      <span className="text-gray-600 mt-1">•</span>
                      <span>{detail}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}
            {project.github && project.github !== "#" && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => e.stopPropagation()}
                className="flex items-center gap-2 text-sm text-white hover:text-gray-300 transition-colors pt-2 border-t border-gray-800"
              >
                <Github className="w-4 h-4" />
                <span>View on GitHub</span>
              </a>
            )}
            <button
              onClick={(e) => {
                e.stopPropagation();
                setIsFlipped(false);
              }}
              className="text-xs text-gray-400 hover:text-white transition-colors text-center"
            >
              Click to flip back
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export function ProjectsProfessional() {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  
  const placeholderProjects: Project[] = [];
  
  const allProjects = [...projects, ...placeholderProjects];
  const categories = ["All", ...Array.from(new Set(allProjects.map((p) => p.category)))];
  const filteredProjects = selectedCategory === "All" ? allProjects : allProjects.filter((p) => p.category === selectedCategory);
  const scrollRef = useRef<HTMLDivElement>(null);

  return (
    <section id="projects" className="py-24 px-6 lg:px-8 bg-gray-50 dark:bg-black">
      <div className="max-w-6xl mx-auto">
        <motion.div {...fadeIn}>
          <h2 className="text-6xl sm:text-7xl font-bold mb-6 text-center text-gray-900 dark:text-white">
            Featured Projects
          </h2>
          <p className="text-center text-gray-600 dark:text-gray-300 mb-16 max-w-2xl mx-auto text-xl leading-relaxed">
            Selected work demonstrating production AI systems and real-world deployment.
          </p>
        </motion.div>

        <motion.div {...fadeIn} className="flex gap-4 mb-12 justify-center flex-wrap">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-6 py-2.5 text-base transition-colors rounded-lg ${
                selectedCategory === cat
                  ? "text-gray-900 dark:text-white bg-gray-100 dark:bg-gray-800"
                  : "text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white hover:bg-gray-50 dark:hover:bg-gray-900"
              }`}
            >
              {cat}
            </button>
          ))}
        </motion.div>

        <div className="relative">
          <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-gray-50 dark:from-gray-950 to-transparent z-10 pointer-events-none"></div>
          <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-gray-50 dark:from-gray-950 to-transparent z-10 pointer-events-none"></div>

          <div
            ref={scrollRef}
            className="flex gap-6 overflow-x-auto scroll-smooth snap-x snap-mandatory pb-6 px-4 scrollbar-hide"
            style={{
              scrollbarWidth: "none",
              msOverflowStyle: "none",
            }}
          >
            {filteredProjects.map((project, index) => (
              <FlippableProjectCard key={project.title} project={project} index={index} />
            ))}
          </div>
        </div>

        <style jsx global>{`
          .scrollbar-hide::-webkit-scrollbar {
            display: none;
          }
        `}</style>
      </div>
    </section>
  );
}
