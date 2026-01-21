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
          <p className="text-center text-gray-600 dark:text-gray-400 mb-20 max-w-xl mx-auto text-xl leading-relaxed">
            View or download my professional resume.
          </p>
        </motion.div>

        <div className="bg-white dark:bg-gray-900 rounded-2xl p-10 lg:p-12 border border-gray-200 dark:border-gray-800">
          <motion.div {...fadeIn} className="grid md:grid-cols-[1.5fr_1fr] gap-12 items-start">
            <div className="space-y-5">
              <h3 className="text-3xl font-semibold text-gray-900 dark:text-white">
                Prem Babu Kanaparthi
              </h3>
              <p className="text-xl text-gray-700 dark:text-gray-300">
                AI/ML Engineer — MS in Artificial Intelligence
              </p>
              <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed pt-2">
                AI/ML engineer focused on production LLM systems, RAG pipelines, and scalable ML infrastructure.
              </p>
            </div>

            <div className="space-y-3">
              <a
                href="/resume.pdf"
                download="Prem_Kanaparthi_Resume.pdf"
                className="block text-lg text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors"
              >
                → Download PDF
              </a>
              <a
                href="/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="block text-lg text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors"
              >
                → View online
              </a>
              <p className="text-sm text-gray-500 dark:text-gray-500 pt-4">
                Last updated: 2025
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
