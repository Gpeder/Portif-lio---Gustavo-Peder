import { experienciasProfissionais } from '../data/experience_items';
import Section from './layout/section';
import ProfessionalExperienceCard from './ui/experience_card';

export default function Experience() {
    return (
        <Section
            id="experiencia"
            title="Experiência Profissional"
            description="Minha trajetória profissional, com foco em desenvolvimento web e colaboração em equipe."
        >
            <div className="max-w-4xl">
                {experienciasProfissionais.map((exp, index) => (
                    <ProfessionalExperienceCard key={index} {...exp} />
                ))}
            </div>
        </Section>
    );
}
