import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Shield, Award, Home, MessageCircle } from "lucide-react";

export const HeroSection = () => {
  return (
    <section id="home" className="hero-gradient text-primary-foreground py-20 lg:py-28">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <div className="space-y-6">
            <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight">
              Soluções jurídicas e imobiliárias com{" "}
              <span className="text-accent">segurança</span> e{" "}
              <span className="text-accent">eficiência</span>
            </h1>
            <p className="text-xl text-primary-foreground/90 leading-relaxed">
              <strong>Equipe especializada</strong> em regularização de imóveis, resolução 
              de problemas de matrícula, leilões judiciais, atos societários, e assessoria 
              completa para seus projetos imobiliários e empresariais.
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-4">
            <Badge variant="secondary" className="bg-primary-foreground/20 text-primary-foreground border-primary-foreground/30 px-4 py-2">
              <Shield className="h-4 w-4 mr-2" />
              Segurança Jurídica
            </Badge>
            <Badge variant="secondary" className="bg-primary-foreground/20 text-primary-foreground border-primary-foreground/30 px-4 py-2">
              <Award className="h-4 w-4 mr-2" />
              Experiência Comprovada
            </Badge>
            <Badge variant="secondary" className="bg-primary-foreground/20 text-primary-foreground border-primary-foreground/30 px-4 py-2">
              <Home className="h-4 w-4 mr-2" />
              Especialistas em imóveis e em contratos de sociedade e estatuto de organizações
            </Badge>
          </div>

          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button variant="accent" size="lg" className="min-w-[200px]" asChild>
              <a href="#contact">
                <MessageCircle className="h-5 w-5" />
                Fale Conosco
              </a>
            </Button>
            <Button variant="outline" size="lg" className="min-w-[200px] bg-primary-foreground/10 border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/20" asChild>
              <a href="#services">
                Conheça Nossos Serviços
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
