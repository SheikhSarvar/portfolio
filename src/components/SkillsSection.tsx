import { Brain, Code, Cpu, Database, Workflow, Zap } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";

const skills = [
  {
    icon: Brain,
    title: "AI & Machine Learning",
    description: "LLMs, Fine-tuning (LoRA), RAG systems, Computer Vision (CNNs), and Deep Learning for regression/classification.",
    technologies: ["LLaMA 3.2", "LoRA", "PyTorch", "TensorFlow", "Scikit-Learn"],
  },
  {
    icon: Cpu,
    title: "Voice & Conversational AI",
    description: "Developing production-ready voice bots with SIP integration, real-time STT/TTS, and universal telephony gateways.",
    technologies: ["LiveKit", "SIP Gateway", "Deepgram", "ElevenLabs", "Jambonz"],
  },
  {
    icon: Workflow,
    title: "Agentic Workflows",
    description: "Orchestrating complex multi-agent systems with dynamic state management and intent-based routing.",
    technologies: ["LangGraph", "LangChain", "Autonomous Agents", "State Management"],
  },
  {
    icon: Database,
    title: "Data Engineering & MLOps",
    description: "Building distributed data pipelines and managing model lifecycles with industry-standard MLOps tools.",
    technologies: ["Apache Spark", "PySpark", "MLFlow", "Docker", "PostgreSQL"],
  },
  {
    icon: Code,
    title: "Full-Stack AI Apps",
    description: "Creating high-performance web applications and interactive dashboards for AI and data services.",
    technologies: ["React", "FastAPI", "TypeScript", "Streamlit", "Node.js"],
  },
  {
    icon: Zap,
    title: "Cloud & Automation",
    description: "Scalable cloud deployments and end-to-end automation for modern business workflows.",
    technologies: ["Supabase", "Redis", "Vector Databases", "WebSockets", "OAuth"],
  },
];

export function SkillsSection() {
  return (
    <section id="skills" className="py-24 relative">
      <div className="absolute inset-0 grid-background opacity-50" />

      <div className="container relative z-10 px-6">
        <div className="text-center mb-16">
          <h2 className="section-heading">
            <span className="gradient-text">Skills & Expertise</span>
          </h2>
          <p className="section-subheading mx-auto">
            Specialized in building AI-powered automation systems that deliver real business value.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skills.map((skill, index) => (
            <Card
              key={skill.title}
              className="bg-card border-border card-glow group"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardHeader>
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <skill.icon className="h-6 w-6 text-primary" />
                </div>
                <CardTitle className="text-lg">{skill.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-sm mb-4">
                  {skill.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {skill.technologies.map((tech) => (
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
