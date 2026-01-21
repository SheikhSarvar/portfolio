import { Github, ExternalLink } from "lucide-react";
import { Card } from "./ui/card";

const projects = [
  {
    title: "Kickcall.ai (Production Voice AI)",
    url: "https://www.kickcall.ai/",
    problem: "Enterprises faced high friction in customer support due to high-latency, robotic AI voice interactions that failed to handle complex intents.",
    solution: [
      "Architected a multi-stage voice bot using LiveKit and Pipecat for sub-200ms latency.",
      "Implemented intelligent session orchestration with FastAPI and Redis signaling.",
      "Integrated autonomous RAG pipelines for real-time, context-aware responses.",
    ],
    impact: [
      "Achieved sub-200ms E2E voice latency for natural human-like interaction.",
      "Scalable white-label deployment for healthcare and legal lead-qualification.",
    ],
    technologies: ["LiveKit", "LangChain", "LangGraph", "VoIP", "Vector DB RAG"],
    github: "https://github.com/BlueBash/kickcall_agents",
  },
  {
    title: "Multi-Agent Workflow Orchestrator",
    problem: "Linear LLM chains failed to handle complex, non-linear reasoning required for regulated medical and document processing.",
    solution: [
      "Developed a stateful orchestration layer using LangGraph for multi-agent coordination.",
      "Implemented dynamic, intent-based routing to specialized sub-agent clusters.",
      "Built a comprehensive observability layer with LangSmith for real-time cycle-monitoring.",
    ],
    impact: [
      "40% reduction in decision-cycle latency for regulated industry workflows.",
      "25% increase in reasoning accuracy for multi-step document extraction.",
    ],
    technologies: ["LangGraph", "LangChain", "OpenAI", "LangSmith"],
    github: "https://github.com/SheikhSarvar/Agent-workflow",
  },
  {
    title: "IndustryGPT (Fine-Tuned LLM)",
    problem: "General-purpose models like GPT-4 lacked deep technical context for niche industrial troubleshooting and hardware diagnostics.",
    solution: [
      "Fine-tuned LLaMA 3.2 using LoRA on 15K+ specialized technical diagnostic pairs.",
      "Architected a custom evaluation harness to benchmark domain-specific precision.",
      "Deployed via high-performance FastAPI wrapper for production toolchain integration.",
    ],
    impact: [
      "12% performance gain over GPT-4 in specialized technical troubleshooting.",
      "Production-ready deployment supporting 50+ concurrent diagnostic sessions.",
    ],
    technologies: ["LLaMA 3.2", "LoRA", "Hugging Face", "PyTorch"],
    github: "https://github.com/SheikhSarvar/IndustryGPT-custom-llm",
  },
  {
    title: "Voyage Analytics (MLOps)",
    problem: "Real-time flight and hotel prediction systems require robust MLOps pipelines to handle data drift and model serving.",
    solution: [
      "Built an end-to-end MLOps pipeline using MLFlow and Docker.",
      "Implemented flight price prediction and hotel recommendation engines.",
      "Created an interactive Streamlit dashboard for real-time analytics.",
    ],
    impact: [
      "Full lifecycle management from data ingestion to model deployment.",
      "Achieved scalable model serving with optimized resource usage.",
    ],
    technologies: ["Docker", "MLFlow", "Streamlit", "Scikit-Learn"],
    github: "https://github.com/SheikhSarvar/Voyage-Analytics",
  },
  {
    title: "Financial Forecasting Frontier",
    problem: "Analyzing massive banking transaction streams requires distributed processing to detect behavior patterns in real-time.",
    solution: [
      "Engineered a distributed PySpark pipeline for behavioral analysis.",
      "Implemented Random Forest models to simulate transaction streams.",
      "Utilized Spark Structured Streaming for real-time data processing.",
    ],
    impact: [
      "Capable of processing 1M+ transactions per second in simulation.",
      "Improved fraud pattern detection sensitivity by 30%.",
    ],
    technologies: ["Apache Spark", "PySpark", "Kafka", "Random Forest"],
    github: "https://github.com/SheikhSarvar/financial-forecasting",
  },
];

