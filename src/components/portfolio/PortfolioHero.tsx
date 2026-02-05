import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, Github, Linkedin, Mail, ExternalLink } from "lucide-react";

interface PortfolioHeroProps {
  activeSection: string;
  setActiveSection: (section: string) => void;
}

const roles = ["Full Stack Engineer", "AI/ML Developer", "Product Builder", "Open Source Contributor"];

export const PortfolioHero = ({ activeSection, setActiveSection }: PortfolioHeroProps) => {
  const [displayText, setDisplayText] = useState("");
  const [roleIndex, setRoleIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);

  useEffect(() => {
    const currentRole = roles[roleIndex];
    if (charIndex < currentRole.length) {
      const timer = setTimeout(() => {
        setDisplayText((prev) => prev + currentRole[charIndex]);
        setCharIndex((prev) => prev + 1);
      }, 50);
      return () => clearTimeout(timer);
    } else {
      const timer = setTimeout(() => {
        setDisplayText("");
        setCharIndex(0);
        setRoleIndex((prev) => (prev + 1) % roles.length);
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [charIndex, roleIndex]);

  const scrollToSection = (id: string) => {
    setActiveSection(id);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="min-h-screen flex items-center justify-center pt-20 relative overflow-hidden bg-gradient-dark">
      {/* Premium animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-40 -left-60 w-96 h-96 bg-primary/15 rounded-full blur-3xl opacity-50 animate-float"></div>
        <div className="absolute bottom-32 -right-60 w-96 h-96 bg-accent/12 rounded-full blur-3xl opacity-40 animate-float" style={{ animationDelay: "2.5s" }}></div>
        <div className="absolute top-1/3 -left-32 w-64 h-64 bg-primary/8 rounded-full blur-2xl opacity-30 animate-pulse" style={{ animationDelay: "0.5s" }}></div>
        <div className="absolute -bottom-20 right-1/3 w-80 h-80 bg-accent/10 rounded-full blur-3xl opacity-25 animate-float" style={{ animationDelay: "3s" }}></div>
        
        {/* Grid overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-transparent to-transparent pointer-events-none"></div>
      </div>

      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          {/* Main content with improved spacing */}
          <div className="space-y-10 text-center animate-fade-in-up">
            {/* Main heading with premium styling */}
            <div className="space-y-6">
              <div className="inline-block">
                <span className="text-xs sm:text-sm font-bold tracking-widest uppercase text-primary/80">
                  Full Stack Engineer & Product Builder
                </span>
              </div>

              <h1 className="text-6xl sm:text-7xl lg:text-8xl font-bold leading-tight tracking-tight">
                Hey, I'm{" "}
                <span className="text-gradient bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent animate-pulse">
                  Rahul Kumar
                </span>
              </h1>
              
              {/* Animated role text with better styling */}
              <div className="h-20 flex items-center justify-center">
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-r from-primary/30 to-accent/30 blur-2xl opacity-20 rounded-lg"></div>
                  <p className="relative text-xl sm:text-2xl lg:text-3xl font-semibold text-primary min-h-16 px-6 py-4">
                    {displayText}
                    <span className="animate-pulse ml-1">|</span>
                  </p>
                </div>
              </div>

              {/* Premium description */}
              <p className="text-base sm:text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed font-light">
                I craft world-class web applications and AI-powered solutions. Specializing in scalable architecture, 
                clean code, and shipping products that matter. Building at the intersection of design and engineering.
              </p>
            </div>

            {/* Premium CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-6">
              <Button
                size="lg"
                className="text-base px-8 py-6 rounded-full font-semibold shadow-elevated hover:shadow-glow transition-smooth bg-primary hover:bg-primary/90"
                onClick={() => scrollToSection("projects")}
              >
                View My Work
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button
                size="lg"
                className="text-base px-8 py-6 rounded-full font-semibold glass-premium-hover"
                onClick={() => scrollToSection("contact")}
              >
                Get in Touch
              </Button>
            </div>

            {/* Social icons with premium styling */}
            <div className="flex justify-center gap-3 pt-8">
              {[
                { Icon: Github, href: "https://github.com", label: "GitHub" },
                { Icon: Linkedin, href: "https://linkedin.com", label: "LinkedIn" },
                { Icon: Mail, href: "mailto:hello@example.com", label: "Email" }
              ].map(({ Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target={href !== "mailto:hello@example.com" ? "_blank" : undefined}
                  rel={href !== "mailto:hello@example.com" ? "noopener noreferrer" : undefined}
                  className="p-3 glass-premium-hover rounded-full group backdrop-blur-md"
                  title={label}
                >
                  <Icon className="h-5 w-5 group-hover:text-primary transition-smooth group-hover:scale-110" />
                </a>
              ))}
            </div>

            {/* Enhanced scroll indicator */}
            <div className="pt-16 animate-bounce">
              <div className="w-6 h-10 border-2 border-primary/40 rounded-full flex items-center justify-center mx-auto hover:border-primary/80 transition-colors">
                <div className="w-1.5 h-2 bg-primary/60 rounded-full animate-pulse"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
