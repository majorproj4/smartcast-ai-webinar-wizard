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
    <section id="experience" className="py-24 bg-background relative overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          {/* Section header */}
          <div className="mb-16 space-y-4">
            <div className="inline-block">
              <span className="text-primary font-semibold text-sm tracking-widest uppercase">Experience</span>
              <div className="h-1 w-12 bg-primary mt-2 rounded-full"></div>
            </div>
            <h2 className="text-4xl sm:text-5xl font-bold leading-tight">
              Building at <span className="text-gradient">world-class companies</span>
            </h2>
          </div>

          {/* Timeline */}
          <div className="relative">
            {/* Vertical line */}
            <div className="absolute left-8 top-0 bottom-0 w-px bg-gradient-to-b from-primary/30 via-primary/10 to-transparent hidden sm:block"></div>

            <div className="space-y-12">
              {experiences.map((exp, i) => (
                <div key={i} className="relative pl-0 sm:pl-24">
                  {/* Timeline dot */}
                  <div className="absolute left-0 sm:left-0 top-0 w-16 h-16 sm:w-16 sm:h-16 -translate-x-[60px] sm:-translate-x-[108px]">
                    <div className="w-full h-full rounded-full bg-gradient-dark border-2 border-primary flex items-center justify-center">
                      <div className="w-2 h-2 rounded-full bg-primary"></div>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="glass rounded-xl p-8 border group hover:shadow-elevated transition-smooth">
                    <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between mb-3">
                      <div>
                        <h3 className="text-2xl font-bold mb-1">{exp.title}</h3>
                        <p className="text-primary font-semibold">{exp.company}</p>
                      </div>
                      <span className="text-muted-foreground text-sm mt-2 sm:mt-0">{exp.period}</span>
                    </div>

                    <p className="text-muted-foreground mb-6 leading-relaxed">{exp.description}</p>

                    <div className="space-y-3">
                      {exp.achievements.map((achievement, j) => (
                        <div key={j} className="flex gap-3">
                          <span className="text-accent font-bold min-w-fit">→</span>
                          <p className="text-muted-foreground text-sm leading-relaxed">{achievement}</p>
                        </div>
                      ))}
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
