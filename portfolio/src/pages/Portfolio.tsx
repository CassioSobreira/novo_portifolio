import type { Project } from '../types';
import ProjectCard from '../components/common/ProjectCard';
import geradorIngressosImg from '../assets/gerador-ingressos.png';
import calculadoraIdadeImg from '../assets/calculadora-idade.png';


const myProjects: Project[] = [
  {
    title: 'Gerador de Ingressos',
    description: 'Ferramenta web para criar tickets de eventos personalizados. Insira informações, personalize e gere uma imagem pronta para compartilhar.',
    imageUrl: geradorIngressosImg,
    liveUrl: 'https://ticket-generator.cassiovinicius.dev/',
    repoUrl: 'https://github.com/CassioSobreira/emitir-ingressos',
    tags: ['HTML', 'CSS', 'JavaScript' ]
  },
  {
    title: 'Calculadora de Idade',
    description: 'Descubra sua idade em anos, meses e dias com esta ferramenta simples, com validação de dados e interface limpa.',
    imageUrl: calculadoraIdadeImg,
    liveUrl: 'https://calculadoradeidade.cassiovinicius.dev/',
    repoUrl: 'https://github.com/CassioSobreira/Calculadora_de_Idade',
    tags: ['React', 'Tailwind']
  },
];

const Portfolio = () => {
  return (
    <section id="portfolio" className="bg-slate-800 min-h-screen flex items-center justify-center pt-20 px-4">
      <div className="w-full max-w-5xl">
        <h2 className="text-center text-3xl font-bold mb-10 text-white">
          Meus Projetos
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {myProjects.map((project, index) => (
            <ProjectCard key={index} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;