export function PortfolioSection() {
  return (
    <section id="portfolio" className="py-24 relative">
      <div className="absolute inset-0 grid-background opacity-30" />

      <div className="container relative z-10 px-6">
        <div className="text-center mb-16 px-4">
          <h2 className="section-heading mb-4">
            <span className="gradient-text">Production AI Case Studies</span>
          </h2>
          <p className="section-subheading max-w-3xl mx-auto">
            Focusing on real-world outcomes: how I solve complex problems with Agentic AI, optimized workflows, and fine-tuned models.
          </p>
        </div>

        <div className="space-y-12">
          {projects.map((project, index) => (
            <Card
              key={project.title}
              className="bg-card border-border card-glow group overflow-hidden p-6 md:p-12 mb-8 md:mb-12"
            >
              <div className="grid lg:grid-cols-2 gap-12">
                <div className="space-y-8">
                  <div>
                    <h3 className="text-2xl md:text-3xl font-bold mb-4">{project.title}</h3>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-2 py-0.5 text-[10px] md:text-xs rounded-full bg-primary/10 text-primary border border-primary/20 font-medium whitespace-nowrap"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="space-y-4">
                    <h4 className="text-sm font-bold uppercase tracking-widest text-muted-foreground flex items-center gap-2">
                      <span className="w-8 h-px bg-muted-foreground/30" />
                      Problem
                    </h4>
                    <p className="text-xl text-muted-foreground leading-relaxed italic">
                      "{project.problem}"
                    </p>
                  </div>

                  <div className="flex flex-wrap gap-4">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-sm font-medium text-primary hover:underline hover:opacity-80 transition-opacity"
                    >
                      <Github className="h-4 w-4" />
                      Source Code
                    </a>
                    {project.url && (
                      <a
                        href={project.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 text-sm font-medium text-accent hover:underline hover:opacity-80 transition-opacity"
                      >
                        <ExternalLink className="h-4 w-4" />
                        Live Demo
                      </a>
                    )}
                  </div>
                </div>

                <div className="space-y-8">
                  <div className="space-y-4">
                    <h4 className="text-sm font-bold uppercase tracking-widest text-primary flex items-center gap-2">
                      <span className="w-8 h-px bg-primary/30" />
                      Solution
                    </h4>
                    <ul className="space-y-3">
                      {project.solution.map((item, i) => (
                        <li key={i} className="flex items-start gap-4">
                          <span className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center shrink-0 mt-0.5">
                            <span className="text-xs text-primary font-bold">{i + 1}</span>
                          </span>
                          <span className="text-muted-foreground leading-relaxed">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="space-y-4 pt-4 border-t border-border/50">
                    <h4 className="text-sm font-bold uppercase tracking-widest text-accent flex items-center gap-2">
                      <span className="w-8 h-px bg-accent/30" />
                      Impact
                    </h4>
                    <ul className="space-y-2">
                      {project.impact.map((item, i) => (
                        <li key={i} className="flex items-center gap-3 text-foreground font-medium">
                          <span className="text-accent">▹</span>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>

        <div className="mt-16 md:mt-32">
          <h3 className="text-xl md:text-2xl font-bold mb-8 md:mb-12 text-center opacity-70">Other Engineering Projects</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
            {[
              {
                title: "DeepFER",
                desc: "Real-time facial emotion recognition using custom CNNs and Transfer Learning (VGG16/ResNet50).",
                tech: ["TensorFlow", "Keras", "OpenCV"],
                github: "https://github.com/SheikhSarvar/Deepfer-emotion-recognition"
              },
              {
                title: "Retail Strategy Suite",
                desc: "Demand forecasting and customer segmentation system for retail store performance optimization.",
                tech: ["XGBoost", "K-Means", "Pandas"],
                github: "https://github.com/SheikhSarvar/demand-forecasting-retail"
              },
              {
                title: "DeepCSAT",
                desc: "Deep learning system for predicting e-commerce customer satisfaction scores using ANN-based regression.",
                tech: ["ANN", "TensorFlow", "Streamlit"],
                github: "https://github.com/SheikhSarvar/e-comm-DeepCSAT"
              }
            ].map((p, i) => (
              <Card key={i} className="bg-card/50 border-border p-6 hover:border-primary/30 transition-colors">
                <h4 className="text-lg font-bold mb-2">{p.title}</h4>
                <p className="text-sm text-muted-foreground mb-4 line-clamp-2">{p.desc}</p>
                <div className="flex items-center justify-between">
                  <div className="flex gap-2">
                    {p.tech.map(t => (
                      <span key={t} className="text-[10px] uppercase tracking-wider text-primary/70">{t}</span>
                    ))}
                  </div>
                  <a href={p.github} target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary">
                    <Github className="h-4 w-4" />
                  </a>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
