import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Bot, Zap, Users } from "lucide-react";
import heroImage from "@/assets/hero-webinar.jpg";

export const Hero = () => {
  return (
    <section className="min-h-screen flex items-center pt-16 gradient-dark">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight">
                AI-Powered
                <span className="gradient-primary bg-clip-text text-transparent"> Webinars</span>
                <br />
                That Convert
              </h1>
              <p className="text-xl text-muted-foreground max-w-xl">
                Create fully automated webinars with AI presenters that engage your audience 
                and convert prospects into customers - no human interaction required.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button variant="hero" size="lg" className="shadow-glow">
                Start Free Trial
              </Button>
              <Button variant="outline" size="lg">
                Watch Demo
              </Button>
            </div>
            
            <div className="flex items-center gap-8 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <Bot className="w-4 h-4 text-primary" />
                <span>AI Presenter</span>
              </div>
              <div className="flex items-center gap-2">
                <Zap className="w-4 h-4 text-primary" />
                <span>Real-time Chat</span>
              </div>
              <div className="flex items-center gap-2">
                <Users className="w-4 h-4 text-primary" />
                <span>Auto Converting</span>
              </div>
            </div>
          </div>
          
          <div className="relative">
            <Card className="gradient-card shadow-card p-8 border border-border">
              <img 
                src={heroImage} 
                alt="AI Webinar Platform Interface" 
                className="w-full rounded-lg shadow-soft"
              />
              <div className="absolute -bottom-4 -right-4 w-24 h-24 gradient-primary rounded-full flex items-center justify-center shadow-glow">
                <Bot className="w-12 h-12 text-primary-foreground" />
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};