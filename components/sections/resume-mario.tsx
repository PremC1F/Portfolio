"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Download, Eye, FileText, Sparkles, Star } from "lucide-react";

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.5 },
};

export function ResumeMario() {
  const handleDownload = () => {
    // This will trigger download of resume.pdf from public folder
    const link = document.createElement("a");
    link.href = "/resume.pdf";
    link.download = "Prem_Kanaparthi_Resume.pdf";
    link.click();
  };

  const handleView = () => {
    // This will open resume in new tab
    window.open("/resume.pdf", "_blank");
  };

  return (
    <section id="resume" className="py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Mario Background decoration */}
      <div className="absolute inset-0 -z-10">
        <motion.div
          className="absolute top-10 right-10 w-72 h-72 rounded-full blur-3xl"
          style={{ background: 'radial-gradient(circle, rgba(232, 168, 56, 0.15) 0%, rgba(255, 215, 0, 0.1) 100%)' }}
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-20 left-10 w-48 h-48 rounded-full blur-3xl"
          style={{ background: 'radial-gradient(circle, rgba(255, 0, 0, 0.1) 0%, rgba(255, 69, 0, 0.05) 100%)' }}
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </div>

      <div className="max-w-4xl mx-auto">
        <motion.div {...fadeInUp} className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-4" style={{ backgroundColor: 'rgba(232, 168, 56, 0.2)', border: '2px solid #E8A838' }}>
            <Star className="w-5 h-5" style={{ color: '#E8A838', fill: '#E8A838' }} />
            <span className="text-sm font-bold" style={{ color: '#E8A838' }}>
              📜 Player Profile Document
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 bg-gradient-to-r from-red-600 via-yellow-500 to-blue-600 bg-clip-text text-transparent">
            🎮 Download My Resume 🎮
          </h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto font-semibold">
            Grab your copy of my complete adventure log and achievements!
          </p>
        </motion.div>

        <motion.div
          {...fadeInUp}
          transition={{ delay: 0.1, duration: 0.5 }}
        >
          <div className="mario-card overflow-hidden p-8 sm:p-12">
              <div className="flex flex-col md:flex-row items-center gap-8">
                {/* Resume Preview */}
                <motion.div
                  className="flex-shrink-0"
                  whileHover={{ scale: 1.05, rotate: 2 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <div className="relative w-48 h-64 sm:w-56 sm:h-72 mario-card shadow-2xl overflow-hidden" style={{ border: '4px solid #E8A838' }}>
                    {/* Resume preview placeholder */}
                    <div className="absolute inset-0 p-4" style={{ background: 'linear-gradient(135deg, rgba(232, 168, 56, 0.1) 0%, rgba(255, 215, 0, 0.05) 100%)' }}>
                      <div className="w-full h-full bg-white/90 dark:bg-gray-900/90 rounded p-3 space-y-2">
                        {/* Simulated resume content with Mario colors */}
                        <div className="h-8 rounded" style={{ background: 'linear-gradient(90deg, #E8A838 0%, #D49420 100%)' }} />
                        <div className="h-2 bg-gray-300 dark:bg-gray-700 rounded w-3/4" />
                        <div className="h-2 bg-gray-300 dark:bg-gray-700 rounded w-1/2" />
                        <div className="space-y-1 mt-4">
                          <div className="h-2 bg-gray-200 dark:bg-gray-800 rounded" />
                          <div className="h-2 bg-gray-200 dark:bg-gray-800 rounded" />
                          <div className="h-2 bg-gray-200 dark:bg-gray-800 rounded w-5/6" />
                        </div>
                        <div className="space-y-1 mt-4">
                          <div className="h-2 bg-gray-200 dark:bg-gray-800 rounded" />
                          <div className="h-2 bg-gray-200 dark:bg-gray-800 rounded w-4/5" />
                        </div>
                        <div className="absolute bottom-3 right-3">
                          <Star className="w-6 h-6" style={{ color: '#E8A838', fill: '#E8A838', opacity: 0.4 }} />
                        </div>
                      </div>
                    </div>

                    {/* Floating Mario badge */}
                    <motion.div
                      className="absolute -top-2 -right-2 text-white px-3 py-1 rounded-full text-xs font-bold shadow-lg"
                      style={{ backgroundColor: '#DC143C', border: '2px solid #8B0000' }}
                      animate={{ rotate: [0, 5, 0, -5, 0] }}
                      transition={{ duration: 3, repeat: Infinity }}
                    >
                      📜 PDF
                    </motion.div>
                  </div>
                </motion.div>

                {/* Content */}
                <div className="flex-1 text-center md:text-left">
                  <h3 className="text-2xl font-bold mb-3" style={{ color: '#E8A838' }}>
                    🌟 Prem Babu Kanaparthi
                  </h3>
                  <p className="text-lg text-gray-700 dark:text-gray-300 mb-6 font-semibold">
                    AI/ML Engineer | MS in Artificial Intelligence
                  </p>

                  <div className="space-y-3 mb-8">
                    <div className="flex items-center gap-2 text-sm text-gray-700 dark:text-gray-300 font-medium">
                      <span className="text-lg">🪙</span>
                      <span>3+ years of experience in ML/AI</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-gray-700 dark:text-gray-300 font-medium">
                      <span className="text-lg">🪙</span>
                      <span>Expertise in LLMs, RAG, and MLOps</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-gray-700 dark:text-gray-300 font-medium">
                      <span className="text-lg">🪙</span>
                      <span>Published research in neural networks</span>
                    </div>
                  </div>

                  {/* Mario Action buttons */}
                  <div className="flex flex-col sm:flex-row gap-3">
                    <button
                      onClick={handleDownload}
                      className="flex items-center justify-center gap-2 px-6 py-3 rounded text-base font-bold text-white shadow-lg hover:scale-105 transition-transform"
                      style={{ backgroundColor: '#E8A838', border: '3px solid #B8860B' }}
                    >
                      <Download className="h-5 w-5" />
                      👇 Download Resume
                    </button>
                    <button
                      onClick={handleView}
                      className="flex items-center justify-center gap-2 px-6 py-3 rounded text-base font-bold hover:scale-105 transition-transform"
                      style={{ backgroundColor: 'transparent', border: '3px solid #E8A838', color: '#E8A838' }}
                    >
                      <Eye className="h-5 w-5" />
                      👁️ View Online
                    </button>
                  </div>

                  <p className="text-xs text-gray-600 dark:text-gray-400 mt-4 font-medium">
                    ⭐ <strong>Tip:</strong> Place your resume PDF in <code className="px-2 py-1 rounded font-bold" style={{ backgroundColor: 'rgba(232, 168, 56, 0.2)', color: '#E8A838' }}>public/resume.pdf</code> to enable downloads
                  </p>
                </div>
              </div>
          </div>
        </motion.div>

        {/* Additional info cards */}
        <motion.div
          {...fadeInUp}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-8"
        >
          <div className="mario-card p-6 text-center hover:scale-105 transition-transform">
              <div className="text-4xl mb-2">📅</div>
              <div className="text-3xl font-bold mb-2" style={{ color: '#E8A838' }}>
                3+
              </div>
              <div className="text-sm text-gray-600 dark:text-gray-400 font-bold">
                Years Experience
              </div>
          </div>

          <div className="mario-card p-6 text-center hover:scale-105 transition-transform">
              <div className="text-4xl mb-2">🎮</div>
              <div className="text-3xl font-bold mb-2" style={{ color: '#DC143C' }}>
                10+
              </div>
              <div className="text-sm text-gray-600 dark:text-gray-400 font-bold">
                Projects Delivered
              </div>
          </div>

          <div className="mario-card p-6 text-center hover:scale-105 transition-transform">
              <div className="text-4xl mb-2">⭐</div>
              <div className="text-3xl font-bold mb-2" style={{ color: '#4A90E2' }}>
                36+
              </div>
              <div className="text-sm text-gray-600 dark:text-gray-400 font-bold">
                Technical Skills
              </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
