import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Shield, Award, Home, MessageCircle, Instagram, Scale, Clock, Briefcase } from "lucide-react";

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
            <p className="text-2xl lg:text-3xl text-primary-foreground/90 leading-relaxed font-semibold">
              Seu imóvel está irregular?<br />
              Primeiro precisamos descobrir exatamente por quê.
            </p>
            <p className="text-lg lg:text-xl text-primary-foreground/80 leading-relaxed max-w-3xl mx-auto">
              Problemas que posso ajudar a solucionar: imóvel sem matrícula, transcrição antiga, imóvel sem escritura, contrato de gaveta, proprietário que consta no registro já faleceu, imóvel recebido por herança, construção não averbada, divergência de área, necessidade de retificação, usucapião, adjudicação compulsória, exigência do Registro de Imóveis, problemas na cadeia dominial, necessidade de averbações, desmembramento/unificação, assessoria em doação, reserva de usufruto, testamento e locação.
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
            <Button variant="outline" size="lg" className="min-w-[260px] h-auto py-3 bg-primary-foreground/10 border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/20 whitespace-normal text-center leading-tight" asChild>
              <a href="https://www.instagram.com/adv.marcelomasagao/">
                <Instagram className="h-5 w-5 shrink-0" />
                Veja mais vídeos sobre cartórios, imóveis e inventários
              </a>
            </Button>
          </div>

          <div className="pt-8 border-t border-primary-foreground/20">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-3xl mx-auto">
              <div className="flex flex-col items-center text-center space-y-2">
                <div className="bg-primary-foreground/10 p-3 rounded-full">
                  <Clock className="h-6 w-6 text-accent" />
                </div>
                <div>
                  <p className="text-3xl font-bold text-accent">28+</p>
                  <p className="text-sm text-primary-foreground/80">anos de experiência</p>
                </div>
              </div>
              <div className="flex flex-col items-center text-center space-y-2">
                <div className="bg-primary-foreground/10 p-3 rounded-full">
                  <Scale className="h-6 w-6 text-accent" />
                </div>
                <div>
                  <p className="text-3xl font-bold text-accent">Advogado</p>
                  <p className="text-sm text-primary-foreground/80">atuante na área registral</p>
                </div>
              </div>
              <div className="flex flex-col items-center text-center space-y-2">
                <div className="bg-primary-foreground/10 p-3 rounded-full">
                  <Briefcase className="h-6 w-6 text-accent" />
                </div>
                <div>
                  <p className="text-3xl font-bold text-accent">Ex-cartorário</p>
                  <p className="text-sm text-primary-foreground/80">conhecimento prático</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
