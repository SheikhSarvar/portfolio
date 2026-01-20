import { Brain, Code, Cpu, Database, Workflow, Zap } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";

const skills = [
  {
    icon: Brain,
    title: "AI & Machine Learning",
    description: "LLMs, RAG systems, embeddings, fine-tuning, and prompt engineering for production applications.",
    technologies: ["OpenAI", "LangChain", "Pinecone", "HuggingFace"],
  },
  {
    icon: Workflow,
    title: "Automation",
    description: "Building complex automated workflows that connect APIs, process data, and trigger intelligent actions.",
    technologies: ["n8n", "Make.com", "Zapier", "Python"],
  },
  {
    icon: Code,
    title: "Full-Stack Development",
    description: "Creating scalable web applications with modern frameworks and cloud-native architectures.",
    technologies: ["React", "Node.js", "TypeScript", "Next.js"],
  },
  {
    icon: Database,
    title: "Data Engineering",
    description: "Designing data pipelines, vector databases, and analytics solutions for AI applications.",
    technologies: ["PostgreSQL", "MongoDB", "Redis", "Supabase"],
  },
  {
    icon: Cpu,
    title: "Voice & Chat Agents",
    description: "Developing conversational AI agents with natural language understanding and voice capabilities.",
    technologies: ["Twilio", "Whisper", "ElevenLabs", "VAPI"],
  },
  {
    icon: Zap,
    title: "API Integration",
    description: "Seamlessly connecting third-party services, webhooks, and custom APIs for unified workflows.",
    technologies: ["REST", "GraphQL", "WebSockets", "OAuth"],
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
