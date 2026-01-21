import { Brain, Code, Cpu, Database, Workflow, Zap } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";

const skillCategories = [
  {
    title: "Agentic AI & LLMs",
    icon: Brain,
    skills: ["LangGraph", "LangChain", "Autonomous Agents", "Multi-Agent Workflows", "Prompt Engineering", "RAG Systems", "Hugging Face"],
  },
  {
    title: "Voice & Real-Time Systems",
    icon: Cpu,
    skills: ["LiveKit", "Pipecat", "VoIP/SIP", "Deepgram (STT)", "ElevenLabs (TTS)", "Real-time Orchestration"],
  },
  {
    title: "Backend & MLOps",
    icon: Zap,
    skills: ["FastAPI", "Redis", "Docker", "LangSmith", "Langfuse", "PostgreSQL", "MLFlow"],
  },
  {
    title: "ML & Data",
    icon: Database,
    skills: ["Apache Spark", "PySpark", "Fine-tuning (LoRA)", "Computer Vision (CNNs)", "Scikit-Learn", "PyTorch"],
  },
];

export function SkillsSection() {
  return (
    <section id="skills" className="py-24 relative">
      <div className="absolute inset-0 grid-background opacity-50" />

      <div className="container relative z-10 px-4 md:px-6">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="section-heading text-3xl md:text-4xl">
            <span className="gradient-text">Skills & Expertise</span>
          </h2>
          <p className="section-subheading mx-auto px-4">
            Specialized in architecting autonomous AI systems and production-grade automation that deliver measurable business impact.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8">
          {skillCategories.map((category, index) => (
            <Card
              key={category.title}
              className="bg-card border-border card-glow group"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardHeader className="flex flex-row items-center gap-4 p-6 md:p-8">
                <div className="w-12 h-12 md:w-14 md:h-14 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors shrink-0">
                  <category.icon className="h-6 w-6 md:h-7 md:h-7 text-primary" />
                </div>
                <CardTitle className="text-xl md:text-2xl">{category.title}</CardTitle>
              </CardHeader>
              <CardContent className="px-6 pb-6 md:px-8 md:pb-8">
                <div className="flex flex-wrap gap-2 md:gap-3">
                  {category.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-2.5 py-1 md:px-3 md:py-1.5 text-[11px] md:text-sm rounded-lg bg-secondary/50 text-foreground border border-border/50 font-medium"
                    >
                      {skill}
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
