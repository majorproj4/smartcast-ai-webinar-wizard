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
    <section className="min-h-screen flex items-center justify-center pt-20 gradient-dark relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 -left-40 w-80 h-80 bg-primary/10 rounded-full blur-3xl opacity-40 animate-float"></div>
        <div className="absolute bottom-20 -right-40 w-80 h-80 bg-accent/10 rounded-full blur-3xl opacity-40 animate-float" style={{ animationDelay: "2s" }}></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-primary/5 rounded-full blur-3xl opacity-30 animate-pulse"></div>
      </div>

      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          {/* Main heading with animated role */}
          <div className="space-y-6">
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold leading-tight tracking-tight">
              Hey, I'm{" "}
              <span className="text-gradient">Rahul Kumar</span>
            </h1>
            
            <div className="h-16 flex items-center justify-center">
              <p className="text-2xl sm:text-3xl font-semibold text-primary min-h-12">
                {displayText}
                <span className="animate-pulse">|</span>
              </p>
            </div>

            <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              I build cutting-edge web applications and AI-powered solutions that bridge technology and user experience. Passionate about clean code, scalable architecture, and shipping products that matter.
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
            <Button
              size="lg"
              className="text-lg px-8 py-6 rounded-full font-semibold shadow-elevated hover:shadow-glow transition-smooth"
              onClick={() => scrollToSection("projects")}
            >
              View My Work
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="text-lg px-8 py-6 rounded-full font-semibold glass-hover"
              onClick={() => scrollToSection("contact")}
            >
              Get in Touch
            </Button>
          </div>

          {/* Social icons */}
          <div className="flex justify-center gap-4 pt-8">
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 glass-hover rounded-full group"
            >
              <Github className="h-5 w-5 group-hover:text-primary transition-smooth" />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 glass-hover rounded-full group"
            >
              <Linkedin className="h-5 w-5 group-hover:text-primary transition-smooth" />
            </a>
            <a
              href="mailto:hello@example.com"
              className="p-3 glass-hover rounded-full group"
            >
              <Mail className="h-5 w-5 group-hover:text-primary transition-smooth" />
            </a>
          </div>

          {/* Scroll indicator */}
          <div className="pt-12 animate-bounce">
            <div className="w-6 h-10 border-2 border-muted-foreground rounded-full flex items-center justify-center mx-auto">
              <div className="w-1 h-2 bg-muted-foreground rounded-full animate-pulse"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
