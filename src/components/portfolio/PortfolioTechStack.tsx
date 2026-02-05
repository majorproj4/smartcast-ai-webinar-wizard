const techStack = [
  { name: "React", icon: "⚛️", category: "Frontend" },
  { name: "Next.js", icon: "▲", category: "Frontend" },
  { name: "TypeScript", icon: "🔷", category: "Frontend" },
  { name: "Tailwind CSS", icon: "🎨", category: "Frontend" },
  { name: "Node.js", icon: "🟩", category: "Backend" },
  { name: "Python", icon: "🐍", category: "Backend" },
  { name: "PostgreSQL", icon: "🐘", category: "Database" },
  { name: "MongoDB", icon: "🍃", category: "Database" },
  { name: "Redis", icon: "🔴", category: "Database" },
  { name: "GraphQL", icon: "💠", category: "Backend" },
  { name: "Docker", icon: "🐋", category: "DevOps" },
  { name: "Kubernetes", icon: "☸️", category: "DevOps" },
  { name: "AWS", icon: "🔶", category: "Cloud" },
  { name: "Vercel", icon: "▲", category: "Cloud" },
  { name: "OpenAI", icon: "🤖", category: "AI/ML" },
  { name: "LangChain", icon: "🔗", category: "AI/ML" },
];

export const PortfolioTechStack = () => {
  return (
    <section id="tech-stack" className="py-24 bg-background relative overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Section header */}
          <div className="mb-16 space-y-4">
            <div className="inline-block">
              <span className="text-primary font-semibold text-sm tracking-widest uppercase">Tech Stack</span>
              <div className="h-1 w-12 bg-primary mt-2 rounded-full"></div>
            </div>
            <h2 className="text-4xl sm:text-5xl font-bold leading-tight">
              Tools & technologies I <span className="text-gradient">love working with</span>
            </h2>
          </div>

          {/* Tech stack grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 mb-16">
            {techStack.map((tech, i) => (
              <div
                key={i}
                className="glass rounded-xl p-6 border group hover:shadow-elevated hover:border-primary/50 hover:scale-105 transition-smooth cursor-pointer text-center"
              >
                <div className="text-4xl mb-3 group-hover:scale-125 transition-transform">{tech.icon}</div>
                <h3 className="font-semibold text-sm mb-1">{tech.name}</h3>
                <p className="text-xs text-muted-foreground">{tech.category}</p>
              </div>
            ))}
          </div>

          {/* Learning focus */}
          <div className="grid md:grid-cols-2 gap-8">
            <div className="glass rounded-2xl p-10 border">
              <h3 className="text-2xl font-bold mb-6 flex items-center gap-3">
                <span className="text-2xl">📚</span> Currently Learning
              </h3>
              <ul className="space-y-4">
                {[
                  "Advanced Kubernetes patterns for distributed systems",
                  "Fine-tuning LLMs for specialized applications",
                  "Rust for high-performance backend systems",
                  "Web3 infrastructure and smart contract optimization"
                ].map((item, i) => (
                  <li key={i} className="flex gap-3 text-muted-foreground">
                    <span className="text-primary font-bold min-w-fit">→</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="glass rounded-2xl p-10 border">
              <h3 className="text-2xl font-bold mb-6 flex items-center gap-3">
                <span className="text-2xl">🎯</span> Focus Areas
              </h3>
              <ul className="space-y-4">
                {[
                  "Building scalable web applications with millions of users",
                  "AI-powered features that enhance user experience",
                  "Clean, maintainable code with excellent documentation",
                  "Developer experience and tooling improvements"
                ].map((item, i) => (
                  <li key={i} className="flex gap-3 text-muted-foreground">
                    <span className="text-accent font-bold min-w-fit">✦</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
