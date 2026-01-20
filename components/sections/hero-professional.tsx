"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowDown, Mail, FileText, Github, Linkedin } from "lucide-react";
import Image from "next/image";

interface HeroProfessionalProps {
  scrollToSection: (id: string) => void;
}

export function HeroProfessional({ scrollToSection }: HeroProfessionalProps) {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden py-20 bg-gradient-to-br from-white to-gray-50 dark:from-gray-950 dark:to-gray-900">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="flex justify-center lg:justify-start"
          >
            <motion.div
              className="relative w-72 h-72 rounded-3xl overflow-hidden backdrop-blur-xl bg-white/10 dark:bg-black/20 border border-white/20 dark:border-white/10 shadow-xl"
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            >
              <div className="absolute inset-2 rounded-2xl overflow-hidden">
                <Image
                  src="/profile.png?v=1"
                  alt="Prem Babu Kanaparthi"
                  fill
                  className="object-cover"
                  style={{ filter: "saturate(0.92)" }}
                  priority
                  unoptimized
                />
              </div>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="text-center lg:text-left space-y-5"
          >
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.1, ease: "easeOut" }}
              className="inline-block"
            >
              <span className="px-4 py-1.5 rounded-full bg-gradient-to-r from-blue-600/90 to-purple-600/90 text-white text-xs font-medium tracking-wide">
                Open to AI / ML Engineer Roles (2026)
              </span>
            </motion.div>

            <motion.h1
              className="text-4xl sm:text-5xl lg:text-6xl leading-tight"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.15, ease: "easeOut" }}
            >
              <span className="font-semibold bg-gradient-to-r from-blue-600/95 to-purple-600/95 bg-clip-text text-transparent">
                Prem Babu
              </span>
              <br />
              <span className="font-bold text-gray-900 dark:text-white" style={{ letterSpacing: "0.5px" }}>
                Kanaparthi
              </span>
            </motion.h1>

            <motion.p
              className="text-xl sm:text-2xl text-gray-700/90 dark:text-gray-300/90 font-semibold -mt-1"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.2, ease: "easeOut" }}
            >
              AI/ML Engineer
            </motion.p>

            <motion.p
              className="text-base text-gray-600 dark:text-gray-400 max-w-[540px] mx-auto lg:mx-0 leading-relaxed -mt-1"
              style={{ lineHeight: "1.7" }}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.25, ease: "easeOut" }}
            >
              Building production-ready AI systems with Large Language Models, Retrieval-Augmented Generation, and MLOps.
              <br />
              Focused on scalable, reliable AI for real-world deployment. MS in Artificial Intelligence, Rochester Institute of Technology.
            </motion.p>

            <motion.div
              className="flex flex-col sm:flex-row gap-3 justify-center lg:justify-start pt-3"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.3, ease: "easeOut" }}
            >
              <Button
                size="lg"
                onClick={() => scrollToSection("projects")}
                className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white shadow-lg hover:shadow-blue-500/25 transition-all duration-300"
              >
                View Selected Work
                <ArrowDown className="ml-2 h-4 w-4" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                onClick={() => scrollToSection("contact")}
                className="border-2 border-gray-300 dark:border-gray-600 hover:bg-gray-50 dark:hover:bg-gray-800/50 transition-all duration-300"
              >
                Let's Talk
                <Mail className="ml-2 h-4 w-4" />
              </Button>
            </motion.div>

            <motion.div
              className="flex gap-3 justify-center lg:justify-start pt-2"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3, delay: 0.35 }}
            >
              <a
                href="https://github.com/PremC1F"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-full bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-all duration-300 hover:scale-105"
              >
                <Github className="w-5 h-5 text-gray-700 dark:text-gray-300" />
              </a>
              <a
                href="https://linkedin.com/in/prem-babu-kanaparthi"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-full bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-all duration-300 hover:scale-105"
              >
                <Linkedin className="w-5 h-5 text-gray-700 dark:text-gray-300" />
              </a>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
