import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { DataInput } from "@/components/DataInput";
import { ChatPreview } from "@/components/ChatPreview";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <Hero />
      <DataInput />
      <ChatPreview />
    </div>
  );
};

export default Index;