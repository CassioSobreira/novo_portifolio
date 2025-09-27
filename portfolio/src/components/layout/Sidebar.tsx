import { Github, Linkedin, Instagram, User, Briefcase } from 'lucide-react';
import { NavLink } from 'react-router-dom';

const Sidebar = () => {
  // Estilo para o link ativo
  const activeLinkStyle = {
    color: '#fb923c', // Laranja do Tailwind (orange-400)
    backgroundColor: 'rgba(251, 146, 60, 0.1)',
  };

  return (
    <aside className="w-full md:w-64 bg-gray-950 p-6 flex flex-col border-r border-gray-800">
      <div className="flex-1">
        <h1 className="text-2xl font-bold text-white">Seu Nome</h1>
        <p className="text-sm text-gray-400 mt-1">Desenvolvedor Front-end</p>

        {/* Navegação */}
        <nav className="mt-10 flex flex-col space-y-2">
          <NavLink
            to="/"
            style={({ isActive }) => (isActive ? activeLinkStyle : {})}
            className="flex items-center py-2 px-3 rounded-md text-gray-300 hover:bg-gray-800 transition-colors"
          >
            <User className="mr-3 h-5 w-5" />
            Sobre mim
          </NavLink>
          <NavLink
            to="/portfolio"
            style={({ isActive }) => (isActive ? activeLinkStyle : {})}
            className="flex items-center py-2 px-3 rounded-md text-gray-300 hover:bg-gray-800 transition-colors"
          >
            <Briefcase className="mr-3 h-5 w-5" />
            Portfólio
          </NavLink>
          {/* Adicione mais links aqui */}
        </nav>
      </div>

      {/* Ícones Sociais */}
      <div className="flex justify-center space-x-4">
        <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-orange-400 transition-colors">
          <Github size={24} />
        </a>
        <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-orange-400 transition-colors">
          <Linkedin size={24} />
        </a>
        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-orange-400 transition-colors">
          <Instagram size={24} />
        </a>
      </div>
    </aside>
  );
};

export default Sidebar;
