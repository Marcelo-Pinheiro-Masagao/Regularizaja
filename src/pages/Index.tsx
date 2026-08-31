import { SidebarProvider } from "@/components/ui/sidebar";
import { Header } from "@/components/Header";
import { HeroSection } from "@/components/HeroSection";
import { ServicesSection } from "@/components/ServicesSection";
import { AboutSection } from "@/components/AboutSection";
import { BenefitsSection } from "@/components/BenefitsSection";
import { VideosSection } from "@/components/VideosSection";
import { ContactSection } from "@/components/ContactSection";
import { VideoSidebar } from "@/components/VideoSidebar";

const Index = () => {
  return (
    <SidebarProvider defaultOpen={false}>
      <div className="min-h-screen flex w-full">
        <div className="flex-1">
          <Header />
          <main>
            <HeroSection />
            <ServicesSection />
            <AboutSection />
            <BenefitsSection />
            <VideosSection />
            <ContactSection />
          </main>
        </div>
        <VideoSidebar />
      </div>
    </SidebarProvider>
  );
};

export default Index;
