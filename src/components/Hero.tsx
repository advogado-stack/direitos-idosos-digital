import { Button } from "@/components/ui/button";
import { Phone, MessageCircle } from "lucide-react";
import heroImage from "@/assets/hero-lawyer.jpg";

const Hero = () => {
  const whatsappNumber = "5511999999999"; // Número de exemplo
  const whatsappMessage = encodeURIComponent("Olá! Gostaria de saber mais sobre o BPC/LOAS.");

  return (
    <section className="relative min-h-[90vh] flex items-center">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/95 via-primary/85 to-primary/70 z-10" />
        <img 
          src={heroImage} 
          alt="Advogado especialista em BPC/LOAS" 
          className="w-full h-full object-cover"
        />
      </div>
      
      <div className="container mx-auto px-4 py-20 relative z-20">
        <div className="max-w-3xl">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-primary-foreground mb-6 leading-tight">
            Conquiste o Benefício que Você Merece
          </h1>
          <p className="text-xl md:text-2xl text-primary-foreground/95 mb-8 leading-relaxed">
            Especialista em BPC/LOAS para idosos. Assessoria completa e humanizada para garantir seus direitos previdenciários.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button 
              size="lg" 
              variant="secondary"
              className="text-lg px-8 py-6 shadow-lg hover:scale-105 transition-transform"
              onClick={() => window.open(`https://wa.me/${whatsappNumber}?text=${whatsappMessage}`, '_blank')}
            >
              <MessageCircle className="mr-2 h-5 w-5" />
              Fale pelo WhatsApp
            </Button>
            <Button 
              size="lg" 
              variant="outline"
              className="text-lg px-8 py-6 bg-white/10 backdrop-blur-sm border-white text-white hover:bg-white hover:text-primary"
              onClick={() => document.getElementById('contato')?.scrollIntoView({ behavior: 'smooth' })}
            >
              <Phone className="mr-2 h-5 w-5" />
              Agendar Consulta
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
