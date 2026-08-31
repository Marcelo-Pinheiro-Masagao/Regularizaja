import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Building,
  Scale,
  Gavel,
  Briefcase,
  Building2,
  Search,
  Users,
  Home,
  FileSignature,
  Monitor,
  UsersRound,
  ShieldCheck,
  type LucideIcon
} from "lucide-react";

interface Service {
  title: string;
  description: string;
  icon: LucideIcon;
}

export const ServicesSection = () => {
  const services: Service[] = [
    {
      title: "Regularização de Imóveis",
      description: "Análise e regularização de matrículas, regularização de 'contratos de gaveta' regularização de compromissos de compra e venda.",
      icon: Building
    },
    {
      title: "Questões Cartoriais",
      description: "Resolução de problemas em cartórios de registro de imóveis, incluindo retificações e averbações. Registro de pessoas jurídicas e análise de notas devolutivas, suscitação de dúvidas e pedidos de providencias.",
      icon: Scale
    },
    {
      title: "Leilões Judiciais e Extrajudiciais",
      description: "Análise prévia, acompanhamento de arrematação e resolução de vícios ocultos em imóveis leiloados judicialmente e extrajudicialmente.",
      icon: Gavel
    },
    {
      title: "Atos Societários",
      description: "Constituição, alteração e dissolução de empresas, com foco em holdings familiares e imobiliárias. Análise de estatutos de associações, organizações religiosas, organizações sociais, fundações para registro em cartório.",
      icon: Briefcase
    },
    {
      title: "Consultoria Empresarial",
      description: "Assessoria jurídica completa para empresas do setor imobiliário e construtoras.",
      icon: Building2
    },
    {
      title: "Due Diligence Imobiliária",
      description: "Análise completa de documentação para compra e venda de imóveis.",
      icon: Search
    },
    {
      title: "Inventário e Adjudicação",
      description: "Inventário extrajudicial e judicial, adjudicação extrajudicial e judicial para regularização de patrimônio.",
      icon: Users
    },
    {
      title: "Usucapião",
      description: "Usucapião extrajudicial e judicial para regularização de propriedade por posse prolongada.",
      icon: Home
    },
    {
      title: "Regularização de Mandatos",
      description: "Regularização de mandato de diretoria vencido e ou irregular em associações e organizações.",
      icon: FileSignature
    },
    {
      title: "Documentos Eletrônicos",
      description: "Análise e regularização de documentos eletrônicos para adequação às normas vigentes.",
      icon: Monitor
    },
    {
      title: "Assessoria em Assembleias",
      description: "Assessoria e consultoria para assembleias de associações e organizações, garantindo conformidade legal.",
      icon: UsersRound
    },
    {
      title: "Certidões INSS",
      description: "Assessoria em obtenção de certidões de débitos e de obras do INSS para regularização previdenciária.",
      icon: ShieldCheck
    }
  ];

  return (
    <section id="services" className="py-20 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
            Nossos Serviços Especializados
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Oferecemos soluções completas e personalizadas para todas as suas necessidades jurídicas e imobiliárias
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <Card
                key={index}
                className="card-shadow hover:-translate-y-1 transition-elegant border-border/50 bg-card p-6"
              >
                <div className="flex flex-col h-full">
                  <div className="mb-5">
                    <div className="w-14 h-14 rounded-full bg-primary flex items-center justify-center">
                      <Icon className="h-7 w-7 text-accent" strokeWidth={1.5} />
                    </div>
                  </div>
                  <CardHeader className="p-0 mb-3">
                    <CardTitle className="text-lg font-semibold text-foreground leading-snug">
                      {service.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="p-0 flex-grow">
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {service.description}
                    </p>
                  </CardContent>
                </div>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};
