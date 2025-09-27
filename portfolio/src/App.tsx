import { Routes, Route } from 'react-router-dom';
import Sidebar from './components/layout/Sidebar';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import About from './pages/About';
import Portfolio from './pages/Portfolio';

function App() {
  return (
    <div className="bg-gray-900 text-gray-200 min-h-screen flex flex-col md:flex-row">
      {/* Sidebar - Fica visível em telas maiores */}
      <Sidebar />

      {/* Área de Conteúdo Principal */}
      <main className="flex-1 flex flex-col">
        {/* Header */}
        <Header />
        
        {/* Conteúdo da Página - Onde as rotas serão renderizadas */}
        <div className="flex-1 p-6 md:p-10 overflow-y-auto">
          <Routes>
            <Route path="/" element={<About />} />
            <Route path="/portfolio" element={<Portfolio />} />
            {/* Adicione outras rotas aqui, por exemplo, para Contato ou Resumo */}
          </Routes>
        </div>

        {/* Footer */}
        <Footer />
      </main>
    </div>
  );
}

export default App;
