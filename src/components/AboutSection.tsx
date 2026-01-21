export function AboutSection() {
    return (
        <section id="about" className="py-24 relative overflow-hidden">
            <div className="container max-w-5xl relative z-10 px-6">
                <div className="grid lg:grid-cols-5 gap-16 items-start">
                    <div className="lg:col-span-2">
                        <h2 className="text-3xl font-bold mb-6 gradient-text">About Me</h2>
                        <div className="w-20 h-1.5 bg-primary rounded-full mb-8" />
                        <p className="text-sm font-mono text-muted-foreground uppercase tracking-widest leading-relaxed">
                            Gulam Sarvar • Agentic AI Architect • Data Scientist
                        </p>
                    </div>

                    <div className="lg:col-span-3 space-y-6 text-lg md:text-xl text-muted-foreground leading-relaxed">
                        <p>
                            I am <span className="text-foreground font-medium">Gulam Sarvar</span>, a Data Scientist at <span className="text-foreground font-medium">Bluebash</span> specializing in the architecture of production-grade <span className="text-foreground font-medium">Agentic AI Systems</span>.
                        </p>
                        <p>
                            My expertise lies at the intersection of <span className="text-foreground font-medium">Real-time Voice AI (VOIP)</span> and complex <span className="text-foreground font-medium">LLM Orchestration</span>. I build autonomous agents that solve non-linear problems in high-stakes healthcare and legal environments.
                        </p>
                        <p>
                            By leveraging <span className="text-foreground font-medium">LangGraph</span>, <span className="text-foreground font-medium">LiveKit</span>, and advanced <span className="text-foreground font-medium">RAG pipelines</span>, I transform raw LLM capabilities into reliable, stateful business solutions that ship with built-in observability and evaluation.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}
