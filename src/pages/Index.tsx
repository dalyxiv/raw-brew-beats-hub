import AnnouncementBar from "@/components/AnnouncementBar";
import HeroSection from "@/components/HeroSection";
import RamadanSpecials from "@/components/RamadanSpecials";
import MenuSection from "@/components/MenuSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <AnnouncementBar />
      <HeroSection />
      <RamadanSpecials />
      <MenuSection />
      <Footer />
    </div>
  );
};

export default Index;
