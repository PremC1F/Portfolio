"use client";

import { motion } from "framer-motion";
import { education } from "@/data/education";
import { publications } from "@/data/publications";
import { ExternalLink } from "lucide-react";

const fadeIn = {
  initial: { opacity: 0, y: 8 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.25 },
};

export function EducationProfessional() {
  return (
    <section id="education" className="py-24 px-6 lg:px-8 bg-gray-50 dark:bg-black">
      <div className="max-w-4xl mx-auto">
        <motion.div {...fadeIn}>
          <h2 className="text-6xl sm:text-7xl font-bold mb-6 text-center text-gray-900 dark:text-white">
            Education & Achievements
          </h2>
          <p className="text-center text-gray-600 dark:text-gray-400 mb-20 max-w-2xl mx-auto text-xl leading-relaxed">
            Academic background and research experience.
          </p>
        </motion.div>

        <div className="space-y-16">
          <div className="relative">
            <motion.div {...fadeIn} className="mb-8">
              <h3 className="text-3xl font-semibold text-gray-900 dark:text-white">
                Education
              </h3>
            </motion.div>
            
            <div className="absolute left-[7px] top-16 bottom-0 w-px bg-gray-200 dark:bg-gray-800" />

            <div className="space-y-12">
              {education.map((edu: any, index: number) => (
                <motion.div
                  key={edu.degree}
                  {...fadeIn}
                  className="relative pl-10"
                >
                  <div className="absolute left-0 top-3 w-4 h-4 rounded-full border border-gray-300 dark:border-gray-700 bg-gray-50 dark:bg-black flex items-center justify-center">
                    <div className="w-1.5 h-1.5 rounded-full bg-gray-400 dark:bg-gray-600" />
                  </div>

                  <div className="pb-8 border-b border-gray-200/50 dark:border-gray-800/50 last:border-0">
                    <div className="mb-3">
                      <h4 className="text-3xl font-semibold text-gray-900 dark:text-white mb-3">
                        {edu.degree}
                      </h4>
                      <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-lg text-gray-500 dark:text-gray-500">
                        <span className="font-medium">{edu.institution}</span>
                        <span>•</span>
                        <span>{edu.location}</span>
                        <span>•</span>
                        <span>{edu.period}</span>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          <motion.div {...fadeIn} className="space-y-8">
            <h3 className="text-4xl font-semibold text-gray-900 dark:text-white">
              Research
            </h3>
            
            <div className="space-y-6">
              {publications.filter((pub: any) => pub.type === "paper").map((pub: any, index: number) => (
                <div
                  key={pub.title}
                  className="pb-6 border-b border-gray-200/50 dark:border-gray-800/50 last:border-0 last:pb-0 space-y-2"
                >
                  <h4 className="text-lg font-semibold text-gray-900 dark:text-white">
                    {pub.title}
                  </h4>
                  {pub.description && (
                    <p className="text-base text-gray-600 dark:text-gray-400 leading-relaxed">
                      {pub.description}
                    </p>
                  )}
                  {pub.link && (
                    <a
                      href={pub.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-base text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors"
                    >
                      <span>View paper</span>
                      <ExternalLink className="w-3 h-3" />
                    </a>
                  )}
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div {...fadeIn} className="space-y-8">
            <h3 className="text-4xl font-semibold text-gray-900 dark:text-white">
              Certifications
            </h3>
            
            <div className="space-y-6">
              {publications.filter((pub: any) => pub.type === "certification").map((pub: any, index: number) => (
                <div
                  key={pub.title}
                  className="pb-6 border-b border-gray-200/50 dark:border-gray-800/50 last:border-0 last:pb-0 space-y-2"
                >
                  <h4 className="text-xl font-semibold text-gray-900 dark:text-white">
                    {pub.title}
                  </h4>
                  {pub.description && (
                    <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
                      {pub.description}
                    </p>
                  )}
                  {pub.link && (
                    <a
                      href={pub.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-lg text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors"
                    >
                      <span>View {pub.type === "paper" ? "paper" : "certificate"}</span>
                      <ExternalLink className="w-3 h-3" />
                    </a>
                  )}
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
