import profileImage from '../assets/profile.png';
import { Building, GraduationCap, MapPin, Sparkles } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="bg-slate-700 min-h-screen flex items-center justify-center py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="flex flex-col md:flex-row items-center md:items-start gap-10">
          {/* Imagem de Perfil */}
          <img
            src={profileImage}
            alt="Foto de Perfil do Cássio"
            className="rounded-full w-36 h-36 md:w-48 md:h-48 object-cover border-4 border-gray-600 flex-shrink-0"
          />

          {/* Conteúdo Principal */}
          <div className="text-center md:text-left w-full">
            <h2 className="text-4xl font-bold text-white mb-4">Sobre mim</h2>

            {/* Descrição com fundo */}
            <p className="bg-slate-800/50 p-4 rounded-lg text-gray-300 leading-relaxed mb-8">
              Eu amo desafios, aprender coisas novas e trabalhar em equipe. Estou sempre procurando
              oportunidades para crescer, melhorar minhas habilidades e fazer networking!
            </p>

            {/* Grid de Cards com Informações */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {/* Card Nacionalidade */}
              <div className="bg-slate-800/50 p-4 rounded-lg flex items-start gap-4 h-full">
                <MapPin className="text-orange-400 flex-shrink-0 mt-1" size={24} />
                <div>
                  <h3 className="font-semibold text-white">Nacionalidade</h3>
                  <p className="text-gray-300 text-sm">Brasileiro</p>
                </div>
              </div>

              {/* Card Interesses */}
              <div className="bg-slate-800/50 p-4 rounded-lg flex items-start gap-4 h-full">
                <Sparkles className="text-orange-400 flex-shrink-0 mt-1" size={24} />
                <div>
                  <h3 className="font-semibold text-white">Interesses</h3>
                  <p className="text-gray-300 text-sm">DevOps, Cloud Computing e modelos de IA.</p>
                </div>
              </div>

              {/* Card Estudo */}
              <div className="bg-slate-800/50 p-4 rounded-lg flex items-start gap-4 h-full">
                <GraduationCap className="text-orange-400 flex-shrink-0 mt-1" size={24} />
                <div>
                  <h3 className="font-semibold text-white">Estudo</h3>
                  <p className="text-gray-300 text-sm">Universidade Senai Cimatec</p>
                </div>
              </div>

              {/* Card Emprego */}
              <div className="bg-slate-800/50 p-4 rounded-lg flex items-start gap-4 h-full">
                <Building className="text-orange-400 flex-shrink-0 mt-1" size={24} />
                <div>
                  <h3 className="font-semibold text-white">Emprego</h3>
                  <p className="text-gray-300 text-sm">Em busca de oportunidades</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

