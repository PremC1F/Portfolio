import { Experience } from "./types";

export const experiences: Experience[] = [
  {
    id: "concentrix",
    role: "Generative AI Engineer",
    company: "Concentrix + Webhelp",
    location: "Newark, CA",
    period: "Feb 2024 - Jul 2024",
    startDate: "2024-02",
    endDate: "2024-07",
    achievements: [
      "Built multi-model LLM inference platform achieving 1.5s latency with 18% cost reduction across 25+ deployments",
      "Designed LiteLLM routing system with AWS Bedrock and SageMaker achieving 95%+ accuracy",
      "Implemented comprehensive guardrails and monitoring reducing incidents by 42%",
      "Built production evaluation pipelines for automated quality validation and model performance tracking",
    ],
  },
  {
    id: "alphabits",
    role: "Data Science Intern",
    company: "AlphaBits Technologies",
    location: "India",
    period: "Aug 2023 - Jan 2024",
    startDate: "2023-08",
    endDate: "2024-01",
    achievements: [
      "Reduced search model iteration time by 90% and improved ranking accuracy by 10%",
      "Built scalable PySpark ETL pipelines and centralized feature store for data consistency",
      "Developed TF-IDF and Naive Bayes ranking models for production search systems",
      "Created ML Playbook adopted by 3 teams, reducing integration errors by 35%",
    ],
  },
  {
    id: "ineuron",
    role: "ML Engineer Intern",
    company: "iNeuron.ai",
    location: "India",
    period: "Jun 2023 - Aug 2023",
    startDate: "2023-06",
    endDate: "2023-08",
    achievements: [
      "Built phishing detection system achieving 92% accuracy with 20% fewer false positives",
      "Implemented TensorFlow/Keras MLP with advanced optimization techniques",
      "Conducted F1-driven hyperparameter tuning for production deployment readiness",
      "Developed comprehensive testing and validation pipelines for model reliability",
    ],
  },
];
