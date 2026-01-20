import { Button } from "./ui/button";
import { ArrowDown, Github, Linkedin, Mail } from "lucide-react";

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Grid Background */}
      <div className="absolute inset-0 grid-background" />
      
      {/* Radial Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[radial-gradient(ellipse_at_center,hsl(174_84%_50%/0.12)_0%,transparent_70%)] pointer-events-none" />
      <div className="absolute top-1/3 right-1/4 w-[400px] h-[400px] bg-[radial-gradient(ellipse_at_center,hsl(270_70%_60%/0.08)_0%,transparent_70%)] pointer-events-none" />

      <div className="container relative z-10 px-6 text-center">
        <div className="animate-fade-in">
          <p className="text-primary font-mono text-sm mb-4 tracking-wider">
            SENIOR AI ENGINEER
          </p>
        </div>

        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 animate-slide-up">
          <span className="gradient-text">William Jackson</span>
        </h1>

        <p className="text-muted-foreground text-lg md:text-xl max-w-2xl mx-auto mb-8 animate-slide-up" style={{ animationDelay: "0.1s" }}>
          Building intelligent automation systems and AI-powered solutions that transform how businesses operate.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12 animate-slide-up" style={{ animationDelay: "0.2s" }}>
          <Button variant="hero" size="lg">
            <Mail className="mr-2 h-5 w-5" />
            Get in Touch
          </Button>
          <Button variant="glow" size="lg">
            View Projects
          </Button>
        </div>

        {/* Social Links */}
        <div className="flex items-center justify-center gap-4 animate-slide-up" style={{ animationDelay: "0.3s" }}>
          <a
            href="#"
            className="p-3 rounded-full bg-secondary/50 hover:bg-primary/20 hover:text-primary transition-all duration-200"
          >
            <Github className="h-5 w-5" />
          </a>
          <a
            href="#"
            className="p-3 rounded-full bg-secondary/50 hover:bg-primary/20 hover:text-primary transition-all duration-200"
          >
            <Linkedin className="h-5 w-5" />
          </a>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-float">
          <a href="#skills" className="text-muted-foreground hover:text-primary transition-colors">
            <ArrowDown className="h-6 w-6" />
          </a>
        </div>
      </div>
    </section>
  );
}
