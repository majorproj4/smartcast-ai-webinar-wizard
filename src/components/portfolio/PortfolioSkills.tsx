const skillCategories = [
  {
    category: "Frontend",
    skills: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Framer Motion", "Three.js"]
  },
  {
    category: "Backend",
    skills: ["Node.js", "Python", "PostgreSQL", "Redis", "GraphQL", "REST APIs"]
  },
  {
    category: "AI & ML",
    skills: ["LLMs", "RAG Systems", "Fine-tuning", "Embeddings", "Prompt Engineering", "OpenAI API"]
  },
  {
    category: "DevOps & Cloud",
    skills: ["Docker", "Kubernetes", "AWS", "Vercel", "CI/CD", "Monitoring"]
  },
  {
    category: "Tools & Databases",
    skills: ["Git", "Figma", "Supabase", "Stripe", "SendGrid", "Datadog"]
  },
  {
    category: "Soft Skills",
    skills: ["System Design", "Code Review", "Mentoring", "Technical Writing", "Product Thinking", "Agile"]
  }
];

export const PortfolioSkills = () => {
  return (
    <section id="skills" className="py-32 bg-background relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/2 -right-40 w-96 h-96 bg-accent/8 rounded-full blur-3xl opacity-30"></div>
        <div className="absolute -bottom-40 left-1/3 w-80 h-80 bg-primary/8 rounded-full blur-3xl opacity-25"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-7xl mx-auto">
          {/* Premium section header */}
          <div className="mb-20 space-y-6 animate-fade-in-up">
            <div className="inline-flex items-center gap-3">
              <div className="h-1 w-8 bg-primary rounded-full"></div>
              <span className="text-primary font-bold text-xs tracking-widest uppercase">Skills & Expertise</span>
            </div>
            <h2 className="text-5xl sm:text-6xl font-bold leading-tight">
              Technologies & <span className="text-gradient">capabilities</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl">
              Full-stack expertise across modern web technologies, AI/ML systems, and cloud infrastructure.
            </p>
          </div>

          {/* Modern skills grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
            {skillCategories.map((category, i) => (
              <div 
                key={i} 
                className="glass-premium-hover group rounded-2xl p-8 border transition-all duration-300 hover:border-primary/50 animate-fade-in-up"
                style={{ animationDelay: `${i * 0.1}s` }}
              >
                <div className="flex items-center gap-3 mb-8">
                  <div className="w-2 h-2 rounded-full bg-primary group-hover:scale-150 transition-transform"></div>
                  <h3 className="text-xl font-bold text-primary">{category.category}</h3>
                </div>

                <div className="grid grid-cols-2 gap-3">
                  {category.skills.map((skill, j) => (
                    <div
                      key={j}
                      className="px-4 py-3 rounded-lg bg-primary/8 border border-primary/20 group-hover:border-primary/40 group-hover:bg-primary/12 transition-all text-sm font-semibold text-foreground hover:shadow-glow"
                    >
                      {skill}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Proficiency section with premium styling */}
          <div className="glass-premium-hover rounded-3xl p-12 border">
            <div className="space-y-4 mb-12">
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 rounded-full bg-primary"></div>
                <h3 className="text-lg font-bold text-primary uppercase tracking-wider">Core Competencies</h3>
              </div>
              <p className="text-muted-foreground">Proficiency levels across key technical areas</p>
            </div>

            <div className="grid md:grid-cols-2 gap-10">
              {[
                { skill: "Full Stack Development", level: 95 },
                { skill: "System Design & Architecture", level: 90 },
                { skill: "AI/ML Integration", level: 85 },
                { skill: "Team Leadership", level: 88 },
                { skill: "Performance Optimization", level: 92 },
                { skill: "Product Development", level: 87 }
              ].map((item, i) => (
                <div key={i} className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="font-semibold text-base">{item.skill}</span>
                    <span className="text-primary font-bold text-lg">{item.level}%</span>
                  </div>
                  <div className="h-2.5 rounded-full bg-white/8 border border-white/15 overflow-hidden shadow-inner">
                    <div
                      className="h-full bg-gradient-primary rounded-full transition-all duration-1500 ease-out shadow-glow"
                      style={{ width: `${item.level}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
