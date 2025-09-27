import { NavLink } from 'react-router-dom';

const Header = () => {
  const activeStyle = {
    color: '#fb923c',
    borderBottom: '2px solid #fb923c',
  };

  return (
    <header className="bg-gray-950/50 backdrop-blur-sm sticky top-0 z-10 p-4 border-b border-gray-800">
      <nav className="flex justify-center items-center space-x-6 md:space-x-8">
        <NavLink to="/" style={({ isActive }) => isActive ? activeStyle : {}} className="text-gray-300 hover:text-orange-400 transition-colors pb-1">
          Sobre
        </NavLink>
        <NavLink to="/portfolio" style={({ isActive }) => isActive ? activeStyle : {}} className="text-gray-300 hover:text-orange-400 transition-colors pb-1">
          Portfólio
        </NavLink>
        {/* Você pode adicionar mais links como "Resumo" ou "Contato" */}
        <a href="#contact" className="text-gray-300 hover:text-orange-400 transition-colors pb-1">
          Contato
        </a>
      </nav>
    </header>
  );
};

export default Header;
