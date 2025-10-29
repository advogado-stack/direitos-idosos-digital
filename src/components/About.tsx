import { Check } from "lucide-react";

const About = () => {
  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-6">
            O que é o BPC/LOAS?
          </h2>
          <p className="text-xl md:text-2xl text-foreground/80 mb-10 text-center leading-relaxed">
            É um benefício do governo que paga <strong>um salário mínimo por mês</strong> para pessoas idosas com baixa renda.
          </p>
          
          <div className="bg-card rounded-lg p-8 md:p-10 shadow-lg border-2 border-border">
            <h3 className="text-2xl md:text-3xl font-bold mb-8 text-center">
              Você tem direito se:
            </h3>
            <div className="space-y-6">
              <div className="flex gap-4 items-start">
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-accent/20 flex items-center justify-center">
                  <Check className="h-6 w-6 text-accent" />
                </div>
                <p className="text-xl md:text-2xl leading-relaxed">
                  Tem <strong>65 anos ou mais</strong>
                </p>
              </div>
              
              <div className="flex gap-4 items-start">
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-accent/20 flex items-center justify-center">
                  <Check className="h-6 w-6 text-accent" />
                </div>
                <p className="text-xl md:text-2xl leading-relaxed">
                  A renda da sua família é baixa (menos de 1/4 do salário mínimo por pessoa)
                </p>
              </div>
              
              <div className="flex gap-4 items-start">
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-accent/20 flex items-center justify-center">
                  <Check className="h-6 w-6 text-accent" />
                </div>
                <p className="text-xl md:text-2xl leading-relaxed">
                  Não recebe outro benefício do INSS
                </p>
              </div>
            </div>
          </div>

          <div className="mt-10 text-center">
            <p className="text-xl md:text-2xl text-foreground/70 leading-relaxed">
              <strong>Não precisa ter contribuído para o INSS.</strong><br />
              É um direito seu garantido por lei.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
