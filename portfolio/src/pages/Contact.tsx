import { Mail, MapPin } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="min-h-screen flex items-center justify-center snap-start pt-24 pb-12 px-4 bg-gray-900">
      <div className="w-full max-w-4xl mx-auto">
        <h2 className="text-center text-3xl font-bold mb-10 text-white">
          Entre em Contato
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          
          <div className="flex flex-col justify-center">
            <p className="text-gray-400 mb-6">
              Adoraria ouvir sobre seus projetos e ideias. Preencha o formulário ou entre em contato por um dos canais abaixo.
            </p>
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <Mail className="text-orange-400 flex-shrink-0" size={20} />
                <a href="mailto:seu-email@exemplo.com" className="text-gray-300 hover:text-orange-400 transition-colors">
                  Sobreiracassio@gmail.com
                </a>
              </div>
              <div className="flex items-center gap-3">
                <MapPin className="text-orange-400 flex-shrink-0" size={20} />
                <span className="text-gray-300">Salvador, Bahia, Brasil</span>
              </div>
            </div>
          </div>

          
          <form className="space-y-4">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-400 mb-1">Nome</label>
              <input type="text" id="name" name="name" className="w-full bg-gray-800 border border-gray-700 rounded-md p-2 text-white focus:ring-orange-400 focus:border-orange-400" />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-400 mb-1">Email</label>
              <input type="email" id="email" name="email" className="w-full bg-gray-800 border border-gray-700 rounded-md p-2 text-white focus:ring-orange-400 focus:border-orange-400" />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-400 mb-1">Mensagem</label>
              <textarea id="message" name="message" rows={4} className="w-full bg-gray-800 border border-gray-700 rounded-md p-2 text-white focus:ring-orange-400 focus:border-orange-400"></textarea>
            </div>
            <button type="submit" className="w-full bg-orange-500 hover:bg-orange-600 text-white font-bold py-2 px-4 rounded-md transition-colors">
              Enviar Mensagem
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;

