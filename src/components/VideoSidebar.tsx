import { ScrollArea } from "@/components/ui/scroll-area";
import {
  Sidebar,
  SidebarContent,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import { videos } from "@/data/videos";

export const VideoSidebar = () => {
  return (
    <Sidebar side="right" collapsible="offcanvas" className="border-l">
      <SidebarHeader className="border-b p-4">
        <h2 className="text-lg font-semibold text-sidebar-foreground">
          Vídeos
        </h2>
        <p className="text-sm text-sidebar-foreground/70">
          Assista aos conteúdos explicativos
        </p>
      </SidebarHeader>
      <SidebarContent className="p-0">
        <ScrollArea className="h-[calc(100vh-5rem)]">
          <SidebarMenu>
            {videos.map((video) => (
              <SidebarMenuItem key={video.title} className="p-4 border-b">
                <div className="space-y-3">
                  <video
                    src={video.src}
                    controls
                    preload="metadata"
                    className="w-full rounded-lg bg-sidebar-accent"
                  />
                  <h3 className="text-sm font-semibold text-sidebar-foreground">
                    {video.title}
                  </h3>

                  {(video.detailDescription || video.answeredQuestions?.length) && (
                    <div className="space-y-2">
                      {video.detailDescription && (
                        <p className="text-xs text-sidebar-foreground/70">
                          {video.detailDescription}
                        </p>
                      )}
                      {video.answeredQuestions?.length && (
                        <div>
                          <h4 className="text-xs font-semibold text-sidebar-foreground mb-1">
                            Perguntas respondidas
                          </h4>
                          <ul className="list-disc list-inside text-xs text-sidebar-foreground/70 space-y-1">
                            {video.answeredQuestions.map((question) => (
                              <li key={question}>{question}</li>
                            ))}
                          </ul>
                        </div>
                      )}
                    </div>
                  )}
                </div>
              </SidebarMenuItem>
            ))}
          </SidebarMenu>
        </ScrollArea>
      </SidebarContent>
    </Sidebar>
  );
};
