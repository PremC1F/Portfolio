"use client";

import { motion } from "framer-motion";

interface RetroBackgroundProps {
  variant?: "pink" | "cyan" | "yellow" | "purple" | "mixed";
  intensity?: "low" | "medium" | "high";
}

export function RetroBackground({ variant = "mixed", intensity = "medium" }: RetroBackgroundProps) {
  const intensityMap = {
    low: { blur: "blur-2xl", opacity: "0.10" },
    medium: { blur: "blur-3xl", opacity: "0.15" },
    high: { blur: "blur-3xl", opacity: "0.25" },
  };

  const config = intensityMap[intensity];

  const getGradients = () => {
    switch (variant) {
      case "pink":
        return {
          orb1: "from-pink-500/30 to-purple-500/30",
          orb2: "from-pink-400/25 to-fuchsia-500/25",
        };
      case "cyan":
        return {
          orb1: "from-cyan-500/30 to-blue-500/30",
          orb2: "from-cyan-400/25 to-sky-500/25",
        };
      case "yellow":
        return {
          orb1: "from-yellow-500/30 to-orange-500/30",
          orb2: "from-yellow-400/25 to-amber-500/25",
        };
      case "purple":
        return {
          orb1: "from-purple-500/30 to-violet-500/30",
          orb2: "from-purple-400/25 to-indigo-500/25",
        };
      default:
        return {
          orb1: "from-pink-500/25 to-cyan-500/25",
          orb2: "from-yellow-400/20 to-purple-400/20",
        };
    }
  };

  const gradients = getGradients();

  return (
    <div className="absolute inset-0 -z-10 overflow-hidden pointer-events-none">
      {/* Animated gradient orbs */}
      <motion.div
        className={`absolute top-0 left-0 w-96 h-96 bg-gradient-to-r ${gradients.orb1} rounded-full ${config.blur}`}
        animate={{
          scale: [1, 1.2, 1],
          x: [0, 100, 0],
          y: [0, 50, 0],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <motion.div
        className={`absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-r ${gradients.orb2} rounded-full ${config.blur}`}
        animate={{
          scale: [1, 1.3, 1],
          x: [0, -50, 0],
          y: [0, -100, 0],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Geometric shapes for retro feel */}
      {variant === "mixed" && (
        <>
          <motion.div
            className="absolute top-1/4 right-1/4 w-32 h-32 border-4 border-pink-500/20 dark:border-pink-400/30"
            animate={{
              rotate: [0, 90, 180, 270, 360],
            }}
            transition={{
              duration: 30,
              repeat: Infinity,
              ease: "linear",
            }}
          />
          <motion.div
            className="absolute bottom-1/4 left-1/4 w-24 h-24 border-4 border-cyan-500/20 dark:border-cyan-400/30 rounded-full"
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.2, 0.4, 0.2],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        </>
      )}
    </div>
  );
}
