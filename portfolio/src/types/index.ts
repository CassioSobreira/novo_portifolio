// Usar tipos ajuda a evitar erros e melhora a autocompletar do editor.

export interface Project {
  title: string;
  description: string;
  imageUrl: string;
  liveUrl?: string; // O '?' torna a propriedade opcional
  repoUrl?: string;
  tags?: string[];
}
