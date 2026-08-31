import { Card, CardContent } from "@/components/ui/card";
import video1 from "@/assets/Regularização_de_imóveis_apresentação_1.mp4.asset.json";
import video2 from "@/assets/Regularização_de_imóveis_1.mp4.asset.json";
import video3 from "@/assets/Regularização_de_imóveis_registro_1.mp4.asset.json";
import video4 from "@/assets/Compromisso_de_compra_e_venda_1_1.mp4.asset.json";

const videos = [
  {
    title: "Apresentação Adv Marcelo masagão e os cuidados na compra e venda do ímóvel",
    src: video1.url,
    detailDescription: "Caminhos da regularização de imóveis",
  },
  {
    title: "Importância do reconhecimento de firma",
    src: video2.url,
    detailDescription:
      "A importância do reconhecimento de firma para justificar a data do ato, a confirmação da assinatura nos contratos e compromissos.",
    answeredQuestions: [
      "Reconhecimento de firma eletrônico pode ser utilizado nos atos ou reconhecimento de firma físico?",
    ],
  },
  {
    title: "Compromisso de compra e venda. Arrependimento?",
    src: video3.url,
    answeredQuestions: [
      "Posso registrar um compromisso de compra e venda?",
      "Quando vale a pena?",
      "Houve algum investimento?",
      "Será que haverá desistência?",
      "Posso ter um desconto no registro definitivo?",
    ],
  },
  {
    title: "Vedendor desaparece ou recusa-se a passar escritura",
    src: video4.url,
    detailDescription:
      "Documentos particulares que podem ser registrados sem escritura!",
    answeredQuestions: [
      "Quando o vendedor desaparece?",
      "Quando o vendedor recusa-se a passar a escritura definitiva?",
      "Adjudicação Compulsória?",
    ],
  },
];

export const VideosSection = () => {
  return (
    <section id="videos" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
            Vídeos
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Assista aos vídeos explicativos sobre regularização de imóveis e documentos
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {videos.map((video) => (
            <Card key={video.title} className="card-shadow border-border/50 overflow-hidden">
              <CardContent className="p-4 space-y-3">
                <video
                  src={video.src}
                  controls
                  preload="metadata"
                  className="w-full rounded-lg bg-muted"
                />
                <h3 className="text-lg font-semibold text-foreground">{video.title}</h3>

                {(video.detailDescription || video.answeredQuestions?.length) && (
                  <div className="space-y-3">
                    {video.detailDescription && (
                      <p className="text-sm text-muted-foreground">
                        {video.detailDescription}
                      </p>
                    )}
                    {video.answeredQuestions?.length && (
                      <div>
                        <h4 className="text-sm font-semibold text-foreground mb-1">
                          Perguntas respondidas
                        </h4>
                        <ul className="list-disc list-inside text-sm text-muted-foreground space-y-1">
                          {video.answeredQuestions.map((question) => (
                            <li key={question}>{question}</li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>
                )}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
