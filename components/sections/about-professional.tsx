"use client";

import { motion } from "framer-motion";
import { MapPin, GraduationCap, Target, Briefcase, Code2, Award } from "lucide-react";

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.5 },
};

export function AboutProfessional() {
  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-6xl mx-auto">
        <motion.div {...fadeInUp}>
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-center bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            About Me
          </h2>
          <p className="text-center text-gray-600 dark:text-gray-400 mb-12 max-w-2xl mx-auto">
            Passionate AI/ML Engineer with expertise in building production-ready systems
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8 mb-12">
          {/* Bio Card */}
          <motion.div
            {...fadeInUp}
            transition={{ delay: 0.1 }}
            className="bg-white dark:bg-gray-800 rounded-xl p-8 shadow-lg border border-gray-200 dark:border-gray-700"
          >
            <div className="flex items-center gap-3 mb-6">
              <Briefcase className="w-6 h-6 text-blue-600" />
              <h3 className="text-2xl font-bold">Professional Profile</h3>
            </div>
            
            <div className="space-y-4 text-gray-700 dark:text-gray-300">
              <p className="leading-relaxed">
                AI/ML Engineer specializing in Large Language Models, RAG systems, and MLOps pipelines. 
                Currently pursuing MS in Artificial Intelligence at Rochester Institute of Technology.
              </p>
              
              <div className="flex items-center gap-2 text-sm">
                <MapPin className="w-4 h-4 text-blue-600" />
                <span className="font-medium">Rochester, NY</span>
              </div>
              
              <div className="flex items-center gap-2 text-sm">
                <GraduationCap className="w-4 h-4 text-purple-600" />
                <span className="font-medium">MS in Artificial Intelligence - RIT</span>
              </div>
            </div>
          </motion.div>

          {/* Focus Areas */}
          <motion.div
            {...fadeInUp}
            transition={{ delay: 0.2 }}
            className="bg-white dark:bg-gray-800 rounded-xl p-8 shadow-lg border border-gray-200 dark:border-gray-700"
          >
            <div className="flex items-center gap-3 mb-6">
              <Target className="w-6 h-6 text-purple-600" />
              <h3 className="text-2xl font-bold">Areas of Expertise</h3>
            </div>
            
            <div className="space-y-3">
              {[
                { icon: Code2, text: "Large Language Models & RAG Systems", color: "text-blue-600" },
                { icon: Award, text: "MLOps & Production Deployment", color: "text-purple-600" },
                { icon: Target, text: "Computer Vision & NLP", color: "text-green-600" },
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-3 p-3 bg-gray-50 dark:bg-gray-700 rounded-lg">
                  <item.icon className={`w-5 h-5 ${item.color}`} />
                  <span className="font-medium text-gray-700 dark:text-gray-300">{item.text}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Stats */}
        <motion.div
          {...fadeInUp}
          transition={{ delay: 0.3 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4"
        >
          {[
            { value: "3+", label: "Years Experience" },
            { value: "10+", label: "Projects Completed" },
            { value: "36+", label: "Technical Skills" },
            { value: "2+", label: "Publications" },
          ].map((stat, i) => (
            <div
              key={i}
              className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg border border-gray-200 dark:border-gray-700 text-center"
            >
              <div className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-2">
                {stat.value}
              </div>
              <div className="text-sm text-gray-600 dark:text-gray-400 font-medium">
                {stat.label}
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
