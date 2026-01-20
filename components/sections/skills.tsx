"use client";

import { motion } from "framer-motion";
import { skillCategories } from "@/data/skills";
import { MarioBackground } from "@/components/mario-background";
import { Star, Zap, Flame } from "lucide-react";

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.5 },
};

// Mario Power-Up styles for each category
const powerUpStyles = {
  "Machine Learning & AI": {
    color: "#F08030",
    icon: "🔥",
    powerUpName: "FIRE FLOWER",
  },
  "Cloud & MLOps": {
    color: "#4A90E2",
    icon: "⭐",
    powerUpName: "SUPER STAR",
  },
  "Programming & Data": {
    color: "#32CD32",
    icon: "🍄",
    powerUpName: "SUPER MUSHROOM",
  },
};

// Mario Power-Up Box Component
function PowerUpBox({ color, icon }: { color: string; icon: string }) {
  return (
    <div className="relative w-24 h-24 mx-auto mb-4">
      <motion.div
        className="absolute inset-0 mario-card"
        style={{
          background: `linear-gradient(135deg, ${color} 0%, ${color}CC 100%)`,
          boxShadow: `0 0 20px ${color}60`,
        }}
        animate={{
          y: [0, -5, 0],
          boxShadow: [
            `0 0 15px ${color}60`,
            `0 0 30px ${color}`,
            `0 0 15px ${color}60`,
          ],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-5xl">{icon}</div>
        </div>
        {/* Question mark corners */}
        {['top-1 left-1', 'top-1 right-1', 'bottom-1 left-1', 'bottom-1 right-1'].map((pos, i) => (
          <motion.div
            key={i}
            className={`absolute ${pos} text-xs font-bold`}
            style={{ color: '#8B5A00' }}
            animate={{
              opacity: [0.5, 1, 0.5],
            }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              delay: i * 0.2,
            }}
          >
            ?
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}

export function SkillsSection() {
  return (
    <section
      id="skills"
      className="py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden"
    >
      <MarioBackground variant="starroad" interactive={false} />

      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div {...fadeInUp}>
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-center bg-gradient-to-r from-red-600 via-yellow-500 to-blue-600 bg-clip-text text-transparent">
            🌟 Power-Up Collection 🌟
          </h2>
          <p className="text-gray-600 dark:text-gray-400 text-center mb-12 max-w-2xl mx-auto font-semibold">
            Skills and technologies I've mastered on this adventure!
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {skillCategories.map((category, index) => {
            const powerUp = powerUpStyles[category.category as keyof typeof powerUpStyles] || {
              color: "#E8A838",
              icon: "⭐",
              powerUpName: "POWER STAR",
            };

            return (
              <motion.div
                key={category.category}
                {...fadeInUp}
                transition={{ delay: index * 0.15, duration: 0.5 }}
                className="mario-card p-6 relative overflow-hidden group"
              >
                {/* Power-up glow effect on hover */}
                <motion.div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  style={{
                    background: `radial-gradient(circle at center, ${powerUp.color}20 0%, transparent 70%)`,
                  }}
                />

                {/* Power-Up Box */}
                <PowerUpBox color={powerUp.color} icon={powerUp.icon} />

                {/* Power-Up Name */}
                <div className="text-center mb-4">
                  <div
                    className="inline-block px-3 py-1 rounded text-xs mb-2 font-bold text-white"
                    style={{
                      backgroundColor: powerUp.color,
                      border: `2px solid ${powerUp.color}DD`,
                    }}
                  >
                    {powerUp.powerUpName}
                  </div>
                  <h3
                    className="text-lg font-bold"
                    style={{ color: powerUp.color }}
                  >
                    {category.category}
                  </h3>
                </div>

                {/* Skills */}
                <div className="space-y-2">
                  <div className="text-xs font-bold text-gray-600 dark:text-gray-400 text-center mb-3">
                    ⚡ EQUIPPED SKILLS ⚡
                  </div>
                  <div className="flex flex-wrap gap-2 justify-center">
                    {category.skills.map((skill) => (
                      <motion.span
                        key={skill}
                        className="px-2 py-1 rounded text-xs font-bold cursor-pointer"
                        style={{
                          backgroundColor: `${powerUp.color}15`,
                          color: powerUp.color,
                          border: `2px solid ${powerUp.color}50`,
                        }}
                        whileHover={{
                          scale: 1.1,
                          backgroundColor: `${powerUp.color}30`,
                          boxShadow: `0 0 15px ${powerUp.color}50`,
                        }}
                        transition={{ duration: 0.2 }}
                      >
                        {skill}
                      </motion.span>
                    ))}
                  </div>
                </div>

                {/* Power-up status */}
                <div className="mt-6 pt-4" style={{ borderTop: `3px solid ${powerUp.color}30` }}>
                  <div className="flex items-center justify-center gap-2 text-xs text-gray-600 dark:text-gray-400 font-bold">
                    <Star className="w-4 h-4" style={{ color: powerUp.color }} />
                    <span>POWER-UP ACTIVE!</span>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Power-Up Summary */}
        <motion.div
          {...fadeInUp}
          transition={{ delay: 0.5 }}
          className="text-center"
        >
          <div className="mario-card p-8 inline-block max-w-3xl">
            <div className="flex items-center justify-center gap-3 mb-6">
              <Flame className="w-8 h-8 text-red-500" />
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                💫 SKILL INVENTORY 💫
              </h3>
              <Zap className="w-8 h-8 text-yellow-500" />
            </div>

            <div className="grid grid-cols-3 gap-6 mb-6">
              <div className="text-center">
                <div className="text-4xl font-bold text-red-600 dark:text-red-400 mb-1">
                  3
                </div>
                <div className="text-sm text-gray-600 dark:text-gray-400 font-semibold">
                  Power-Ups
                </div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold mb-1" style={{ color: '#E8A838' }}>
                  36+
                </div>
                <div className="text-sm text-gray-600 dark:text-gray-400 font-semibold">
                  Total Skills
                </div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold mb-1">
                  ⭐⭐⭐
                </div>
                <div className="text-sm text-gray-600 dark:text-gray-400 font-semibold">
                  Skill Level
                </div>
              </div>
            </div>

            <p className="text-sm text-gray-700 dark:text-gray-300 font-semibold">
              🍄 "It's-a me! A Machine Learning Engineer with all the power-ups needed
              to build amazing AI systems!" 🌟
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
