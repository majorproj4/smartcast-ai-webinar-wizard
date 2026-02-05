import { useState } from "react";
import { Header } from "@/components/Header";
import { PortfolioHero } from "@/components/portfolio/PortfolioHero";
import { PortfolioAbout } from "@/components/portfolio/PortfolioAbout";
import { PortfolioProjects } from "@/components/portfolio/PortfolioProjects";
import { PortfolioExperience } from "@/components/portfolio/PortfolioExperience";
import { PortfolioSkills } from "@/components/portfolio/PortfolioSkills";
import { PortfolioTechStack } from "@/components/portfolio/PortfolioTechStack";
import { PortfolioBuilding } from "@/components/portfolio/PortfolioBuilding";
import { PortfolioContact } from "@/components/portfolio/PortfolioContact";

const Portfolio = () => {
  const [activeSection, setActiveSection] = useState("about");

  return (
    <div className="min-h-screen bg-background text-foreground overflow-hidden">
      <Header />
      <PortfolioHero activeSection={activeSection} setActiveSection={setActiveSection} />
      <PortfolioAbout />
      <PortfolioProjects />
      <PortfolioExperience />
      <PortfolioSkills />
      <PortfolioTechStack />
      <PortfolioBuilding />
      <PortfolioContact />
    </div>
  );
};

export default Portfolio;
