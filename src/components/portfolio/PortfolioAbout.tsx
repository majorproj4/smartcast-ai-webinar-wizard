export const PortfolioAbout = () => {
  return (
    <section id="about" className="py-24 bg-background relative overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          {/* Section header */}
          <div className="mb-16 space-y-4">
            <div className="inline-block">
              <span className="text-primary font-semibold text-sm tracking-widest uppercase">About</span>
              <div className="h-1 w-12 bg-primary mt-2 rounded-full"></div>
            </div>
            <h2 className="text-4xl sm:text-5xl font-bold leading-tight">
              Crafting experiences that <span className="text-gradient">matter</span>
            </h2>
          </div>

          {/* About content */}
          <div className="grid lg:grid-cols-3 gap-8 lg:gap-12">
            {/* Main narrative */}
            <div className="lg:col-span-2 space-y-6 text-lg text-muted-foreground leading-relaxed">
              <p>
                I'm a full-stack engineer with a passion for building products that solve real problems. With over 5 years of experience across startups and high-growth companies, I've learned that great engineering is about more than just writing code—it's about understanding users, solving complex problems elegantly, and shipping with confidence.
              </p>
              <p>
                My expertise spans modern web technologies (React, Next.js, TypeScript), backend systems (Node.js, Python, databases), and emerging AI/ML applications. I thrive at the intersection of product thinking and technical execution, translating business goals into scalable, performant solutions.
              </p>
              <p>
                When I'm not building, I'm contributing to open source, writing about web development, or exploring the latest advancements in AI. I believe in continuous learning and pushing the boundaries of what's possible on the web.
              </p>
            </div>

            {/* Quick stats */}
            <div className="space-y-4">
              <div className="glass rounded-xl p-6 group hover:shadow-glow transition-smooth">
                <div className="text-3xl font-bold text-primary mb-2">50+</div>
                <p className="text-muted-foreground text-sm">Projects shipped to production</p>
              </div>
              <div className="glass rounded-xl p-6 group hover:shadow-glow transition-smooth">
                <div className="text-3xl font-bold text-accent mb-2">10M+</div>
                <p className="text-muted-foreground text-sm">Users reached through platforms</p>
              </div>
              <div className="glass rounded-xl p-6 group hover:shadow-glow transition-smooth">
                <div className="text-3xl font-bold text-primary mb-2">5+</div>
                <p className="text-muted-foreground text-sm">Years of professional experience</p>
              </div>
            </div>
          </div>

          {/* Values */}
          <div className="mt-16 grid sm:grid-cols-3 gap-8">
            {[
              { icon: "⚡", title: "Performance", desc: "Every millisecond matters" },
              { icon: "🔐", title: "Security", desc: "Trust is non-negotiable" },
              { icon: "♿", title: "Accessibility", desc: "Build for everyone" }
            ].map((value, i) => (
              <div key={i} className="glass rounded-xl p-6 border-l-2 border-primary/50 group hover:border-primary transition-smooth">
                <div className="text-3xl mb-3">{value.icon}</div>
                <h3 className="text-xl font-bold mb-2">{value.title}</h3>
                <p className="text-muted-foreground text-sm">{value.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
