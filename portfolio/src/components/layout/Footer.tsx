const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    
    <footer id="footer" className="bg-gray-900 py-8 px-4">
      <div className="text-center max-w-lg mx-auto">
        <h2 className="text-3xl font-bold text-white mb-4">Vamos Conectar-nos!</h2>
        <p className="text-gray-400 mb-8">
          Estou sempre aberto a novas oportunidades e colaborações. Sinta-se à vontade para entrar em contato ou seguir-me nas redes sociais.
        </p>
        <div className="text-sm text-gray-500 mt-10">
          &copy; {currentYear} Cássio Sobreira. Todos os direitos reservados.
        </div>
      </div>
    </footer>
  );
};

export default Footer;

