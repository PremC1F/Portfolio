"use client";

import { createContext, useContext, useState, ReactNode } from "react";

type PortfolioMode = "professional" | "mario";

interface PortfolioModeContextType {
  mode: PortfolioMode;
  toggleMode: () => void;
  setMode: (mode: PortfolioMode) => void;
}

const PortfolioModeContext = createContext<PortfolioModeContextType | undefined>(
  undefined
);

export function PortfolioModeProvider({ children }: { children: ReactNode }) {
  const [mode, setModeState] = useState<PortfolioMode>("professional");

  const toggleMode = () => {
    setModeState((prev) => (prev === "professional" ? "mario" : "professional"));
  };

  const setMode = (newMode: PortfolioMode) => {
    setModeState(newMode);
  };

  return (
    <PortfolioModeContext.Provider value={{ mode, toggleMode, setMode }}>
      {children}
    </PortfolioModeContext.Provider>
  );
}

export function usePortfolioMode() {
  const context = useContext(PortfolioModeContext);
  if (context === undefined) {
    throw new Error(
      "usePortfolioMode must be used within a PortfolioModeProvider"
    );
  }
  return context;
}
