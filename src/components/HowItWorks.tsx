const steps = [
  {
    number: "1",
    title: "Entre em Contato",
    description: "Fale conosco pelo WhatsApp ou telefone. É rápido e fácil."
  },
  {
    number: "2",
    title: "Análise do Seu Caso",
    description: "Verificamos se você tem direito ao benefício. Sem custo."
  },
  {
    number: "3",
    title: "Fazemos Seu Pedido",
    description: "Cuidamos de toda a documentação e processo para você."
  },
  {
    number: "4",
    title: "Você Recebe o Benefício",
    description: "Acompanhamos até você começar a receber seu salário mínimo mensal."
  }
];

const HowItWorks = () => {
  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Como Funciona? É Simples!
          </h2>
          <p className="text-xl md:text-2xl text-foreground/80 leading-relaxed max-w-3xl mx-auto">
            Em 4 passos você conquista seu direito
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
          {steps.map((step, index) => (
            <div 
              key={index} 
              className="bg-card p-8 rounded-lg shadow-lg border-2 border-border text-center"
            >
              <div className="w-20 h-20 rounded-full bg-accent text-accent-foreground flex items-center justify-center mb-6 mx-auto text-4xl font-bold">
                {step.number}
              </div>
              <h3 className="text-2xl font-bold mb-4">
                {step.title}
              </h3>
              <p className="text-xl text-foreground/80 leading-relaxed">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
