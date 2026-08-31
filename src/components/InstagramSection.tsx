import { Instagram } from "lucide-react";

export const InstagramSection = () => {
  return (
    <section className="py-12 bg-background border-y border-border/50">
      <div className="container mx-auto px-6 text-center">
        <p className="text-muted-foreground mb-4">
          Acompanhe nosso conteúdo jurídico no Instagram
        </p>
        <a
          href="https://www.instagram.com/adv.marcelomasagao/"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-foreground hover:text-accent transition-colors font-medium"
        >
          <Instagram className="h-5 w-5" />
          @adv.marcelomasagao
        </a>
      </div>
    </section>
  );
};
