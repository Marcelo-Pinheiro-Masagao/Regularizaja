import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Mail, MapPin, Clock, Send } from "lucide-react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { toast } from "@/hooks/use-toast";
import femaleLayerImage from "@/assets/female-lawyer-office.jpg";

const contactFormSchema = z.object({
  name: z.string().min(2, "Nome deve ter pelo menos 2 caracteres"),
  email: z.string().email("Email inválido"),
  phone: z.string().min(10, "Telefone deve ter pelo menos 10 dígitos"),
  message: z.string().min(10, "Por favor, descreva seu caso com mais detalhes"),
});

export const ContactSection = () => {
  const { register, handleSubmit, formState: { errors }, reset } = useForm({
    resolver: zodResolver(contactFormSchema),
  });

  const onSubmit = (data: any) => {
    console.log("Formulário enviado:", data);
    toast({
      title: "Mensagem enviada!",
      description: "Entraremos em contato em breve.",
    });
    reset();
  };

  return (
    <section id="contact" className="py-20 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
            Fale Conosco
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Estamos prontos para ajudar você a resolver suas questões jurídicas e imobiliárias
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="grid gap-6">
              <Card className="border-border/50 card-shadow">
                <CardHeader>
                  <CardTitle className="flex items-center space-x-3">
                    <div className="bg-primary/10 p-3 rounded-lg">
                      <Send className="h-6 w-6 text-primary" />
                    </div>
                    <span className="text-foreground">Formulário de Contato</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                    <div>
                      <Label htmlFor="name">Nome completo</Label>
                      <Input
                        id="name"
                        {...register("name")}
                        placeholder="Seu nome completo"
                        className={errors.name ? "border-destructive" : ""}
                      />
                      {errors.name && (
                        <p className="text-sm text-destructive mt-1">{errors.name.message as string}</p>
                      )}
                    </div>
                    
                    <div>
                      <Label htmlFor="email">E-mail</Label>
                      <Input
                        id="email"
                        type="email"
                        {...register("email")}
                        placeholder="seu@email.com"
                        className={errors.email ? "border-destructive" : ""}
                      />
                      {errors.email && (
                        <p className="text-sm text-destructive mt-1">{errors.email.message as string}</p>
                      )}
                    </div>
                    
                    <div>
                      <Label htmlFor="phone">Telefone</Label>
                      <Input
                        id="phone"
                        {...register("phone")}
                        placeholder="(11) 99999-9999"
                        className={errors.phone ? "border-destructive" : ""}
                      />
                      {errors.phone && (
                        <p className="text-sm text-destructive mt-1">{errors.phone.message as string}</p>
                      )}
                    </div>
                    
                    <div>
                      <Label htmlFor="message">Histórico do caso</Label>
                      <Textarea
                        id="message"
                        {...register("message")}
                        placeholder="Descreva detalhadamente seu caso, incluindo documentos disponíveis e situação atual..."
                        className={errors.message ? "border-destructive" : ""}
                        rows={4}
                      />
                      {errors.message && (
                        <p className="text-sm text-destructive mt-1">{errors.message.message as string}</p>
                      )}
                    </div>
                    
                    <Button type="submit" size="lg" className="w-full">
                      <Send className="h-5 w-5 mr-2" />
                      Enviar Mensagem
                    </Button>
                  </form>
                </CardContent>
              </Card>

              <Card className="border-border/50 card-shadow">
                <CardHeader>
                  <CardTitle className="flex items-center space-x-3">
                    <div className="bg-primary/10 p-3 rounded-lg">
                      <Mail className="h-6 w-6 text-primary" />
                    </div>
                    <span className="text-foreground">E-mail</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">
                    Entre em contato por e-mail para consultas mais detalhadas.
                  </p>
                  <a 
                    href="mailto:marcelopinheiro2016@gmail.com"
                    className="text-primary hover:underline font-medium"
                  >
                    marcelopinheiro2016@gmail.com
                  </a>
                </CardContent>
              </Card>

              <div className="grid sm:grid-cols-2 gap-6">
                <Card className="border-border/50">
                  <CardContent className="p-6">
                    <div className="flex items-center space-x-3 mb-2">
                      <MapPin className="h-5 w-5 text-accent" />
                      <span className="font-semibold text-foreground">Localização</span>
                    </div>
                    <p className="text-muted-foreground">São Paulo - SP</p>
                  </CardContent>
                </Card>

                <Card className="border-border/50">
                  <CardContent className="p-6">
                    <div className="flex items-center space-x-3 mb-2">
                      <Clock className="h-5 w-5 text-accent" />
                      <span className="font-semibold text-foreground">Horário</span>
                    </div>
                    <p className="text-muted-foreground">Seg-Sex: 9h-18h</p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="relative overflow-hidden rounded-2xl elegant-shadow">
              <img
                src={femaleLayerImage}
                alt="Advogada profissional em escritório moderno"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};