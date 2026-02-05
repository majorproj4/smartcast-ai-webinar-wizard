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
    <section id="contact" className="py-24 bg-background relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-primary/5 rounded-full blur-3xl opacity-40"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-accent/5 rounded-full blur-3xl opacity-40"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Section header */}
          <div className="mb-16 text-center space-y-4">
            <div className="inline-block">
              <span className="text-primary font-semibold text-sm tracking-widest uppercase">Get In Touch</span>
              <div className="h-1 w-12 bg-primary mt-2 rounded-full mx-auto"></div>
            </div>
            <h2 className="text-4xl sm:text-5xl font-bold leading-tight">
              Let's work <span className="text-gradient">together</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Whether you're looking for a developer to build your next project, or just want to connect, I'd love to hear from you.
            </p>
          </div>

          {/* Contact grid */}
          <div className="grid lg:grid-cols-2 gap-8 mb-16">
            {/* Contact form */}
            <div className="glass rounded-2xl p-8 border">
              <h3 className="text-2xl font-bold mb-6">Send a message</h3>
              {submitted ? (
                <div className="h-64 flex items-center justify-center text-center">
                  <div>
                    <div className="text-4xl mb-4">✓</div>
                    <p className="text-lg font-semibold mb-2">Thanks for reaching out!</p>
                    <p className="text-muted-foreground">I'll get back to you as soon as possible.</p>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label className="block text-sm font-semibold mb-2">Email</label>
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                      className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 focus:border-primary outline-none transition-colors text-foreground placeholder-muted-foreground"
                      placeholder="your@email.com"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold mb-2">Message</label>
                    <textarea
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      required
                      rows={5}
                      className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 focus:border-primary outline-none transition-colors text-foreground placeholder-muted-foreground resize-none"
                      placeholder="Tell me about your project..."
                    ></textarea>
                  </div>
                  <Button type="submit" size="lg" className="w-full rounded-lg font-semibold">
                    Send Message
                  </Button>
                </form>
              )}
            </div>

            {/* Contact methods */}
            <div className="space-y-6">
              {/* Direct email */}
              <div className="glass rounded-2xl p-8 border group hover:shadow-elevated transition-smooth">
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-lg bg-primary/10">
                    <Mail className="h-6 w-6 text-primary" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-bold text-lg mb-1">Email</h3>
                    <a href="mailto:hello@example.com" className="text-primary hover:underline">
                      hello@example.com
                    </a>
                    <p className="text-muted-foreground text-sm mt-2">Typically respond within 24 hours</p>
                  </div>
                </div>
              </div>

              {/* Social links */}
              <div className="glass rounded-2xl p-8 border">
                <h3 className="font-bold text-lg mb-6">Connect elsewhere</h3>
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
                      className="p-4 rounded-lg border border-white/10 hover:border-primary/50 hover:bg-primary/5 transition-smooth text-center group"
                    >
                      <social.icon className="h-5 w-5 mx-auto mb-2 group-hover:text-primary transition-colors" />
                      <p className="text-xs font-semibold">{social.label}</p>
                    </a>
                  ))}
                </div>
              </div>

              {/* Availability */}
              <div className="glass rounded-2xl p-8 border border-accent/30 bg-accent/5">
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-2 h-2 rounded-full bg-accent animate-pulse"></div>
                  <p className="font-semibold">Available for opportunities</p>
                </div>
                <p className="text-muted-foreground text-sm">
                  I'm open to freelance projects, full-time roles, and collaborations on innovative ideas.
                </p>
              </div>
            </div>
          </div>

          {/* Footer CTA */}
          <div className="text-center">
            <p className="text-muted-foreground mb-6">Prefer to schedule a call?</p>
            <Button size="lg" className="rounded-full px-8 font-semibold">
              Book a 15-min call
              <ExternalLink className="ml-2 h-4 w-4" />
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
