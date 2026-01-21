"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowDown, Mail, FileText, Star, Twitter, BookOpen, Github, Linkedin, GraduationCap } from "lucide-react";
import Image from "next/image";
import { MarioBackground } from "@/components/mario-background";
import { useState } from "react";

interface HeroMarioProps {
  scrollToSection: (id: string) => void;
}

export function HeroMario({ scrollToSection }: HeroMarioProps) {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden py-20">
      <MarioBackground variant="overworld" interactive={true} />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left: Mario Character Card */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="flex justify-center lg:justify-start"
          >
            <div className="relative" style={{ perspective: '1000px' }}>
              {/* Main Character Box - Flippable */}
              <motion.div
                className="relative w-80 h-80 cursor-pointer"
                style={{
                  transformStyle: 'preserve-3d',
                }}
                animate={{
                  rotateY: isFlipped ? 180 : 0,
                  y: [0, -10, 0],
                }}
                transition={{
                  rotateY: { duration: 0.6, ease: "easeInOut" },
                  y: { duration: 2, repeat: Infinity, ease: "easeInOut" },
                }}
                whileHover={{ scale: 1.05 }}
                onClick={() => setIsFlipped(!isFlipped)}
              >
                {/* Front Side - Original Photo */}
                <div
                  className="absolute inset-0 mario-card overflow-hidden"
                  style={{
                    background: 'linear-gradient(135deg, #E8A838 0%, #D49420 100%)',
                    backfaceVisibility: 'hidden',
                  }}
                >
                  <Image
                    src="/profile.png?v=1"
                    alt="Prem Babu Kanaparthi"
                    fill
                    className="object-cover p-8"
                    priority
                    unoptimized
                  />

                  {/* Question Mark Corners */}
                  {[
                    { top: '10px', left: '10px' },
                    { top: '10px', right: '10px' },
                    { bottom: '10px', left: '10px' },
                    { bottom: '10px', right: '10px' },
                  ].map((pos, i) => (
                    <motion.div
                      key={i}
                      className="absolute text-2xl font-bold"
                      style={{ ...pos, color: '#8B5A00' }}
                      animate={{
                        scale: [1, 1.2, 1],
                        opacity: [0.7, 1, 0.7],
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

                  {/* Click hint */}
                  <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 px-3 py-1 rounded-full text-[10px] font-bold" style={{ backgroundColor: 'rgba(0,0,0,0.6)', color: 'white' }}>
                    👆 Click to flip!
                  </div>
                </div>

                {/* Back Side - Mario-themed */}
                <div
                  className="absolute inset-0 mario-card overflow-hidden"
                  style={{
                    background: 'linear-gradient(135deg, #DC143C 0%, #8B0000 100%)',
                    backfaceVisibility: 'hidden',
                    transform: 'rotateY(180deg)',
                  }}
                >
                  <Image
                    src="/profile-mario.png?v=1"
                    alt="Prem Babu Kanaparthi - Mario Style"
                    fill
                    className="object-cover p-8"
                    unoptimized
                  />

                  {/* Star Corners for Mario side */}
                  {[
                    { top: '10px', left: '10px' },
                    { top: '10px', right: '10px' },
                    { bottom: '10px', left: '10px' },
                    { bottom: '10px', right: '10px' },
                  ].map((pos, i) => (
                    <motion.div
                      key={i}
                      className="absolute text-2xl"
                      style={{ ...pos }}
                      animate={{
                        scale: [1, 1.3, 1],
                        rotate: [0, 180, 360],
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        delay: i * 0.3,
                      }}
                    >
                      ⭐
                    </motion.div>
                  ))}

                  {/* Click hint */}
                  <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 px-3 py-1 rounded-full text-[10px] font-bold" style={{ backgroundColor: 'rgba(0,0,0,0.6)', color: 'white' }}>
                    👆 Click to flip!
                  </div>
                </div>
              </motion.div>

              {/* Floating Power-ups/Badges */}
              <motion.div
                className="absolute -top-6 -right-6 mario-button px-3 py-2 text-white text-[8px] font-bold"
                animate={{
                  y: [0, -8, 0],
                  rotate: [0, 5, 0, -5, 0],
                }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                <Star className="w-4 h-4 inline mr-1" />
                AI/ML
              </motion.div>
              <motion.div
                className="absolute -bottom-6 -left-6 px-3 py-2 text-white text-[8px] font-bold"
                style={{
                  background: 'linear-gradient(180deg, #4A90E2 0%, #2E5C8A 100%)',
                  border: '3px solid #1E3A5F',
                  borderRadius: '6px',
                  boxShadow: '0 4px 0 #1E3A5F, 0 6px 8px rgba(0,0,0,0.3)',
                }}
                animate={{
                  y: [0, 8, 0],
                  rotate: [0, -5, 0, 5, 0],
                }}
                transition={{ duration: 2.5, repeat: Infinity }}
              >
                🎓 RIT
              </motion.div>

              {/* Lives/Score Display */}
              <motion.div
                className="absolute -top-3 left-1/2 transform -translate-x-1/2 px-4 py-1"
                style={{
                  background: '#000',
                  border: '2px solid #FFF',
                  borderRadius: '4px',
                  color: '#FFF',
                  fontSize: '8px',
                  fontWeight: 'bold',
                }}
                animate={{
                  scale: [1, 1.05, 1],
                }}
                transition={{
                  duration: 1,
                  repeat: Infinity,
                }}
              >
                ★ WORLD 1-1 ★
              </motion.div>
            </div>
          </motion.div>

          {/* Right: Text Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center lg:text-left space-y-6"
          >
            {/* 1-UP Badge */}
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="inline-block"
            >
              <span
                className="px-4 py-2 rounded text-white text-[10px] font-bold"
                style={{
                  background: 'linear-gradient(180deg, #32CD32 0%, #228B22 100%)',
                  border: '3px solid #006400',
                  boxShadow: '0 4px 0 #006400',
                }}
              >
                🍄 1-UP • AVAILABLE FOR OPPORTUNITIES
              </span>
            </motion.div>

            <motion.h1
              className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-4 mario-text"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <span className="bg-gradient-to-r from-red-600 via-red-500 to-blue-600 bg-clip-text text-transparent">
                PREM BABU
              </span>
              <br />
              <span className="text-gray-900 dark:text-white">
                KANAPARTHI
              </span>
            </motion.h1>

            <motion.p
              className="text-xl sm:text-2xl text-gray-700 dark:text-gray-300 mb-6 font-bold"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              style={{ lineHeight: '1.6' }}
            >
              Machine Learning Engineer
            </motion.p>

            <motion.p
              className="text-base sm:text-lg text-gray-600 dark:text-gray-400 max-w-xl mx-auto lg:mx-0"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              style={{ lineHeight: '1.7' }}
            >
              Jumping through AI research levels and defeating production bugs!
              Building scalable LLM applications, RAG systems, and MLOps pipelines.
              Ready for the next world!
            </motion.p>

            {/* Action Buttons */}
            <motion.div
              className="flex flex-col sm:flex-row gap-3 justify-center lg:justify-start"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
            >
              <Button
                size="lg"
                onClick={() => scrollToSection("projects")}
                className="bg-gradient-to-r from-pink-500 to-purple-500 hover:from-pink-600 hover:to-purple-600 text-white px-6 retro-glow border-2 border-pink-400/50 font-bold uppercase tracking-wide"
              >
                View Projects
                <ArrowDown className="ml-2 h-4 w-4" />
              </Button>
              <Button
                size="lg"
                onClick={() => scrollToSection("resume")}
                className="bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white px-6 retro-glow border-2 border-cyan-400/50 font-bold uppercase tracking-wide"
              >
                <FileText className="mr-2 h-4 w-4" />
                View Resume
              </Button>
              <Button
                size="lg"
                variant="outline"
                onClick={() => scrollToSection("contact")}
                className="border-2 border-yellow-400 hover:bg-yellow-400/10 dark:border-yellow-300 hover:shadow-[0_0_20px_rgba(250,204,21,0.5)] font-bold uppercase tracking-wide"
              >
                Contact Me
                <Mail className="ml-2 h-4 w-4" />
              </Button>
            </motion.div>

            {/* Social Links */}
            <motion.div
              className="flex gap-4 justify-center lg:justify-start pt-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.7 }}
            >
              <a
                href="https://github.com/PremC1F"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-700 dark:text-gray-300 hover:text-pink-500 dark:hover:text-pink-400 transition-colors duration-200"
              >
                <Github className="w-6 h-6" />
              </a>
              <a
                href="https://www.linkedin.com/in/prembk03/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-700 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400 transition-colors duration-200"
              >
                <Linkedin className="w-6 h-6" />
              </a>
              <a
                href="https://x.com/Premxai"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-700 dark:text-gray-300 hover:text-cyan-500 dark:hover:text-cyan-400 transition-colors duration-200"
              >
                <Twitter className="w-6 h-6" />
              </a>
              <a
                href="https://medium.com/@prem.b.kanaparthi"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-700 dark:text-gray-300 hover:text-yellow-500 dark:hover:text-yellow-400 transition-colors duration-200"
              >
                <BookOpen className="w-6 h-6" />
              </a>
              <a
                href="https://scholar.google.com/citations?user=yIWQSykAAAAJ&hl=en"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-700 dark:text-gray-300 hover:text-green-500 dark:hover:text-green-400 transition-colors duration-200"
                title="Google Scholar"
              >
                <GraduationCap className="w-6 h-6" />
              </a>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
