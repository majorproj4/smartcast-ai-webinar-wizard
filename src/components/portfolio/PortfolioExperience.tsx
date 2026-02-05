const experiences = [
  {
    title: "Senior Full Stack Engineer",
    company: "Vercel",
    period: "2023 - Present",
    description: "Leading product architecture and infrastructure for AI-powered deployment platform serving 100K+ developers.",
    achievements: [
      "Architected real-time collaboration features handling 50K+ concurrent users",
      "Reduced deployment time by 70% through infrastructure optimization",
      "Led team of 5 engineers shipping 3 major features quarterly"
    ]
  },
  {
    title: "Full Stack Engineer",
    company: "Linear",
    period: "2021 - 2023",
    description: "Built core product features for modern issue tracking platform with 50K+ teams.",
    achievements: [
      "Designed and implemented sync engine with conflict-free collaborative editing",
      "Improved query performance by 10x through database optimization",
      "Shipped mobile app support reaching 100K+ monthly active users"
    ]
  },
  {
    title: "Full Stack Developer",
    company: "Stripe",
    period: "2019 - 2021",
    description: "Developed payment processing infrastructure and developer tools.",
    achievements: [
      "Built webhook delivery system processing 1B+ events monthly",
      "Created developer dashboard reducing integration time by 50%",
      "Mentored 3 junior engineers through complex system design"
    ]
  },
  {
    title: "Junior Developer",
    company: "Airbnb",
    period: "2018 - 2019",
    description: "Started career building user-facing features for web platform.",
    achievements: [
      "Shipped search optimization improving relevance by 25%",
      "Built real-time notification system for 2M+ daily active users",
      "Contributed to open source projects during 20% project time"
    ]
  }
];

export const PortfolioExperience = () => {
  return (
    <section id="experience" className="py-32 bg-gradient-dark relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/3 -left-32 w-64 h-64 bg-primary/8 rounded-full blur-3xl opacity-40"></div>
        <div className="absolute bottom-1/3 right-1/4 w-72 h-72 bg-accent/8 rounded-full blur-3xl opacity-30"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-5xl mx-auto">
          {/* Premium section header */}
          <div className="mb-20 space-y-6 animate-fade-in-up">
            <div className="inline-flex items-center gap-3">
              <div className="h-1 w-8 bg-primary rounded-full"></div>
              <span className="text-primary font-bold text-xs tracking-widest uppercase">Experience</span>
            </div>
            <h2 className="text-5xl sm:text-6xl font-bold leading-tight">
              Building at <span className="text-gradient">world-class companies</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl">
              Experience across fintech, developer platforms, and enterprise infrastructure.
            </p>
          </div>

          {/* Premium Timeline */}
          <div className="relative">
            {/* Animated gradient line */}
            <div className="absolute left-0 sm:left-8 top-0 bottom-0 w-px hidden sm:block">
              <div className="h-full w-full bg-gradient-to-b from-primary/50 via-primary/20 to-accent/20 rounded-full"></div>
            </div>

            <div className="space-y-12">
              {experiences.map((exp, i) => (
                <div key={i} className="relative pl-8 sm:pl-32 animate-fade-in-up" style={{ animationDelay: `${i * 0.1}s` }}>
                  {/* Premium timeline dot with glow */}
                  <div className="absolute left-0 sm:-left-4 top-0 w-8 h-8 sm:w-12 sm:h-12">
                    <div className="absolute inset-0">
                      <div className="w-full h-full rounded-full bg-gradient-dark border-3 border-primary/60 flex items-center justify-center shadow-glow">
                        <div className="w-3 h-3 rounded-full bg-gradient-primary"></div>
                      </div>
                    </div>
                  </div>

                  {/* Premium content card */}
                  <div className="glass-premium-hover group rounded-2xl p-8 border transition-all duration-300">
                    <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between mb-4 gap-4">
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-2">
                          <h3 className="text-2xl sm:text-3xl font-bold group-hover:text-primary transition-colors">
                            {exp.title}
                          </h3>
                        </div>
                        <p className="text-primary font-semibold text-lg">{exp.company}</p>
                      </div>
                      <div className="inline-block px-4 py-2 rounded-full bg-primary/15 border border-primary/30 whitespace-nowrap">
                        <span className="text-primary text-xs font-bold tracking-wider">{exp.period}</span>
                      </div>
                    </div>

                    <p className="text-muted-foreground mb-8 leading-relaxed">
                      {exp.description}
                    </p>

                    {/* Achievements with enhanced styling */}
                    <div className="space-y-4 pt-6 border-t border-white/10">
                      <h4 className="text-sm font-semibold text-accent uppercase tracking-wider">Key Achievements</h4>
                      <div className="space-y-3">
                        {exp.achievements.map((achievement, j) => (
                          <div key={j} className="flex gap-4 items-start">
                            <span className="text-accent font-bold text-xl leading-relaxed pt-0.5">→</span>
                            <p className="text-muted-foreground leading-relaxed pt-0.5">{achievement}</p>
                          </div>
                        ))}
                      </div>
                    </div>
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
