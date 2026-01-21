import { Project } from "./types";

export const projects: Project[] = [
  {
    id: "papermind",
    title: "PaperMind - Autonomous arXiv Research Assistant",
    description:
      "Multi-agent RAG system for literature reviews and research gaps",
    details: [
      "Multi-agent RAG system for automated literature reviews and research gap analysis",
      "Specialized LLM agents with vector database coordination for efficient knowledge retrieval",
      "PDF ingestion and embedding pipelines for seamless document processing",
      "Intelligent query routing and synthesis across multiple research papers",
    ],
    tags: ["RAG", "LangChain", "Multi-Agent", "NLP", "Vector DB"],
    category: "RAG Systems",
    github: "https://github.com/PremC1F/papermind",
    image: "/projects/papermind.png",
  },
  {
    id: "feature-store",
    title: "Real-Time Feature Store & ML Serving Platform",
    description:
      "Streaming pipeline with Feast and Kafka: 5,000 events/hour, 45ms latency",
    details: [
      "Built streaming pipeline with Feast and Kafka processing 5,000 events/hour with 45ms latency",
      "Deployed 3 production models: fraud detection (88% accuracy), recommendation (0.76 NDCG@5), forecasting (12% MAPE)",
      "Implemented MLflow monitoring with Kubernetes auto-retraining for model lifecycle management",
      "Designed scalable feature engineering pipelines with real-time and batch processing capabilities",
    ],
    tags: [
      "MLOps",
      "Kubernetes",
      "Real-time",
      "Feature Engineering",
      "Feast",
      "Kafka",
    ],
    category: "MLOps",
    github: "https://github.com/PremC1F/ml-feature-platform",
    image: "/projects/feature-store.png",
  },
  {
    id: "document-intelligence",
    title: "Multi-Agent Document Intelligence System",
    description:
      "Automated text extraction: 82% accuracy, <5s processing",
    details: [
      "Automated text extraction with 82% accuracy and sub-5-second processing time",
      "RAG implementation with Qdrant vector database: 500+ chunks, 85% top-3 relevance",
      "FastAPI production service reducing manual data entry by 84%",
      "Multi-agent orchestration for document classification, extraction, and validation",
    ],
    tags: ["Multi-Agent", "RAG", "FastAPI", "Document Processing", "Qdrant"],
    category: "NLP",
    github: "https://github.com/PremC1F/document-intelligence-system",
    image: "/projects/document-intelligence.png",
  },
  {
    id: "image-classification",
    title: "Advanced Image Classification Pipeline",
    description:
      "Deep learning pipeline for image classification with 94% accuracy",
    details: [
      "CNN-based image classification achieving 94% accuracy on custom dataset",
      "Transfer learning with ResNet and EfficientNet architectures",
      "Data augmentation pipeline for robust model training",
      "Deployed with TensorFlow Serving for real-time inference",
    ],
    tags: ["Computer Vision", "TensorFlow", "CNN", "Transfer Learning", "Deep Learning"],
    category: "Computer Vision" as const,
    github: "https://github.com/PremC1F/Advanced-Image-Classification-Pipeline",
    image: "/projects/image-classification.png",
  },
  {
    id: "sentiment-analyzer",
    title: "Multi-Language Sentiment Analysis System",
    description:
      "Transformer-based sentiment analysis supporting 10+ languages",
    details: [
      "Fine-tuned BERT model for multi-language sentiment analysis",
      "Supports 10+ languages with 89% average accuracy",
      "REST API built with FastAPI for real-time sentiment scoring",
      "Integrated with streaming data pipeline for social media monitoring",
    ],
    tags: ["NLP", "BERT", "Transformers", "FastAPI", "Multi-Language"],
    category: "NLP" as const,
    github: "https://github.com/PremC1F/Multi-Language-Sentiment-Analysis-System-",
    image: "/projects/sentiment-analyzer.png",
  },
];
