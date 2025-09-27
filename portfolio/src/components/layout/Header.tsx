import { Github, Instagram, Linkedin } from 'lucide-react';

const Header = () => {
  return (
    <header className="bg-gray-900/70 backdrop-blur-sm p-4 fixed top-0 left-0 right-0 z-50">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        
        <a href="#about" className="text-xl font-bold text-white">
          Cássio Sobreira
        </a>

        <nav className="hidden md:flex items-center gap-6">
          <a href="#about" className="text-gray-300 hover:text-orange-400 transition-colors">
            Sobre
          </a>
          <a href="#portfolio" className="text-gray-300 hover:text-orange-400 transition-colors">
            Portfólio
          </a>
          <a href="#contact" className="text-gray-300 hover:text-orange-400 transition-colors">
            Contato 
          </a>
        </nav>

        
        <div className="flex items-center gap-4">
          <a href="https://github.com/CassioSobreira" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
            <Github size={22} />
          </a>
          <a href="https://linkedin.com/in/SEU_USUARIO_DO_LINKEDIN" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
            <Linkedin size={22} />
          </a>
          <a href="https://instagram.com/SEU_USUARIO_DO_INSTAGRAM" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
            <Instagram size={22} />
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;

