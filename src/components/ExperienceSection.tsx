import { Briefcase, Calendar } from "lucide-react";

const experiences = [
  {
    title: "Senior AI Engineer",
    company: "TechVentures AI",
    period: "2022 - Present",
    description:
      "Leading the development of enterprise AI solutions including RAG systems, conversational agents, and automation platforms. Architected solutions serving 50K+ daily users.",
    highlights: ["Built RAG pipeline reducing response time by 60%", "Led team of 4 engineers", "Deployed 15+ production AI systems"],
  },
  {
    title: "AI Automation Specialist",
    company: "AutoFlow Systems",
    period: "2020 - 2022",
    description:
      "Designed and implemented complex automation workflows using n8n and Make.com. Created custom integrations for CRM, ERP, and marketing platforms.",
    highlights: ["Automated 200+ business processes", "Saved clients $2M+ annually", "Built custom n8n nodes"],
  },
  {
    title: "Full-Stack Developer",
    company: "Digital Dynamics",
    period: "2018 - 2020",
    description:
      "Developed web applications and APIs for various clients. Specialized in React, Node.js, and cloud deployments.",
    highlights: ["Delivered 30+ web applications", "Implemented CI/CD pipelines", "Mentored junior developers"],
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
            A track record of delivering impactful AI and automation solutions.
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-8 top-0 bottom-0 w-px bg-border" />

            {experiences.map((exp, index) => (
              <div key={index} className="relative pl-20 pb-12 last:pb-0">
                {/* Timeline Dot */}
                <div className="absolute left-6 top-0 w-5 h-5 rounded-full bg-primary/20 border-2 border-primary flex items-center justify-center">
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
