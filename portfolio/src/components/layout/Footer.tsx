const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="text-center p-4 border-t border-gray-800 bg-gray-950">
      <p className="text-sm text-gray-500">
        &copy; {currentYear} Seu Nome. Todos os direitos reservados.
      </p>
    </footer>
  );
};

export default Footer;
