import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Shield, Award, Home, MessageCircle, Instagram } from "lucide-react";

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
            <p className="text-xl text-primary-foreground/90 leading-relaxed font-medium">
              Seu imóvel está irregular?<br />
              Primeiro precisamos descobrir exatamente por quê.
            </p>
            <p className="text-base text-primary-foreground/80 leading-relaxed max-w-3xl mx-auto">
              Problemas que posso ajudar a solucionar: imóvel sem matrícula, transcrição antiga, imóvel sem escritura, contrato de gaveta, proprietário que consta no registro já faleceu, imóvel recebido por herança, construção não averbada, divergência de área, necessidade de retificação, usucapião, adjudicação compulsória, exigência do Registro de Imóveis, problemas na cadeia dominial, necessidade de averbações, desmembramento/unificação.
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
            <Button variant="outline" size="lg" className="min-w-[200px] bg-primary-foreground/10 border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/20" asChild>
              <a href="https://www.instagram.com/adv.marcelomasagao/" target="_blank" rel="noopener noreferrer">
                <Instagram className="h-5 w-5" />
                Instagram
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
