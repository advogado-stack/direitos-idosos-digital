const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto text-center">
          <h3 className="text-2xl font-bold mb-4">Advocacia Previdenciária</h3>
          <p className="text-primary-foreground/80 mb-6 leading-relaxed">
            Especialista em BPC/LOAS para idosos. Garantindo seus direitos com profissionalismo e dedicação.
          </p>
          <div className="border-t border-primary-foreground/20 pt-6">
            <p className="text-primary-foreground/70 text-sm">
              © {new Date().getFullYear()} Todos os direitos reservados. | OAB/SP 000.000
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
