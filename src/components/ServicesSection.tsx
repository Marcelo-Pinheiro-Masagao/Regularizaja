import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import realEstateImage from "@/assets/real-estate-consultation.jpg";
import notaryImage from "@/assets/notary-services.jpg";
import auctionImage from "@/assets/auction-legal.jpg";

export const ServicesSection = () => {
  const services = [
    {
      title: "Regularização de Imóveis",
      description: "Análise e regularização de matrículas, regularização de 'contratos de gaveta' regularização de compromissos de compra e venda.",
      image: realEstateImage,
      alt: "Regularização de Imóveis"
    },
    {
      title: "Questões Cartoriais",
      description: "Resolução de problemas em cartórios de registro de imóveis, incluindo retificações e averbações. Registro de pessoas jurídicas e análise de notas devolutivas, suscitação de dúvidas.",
      image: notaryImage,
      alt: "Questões Cartoriais"
    },
    {
      title: "Leilões Judiciais e Extrajudiciais",
      description: "Análise prévia, acompanhamento de arrematação e resolução de vícios ocultos em imóveis leiloados judicialmente e extrajudicialmente.",
      image: auctionImage,
      alt: "Leilões Judiciais e Extrajudiciais"
    },
    {
      title: "Atos Societários",
      description: "Constituição, alteração e dissolução de empresas, com foco em holdings familiares e imobiliárias. Análise de estatutos de associações, organizações religiosas, organizações sociais, fundações para registro em cartório.",
      image: null,
      alt: "Atos Societários"
    },
    {
      title: "Consultoria Empresarial",
      description: "Assessoria jurídica completa para empresas do setor imobiliário e construtoras.",
      image: null,
      alt: "Consultoria Empresarial"
    },
    {
      title: "Due Diligence Imobiliária",
      description: "Análise completa de documentação para compra e venda de imóveis.",
      image: null,
      alt: "Due Diligence Imobiliária"
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

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="card-shadow hover:scale-[1.02] transition-elegant border-border/50">
              {service.image && (
                <div className="relative overflow-hidden rounded-t-lg">
                  <img
                    src={service.image}
                    alt={service.alt}
                    className="w-full h-48 object-cover"
                  />
                </div>
              )}
              <CardHeader>
                <CardTitle className="text-xl font-semibold text-foreground">
                  {service.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-muted-foreground leading-relaxed">
                  {service.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};