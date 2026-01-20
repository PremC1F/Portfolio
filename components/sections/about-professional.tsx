"use client";

import { motion } from "framer-motion";
import { MapPin, GraduationCap, Target, Briefcase, Code2, Award } from "lucide-react";

const fadeInUp = {
  initial: { opacity: 0, y: 15 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.3, ease: "easeOut" },
};

export function AboutProfessional() {
  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-gray-950">
      <div className="max-w-6xl mx-auto">
        <motion.div {...fadeInUp}>
          <h2 className="text-3xl sm:text-4xl font-bold mb-5 text-center bg-gradient-to-r from-blue-600/90 to-purple-600/90 bg-clip-text text-transparent">
            About Me
          </h2>
          <p className="text-center text-gray-600 dark:text-gray-400 mb-16 max-w-2xl mx-auto leading-relaxed">
            A brief snapshot of who I am, what I build, and how I approach real-world AI systems.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-6 mb-14">
          <motion.div
            {...fadeInUp}
            transition={{ delay: 0.05 }}
            className="bg-gray-50 dark:bg-gray-900 rounded-2xl p-8 border border-gray-200/50 dark:border-gray-800/50 hover:border-gray-300 dark:hover:border-gray-700 transition-all duration-300"
          >
            <div className="flex items-center gap-3 mb-6">
              <Briefcase className="w-5 h-5 text-blue-600/70" />
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white">Who I Am</h3>
            </div>
            
            <div className="space-y-5">
              <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed max-w-[480px]" style={{ lineHeight: "1.7" }}>
                I'm an AI/ML Engineer focused on building production-ready systems using Large Language Models, Retrieval-Augmented Generation, and MLOps.
                I care deeply about reliability, scalability, and shipping models that work in real-world environments.
              </p>
              
              <div className="space-y-2 pt-2 border-t border-gray-200 dark:border-gray-800">
                <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400">
                  <MapPin className="w-4 h-4 opacity-50" />
                  <span>Rochester, NY</span>
                </div>
                
                <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400">
                  <GraduationCap className="w-4 h-4 opacity-50" />
                  <span>MS in Artificial Intelligence — Rochester Institute of Technology</span>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            {...fadeInUp}
            transition={{ delay: 0.1 }}
            className="bg-gray-50 dark:bg-gray-900 rounded-2xl p-8 border border-gray-200/50 dark:border-gray-800/50 hover:border-gray-300 dark:hover:border-gray-700 transition-all duration-300"
          >
            <div className="flex items-center gap-3 mb-6">
              <Target className="w-5 h-5 text-purple-600/70" />
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white">What I Work On</h3>
            </div>
            
            <div className="space-y-2.5">
              {[
                "LLMs & Retrieval-Augmented Generation",
                "MLOps & Production ML Systems",
                "Computer Vision & Applied NLP",
              ].map((item, i) => (
                <div
                  key={i}
                  className="flex items-center gap-3 px-4 py-3 bg-white/50 dark:bg-gray-800/50 rounded-lg border border-gray-200/30 dark:border-gray-700/30 hover:bg-white dark:hover:bg-gray-800 hover:shadow-sm transition-all duration-300"
                >
                  <div className="w-1.5 h-1.5 rounded-full bg-blue-600/70"></div>
                  <span className="text-sm font-medium text-gray-700 dark:text-gray-300">{item}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        <motion.div
          {...fadeInUp}
          transition={{ delay: 0.15 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4"
        >
          {[
            { value: "3+", label: "Years of Hands-On ML Experience" },
            { value: "10+", label: "End-to-End Projects Built" },
            { value: "36+", label: "Tools & Frameworks Used" },
            { value: "2+", label: "Research / Technical Publications" },
          ].map((stat, i) => (
            <div
              key={i}
              className="bg-gray-50 dark:bg-gray-900 rounded-xl p-5 border border-gray-200/50 dark:border-gray-800/50 text-center relative"
            >
              {i < 3 && (
                <div className="absolute top-0 right-0 bottom-0 w-px bg-gray-200 dark:bg-gray-800 hidden md:block"></div>
              )}
              <div className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                {stat.value}
              </div>
              <div className="text-xs text-gray-600 dark:text-gray-400 leading-tight">
                {stat.label}
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
