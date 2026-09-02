// Helper para disparar eventos do Google Ads (gtag.js)
declare global {
  interface Window {
    dataLayer?: unknown[];
    gtag?: (...args: unknown[]) => void;
  }
}

export const gtagEvent = (...args: unknown[]) => {
  if (typeof window !== "undefined" && typeof window.gtag === "function") {
    window.gtag(...args);
  }
};

/** Conversão de contato (Google Ads) */
export const trackContactConversion = () => {
  gtagEvent("event", "conversion", {
    send_to: "AW-17891635555/UVa_CI3JrekbEOPistNC",
  });
};

/** Visualização de vídeo, com o título do vídeo */
export const trackVideoView = (title: string) => {
  gtagEvent("event", "video_view", {
    event_category: "video",
    event_label: title,
    video_title: title,
  });
};
