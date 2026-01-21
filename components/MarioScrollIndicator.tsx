"use client";

import { useEffect, useState, useRef } from "react";

export function MarioScrollIndicator() {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [isAtBottom, setIsAtBottom] = useState(false);
  const [showFireworks, setShowFireworks] = useState(false);
  const rafRef = useRef<number | undefined>(undefined);
  const lastScrollY = useRef(0);
  const fireworkTimeoutRef = useRef<NodeJS.Timeout | undefined>(undefined);

  useEffect(() => {
    let ticking = false;

    const updateScrollProgress = () => {
      const scrollY = window.scrollY;
      const documentHeight = document.documentElement.scrollHeight;
      const viewportHeight = window.innerHeight;
      const maxScroll = documentHeight - viewportHeight;

      if (maxScroll <= 0) {
        setScrollProgress(0);
        setIsAtBottom(false);
        return;
      }

      const progress = Math.min(Math.max(scrollY / maxScroll, 0), 1);
      
      setScrollProgress(progress);
      const reachedBottom = progress >= 0.98;
      
      if (reachedBottom && !isAtBottom) {
        setShowFireworks(true);
        if (fireworkTimeoutRef.current) {
          clearTimeout(fireworkTimeoutRef.current);
        }
        fireworkTimeoutRef.current = setTimeout(() => {
          setShowFireworks(false);
        }, 2000);
      }
      
      setIsAtBottom(reachedBottom);
      
      lastScrollY.current = scrollY;
      ticking = false;
    };

    const handleScroll = () => {
      if (!ticking) {
        rafRef.current = requestAnimationFrame(updateScrollProgress);
        ticking = true;
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    updateScrollProgress();

    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (rafRef.current) {
        cancelAnimationFrame(rafRef.current);
      }
      if (fireworkTimeoutRef.current) {
        clearTimeout(fireworkTimeoutRef.current);
      }
    };
  }, [isAtBottom]);

  const poleHeight = 600;
  const marioStartY = 20;
  const marioEndY = poleHeight - 100;
  const marioY = marioStartY + scrollProgress * (marioEndY - marioStartY);

  return (
    <div
      className="fixed right-8 top-1/2 -translate-y-1/2 pointer-events-none z-50 hidden lg:block"
      style={{
        opacity: scrollProgress > 0.01 ? 1 : 0,
        transition: "opacity 0.3s ease-in-out",
      }}
      aria-hidden="true"
    >
      <style jsx>{`
        @media (prefers-reduced-motion: reduce) {
          .mario-scroll-indicator {
            display: none;
          }
        }
      `}</style>

      <div className="mario-scroll-indicator relative" style={{ height: `${poleHeight}px`, width: "80px" }}>
        {/* Flag Pole - improved design */}
        <div
          className="absolute left-1/2 -translate-x-1/2 w-3 rounded-full"
          style={{
            height: `${poleHeight}px`,
            background: "linear-gradient(to right, #8B7355 0%, #A0826D 50%, #8B7355 100%)",
            boxShadow: "inset -2px 0 4px rgba(0,0,0,0.4), inset 2px 0 4px rgba(255,255,255,0.1)",
          }}
        />

        {/* Pole cap at top */}
        <div
          className="absolute left-1/2 -translate-x-1/2 w-4 h-4 rounded-full"
          style={{
            top: "-2px",
            background: "radial-gradient(circle at 30% 30%, #E8A838, #B8860B)",
            boxShadow: "0 2px 4px rgba(0,0,0,0.3)",
          }}
        />

        {/* Flag at top - improved */}
        <div
          className="absolute left-1/2"
          style={{
            top: "8px",
            transform: `translateX(-50%) ${isAtBottom ? "scale(1.1)" : "scale(1)"}`,
            transition: "transform 0.3s ease-out",
          }}
        >
          <div
            className="relative w-10 h-7 bg-gradient-to-br from-red-500 via-red-600 to-red-700 border-2 border-red-800 shadow-lg"
            style={{
              clipPath: "polygon(0 0, 100% 0, 90% 50%, 100% 100%, 0 100%)",
              animation: isAtBottom ? "wave 0.6s ease-in-out infinite" : "gentleWave 2s ease-in-out infinite",
            }}
          >
            <div className="absolute top-1/2 left-1/4 w-1 h-1 bg-white opacity-40 rounded-full" />
          </div>
        </div>

        {/* Fireworks - only when reaching bottom */}
        {showFireworks && (
          <>
            <div className="absolute left-1/2 top-4 -translate-x-1/2 pointer-events-none">
              {[...Array(6)].map((_, i) => (
                <div
                  key={i}
                  className="absolute"
                  style={{
                    animation: `firework 1s ease-out forwards`,
                    animationDelay: `${i * 0.1}s`,
                    left: "0",
                    top: "0",
                  }}
                >
                  <div
                    className="w-2 h-2 rounded-full"
                    style={{
                      background: i % 3 === 0 ? "#FFD700" : i % 3 === 1 ? "#FF6B6B" : "#4ECDC4",
                      boxShadow: `0 0 10px ${i % 3 === 0 ? "#FFD700" : i % 3 === 1 ? "#FF6B6B" : "#4ECDC4"}`,
                      transform: `rotate(${i * 60}deg) translateY(-40px)`,
                    }}
                  />
                </div>
              ))}
            </div>
          </>
        )}

        {/* Mario character - improved design */}
        <div
          className="absolute left-1/2 -translate-x-1/2"
          style={{
            transform: `translateX(-50%) translateY(${marioY}px)`,
            transition: "transform 0.15s ease-out",
            opacity: isAtBottom ? 0.4 : 1,
            filter: isAtBottom ? "brightness(0.7)" : "brightness(1)",
          }}
        >
          <div className="relative w-14 h-16">
            {/* Mario sprite - better pixel art */}
            <div className="absolute inset-0">
              {/* Hat */}
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-11 h-4 bg-gradient-to-b from-red-500 to-red-600 rounded-t-full border-b-2 border-red-700" />
              {/* Hat brim */}
              <div className="absolute top-3 left-1/2 -translate-x-1/2 w-12 h-1.5 bg-red-700 rounded-full" />
              {/* Face */}
              <div className="absolute top-4 left-1/2 -translate-x-1/2 w-9 h-7 bg-gradient-to-br from-amber-100 to-amber-200 rounded-full border border-amber-300" />
              {/* Eyes */}
              <div className="absolute top-5 left-3 w-2 h-2 bg-gray-900 rounded-full" />
              <div className="absolute top-5 right-3 w-2 h-2 bg-gray-900 rounded-full" />
              {/* Nose */}
              <div className="absolute top-6 left-1/2 -translate-x-1/2 w-2 h-2.5 bg-amber-300 rounded-full" />
              {/* Mustache */}
              <div className="absolute top-7.5 left-1/2 -translate-x-1/2 w-7 h-2 bg-gradient-to-b from-gray-800 to-gray-900 rounded-full" />
              <div className="absolute top-7 left-1/2 -translate-x-1/2 w-1 h-1 bg-amber-200 rounded-full" />
              {/* Overalls */}
              <div className="absolute top-10 left-1/2 -translate-x-1/2 w-11 h-5 bg-gradient-to-b from-blue-600 to-blue-700 rounded-b-lg border-2 border-blue-800" />
              {/* Buttons */}
              <div className="absolute top-11 left-4 w-1.5 h-1.5 bg-yellow-400 rounded-full border border-yellow-600" />
              <div className="absolute top-11 right-4 w-1.5 h-1.5 bg-yellow-400 rounded-full border border-yellow-600" />
              {/* Gloves */}
              <div className="absolute top-10 left-1 w-2 h-2 bg-white rounded-full" />
              <div className="absolute top-10 right-1 w-2 h-2 bg-white rounded-full" />
            </div>
          </div>
        </div>

        {/* Castle at bottom - improved design */}
        {scrollProgress > 0.85 && (
          <div
            className="absolute left-1/2 -translate-x-1/2 bottom-0"
            style={{
              opacity: Math.min((scrollProgress - 0.85) / 0.13, 1),
              transition: "opacity 0.3s ease-in-out",
            }}
          >
            <div className="relative w-20 h-24">
              {/* Castle body */}
              <div 
                className="absolute bottom-0 left-1/2 -translate-x-1/2 w-16 h-20 rounded-t-sm border-2"
                style={{
                  background: "linear-gradient(135deg, #6B7280 0%, #4B5563 50%, #374151 100%)",
                  borderColor: "#1F2937",
                  boxShadow: "inset -2px 0 8px rgba(0,0,0,0.4)",
                }}
              />
              {/* Battlements */}
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-16 flex justify-around">
                <div className="w-3 h-4 bg-gradient-to-b from-gray-600 to-gray-700 border border-gray-800" />
                <div className="w-3 h-4 bg-gradient-to-b from-gray-600 to-gray-700 border border-gray-800" />
                <div className="w-3 h-4 bg-gradient-to-b from-gray-600 to-gray-700 border border-gray-800" />
              </div>
              {/* Door arch */}
              <div className="absolute bottom-2 left-1/2 -translate-x-1/2 w-6 h-9 bg-gradient-to-b from-gray-900 to-black rounded-t-full border-2 border-gray-950" />
              {/* Door detail */}
              <div className="absolute bottom-2 left-1/2 -translate-x-1/2 w-1 h-8 bg-gray-800" />
              {/* Windows */}
              <div className="absolute top-6 left-2 w-2.5 h-3 bg-gradient-to-br from-yellow-300 to-yellow-500 border border-yellow-600 opacity-80" />
              <div className="absolute top-6 right-2 w-2.5 h-3 bg-gradient-to-br from-yellow-300 to-yellow-500 border border-yellow-600 opacity-80" />
              <div className="absolute top-11 left-2 w-2.5 h-3 bg-gradient-to-br from-yellow-300 to-yellow-500 border border-yellow-600 opacity-80" />
              <div className="absolute top-11 right-2 w-2.5 h-3 bg-gradient-to-br from-yellow-300 to-yellow-500 border border-yellow-600 opacity-80" />
              {/* Tower tops */}
              <div className="absolute -top-2 -left-1 w-4 h-6 bg-gradient-to-b from-gray-600 to-gray-700 border border-gray-800 rounded-t-sm" />
              <div className="absolute -top-2 -right-1 w-4 h-6 bg-gradient-to-b from-gray-600 to-gray-700 border border-gray-800 rounded-t-sm" />
            </div>
          </div>
        )}
      </div>

      <style jsx>{`
        @keyframes wave {
          0%, 100% { transform: translateX(-50%) rotate(0deg); }
          25% { transform: translateX(-50%) rotate(12deg); }
          75% { transform: translateX(-50%) rotate(-8deg); }
        }
        
        @keyframes gentleWave {
          0%, 100% { transform: translateX(-50%) rotate(0deg); }
          50% { transform: translateX(-50%) rotate(3deg); }
        }
        
        @keyframes firework {
          0% {
            opacity: 1;
            transform: scale(0) translateY(0);
          }
          50% {
            opacity: 1;
          }
          100% {
            opacity: 0;
            transform: scale(1.5) translateY(-20px);
          }
        }
      `}</style>
    </div>
  );
}
