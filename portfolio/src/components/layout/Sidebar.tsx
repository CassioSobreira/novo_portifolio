import { Github, Linkedin, Instagram } from 'lucide-react';
import { NavLink } from 'react-router-dom';

const Sidebar = () => {
  return (
    <aside className="w-64 bg-gray-900 text-gray-200 p-6 flex flex-col min-h-screen">
      <div className="text-center mb-12">
        <img
          src="https://placehold.co/100x100/1a202c/fb923c?text=C"
          alt="Foto de Perfil"
          className="rounded-full w-24 h-24 mx-auto mb-4 border-2 border-orange-400"
        />
        <h1 className="text-2xl font-bold">Cássio Sobreira</h1>
        <p className="text-sm text-gray-400">Estudante de engenharia da computação</p>
      </div>

      <nav className="flex-grow">
        <ul className="space-y-4">
          <li>
            <NavLink
              to="/"
              className={({ isActive }) =>
                `block p-3 rounded-lg transition-colors duration-200 ${
                  isActive ? 'bg-orange-400 text-gray-900' : 'hover:bg-gray-700'
                }`
              }
            >
              Sobre Mim
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/portfolio"
              className={({ isActive }) =>
                `block p-3 rounded-lg transition-colors duration-200 ${
                  isActive ? 'bg-orange-400 text-gray-900' : 'hover:bg-gray-700'
                }`
              }
            >
              Portfólio
            </NavLink>
          </li>
        </ul>
      </nav>

      <div className="mt-auto text-center">
        <p className="text-xs text-gray-500 mb-4">Conecte-se comigo</p>
        <div className="flex justify-center space-x-6">
        
          <a
            href="https://github.com/CassioSobreira"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Link para o perfil do Github"
          >
            <Github size={24} className="hover:text-orange-400 transition-colors" />
          </a>
          <a
            href="https://www.linkedin.com/in/c%C3%A1ssio-sobreira-a45329366/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Link para o perfil do Linkedin"
          >
            <Linkedin size={24} className="hover:text-orange-400 transition-colors" />
          </a>
          <a
            href="https://www.instagram.com/cassio_sobreira/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Link para o perfil do Instagram"
          >
            <Instagram size={24} className="hover:text-orange-400 transition-colors" />
          </a>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;