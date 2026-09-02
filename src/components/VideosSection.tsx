import { Card, CardContent } from "@/components/ui/card";
import { videos } from "@/data/videos";
import { trackVideoView } from "@/lib/gtag";

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
          {videos.map((video, index) => (
            <Card key={video.title} id={`video-${index}`} className="card-shadow border-border/50 overflow-hidden">
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
