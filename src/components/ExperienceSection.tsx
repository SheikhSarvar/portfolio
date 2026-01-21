import { Briefcase, Calendar } from "lucide-react";

const experiences = [
  {
    title: "Data Scientist | Agentic AI Engineer",
    company: "Bluebash",
    period: "Apr 2024 - Present",
    description:
      "Core engineer for Kickcall.ai, a production-grade AI voice platform. I architect low-latency telephony systems and autonomous multi-agent workflows for enterprise healthcare and legal automation.",
    highlights: [
      "Engineered stateful multi-agent orchestrators using LangGraph, reducing decision latency by 40%.",
      "Architected real-time VOIP signaling pipelines with LiveKit and Pipecat for natural AI voice interactions.",
      "Developed production-ready RAG systems using vector databases (Pinecone/Milvus) for sub-second retrieval.",
      "Implemented enterprise-level LLM observability (LangSmith) and automated evaluation frameworks."
    ],
  },
];

export function ExperienceSection() {
  return (
    <section id="experience" className="py-24 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-secondary/20 to-transparent" />

      <div className="container relative z-10 px-6">
        <div className="text-center mb-16">
          <h2 className="section-heading">
            <span className="gradient-text">Experience</span>
          </h2>
          <p className="section-subheading mx-auto">
            Engineering the future through autonomous AI Agents, data-driven innovation, and production-grade automation systems.
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-4 md:left-8 top-0 bottom-0 w-px bg-border" />

            {experiences.map((exp, index) => (
              <div key={index} className="relative pl-12 md:pl-20 pb-12 last:pb-0">
                {/* Timeline Dot */}
                <div className="absolute left-2 md:left-6 top-0 w-5 h-5 rounded-full bg-primary/20 border-2 border-primary flex items-center justify-center">
                  <div className="w-2 h-2 rounded-full bg-primary" />
                </div>

                <div className="workflow-card">
                  <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
                    <div>
                      <h3 className="text-xl font-semibold">{exp.title}</h3>
                      <p className="text-primary font-medium">{exp.company}</p>
                    </div>
                    <div className="flex items-center gap-2 text-muted-foreground text-sm">
                      <Calendar className="h-4 w-4" />
                      {exp.period}
                    </div>
                  </div>

                  <p className="text-muted-foreground mb-4">{exp.description}</p>

                  <ul className="space-y-2">
                    {exp.highlights.map((highlight, i) => (
                      <li key={i} className="flex items-start gap-2 text-sm">
                        <span className="text-primary mt-1">▹</span>
                        <span className="text-muted-foreground">{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
