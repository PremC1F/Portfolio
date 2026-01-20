"use client";

import { motion } from "framer-motion";

interface PokemonBackgroundProps {
  variant?: "fire" | "water" | "grass" | "electric" | "mixed";
  intensity?: "low" | "medium" | "high";
}

export function PokemonBackground({ variant = "mixed", intensity = "medium" }: PokemonBackgroundProps) {
  const intensityMap = {
    low: { blur: "blur-2xl", opacity: 0.10 },
    medium: { blur: "blur-3xl", opacity: 0.15 },
    high: { blur: "blur-3xl", opacity: 0.25 },
  };

  const config = intensityMap[intensity];

  const getColors = () => {
    switch (variant) {
      case "fire":
        return {
          primary: "#F08030",
          secondary: "#EE1515",
          accent: "#F85888",
        };
      case "water":
        return {
          primary: "#6890F0",
          secondary: "#78C8F0",
          accent: "#98D8D8",
        };
      case "grass":
        return {
          primary: "#78C850",
          secondary: "#A8D878",
          accent: "#C8E898",
        };
      case "electric":
        return {
          primary: "#FFD700",
          secondary: "#F8D030",
          accent: "#FFF050",
        };
      default:
        return {
          primary: "#F08030",
          secondary: "#6890F0",
          accent: "#FFD700",
        };
    }
  };

  const colors = getColors();

  // Pokeball SVG as floating elements
  const Pokeball = ({ className }: { className?: string }) => (
    <div className={`absolute ${className}`}>
      <svg width="60" height="60" viewBox="0 0 60 60" fill="none">
        <circle cx="30" cy="30" r="28" fill="#EE1515" fillOpacity="0.2" />
        <circle cx="30" cy="30" r="28" fill="white" fillOpacity="0.2" />
        <line x1="2" y1="30" x2="58" y2="30" stroke="currentColor" strokeWidth="3" opacity="0.3" />
        <circle cx="30" cy="30" r="8" fill="white" fillOpacity="0.4" stroke="currentColor" strokeWidth="2" opacity="0.3" />
      </svg>
    </div>
  );

  return (
    <div className="absolute inset-0 -z-10 overflow-hidden pointer-events-none">
      {/* Type Energy Orbs */}
      <motion.div
        className={`absolute top-10 left-10 w-96 h-96 rounded-full ${config.blur}`}
        style={{
          background: `radial-gradient(circle, ${colors.primary}40 0%, transparent 70%)`,
        }}
        animate={{
          scale: [1, 1.2, 1],
          x: [0, 50, 0],
          y: [0, 30, 0],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <motion.div
        className={`absolute bottom-10 right-10 w-96 h-96 rounded-full ${config.blur}`}
        style={{
          background: `radial-gradient(circle, ${colors.secondary}40 0%, transparent 70%)`,
        }}
        animate={{
          scale: [1, 1.3, 1],
          x: [0, -30, 0],
          y: [0, -50, 0],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <motion.div
        className={`absolute top-1/2 left-1/2 w-96 h-96 rounded-full ${config.blur}`}
        style={{
          background: `radial-gradient(circle, ${colors.accent}30 0%, transparent 70%)`,
        }}
        animate={{
          scale: [1, 1.4, 1],
          rotate: [0, 180, 360],
        }}
        transition={{
          duration: 30,
          repeat: Infinity,
          ease: "linear",
        }}
      />

      {/* Floating Pokeballs */}
      {variant === "mixed" && (
        <>
          <motion.div
            animate={{
              y: [0, -30, 0],
              rotate: [0, 360],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            <Pokeball className="top-1/4 right-1/4 text-red-500" />
          </motion.div>

          <motion.div
            animate={{
              y: [0, 30, 0],
              rotate: [360, 0],
            }}
            transition={{
              duration: 10,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            <Pokeball className="bottom-1/3 left-1/4 text-blue-500" />
          </motion.div>

          <motion.div
            animate={{
              y: [0, -20, 0],
              x: [0, 20, 0],
              rotate: [0, 180, 360],
            }}
            transition={{
              duration: 12,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            <Pokeball className="top-1/3 left-1/3 text-yellow-500" />
          </motion.div>
        </>
      )}

      {/* Sparkle particles */}
      {[...Array(12)].map((_, i) => {
        const typeColors = [
          'bg-red-400',
          'bg-blue-400',
          'bg-green-400',
          'bg-yellow-400',
          'bg-purple-400',
          'bg-pink-400'
        ];
        return (
          <motion.div
            key={i}
            className={`absolute w-2 h-2 ${typeColors[i % typeColors.length]} rounded-full`}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              boxShadow: `0 0 10px currentColor`,
            }}
            animate={{
              scale: [0, 1, 0],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: 2 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        );
      })}
    </div>
  );
}
