import { Button } from "@/components/ui/button";
import { ArrowUpRight, Github } from "lucide-react";

const projects = [
  {
    title: "AI Webinar Wizard",
    description: "End-to-end platform for creating and hosting AI-powered webinars with real-time chat, automated transcription, and lead generation.",
    tech: ["Next.js", "TypeScript", "OpenAI API", "Supabase", "Tailwind CSS", "Stripe"],
    link: "https://example.com",
    github: "https://github.com",
    impact: "10K+ webinars hosted",
    featured: true
  },
  {
    title: "Real-time Collab Suite",
    description: "Multiplayer code editor and design tool with WebSocket synchronization, presence awareness, and conflict-free collaborative editing.",
    tech: ["React", "Node.js", "Socket.io", "PostgreSQL", "Redis", "Vercel"],
    link: "https://example.com",
    github: "https://github.com",
    impact: "100+ concurrent users",
    featured: true
  },
  {
    title: "ML Pipeline Dashboard",
    description: "Production-grade monitoring dashboard for machine learning models with real-time metrics, anomaly detection, and automated alerts.",
    tech: ["Python", "FastAPI", "React", "TensorFlow", "Docker", "Kubernetes"],
    link: "https://example.com",
    github: "https://github.com",
    impact: "200+ models monitored",
    featured: false
  },
  {
    title: "Design System Component Library",
    description: "Comprehensive component library with 100+ production-ready components, automated testing, and comprehensive documentation.",
    tech: ["React", "TypeScript", "Storybook", "Jest", "Figma API"],
    link: "https://example.com",
    github: "https://github.com",
    impact: "Saved 1000+ dev hours",
    featured: false
  },
  {
    title: "E-commerce Analytics Platform",
    description: "Advanced analytics engine processing 1M+ events daily with real-time dashboards, segmentation, and predictive insights.",
    tech: ["Next.js", "BigQuery", "Looker", "GraphQL", "Datadog"],
    link: "https://example.com",
    github: "https://github.com",
    impact: "$5M+ GMV tracked",
    featured: false
  },
  {
    title: "Mobile App Infrastructure",
    description: "Scalable backend infrastructure supporting mobile apps with 100K+ DAU, complex caching, and real-time synchronization.",
    tech: ["Node.js", "GraphQL", "MongoDB", "Redis", "AWS Lambda"],
    link: "https://example.com",
    github: "https://github.com",
    impact: "99.99% uptime",
    featured: false
  }
];

export const PortfolioProjects = () => {
  const featured = projects.filter(p => p.featured);
  const other = projects.filter(p => !p.featured);

  return (
    <section id="projects" className="py-24 bg-gradient-dark relative overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Section header */}
          <div className="mb-16 space-y-4">
            <div className="inline-block">
              <span className="text-primary font-semibold text-sm tracking-widest uppercase">Portfolio</span>
              <div className="h-1 w-12 bg-primary mt-2 rounded-full"></div>
            </div>
            <h2 className="text-4xl sm:text-5xl font-bold leading-tight">
              Startup-grade <span className="text-gradient">case studies</span>
            </h2>
          </div>

          {/* Featured Projects */}
          <div className="grid lg:grid-cols-2 gap-8 mb-12">
            {featured.map((project, i) => (
              <div key={i} className="glass rounded-2xl p-8 border group hover:shadow-elevated transition-smooth h-full flex flex-col">
                <div className="flex-1">
                  <h3 className="text-2xl font-bold mb-3 group-hover:text-primary transition-colors">{project.title}</h3>
                  <p className="text-muted-foreground mb-6 leading-relaxed">{project.description}</p>
                  
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tech.map((tech, j) => (
                      <span key={j} className="px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-medium border border-primary/20">
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="mb-6 p-4 rounded-lg bg-accent/5 border border-accent/20">
                    <p className="text-accent font-semibold text-sm">{project.impact}</p>
                  </div>
                </div>

                <div className="flex gap-3">
                  <Button asChild className="flex-1 rounded-lg font-semibold">
                    <a href={project.link} target="_blank" rel="noopener noreferrer">
                      Live Demo
                      <ArrowUpRight className="ml-2 h-4 w-4" />
                    </a>
                  </Button>
                  <Button variant="outline" size="icon" className="glass-hover rounded-lg" asChild>
                    <a href={project.github} target="_blank" rel="noopener noreferrer">
                      <Github className="h-4 w-4" />
                    </a>
                  </Button>
                </div>
              </div>
            ))}
          </div>

          {/* Other Projects */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {other.map((project, i) => (
              <div key={i} className="glass rounded-xl p-6 border group hover:shadow-card transition-smooth h-full flex flex-col">
                <h3 className="text-lg font-bold mb-2 group-hover:text-primary transition-colors">{project.title}</h3>
                <p className="text-muted-foreground text-sm mb-4 flex-1 leading-relaxed">{project.description}</p>
                
                <div className="flex flex-wrap gap-1 mb-4">
                  {project.tech.slice(0, 3).map((tech, j) => (
                    <span key={j} className="px-2 py-1 rounded text-xs bg-primary/10 text-primary/80 font-medium">
                      {tech}
                    </span>
                  ))}
                  {project.tech.length > 3 && (
                    <span className="px-2 py-1 text-xs text-muted-foreground">+{project.tech.length - 3}</span>
                  )}
                </div>

                <div className="flex gap-2">
                  <a href={project.link} target="_blank" rel="noopener noreferrer" className="text-primary text-sm font-semibold hover:underline">
                    View →
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
