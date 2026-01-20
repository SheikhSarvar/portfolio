import { ExternalLink, Github } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Button } from "./ui/button";

const projects = [
  {
    title: "KickCall AI + SIP Gateway",
    description: "Enterprise voice AI platform with integrated SIP/VoIP gateways for automated support, lead qualification, and universal telephony connectivity.",
    technologies: ["Python", "LiveKit", "GPT-4o", "SIP/VoIP", "Jambonz", "Deepgram"],
    metrics: "Real-time responses • 50+ languages • 95% accuracy",
    link: "#",
    github: "https://github.com/BlueBash/kickcall_agents",
  },
  {
    title: "Multi-Agent Workflow",
    description: "Dental clinic voice assistant with dynamic intent routing and specialized sub-agents orchestrated via LangGraph.",
    technologies: ["LangGraph", "OpenAI", "FastAPI", "Python"],
    metrics: "5+ specialized agents • Dynamic intent routing",
    link: "#",
    github: "/home/alphazero/GS/MS-Projects/Agent-workflow",
  },
  {
    title: "IndustryGPT (TechBot)",
    description: "LLaMA 3.2 fine-tuned LLM specialized for technical troubleshooting, coding assistance, and software documentation.",
    technologies: ["LLaMA 3.2", "LoRA", "Hugging Face", "PyTorch"],
    metrics: "15K+ Q&A pairs • Fine-tuned on tech data",
    link: "#",
    github: "/home/alphazero/GS/MS-Projects/IndustryGPT-custom-llm",
  },
  {
    title: "Voyage Analytics",
    description: "Travel analytics platform for flight price prediction, user classification, and hotel recommendations with interactive dashboards.",
    technologies: ["Docker", "MLFlow", "Streamlit", "Scikit-Learn"],
    metrics: "End-to-end MLOps • Real-time predictions",
    link: "#",
    github: "/home/alphazero/GS/MS-Projects/Voyage-Analytics",
  },
  {
    title: "Financial Forecasting Frontier",
    description: "Distributed PySpark pipeline for analyzing customer behavior and simulating real-time banking transaction streams.",
    technologies: ["Apache Spark", "PySpark", "Structured Streaming", "Random Forest"],
    metrics: "Distributed ML • Real-time transaction processing",
    link: "#",
    github: "/home/alphazero/GS/MS-Projects/financial-forecasting",
  },
  {
    title: "DeepFER",
    description: "Real-time facial emotion recognition system using custom CNNs and Transfer Learning (VGG16/ResNet50).",
    technologies: ["TensorFlow", "Keras", "Opencv", "Streamlit"],
    metrics: "7 emotion classes • Real-time detection",
    link: "#",
    github: "/home/alphazero/GS/MS-Projects/Deepfer-emotion-recognition",
  },
  {
    title: "Retail Strategy Suite",
    description: "Demand forecasting and customer segmentation system for retail store performance optimization.",
    technologies: ["XGBoost", "K-Means", "Pandas", "Matplotlib"],
    metrics: "Weekly sales forecasting • 3 cluster segments",
    link: "#",
    github: "/home/alphazero/GS/MS-Projects/demand-forecasting-retail",
  },
  {
    title: "DeepCSAT",
    description: "Deep learning system for predicting e-commerce customer satisfaction scores using Artificial Neural Networks.",
    technologies: ["ANN", "TensorFlow", "Keras", "Streamlit"],
    metrics: "ANN-based regression • CSAT score prediction",
    link: "#",
    github: "/home/alphazero/GS/MS-Projects/e-comm-DeepCSAT",
  },
];

export function PortfolioSection() {
  return (
    <section id="portfolio" className="py-24 relative">
      <div className="absolute inset-0 grid-background opacity-30" />

      <div className="container relative z-10 px-6">
        <div className="text-center mb-16">
          <h2 className="section-heading">
            <span className="gradient-text">Portfolio</span>
          </h2>
          <p className="section-subheading mx-auto">
            Featured projects showcasing AI engineering and automation expertise.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <Card
              key={project.title}
              className="bg-card border-border card-glow group overflow-hidden"
            >
              <CardHeader>
                <div className="flex items-start justify-between">
                  <CardTitle className="text-xl">{project.title}</CardTitle>
                  <div className="flex gap-2">
                    <a
                      href={project.github}
                      className="p-2 rounded-md hover:bg-primary/10 text-muted-foreground hover:text-primary transition-colors"
                    >
                      <Github className="h-4 w-4" />
                    </a>
                    <a
                      href={project.link}
                      className="p-2 rounded-md hover:bg-primary/10 text-muted-foreground hover:text-primary transition-colors"
                    >
                      <ExternalLink className="h-4 w-4" />
                    </a>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-sm mb-4">
                  {project.description}
                </p>

                <p className="text-primary text-sm font-mono mb-4">
                  {project.metrics}
                </p>

                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-1 text-xs rounded-md bg-secondary text-muted-foreground"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
