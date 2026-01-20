import { ExternalLink, Github } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Button } from "./ui/button";

const projects = [
  {
    title: "Voice Agent Platform",
    description: "Enterprise voice AI platform handling 10K+ daily calls with natural language understanding, real-time transcription, and intelligent routing.",
    technologies: ["OpenAI", "Twilio", "Python", "FastAPI", "Redis"],
    metrics: "98.5% accuracy • 10K+ calls/day",
    link: "#",
    github: "#",
  },
  {
    title: "SermonAI RAG System",
    description: "Retrieval-augmented generation system for religious content. Processes 50K+ documents with semantic search and contextual responses.",
    technologies: ["LangChain", "Pinecone", "Next.js", "OpenAI"],
    metrics: "50K+ docs indexed • <2s response",
    link: "#",
    github: "#",
  },
  {
    title: "E-commerce Automation Suite",
    description: "End-to-end automation for inventory management, order processing, and customer communication across multiple sales channels.",
    technologies: ["n8n", "Shopify API", "PostgreSQL", "Node.js"],
    metrics: "300+ workflows • $500K saved",
    link: "#",
    github: "#",
  },
  {
    title: "AI Content Generator",
    description: "Multi-modal content generation platform producing blog posts, social media content, and marketing copy with brand voice consistency.",
    technologies: ["GPT-4", "DALL-E", "React", "Supabase"],
    metrics: "1M+ words generated",
    link: "#",
    github: "#",
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
