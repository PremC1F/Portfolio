"use client";

import { motion } from "framer-motion";
import { education } from "@/data/education";
import { publications } from "@/data/publications";
import { GraduationCap, FileText, Award, Star, Trophy } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.5 },
};

export function EducationMario() {
  return (
    <section id="education" className="py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      <div className="max-w-4xl mx-auto">
        <motion.div {...fadeInUp}>
          <h2 className="text-4xl sm:text-5xl font-bold mb-4 text-center bg-gradient-to-r from-red-600 via-yellow-500 to-blue-600 bg-clip-text text-transparent">
            🎓 Education & Achievements 🏆
          </h2>
          <p className="text-base text-gray-600 dark:text-gray-400 text-center mb-12 max-w-2xl mx-auto font-semibold">
            Training grounds and trophies collected!
          </p>
        </motion.div>

        {/* Education */}
        <div className="mb-12">
          <motion.h3
            {...fadeInUp}
            transition={{ delay: 0.1, duration: 0.5 }}
            className="text-3xl font-bold mb-6 flex items-center gap-3"
            style={{ color: '#E8A838' }}
          >
            <GraduationCap className="h-7 w-7" />
            <span>🏫 Training Academy</span>
          </motion.h3>

          <div className="space-y-6">
            {education.map((edu, index) => (
              <motion.div
                key={edu.id}
                {...fadeInUp}
                transition={{ delay: 0.1 + index * 0.1, duration: 0.5 }}
              >
                <div className="mario-card p-6">
                    <div className="flex items-start justify-between mb-3">
                      <div className="flex gap-2">
                        {[1, 2, 3].map((i) => (
                          <Star key={i} className="w-5 h-5" style={{ color: '#E8A838', fill: '#E8A838' }} />
                        ))}
                      </div>
                      <span className="px-3 py-1 rounded text-xs font-bold text-gray-600 dark:text-gray-400" style={{ backgroundColor: 'rgba(232, 168, 56, 0.2)', border: '2px solid rgba(232, 168, 56, 0.4)' }}>
                        {edu.period}
                      </span>
                    </div>
                    <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                      {edu.degree}
                    </h4>
                    <div className="flex items-center gap-2 mb-2" style={{ color: '#E8A838' }}>
                      <GraduationCap className="h-5 w-5" />
                      <p className="font-bold">{edu.institution}</p>
                    </div>
                    <p className="text-base text-gray-600 dark:text-gray-400 mb-3 font-semibold">
                      📍 {edu.location}
                    </p>
                    {edu.specialization && (
                      <div className="pt-3" style={{ borderTop: '2px solid #E8A838' }}>
                        <p className="text-base text-gray-700 dark:text-gray-300 font-medium">
                          <span className="font-bold" style={{ color: '#E8A838' }}>⚡ Specialization:</span> {edu.specialization}
                        </p>
                      </div>
                    )}
                  </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Publications & Certifications */}
        <div>
          <motion.h3
            {...fadeInUp}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="text-3xl font-bold mb-6 flex items-center gap-3"
            style={{ color: '#E8A838' }}
          >
            <Trophy className="h-7 w-7" />
            <span>🏆 Trophies & Certificates</span>
          </motion.h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {publications.map((pub, index) => (
              <motion.div
                key={pub.id}
                {...fadeInUp}
                transition={{ delay: 0.4 + index * 0.1, duration: 0.5 }}
              >
                <div className="mario-card h-full p-6 hover:scale-[1.02] transition-transform">
                    <div className="flex items-start gap-3 mb-3">
                      <div className="flex-shrink-0 mt-1">
                        {pub.type === "paper" ? (
                          <div className="text-3xl">📜</div>
                        ) : (
                          <div className="text-3xl">🏅</div>
                        )}
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-2">
                          <div className="px-2 py-1 rounded text-xs font-bold text-white" style={{ backgroundColor: pub.type === "paper" ? '#4A90E2' : '#9370DB' }}>
                            {pub.type === "paper" ? "RESEARCH" : "CERTIFICATE"}
                          </div>
                        </div>
                        <h4 className="text-lg font-bold text-gray-900 dark:text-white mb-2">
                          {pub.title}
                        </h4>
                        {pub.description && (
                          <p className="text-base text-gray-600 dark:text-gray-400 mb-3 font-medium">
                            {pub.description}
                          </p>
                        )}
                        {pub.link && (
                          <a
                            href={pub.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 px-4 py-2 rounded text-xs font-bold text-white hover:scale-105 transition-transform"
                            style={{ backgroundColor: '#E8A838', border: '2px solid #B8860B' }}
                          >
                            <FileText className="w-4 h-4" />
                            View {pub.type === "paper" ? "Paper" : "Certificate"}
                          </a>
                        )}
                      </div>
                    </div>
                  </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
