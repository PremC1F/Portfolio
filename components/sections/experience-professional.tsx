"use client";

import { motion } from "framer-motion";
import { experiences } from "@/data/experience";
import { Briefcase, Calendar, MapPin } from "lucide-react";

const fadeInUp = {
  initial: { opacity: 0, y: 15 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.3, ease: [0.25, 0.1, 0.25, 1] },
};

const timelineReveal = {
  initial: { height: 0 },
  whileInView: { height: "100%" },
  viewport: { once: true },
  transition: { duration: 0.4, ease: [0.25, 0.1, 0.25, 1] },
};

const slideInFromLeft = (delay: number) => ({
  initial: { opacity: 0, x: -12 },
  whileInView: { opacity: 1, x: 0 },
  viewport: { once: true },
  transition: { duration: 0.3, delay, ease: [0.25, 0.1, 0.25, 1] },
});

export function ExperienceProfessional() {
  return (
    <section id="experience" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-gray-950">
      <div className="max-w-4xl mx-auto">
        <motion.div {...fadeInUp}>
          <h2 className="text-3xl sm:text-4xl font-bold mb-5 text-center bg-gradient-to-r from-blue-600/90 to-purple-600/85 bg-clip-text text-transparent">
            Work Experience
          </h2>
          <p className="text-center text-gray-600 dark:text-gray-400 mb-16 max-w-2xl mx-auto leading-relaxed">
            Progression through real-world AI and ML engineering roles, focused on production systems.
          </p>
        </motion.div>

        <div className="relative">
          <div className="absolute left-[11px] top-0 bottom-0 w-px bg-gray-200 dark:bg-gray-800 overflow-hidden">
            <motion.div
              {...timelineReveal}
              className="w-full bg-gradient-to-b from-blue-600 to-purple-600"
            />
          </div>

          <div className="space-y-10">
            {experiences.map((exp: any, index: number) => (
              <motion.div
                key={exp.company}
                {...slideInFromLeft(index * 0.12)}
                className="relative pl-12 group"
              >
                <div className="absolute left-0 top-2 w-6 h-6 rounded-full border-2 border-blue-600 dark:border-blue-500 bg-white dark:bg-gray-950 flex items-center justify-center z-10">
                  <motion.div
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: index * 0.12 + 0.1 }}
                    className="w-2.5 h-2.5 rounded-full bg-blue-600 dark:bg-blue-500 group-hover:scale-125 transition-transform duration-300"
                  />
                </div>

                <div className="bg-white dark:bg-gray-900 rounded-2xl p-6 border border-gray-200/50 dark:border-gray-800/50 hover:border-gray-300 dark:hover:border-gray-700 hover:shadow-lg transition-all duration-300">
                  <div className="mb-4">
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                      {exp.role}
                    </h3>
                    <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-sm text-gray-600 dark:text-gray-400">
                      <div className="flex items-center gap-1.5">
                        <Briefcase className="w-3.5 h-3.5 opacity-50" />
                        <span className="font-medium">{exp.company}</span>
                      </div>
                      <div className="flex items-center gap-1.5">
                        <MapPin className="w-3.5 h-3.5 opacity-50" />
                        <span>{exp.location}</span>
                      </div>
                      <div className="flex items-center gap-1.5">
                        <Calendar className="w-3.5 h-3.5 opacity-50" />
                        <span>{exp.period}</span>
                      </div>
                    </div>
                  </div>
                  <ul className="space-y-2.5">
                    {exp.achievements.slice(0, 4).map((achievement: string, i: number) => (
                      <li key={i} className="flex items-start gap-2.5 text-gray-700 dark:text-gray-300" style={{ lineHeight: "1.6" }}>
                        <span className="text-blue-600/70 dark:text-blue-500/70 mt-1.5 text-xs">▪</span>
                        <span className="text-sm">{achievement}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
