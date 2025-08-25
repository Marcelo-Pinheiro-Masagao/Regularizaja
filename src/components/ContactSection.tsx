import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { MessageCircle, Mail, MapPin, Clock } from "lucide-react";
import femaleLayerImage from "@/assets/female-lawyer-office.jpg";

export const ContactSection = () => {
  return (
    <section id="contact" className="py-20 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
            Fale Conosco
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Estamos prontos para ajudar você a resolver suas questões jurídicas e imobiliárias
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="grid gap-6">
              <Card className="border-border/50 card-shadow">
                <CardHeader>
                  <CardTitle className="flex items-center space-x-3">
                    <div className="bg-success/10 p-3 rounded-lg">
                      <MessageCircle className="h-6 w-6 text-success" />
                    </div>
                    <span className="text-foreground">WhatsApp</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">
                    Fale diretamente conosco via WhatsApp para um atendimento rápido e personalizado.
                  </p>
                  <Button variant="whatsapp" size="lg" className="w-full sm:w-auto">
                    <MessageCircle className="h-5 w-5" />
                    Chamar no WhatsApp
                  </Button>
                </CardContent>
              </Card>

              <Card className="border-border/50 card-shadow">
                <CardHeader>
                  <CardTitle className="flex items-center space-x-3">
                    <div className="bg-primary/10 p-3 rounded-lg">
                      <Mail className="h-6 w-6 text-primary" />
                    </div>
                    <span className="text-foreground">E-mail</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">
                    Entre em contato por e-mail para consultas mais detalhadas.
                  </p>
                  <a 
                    href="mailto:marcelopinheiro2016@gmail.com"
                    className="text-primary hover:underline font-medium"
                  >
                    marcelopinheiro2016@gmail.com
                  </a>
                </CardContent>
              </Card>

              <div className="grid sm:grid-cols-2 gap-6">
                <Card className="border-border/50">
                  <CardContent className="p-6">
                    <div className="flex items-center space-x-3 mb-2">
                      <MapPin className="h-5 w-5 text-accent" />
                      <span className="font-semibold text-foreground">Localização</span>
                    </div>
                    <p className="text-muted-foreground">São Paulo - SP</p>
                  </CardContent>
                </Card>

                <Card className="border-border/50">
                  <CardContent className="p-6">
                    <div className="flex items-center space-x-3 mb-2">
                      <Clock className="h-5 w-5 text-accent" />
                      <span className="font-semibold text-foreground">Horário</span>
                    </div>
                    <p className="text-muted-foreground">Seg-Sex: 9h-18h</p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="relative overflow-hidden rounded-2xl elegant-shadow">
              <img
                src={femaleLayerImage}
                alt="Advogada profissional em escritório moderno"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};