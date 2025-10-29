import { Button } from "@/components/ui/button";
import { MessageCircle } from "lucide-react";
import heroImage from "@/assets/elderly-hero.jpg";

const Hero = () => {
  const whatsappNumber = "5511999999999";
  const whatsappMessage = encodeURIComponent("Olá! Tenho mais de 65 anos e gostaria de saber sobre o BPC/LOAS.");

  return (
    <section className="relative min-h-[85vh] flex items-center bg-background">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/95 to-background/80 z-10" />
        <img 
          src={heroImage} 
          alt="Pessoa idosa sorrindo com confiança" 
          className="w-full h-full object-cover opacity-30"
        />
      </div>
      
      <div className="container mx-auto px-6 py-16 relative z-20">
        <div className="max-w-4xl">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 leading-tight">
            BPC/LOAS: Um Salário Mínimo por Mês para Você
          </h1>
          <p className="text-2xl md:text-3xl text-foreground/90 mb-4 leading-relaxed font-medium">
            Tem 65 anos ou mais?
          </p>
          <p className="text-xl md:text-2xl text-foreground/80 mb-10 leading-relaxed">
            Você pode ter direito a receber um salário mínimo todo mês. Nós ajudamos você a conseguir esse benefício.
          </p>
          <div className="flex flex-col gap-5">
            <Button 
              size="lg" 
              variant="secondary"
              className="text-2xl md:text-3xl px-10 py-8 h-auto font-bold shadow-xl hover:scale-105 transition-transform"
              onClick={() => window.open(`https://wa.me/${whatsappNumber}?text=${whatsappMessage}`, '_blank')}
            >
              <MessageCircle className="mr-3 h-8 w-8" />
              Falar no WhatsApp Agora
            </Button>
            <p className="text-lg text-foreground/70 text-center">
              Atendimento rápido e sem complicação
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
