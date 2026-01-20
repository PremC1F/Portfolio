"use client";

import { motion } from "framer-motion";
import { Github, ExternalLink, Star } from "lucide-react";
import { Button } from "@/components/ui/button";

interface PokemonProjectCardProps {
  title: string;
  description: string;
  technologies: string[];
  githubUrl?: string;
  liveUrl?: string;
  rarity?: "common" | "uncommon" | "rare" | "legendary";
  typeColor?: string;
  hp?: number;
  stats?: {
    performance: number;
    scalability: number;
    innovation: number;
  };
}

export function PokemonProjectCard({
  title,
  description,
  technologies,
  githubUrl,
  liveUrl,
  rarity = "rare",
  typeColor = "#F08030",
  hp = 100,
  stats,
}: PokemonProjectCardProps) {
  const rarityConfig = {
    common: { stars: 1, glow: "0 0 10px rgba(200, 200, 200, 0.3)" },
    uncommon: { stars: 2, glow: "0 0 15px rgba(78, 200, 80, 0.4)" },
    rare: { stars: 3, glow: "0 0 20px rgba(238, 21, 21, 0.5)" },
    legendary: { stars: 4, glow: "0 0 30px rgba(255, 215, 0, 0.6)" },
  };

  const config = rarityConfig[rarity];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      whileHover={{ scale: 1.05, y: -5 }}
      transition={{ duration: 0.3 }}
      className="pokemon-card pokemon-card-holographic group"
      style={{ boxShadow: config.glow }}
    >
      {/* Card Header - Like Pokemon TCG */}
      <div className="p-6">
        {/* Title and HP */}
        <div className="flex items-start justify-between mb-4">
          <div className="flex-1">
            <div className="flex items-center gap-2 mb-2">
              <h3 className="text-2xl font-bold" style={{ color: typeColor }}>
                {title}
              </h3>
              {/* Rarity Stars */}
              <div className="flex gap-1">
                {[...Array(config.stars)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-4 h-4 fill-yellow-400 text-yellow-400"
                  />
                ))}
              </div>
            </div>
          </div>
          {/* HP Display */}
          <div className="text-right">
            <div className="text-sm font-semibold text-gray-600 dark:text-gray-400">
              HP
            </div>
            <div className="text-3xl font-bold" style={{ color: typeColor }}>
              {hp}
            </div>
          </div>
        </div>

        {/* Project "Image" Area - Represented by type color gradient */}
        <div
          className="w-full h-32 rounded-lg mb-4 flex items-center justify-center relative overflow-hidden"
          style={{
            background: `linear-gradient(135deg, ${typeColor}40 0%, ${typeColor}20 100%)`,
            border: `2px solid ${typeColor}`,
          }}
        >
          <div className="text-6xl font-bold opacity-10" style={{ color: typeColor }}>
            {title.charAt(0)}
          </div>

          {/* Holographic shine effect */}
          <motion.div
            className="absolute inset-0"
            style={{
              background: `linear-gradient(45deg, transparent 30%, rgba(255, 255, 255, 0.2) 50%, transparent 70%)`,
            }}
            animate={{
              x: ['-100%', '200%'],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              repeatDelay: 2,
            }}
          />
        </div>

        {/* Description */}
        <p className="text-sm text-gray-700 dark:text-gray-300 mb-4 min-h-[60px]">
          {description}
        </p>

        {/* Technologies as "Moves" */}
        <div className="mb-4">
          <div className="text-xs font-semibold text-gray-600 dark:text-gray-400 mb-2">
            TECH MOVES:
          </div>
          <div className="flex flex-wrap gap-2">
            {technologies.slice(0, 4).map((tech, index) => (
              <span
                key={index}
                className="pokemon-type-badge text-xs"
                style={{
                  backgroundColor: `${typeColor}30`,
                  color: typeColor,
                  borderColor: typeColor,
                }}
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Stats (Like Pokemon Card stats) */}
        {stats && (
          <div className="border-t-2 pt-4 mb-4" style={{ borderColor: `${typeColor}30` }}>
            <div className="grid grid-cols-3 gap-2 text-xs">
              <div>
                <div className="font-semibold text-gray-600 dark:text-gray-400">
                  PERF
                </div>
                <div className="font-bold text-lg" style={{ color: typeColor }}>
                  {stats.performance}
                </div>
              </div>
              <div>
                <div className="font-semibold text-gray-600 dark:text-gray-400">
                  SCALE
                </div>
                <div className="font-bold text-lg" style={{ color: typeColor }}>
                  {stats.scalability}
                </div>
              </div>
              <div>
                <div className="font-semibold text-gray-600 dark:text-gray-400">
                  INNO
                </div>
                <div className="font-bold text-lg" style={{ color: typeColor }}>
                  {stats.innovation}
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Action Buttons */}
        <div className="flex gap-2">
          {githubUrl && (
            <Button
              size="sm"
              variant="outline"
              className="flex-1 border-2 hover:scale-105 transition-transform"
              style={{
                borderColor: typeColor,
                color: typeColor,
              }}
              onClick={() => window.open(githubUrl, "_blank")}
            >
              <Github className="w-4 h-4 mr-1" />
              Code
            </Button>
          )}
          {liveUrl && (
            <Button
              size="sm"
              className="flex-1 hover:scale-105 transition-transform"
              style={{
                backgroundColor: typeColor,
                color: "white",
              }}
              onClick={() => window.open(liveUrl, "_blank")}
            >
              <ExternalLink className="w-4 h-4 mr-1" />
              Demo
            </Button>
          )}
        </div>
      </div>

      {/* Card footer - Set info (like Pokemon TCG) */}
      <div
        className="px-6 py-2 text-xs text-center font-mono border-t-2"
        style={{ borderColor: `${typeColor}30` }}
      >
        PROJECT #{hp} • {rarity.toUpperCase()} • 2024
      </div>
    </motion.div>
  );
}
