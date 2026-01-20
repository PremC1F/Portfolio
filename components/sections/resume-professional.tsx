"use client";

import { motion } from "framer-motion";
import { Download, Eye } from "lucide-react";
import Image from "next/image";

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.5 },
};

export function ResumeProfessional() {
  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = "/resume.pdf";
    link.download = "Prem_Kanaparthi_Resume.pdf";
    link.click();
  };

  const handleView = () => {
    window.open("/resume.pdf", "_blank");
  };

  return (
    <section id="resume" className="py-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-gray-900">
      <div className="max-w-4xl mx-auto">
        <motion.div {...fadeInUp}>
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-center bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Resume
          </h2>
          <p className="text-center text-gray-600 dark:text-gray-400 mb-12 max-w-2xl mx-auto">
            Download or view my complete professional resume
          </p>
        </motion.div>

        <motion.div {...fadeInUp} transition={{ delay: 0.1 }} className="bg-gray-50 dark:bg-gray-800 rounded-xl p-8 shadow-lg">
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="flex-shrink-0">
              <div className="w-48 h-64 bg-white dark:bg-gray-700 rounded-lg shadow-xl border-4 border-gray-200 dark:border-gray-600 flex items-center justify-center">
                <div className="text-center p-4">
                  <div className="text-4xl mb-2">📄</div>
                  <p className="text-xs text-gray-600 dark:text-gray-400">Resume Preview</p>
                </div>
              </div>
            </div>

            <div className="flex-1 text-center md:text-left">
              <h3 className="text-2xl font-bold mb-3 text-gray-900 dark:text-white">
                Prem Babu Kanaparthi
              </h3>
              <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">
                AI/ML Engineer | MS in Artificial Intelligence
              </p>

              <div className="space-y-2 mb-6 text-sm text-gray-600 dark:text-gray-400">
                <p>• 3+ years of ML/AI experience</p>
                <p>• Expertise in LLMs, RAG, and MLOps</p>
                <p>• Published research in neural networks</p>
              </div>

              <div className="flex flex-col sm:flex-row gap-3">
                <button
                  onClick={handleDownload}
                  className="flex items-center justify-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white rounded-lg font-semibold transition-colors"
                >
                  <Download className="w-5 h-5" />
                  Download Resume
                </button>
                <button
                  onClick={handleView}
                  className="flex items-center justify-center gap-2 px-6 py-3 bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 text-gray-900 dark:text-white rounded-lg font-semibold transition-colors"
                >
                  <Eye className="w-5 h-5" />
                  View Online
                </button>
              </div>

              <p className="text-xs text-gray-500 dark:text-gray-500 mt-4">
                💡 <strong>Note:</strong> Place your resume PDF in <code className="bg-gray-200 dark:bg-gray-700 px-2 py-1 rounded">public/resume.pdf</code>
              </p>
            </div>
          </div>
        </motion.div>

        <motion.div {...fadeInUp} transition={{ delay: 0.2 }} className="grid grid-cols-3 gap-4 mt-8">
          {[
            { value: "3+", label: "Years Experience" },
            { value: "10+", label: "Projects" },
            { value: "36+", label: "Skills" },
          ].map((stat) => (
            <div key={stat.label} className="bg-gray-50 dark:bg-gray-800 rounded-xl p-6 text-center shadow-lg">
              <div className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-2">
                {stat.value}
              </div>
              <div className="text-sm text-gray-600 dark:text-gray-400 font-medium">
                {stat.label}
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
