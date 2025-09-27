import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import About from './pages/About';
import Portfolio from './pages/Portfolio';
import Contact from './pages/Contact';

function App() {
  return (
    <>
      <div className="text-gray-300 font-sans">
        <Header />
        <main className="h-screen overflow-y-auto">
          <About />
          <Portfolio />
          <Contact />
          <Footer />
        </main>
      </div>
    </>
  );
}

export default App;