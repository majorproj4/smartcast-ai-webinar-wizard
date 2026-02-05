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
    <section id="skills" className="py-24 bg-gradient-dark relative overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Section header */}
          <div className="mb-16 space-y-4">
            <div className="inline-block">
              <span className="text-primary font-semibold text-sm tracking-widest uppercase">Skills</span>
              <div className="h-1 w-12 bg-primary mt-2 rounded-full"></div>
            </div>
            <h2 className="text-4xl sm:text-5xl font-bold leading-tight">
              Technologies & <span className="text-gradient">expertise</span>
            </h2>
          </div>

          {/* Skills grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {skillCategories.map((category, i) => (
              <div key={i} className="glass rounded-xl p-8 border group hover:shadow-elevated hover:border-primary/50 transition-smooth">
                <h3 className="text-xl font-bold mb-6 text-primary">{category.category}</h3>
                <div className="grid grid-cols-2 gap-3">
                  {category.skills.map((skill, j) => (
                    <div
                      key={j}
                      className="px-4 py-3 rounded-lg bg-white/5 border border-white/10 group-hover:border-white/20 group-hover:bg-white/10 transition-smooth text-sm font-medium"
                    >
                      {skill}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Proficiency section */}
          <div className="mt-16 glass rounded-2xl p-12 border">
            <h3 className="text-2xl font-bold mb-8">Core Competencies</h3>
            <div className="grid md:grid-cols-2 gap-8">
              {[
                { skill: "Full Stack Development", level: 95 },
                { skill: "System Design & Architecture", level: 90 },
                { skill: "AI/ML Integration", level: 85 },
                { skill: "Team Leadership", level: 88 },
                { skill: "Performance Optimization", level: 92 },
                { skill: "Product Development", level: 87 }
              ].map((item, i) => (
                <div key={i}>
                  <div className="flex justify-between items-center mb-2">
                    <span className="font-semibold">{item.skill}</span>
                    <span className="text-primary font-bold">{item.level}%</span>
                  </div>
                  <div className="h-2 rounded-full bg-white/10 border border-white/20 overflow-hidden">
                    <div
                      className="h-full bg-gradient-primary rounded-full transition-all duration-1000"
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
