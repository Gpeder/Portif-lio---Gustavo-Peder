import Section from './layout/section';
import FormationCard from './ui/formation_card';
import { academica, cursos_intensivos, idiomas } from '../data/formation_items';

export default function Formation() {
    return (
        <Section
            id="formacao"
            title="Formação"
            description="Minha jornada educacional e desenvolvimento profissional."
        >
            <FormationCard
                academica={academica}
                cursos_intensivos={cursos_intensivos}
                idiomas={idiomas}
            />
        </Section>
    );
}
