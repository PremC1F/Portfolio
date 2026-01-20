"use client";

import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { Coins } from "lucide-react";

interface MarioBackgroundProps {
  variant?: "overworld" | "castle" | "nightsky" | "starroad" | "mountain" | "underwater";
  interactive?: boolean;
}

// Overworld Theme - Classic Mario with clouds, pipes, bushes
function OverworldTheme() {
  return (
    <>
      {/* Floating Clouds */}
      <motion.div
        className="absolute w-24 h-12 rounded-full"
        style={{
          background: "rgba(255, 255, 255, 0.2)",
          top: "10%",
          left: "10%",
          filter: "blur(1px)",
        }}
        animate={{
          x: [0, 50, 0],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="absolute w-32 h-16 rounded-full"
        style={{
          background: "rgba(255, 255, 255, 0.2)",
          top: "60%",
          right: "15%",
          filter: "blur(1px)",
        }}
        animate={{
          x: [0, -30, 0],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      
      {/* Decorative Pipes */}
      <motion.div
        className="absolute bottom-20 left-10 w-16 h-20"
        style={{
          background: "linear-gradient(180deg, #32CD32 0%, #228B22 100%)",
          border: "3px solid #006400",
          borderRadius: "8px 8px 0 0",
        }}
        animate={{
          scale: [1, 1.02, 1],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        <div
          className="absolute -top-3 left-0 right-0 h-6"
          style={{
            background: "linear-gradient(180deg, #90EE90 0%, #32CD32 100%)",
            border: "3px solid #006400",
            borderRadius: "4px",
          }}
        />
      </motion.div>

      {/* Bushes */}
      <motion.div
        className="absolute bottom-16 right-20 w-20 h-12"
        style={{
          background: "radial-gradient(circle, #32CD32 0%, #228B22 100%)",
          borderRadius: "50% 50% 0 0",
          border: "2px solid #006400",
        }}
        animate={{
          scale: [1, 1.05, 1],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
    </>
  );
}

// Castle Theme - Dark fortress with lava bubbles, bricks, torches
function CastleTheme() {
  return (
    <>
      {/* Castle Bricks */}
      {[...Array(8)].map((_, i) => (
        <motion.div
          key={`brick-${i}`}
          className="absolute w-12 h-8"
          style={{
            left: `${10 + i * 12}%`,
            top: `${20 + (i % 3) * 15}%`,
            background: "linear-gradient(135deg, #8B4513 0%, #654321 100%)",
            border: "2px solid #4A2511",
            borderRadius: "2px",
          }}
          animate={{
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 3 + i * 0.5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}

      {/* Lava Bubbles */}
      {[...Array(6)].map((_, i) => (
        <motion.div
          key={`lava-${i}`}
          className="absolute w-6 h-6 rounded-full"
          style={{
            left: `${15 + i * 15}%`,
            bottom: "10%",
            background: "radial-gradient(circle, #FF4500 0%, #DC143C 50%, #8B0000 100%)",
            boxShadow: "0 0 20px rgba(255, 69, 0, 0.6)",
          }}
          animate={{
            y: [0, -100, 0],
            opacity: [1, 0.5, 0],
            scale: [1, 1.5, 0.5],
          }}
          transition={{
            duration: 4 + i * 0.5,
            repeat: Infinity,
            delay: i * 0.8,
            ease: "easeOut",
          }}
        />
      ))}

      {/* Floating Torches */}
      {[...Array(3)].map((_, i) => (
        <motion.div
          key={`torch-${i}`}
          className="absolute"
          style={{
            left: `${20 + i * 30}%`,
            top: `${30 + i * 10}%`,
          }}
          animate={{
            y: [0, -5, 0],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            delay: i * 0.5,
          }}
        >
          <div className="text-3xl">🔥</div>
        </motion.div>
      ))}
    </>
  );
}

// Night Sky Theme - Airships, stars, floating islands
function NightSkyTheme({ particles }: { particles: Array<{ id: number; x: number; y: number; duration: number; delay: number }> }) {
  return (
    <>
      {/* Twinkling Stars */}
      {particles.slice(0, 20).map((particle) => (
        <motion.div
          key={`star-${particle.id}`}
          className="absolute"
          style={{
            left: `${particle.x}%`,
            top: `${particle.y}%`,
          }}
          animate={{
            opacity: [0.2, 1, 0.2],
            scale: [0.5, 1, 0.5],
          }}
          transition={{
            duration: particle.duration,
            repeat: Infinity,
            delay: particle.delay,
          }}
        >
          <span className="text-yellow-200" style={{ fontSize: '12px' }}>✨</span>
        </motion.div>
      ))}

      {/* Floating Airship */}
      <motion.div
        className="absolute"
        style={{
          top: "20%",
          left: "10%",
        }}
        animate={{
          x: [0, 300, 0],
          y: [0, -20, 0],
        }}
        transition={{
          duration: 30,
          repeat: Infinity,
          ease: "linear",
        }}
      >
        <div className="text-4xl">🚁</div>
      </motion.div>

      {/* Floating Islands */}
      {[...Array(3)].map((_, i) => (
        <motion.div
          key={`island-${i}`}
          className="absolute"
          style={{
            left: `${20 + i * 30}%`,
            top: `${40 + i * 15}%`,
            width: '60px',
            height: '20px',
            background: "linear-gradient(135deg, #8B7355 0%, #654321 100%)",
            borderRadius: "30px 30px 0 0",
            border: "2px solid #4A2511",
          }}
          animate={{
            y: [0, -15, 0],
          }}
          transition={{
            duration: 4 + i,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}

      {/* Shooting Stars */}
      <motion.div
        className="absolute"
        style={{
          top: "15%",
          right: "20%",
        }}
        animate={{
          x: [-100, 300],
          y: [0, 100],
          opacity: [0, 1, 0],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          repeatDelay: 5,
        }}
      >
        <span className="text-2xl">💫</span>
      </motion.div>
    </>
  );
}

// Star Road Theme - Rainbow trails, power-ups, sparkles
function StarRoadTheme({ stars }: { stars: Array<{ id: number; x: number; y: number; duration: number; delay: number }> }) {
  return (
    <>
      {/* Rainbow Trail */}
      <motion.div
        className="absolute inset-0"
        style={{
          background: "linear-gradient(45deg, rgba(255,0,0,0.1) 0%, rgba(255,154,0,0.1) 10%, rgba(208,222,33,0.1) 20%, rgba(79,220,74,0.1) 30%, rgba(63,218,216,0.1) 40%, rgba(47,201,226,0.1) 50%, rgba(28,127,238,0.1) 60%, rgba(95,21,242,0.1) 70%, rgba(186,12,248,0.1) 80%, rgba(251,7,217,0.1) 90%, rgba(255,0,0,0.1) 100%)",
        }}
        animate={{
          backgroundPosition: ["0% 0%", "100% 100%"],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear",
        }}
      />

      {/* Floating Power-Up Boxes */}
      {[...Array(5)].map((_, i) => (
        <motion.div
          key={`powerup-${i}`}
          className="absolute"
          style={{
            left: `${15 + i * 18}%`,
            top: `${25 + (i % 3) * 20}%`,
          }}
          animate={{
            y: [0, -20, 0],
            rotate: [0, 360],
          }}
          transition={{
            y: { duration: 3, repeat: Infinity, ease: "easeInOut" },
            rotate: { duration: 4, repeat: Infinity, ease: "linear" },
            delay: i * 0.5,
          }}
        >
          <div className="text-3xl">{['🍄', '🌟', '🔥', '⭐', '🎁'][i]}</div>
        </motion.div>
      ))}

      {/* Sparkles */}
      {stars.map((star) => (
        <motion.div
          key={`sparkle-${star.id}`}
          className="absolute"
          style={{
            left: `${star.x}%`,
            top: `${star.y}%`,
          }}
          animate={{
            opacity: [0, 1, 0],
            scale: [0, 1.5, 0],
          }}
          transition={{
            duration: star.duration,
            repeat: Infinity,
            delay: star.delay,
          }}
        >
          <span className="text-yellow-400 text-2xl">✨</span>
        </motion.div>
      ))}
    </>
  );
}

// Mountain Theme - Snowflakes, icy platforms, peaks
function MountainTheme({ particles }: { particles: Array<{ id: number; x: number; y: number; duration: number; delay: number }> }) {
  return (
    <>
      {/* Mountain Peaks */}
      {[...Array(4)].map((_, i) => (
        <motion.div
          key={`peak-${i}`}
          className="absolute bottom-0"
          style={{
            left: `${i * 25}%`,
            width: '0',
            height: '0',
            borderLeft: '80px solid transparent',
            borderRight: '80px solid transparent',
            borderBottom: `${120 + i * 20}px solid rgba(200, 220, 255, 0.3)`,
            filter: 'blur(2px)',
          }}
          animate={{
            opacity: [0.5, 0.7, 0.5],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            delay: i * 0.5,
          }}
        />
      ))}

      {/* Snowflakes */}
      {particles.slice(0, 15).map((particle) => (
        <motion.div
          key={`snow-${particle.id}`}
          className="absolute"
          style={{
            left: `${particle.x}%`,
            top: `${-10 + (particle.y % 30)}%`,
          }}
          animate={{
            y: [0, 500],
            x: [0, (particle.x % 50) - 25],
            rotate: [0, 360],
          }}
          transition={{
            duration: particle.duration,
            repeat: Infinity,
            delay: particle.delay,
            ease: "linear",
          }}
        >
          <span className="text-blue-200">❄️</span>
        </motion.div>
      ))}

      {/* Icy Platforms */}
      {[...Array(3)].map((_, i) => (
        <motion.div
          key={`ice-${i}`}
          className="absolute"
          style={{
            left: `${25 + i * 25}%`,
            top: `${40 + i * 10}%`,
            width: '70px',
            height: '15px',
            background: "linear-gradient(135deg, rgba(173, 216, 230, 0.6) 0%, rgba(135, 206, 250, 0.4) 100%)",
            borderRadius: "8px",
            border: "2px solid rgba(176, 224, 230, 0.8)",
            boxShadow: "0 4px 10px rgba(135, 206, 250, 0.3)",
          }}
          animate={{
            y: [0, -10, 0],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            delay: i * 0.7,
          }}
        />
      ))}
    </>
  );
}

// Underwater Theme - Bubbles, fish, coral, waves
function UnderwaterTheme({ particles }: { particles: Array<{ id: number; x: number; y: number; size?: number; duration: number; delay: number }> }) {
  return (
    <>
      {/* Bubbles */}
      {particles.slice(0, 12).map((particle) => (
        <motion.div
          key={`bubble-${particle.id}`}
          className="absolute rounded-full"
          style={{
            left: `${particle.x}%`,
            bottom: '0%',
            width: `${particle.size || 30}px`,
            height: `${particle.size || 30}px`,
            background: "radial-gradient(circle at 30% 30%, rgba(255, 255, 255, 0.8), rgba(173, 216, 230, 0.4))",
            border: "2px solid rgba(135, 206, 250, 0.6)",
            boxShadow: "inset 0 0 10px rgba(255, 255, 255, 0.5)",
          }}
          animate={{
            y: [0, -600],
            x: [0, (particle.x % 40) - 20],
            opacity: [0.7, 1, 0],
          }}
          transition={{
            duration: particle.duration,
            repeat: Infinity,
            delay: particle.delay,
            ease: "easeOut",
          }}
        />
      ))}

      {/* Fish */}
      {[...Array(4)].map((_, i) => (
        <motion.div
          key={`fish-${i}`}
          className="absolute"
          style={{
            top: `${20 + i * 20}%`,
            left: '0%',
          }}
          animate={{
            x: [0, 1200, 0],
            scaleX: [1, 1, -1, -1],
          }}
          transition={{
            duration: 15 + i * 3,
            repeat: Infinity,
            delay: i * 2,
            ease: "linear",
          }}
        >
          <span className="text-3xl">🐠</span>
        </motion.div>
      ))}

      {/* Coral */}
      {[...Array(5)].map((_, i) => (
        <motion.div
          key={`coral-${i}`}
          className="absolute bottom-0"
          style={{
            left: `${10 + i * 20}%`,
          }}
          animate={{
            rotate: [-5, 5, -5],
            scale: [1, 1.05, 1],
          }}
          transition={{
            duration: 3 + i * 0.5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <div className="text-4xl">{['🪸', '🌿', '🪸', '🌊', '🪸'][i]}</div>
        </motion.div>
      ))}

      {/* Water waves overlay */}
      <motion.div
        className="absolute inset-0"
        style={{
          background: "linear-gradient(180deg, rgba(0, 119, 190, 0.1) 0%, rgba(0, 150, 199, 0.05) 100%)",
        }}
        animate={{
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
    </>
  );
}

export function MarioBackground({ variant = "overworld", interactive = true }: MarioBackgroundProps) {
  const [coins, setCoins] = useState<Array<{ id: number; x: number; y: number; collected: boolean }>>([]);
  const [blocks, setBlocks] = useState<Array<{ id: number; x: number; y: number; hit: boolean }>>([]);
  const [stars, setStars] = useState<Array<{ id: number; x: number; y: number; duration: number; delay: number }>>([]);
  const [particles, setParticles] = useState<Array<{ id: number; x: number; y: number; size?: number; duration: number; delay: number }>>([]);

  useEffect(() => {
    // Generate random coins
    const newCoins = Array.from({ length: 8 }, (_, i) => ({
      id: i,
      x: Math.random() * 90 + 5,
      y: Math.random() * 80 + 10,
      collected: false,
    }));
    setCoins(newCoins);

    // Generate random question blocks
    const newBlocks = Array.from({ length: 5 }, (_, i) => ({
      id: i,
      x: Math.random() * 85 + 5,
      y: Math.random() * 70 + 15,
      hit: false,
    }));
    setBlocks(newBlocks);

    // Generate random stars for sky variant
    const newStars = Array.from({ length: 6 }, (_, i) => ({
      id: i,
      x: Math.random() * 90 + 5,
      y: Math.random() * 60 + 5,
      duration: 3 + Math.random() * 2,
      delay: Math.random() * 2,
    }));
    setStars(newStars);

    // Generate random particles for various themes (stars, snowflakes, bubbles)
    const newParticles = Array.from({ length: 20 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 80,
      size: 20 + Math.random() * 20,
      duration: 5 + Math.random() * 7,
      delay: Math.random() * 5,
    }));
    setParticles(newParticles);
  }, []);

  const handleCoinClick = (coinId: number) => {
    if (!interactive) return;
    setCoins(prevCoins =>
      prevCoins.map(coin =>
        coin.id === coinId ? { ...coin, collected: true } : coin
      )
    );
    // Play coin sound effect (optional)
  };

  const handleBlockClick = (blockId: number) => {
    if (!interactive) return;
    setBlocks(prevBlocks =>
      prevBlocks.map(block =>
        block.id === blockId ? { ...block, hit: true } : block
      )
    );
    // Reset after animation
    setTimeout(() => {
      setBlocks(prevBlocks =>
        prevBlocks.map(block =>
          block.id === blockId ? { ...block, hit: false } : block
        )
      );
    }, 500);
  };

  const renderVariantElements = () => {
    switch (variant) {
      case "castle":
        return <CastleTheme />;
      case "nightsky":
        return particles.length > 0 ? <NightSkyTheme particles={particles} /> : null;
      case "starroad":
        return stars.length > 0 ? <StarRoadTheme stars={stars} /> : null;
      case "mountain":
        return particles.length > 0 ? <MountainTheme particles={particles} /> : null;
      case "underwater":
        return particles.length > 0 ? <UnderwaterTheme particles={particles} /> : null;
      default:
        return <OverworldTheme />;
    }
  };

  return (
    <div className="absolute inset-0 -z-10 overflow-hidden pointer-events-none">
      {/* Variant-specific themed elements */}
      {renderVariantElements()}

      {/* Interactive Coins */}
      {coins.map((coin) => (
        <motion.div
          key={coin.id}
          className={`absolute w-8 h-8 rounded-full cursor-pointer ${interactive ? 'pointer-events-auto' : ''}`}
          style={{
            left: `${coin.x}%`,
            top: `${coin.y}%`,
            background: coin.collected
              ? "transparent"
              : "linear-gradient(135deg, #FFD700 0%, #FFA500 100%)",
            border: coin.collected ? "none" : "3px solid #B8860B",
            boxShadow: coin.collected
              ? "none"
              : "0 0 10px rgba(255, 215, 0, 0.5), inset 0 2px 5px rgba(255, 255, 255, 0.3)",
          }}
          animate={
            coin.collected
              ? {
                  scale: [1, 1.5, 0],
                  y: [0, -50, -100],
                  opacity: [1, 1, 0],
                }
              : {
                  rotateY: [0, 180, 360],
                  y: [0, -5, 0],
                }
          }
          transition={
            coin.collected
              ? { duration: 0.5 }
              : {
                  rotateY: { duration: 2, repeat: Infinity, ease: "linear" },
                  y: { duration: 2, repeat: Infinity, ease: "easeInOut" },
                }
          }
          onClick={() => handleCoinClick(coin.id)}
          whileHover={interactive && !coin.collected ? { scale: 1.2 } : {}}
        >
          {!coin.collected && (
            <div className="absolute inset-0 flex items-center justify-center text-xs font-bold text-yellow-800">
              ⭐
            </div>
          )}
        </motion.div>
      ))}

      {/* Interactive Question Blocks */}
      {blocks.map((block) => (
        <motion.div
          key={block.id}
          className={`absolute w-10 h-10 cursor-pointer ${interactive ? 'pointer-events-auto' : ''}`}
          style={{
            left: `${block.x}%`,
            top: `${block.y}%`,
            background: "linear-gradient(135deg, #E8A838 0%, #D49420 50%, #B87C10 100%)",
            border: "3px solid #8B5A00",
            borderRadius: "4px",
            boxShadow: "0 4px 0 #6B4500, inset 0 2px 5px rgba(255, 255, 255, 0.3)",
          }}
          animate={
            block.hit
              ? { y: [0, -15, 0] }
              : { y: 0 }
          }
          transition={
            block.hit
              ? { duration: 0.3 }
              : {}
          }
          onClick={() => handleBlockClick(block.id)}
          whileHover={interactive ? { scale: 1.1 } : {}}
        >
          {/* Question Mark */}
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="text-xl font-bold text-white" style={{ textShadow: "2px 2px 0 #000" }}>
              ?
            </span>
          </div>

          {/* Hit effect */}
          {block.hit && (
            <motion.div
              className="absolute -top-8 left-1/2 transform -translate-x-1/2"
              initial={{ opacity: 1, y: 0 }}
              animate={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
            >
              <span className="text-xs font-bold text-yellow-400">+100</span>
            </motion.div>
          )}
        </motion.div>
      ))}

    </div>
  );
}
