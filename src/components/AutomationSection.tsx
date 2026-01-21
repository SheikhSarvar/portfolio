import { ArrowRight, Bot, MessageSquare, Printer, ShoppingCart } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";

const automations = [
  {
    title: "AI WhatsApp Chatbot",
    description: "Intelligent customer service bot with RAG-powered responses, handling inquiries 24/7 with context-aware conversations.",
    tool: "n8n",
    toolBadge: "badge-n8n",
    icon: MessageSquare,
    workflow: [
      "WhatsApp webhook trigger",
      "Customer context retrieval",
      "RAG query processing",
      "AI response generation",
      "Message delivery",
    ],
  },
  {
    title: "Print-on-Demand Automation",
    description: "End-to-end order fulfillment pipeline connecting Shopify orders to print providers with automated status updates.",
    tool: "n8n",
    toolBadge: "badge-n8n",
    icon: Printer,
    workflow: [
      "Shopify order webhook",
      "Design file preparation",
      "Print provider API call",
      "Tracking update automation",
      "Customer notification",
    ],
  },
  {
    title: "Lead Scoring Pipeline",
    description: "AI-powered lead qualification system analyzing behavior data to score and route prospects automatically.",
    tool: "Make.com",
    toolBadge: "badge-make",
    icon: Bot,
    workflow: [
      "Form submission capture",
      "Data enrichment (Clearbit)",
      "AI scoring analysis",
      "CRM update (HubSpot)",
      "Sales notification",
    ],
  },
  {
    title: "E-commerce Sync",
    description: "Multi-channel inventory and order synchronization between Shopify, Amazon, and WooCommerce stores.",
    tool: "Zapier",
    toolBadge: "badge-zapier",
    icon: ShoppingCart,
    workflow: [
      "Order detection (any platform)",
      "Inventory adjustment",
      "Cross-platform sync",
      "Accounting update",
      "Report generation",
    ],
  },
];

export function AutomationSection() {
  return (
    <section id="automation" className="py-24 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent" />

      <div className="container relative z-10 px-6">
        <div className="text-center mb-16">
          <h2 className="section-heading">
            <span className="gradient-text">Automation Projects</span>
          </h2>
          <p className="section-subheading mx-auto">
            Optimizing enterprise efficiency through advanced orchestration with n8n, Make.com, and custom agentic frameworks.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {automations.map((automation, index) => (
            <Card
              key={automation.title}
              className="bg-card border-border card-glow group overflow-hidden"
            >
              <CardHeader>
                <div className="flex items-start justify-between mb-2">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <automation.icon className="h-6 w-6 text-primary" />
                  </div>
                  <span className={`badge-tool ${automation.toolBadge}`}>
                    {automation.tool}
                  </span>
                </div>
                <CardTitle className="text-xl">{automation.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-sm mb-6">
                  {automation.description}
                </p>

                {/* Workflow Diagram */}
                <div className="bg-secondary/30 rounded-lg p-4">
                  <p className="text-xs text-muted-foreground mb-3 uppercase tracking-wider">
                    Workflow Steps
                  </p>
                  <div className="space-y-2">
                    {automation.workflow.map((step, i) => (
                      <div key={i} className="flex items-center gap-2">
                        <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                          <span className="text-xs text-primary font-mono">{i + 1}</span>
                        </div>
                        <span className="text-sm text-foreground">{step}</span>
                        {i < automation.workflow.length - 1 && (
                          <ArrowRight className="h-3 w-3 text-muted-foreground ml-auto flex-shrink-0" />
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
