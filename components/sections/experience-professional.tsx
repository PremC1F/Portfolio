"use client";

import { motion } from "framer-motion";
import { experiences } from "@/data/experience";
import { Briefcase, Calendar, MapPin } from "lucide-react";

const fadeIn = {
  initial: { opacity: 0, y: 8 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.25 },
};

export function ExperienceProfessional() {
  return (
    <section id="experience" className="py-24 px-6 lg:px-8 bg-gray-50 dark:bg-black">
      <div className="max-w-4xl mx-auto">
        <motion.div {...fadeIn}>
          <h2 className="text-6xl sm:text-7xl font-bold mb-6 text-center text-gray-900 dark:text-white">
            Work Experience
          </h2>
          <p className="text-center text-gray-600 dark:text-gray-400 mb-24 max-w-2xl mx-auto text-xl leading-relaxed">
            A progression through real-world AI and ML roles, focused on production systems.
          </p>
        </motion.div>

        <div className="relative">
          <div className="absolute left-[7px] top-0 bottom-0 w-px bg-gray-200 dark:bg-gray-800" />

          <div className="space-y-12">
            {experiences.map((exp: any, index: number) => {
              const isRecent = index === 0;
              return (
                <motion.div
                  key={exp.company}
                  {...fadeIn}
                  className="relative pl-10"
                  style={{ opacity: isRecent ? 1 : 0.85 }}
                >
                  <div className="absolute left-0 top-3 w-4 h-4 rounded-full border border-gray-300 dark:border-gray-700 bg-white dark:bg-black flex items-center justify-center">
                    <div className="w-1.5 h-1.5 rounded-full bg-gray-400 dark:bg-gray-600" />
                  </div>

                  <div className="pb-8 border-b border-gray-200/50 dark:border-gray-800/50 last:border-0">
                    <div className="mb-5">
                      <h3 className="text-3xl font-semibold text-gray-900 dark:text-white mb-3">
                        {exp.role}
                      </h3>
                      <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-lg text-gray-500 dark:text-gray-500">
                        <span className="font-medium">{exp.company}</span>
                        <span>•</span>
                        <span>{exp.location}</span>
                        <span>•</span>
                        <span>{exp.period}</span>
                      </div>
                    </div>
                    <ul className="space-y-4">
                      {exp.achievements.slice(0, 4).map((achievement: string, i: number) => (
                        <li key={i} className="flex items-start gap-3 text-gray-700 dark:text-gray-300 leading-[1.7]">
                          <span className="text-gray-400 dark:text-gray-600 mt-1.5 text-sm">•</span>
                          <span className="text-lg">{achievement}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
