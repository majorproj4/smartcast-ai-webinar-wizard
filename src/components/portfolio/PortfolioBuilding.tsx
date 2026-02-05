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
  return (
    <section id="building" className="py-24 bg-gradient-dark relative overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Section header */}
          <div className="mb-16 space-y-4">
            <div className="inline-block">
              <span className="text-primary font-semibold text-sm tracking-widest uppercase">Side Projects</span>
              <div className="h-1 w-12 bg-primary mt-2 rounded-full"></div>
            </div>
            <h2 className="text-4xl sm:text-5xl font-bold leading-tight">
              What I'm <span className="text-gradient">building now</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl">
              Exploring new ideas and technologies through open-source and experimental projects.
            </p>
          </div>

          {/* Building projects grid */}
          <div className="grid lg:grid-cols-3 gap-8">
            {buildingProjects.map((project, i) => (
              <div key={i} className="glass rounded-2xl p-8 border group hover:shadow-elevated transition-smooth flex flex-col h-full">
                <div className="mb-6">
                  <div className="flex items-start justify-between mb-3">
                    <h3 className="text-xl font-bold group-hover:text-primary transition-colors">{project.title}</h3>
                    <span className="px-3 py-1 rounded-full bg-accent/10 text-accent text-xs font-semibold border border-accent/30">
                      {project.status}
                    </span>
                  </div>
                  <p className="text-muted-foreground leading-relaxed">{project.description}</p>
                </div>

                <div className="flex-1 mb-6">
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech, j) => (
                      <span key={j} className="px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-medium">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex gap-3">
                  <Button asChild variant="outline" className="flex-1 glass-hover rounded-lg">
                    <a href={project.github} target="_blank" rel="noopener noreferrer" className="justify-center">
                      <Github className="h-4 w-4 mr-2" />
                      Code
                    </a>
                  </Button>
                  <Button asChild className="flex-1 rounded-lg">
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
          <div className="mt-16 glass rounded-2xl p-12 border">
            <h3 className="text-2xl font-bold mb-8">Open Source Contributions</h3>
            <div className="grid md:grid-cols-4 gap-6">
              {[
                { project: "React", contributions: "15+", role: "Contributor" },
                { project: "Next.js", contributions: "8+", role: "Contributor" },
                { project: "TypeScript", contributions: "12+", role: "Community" },
                { project: "TailwindCSS", contributions: "6+", role: "Plugin Author" }
              ].map((contrib, i) => (
                <div key={i} className="p-6 rounded-xl border border-white/10 hover:border-white/20 transition-smooth text-center">
                  <h4 className="font-bold text-primary mb-2">{contrib.project}</h4>
                  <p className="text-2xl font-bold mb-1">{contrib.contributions}</p>
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
