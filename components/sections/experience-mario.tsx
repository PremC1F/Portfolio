"use client";

import { motion } from "framer-motion";
import { experiences } from "@/data/experience";
import { Briefcase, Calendar, MapPin, Star } from "lucide-react";
import { MarioBackground } from "@/components/mario-background";

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.5 },
};

export function ExperienceMario() {
  return (
    <section
      id="experience"
      className="py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden"
    >
      <MarioBackground variant="mountain" interactive={false} />
      
      <div className="max-w-4xl mx-auto relative z-10">
        <motion.div {...fadeInUp}>
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-center bg-gradient-to-r from-red-600 via-yellow-500 to-blue-600 bg-clip-text text-transparent">
            🚩 Career Journey 🚩
          </h2>
          <p className="text-gray-600 dark:text-gray-400 text-center mb-12 max-w-2xl mx-auto font-semibold">
            Every level completed, every boss defeated!
          </p>
        </motion.div>

        <div className="relative">
          {/* Mario Flagpole Timeline */}
          <div className="absolute left-8 top-0 bottom-0 w-1 bg-gradient-to-b from-red-600 via-yellow-500 to-green-600 hidden md:block" style={{ boxShadow: '0 0 10px rgba(255, 215, 0, 0.5)' }} />

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <motion.div
                key={exp.id}
                {...fadeInUp}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                className="relative"
              >
                {/* Mario Star on Timeline */}
                <motion.div 
                  className="absolute left-8 top-6 w-8 h-8 hidden md:flex items-center justify-center -translate-x-[0.875rem]"
                  animate={{
                    rotate: [0, 360],
                    scale: [1, 1.2, 1],
                  }}
                  transition={{
                    rotate: { duration: 3, repeat: Infinity, ease: "linear" },
                    scale: { duration: 2, repeat: Infinity, ease: "easeInOut" },
                  }}
                >
                  <Star className="w-8 h-8" style={{ fill: '#E8A838', color: '#E8A838' }} />
                </motion.div>

                <div className="md:ml-20">
                  <div className="mario-card p-6 hover:scale-[1.02] transition-transform">
                    <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between mb-4">
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-2">
                          <div className="px-3 py-1 rounded text-xs font-bold text-white" style={{ backgroundColor: '#E8A838', border: '2px solid #B8860B' }}>
                            LEVEL {experiences.length - index}
                          </div>
                          <div className="flex gap-1">
                            {[1, 2, 3].map((i) => (
                              <Star key={i} className="w-4 h-4" style={{ color: '#E8A838', fill: '#E8A838' }} />
                            ))}
                          </div>
                        </div>
                        <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                          {exp.role}
                        </h3>
                        <div className="flex items-center gap-2 mb-2" style={{ color: '#E8A838' }}>
                          <Briefcase className="h-5 w-5" />
                          <span className="font-bold">{exp.company}</span>
                        </div>
                      </div>
                    </div>

                    <div className="flex flex-wrap gap-4 text-sm text-gray-600 dark:text-gray-400 mb-4">
                      <div className="flex items-center gap-2 px-3 py-1 rounded" style={{ backgroundColor: 'rgba(232, 168, 56, 0.1)', border: '2px solid rgba(232, 168, 56, 0.3)' }}>
                        <Calendar className="h-4 w-4" style={{ color: '#E8A838' }} />
                        <span className="font-semibold">{exp.period}</span>
                      </div>
                      <div className="flex items-center gap-2 px-3 py-1 rounded" style={{ backgroundColor: 'rgba(232, 168, 56, 0.1)', border: '2px solid rgba(232, 168, 56, 0.3)' }}>
                        <MapPin className="h-4 w-4" style={{ color: '#E8A838' }} />
                        <span className="font-semibold">{exp.location}</span>
                      </div>
                    </div>

                    <div className="pt-4" style={{ borderTop: '3px solid #E8A838' }}>
                      <div className="text-xs font-bold mb-3" style={{ color: '#E8A838' }}>⚡ ACHIEVEMENTS UNLOCKED ⚡</div>
                      <ul className="space-y-2">
                        {exp.achievements.map((achievement, i) => (
                          <li
                            key={i}
                            className="text-gray-700 dark:text-gray-300 pl-6 relative flex items-start gap-2"
                          >
                            <span className="absolute left-0 top-1 text-sm">🪙</span>
                            <span className="font-medium">{achievement}</span>
                          </li>
                        ))}
                      </ul>
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
