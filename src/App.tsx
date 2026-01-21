import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Gulam Sarvar",
    "jobTitle": "Agentic AI & LLM Systems Engineer",
    "worksFor": {
      "@type": "Organization",
      "name": "Bluebash"
    },
    "url": "https://sheikhsarvar.github.io",
    "sameAs": [
      "https://linkedin.com/in/gulam-sarvar"
    ],
    "knowsAbout": [
      "Agentic AI",
      "LLM Systems",
      "LangGraph",
      "LiveKit",
      "VOIP",
      "Multi-Agent Workflows",
      "Data Science",
      "RAG"
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
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;
