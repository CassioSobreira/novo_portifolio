import ProjectCard from '../components/common/ProjectCard';
import type { Project } from '../types';

// Dados de exemplo. Substitua pelos seus projetos.
const myProjects: Project[] = [
  {
    title: 'Sistema de Finanças',
    description: 'Uma plataforma completa para gerenciamento financeiro pessoal, com dashboard, extratos e controle de despesas.',
    imageUrl: 'https://placehold.co/600x400/1a202c/fb923c?text=Finance+Manager',
    liveUrl: '#',
    repoUrl: '#',
    tags: ['React', 'TypeScript', 'TailwindCSS', 'Firebase']
  },
  {
    title: 'Dashboard de Análises',
    description: 'Um dashboard interativo para visualização de dados complexos, com gráficos e filtros dinâmicos.',
    imageUrl: 'https://placehold.co/600x400/1a202c/fb923c?text=Data+Dashboard',
    liveUrl: '#',
    repoUrl: '#',
    tags: ['React', 'D3.js', 'Styled-Components']
  },
  {
    title: 'E-commerce de Eletrônicos',
    description: 'Loja virtual com catálogo de produtos, carrinho de compras e integração com sistema de pagamento.',
    imageUrl: 'https://placehold.co/600x400/1a202c/fb923c?text=E-commerce',
    liveUrl: '#',
    repoUrl: '#',
    tags: ['Next.js', 'Stripe', 'GraphQL']
  }
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
