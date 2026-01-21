"use client";

import { motion } from "framer-motion";

const fadeIn = {
  initial: { opacity: 0, y: 8 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.2 },
};

export function ResumeProfessional() {
  return (
    <section id="resume" className="py-24 px-6 lg:px-8 bg-gray-50 dark:bg-black">
      <div className="max-w-4xl mx-auto">
        <motion.div {...fadeIn}>
          <h2 className="text-6xl sm:text-7xl font-bold mb-6 text-center text-gray-900 dark:text-white">
            Resume
          </h2>
          <p className="text-center text-gray-600 dark:text-gray-300 mb-20 max-w-xl mx-auto text-xl leading-relaxed">
            View or download my professional resume.
          </p>
        </motion.div>

        <div className="bg-white dark:bg-gray-900/50 rounded-2xl p-10 lg:p-14 border border-gray-200 dark:border-gray-800 shadow-sm">
          <motion.div {...fadeIn} className="grid md:grid-cols-[1.5fr_1fr] gap-16 items-start">
            <div className="space-y-6">
              <h3 className="text-3xl font-semibold text-gray-900 dark:text-white">
                Prem Babu Kanaparthi
              </h3>
              <p className="text-xl text-gray-700 dark:text-gray-200">
                AI/ML Engineer — MS in Artificial Intelligence
              </p>
              <p className="text-base text-gray-600 dark:text-gray-300 leading-relaxed pt-2">
                AI/ML engineer focused on production LLM systems, RAG pipelines, and scalable ML infrastructure.
              </p>
            </div>

            <div className="space-y-4">
              <a
                href="/resume.pdf"
                download="Prem_Kanaparthi_Resume.pdf"
                className="flex items-center gap-2 px-6 py-3 bg-gray-900 dark:bg-white text-white dark:text-black text-base font-medium hover:bg-gray-700 dark:hover:bg-gray-200 transition-colors rounded-lg justify-center"
              >
                Download PDF
              </a>
              <a
                href="/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-6 py-3 border-2 border-gray-300 dark:border-gray-600 text-gray-900 dark:text-white text-base font-medium hover:bg-gray-50 dark:hover:bg-gray-900 transition-colors rounded-lg justify-center"
              >
                View Online
              </a>
              <p className="text-sm text-gray-500 dark:text-gray-400 pt-6 text-center">
                Last updated: January 2025
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
