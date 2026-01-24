import { Linkedin, Mail, MapPin, Phone } from "lucide-react";
import { Button } from "./ui/button";
import { useState } from "react";

export function ContactSection() {
  return (
    <section id="contact" className="py-32 relative overflow-hidden">
      <div className="container max-w-4xl relative z-10 px-6 text-center">
        <h2 className="text-4xl md:text-6xl font-bold mb-8 gradient-text">
          Interested in building production AI systems together? Let’s talk.
        </h2>

        <p className="text-xl text-muted-foreground mb-16 max-w-2xl mx-auto leading-relaxed">
          I'm currently open to opportunities in Agentic AI systems, real-time voice infrastructure, and production LLM engineering.
        </p>

        <div className="flex justify-center mb-20 animate-slide-up">
          <a href="mailto:sheikhgulamsarvar@gmail.com" className="w-full md:w-auto">
            <Button variant="hero" size="xl" className="w-full text-lg h-16 px-12">
              <Mail className="mr-3 h-5 w-5" />
              Email Me
            </Button>
          </a>
        </div>

        <div className="pt-12 border-t border-border flex flex-col md:flex-row items-center justify-center gap-12">
          <a
            href="https://in.linkedin.com/in/sheikh-gulam-sarvar-ab3343219"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-all group"
          >
            <div className="w-10 h-10 rounded-full bg-secondary/50 flex items-center justify-center group-hover:bg-primary/10">
              <Linkedin className="h-5 w-5" />
            </div>
            <span className="font-medium">Connect on LinkedIn</span>
          </a>

          <a
            href="tel:+917895778106"
            className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-all group"
          >
            <div className="w-10 h-10 rounded-full bg-secondary/50 flex items-center justify-center group-hover:bg-primary/10">
              <Phone className="h-5 w-5 text-primary" />
            </div>
            <span className="font-medium">+91 7895778106</span>
          </a>

          <div className="flex items-center gap-3 text-muted-foreground">
            <div className="w-10 h-10 rounded-full bg-secondary/50 flex items-center justify-center">
              <MapPin className="h-5 w-5 text-primary" />
            </div>
            <span className="font-medium">Based in India • Remote Ready</span>
          </div>
        </div>
      </div>
    </section>
  );
}
