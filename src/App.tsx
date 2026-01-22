import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { HashRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Gulam Sarvar",
    "alternateName": [
      "Sheikh Sarvar",
      "Sheikh Gulam Sarvar",
      "Gulam Sarvar",
      "gulamsarvar-bluebash",
      "SheikhSarvar",
      "Sheikh.Sarvar"
    ],
    "jobTitle": "Data Scientist & AI Agent & Voice Bot Developer",
    "description": "AI Agent and Voice Bot Developer building agentic AI systems, real-time voice agents, RAG pipelines, and production-grade LLM infrastructure with strong focus on scalability, observability, and low-latency systems.",
    "url": "https://sheikhsarvar.github.io",
    "sameAs": [
      "https://www.linkedin.com/in/sheikh-gulam-sarvar-ab3343219",
      "https://github.com/SheikhSarvar"
    ],
    "knowsAbout": [
      "Agentic AI Systems",
      "Multi-Agent Systems",
      "Autonomous AI Agents",
      "Agent Workflows",
      "Graph-Based Agent Architecture",
      "Large Language Models",
      "LLM Orchestration",
      "Tool-Calling Agents",
      "Retrieval Augmented Generation",
      "Advanced RAG Architectures",
      "Semantic Search",
      "Vector Databases",
      "Embedding Models",
      "Knowledge Graphs",
      "Context Management",
      "Voice Bots",
      "Real-Time Voice AI",
      "Streaming LLMs",
      "Voice Agent Infrastructure",
      "LiveKit",
      "Pipecat",
      "Speech-to-Text",
      "Text-to-Speech",
      "Low-Latency AI Systems",
      "Python",
      "Async Python",
      "Machine Learning",
      "Deep Learning",
      "MLOps",
      "LLM Evaluation",
      "AI Observability",
      "Tracing and Logging for LLMs",
      "AI Microservices",
      "FastAPI",
      "REST APIs",
      "Docker",
      "Scalable AI Infrastructure"
    ],
    "hasPart": [
      {
        "@type": "CreativeWork",
        "name": "Kickcall.ai (Production Voice AI)",
        "description": "Low-latency, real-time AI voice interaction platform built with LiveKit and LangGraph.",
        "url": "https://www.kickcall.ai/"
      },
      {
        "@type": "CreativeWork",
        "name": "Multi-Agent Workflow Orchestrator",
        "description": "Stateful orchestration layer using LangGraph for multi-agent coordination and complex reasoning.",
        "url": "https://github.com/SheikhSarvar/Agent-workflow"
      },
      {
        "@type": "CreativeWork",
        "name": "IndustryGPT (Fine-Tuned LLM)",
        "description": "Fine-tuned LLaMA 3.2 model for specialized technical troubleshooting and diagnostics.",
        "url": "https://github.com/SheikhSarvar/IndustryGPT-custom-llm"
      }
    ]
  };

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <script type="application/ld+json">
          {JSON.stringify(jsonLd)}
        </script>
        <Toaster />
        <Sonner />
        <HashRouter>
          <Routes>
            <Route path="*" element={<Index />} />
          </Routes>
        </HashRouter>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;
