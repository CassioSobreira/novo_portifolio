import { GraduationCap, MapPin, Sparkles } from 'lucide-react';
import profileImage from '../assets/profile.png';

const About = () => {
  return (
    <div className="max-w-4xl mx-auto animate-fade-in">
      <div className="flex flex-col md:flex-row items-center md:items-start gap-10">
        <img
          src={profileImage} 
          alt="Foto de Perfil do Cássio"
          className="rounded-full w-36 h-36 object-cover border-4 border-gray-700 shadow-lg"
        />

        <div className="text-center md:text-left">
          <h2 className="text-4xl font-bold text-white mb-2">Sobre mim</h2>
          <p className="text-gray-400 leading-relaxed">
            Eu amo desafios, aprender coisas novas e trabalhar em equipe. Estou sempre procurando
            oportunidades para crescer, melhorar minhas habilidades e fazer networking!
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-8">
            <div className="flex items-start gap-3">
              <MapPin className="text-orange-400 mt-1 flex-shrink-0" size={20} />
              <div>
                <h3 className="font-semibold text-white">Nacionalidade</h3>
                <p className="text-gray-400">Brasileiro</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <Sparkles className="text-orange-400 mt-1 flex-shrink-0" size={20} />
              <div>
                <h3 className="font-semibold text-white">Interesses</h3>
                <p className="text-gray-400">Construir produtos de software eficientes, explorando a interseção entre hardware, software e a experiência do usuário.</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <GraduationCap className="text-orange-400 mt-1 flex-shrink-0" size={20} />
              <div>
                <h3 className="font-semibold text-white">Estudo</h3>
                <p className="text-gray-400">Universidade Senai Cimatec</p>
              </div>
            </div>
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;

