"use client";

import { motion } from "framer-motion";

const fadeIn = {
  initial: { opacity: 0, y: 8 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.25 },
};

interface SkillLayer {
  title: string;
  description: string;
  skills: string[];
}

export function SkillsProfessional() {
  const skillLayers: SkillLayer[] = [
    {
      title: "Modeling & Intelligence",
      description: "Training, adapting, and evaluating models for real-world performance.",
      skills: [
        "PyTorch",
        "TensorFlow",
        "Scikit-learn",
        "Hugging Face",
        "Large Language Models",
        "Retrieval-Augmented Generation",
        "Computer Vision",
        "NLP",
        "Deep Learning",
      ],
    },
    {
      title: "Inference & Applications",
      description: "Turning models into reliable, usable applications.",
      skills: [
        "LangChain",
        "FastAPI",
        "Prompt Engineering",
        "Feature Engineering",
        "Real-time Inference",
      ],
    },
    {
      title: "Infrastructure & MLOps",
      description: "Deploying, scaling, and monitoring production AI systems.",
      skills: [
        "AWS Bedrock",
        "AWS SageMaker",
        "Docker",
        "Kubernetes",
        "MLflow",
        "CI/CD",
        "GitHub Actions",
        "Terraform",
        "Palantir Foundry",
      ],
    },
    {
      title: "Data & Platforms",
      description: "Building data pipelines and analytics foundations.",
      skills: [
        "PySpark",
        "SQL",
        "Snowflake",
        "PostgreSQL",
        "MongoDB",
        "Pandas",
        "NumPy",
      ],
    },
  ];

  return (
    <section id="skills" className="py-24 px-6 lg:px-8 bg-gray-50 dark:bg-black">
      <div className="max-w-6xl mx-auto">
        <motion.div {...fadeIn}>
          <h2 className="text-6xl sm:text-7xl font-bold mb-6 text-center text-gray-900 dark:text-white">
            How I Build AI Systems
          </h2>
          <p className="text-center text-gray-600 dark:text-gray-300 mb-20 max-w-2xl mx-auto text-xl leading-relaxed">
            A practical breakdown of the layers behind my work.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {skillLayers.map((layer, index) => (
            <motion.div
              key={layer.title}
              {...fadeIn}
              className="p-8 lg:p-10 bg-white dark:bg-gray-900/50 rounded-2xl border border-gray-200 dark:border-gray-800 shadow-sm space-y-6"
            >
              <h3 className="text-2xl font-semibold text-gray-900 dark:text-white">
                {layer.title}
              </h3>
              <p className="text-base text-gray-600 dark:text-gray-300 leading-relaxed">
                {layer.description}
              </p>
              <div className="flex flex-wrap gap-2 pt-2">
                {layer.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1.5 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 text-sm rounded-lg border border-gray-200 dark:border-gray-700"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
