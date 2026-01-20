"use client";

import { usePortfolioMode } from "@/components/providers/portfolio-mode-provider";
import { motion } from "framer-motion";
import { Gamepad2, Briefcase } from "lucide-react";

export function ModeToggle() {
  const { mode, toggleMode } = usePortfolioMode();

  return (
    <motion.button
      onClick={toggleMode}
      className="fixed bottom-8 right-8 z-50 px-6 py-3 rounded-full font-bold text-sm shadow-2xl flex items-center gap-2 transition-all hover:scale-105"
      style={{
        background: mode === "professional" 
          ? "linear-gradient(135deg, #E8A838 0%, #D49420 100%)"
          : "linear-gradient(135deg, #4A90E2 0%, #2E5C8A 100%)",
        border: mode === "professional" ? "3px solid #B8860B" : "3px solid #1E3A5F",
        color: "white",
      }}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      {mode === "professional" ? (
        <>
          <Gamepad2 className="w-5 h-5" />
          <span>Feeling bored? Enter Mario World! 🎮</span>
        </>
      ) : (
        <>
          <Briefcase className="w-5 h-5" />
          <span>Back to Professional Mode 💼</span>
        </>
      )}
    </motion.button>
  );
}
