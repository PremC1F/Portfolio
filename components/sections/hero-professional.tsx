"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowDown, Mail, FileText, Github, Linkedin, Twitter, BookOpen, GraduationCap } from "lucide-react";
import Image from "next/image";

interface HeroProfessionalProps {
  scrollToSection: (id: string) => void;
}

export function HeroProfessional({ scrollToSection }: HeroProfessionalProps) {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden pt-32 pb-20 bg-white dark:bg-black">

      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-[1.2fr_0.8fr] gap-16 items-start">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            className="pt-8 space-y-8"
          >

            <div className="space-y-3">
              <div className="inline-block px-4 py-2 bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-lg">
                <p className="text-base font-medium text-green-700 dark:text-green-300 tracking-wide">
                  🟢 Available for Opportunities
                </p>
              </div>
              <p className="text-base text-gray-600 dark:text-gray-400 tracking-wide uppercase font-medium">
                AI / ML Engineer
              </p>
            </div>

            <h1 className="text-6xl sm:text-7xl lg:text-8xl font-bold text-gray-900 dark:text-white tracking-tight leading-[1.1]">
              Prem Babu<br />Kanaparthi
            </h1>


            <div className="max-w-lg space-y-5">
              <p className="text-xl text-gray-700 dark:text-gray-200 leading-relaxed">
                I build production-ready AI systems, working across large language models,
                retrieval-augmented generation, and MLOps.
              </p>
              <p className="text-xl text-gray-700 dark:text-gray-200 leading-relaxed">
                My focus is on scalable, reliable machine learning systems that perform in
                real-world environments. I'm currently pursuing a Master's in Artificial
                Intelligence at Rochester Institute of Technology.
              </p>
            </div>

            <div className="flex gap-4 pt-6">
              <button
                onClick={() => scrollToSection("projects")}
                className="px-8 py-4 bg-gray-900 dark:bg-white text-white dark:text-black text-base font-medium hover:bg-gray-700 dark:hover:bg-gray-200 transition-colors duration-200 rounded-lg"
              >
                View Selected Work
              </button>
              <button
                onClick={() => scrollToSection("contact")}
                className="px-8 py-4 border-2 border-gray-300 dark:border-gray-600 text-gray-900 dark:text-white text-base font-medium hover:bg-gray-50 dark:hover:bg-gray-900 transition-colors duration-200 rounded-lg"
              >
                Contact
              </button>
            </div>

            <div className="flex gap-5 pt-4">
              <a
                href="https://github.com/PremC1F"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors duration-200"
              >
                <Github className="w-6 h-6" />
              </a>
              <a
                href="https://www.linkedin.com/in/prembk03/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors duration-200"
              >
                <Linkedin className="w-6 h-6" />
              </a>
              <a
                href="https://x.com/Premxai"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors duration-200"
              >
                <Twitter className="w-6 h-6" />
              </a>
              <a
                href="https://medium.com/@prem.b.kanaparthi"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors duration-200"
              >
                <BookOpen className="w-6 h-6" />
              </a>
              <a
                href="https://scholar.google.com/citations?user=yIWQSykAAAAJ&hl=en"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors duration-200"
                title="Google Scholar"
              >
                <GraduationCap className="w-6 h-6" />
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3, delay: 0.1 }}
            className="relative pt-24 lg:pt-32"
          >
            <div className="relative w-64 h-64 mx-auto">
              <Image
                src="/profile-mario.png?v=1"
                alt="Prem Babu Kanaparthi"
                fill
                className="object-cover rounded-2xl"
                style={{ filter: "saturate(0.85)" }}
                priority
                unoptimized
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
