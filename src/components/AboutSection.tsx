import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Users, CheckCircle, Clock } from "lucide-react";
import teamImage from "@/assets/legal-team-meeting.jpg";

export const AboutSection = () => {
  return (
    <section id="about" className="py-20">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <div className="relative overflow-hidden rounded-2xl card-shadow">
              <img
                src={teamImage}
                alt="Equipe jurídica especializada em reunião"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          <div className="space-y-8">
            <div className="space-y-6">
              <h2 className="text-3xl lg:text-4xl font-bold text-foreground">
                Sobre Nossa Equipe
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Com <strong>mais de 28 anos de experiência em cartório</strong>, nossa equipe se especializou na solução 
                dos casos complexos do mercado imobiliário e mercado societário e associativo brasileiro. Combinamos expertise
                jurídica com conhecimento prático do mercado para oferecer soluções eficazes e seguras.
              </p>
            </div>

            <div className="grid gap-6">
              <Card className="border-border/50">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="bg-primary/10 p-3 rounded-lg">
                      <Users className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-foreground mb-2">
                        Equipe Multidisciplinar
                      </h3>
                      <p className="text-muted-foreground">
                        Advogados e especialistas em cartórios trabalhando em conjunto
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-border/50">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="bg-success/10 p-3 rounded-lg">
                      <CheckCircle className="h-6 w-6 text-success" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-foreground mb-2">
                        Soluções Comprovadas
                      </h3>
                      <p className="text-muted-foreground">
                        Casos resolvidos em regularização de imóveis e regularização de estatutos de Organizações, Associações e contratos de sociedades ltda e sociedade simples
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-border/50">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="bg-accent/10 p-3 rounded-lg">
                      <Clock className="h-6 w-6 text-accent" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-foreground mb-2">
                        Agilidade nos Processos
                      </h3>
                      <p className="text-muted-foreground">
                        Metodologia própria que reduz o tempo de regularização em até <strong>30%</strong>
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};