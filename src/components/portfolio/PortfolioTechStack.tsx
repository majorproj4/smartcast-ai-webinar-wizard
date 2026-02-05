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
  const categories = ["Frontend", "Backend", "Database", "DevOps", "Cloud", "AI/ML"];
  const categoryColors: Record<string, string> = {
    Frontend: "from-blue-500/20 to-cyan-500/20",
    Backend: "from-purple-500/20 to-pink-500/20",
    Database: "from-green-500/20 to-emerald-500/20",
    DevOps: "from-orange-500/20 to-red-500/20",
    Cloud: "from-yellow-500/20 to-amber-500/20",
    "AI/ML": "from-indigo-500/20 to-blue-500/20"
  };

  return (
    <section id="tech-stack" className="py-32 bg-gradient-dark relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 right-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl opacity-30"></div>
        <div className="absolute bottom-1/4 -left-40 w-80 h-80 bg-accent/8 rounded-full blur-3xl opacity-25"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-7xl mx-auto">
          {/* Premium section header */}
          <div className="mb-20 space-y-6 animate-fade-in-up">
            <div className="inline-flex items-center gap-3">
              <div className="h-1 w-8 bg-primary rounded-full"></div>
              <span className="text-primary font-bold text-xs tracking-widest uppercase">Tech Stack</span>
            </div>
            <h2 className="text-5xl sm:text-6xl font-bold leading-tight">
              Tools & technologies I <span className="text-gradient">love</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl">
              Production-ready stack for building scalable systems, from frontend to infrastructure.
            </p>
          </div>

          {/* Categorized tech stack grid */}
          <div className="space-y-10 mb-16">
            {categories.map((category, catIdx) => {
              const categoryTechs = techStack.filter(tech => tech.category === category);
              return (
                <div key={category} className="space-y-4 animate-fade-in-up" style={{ animationDelay: `${catIdx * 0.05}s` }}>
                  <div className="flex items-center gap-3">
                    <div className="h-1 w-2 rounded-full bg-primary"></div>
                    <h3 className="text-lg font-bold text-primary uppercase tracking-wider">{category}</h3>
                    <div className="h-px flex-1 bg-gradient-to-r from-primary/30 to-transparent"></div>
                  </div>
                  <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3">
                    {categoryTechs.map((tech, i) => (
                      <div
                        key={i}
                        className="glass-premium-hover group rounded-xl p-5 border transition-all duration-300 text-center hover:border-primary/50 cursor-pointer"
                      >
                        <div className="text-5xl mb-3 group-hover:scale-125 group-hover:rotate-6 transition-transform duration-300">
                          {tech.icon}
                        </div>
                        <h4 className="font-bold text-sm group-hover:text-primary transition-colors">{tech.name}</h4>
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>

          {/* Learning focus grid */}
          <div className="grid md:grid-cols-2 gap-8">
            <div className="glass-premium-hover rounded-2xl p-10 border">
              <div className="flex items-center gap-3 mb-8">
                <div className="w-8 h-8 rounded-lg bg-primary/20 border border-primary/30 flex items-center justify-center">
                  <span className="text-xl">📚</span>
                </div>
                <h3 className="text-2xl font-bold">Currently Learning</h3>
              </div>
              <ul className="space-y-4">
                {[
                  "Advanced Kubernetes patterns for distributed systems",
                  "Fine-tuning LLMs for specialized applications",
                  "Rust for high-performance backend systems",
                  "Web3 infrastructure and smart contract optimization"
                ].map((item, i) => (
                  <li key={i} className="flex gap-4 items-start text-muted-foreground">
                    <span className="text-primary font-bold min-w-fit text-xl mt-0.5">→</span>
                    <span className="leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="glass-premium-hover rounded-2xl p-10 border">
              <div className="flex items-center gap-3 mb-8">
                <div className="w-8 h-8 rounded-lg bg-accent/20 border border-accent/30 flex items-center justify-center">
                  <span className="text-xl">🎯</span>
                </div>
                <h3 className="text-2xl font-bold">Focus Areas</h3>
              </div>
              <ul className="space-y-4">
                {[
                  "Building scalable web applications with millions of users",
                  "AI-powered features that enhance user experience",
                  "Clean, maintainable code with excellent documentation",
                  "Developer experience and tooling improvements"
                ].map((item, i) => (
                  <li key={i} className="flex gap-4 items-start text-muted-foreground">
                    <span className="text-accent font-bold min-w-fit text-lg mt-0.5">✦</span>
                    <span className="leading-relaxed">{item}</span>
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
