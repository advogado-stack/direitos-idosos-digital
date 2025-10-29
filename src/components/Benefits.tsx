import { Shield, Heart, Clock, CheckCircle2 } from "lucide-react";

const benefits = [
  {
    icon: Heart,
    title: "Atendimento Humanizado",
    description: "Entendemos suas necessidades. Explicamos tudo de forma simples e clara."
  },
  {
    icon: Shield,
    title: "Experiência e Confiança",
    description: "Especialistas em benefícios para idosos. Cuidamos de todo o processo para você."
  },
  {
    icon: Clock,
    title: "Rápido e Sem Burocracia",
    description: "Agilizamos seu pedido. Você não precisa se preocupar com papelada."
  },
  {
    icon: CheckCircle2,
    title: "Do Começo ao Fim",
    description: "Acompanhamos você em todas as etapas até receber seu benefício."
  }
];

const Benefits = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Por que escolher nossa assessoria?
          </h2>
          <p className="text-xl md:text-2xl text-foreground/80 leading-relaxed max-w-3xl mx-auto">
            Facilitamos tudo para você conquistar seu direito
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {benefits.map((benefit, index) => (
            <div 
              key={index} 
              className="bg-card p-8 rounded-lg shadow-lg border border-border hover:shadow-xl transition-shadow"
            >
              <div className="w-16 h-16 rounded-full bg-accent/20 flex items-center justify-center mb-6 mx-auto">
                <benefit.icon className="h-8 w-8 text-accent" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-center">
                {benefit.title}
              </h3>
              <p className="text-xl text-foreground/80 text-center leading-relaxed">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Benefits;
