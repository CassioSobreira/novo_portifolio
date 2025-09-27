import ProjectCard from '../components/common/ProjectCard';
import type { Project } from '../types';

// Passo 1: Importe os screenshots dos seus projetos
import geradorIngressosImg from '../assets/gerador-ingressos.png';
import calculadoraIdadeImg from '../assets/calculadora-idade.png';

// Dados dos projetos agora usando as imagens locais
const myProjects: Project[] = [
  {
    title: 'Gerador de Ingressos',
    description: 'Uma ferramenta web intuitiva para criar tickets de eventos personalizados. Insira suas informações, personalize o design e gere uma imagem pronta para ser compartilhada ou impressa.',
    // Passo 2: Use a variável da imagem importada
    imageUrl: geradorIngressosImg,
    liveUrl: 'https://ticket-generator.cassiovinicius.dev/',
    repoUrl: 'https://github.com/CassioSobreira/emitir-ingressos',
    tags: ['HTML', 'CSS', 'JavaScript' ]
  },
  {
    title: 'Calculadora de Idade',
    description: 'Descubra sua idade em anos, meses e dias com esta ferramenta simples e rápida. Uma interface limpa e direta, projetada para fornecer uma resposta precisa e imediata.',
    // Passo 2: Use a variável da imagem importada
    imageUrl: calculadoraIdadeImg,
    liveUrl: 'https://calculadoradeidade.cassiovinicius.dev/',
    repoUrl: 'https://github.com/CassioSobreira/Calculadora_de_Idade',
    tags: ['React', 'Tailwind']
  },
];

const Portfolio = () => {
  return (
    <div className="animate-fade-in">
      <h2 className="text-center text-3xl font-bold mb-10 text-white">
        Confira alguns dos projetos em que trabalhei
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {myProjects.map((project, index) => (
          <ProjectCard key={index} project={project} />
        ))}
      </div>
    </div>
  );
};

export default Portfolio;

