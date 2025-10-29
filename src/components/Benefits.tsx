import { Scale, Heart, FileCheck, Users } from "lucide-react";

const benefits = [
  {
    icon: Scale,
    title: "Experiência Comprovada",
    description: "Anos de atuação exclusiva em direito previdenciário, com foco em BPC/LOAS para idosos."
  },
  {
    icon: Heart,
    title: "Atendimento Humanizado",
    description: "Compreendemos as necessidades do público idoso e oferecemos suporte acolhedor em cada etapa."
  },
  {
    icon: FileCheck,
    title: "Assessoria Completa",
    description: "Desde a análise inicial até a concessão do benefício, cuidamos de toda a documentação e processo."
  },
  {
    icon: Users,
    title: "Sem Burocracia",
    description: "Simplificamos todo o processo para que você foque apenas em receber seu benefício."
  }
];

const Benefits = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
            Por que escolher nossa assessoria?
          </h2>
          <p className="text-xl text-muted-foreground leading-relaxed">
            Trabalhamos com dedicação e transparência para garantir que você receba o benefício que merece.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {benefits.map((benefit, index) => (
            <div 
              key={index}
              className="bg-card rounded-xl p-8 border border-border shadow-sm hover:shadow-md transition-all hover:-translate-y-1"
            >
              <div className="bg-primary/10 w-16 h-16 rounded-lg flex items-center justify-center mb-6">
                <benefit.icon className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-2xl font-semibold mb-4 text-foreground">
                {benefit.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed text-lg">
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
