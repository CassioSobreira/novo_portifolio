import type { Project } from '../../types';
import { ExternalLink, Github } from 'lucide-react';

interface ProjectCardProps {
  project: Project;
}

const ProjectCard = ({ project }: ProjectCardProps) => {
  const { title, description, imageUrl, liveUrl, repoUrl, tags } = project;

  return (
    <div className="bg-gray-800/50 rounded-lg overflow-hidden group border border-transparent hover:border-orange-400/50 transition-all duration-300">
      <div className="relative overflow-hidden">
        <img 
          src={imageUrl} 
          alt={`Imagem do projeto ${title}`} 
          className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
        />
        <div className="absolute inset-0 bg-black/50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 space-x-4">
          {liveUrl && (
            <a href={liveUrl} target="_blank" rel="noopener noreferrer" className="text-white bg-orange-500/80 p-3 rounded-full hover:bg-orange-500 transition-colors">
              <ExternalLink size={24} />
            </a>
          )}
          {repoUrl && (
             <a href={repoUrl} target="_blank" rel="noopener noreferrer" className="text-white bg-gray-700/80 p-3 rounded-full hover:bg-gray-700 transition-colors">
              <Github size={24} />
            </a>
          )}
        </div>
      </div>
      <div className="p-5">
        <h3 className="text-xl font-bold text-white">{title}</h3>
        <p className="text-gray-400 mt-2 text-sm">{description}</p>
        <div className="mt-4 flex flex-wrap gap-2">
            {tags?.map(tag => (
                <span key={tag} className="bg-orange-400/20 text-orange-300 text-xs font-semibold px-2.5 py-0.5 rounded-full">
                    {tag}
                </span>
            ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
