import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Upload, FileText, Globe, Zap } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

export const DataInput = () => {
  const [activeTab, setActiveTab] = useState<"upload" | "text" | "url">("upload");
  const [textInput, setTextInput] = useState("");
  const [urlInput, setUrlInput] = useState("");
  const { toast } = useToast();
  
  const handleSubmit = () => {
    toast({
      title: "Data Processing Started",
      description: "Your AI webinar is being generated from the provided content.",
    });
  };

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Train Your AI Presenter
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Provide your content through any of these three methods. Our AI will analyze 
            and create a compelling webinar presentation.
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <Card className="gradient-card shadow-card border border-border">
            <div className="p-8">
              {/* Tab Navigation */}
              <div className="flex justify-center mb-8">
                <div className="flex bg-muted rounded-lg p-1">
                  <button
                    onClick={() => setActiveTab("upload")}
                    className={`flex items-center gap-2 px-6 py-3 rounded-md transition-smooth ${
                      activeTab === "upload" 
                        ? "bg-primary text-primary-foreground shadow-glow" 
                        : "text-muted-foreground hover:text-foreground"
                    }`}
                  >
                    <Upload className="w-4 h-4" />
                    Upload File
                  </button>
                  <button
                    onClick={() => setActiveTab("text")}
                    className={`flex items-center gap-2 px-6 py-3 rounded-md transition-smooth ${
                      activeTab === "text" 
                        ? "bg-primary text-primary-foreground shadow-glow" 
                        : "text-muted-foreground hover:text-foreground"
                    }`}
                  >
                    <FileText className="w-4 h-4" />
                    Enter Text
                  </button>
                  <button
                    onClick={() => setActiveTab("url")}
                    className={`flex items-center gap-2 px-6 py-3 rounded-md transition-smooth ${
                      activeTab === "url" 
                        ? "bg-primary text-primary-foreground shadow-glow" 
                        : "text-muted-foreground hover:text-foreground"
                    }`}
                  >
                    <Globe className="w-4 h-4" />
                    Website URL
                  </button>
                </div>
              </div>
              
              {/* Tab Content */}
              <div className="space-y-6">
                {activeTab === "upload" && (
                  <div className="text-center p-12 border-2 border-dashed border-border rounded-lg hover:border-primary transition-smooth">
                    <Upload className="w-16 h-16 text-muted-foreground mx-auto mb-4" />
                    <h3 className="text-lg font-semibold mb-2">Upload Your Content</h3>
                    <p className="text-muted-foreground mb-4">
                      Drop your PDF, Word document, or text file here
                    </p>
                    <Button variant="outline" className="mx-auto">
                      Choose File
                    </Button>
                  </div>
                )}
                
                {activeTab === "text" && (
                  <div className="space-y-4">
                    <label className="text-sm font-medium text-foreground">
                      Paste Your Content
                    </label>
                    <Textarea
                      value={textInput}
                      onChange={(e) => setTextInput(e.target.value)}
                      placeholder="Enter your webinar content, product information, or any text you want the AI to learn from..."
                      className="min-h-[200px] resize-none bg-input border-border"
                    />
                  </div>
                )}
                
                {activeTab === "url" && (
                  <div className="space-y-4">
                    <label className="text-sm font-medium text-foreground">
                      Website URL
                    </label>
                    <Input
                      value={urlInput}
                      onChange={(e) => setUrlInput(e.target.value)}
                      placeholder="https://your-website.com"
                      className="bg-input border-border"
                    />
                    <p className="text-sm text-muted-foreground">
                      We'll analyze your website content to create the webinar
                    </p>
                  </div>
                )}
                
                <div className="flex justify-center pt-6">
                  <Button 
                    variant="hero" 
                    size="lg" 
                    onClick={handleSubmit}
                    className="shadow-glow"
                  >
                    <Zap className="w-4 h-4 mr-2" />
                    Generate AI Webinar
                  </Button>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};