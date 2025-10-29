import { CheckCircle2 } from "lucide-react";

const About = () => {
  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-6 text-foreground">
            O que é o BPC/LOAS?
          </h2>
          <p className="text-xl text-center text-muted-foreground mb-12 leading-relaxed">
            O Benefício de Prestação Continuada (BPC/LOAS) é um direito garantido pela Constituição Federal que assegura um salário mínimo mensal a idosos e pessoas com deficiência de baixa renda.
          </p>
          
          <div className="bg-card rounded-2xl shadow-lg p-8 md:p-12 border border-border">
            <h3 className="text-2xl md:text-3xl font-semibold mb-8 text-foreground">
              Quem tem direito ao benefício?
            </h3>
            
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <CheckCircle2 className="h-7 w-7 text-secondary flex-shrink-0 mt-1" />
                <div>
                  <h4 className="text-xl font-semibold mb-2 text-foreground">Idosos com 65 anos ou mais</h4>
                  <p className="text-muted-foreground leading-relaxed">
                    Que não possuam meios de prover a própria manutenção nem tê-la provida por sua família.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <CheckCircle2 className="h-7 w-7 text-secondary flex-shrink-0 mt-1" />
                <div>
                  <h4 className="text-xl font-semibold mb-2 text-foreground">Renda familiar per capita</h4>
                  <p className="text-muted-foreground leading-relaxed">
                    Inferior a 1/4 do salário mínimo vigente (critério legal, mas pode ser contestado judicialmente).
                  </p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <CheckCircle2 className="h-7 w-7 text-secondary flex-shrink-0 mt-1" />
                <div>
                  <h4 className="text-xl font-semibold mb-2 text-foreground">Não recebe nenhum benefício previdenciário</h4>
                  <p className="text-muted-foreground leading-relaxed">
                    Não pode estar recebendo outro benefício no âmbito da Seguridade Social ou de outro regime.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
