"use client";

import { motion } from "framer-motion";
import { education } from "@/data/education";
import { publications } from "@/data/publications";
import { GraduationCap, FileText, Award } from "lucide-react";

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.5 },
};

export function EducationProfessional() {
  return (
    <section id="education" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-4xl mx-auto">
        <motion.div {...fadeInUp}>
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-center bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Education & Achievements
          </h2>
          <p className="text-center text-gray-600 dark:text-gray-400 mb-12 max-w-2xl mx-auto">
            Academic background and research contributions
          </p>
        </motion.div>

        <div className="space-y-8">
          {education.map((edu: any, index: number) => (
            <motion.div
              key={edu.degree}
              {...fadeInUp}
              transition={{ delay: 0.1 * (index + 1) }}
              className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg border-l-4 border-purple-600"
            >
              <div className="flex items-start justify-between mb-3">
                <GraduationCap className="w-6 h-6 text-purple-600" />
                <span className="px-3 py-1 bg-purple-100 dark:bg-purple-900 text-purple-700 dark:text-purple-300 rounded text-xs font-semibold">
                  {edu.period}
                </span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                {edu.degree}
              </h3>
              <p className="text-blue-600 dark:text-blue-400 font-semibold mb-1">
                {edu.institution}
              </p>
              <p className="text-gray-600 dark:text-gray-400 text-sm mb-2">
                {edu.location}
              </p>
              {edu.specialization && (
                <p className="text-gray-700 dark:text-gray-300 text-sm">
                  <span className="font-semibold">Specialization:</span> {edu.specialization}
                </p>
              )}
            </motion.div>
          ))}
        </div>

        <motion.div {...fadeInUp} transition={{ delay: 0.3 }} className="mt-12">
          <h3 className="text-2xl font-bold mb-6 text-center text-gray-900 dark:text-white">
            Publications & Certifications
          </h3>
          <div className="grid md:grid-cols-2 gap-4">
            {publications.map((pub: any, index: number) => (
              <motion.div
                key={pub.title}
                {...fadeInUp}
                transition={{ delay: 0.1 * (index + 1) }}
                className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg"
              >
                <div className="flex items-start gap-3">
                  {pub.type === "paper" ? (
                    <FileText className="w-5 h-5 text-blue-600 mt-1" />
                  ) : (
                    <Award className="w-5 h-5 text-purple-600 mt-1" />
                  )}
                  <div className="flex-1">
                    <span className="px-2 py-1 bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-300 rounded text-xs font-semibold">
                      {pub.type === "paper" ? "Research" : "Certificate"}
                    </span>
                    <h4 className="font-bold text-gray-900 dark:text-white mt-2 mb-1">
                      {pub.title}
                    </h4>
                    {pub.description && (
                      <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">
                        {pub.description}
                      </p>
                    )}
                    {pub.link && (
                      <a
                        href={pub.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-600 dark:text-blue-400 text-sm font-semibold hover:underline"
                      >
                        View {pub.type === "paper" ? "Paper" : "Certificate"} →
                      </a>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
