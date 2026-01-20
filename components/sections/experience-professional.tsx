"use client";

import { motion } from "framer-motion";
import { experiences } from "@/data/experience";
import { Briefcase, Calendar, MapPin } from "lucide-react";

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.5 },
};

export function ExperienceProfessional() {
  return (
    <section id="experience" className="py-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-gray-900">
      <div className="max-w-4xl mx-auto">
        <motion.div {...fadeInUp}>
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-center bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Work Experience
          </h2>
          <p className="text-center text-gray-600 dark:text-gray-400 mb-12 max-w-2xl mx-auto">
            Professional journey in AI/ML engineering
          </p>
        </motion.div>

        <div className="space-y-8">
          {experiences.map((exp: any, index: number) => (
            <motion.div
              key={exp.company}
              {...fadeInUp}
              transition={{ delay: 0.1 * (index + 1) }}
              className="bg-gray-50 dark:bg-gray-800 rounded-xl p-6 shadow-lg border-l-4 border-blue-600"
            >
              <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                <div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                    {exp.role}
                  </h3>
                  <div className="flex items-center gap-2 text-blue-600 dark:text-blue-400 mb-1">
                    <Briefcase className="w-4 h-4" />
                    <span className="font-semibold">{exp.company}</span>
                  </div>
                  <div className="flex items-center gap-4 text-sm text-gray-600 dark:text-gray-400">
                    <div className="flex items-center gap-1">
                      <MapPin className="w-4 h-4" />
                      <span>{exp.location}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      <span>{exp.period}</span>
                    </div>
                  </div>
                </div>
              </div>
              <ul className="space-y-2">
                {exp.achievements.map((achievement: string, i: number) => (
                  <li key={i} className="flex items-start gap-2 text-gray-700 dark:text-gray-300">
                    <span className="text-blue-600 mt-1">•</span>
                    <span>{achievement}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
