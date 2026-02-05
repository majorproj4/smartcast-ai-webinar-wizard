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
    <section id="projects" className="py-32 bg-background relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 -right-40 w-96 h-96 bg-primary/8 rounded-full blur-3xl opacity-30"></div>
        <div className="absolute bottom-1/4 -left-40 w-96 h-96 bg-accent/8 rounded-full blur-3xl opacity-30"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-7xl mx-auto">
          {/* Premium section header */}
          <div className="mb-20 space-y-6 animate-fade-in-up">
            <div className="inline-flex items-center gap-3">
              <div className="h-1 w-8 bg-primary rounded-full"></div>
              <span className="text-primary font-bold text-xs tracking-widest uppercase">Projects & Case Studies</span>
            </div>
            <h2 className="text-5xl sm:text-6xl font-bold leading-tight">
              Startup-grade <span className="text-gradient">work</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl">
              Featured projects showcasing production-ready systems, scalable architecture, and meaningful impact across fintech, AI, and developer tools.
            </p>
          </div>

          {/* Featured Projects with Premium Styling */}
          <div className="grid lg:grid-cols-2 gap-8 mb-16">
            {featured.map((project, i) => (
              <div 
                key={i} 
                className="glass-premium-hover group h-full flex flex-col rounded-2xl overflow-hidden border transition-all duration-300"
                style={{ animationDelay: `${i * 0.1}s` }}
              >
                {/* Premium gradient header */}
                <div className="h-1 w-full bg-gradient-primary"></div>
                
                <div className="p-8 flex-1 flex flex-col">
                  <div className="flex-1">
                    <div className="inline-flex items-center gap-2 mb-4">
                      <div className="w-2 h-2 rounded-full bg-primary"></div>
                      <span className="text-primary text-xs font-bold tracking-wider uppercase">Featured</span>
                    </div>

                    <h3 className="text-3xl font-bold mb-4 group-hover:text-primary transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-muted-foreground mb-8 leading-relaxed text-base">
                      {project.description}
                    </p>
                    
                    {/* Tech stack with better styling */}
                    <div className="flex flex-wrap gap-2 mb-8">
                      {project.tech.map((tech, j) => (
                        <span 
                          key={j} 
                          className="px-4 py-2 rounded-full bg-primary/15 text-primary text-xs font-semibold border border-primary/30 hover:border-primary/60 transition-colors"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    {/* Impact metric */}
                    <div className="mb-8 p-4 rounded-xl bg-gradient-to-r from-primary/10 to-accent/10 border border-primary/20">
                      <p className="text-accent font-bold text-sm flex items-center gap-2">
                        <span className="text-lg">📊</span>
                        {project.impact}
                      </p>
                    </div>
                  </div>

                  {/* CTA Buttons */}
                  <div className="flex gap-3 pt-4 border-t border-white/10">
                    <Button asChild className="flex-1 mt-4 rounded-lg font-semibold bg-primary hover:bg-primary/90">
                      <a href={project.link} target="_blank" rel="noopener noreferrer">
                        Live Demo
                        <ArrowUpRight className="ml-2 h-4 w-4" />
                      </a>
                    </Button>
                    <Button 
                      variant="outline" 
                      size="icon" 
                      className="mt-4 glass-premium-hover rounded-lg" 
                      asChild
                    >
                      <a href={project.github} target="_blank" rel="noopener noreferrer">
                        <Github className="h-4 w-4" />
                      </a>
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Other Projects Grid */}
          <div className="mb-8">
            <h3 className="text-2xl font-bold mb-8">Other Notable Projects</h3>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {other.map((project, i) => (
                <div 
                  key={i} 
                  className="glass-premium-hover group rounded-xl p-6 border h-full flex flex-col transition-all duration-300 hover:border-primary/50"
                  style={{ animationDelay: `${(i + 2) * 0.1}s` }}
                >
                  <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground text-sm mb-6 flex-1 leading-relaxed">
                    {project.description}
                  </p>
                  
                  {/* Tech stack compact */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tech.slice(0, 3).map((tech, j) => (
                      <span key={j} className="px-3 py-1 rounded-lg text-xs bg-primary/12 text-primary/80 font-semibold border border-primary/20">
                        {tech}
                      </span>
                    ))}
                    {project.tech.length > 3 && (
                      <span className="px-3 py-1 text-xs text-muted-foreground/60 font-medium">
                        +{project.tech.length - 3}
                      </span>
                    )}
                  </div>

                  {/* Links */}
                  <div className="flex gap-4 pt-4 border-t border-white/10">
                    <a 
                      href={project.link} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="text-primary text-sm font-semibold hover:text-primary/80 transition-colors inline-flex items-center gap-1"
                    >
                      View <ArrowUpRight className="h-3 w-3" />
                    </a>
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
