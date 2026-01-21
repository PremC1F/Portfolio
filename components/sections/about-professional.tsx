"use client";

import { motion } from "framer-motion";
import { MapPin, GraduationCap } from "lucide-react";

const fadeIn = {
  initial: { opacity: 0, y: 8 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.25 },
};

export function AboutProfessional() {
  return (
    <section id="about" className="py-24 px-6 lg:px-8 bg-gray-50 dark:bg-black">
      <div className="max-w-5xl mx-auto">
        <motion.div {...fadeIn}>
          <h2 className="text-6xl sm:text-7xl font-bold mb-6 text-center text-gray-900 dark:text-white">
            About Me
          </h2>
          <p className="text-center text-gray-600 dark:text-gray-400 mb-20 max-w-2xl mx-auto text-xl leading-relaxed">
            A brief snapshot of how I think about building real-world AI systems.
          </p>
        </motion.div>

        <div className="bg-white dark:bg-gray-900 rounded-2xl p-10 lg:p-12 border border-gray-200 dark:border-gray-800">
          <div className="grid lg:grid-cols-2 gap-16 mb-16">
            <motion.div {...fadeIn} className="space-y-7">
              <h3 className="text-2xl font-semibold text-gray-900 dark:text-white tracking-tight">
                Who I Am
              </h3>
              
              <p className="text-xl text-gray-700 dark:text-gray-300 leading-[1.75]">
                I'm an AI/ML engineer focused on building production-ready systems across
                large language models, retrieval-augmented generation, and MLOps.
              </p>
              
              <p className="text-xl text-gray-700 dark:text-gray-300 leading-[1.75]">
                I care deeply about reliability, scalability, and shipping machine learning
                systems that work in real-world environments — not just experiments.
              </p>
            
              <div className="space-y-2 pt-6">
                <div className="flex items-center gap-2 text-base text-gray-500 dark:text-gray-500">
                  <MapPin className="w-4 h-4" />
                  <span>Rochester, NY</span>
                </div>
                
                <div className="flex items-center gap-2 text-base text-gray-500 dark:text-gray-500">
                  <GraduationCap className="w-4 h-4" />
                  <span>MS in Artificial Intelligence — Rochester Institute of Technology</span>
                </div>
              </div>
            </motion.div>

            <motion.div {...fadeIn} className="space-y-7">
              <h3 className="text-2xl font-semibold text-gray-900 dark:text-white tracking-tight">
                What I Work On
              </h3>
              
              <div className="space-y-5 pt-2">
                {[
                  "Large Language Models & Retrieval-Augmented Generation",
                  "MLOps & Production Machine Learning Systems",
                  "Computer Vision & Applied Natural Language Processing",
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <div className="w-1 h-1 rounded-full bg-gray-400 dark:bg-gray-600 mt-2.5 flex-shrink-0"></div>
                    <span className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed">{item}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>

          <motion.div {...fadeIn} className="pt-12 border-t border-gray-200 dark:border-gray-800">
            <p className="text-sm text-gray-500 dark:text-gray-500 text-center mb-10 uppercase tracking-wide">
              A snapshot of my experience so far
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {[
                { value: "3+", label: "Years of Hands-On ML Experience" },
                { value: "10+", label: "End-to-End Systems Built" },
                { value: "36+", label: "Tools & Frameworks Used" },
                { value: "2+", label: "Research / Technical Publications" },
              ].map((stat, i) => (
                <div key={i} className="text-center">
                  <div className="text-3xl font-semibold text-gray-900 dark:text-white mb-2">
                    {stat.value}
                  </div>
                  <div className="text-base text-gray-500 dark:text-gray-500 leading-snug">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
