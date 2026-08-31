import { ScrollArea } from "@/components/ui/scroll-area";
import {
  Sidebar,
  SidebarContent,
  SidebarMenu,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import { videos } from "@/data/videos";

export const VideoSidebar = () => {
  const handleClick = (index: number) => {
    const target = document.getElementById(`video-${index}`);
    if (target) {
      target.scrollIntoView({ behavior: "smooth", block: "center" });
    }
  };

  return (
    <Sidebar side="right" collapsible="none" className="border-l sticky top-0 h-screen">
      <SidebarContent className="p-0">
        <ScrollArea className="h-screen">
          <SidebarMenu className="p-2 space-y-2">
            {videos.map((video, index) => (
              <SidebarMenuItem key={video.title}>
                <button
                  type="button"
                  onClick={() => handleClick(index)}
                  className="w-full rounded-lg overflow-hidden focus:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                  aria-label={`Ir para o vídeo: ${video.title}`}
                >
                  <img
                    src={video.poster}
                    alt={video.title}
                    loading="lazy"
                    className="w-full rounded-lg bg-sidebar-accent pointer-events-none"
                  />
                </button>
              </SidebarMenuItem>
            ))}
          </SidebarMenu>
        </ScrollArea>
      </SidebarContent>
    </Sidebar>
  );
};
