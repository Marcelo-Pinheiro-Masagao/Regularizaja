import { useRef } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Play } from "lucide-react";
import video1 from "@/assets/Regularização_de_imóveis_apresentação_1.mp4.asset.json";
import video2 from "@/assets/Regularização_de_imóveis_1.mp4.asset.json";
import video3 from "@/assets/Regularização_de_imóveis_registro_1.mp4.asset.json";
import video4 from "@/assets/Compromisso_de_compra_e_venda_1_1.mp4.asset.json";

const TIMESTAMP_SECONDS = 3 * 60 + 14; // 3:14

const videos = [
  { title: "Apresentação", src: video1.url },
  {
    title: "Regularização de Imóveis",
    src: video2.url,
    detailTitle: "Importância do reconhecimento de firma",
    detailDescription:
      "A importância do reconhecimento de firma para justificar a data do ato, a confirmação da assinatura nos contratos e compromissos.",
    answeredQuestions: [
      "Reconhecimento de firma eletrônico pode ser utilizado nos atos ou reconhecimento de firma físico?",
    ],
    timestamp: TIMESTAMP_SECONDS,
    timestampLabel: "3:14",
  },
  { title: "Registro de Imóveis", src: video3.url },
  { title: "Compromisso de Compra e Venda", src: video4.url },
];

export const VideosSection = () => {
  const videoRefs = useRef<Record<string, HTMLVideoElement | null>>({});

  const handleJumpTo = (title: string, seconds: number) => {
    const video = videoRefs.current[title];
    if (video) {
      video.currentTime = seconds;
      video.play();
    }
  };

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
                  ref={(el) => (videoRefs.current[video.title] = el)}
                  src={video.src}
                  controls
                  preload="metadata"
                  className="w-full rounded-lg bg-muted"
                />
                <h3 className="text-lg font-semibold text-foreground">{video.title}</h3>

                {"detailTitle" in video && video.detailTitle && (
                  <Tabs defaultValue="descricao" className="w-full">
                    <TabsList className="w-full">
                      <TabsTrigger value="descricao" className="flex-1">
                        Descrição
                      </TabsTrigger>
                      <TabsTrigger value="perguntas" className="flex-1">
                        Perguntas respondidas
                      </TabsTrigger>
                    </TabsList>
                    <TabsContent value="descricao" className="space-y-2">
                      <h4 className="font-semibold text-foreground">{video.detailTitle}</h4>
                      <p className="text-sm text-muted-foreground">
                        {video.detailDescription}
                      </p>
                    </TabsContent>
                    <TabsContent value="perguntas" className="space-y-2">
                      <ul className="list-disc list-inside text-sm text-muted-foreground space-y-1">
                        {video.answeredQuestions?.map((question) => (
                          <li key={question}>{question}</li>
                        ))}
                      </ul>
                    </TabsContent>
                  </Tabs>
                )}

                {"timestamp" in video && video.timestamp && (
                  <Button
                    variant="outline"
                    size="sm"
                    className="w-full"
                    onClick={() => handleJumpTo(video.title, video.timestamp!)}
                  >
                    <Play className="w-4 h-4 mr-2" />
                    Assistir a partir de {video.timestampLabel}
                  </Button>
                )}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
