import { useState } from 'react';
import { projetos } from '../data/project_items';
import ProjectModal from './ui/project_modal';
import Section from './layout/section';
import type { ProjectItem } from '@/types/portifolio';
import ProjectCard from './ui/ProjectCard';

const tecnologiasUnicas = Array.from(
    new Set(projetos.flatMap((p) => p.tecnologias))
).sort();

export default function Projects() {
    const [activeProject, setActiveProject] = useState<ProjectItem | null>(null);
    const [filtro, setFiltro] = useState<string | null>(null);

    return (
        <>
            <Section
                id="projetos"
                title="Projetos"
                description="Confira alguns dos projetos que desenvolvi, aplicando as melhores práticas e tecnologias modernas."
            >
                <div className="flex flex-wrap gap-2 mb-8">
                    <button
                        onClick={() => setFiltro(null)}
                        className={`px-3 py-1.5 text-xs rounded-md border transition-colors cursor-pointer ${filtro === null
                                ? 'text-accent border-accent/30 bg-accent-soft'
                                : 'text-muted-foreground border-border hover:text-foreground hover:border-accent/20'
                            }`}
                    >
                        Todos
                    </button>
                    {tecnologiasUnicas.map((tech) => (
                        <button
                            key={tech}
                            onClick={() => setFiltro(filtro === tech ? null : tech)}
                            className={`px-3 py-1.5 text-xs rounded-md border transition-colors cursor-pointer ${filtro === tech
                                    ? 'text-accent border-accent/30 bg-accent-soft'
                                    : 'text-muted-foreground border-border hover:text-foreground hover:border-accent/20'
                                }`}
                        >
                            {tech}
                        </button>
                    ))}
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {projetos.map((projeto) => {
                        const ativo = filtro === null || projeto.tecnologias.includes(filtro);
                        return (
                            <div
                                key={projeto.name}
                                className={`transition-all duration-300 ${ativo ? 'opacity-100' : 'opacity-20 pointer-events-none scale-[0.98]'
                                    }`}
                            >
                                <ProjectCard
                                    {...projeto}
                                    onClick={() => setActiveProject(projeto)}
                                />
                            </div>
                        );
                    })}
                </div>
            </Section>

            <ProjectModal projeto={activeProject} onClose={() => setActiveProject(null)} />
        </>
    );
}
