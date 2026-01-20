"use client";

import { motion } from "framer-motion";
import { MapPin, GraduationCap, Target, Zap, Star, Trophy } from "lucide-react";
import { MarioBackground } from "@/components/mario-background";

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.5 },
};

export function AboutMario() {
  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      <MarioBackground variant="castle" interactive={false} />

      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div {...fadeInUp}>
          <h2 className="text-3xl sm:text-4xl font-bold mb-8 text-center bg-gradient-to-r from-red-600 via-yellow-500 to-blue-600 bg-clip-text text-transparent">
            Player Profile • World 1-1
          </h2>
        </motion.div>

        {/* Mario Character Card */}
        <div className="grid lg:grid-cols-2 gap-8 mb-12">
          {/* Left: Character Info Card */}
          <motion.div
            {...fadeInUp}
            transition={{ delay: 0.1, duration: 0.5 }}
            className="mario-card p-8"
          >
            {/* Character Header */}
            <div className="flex items-center justify-between mb-6 pb-4 border-b-4" style={{ borderColor: '#E8A838' }}>
              <div>
                <div className="text-sm font-bold text-gray-600 dark:text-gray-400 mb-1">
                  PLAYER NAME
                </div>
                <h3 className="text-3xl font-bold text-red-600 dark:text-red-400">
                  PREM BABU
                </h3>
              </div>
              <div className="text-right">
                <div className="text-sm font-bold text-gray-600 dark:text-gray-400 mb-1">
                  SCORE
                </div>
                <div className="text-3xl font-bold" style={{ color: '#E8A838' }}>
                  ★999
                </div>
              </div>
            </div>

            {/* Power-Up Status */}
            <div className="flex gap-2 mb-6">
              <span
                className="px-3 py-1 rounded text-xs font-bold text-white"
                style={{ backgroundColor: '#F08030', border: '2px solid #D49420' }}
              >
                🔥 ML POWER
              </span>
              <span
                className="px-3 py-1 rounded text-xs font-bold text-white"
                style={{ backgroundColor: '#4A90E2', border: '2px solid #2E5C8A' }}
              >
                ⚡ AI BOOST
              </span>
            </div>

            {/* Description */}
            <div className="space-y-4 mb-6">
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                <strong className="text-red-600 dark:text-red-400">Class:</strong> Machine Learning Engineer
              </p>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-sm">
                <strong className="text-red-600 dark:text-red-400">Current Quest:</strong> I'm a Machine Learning Engineer passionate about turning complex AI
                research into production-ready systems. Currently pursuing my
                Master's in Artificial Intelligence at RIT, I specialize in building
                scalable LLM applications, RAG systems, and MLOps pipelines that
                solve real-world problems.
              </p>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-sm">
                My experience spans from designing multi-model inference platforms
                at Concentrix to developing intelligent document processing systems.
                I thrive at the intersection of research and engineering, where I
                can architect solutions that are both technically sound and
                practically impactful.
              </p>
            </div>

            {/* Stats */}
            <div className="pt-4" style={{ borderTop: '4px solid #E8A838' }}>
              <div className="text-sm font-bold text-gray-700 dark:text-gray-300 mb-3">
                ⭐ PLAYER STATS ⭐
              </div>
              <div className="space-y-2">
                {[
                  { name: 'ML ENGINEERING', value: 95, color: '#F08030' },
                  { name: 'RESEARCH', value: 90, color: '#4A90E2' },
                  { name: 'PRODUCTION', value: 92, color: '#32CD32' },
                  { name: 'INNOVATION', value: 88, color: '#E8A838' },
                  { name: 'COLLABORATION', value: 94, color: '#FF6B6B' },
                ].map((stat, index) => (
                  <div key={index}>
                    <div className="flex justify-between text-xs mb-1">
                      <span className="font-bold text-gray-600 dark:text-gray-400">
                        {stat.name}
                      </span>
                      <span className="font-bold" style={{ color: stat.color }}>
                        {stat.value}
                      </span>
                    </div>
                    <div style={{ width: '100%', height: '8px', background: '#e5e7eb', borderRadius: '4px', border: '2px solid #8B5A00' }}>
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${stat.value}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: 0.5 + index * 0.1 }}
                        style={{
                          height: '100%',
                          background: stat.color,
                          borderRadius: '2px',
                        }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right: Power-Up Boxes */}
          <div className="space-y-6">
            <motion.div
              {...fadeInUp}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="mario-card p-6"
              style={{ borderLeft: '6px solid #32CD32' }}
            >
              <div className="flex items-center gap-3 mb-3">
                <div className="text-2xl">🍄</div>
                <h3 className="font-bold text-lg text-green-600 dark:text-green-400">
                  POWER-UP: EDUCATION
                </h3>
              </div>
              <p className="text-gray-700 dark:text-gray-300 text-sm font-semibold">
                MS in AI at Rochester Institute of Technology
                <br />
                <span className="text-xs text-gray-600 dark:text-gray-400">
                  🎓 Graduating May 2026
                </span>
              </p>
            </motion.div>

            <motion.div
              {...fadeInUp}
              transition={{ delay: 0.3, duration: 0.5 }}
              className="mario-card p-6"
              style={{ borderLeft: '6px solid #4A90E2' }}
            >
              <div className="flex items-center gap-3 mb-3">
                <MapPin className="h-6 w-6 text-blue-600 dark:text-blue-400" />
                <h3 className="font-bold text-lg text-blue-600 dark:text-blue-400">
                  CURRENT LOCATION
                </h3>
              </div>
              <p className="text-gray-700 dark:text-gray-300 text-sm font-semibold">
                📍 Rochester, NY
                <br />
                <span className="text-xs text-gray-600 dark:text-gray-400">
                  Ready to warp to new worlds nationwide
                </span>
              </p>
            </motion.div>

            <motion.div
              {...fadeInUp}
              transition={{ delay: 0.4, duration: 0.5 }}
              className="mario-card p-6"
              style={{ borderLeft: '6px solid #F08030' }}
            >
              <div className="flex items-center gap-3 mb-3">
                <Star className="h-6 w-6 text-orange-600 dark:text-orange-400" />
                <h3 className="font-bold text-lg text-orange-600 dark:text-orange-400">
                  SPECIAL ABILITIES
                </h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {['LLMs', 'RAG Systems', 'MLOps', 'Computer Vision'].map((ability, index) => (
                  <span
                    key={index}
                    className="px-2 py-1 rounded text-xs font-bold"
                    style={{
                      backgroundColor: '#F0803030',
                      color: '#F08030',
                      border: '2px solid #F08030',
                    }}
                  >
                    ⚡ {ability}
                  </span>
                ))}
              </div>
            </motion.div>

            <motion.div
              {...fadeInUp}
              transition={{ delay: 0.5, duration: 0.5 }}
              className="mario-card p-6"
              style={{ borderLeft: '6px solid #E8A838' }}
            >
              <div className="flex items-center gap-3 mb-3">
                <Trophy className="h-6 w-6" style={{ color: '#E8A838' }} />
                <h3 className="font-bold text-lg" style={{ color: '#E8A838' }}>
                  ACHIEVEMENT UNLOCKED
                </h3>
              </div>
              <p className="text-gray-700 dark:text-gray-300 text-sm font-semibold">
                🏆 Research-driven engineering with production-first mindset. Transforms
                AI concepts into battle-tested production systems.
              </p>
            </motion.div>
          </div>
        </div>

        {/* Level Progress */}
        <motion.div
          {...fadeInUp}
          transition={{ delay: 0.6 }}
          className="text-center"
        >
          <div className="mario-card p-6 inline-block max-w-2xl">
            <div className="flex items-center justify-center gap-3 mb-4">
              <Star className="h-6 w-6" style={{ color: '#E8A838' }} />
              <h3 className="font-bold text-lg text-gray-900 dark:text-white">
                🏁 CAREER PROGRESS 🏁
              </h3>
              <Star className="h-6 w-6" style={{ color: '#E8A838' }} />
            </div>
            <div className="flex items-center justify-center gap-4 flex-wrap">
              <div className="text-center">
                <div className="w-16 h-16 mario-card flex items-center justify-center mb-2">
                  <span className="text-2xl">🎓</span>
                </div>
                <p className="text-xs font-bold">Level 1</p>
                <p className="text-xs text-gray-600 dark:text-gray-400">Student</p>
              </div>
              <div className="text-2xl font-bold" style={{ color: '#E8A838' }}>→</div>
              <div className="text-center">
                <div className="w-16 h-16 mario-card flex items-center justify-center mb-2">
                  <span className="text-2xl">💼</span>
                </div>
                <p className="text-xs font-bold">Level 2</p>
                <p className="text-xs text-gray-600 dark:text-gray-400">Engineer</p>
              </div>
              <div className="text-2xl font-bold" style={{ color: '#E8A838' }}>→</div>
              <div className="text-center">
                <div className="w-16 h-16 mario-button flex items-center justify-center mb-2">
                  <span className="text-2xl">⭐</span>
                </div>
                <p className="text-xs font-bold">Level 3</p>
                <p className="text-xs text-gray-600 dark:text-gray-400">Master</p>
              </div>
            </div>
            <p className="text-xs text-gray-600 dark:text-gray-400 mt-4 font-semibold">
              ⭐ Currently at Master level • Collecting new skills! 🚀
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
