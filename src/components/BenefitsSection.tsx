import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Building2, TrendingUp, Shield, FileCheck } from "lucide-react";

export const BenefitsSection = () => {
  return (
    <section className="py-20 bg-muted/50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
            Benefícios da Regularização
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Entenda os principais benefícios de manter a documentação regularizada
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Benefícios para Organizações */}
          <Card className="card-shadow border-border/50">
            <CardContent className="p-8">
              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="bg-primary/10 p-3 rounded-lg">
                    <Building2 className="h-8 w-8 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-foreground">
                      Regularização de Organizações
                    </h3>
                    <Badge variant="secondary" className="mt-2">
                      <Shield className="h-4 w-4 mr-2" />
                      Segurança Jurídica
                    </Badge>
                  </div>
                </div>

                <div className="space-y-4">
                  <h4 className="text-lg font-semibold text-foreground">
                    Benefícios de manter regularizações:
                  </h4>
                  <ul className="space-y-3 text-muted-foreground">
                    <li className="flex items-start">
                      <FileCheck className="h-5 w-5 text-success mr-3 mt-0.5 flex-shrink-0" />
                      <span><strong>Mandato regularizado:</strong> Garante que os dirigentes tenham poderes legais para representar a organização</span>
                    </li>
                    <li className="flex items-start">
                      <FileCheck className="h-5 w-5 text-success mr-3 mt-0.5 flex-shrink-0" />
                      <span><strong>Prestação de contas atualizada:</strong> Assegura transparência e compliance fiscal</span>
                    </li>
                    <li className="flex items-start">
                      <FileCheck className="h-5 w-5 text-success mr-3 mt-0.5 flex-shrink-0" />
                      <span><strong>Estatuto regularizado:</strong> Permite funcionamento legal e acesso a benefícios</span>
                    </li>
                    <li className="flex items-start">
                      <FileCheck className="h-5 w-5 text-success mr-3 mt-0.5 flex-shrink-0" />
                      <span><strong>Manutenção de convênios:</strong> Preserva parcerias com Prefeitura, Estado e União</span>
                    </li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Benefícios para Imóveis */}
          <Card className="card-shadow border-border/50">
            <CardContent className="p-8">
              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="bg-success/10 p-3 rounded-lg">
                    <TrendingUp className="h-8 w-8 text-success" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-foreground">
                      Regularização de Imóveis
                    </h3>
                    <Badge variant="secondary" className="mt-2">
                      <TrendingUp className="h-4 w-4 mr-2" />
                      Valorização
                    </Badge>
                  </div>
                </div>

                <div className="space-y-4">
                  <h4 className="text-lg font-semibold text-foreground">
                    Benefícios para venda:
                  </h4>
                  <ul className="space-y-3 text-muted-foreground">
                    <li className="flex items-start">
                      <FileCheck className="h-5 w-5 text-success mr-3 mt-0.5 flex-shrink-0" />
                      <span><strong>Aumento do valor de mercado:</strong> Imóveis regularizados podem valer até 40% mais</span>
                    </li>
                    <li className="flex items-start">
                      <FileCheck className="h-5 w-5 text-success mr-3 mt-0.5 flex-shrink-0" />
                      <span><strong>Facilita financiamento:</strong> Bancos só financiam imóveis com documentação regular</span>
                    </li>
                    <li className="flex items-start">
                      <FileCheck className="h-5 w-5 text-success mr-3 mt-0.5 flex-shrink-0" />
                      <span><strong>Venda mais rápida:</strong> Eliminação de burocracias que atrasam negociações</span>
                    </li>
                    <li className="flex items-start">
                      <FileCheck className="h-5 w-5 text-success mr-3 mt-0.5 flex-shrink-0" />
                      <span><strong>Segurança jurídica:</strong> Protege compradores e vendedores de problemas futuros</span>
                    </li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};