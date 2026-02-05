import { Button } from "@/components/ui/button";
import { Mail, Linkedin, Github, Twitter, ExternalLink } from "lucide-react";
import { useState } from "react";

export const PortfolioContact = () => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setEmail("");
      setMessage("");
      setSubmitted(false);
    }, 3000);
  };

  return (
    <section id="contact" className="py-32 bg-gradient-dark relative overflow-hidden">
      {/* Premium background effects */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-primary/12 rounded-full blur-3xl opacity-50"></div>
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-accent/10 rounded-full blur-3xl opacity-40"></div>
        <div className="absolute top-1/2 right-1/3 w-80 h-80 bg-primary/8 rounded-full blur-3xl opacity-30"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Premium section header */}
          <div className="mb-20 text-center space-y-6 animate-fade-in-up">
            <div className="inline-flex items-center gap-3">
              <div className="h-1 w-8 bg-primary rounded-full"></div>
              <span className="text-primary font-bold text-xs tracking-widest uppercase">Get In Touch</span>
              <div className="h-1 w-8 bg-primary rounded-full"></div>
            </div>
            <h2 className="text-5xl sm:text-6xl font-bold leading-tight">
              Let's work <span className="text-gradient">together</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              I'm always interested in new projects and collaborations. Whether you're looking for a developer, have questions, or just want to say hello, feel free to reach out.
            </p>
          </div>

          {/* Contact grid */}
          <div className="grid lg:grid-cols-2 gap-8 mb-16 animate-fade-in-up">
            {/* Premium contact form */}
            <div className="glass-premium-hover rounded-2xl p-10 border">
              <div className="flex items-center gap-3 mb-8">
                <div className="w-3 h-3 rounded-full bg-primary"></div>
                <h3 className="text-2xl font-bold">Send a message</h3>
              </div>

              {submitted ? (
                <div className="h-64 flex items-center justify-center text-center">
                  <div className="space-y-4">
                    <div className="text-6xl font-bold text-primary">✓</div>
                    <div>
                      <p className="text-xl font-bold mb-2">Thanks for reaching out!</p>
                      <p className="text-muted-foreground">I'll get back to you as soon as possible.</p>
                    </div>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label className="block text-sm font-semibold mb-3">Email Address</label>
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                      className="w-full px-4 py-3 rounded-lg bg-white/6 border border-white/15 focus:border-primary focus:bg-white/10 outline-none transition-all text-foreground placeholder-muted-foreground/60 shadow-inner"
                      placeholder="your@email.com"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold mb-3">Message</label>
                    <textarea
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      required
                      rows={5}
                      className="w-full px-4 py-3 rounded-lg bg-white/6 border border-white/15 focus:border-primary focus:bg-white/10 outline-none transition-all text-foreground placeholder-muted-foreground/60 resize-none shadow-inner"
                      placeholder="Tell me about your project..."
                    ></textarea>
                  </div>
                  <Button type="submit" size="lg" className="w-full rounded-lg font-semibold bg-primary hover:bg-primary/90 transition-colors">
                    Send Message
                    <Mail className="ml-2 h-4 w-4" />
                  </Button>
                </form>
              )}
            </div>

            {/* Contact methods */}
            <div className="space-y-6">
              {/* Direct email - Premium card */}
              <div className="glass-premium-hover group rounded-2xl p-8 border transition-all duration-300 hover:border-primary/50">
                <div className="flex items-start gap-4">
                  <div className="p-4 rounded-xl bg-gradient-to-br from-primary/25 to-primary/10 border border-primary/30 group-hover:from-primary/35 group-hover:to-primary/15 transition-all">
                    <Mail className="h-6 w-6 text-primary" />
                  </div>
                  <div className="flex-1">
                    <h4 className="font-bold text-lg mb-2">Email Me</h4>
                    <a href="mailto:hello@example.com" className="text-primary hover:text-primary/80 transition-colors font-semibold">
                      hello@example.com
                    </a>
                    <p className="text-muted-foreground text-sm mt-3">Typically respond within 24 hours</p>
                  </div>
                </div>
              </div>

              {/* Social links */}
              <div className="glass-premium-hover rounded-2xl p-8 border">
                <h4 className="font-bold text-lg mb-6">Connect Elsewhere</h4>
                <div className="grid grid-cols-2 gap-4">
                  {[
                    { icon: Github, label: "GitHub", url: "https://github.com" },
                    { icon: Linkedin, label: "LinkedIn", url: "https://linkedin.com" },
                    { icon: Twitter, label: "Twitter", url: "https://twitter.com" },
                    { icon: ExternalLink, label: "Blog", url: "https://example.com/blog" }
                  ].map((social, i) => (
                    <a
                      key={i}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-4 rounded-lg border border-white/15 hover:border-primary/50 bg-white/4 hover:bg-primary/10 transition-all group text-center hover:shadow-glow"
                    >
                      <social.icon className="h-5 w-5 mx-auto mb-2 group-hover:text-primary transition-colors" />
                      <p className="text-xs font-bold group-hover:text-primary transition-colors">{social.label}</p>
                    </a>
                  ))}
                </div>
              </div>

              {/* Availability - Premium badge */}
              <div className="glass-premium-hover rounded-2xl p-8 border border-primary/30 bg-gradient-to-r from-primary/12 to-accent/8">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-3 h-3 rounded-full bg-accent animate-pulse"></div>
                  <p className="font-bold text-lg">Open to Opportunities</p>
                </div>
                <p className="text-muted-foreground">
                  Interested in freelance work, full-time roles, or collaboration on innovative projects.
                </p>
              </div>
            </div>
          </div>

          {/* Premium Footer CTA */}
          <div className="text-center pt-8 animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
            <p className="text-muted-foreground mb-8 text-lg">Prefer a quick conversation?</p>
            <Button size="lg" className="rounded-full px-10 py-6 font-bold bg-primary hover:bg-primary/90 shadow-elevated hover:shadow-glow transition-all">
              Schedule a 15-min call
              <ExternalLink className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>

      {/* Bottom divider */}
      <div className="mt-24 border-t border-white/10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 text-center">
          <p className="text-muted-foreground">
            © 2024 Rahul Kumar. Built with Next.js, Tailwind CSS, and a lot of ☕
          </p>
        </div>
      </div>
    </section>
  );
};
