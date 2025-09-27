import { Building, GraduationCap, MapPin, Sparkles } from 'lucide-react';

const About = () => {
  return (
    <div className="max-w-4xl mx-auto animate-fade-in">
      <div className="flex flex-col md:flex-row items-center md:items-start gap-10">
        {/* Imagem de Perfil */}
        <img
          src="https://placehold.co/150x150/1a202c/fb923c?text=Sua+Foto"
          alt="Foto de Perfil"
          className="rounded-full w-36 h-36 object-cover border-4 border-gray-700"
        />

        {/* Informações */}
        <div className="text-center md:text-left">
          <h2 className="text-4xl font-bold text-white mb-2">Sobre mim</h2>
          <p className="text-gray-400 leading-relaxed">
            Eu amo desafios, aprender coisas novas e trabalhar em equipe. Estou sempre procurando
            oportunidades para crescer, melhorar minhas habilidades e fazer networking!
            Aqui você pode adicionar mais detalhes sobre sua paixão por programação e suas aspirações.
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
                <p className="text-gray-400">Engenharia Web, IA, soluções de software impactantes.</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <GraduationCap className="text-orange-400 mt-1 flex-shrink-0" size={20} />
              <div>
                <h3 className="font-semibold text-white">Estudo</h3>
                <p className="text-gray-400">Sua Universidade ou Curso</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <Building className="text-orange-400 mt-1 flex-shrink-0" size={20} />
              <div>
                <h3 className="font-semibold text-white">Emprego</h3>
                <p className="text-gray-400">Sua Empresa Atual ou "Em busca de oportunidades"</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
