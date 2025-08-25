import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Shield, Award, Home, MessageCircle } from "lucide-react";
import heroImage from "@/assets/hero-consultation-cropped.jpg";

export const HeroSection = () => {
  return (
    <section id="home" className="hero-gradient text-primary-foreground py-20 lg:py-28">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
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

            <div className="flex flex-wrap gap-4">
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
                especialistas em imóveis e em contratos de sociedade e estatuto de Organizações
              </Badge>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button variant="accent" size="lg" className="min-w-[200px]">
                <MessageCircle className="h-5 w-5" />
                Fale Conosco
              </Button>
              <Button variant="outline" size="lg" className="min-w-[200px] bg-primary-foreground/10 border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/20">
                Conheça Nossos Serviços
              </Button>
            </div>
          </div>

          <div className="relative">
            <div className="relative overflow-hidden rounded-2xl elegant-shadow">
              <img
                src={heroImage}
                alt="Profissionais analisando documentação irregular de propriedade"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};