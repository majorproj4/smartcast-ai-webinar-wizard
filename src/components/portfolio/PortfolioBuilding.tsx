import { ExternalLink, Github } from "lucide-react";
import { Button } from "@/components/ui/button";

const buildingProjects = [
  {
    title: "AI Research Platform",
    description: "An open-source platform for collaborative AI research with real-time collaboration, model versioning, and experiment tracking.",
    status: "In Progress",
    tech: ["Next.js", "Python", "PyTorch", "WebSocket"],
    github: "https://github.com",
    website: "https://example.com"
  },
  {
    title: "Developer Toolkit CLI",
    description: "Command-line toolkit designed to streamline common development workflows, reducing setup time from hours to minutes.",
    status: "Beta",
    tech: ["Rust", "Node.js", "TypeScript"],
    github: "https://github.com",
    website: "https://example.com"
  },
  {
    title: "Content Management System",
    description: "Headless CMS built for developers with Git-first approach, real-time collaboration, and powerful API.",
    status: "Early Access",
    tech: ["Next.js", "PostgreSQL", "GraphQL", "S3"],
    github: "https://github.com",
    website: "https://example.com"
  }
];

export const PortfolioBuilding = () => {
  const statusColors: Record<string, string> = {
    "In Progress": "from-blue-500/20 to-cyan-500/20 border-cyan-500/30 text-cyan-400",
    "Beta": "from-purple-500/20 to-pink-500/20 border-pink-500/30 text-pink-400",
    "Early Access": "from-green-500/20 to-emerald-500/20 border-emerald-500/30 text-emerald-400"
  };

  return (
    <section id="building" className="py-32 bg-background relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute bottom-1/4 -right-40 w-96 h-96 bg-primary/8 rounded-full blur-3xl opacity-30"></div>
        <div className="absolute top-1/3 -left-32 w-64 h-64 bg-accent/8 rounded-full blur-3xl opacity-25"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-7xl mx-auto">
          {/* Premium section header */}
          <div className="mb-20 space-y-6 animate-fade-in-up">
            <div className="inline-flex items-center gap-3">
              <div className="h-1 w-8 bg-primary rounded-full"></div>
              <span className="text-primary font-bold text-xs tracking-widest uppercase">Side Projects</span>
            </div>
            <h2 className="text-5xl sm:text-6xl font-bold leading-tight">
              What I'm <span className="text-gradient">building now</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl">
              Exploring new ideas and technologies through open-source and experimental projects.
            </p>
          </div>

          {/* Building projects grid */}
          <div className="grid lg:grid-cols-3 gap-8 mb-16">
            {buildingProjects.map((project, i) => (
              <div 
                key={i} 
                className="glass-premium-hover rounded-2xl p-8 border group transition-all duration-300 flex flex-col h-full animate-fade-in-up hover:border-primary/50"
                style={{ animationDelay: `${i * 0.1}s` }}
              >
                {/* Header with status */}
                <div className="flex items-start justify-between mb-4 gap-4">
                  <h3 className="text-2xl font-bold group-hover:text-primary transition-colors flex-1">
                    {project.title}
                  </h3>
                  <div className={`px-4 py-2 rounded-full bg-gradient-to-r ${statusColors[project.status as keyof typeof statusColors] || 'bg-primary/10 text-primary'} text-xs font-bold border whitespace-nowrap`}>
                    {project.status}
                  </div>
                </div>

                <p className="text-muted-foreground leading-relaxed mb-6">
                  {project.description}
                </p>

                {/* Tech stack */}
                <div className="flex-1 mb-8">
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech, j) => (
                      <span key={j} className="px-3 py-1 rounded-full bg-primary/12 text-primary text-xs font-semibold border border-primary/30 hover:border-primary/60 transition-colors">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* CTA buttons */}
                <div className="flex gap-3 pt-6 border-t border-white/10">
                  <Button asChild variant="outline" className="flex-1 glass-premium-hover rounded-lg font-semibold">
                    <a href={project.github} target="_blank" rel="noopener noreferrer" className="justify-center">
                      <Github className="h-4 w-4 mr-2" />
                      Code
                    </a>
                  </Button>
                  <Button asChild className="flex-1 bg-primary hover:bg-primary/90 rounded-lg font-semibold">
                    <a href={project.website} target="_blank" rel="noopener noreferrer" className="justify-center">
                      <ExternalLink className="h-4 w-4 mr-2" />
                      Preview
                    </a>
                  </Button>
                </div>
              </div>
            ))}
          </div>

          {/* Open source contributions */}
          <div className="glass-premium-hover rounded-2xl p-12 border">
            <div className="flex items-center gap-3 mb-12">
              <div className="w-3 h-3 rounded-full bg-primary"></div>
              <h3 className="text-3xl font-bold">Open Source Contributions</h3>
            </div>
            <div className="grid md:grid-cols-4 gap-6">
              {[
                { project: "React", contributions: "15+", role: "Contributor" },
                { project: "Next.js", contributions: "8+", role: "Contributor" },
                { project: "TypeScript", contributions: "12+", role: "Community" },
                { project: "TailwindCSS", contributions: "6+", role: "Plugin Author" }
              ].map((contrib, i) => (
                <div key={i} className="p-6 rounded-xl border border-white/15 hover:border-primary/50 bg-white/3 hover:bg-white/6 transition-all group text-center">
                  <h4 className="font-bold text-primary mb-3 group-hover:text-accent transition-colors">{contrib.project}</h4>
                  <p className="text-3xl font-bold mb-2 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">{contrib.contributions}</p>
                  <p className="text-muted-foreground text-sm">{contrib.role}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
