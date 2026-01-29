import { Navigation } from "@/components/Navigation";
import { HeroSection } from "@/components/HeroSection";
import { BeersSection } from "@/components/BeersSection";
import { RestaurantsSection } from "@/components/RestaurantsSection";
import { StoresSection } from "@/components/StoresSection";
import { ProjectsSection } from "@/components/ProjectsSection";
import { PicturesSection } from "@/components/PicturesSection";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main>
        <HeroSection />
        <BeersSection />
        <RestaurantsSection />
        <StoresSection />
        <ProjectsSection />
        <PicturesSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
