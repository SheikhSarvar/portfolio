import { Button } from "./ui/button";
import { ArrowDown, Github, Linkedin, Mail, Phone } from "lucide-react";

export function HeroSection() {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden py-20 px-6">
      {/* Grid Background */}
      <div className="absolute inset-0 grid-background opacity-40" />

      {/* Radial Glows */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[radial-gradient(ellipse_at_center,hsl(174_84%_50%/0.15)_0%,transparent_70%)] pointer-events-none" />
      <div className="absolute top-1/3 right-1/4 w-[500px] h-[500px] bg-[radial-gradient(ellipse_at_center,hsl(270_70%_60%/0.1)_0%,transparent_70%)] pointer-events-none" />

      <div className="container max-w-5xl relative z-10 text-center">
        <div className="animate-fade-in mb-6">
          <p className="text-primary font-mono text-sm tracking-[0.2em] font-medium">
            AGENTIC AI & LLM SYSTEMS ENGINEER
          </p>
        </div>

        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-4 animate-slide-up tracking-tight leading-[1.1]">
          <span className="gradient-text">Gulam Sarvar</span>
        </h1>

        <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold mb-8 animate-slide-up text-foreground/90 tracking-tight" style={{ animationDelay: "0.05s" }}>
          Data Scientist | Agentic AI & LLM Systems Engineer
        </h2>

        <p className="text-muted-foreground text-lg md:text-2xl max-w-4xl mx-auto mb-12 animate-slide-up leading-relaxed" style={{ animationDelay: "0.1s" }}>
          Architecting high-performance <span className="text-foreground font-medium">Multi-Agent Systems</span> and <span className="text-foreground font-medium">Real-time Voice AI</span>.
          Specializing in <span className="text-foreground font-medium">LangGraph</span>, <span className="text-foreground font-medium">LiveKit</span>, and production-scale
          <span className="text-foreground font-medium"> RAG pipelines</span> with low-latency <span className="text-foreground font-medium">VOIP</span> integration.
        </p>

        <div className="animate-slide-up" style={{ animationDelay: "0.2s" }}>
          <Button
            variant="hero"
            size="xl"
            className="px-12 text-lg h-14"
            onClick={() => {
              const element = document.querySelector("#portfolio");
              if (element) {
                element.scrollIntoView({ behavior: "smooth" });
              }
            }}
          >
            View Projects
          </Button>
        </div>
      </div>

      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 animate-float hidden md:block">
        <button
          onClick={() => {
            const element = document.querySelector("#about");
            if (element) {
              element.scrollIntoView({ behavior: "smooth" });
            }
          }}
          className="text-muted-foreground/60 hover:text-primary transition-colors flex flex-col items-center gap-2 cursor-pointer"
        >
          <span className="text-[10px] font-mono tracking-widest uppercase">Explore</span>
          <ArrowDown className="h-4 w-4" />
        </button>
      </div>
    </section>
  );
}
