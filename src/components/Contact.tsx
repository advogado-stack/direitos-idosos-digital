import { useState, FormEvent } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Phone, Mail, MessageCircle } from "lucide-react";
import { toast } from "sonner";

const Contact = () => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");

  const whatsappNumber = "5511999999999";

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    
    if (!name.trim() || !phone.trim()) {
      toast.error("Por favor, preencha seu nome e telefone");
      return;
    }

    const message = `Olá! Meu nome é ${name} e gostaria de saber sobre o BPC/LOAS. Meu telefone: ${phone}`;
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
    
    window.open(whatsappUrl, '_blank');
    toast.success("Abrindo WhatsApp...");
  };

  return (
    <section id="contato" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Fale Conosco Agora
            </h2>
            <p className="text-xl md:text-2xl text-foreground/80 leading-relaxed">
              Tire suas dúvidas e saiba se você tem direito ao benefício
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="bg-card p-8 rounded-lg shadow-lg border border-border">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-14 h-14 rounded-full bg-accent/20 flex items-center justify-center flex-shrink-0">
                  <Phone className="h-7 w-7 text-accent" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-1">Telefone</h3>
                  <p className="text-2xl text-foreground/80">(11) 99999-9999</p>
                </div>
              </div>
            </div>

            <div className="bg-card p-8 rounded-lg shadow-lg border border-border">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-14 h-14 rounded-full bg-accent/20 flex items-center justify-center flex-shrink-0">
                  <Mail className="h-7 w-7 text-accent" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-1">E-mail</h3>
                  <p className="text-xl text-foreground/80 break-all">contato@exemplo.com</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-card p-10 rounded-lg shadow-xl border-2 border-accent/30">
            <h3 className="text-2xl md:text-3xl font-bold mb-8 text-center">
              Deixe seu contato
            </h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-xl font-medium mb-3">
                  Seu Nome
                </label>
                <Input
                  id="name"
                  type="text"
                  placeholder="Digite seu nome completo"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="text-xl p-6 h-auto"
                  required
                />
              </div>
              <div>
                <label htmlFor="phone" className="block text-xl font-medium mb-3">
                  Seu Telefone (WhatsApp)
                </label>
                <Input
                  id="phone"
                  type="tel"
                  placeholder="(11) 99999-9999"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className="text-xl p-6 h-auto"
                  required
                />
              </div>
              <Button 
                type="submit" 
                size="lg" 
                variant="secondary"
                className="w-full text-2xl py-8 h-auto font-bold shadow-lg hover:scale-105 transition-transform"
              >
                <MessageCircle className="mr-3 h-7 w-7" />
                Enviar pelo WhatsApp
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
