import { useState } from 'react';
import { projetos } from '../data/project_items';
import ProjectModal from './ui/project_modal';
import { Section } from './ui/section';
import type { ProjectItem } from '@/types/portifolio';
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from '@/components/ui/carousel';
import ProjectCard from './ui/ProjectCard';

export default function Projects() {
    const [activeProject, setActiveProject] = useState<ProjectItem | null>(null);

    return (
        <>
            <Section
                id="projetos"
                title="Projetos"
                description="Confira alguns dos projetos que desenvolvi, aplicando as melhores práticas e tecnologias modernas."
            >
                <Carousel opts={{ align: 'start', loop: false }} className="w-full">
                    <CarouselContent>
                        {projetos.map((projeto, index) => (
                            <CarouselItem
                                key={index}
                                className="basis-full md:basis-1/2 lg:basis-1/3"
                            >
                                <ProjectCard
                                    {...projeto}
                                    onClick={() => setActiveProject(projeto)}
                                />
                            </CarouselItem>
                        ))}
                    </CarouselContent>
                    {projetos.length > 3 && (
                        <>
                            <CarouselPrevious />
                            <CarouselNext />
                        </>
                    )}
                </Carousel>
            </Section>
            <ProjectModal projeto={activeProject} onClose={() => setActiveProject(null)} />
        </>
    );
}
