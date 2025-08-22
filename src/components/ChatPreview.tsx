import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Bot, User, Send } from "lucide-react";

export const ChatPreview = () => {
  const [message, setMessage] = useState("");
  const [messages] = useState([
    {
      id: 1,
      type: "bot" as const,
      content: "Hello! I'm your AI webinar assistant. I can answer any questions about our product in real-time during the presentation.",
      timestamp: "2:34 PM"
    },
    {
      id: 2,
      type: "user" as const,
      content: "What's the pricing for the premium plan?",
      timestamp: "2:35 PM"
    },
    {
      id: 3,
      type: "bot" as const,
      content: "Great question! Our premium plan starts at $99/month and includes unlimited webinars, advanced analytics, and priority support. Would you like to see a detailed comparison?",
      timestamp: "2:35 PM"
    }
  ]);

  return (
    <section className="py-20 gradient-dark">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h2 className="text-3xl sm:text-4xl font-bold">
              Real-Time AI Chat
              <span className="gradient-primary bg-clip-text text-transparent"> Support</span>
            </h2>
            <p className="text-xl text-muted-foreground">
              Your AI assistant answers audience questions instantly during the webinar, 
              providing personalized responses based on your content and converting 
              engagement into sales.
            </p>
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-accent rounded-full"></div>
                <span className="text-foreground">Instant responses to any question</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-accent rounded-full"></div>
                <span className="text-foreground">Context-aware answers from your data</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-accent rounded-full"></div>
                <span className="text-foreground">24/7 automated customer engagement</span>
              </div>
            </div>
          </div>
          
          <div className="relative">
            <Card className="gradient-card shadow-card border border-border">
              <div className="p-6">
                <div className="flex items-center gap-3 mb-6 pb-4 border-b border-border">
                  <div className="w-3 h-3 bg-accent rounded-full animate-pulse"></div>
                  <span className="text-sm font-medium">Live Chat - 127 viewers</span>
                </div>
                
                <div className="space-y-4 mb-6 max-h-80 overflow-y-auto">
                  {messages.map((msg) => (
                    <div key={msg.id} className={`flex gap-3 ${msg.type === 'user' ? 'justify-end' : ''}`}>
                      {msg.type === 'bot' && (
                        <div className="w-8 h-8 gradient-primary rounded-full flex items-center justify-center">
                          <Bot className="w-4 h-4 text-primary-foreground" />
                        </div>
                      )}
                      <div className={`max-w-xs ${msg.type === 'user' ? 'order-1' : ''}`}>
                        <div className={`rounded-lg p-3 ${
                          msg.type === 'bot' 
                            ? 'bg-muted text-foreground' 
                            : 'gradient-primary text-primary-foreground'
                        }`}>
                          {msg.content}
                        </div>
                        <span className="text-xs text-muted-foreground mt-1 block">
                          {msg.timestamp}
                        </span>
                      </div>
                      {msg.type === 'user' && (
                        <div className="w-8 h-8 bg-secondary rounded-full flex items-center justify-center">
                          <User className="w-4 h-4 text-secondary-foreground" />
                        </div>
                      )}
                    </div>
                  ))}
                </div>
                
                <div className="flex gap-2">
                  <Input
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Ask anything about the product..."
                    className="bg-input border-border"
                  />
                  <Button variant="hero" size="icon">
                    <Send className="w-4 h-4" />
                  </Button>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};