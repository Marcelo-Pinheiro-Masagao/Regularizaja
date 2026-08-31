import { Button } from "@/components/ui/button";
import { SidebarTrigger } from "@/components/ui/sidebar";

export const Header = () => {
  return (
    <header className="bg-background border-b border-border sticky top-0 z-50 backdrop-blur-sm">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <h1 className="text-xl font-bold text-primary">
              Equipe Especializada - Regularização de imóveis e Regularização de Estatutos de Associações, Organizações Sociais e Religiosas e contratos de Sociedade Ltda e Simples
            </h1>
          </div>
          <nav className="hidden md:flex items-center space-x-8">
            <SidebarTrigger className="text-foreground hover:text-primary hover:bg-transparent" />
            <a href="#home" className="text-foreground hover:text-primary transition-smooth">
              Início
            </a>
            <a href="#about" className="text-foreground hover:text-primary transition-smooth">
              Sobre Nós
            </a>
            <a href="#services" className="text-foreground hover:text-primary transition-smooth">
              Serviços
            </a>
            <a href="#videos" className="text-foreground hover:text-primary transition-smooth">
              Vídeos
            </a>
            <a href="#contact" className="text-foreground hover:text-primary transition-smooth">
              Contato
            </a>
            <Button asChild variant="default" size="sm">
              <a href="#contact">Fale Conosco</a>
            </Button>
          </nav>
        </div>
      </div>
    </header>
  );
};