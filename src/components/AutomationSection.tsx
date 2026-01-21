import { MessageSquare, Printer, Zap, BarChart3, ArrowRight } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";

const automationProjects = [
    {
        icon: MessageSquare,
        platform: "n8n",
        title: "AI WhatsApp Orchestrator",
        description: "Enterprise-grade customer engagement bot utilizing RAG-driven responses for autonomous 24/7 lead handling.",
        steps: [
            "WhatsApp webhook ingestion",
            "Dynamic context retrieval",
            "Vector-based RAG processing",
            "Autonomous agent response",
            "End-to-end delivery sync"
        ],
        color: "hsl(var(--primary))"
    },
    {
        icon: Printer,
        platform: "n8n",
        title: "E-comm Fulfillment Bridge",
        description: "Production-ready automation connecting multi-channel stores to global print-on-demand fulfillment APIs.",
        steps: [
            "Shopify/Store webhook trigger",
            "Asset validation & preparation",
            "Fulfillment API handshake",
            "Real-time shipment tracking",
            "Automated status updates"
        ],
        color: "hsl(var(--accent))"
    },
    {
        icon: Zap,
        platform: "Make.com",
        title: "Intelligence Lead Scoring",
        description: "High-performance qualification pipeline analyzing intent signals to score and route prospects in real-time.",
        steps: [
            "Inbound signal capture",
            "Data enrichment & verification",
            "AI scoring engine analysis",
            "Synchronous CRM injection",
            "Sales priority alerts"
        ],
        color: "hsl(var(--primary))"
    },
    {
        icon: BarChart3,
        platform: "Zapier",
        title: "Cross-Platform Inventory",
        description: "Scalable synchronization engine maintaining real-time inventory parity across Shopify, Amazon, and WooCommerce.",
        steps: [
            "Event-driven order detection",
            "Global stock recalibration",
            "Cross-platform parity sync",
            "Financial ledger update",
            "Operational health reporting"
        ],
        color: "hsl(var(--accent))"
    }
];

export function AutomationSection() {
    return (
        <section id="automation" className="py-24 relative overflow-hidden bg-secondary/10">
            <div className="container relative z-10 px-6">
                <div className="text-center mb-16">
                    <h2 className="section-heading mb-4">
                        <span className="gradient-text">Automation Projects</span>
                    </h2>
                    <p className="section-subheading max-w-3xl mx-auto">
                        Optimizing enterprise efficiency through advanced orchestration with n8n, Make.com, and custom agentic frameworks.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
                    {automationProjects.map((project, index) => (
                        <Card key={index} className="bg-card border-border card-glow overflow-hidden group">
                            <CardHeader className="flex flex-row items-center justify-between pb-4">
                                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                                    <project.icon className="h-6 w-6 text-primary" />
                                </div>
                                <span className="text-xs font-mono font-bold px-2 py-1 rounded bg-secondary text-primary uppercase">
                                    {project.platform}
                                </span>
                            </CardHeader>
                            <CardContent>
                                <CardTitle className="text-2xl mb-2">{project.title}</CardTitle>
                                <p className="text-muted-foreground mb-8">{project.description}</p>

                                <div className="space-y-4">
                                    <h4 className="text-xs font-bold uppercase tracking-widest text-primary/70">Workflow Steps</h4>
                                    <div className="space-y-3">
                                        {project.steps.map((step, i) => (
                                            <div key={i} className="flex items-center gap-3">
                                                <span className="text-xs font-bold text-primary w-4">{i + 1}</span>
                                                <span className="text-sm text-muted-foreground flex-1">{step}</span>
                                                {i < project.steps.length - 1 && (
                                                    <ArrowRight className="h-3 w-3 text-muted-foreground/30" />
                                                )}
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    );
}
