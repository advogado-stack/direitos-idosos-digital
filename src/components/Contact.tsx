import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Phone, Mail, MapPin, MessageCircle } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    message: ""
  });

  const whatsappNumber = "5511999999999";

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.name.trim() || !formData.phone.trim()) {
      toast.error("Por favor, preencha seu nome e telefone");
      return;
    }

    const message = encodeURIComponent(
      `Olá! Meu nome é ${formData.name}.\nTelefone: ${formData.phone}\n\n${formData.message || "Gostaria de saber mais sobre o BPC/LOAS."}`
    );
    
    window.open(`https://wa.me/${whatsappNumber}?text=${message}`, '_blank');
    toast.success("Redirecionando para o WhatsApp...");
  };

  return (
    <section id="contato" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
              Entre em Contato
            </h2>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Estamos prontos para ajudá-lo a conquistar seu benefício. Fale conosco agora mesmo.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-semibold mb-8 text-foreground">Informações de Contato</h3>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="bg-primary/10 p-3 rounded-lg">
                    <Phone className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg mb-1 text-foreground">Telefone</h4>
                    <p className="text-muted-foreground">(11) 99999-9999</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-primary/10 p-3 rounded-lg">
                    <Mail className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg mb-1 text-foreground">E-mail</h4>
                    <p className="text-muted-foreground">contato@advogadobpc.com.br</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-primary/10 p-3 rounded-lg">
                    <MapPin className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg mb-1 text-foreground">Endereço</h4>
                    <p className="text-muted-foreground">São Paulo, SP</p>
                  </div>
                </div>
              </div>

              <Button 
                size="lg" 
                className="mt-8 w-full"
                onClick={() => window.open(`https://wa.me/${whatsappNumber}`, '_blank')}
              >
                <MessageCircle className="mr-2 h-5 w-5" />
                Chamar no WhatsApp
              </Button>
            </div>

            <div>
              <form onSubmit={handleSubmit} className="bg-card p-8 rounded-xl border border-border shadow-sm space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-2 text-foreground">
                    Nome completo *
                  </label>
                  <Input
                    id="name"
                    type="text"
                    placeholder="Seu nome"
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                    className="text-lg py-6"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-medium mb-2 text-foreground">
                    Telefone/WhatsApp *
                  </label>
                  <Input
                    id="phone"
                    type="tel"
                    placeholder="(11) 99999-9999"
                    value={formData.phone}
                    onChange={(e) => setFormData({...formData, phone: e.target.value})}
                    className="text-lg py-6"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-2 text-foreground">
                    Mensagem (opcional)
                  </label>
                  <Textarea
                    id="message"
                    placeholder="Conte-nos um pouco sobre sua situação..."
                    value={formData.message}
                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                    className="min-h-32 text-lg"
                  />
                </div>

                <Button type="submit" size="lg" className="w-full">
                  Enviar Mensagem
                </Button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
